/**
 * Created with IntelliJ IDEA.
 * User: hisham.javed
 * Date: 3/29/13
 * Time: 12:11 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('UserManagement.store.User',{
    extend:'Ext.data.Store',
    requires:['Ext.data.proxy.LocalStorage'],
    storeId: 'storeUser',
    model:'UserManagement.model.User',
    autoLoad: false,
    //remoteSort : true,
    proxy:{
        id : 'userProxy',
        type: 'localstorage'
    }
});
