module.exports = function(Blockly){
  'use strict';
var sensor_colour= Blockly.Msg.SENSOR_HUE ;
Blockly.Blocks['button_1_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/sw12x12.png", 20, 20, "*"))
        .appendField("GREEN is pressed");
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
        .appendField("RED is pressed");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(sensor_colour);
 this.setTooltip("get RED button pressed or not");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sensor_1_analog'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Analog Sensor 1 (D35)");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(sensor_colour);
 this.setTooltip("get sensor 1 (D35) analog value");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sensor_2_analog'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Analog Sensor 2 (D34)");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(sensor_colour);
 this.setTooltip("get sensor 2 (D34) analog value");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sensor_3_analog'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Analog Sensor 3 (D39)");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(sensor_colour);
 this.setTooltip("get sensor 3 (D39) analog value");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sensor_4_analog'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Analog Sensor 4 (D36)");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(sensor_colour);
 this.setTooltip("get sensor 4 (D36) analog value");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sensor_5_analog'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Analog Sensor 5 (D12)");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(sensor_colour);
 this.setTooltip("get sensor 5 (D12) analog value");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sensor_6_analog'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Analog Sensor 6 (D13)");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(sensor_colour);
 this.setTooltip("get sensor 6 (D13) analog value");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sensor_1_digital'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Digital Sensor 1 (D35)");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(sensor_colour);
 this.setTooltip("get sensor 1 (D35) digital value");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sensor_2_digital'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Digital Sensor 2 (D34)");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(sensor_colour);
 this.setTooltip("get sensor 2 (D34) digital value");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sensor_3_digital'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Digital Sensor 3 (D39)");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(sensor_colour);
 this.setTooltip("get sensor 3 (D39) digital value");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sensor_4_digital'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Digital Sensor 4 (D36)");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(sensor_colour);
 this.setTooltip("get sensor 4 (D36) digital value");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sensor_5_digital'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Digital Sensor 5 (D12)");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(sensor_colour);
 this.setTooltip("get sensor 5 (D12) digital value");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sensor_6_digital'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Digital Sensor 6 (D13)");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(sensor_colour);
 this.setTooltip("get sensor 6 (D13) digital value");
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
        .appendField("Wait for GREEN button press");
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
    this.setColour(sensor_colour);
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
    this.setColour(sensor_colour);
    this.setTooltip("");
  }
};
Blockly.Blocks['WIT_beep_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Buzzer on");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(sensor_colour);
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
    this.setColour(sensor_colour);
 this.setTooltip("Buzzer beep");
 this.setHelpUrl("");
  }
};

}
