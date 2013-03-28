Ext.define('UserManagement.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.Panel',
        'Ext.layout.container.VBox',
        'UserManagement.view.Welcome',
        'Ext.form.Label'
        
    ],
    layout: {
		type:'vbox',
		align:'center',
		pack:'center'
	},	
    items: [{xtype:'welcome'}]
});