Ext.define('ext5.view.TopMenu', {
    extend: 'Ext.toolbar.Toolbar',  // #1
    xtype: 'topmenu',
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'button',
                    cls: 'custom-button-text-bold',
                    text: 'ExtJS Ria Application',
                    menu: {
                        xtype: 'menu',
                        width: 200,
                        items: [
                            {
                                xtype: 'menuitem',
                                itemId: 'about',
                                width: 300,
                                iconCls: 'button-icon-film',
                                text: '애플리케이션 정보',
                                listeners: {
                                    click: 'showAbout'  // #2
                                }
                            },
                            {
                                xtype: 'menuseparator'
                            },
                            {
                                xtype: 'menuitem',
                                iconCls: 'button-icon-display',
                                text: '보기설정',
                                menu: {
                                    xtype: 'menu',
                                    width: 120,
                                    items: [
                                        {
                                            xtype: 'menuitem',
                                            itemId: 'fullscreen',
                                            handler: 'onFullScreen',    // #3
                                            iconCls: 'button-icon-move',
                                            text: '전체보기 설정'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            disabled: true,
                                            itemId: 'originscreen',
                                            handler: 'onOriginScreen',  // #4
                                            iconCls: 'button-icon-trackback',
                                            text: '전체보기 해제'
                                        }
                                    ]
                                }
                            },
                            {
                                xtype: 'menuitem',
                                itemId: 'exit',
                                iconCls: 'button-icon-exit',
                                text: '프로그램 종료',
                                handler: 'onExit'   // #5
                            }
                        ]
                    }
                }
            ]
        });
        me.callParent(arguments);
    }
});
