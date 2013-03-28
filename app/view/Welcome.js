Ext.define('UserManagement.view.Welcome',{
	extend:'Ext.panel.Panel',	
	xtype: 'welcome',
	border:false,
	layout: {
		type: 'vbox',		
    },
    items:[{
    	xtype:'label',
    	text:'Welcome!',
    	cls:'large-welcome'}]
});