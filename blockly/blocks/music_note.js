Blockly.Blocks['music_note'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("http://www.icone-png.com/png/16/15657.png", 15, 15, "*"))
        .appendField("Note")
        .appendField(
            new Blockly.FieldDropdown(
                [
                    ["C (Do)", "C"],
                    ["D (Ré)", "D"],
                    ["E (Mi)", "E"],
                    ["F (Fa)", "F"],
                    ["G (Sol)", "G"],
                    ["A (La)", "A"],
                    ["B (Si)", "B"]
                ]
            ),
            "note"
        )
        .appendField("Duration")
        .appendField(new Blockly.FieldTextInput("1"), "duration");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);
  }
};