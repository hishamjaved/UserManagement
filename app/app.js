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
    //Listed controllers will be instantiate at application load time
    controllers: ["MainController", "UserController"],
    autoCreateViewport: true,
    launch: function () {
        //Load Application Startup data

        loadDefaultData();
    }
});

function loadDefaultData() {
    var users = new Array();
    users.push({
            userId: 1,
            firstName: 'Administrator',
            lastName: '',
            fullName: 'Hisham Javed',
            email: 'administrator@zin.com',
            userName: 'admin',
            password: 'admin',
            dateCreated: Ext.Date.format(new Date(),"Y-m-d H:i:s")
        },
        {
            userId: 2,
            firstName: 'Super',
            lastName: 'Admin',
            fullName: 'Super Admin',
            email: 'super-admin@zin.com',
            userName: 'superadmin',
            password: 'admin123',
            dateCreated: Ext.Date.format(new Date(),"Y-m-d H:i:s")
        });

    localStorage.setItem('UserMgmt', Ext.JSON.encode(users));
}
