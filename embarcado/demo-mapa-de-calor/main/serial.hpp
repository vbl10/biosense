#ifndef SERIAL_HPP
#define SERIAL_HPP
#include "driver/uart.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "freertos/queue.h"
#include "pthread.h"

class Serial {
    static constexpr unsigned buffer_size = 2048U;
public:
    static constexpr uart_port_t porta = UART_NUM_0;
    
    Serial() = delete;
    
    static void inicializar() {
        uart_config_t uart_config = {
            .baud_rate = 115200,
            .data_bits = UART_DATA_8_BITS,
            .parity = UART_PARITY_DISABLE,
            .stop_bits = UART_STOP_BITS_1,
            .flow_ctrl = UART_HW_FLOWCTRL_DISABLE,
            .source_clk = UART_SCLK_DEFAULT,
        };
        uart_driver_install(porta, buffer_size, 0, 20, &event_queue, 0);
        uart_param_config(porta, &uart_config);
        uart_set_pin(porta, UART_PIN_NO_CHANGE, UART_PIN_NO_CHANGE, UART_PIN_NO_CHANGE, UART_PIN_NO_CHANGE);

        pthread_mutex_init(&mtx, NULL);

        xTaskCreate(uart_event_task, "uart_event_task", 3072, NULL, 12, &task);
    }
    static void encerrar() {
        vTaskDelete(task);
        uart_driver_delete(porta);
        pthread_mutex_destroy(&mtx);
    }

    static void ler(uint8_t* dst, uint32_t qtd, TickType_t espera = portMAX_DELAY) {
        uart_read_bytes(porta, dst, qtd, espera);
    }

    static void escrever(const uint8_t* src, uint32_t qtd) {
        uart_write_bytes(porta, src, qtd);
    }

    static void trancar() {
        pthread_mutex_lock(&mtx);
    }

    static void liberar() {
        pthread_mutex_unlock(&mtx);
    }

private:
    class Guarda {
    public:
        Guarda() {
            trancar();
        }
        ~Guarda() {
            liberar();
        }
    };
public:
    static Guarda guardar() {
        return Guarda();
    }

    typedef void (*Tratador)(uart_event_t, void*);
    static void registrar(Tratador novo_tratador, void* novo_args = nullptr) {
        tratador = novo_tratador;
        args = novo_args;
    }

private:
    static void uart_event_task(void* arg) {
        uart_event_t event;
        while (true) {
            //Waiting for UART event.
            if (xQueueReceive(event_queue, (void *)&event, (TickType_t)portMAX_DELAY)) {
                switch (event.type) {
                case UART_DATA:
                    tratador(event, args);
                    break;
                case UART_FIFO_OVF:
                    uart_flush_input(UART_NUM_0);
                    xQueueReset(event_queue);
                    break;
                case UART_BUFFER_FULL:
                    uart_flush_input(UART_NUM_0);
                    xQueueReset(event_queue);
                    break;
                default:
                    break;
                }
            }
        }
        vTaskDelete(NULL);
    }

    private:
    static TaskHandle_t task;
    static QueueHandle_t event_queue;
    static pthread_mutex_t mtx;
    static Tratador tratador;
    static void* args;
};

pthread_mutex_t Serial::mtx;
TaskHandle_t Serial::task;
QueueHandle_t Serial::event_queue;
Serial::Tratador Serial::tratador = nullptr;
void* Serial::args = nullptr;

#endif