enum MSG {
    ENVIAR_QUADRO = 'A'
};

struct ponto {
    int x, y;
};

constexpr uint8_t w = 20, h = 16;

uint8_t mapa[w * h] = { 0 };
ponto bolinha = { 0, 0 };

void setup() {
  Serial.begin(115200);
  Serial.setTimeout(1000);
}

void loop() {

  if (Serial.available()) {
    uint8_t msg;
    Serial.readBytes(&msg, 1);
    switch (msg) {
    case MSG::ENVIAR_QUADRO:
      mapa[bolinha.x + bolinha.y * w] = 0;
      bolinha.x++;
      if (bolinha.x >= w) {
          bolinha.x = 0;
          bolinha.y++;
          if (bolinha.y >= h) {
              bolinha.y = 0;
          }
      }
      mapa[bolinha.x + bolinha.y * w] = 255;
      Serial.write(mapa, sizeof(mapa));
      break;
    }
  }
  else delay(10);
}