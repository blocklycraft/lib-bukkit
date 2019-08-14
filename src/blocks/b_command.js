Blockly.Blocks['on_command'] = {
    init: function() {
        this.appendValueInput("command")
            .setCheck("String")
            .appendField("当命令");
        this.appendDummyInput()
            .appendField("被")
            .appendField(new Blockly.FieldDropdown([["任意发送者","any_sender"], ["玩家","player"], ["控制台","console"]]), "sender_type")
            .appendField("输入");
        this.appendStatementInput("code")
            .setCheck(null)
            .appendField("则");
        this.setInputsInline(true);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['on_event'] = {
    init: function() {
        this.appendValueInput("event")
            .setCheck("Event")
            .appendField("监听事件");
        this.appendDummyInput()
            .appendField("优先级")
            .appendField(new Blockly.FieldDropdown([["高","high"], ["普通","normal"], ["低","low"]]), "priority");
        this.appendValueInput("ignore_cancel")
            .setCheck("Boolean")
            .appendField("忽略取消");
        this.appendStatementInput("code")
            .setCheck(null);
        this.setInputsInline(true);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['event_player'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("玩家")
            .appendField(new Blockly.FieldDropdown([["加入","join"]]), "event");
        this.setOutput(true, "Event");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};