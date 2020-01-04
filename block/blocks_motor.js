
//Block from IKB1 

module.exports = function(Blockly){
  'use strict';
var motor_colour=Blockly.Msg.MUSIC_HUE ;
Blockly.Blocks['WIT_motor'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("set motor")
      .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"]]), "ch")
      .appendField("direction")
      .appendField(new Blockly.FieldDropdown([["Forward","1"], ["Backward", "2"]]), "dir");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};

Blockly.Blocks['WIT_servo'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("set servo")
      .appendField(new Blockly.FieldDropdown([["1 (D23)","1"], ["2 (D19)","2"], ["3 (D18)","3"], ["4 (D5)","4"], ["5 (D4)","5"], ["6 (D2)","6"], ["7 (D15)","7"]]), "ch");
    this.appendValueInput("angle")
      .setCheck("Number")
      .appendField("degree");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};

Blockly.Blocks['WIT_servo2'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("set servo")
      .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "ch")
      .appendField("direction")
      .appendField(new Blockly.FieldDropdown([["Forward","1"], ["Backward", "2"]]), "dir");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};
Blockly.Blocks['WIT_motor_forward'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Move Forward at speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};
Blockly.Blocks['WIT_motor_backward'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Move Backward at speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};
Blockly.Blocks['WIT_motor_forward2'] = {
  init: function() {
    this.appendValueInput("speed1")
      .setCheck("Number")
      .appendField("Move Forward left wheel at speed");
    this.appendDummyInput()
      .appendField("%");
      this.appendValueInput("speed2")
      .setCheck("Number")
      .appendField("and right wheel at speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};
Blockly.Blocks['WIT_motor_backward2'] = {
  init: function() {
    this.appendValueInput("speed1")
      .setCheck("Number")
      .appendField("Move Backward left wheel at speed");
    this.appendDummyInput()
      .appendField("%");
      this.appendValueInput("speed2")
      .setCheck("Number")
      .appendField("and right wheel at speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};
Blockly.Blocks['WIT_motor_turn_left'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Turn Left at speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};
Blockly.Blocks['WIT_motor_turn_right'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Turn Right at speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};
Blockly.Blocks['WIT_motor_spin_left'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Spin Left at speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};
Blockly.Blocks['WIT_motor_spin_right'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Spin Right at speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};
Blockly.Blocks['WIT_motor_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop Moving");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};
Blockly.Blocks['WIT_motor_stop_ch'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Stop Moving Ch")
      .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"]]), "ch")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};

Blockly.Blocks['Run_following_of_line'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("speed for line following");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};


}
