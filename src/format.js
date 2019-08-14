/*
* Created on 2019/8/14
* Author: MaHua_A
* Copyright 2019 by OreCraft Studio
* DO NOT MODIFY THESE WORDS
*/

function onEnable(){
    Bukkit.getLogger().info('测试插件');

}

__plugin.getCommand('mahua').setExecutor​(new org.bukkit.command.CommandExecutor({
    onCommand:function (sender, command, label, args){

        Bukkit.getLogger().info('test');


    }
}));

Bukkit.getPluginManager​().registerEvent((org.bukkit.event.player.PlayerJoinEvent.class),CommonEventListener,org.bukkit.event.EventPriority.NORMAL,new org.bukkit.plugin.EventExecutor({execute:function (listener,event){  Bukkit.getLogger().info('玩家加入事件触发');
    }}),__plugin,false);