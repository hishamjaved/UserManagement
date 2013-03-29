Ext.define("UserManagement.view.Main", {
    extend: 'Ext.panel.Panel',
    requires:['UserManagement.view.UserList'],
    xtype: 'main',
    border: false,
    layout: {
        type: 'vbox'
    },
    items: [
        {
            //Top Menu Header
            layout: 'hbox',
            border: false,
            height: 35,
            width: '100%',
            bodyCls: 'top-header',
            items: [
                {
                    //Menu Bar
                    layout: 'hbox',
                    border: false,
                    margin: '5 25 0 0',
                    height: '100%',
                    flex: 85,
                    bodyStyle: {'background': 'transparent'},
                    items: [
                        {
                            layout: 'hbox',
                            flex: 1,
                            border: false
                        },
                        {
                            layout: 'hbox',
                            border: false,
                            bodyStyle: {'background': 'transparent'},
                            items: [
                                {
                                    xtype: 'button',
                                    text: 'Hisham Javed',
                                    baseCls: 'text-button user-button',

                                },
                                {
                                    xtype: 'button',
                                    text: 'Logout',
                                    baseCls: 'text-button logout-button',
                                    margin: '0 0 0 25'
                                }
                            ]
                        }
                    ]
                },
                {
                    layout: 'vbox',
                    border: false,
                    flex: 15
                }
            ]
        },
        {
            //Top Logo Header
            layout: 'hbox',
            border: true,
            width: '100%',
            height: 75,
            bodyCls: 'bottom-header',
            items: [
                {
                    layout: 'vbox',
                    border: false,
                    flex: 15
                },
                {
                    layout: 'vbox',
                    border: false,
                    flex: 85,
                    margin: '10 0 0 25',
                    height: '100%',
                    align: 'middle',
                    bodyCls: 'header-logo'
                }
            ]
        },
        {
            // Main Container
            layout: 'hbox',
            border: false,
            width: '100%',
            flex: 1,
            bodyCls: 'main-container',
            items: [
                {
                    //Left Panel
                    layout: 'vbox',
                    flex: 15,
                    height: '100%',
                    border: false,
                    bodyCls: 'side-panel',
                    items: [
                        {
                            //Top Box
                            layout: 'vbox',
                            width: '100%',
                            height: 37,
                            border: false,
                            bodyCls: 'side-panel-top-box'
                        },
                        {
                            //Bottom Box
                            layout: 'vbox',
                            width: '100%',
                            flex: 1,
                            border: true,
                            bodyCls: 'side-panel-bottom-box-left'
                        }
                    ]
                },
                {
                    //Middle Panel
                    layout: 'vbox',
                    flex: 70,
                    height: '100%',
                    border: false,
                    bodyCls: 'middle-panel',
                    items: [
                        {
                            xtype: 'tabpanel',
                            activeTab: 0,
                            width:'100%',
                            flex:1,
                            id: 'mainTabPanel',
                            enableTabScroll: true,
                            margin:10,
                            plain: true,
                            action: 'mainTabPanelAction',
                            items: [
                                {
                                    title: 'User List',
                                    itemId:'tabUserList',
                                    items:[{
                                        xtype:'userlist'
                                    }]

                                },
                                {
                                    title: 'Add User',
                                    html: 'Add User',
                                    itemId: 'tabAddUser'
                                }
                            ]
                        }
                    ]
                },
                {
                    //Right Panel
                    layout: 'vbox',
                    flex: 15,
                    height: '100%',
                    border: false,
                    bodyCls: 'side-panel',
                    items: [
                        {
                            //Top Box
                            layout: 'vbox',
                            width: '100%',
                            height: 37,
                            border: false,
                            bodyCls: 'side-panel-top-box'
                        },
                        {
                            //Bottom Box
                            layout: 'vbox',
                            width: '100%',
                            flex: 1,
                            border: true,
                            bodyCls: 'side-panel-bottom-box-right'
                        }
                    ]
                }
            ]
        },
        {
            //Footer
            layout: 'vbox',
            border: true,
            width: '100%',
            height: 55,
            bodyCls: 'footer'
        }
    ]
});

