/**
 * Created with IntelliJ IDEA.
 * User: hisham.javed
 * Date: 3/29/13
 * Time: 10:59 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('UserManagement.model.User', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'firstName', type: 'string'},
        {name: 'lastName', type: 'string'},
        {name: 'email', type: 'string'}
    ]
});
