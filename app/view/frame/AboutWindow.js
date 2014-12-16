Ext.define('ext5.view.frame.AboutWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.aboutwindow',
    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.Display',
        'Ext.toolbar.Toolbar',
        'Ext.form.field.Checkbox',
        'Ext.toolbar.Fill',
        'Ext.button.Button'
    ],
    closeAction: 'destroy',
    width: 400,
    title: '프로그램 정보',

    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            defaults: {
                margin: '5 5 5 5'
            },
            items: [
                {
                    xtype: 'fieldset',
                    fieldDefaults: {
                        margin: '0 0 0 0'
                    },
                    title: '버전정보',
                    items: [
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'ExtJS',
                            value: function(){
                                return Ext.versions.core.extjs;
                            }()
                        },
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'Sencha CMD',
                            value: '5.0.1.231'
                        },
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'App Version',
                            value: '1.0'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'More Info',
                    items: [
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            labelWidth: 120,
                            value: '<b>Product Information :</b> <a href="http://extuxgroup.com">http://extuxgroup.com</a>'
                        },
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            value: '<b>User Forum :</b> <a href="http://www.sencha.com/forum/">http://extuxgroup.com/</a>'
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '@2014 ExtUxGroup Inc. All rights reserved.'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            text: '닫기',
                            handler: function(button){
                                button.up('window').close();
                            }
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }

});
