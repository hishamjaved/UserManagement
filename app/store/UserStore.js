Ext.define('UserManagement.store.UserStore',{
    extend:'Ext.data.Store',
    model:'UserManagement.model.UserModel',
    storeId:'myUserStore', //storeId must be the same as class name
    autoLoad: false,
    proxy:{
        type: 'localstorage',
        id : 'myProxy'
    },
    constructor:function(){
        this.callParent(arguments);
    }
});
