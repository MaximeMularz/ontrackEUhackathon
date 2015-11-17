goog.provide('Blockly.Arduino.train');

goog.require('Blockly.Arduino');

Blockly.Arduino.train_watch = function() {
  var code = 'digitalWrite("Maxime");\n';
  return code;
};

Blockly.Arduino.train_forward = function() {
    return sendRaw(
        'forward',
        '4700,600,1100,700,1050,650,300,1300,350,1350,300,1300,400,1300,300,1350,350,1400,1000,700,300,1350,350,1350,1050,650,300',
        '1'
    );
};

Blockly.Arduino.train_brake = function() {
    return sendRaw(
        'brake',
        '4700,600,1100,700,1050,650,300,1300,350,1350,300,1300,400,1300,300,1350,350,1400,1000,700,300,1350,350,1350,1050,650,300',
        '1'
    );
};

Blockly.Arduino.train_reverse = function() {
    return sendRaw(
        'reverse',
        '4700,600,1100,700,1050,650,300,1300,350,1350,300,1300,400,1300,300,1350,350,1400,1000,700,300,1350,350,1350,1050,650,300',
        '1'
    );
};

Blockly.Arduino.train_dingding = function() {
    return sendRaw(
        'dingding',
        '4700,600,1100,700,1050,650,300,1300,350,1350,300,1300,400,1300,300,1350,350,1400,1000,700,300,1350,350,1350,1050,650,300',
        '1'
    );
};

Blockly.Arduino.train_woowoo = function() {
    return sendRaw(
        'woowoo',
        '4700,600,1100,700,1050,650,300,1300,350,1350,300,1300,400,1300,300,1350,350,1400,1000,700,300,1350,350,1350,1050,650,300',
        '1'
    );
};

function sendRaw(name, rawCodes, sizeOfRawCodes) {
    Blockly.Arduino.definitions_['define_iremote'] = '#include <IRremote.h>\n';
    Blockly.Arduino.definitions_['var_irsend'] = 'IRsend irsend;\n';
    Blockly.Arduino.definitions_['var_raw_codes_' + name] = 'unsigned int rawCodes' + ucfirst(name) + '[] = {' + rawCodes + '};\n';

    var code = 'irsend.sendRaw(rawCodes' + ucfirst(name) + ', ' + sizeOfRawCodes + ', 38);\n';
    return code;
}

function ucfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}