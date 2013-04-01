Ext.define('UserManagement.controller.UserController',{
    extend:'Ext.app.Controller',
    config:{
        models:["UserModel"],
        stores:["UserStore"],
        views: ["user.UserList"],
        init:function(){
            this.control({

            })
        }
    }
});
