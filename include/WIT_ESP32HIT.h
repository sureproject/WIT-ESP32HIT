#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include <Wire.h>  
#include <SPI.h>
#include "SSD1306Wire.h"
#include "SH1106.h"
#include "WIT_Motor_drive.h"
#include "WIT_Servo_lib.h"
#include "WIT_IO.h"
#include "Adafruit_TCS34725.h"
#include "PCF8574.h"

#include "vector"
#define TONE_CHANNEL 1
static const uint8_t KB_BUZZER = 14;
#define BUZZER_PIN 14
#define SOUND_PWM_CHANNEL 0
#define SOUND_RESOLUTION 8
#define SOUND_ON (1 << (SOUND_RESOLUTION - 1))
#define SOUND_OFF 0

PCF8574 botton(0x20);
unsigned long timeElapsed;

SSD1306Wire display(0x3c, 21, 22);
Adafruit_TCS34725 tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_50MS, TCS34725_GAIN_1X);

#define M1A 25
#define M1B 26
#define M2A 32
#define M2B 33

void wait();
void beep();
int TCS_Read(int C=1);


class KB_music
{
 public:
  void begin(void);
  void tone(unsigned int frequency, unsigned long duration = 0);
  void noTone();
  void song(std::vector<int> notes,int duration);

 protected:
  uint16_t channel;
  uint16_t bit;

 private:
};



void KB_music::begin(void) {
    //ledcSetup(TONE_CHANNEL, 5000, 13);
}

void KB_music::tone(unsigned int frequency, unsigned long duration)
{
    if (ledcRead(TONE_CHANNEL)) {
        log_e("Tone channel %d is already in use", ledcRead(TONE_CHANNEL));
        return;
    }
    ledcAttachPin(KB_BUZZER, TONE_CHANNEL);
    ledcWriteTone(TONE_CHANNEL, frequency);
    if (duration) {
        delay(duration);
        noTone();
    }
}

void KB_music::noTone()
{
    ledcDetachPin(KB_BUZZER);
    ledcWrite(TONE_CHANNEL, 0);
}

void KB_music::song(std::vector<int>notes,int duration)
{
    for(int freq : notes){
        if(freq == -1){
            noTone();
            delay(duration);
        }else{
            tone(freq,duration);
        }
    }
}

KB_music music = KB_music();

void tone(int pin, int frequency, int duration) {
  ledcSetup(0, frequency, 8);
  ledcAttachPin(pin, 0);
  ledcWrite(0, SOUND_ON);
  delay(duration);
  ledcWrite(0, SOUND_OFF);
}

void WIT_ESP32HIT(){

  Serial.begin(115200);
  music.begin();
  
  // Read sensor for 0-1013 (2^10=1024)
  analogReadResolution(10); 
  
  display.init();
  display.flipScreenVertically();
 
  display.setFont(ArialMT_Plain_16);
  display.drawString(25,0,"WiT-ESP32");
  display.drawString(30,20,"ITMAKER");
  display.drawString(25,40,"Version 1.0");
  display.display();
  delay(1000);
  
  
  botton.pinMode(P1, INPUT); // สวิท 1
  botton.pinMode(P2, INPUT); // สวิท 2
  
  pinMode(27, INPUT); // Resistor ที่หมุน
  
  botton.pinMode(P3, OUTPUT); // LED
  botton.pinMode(P4, OUTPUT); // LED
  botton.pinMode(P5, OUTPUT); // LED
  botton.pinMode(P6, OUTPUT); // LED
  botton.pinMode(P7, OUTPUT); // LED
  
  botton.begin();
  
  pinMode(M1A,OUTPUT);
  pinMode(M1B,OUTPUT);
  pinMode(M2A,OUTPUT);
  pinMode(M2B,OUTPUT);
  
  ledcSetup(6, 5000, 8);
  ledcSetup(7, 5000, 8);
  ledcSetup(4, 5000, 8);
  ledcSetup(5, 5000, 8);
  
  ledcAttachPin(25, 6);
  ledcAttachPin(26, 7);
  ledcAttachPin(32, 4);
  ledcAttachPin(33, 5);
 
  if (tcs.begin()) {
     Serial.println("Found Color sensor");
  }
  
  for(int i=0;i<3;i++){
	  botton.digitalWrite(P3, HIGH);
	  botton.digitalWrite(P4, HIGH);
	  botton.digitalWrite(P5, HIGH);
	  botton.digitalWrite(P6, HIGH);
	  botton.digitalWrite(P7, HIGH);
	  delay(200);
	  botton.digitalWrite(P3, LOW);
	  botton.digitalWrite(P4, LOW);
	  botton.digitalWrite(P5, LOW);
	  botton.digitalWrite(P6, LOW);
	  botton.digitalWrite(P7, LOW);
	  delay(200);
  }
  
  // Splash Screen //
  for (int i = 120; i >= -80; i -= 20) {
    display.clear();
    display.setFont(ArialMT_Plain_24);
    display.drawString(i, 15, String("Ready!"));
    display.display();
    delay(100);
  }
  
  display.clear();
  /*display.setFont(ArialMT_Plain_16);
  display.drawString(20,  0, String("Press!"));
  display.drawString(20, 20, String("GREEN Button"));
  display.drawString(20, 40, String("to continue."));
  display.display();
  delay(1000);
  // End Splash Screen //
  */
  
  beep();
  //wait();
}

void wait(){
  // Press for Green button press //
  display.clear();
  display.setFont(ArialMT_Plain_16);
  display.drawString(20,  0, String("Press!"));
  display.drawString(20, 20, String("GREEN Button"));
  display.drawString(20, 40, String("to continue."));
  display.display();
  
  int greenButton = 0;
  do{
	greenButton = botton.digitalRead(P1);
  }while(!greenButton);
  // End - Press for Green button press //
}

int TCS_Read(int C=1){
  uint16_t nofilter, red, green, blue;
  //delay(200);
  tcs.getRawData(&red, &green, &blue, &nofilter);
	
  uint32_t sum = nofilter;
  float r, g, b;
  r = red; r /= sum;
  g = green; g /= sum;
  b = blue; b /= sum;
  r *= 256; g *= 256; b *= 256;
  
  //Serial.print("C:\t"); Serial.print(nofilter);
  //Serial.print("\tR:\t"); Serial.print((int)r);
  //Serial.print("\tG:\t"); Serial.print((int)g);
  //Serial.print("\tB:\t"); Serial.print((int)b);
  //Serial.println();
  
  if(C==1) return (int)r;
  else if(C==2) return (int)g;
  else if(C==3) return (int)b;
}

#define _knob 27
int _Knob(){
  return analogRead(_knob);
}
void beep(){
  int _buzzer = 14;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,HIGH);
  delay(200);
  digitalWrite(_buzzer,LOW);
}
void beep(int _delay){
  int _buzzer = 14;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,HIGH);
  delay(_delay);
  digitalWrite(_buzzer,LOW);
}
void beep_on(){
  int _buzzer = 14;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,HIGH);
}
void beep_off(){
  int _buzzer = 14;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,LOW);
}

