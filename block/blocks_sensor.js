module.exports = function(Blockly){
  'use strict';
var sensor_colour= Blockly.Msg.SENSOR_HUE ;
Blockly.Blocks['button_1_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/sw12x12.png", 20, 20, "*"))
        .appendField("Swith 1 is pressed");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(sensor_colour);
 this.setTooltip("get GREEN button pressed or not");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['button_2_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/sw12x12.png", 20, 20, "*"))
        .appendField("Swith 2 is pressed");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(sensor_colour);
 this.setTooltip("get RED button pressed or not");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['analog_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Analog sensor ")
        .appendField(new Blockly.FieldDropdown([
                                            ["1 (D35)", "35"],
                                            ["2 (D34)", "34"],
                                            ["3 (D39)", "39"],
                                            ["4 (D36)", "36"],
                                            ["5 (D12)", "12"],
                                            ["5 (D13)", "13"]]), "pin");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(sensor_colour);
 this.setTooltip("read analog value from pin");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['digital_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Digital sensor ")
        .appendField(new Blockly.FieldDropdown([
                                            ["1 (D35)", "35"],
                                            ["2 (D34)", "34"],
                                            ["3 (D39)", "39"],
                                            ["4 (D36)", "36"],
                                            ["5 (D12)", "12"],
                                            ["5 (D13)", "13"]]), "pin");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(sensor_colour);
 this.setTooltip("read digital value from pin");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['TCS_read_rgb'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TCS read value ")
        .appendField(new Blockly.FieldDropdown([["Red","1"], ["Green","2"], ["Blue","3"]]), "color");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(sensor_colour);
 this.setTooltip("TCS read RGB value");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['Knob_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/bmx055.png", 20, 20, "*"))
        .appendField("read Knob status");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(sensor_colour);
 this.setTooltip("read Knob status");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['sw1_press'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wait for Button press");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(sensor_colour);
    this.setTooltip("");
  }
};

Blockly.Blocks['WIT_beep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Buzzer beep");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("Buzzer beep");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['WIT_beep_delay'] = {
  init: function() {
    this.appendValueInput("_delay")
      .setCheck("Number")
      .appendField("Buzzer delay ");
    this.appendDummyInput()
      .appendField("ms.");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
    this.setTooltip("");
  }
};
Blockly.Blocks['WIT_beep_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Buzzer on");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("Buzzer beep");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['WIT_beep_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Buzzer off");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("Buzzer beep");
 this.setHelpUrl("");
  }
};

}