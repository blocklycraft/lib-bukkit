Blockly.JavaScript['on_event'] = function(block) {
    var value_event = Blockly.JavaScript.valueToCode(block, 'event', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_priority = block.getFieldValue('priority');
    var value_ignore_cancel = Blockly.JavaScript.valueToCode(block, 'ignore_cancel', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
    var event_class = value_event;
    var priority = '';
    if(dropdown_priority === 'high'){
        priority = 'org.bukkit.event.EventPriority.HIGH'
    }
    if(dropdown_priority === 'normal'){
        priority = 'org.bukkit.event.EventPriority.NORMAL'
    }
    if(dropdown_priority === 'low'){
        priority = 'org.bukkit.event.EventPriority.LOW'
    }
    var exec = '';
    exec += 'new org.bukkit.plugin.EventExecutor({execute:function (listener,event){'+statements_code+'}})';
    var code = 'Bukkit.getPluginManager​().registerEvent('+event_class+',CommonEventListener,'+priority+','+exec+',__plugin,'+value_ignore_cancel+');\n';
    return code;
};

Blockly.JavaScript['event_player'] = function(block) {
    var dropdown_event = block.getFieldValue('event');
    // TODO: Assemble JavaScript into code variable.
    var event_class = '';
    if(dropdown_event === 'join'){
        event_class = 'org.bukkit.event.player.PlayerJoinEvent.class'
    }
    return [event_class, Blockly.JavaScript.ORDER_NONE];
};