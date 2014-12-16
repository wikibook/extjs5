Ext.define('ext5.view.frame.dashboard.RightBody', {
    extend: 'Ext.container.Container',
    alias: 'widget.dashboard-rightbody',
    requires: [
        'Ext.layout.container.Column',
        'ext5.view.frame.dashboard.MonitoringCharts',
        'ext5.view.frame.dashboard.TargetColumnChart',
        'ext5.view.frame.dashboard.TargetGageChart',
        'ext5.view.frame.dashboard.GoogleMap'
    ],
    margin: '15 15 15 5',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'component',     // #1
                    height: 27,	// #2
                    cls: 'custom-container-header', // #3
                    listeners: {
                        render: function (component) {   // #4
                            component.update([   // #5
                                {
                                    title: '모니터링정보'
                                },
                                {
                                    title: '전국기상정보'
                                }
                            ]);
                            component.el.on('click', function (eventObject, htmlElement) {	// #1
                                this.el.select('ul li').removeCls('current');			// #2
                                Ext.get(htmlElement).up('li').addCls('current'); 			// #3
                                this.fireEvent('tabchange', Ext.get(htmlElement).getAttribute('tabindex'));  // #4
                                eventObject.stopEvent();					// #5
                            }, this, {
                                delegate: 'a'  						// #6
                            });
                        },
                        tabchange: {								// #7
                            fn: me.tabChange,						// #8
                            scope: me							// #9
                        }
                    },
                    tpl: [  // #6
                        '<ul>',
                        '<tpl for=".">',    // #7
                        '<li class="{[xindex === 1 ? "current" : ""]}">',   // #8
                        '<a href="#" tabindex="{[xindex]}">{title}</a>',    // #9
                        '</li>',
                        '</tpl>',
                        '</ul>']
                },
                {
                    xtype: 'container',
                    flex: 1,
                    cls: 'custom-container-body',
                    itemId: 'cardPanel',            // #10
                    layout: {
                        type: 'card',               // #11
                        deferredRender: true        // #12
                    },
                    items: [
                        {
                            xtype: 'container', // #13
                            itemId: 'db-tab1',  // #14
                            margin: '5 5 5 5',
                            layout: 'column',   // #15
                            defaults: {
                                columnWidth: .5,    // #16
                                margin: '5 5 5 5'
                            },
                            items: [
                                {
                                    xtype: 'monitoringcharts',	// #2
                                    columnWidth: 1	// #3
                                },
                                {
                                    xtype: 'targetcolumn'
                                },
                                {
                                    xtype: 'targetgage'
                                }
                            ]
                        },
                        {
                            xtype: 'googlemap', // #17
                            itemId: 'db-tab2',
                            margin: '5 5 5 5',
                            layout: 'fit'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    },

    tabChange: function(tabIndex){
        this.down('[itemId=cardPanel]').getLayout().setActiveItem(parseInt(tabIndex)-1);
    }

});
