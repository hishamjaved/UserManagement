Ext.onReady(function () {
    alert("Hello");

    var loginBox = Ext.create('Ext.panel.Panel', {
        width: 335,
        bodyCls: 'sign-box',
        layout: {
            type: 'vbox'
        },
        items: [
            {//Box Header Layout
                layout: 'hbox',
                border: false,
                bodyCls: 'no-background',
                width: '100%',
                padding: '20 25 15 25',
                items: [
                    {
                        layout: 'hbox',
                        bodyCls: 'no-background',
                        border: false,
                        flex: 1,
                        items: [
                            {
                                html: 'Sign in',
                                border: false,
                                bodyCls: 'no-background sign-box-heading',
                                height: 19
                            }
                        ]
                    },
                    {
                        layout: 'hbox',
                        bodyCls: 'sign-box-logo',
                        border: false,
                        width: 52,
                        height: 19

                    }
                ]
            },
            {//Box Form Layout
                xtype: 'form',
                id: 'loginForm',
                defaultType: 'textfield',
                padding: '0 25 15 25',
                border: false,
                bodyCls: 'no-background',
                width: '100%',
                items: [
                    {
                        xtype: 'label',
                        forId: 'email',
                        text: 'Username',
                        baseCls: "fieldCaption"
                    },
                    {
                        id: 'email',
                        name: 'email',
                        vtype: 'email',
                        maxLength: 64,
                        allowBlank: false,
                        hideLabel: true,
                        padding: '5 0 15 0',
                        width: '100%',
                        fieldCls: 'textField',
                        listeners: {
                            afterrender: function (field) {
                                field.focus(true, 500);
                            },
                            specialkey: submitOnEnter
                        }
                    },
                    {
                        xtype: 'label',
                        forId: 'password',
                        text: 'Password',
                        baseCls: "fieldCaption"
                    },
                    {
                        name: 'password',
                        inputType: 'password',
                        minLength: 4,
                        maxLength: 32,
                        allowBlank: false,
                        hideLabel: true,
                        padding: '5 0 0 0',
                        width: '100%',
                        fieldCls: 'textField',
                        listeners: {
                            specialkey: submitOnEnter
                        }
                    }
                ]
            },
            {

                layout: 'hbox',
                width: '100%',
                bodyCls: 'no-background',
                border: false,
                padding: '0 25 0 25',
                items: [
                    {
                        xtype: 'button',
                        text: 'Sign in',
                        baseCls: 'sign-button',
                        listeners: {
                            click: function () {
                                formSubmit();
                            },
                            mouseover: function () {
                                //alert('Ready to click!');
                            },
                            buffer: 200
                        }
                    },
                    {
                        id: 'remember',
                        name: 'remember',
                        xtype: 'checkbox',
                        checked: true,
                        fieldCls: 'sign-checkbox'
                    },
                    {
                        xtype: 'label',
                        forId: 'remember',
                        text: 'Stay signed in',
                        baseCls: 'checkbox-label',
                    }
                ]
            },
            {
                layout: 'hbox',
                width: '100%',
                bodyCls: 'no-background',
                border: false,
                padding: '0 25 20 25',
                items: [
                    {
                        xtype: 'box',
                        autoEl: {tag: 'a', href: 'http://www.google.com/#', html: "Can't access your account?"},
                        baseCls: 'sign-link'
                    }
                ]
            }
        ]
    });

    Ext.create('Ext.container.Viewport', {
        renderTo: Ext.getBody(),
        width: '100%',
        height: '100%',
        layout: {type: 'vbox', align: 'center', pack: 'center'},
        items: [loginBox]
    });

});

function submitOnEnter(field, event) {
    if (event.getKey() == event.ENTER) {
        formSubmit();
    }
}

function formSubmit() {
    if (Ext.getCmp('loginForm').isValid()) {
        window.location = 'index.html'
    }
    else
        alert("Oops! Error occurred");
}



