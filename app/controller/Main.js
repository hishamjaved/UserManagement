Ext.define('UserManagement.controller.Main', {
    extend: 'Ext.app.Controller',
    config :{
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

