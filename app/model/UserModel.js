Ext.define('UserManagement.model.UserModel', {
    extend: 'Ext.data.Model',
    idProperty:'userId',
    fields: [
        {name: 'userId', type: 'int'},
        {name: 'firstName', type: 'string'},
        {name: 'lastName', type: 'string'},
        {name: 'fullName', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'userName', type: 'string'},
        {name: 'password', type: 'string'},
        {name: 'city', type: 'string'},
        {name: 'zipCode', type: 'string'},
        {name: 'country', type: 'string'},
        {name: 'jobDescription', type: 'string'},
        {name: 'dateCreated', type: 'date',dateFormat: 'Y-m-d H:i:s'}
    ],
    constructor:function(){
        this.callParent(arguments);
        this.set('firstName',this.get('firstName'));
    },
    set:function(fieldName,value){
        if('fullName'===fieldName){
            this.set('firstName',this.get('firstName'));
            return;
        }
        this.callParent(arguments);
        if('firstName'===fieldName || 'lastName'===fieldName){
            var fullName =[this.get('firstName'),this.get('lastName')].join(' ');
            this.callParent(['fullName',fullName]);
        }
    }
});
