#include <stdio.h>
#include <inttypes.h>
#include "serial.hpp"
#include "freertos/task.h"
#include "freertos/queue.h"
#include "esp_system.h"
#include "esp_log.h"


#define PORTA_UART UART_NUM_1

enum MSG {
    INICIAR,
    ENCERRAR
};

struct ponto {
    int x, y;
};

constexpr uint8_t w = 16, h = 16;

uint32_t periodo_amostragem_ms = 1000;
uint32_t tp0 = 0;
bool em_sessao = false;
float mapa[w * h] = { 0 };
ponto bolinha = { 0, 0 };

void processar_entrada(uart_event_t ev, void* args) {
    uint8_t msg;
    Serial::ler(&msg, 1);

    switch (msg) {
    case MSG::INICIAR:
    {
        auto guarda = Serial::guardar();
        
        em_sessao = true;
    
        bolinha = { 0, 0 };
        for (int i = 0; i < w * h; i++) mapa[i] = 0.0f;

        Serial::ler((uint8_t*)&periodo_amostragem_ms, sizeof(periodo_amostragem_ms));

        Serial::escrever(&w, sizeof(w));
        Serial::escrever(&h, sizeof(h));
        
        tp0 = esp_log_timestamp() / portTICK_PERIOD_MS;
    }
        break;

    case MSG::ENCERRAR:
        em_sessao = false;
        break;
    }
}

extern "C" void app_main(void) {

    Serial::inicializar();

    Serial::registrar(processar_entrada);

    while (true) {
        if (em_sessao) {
            mapa[bolinha.x + bolinha.y * w] = 0.0f;
            bolinha.x++;
            if (bolinha.x >= w) {
                bolinha.x = 0;
                bolinha.y++;
                if (bolinha.y >= h) {
                    bolinha.y = 0;
                }
            }
            mapa[bolinha.x + bolinha.y * w] = 1.0f;
            {
                auto guarda = Serial::guardar();
    
                if (em_sessao) Serial::escrever((uint8_t*)mapa, sizeof(mapa));
            }

            vTaskDelay(periodo_amostragem_ms / portTICK_PERIOD_MS);
        }
        else {
            vTaskDelay(1000 / portTICK_PERIOD_MS);
        }
    }

    Serial::encerrar();
    
    esp_restart();
}