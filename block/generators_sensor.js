module.exports = function(Blockly){
  'use strict';

Blockly.JavaScript['button_1_status'] = function(block) {  
  var code = '(botton.digitalRead(P1))';  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['button_2_status'] = function(block) {  
  var code = '(botton.digitalRead(P2))';  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensor_1_analog'] = function(block) {  
  var code = '(analogRead(35))';  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensor_2_analog'] = function(block) {  
  var code = '(analogRead(34))';  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensor_3_analog'] = function(block) {  
  var code = '(analogRead(39))';  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensor_4_analog'] = function(block) {  
  var code = '(analogRead(36))';  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensor_5_analog'] = function(block) {  
  var code = '(analogRead(12))';  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensor_6_analog'] = function(block) {  
  var code = '(analogRead(13))';  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensor_1_digital'] = function(block) {  
  var code = '(analogRead(35)==1023)?0:1';  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensor_2_digital'] = function(block) {  
  var code = '(analogRead(34)==1023)?0:1';  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensor_3_digital'] = function(block) {  
  var code = '(analogRead(39)==1023)?0:1';  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensor_4_digital'] = function(block) {  
  var code = '(analogRead(36)==1023)?0:1';  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensor_5_digital'] = function(block) {  
  var code = '(analogRead(12)==1023)?0:1';  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensor_6_digital'] = function(block) {  
  var code = '(analogRead(13)==1023)?0:1';  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['Knob_status'] = function(block) {  
  var code = '(_Knob())';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['WIT_beep'] = function(block) {  
  var code = 'beep();\n';
  return code;
};
Blockly.JavaScript['WIT_beep_on'] = function(block) {  
  var code = 'beep_on();\n';
  return code;
};
Blockly.JavaScript['WIT_beep_off'] = function(block) {  
  var code = 'beep_off();\n';
  return code;
};
Blockly.JavaScript['WIT_beep_delay'] = function(block) {
  var value_delay = Blockly.JavaScript.valueToCode(block, '_delay', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = 'beep(' + value_delay + ');\n';
  return code;
};

Blockly.JavaScript['sw1_press'] = function(block) {  
  var code = 'wait();\n';
  return code;
};

}