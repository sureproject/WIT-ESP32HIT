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

#include "PCF8574.h"
PCF8574 botton(0x20);
unsigned long timeElapsed;

SSD1306Wire display(0x3c, 21, 22);

#define M1A 25
#define M1B 26
#define M2A 32
#define M2B 33

void wait();
void beep();

void WIT_ESP32HIT(){

  Serial.begin(115200);
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
  display.setFont(ArialMT_Plain_16);
  display.drawString(20,  0, String("Press!"));
  display.drawString(20, 20, String("GREEN Button"));
  display.drawString(20, 40, String("to continue."));
  display.display();
  delay(1000);
  // End Splash Screen //
  
  beep();
  wait();
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

