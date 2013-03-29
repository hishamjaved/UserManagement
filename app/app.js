Ext.application({
    requires:['UserManagement.store.User'],
    controllers: ["Main"],
    views: ["Main","UserList"],
    models:["User"],
    stores:["User"],

    name: 'UserManagement',

    autoCreateViewport: true,
    launch: function () {
        loadDefaultData()
    }
});

function loadDefaultData() {
    var users = new Array();
    users.push({id: 1,
        firstName: 'Administrator',
        lastName: '',
        email: 'admin@zintechnologies.com',
        userName: 'admin',
        password: 'admin',
        city: 'Lahore',
        zipCode: '54000',
        country: 'Pakistan',
        dateCreated: new Date()});

    localStorage.setItem('UserData', Ext.JSON.encode(users));
}
