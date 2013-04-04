Ext.define('UserManagement.view.user.UserList', {
    extend: 'Ext.grid.Panel',
    xtype: 'userlist',
    title: 'Users',
    // We can use any method from the following 4 choices to assign store into grid or any other component
    // Make sure your storeId has the same name as classname otherwise first two methods will not work
    // 1: store: Ext.data.StoreManager.lookup('UserStore')
    // 2: store: Ext.getStore('UserStore')
    // 3: store: Ext.create('UserManagement.store.UserStore')
    // 4: store: 'UserStore'   Note: For this approach first you must have data in localstorage, otherwise this method will give error
    store:  'UserStore',
    requires: [
        'Ext.toolbar.Paging',
        'Ext.ModelManager',
        'Ext.tip.QuickTipManager',
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.util.*',
        'Ext.ux.data.PagingMemoryProxy',
        'Ext.grid.CellEditor',
        'Ext.grid.plugin.CellEditing',
        'Ext.grid.plugin.RowEditing',
        'UserManagement.store.UserStore'
    ],
    border: false,
    cls:'user-grid',
    margin: 5,
    flex:1,
    loadMask: true,
    columns:[
        {text:'Name', dataIndex:"fullName",flex:25,sortable: true},
        {text:'Email', dataIndex:"email",flex:35,sortable: true},
        {text:'Login ID', dataIndex:"userName",flex:20,sortable: true},
        {text:'Created', dataIndex:"dateCreated",flex:20,sortable: true,xtype: 'datecolumn',format:'Y-m-d H:i:s'}
    ],
    listeners:{
        afterrender:function(){
            //First Method to load Data
            this.store.loadData(Ext.decode(localStorage.getItem('UserMgmt')));
            //Second Method
            //Ext.getStore('UserStore').loadData(Ext.decode(localStorage.getItem('UserMgmt')));
        }
    },
    initComponent: function() {
        this.callParent(arguments);
    }
});