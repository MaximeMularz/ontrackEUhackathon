goog.require('Blockly.Arduino');

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
            .appendField(new Blockly.FieldImage("./img/train_forward.png", 30, 30, "*"))
            .appendField("Forward");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(120);
    }
};

Blockly.Blocks['train_brake'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("./img/stop.png", 30, 30, "*"))
            .appendField("Stop");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(120);
    }
};

Blockly.Blocks['train_reverse'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("./img/train_forward.png", 30, 30, "*"))
            .appendField("Reverse");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(120);
    }
}

Blockly.Blocks['train_dingding'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("http://www.icone-png.com/png/21/20564.png", 30, 30, "*"))
            .appendField("Ding Ding");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(290);
    }
};

Blockly.Blocks['train_woowoo'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("http://www.icone-png.com/png/50/50140.png", 30, 30, "*"))
            .appendField("Woo Woo");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(290);
    }
};

Blockly.Blocks['yellow_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("./img/bouton-jaune.png", 30, 30, "*"));
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['green_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("./img/bouton-vert-rond.png", 30, 30, "*"));
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};