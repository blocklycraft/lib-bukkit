/*
* Created on 2019/8/11
* Author: MaHua_A
* Copyright 2019 by OreCraft Studio
* DO NOT MODIFY THESE WORDS
*/

Blockly.JavaScript['on_enable'] = function (block) {
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
    var code = 'function onEnable(){\n' + statements_code + '\n}\n';
    return code;
};

Blockly.JavaScript['write_log'] = function (block) {
    var dropdown_type = block.getFieldValue('type');
    var value_content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);

    var code = 'Bukkit.getLogger().' + dropdown_type + '(' + value_content + ');\n';
    return code;
};

Blockly.JavaScript['broadcast_0'] = function (block) {
    var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);

    var code = 'Bukkit.broadcastMessage(' + value_msg + ');\n';
    return code;
};

Blockly.JavaScript['broadcast_1'] = function (block) {
    var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);
    var value_permission = Blockly.JavaScript.valueToCode(block, 'permission', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'Bukkit.broadcast('+value_msg+','+value_permission+');\n';
    return code;
};