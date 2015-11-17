Blockly.Blocks['train_watch'] = {
    init: function() {
        this.appendValueInput("time")
            .appendField("Timer");
        this.setPreviousStatement(true, "String");
        this.setNextStatement(true, null);
        this.setColour(330);
    }
};

Blockly.Blocks['train_forward'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("http://www.icone-png.com/png/51/51376.png", 100, 100, "*"))
            .appendField("Forward / Avancer");
        this.setPreviousStatement(true);
        this.setColour(120);
    }
};

Blockly.Blocks['train_brake'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("http://www.icone-png.com/png/7/7212.png", 100, 100, "*"))
            .appendField("Brake / Freiner");
        this.setPreviousStatement(true);
        this.setColour(0);
    }
};

Blockly.Blocks['train_reverse'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("http://www.icone-png.com/png/51/51372.png", 100, 100, "*"))
            .appendField("Reverse / Reculer");
        this.setPreviousStatement(true);
        this.setColour(210);
    }
}

Blockly.Blocks['train_dingding'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("http://www.icone-png.com/png/21/20564.png", 100, 100, "*"))
            .appendField("Ding Ding");
        this.setPreviousStatement(true);
        this.setColour(300);
    }
};

Blockly.Blocks['train_woowoo'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("http://www.icone-png.com/png/50/50140.png", 100, 100, "*"))
            .appendField("Woo Woo");
        this.setPreviousStatement(true);
        this.setColour(300);
    }
};