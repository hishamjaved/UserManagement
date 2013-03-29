/**
 * Created with IntelliJ IDEA.
 * User: hisham.javed
 * Date: 3/29/13
 * Time: 12:42 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('UserManagement.view.UserList', {
    extend: 'Ext.panel.Panel',
    xtype: 'userlist',
    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'UserManagement.store.User'
    ],
    layout: 'vbox',
    width: '100%',
    height: '100%',
    border: false,
    margin: 5,

    items: [
        {
            xtype: 'gridpanel',
            flex: 1,
            title: 'List of all users',
            store: Ext.data.StoreManager.lookup('Users'),
            columns: [
                {header: 'Name', dataIndex: 'firstName'},
                {header: 'Email', dataIndex: 'email', flex: 1}
            ] ,
            listeners:{
                render : function(grid){
                    grid.body.mask('Loading...');
                    var store = grid.getStore();
                    store.loadData(Ext.decode(localStorage.getItem('UserData')));
                    store.load.defer(100, store);
                },
                delay: 200
            }
        }
    ]
});