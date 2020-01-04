module.exports = function(Blockly) {
  "use strict";
  Blockly.Blocks["adc_pin_dummy_input"] = {
    init: function() {
      
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["io_pin_dummy_input"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["BUILD IN LED (gpio2)", "2"],
		  ["BUZZER (gpio14)", "14"],
          ["SW1(gpio1)", "1"],
		  ["SW2(gpio2)", "2"],
          ["KNOB (gpio27)", "27"]
          
        ]), "IO_PIN");
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

};

