Ext.define('ext5.view.Header', {
    extend: 'Ext.container.Container',  // #1
    xtype: 'frameheader',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Separator',
        'Ext.toolbar.Fill',
        'Ext.ProgressBar',
        'ext5.view.TopMenu',
        'ext5.view.HeaderController'
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    controller: 'header',   // #2

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'topmenu'    // #3
                },
                {
                    xtype: 'toolbar',
                    layout: {
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'button',    // #4
                            itemId: 'fullscreen',
                            handler: 'onFullScreen',
                            iconCls: 'button-icon-move'
                        },
                        {
                            xtype: 'button',    // #5
                            disabled: true,
                            itemId: 'originscreen',
                            handler: 'onOriginScreen',
                            iconCls: 'button-icon-trackback'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',    // #6
                            handler: 'goDashboard',
                            iconCls: 'button-icon-home'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            itemId: 'help',
                            iconCls: 'button-icon-help'
                        },
                        {
                            xtype: 'progressbar',
                            itemId: 'topprogressbar',
                            maxWidth: 400,
                            minWidth: 300,
                            text: 'Stand By...',
                            value: 0
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});
