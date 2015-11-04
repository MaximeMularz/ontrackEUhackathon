Blockly.Blocks['watch'] = {
  init: function() {
    this.appendValueInput("time")
        .appendField("Timer");
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};