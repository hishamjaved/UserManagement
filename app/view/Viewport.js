Ext.define('UserManagement.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.Panel',
        'Ext.layout.container.Fit',
        'UserManagement.view.main.Default',
        'Ext.tab.Panel'

    ],
    layout: {
        type: 'fit'
    },
    autoScroll: true,
    border: false,
    minWidth: 1000,
    minHeight: 500,
    items: [
        {xtype: 'default'}
    ]
});