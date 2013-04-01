Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.data.StoreManager',
    'Ext.form.field.Number',
    'Ext.form.field.Date',
    'Ext.tip.QuickTipManager',
    'UserManagement.store.UserStore',
    'UserManagement.model.UserModel',
    'UserManagement.view.user.UserList',
    'UserManagement.view.main.Default',
    'Ext.data.reader.Json'
]);

Ext.application({
    name: 'UserManagement',
    controllers: ["MainController","UserController"],
    autoCreateViewport: true,
    launch: function () {
        loadDefaultData();
    }
});

function loadDefaultData() {
    var users = new Array();
    users.push({
        userId:1,
        firstName: 'Administrator',
        lastName: '',
        fullName: 'Hisham Javed'
       },
        {
            userId:2,
            firstName: 'Super',
            lastName: 'Admin',
            fullName: 'Super Admin'
        });

    localStorage.setItem('UserMgmt', Ext.JSON.encode(users));
}
