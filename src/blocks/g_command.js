Blockly.JavaScript['on_command'] = function (block) {
    var value_command = Blockly.JavaScript.valueToCode(block, 'command', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_sender_type = block.getFieldValue('sender_type');
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');

    var console_sender_check = 'if(!(sender instanceof ConsoleCommandSender)){\n' +
        '\t\t\treturn;\n' +
        '\t\t}\n';
    var player_sender_check = 'if(!(sender instanceof Player)){\n' +
        '\t\t\treturn;\n' +
        '\t\t}\n';
    var check_code = '\n';
    if (dropdown_sender_type === 'player') {
        check_code = player_sender_check;
    }
    if (dropdown_sender_type === 'console') {
        check_code = console_sender_check;
    }
    var code = '';
    var cmdex = 'new org.bukkit.command.CommandExecutor({\n' +
        '\tonCommand:function (sender, command, label, args){\n' +
        check_code +
        statements_code + '\n' +
        '\t\t\n' +
        '\t}\n' +
        '})\n';
    code += '__plugin.getCommand(' + value_command + ').setExecutor​('+cmdex+');';
    return code;
};