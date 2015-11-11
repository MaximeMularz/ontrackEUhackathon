goog.provide('Blockly.Arduino.music_note');

goog.require('Blockly.Arduino');

var buzzerPin = 2;
var tempo = 300;

Blockly.Arduino.music_note = function() {
    Blockly.Arduino.setups_['setup_piezo_buzzer_' + buzzerPin] = 'pinMode(' + buzzerPin + ', OUTPUT);';

    var note = this.getFieldValue('note');
    var duration = this.getFieldValue('duration');
    duration = duration * tempo;

    var tone = 0;
    switch(note) {
        case 'C':
            tone = 1915;
            break;
        case 'D':
            tone = 1700;
            break;
        case 'E':
            tone = 1519;
            break;
        case 'F':
            tone = 1432;
            break;
        case 'G':
            tone = 1275;
            break;
        case 'A':
            tone = 1136;
        case 'B':
            tone = 1014;
            break;
    }

    var code = 'for (long i = 0; i < ' + duration + ' * 1000L; i += '+ tone + ' * 2) {\n';
    code += '\tdigitalWrite(' + buzzerPin + ', HIGH);\n';
    code += '\tdelayMicroseconds(' + tone + ');\n';
    code += '\tdigitalWrite(' + buzzerPin + ', LOW);\n';
    code += '\tdelayMicroseconds(' + tone + ');\n';
    code += '}\n\n';

    // Pause between notes
    code += 'delay(' + tempo + '/ 20);\n\n';

    return code;
};