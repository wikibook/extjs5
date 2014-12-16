Ext.define('ext5.view.chapter4.MyCustomTabPanelStep2', {
    extend: 'Ext.container.Container',
    cls : 'custom-tab',
    xtype: 'chapter4-customstep2',
    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            cls: 'main_dashboard',
            autoEl: 'div',
            items: [
                {
                    xtype: 'container',     // #5
                    cls: 'tab_bg',          // #6
                    items: [
                        {
                            xtype: 'container', // #7
                            autoEl: 'ul',       // #8
                            id: "ulroot",       // #9
                            cls: 'dashboard_tab_menu',
                            items: [
                                {
                                    xtype: 'component', // #10
                                    autoEl: 'li',   // #11
                                    html: '<a href="#" tabIdx="0">탭1번</a>'  // #12
                                },
                                {
                                    xtype: 'component',
                                    autoEl: 'li',
                                    html: '<a href="#" tabIdx="1" class="on">탭2번</a>'
                                },
                                {
                                    xtype: 'component',
                                    autoEl: 'li',
                                    html: '<a href="#" tabIdx="2">탭3번</a>'
                                }
                            ]
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }

});