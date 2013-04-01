Ext.define('UserManagement.controller.MainController', {
    extend: 'Ext.app.Controller',
    config :{
        views: ["main.Default"],
        init: function(){
            this.control({
                '[action=mainTabPanelAction]':{
                    'tabchange':this.onMainTabPanelChange
                }
            })
        }
    },
    onMainTabPanelChange: function(tabPanel, newTab, oldTab, index){
        alert("Tab Panel:"+tabPanel.id+"; New Tab: "+newTab.itemId+"; Old Tab: "+oldTab.title+"; index:"+index);
    }
});

