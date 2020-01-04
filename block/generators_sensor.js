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

Blockly.JavaScript['analog_sensor'] = function(block) {
  var value_pin = block.getFieldValue('pin');
  var code = `analogRead(${value_pin})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['digital_sensor'] = function(block) {
  var value_pin = block.getFieldValue('pin');
  var code = `(analogRead(${value_pin})>500)?1:0`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};



Blockly.JavaScript['TCS_read_rgb'] = function(block) {
  var value_color = block.getFieldValue('color');  
  var code = `
TCS_Read(${value_color})
`;
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