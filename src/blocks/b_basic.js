/*
* Created on 2019/8/11
* Author: MaHua_A
* Copyright 2019 by OreCraft Studio
* DO NOT MODIFY THESE WORDS
*/

Blockly.Blocks['on_enable'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("当插件启用时");
        this.appendStatementInput("code")
            .setCheck(null);
        this.setColour(230);
        this.setTooltip("当插件启用时，将会执行此处");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['write_log'] = {
    init: function() {
        this.appendValueInput("content")
            .setCheck("String")
            .appendField("输出日志")
            .appendField(new Blockly.FieldDropdown([["信息","info"], ["警告","warn"]]), "type");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("向控制台输出日志");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['broadcast_0'] = {
    init: function() {
      this.appendValueInput("msg")
          .setCheck("String")
          .appendField("发送广播消息");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['broadcast_1'] = {
    init: function() {
      this.appendValueInput("msg")
          .setCheck("String")
          .appendField("发送广播消息");
      this.appendValueInput("permission")
          .setCheck("String")
          .appendField("向拥有");
      this.appendDummyInput()
          .appendField("权限的玩家");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
