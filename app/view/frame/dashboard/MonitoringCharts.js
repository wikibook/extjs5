Ext.define('ext5.view.frame.dashboard.MonitoringCharts', {
    extend: 'Ext.container.Container',
    xtype: 'monitoringcharts',
    requires: [
        'Ext.XTemplate',
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.grid.View'
    ],

    action: 'servercomponent',  						// #1
    cls: 'target-report-item',
    height: 270,
    minWidth: 200,
    width: 400,

    layout: {
        type: 'vbox',                   // #2
        align: 'stretch'
    },

    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'component',
                    height: 30,
                    data: {},
                    itemId: 'title',
                    tpl: [  						// #3
                        '<div style="background: #e8ecf0;" class="target-report-item-header">',
                        '    <h3>{title}</h3>',
                        '</div>'
                    ]
                },
                {
                    xtype: 'container', 					// 4
                    flex: 1,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'cartesian',				// #5
                            itemId: 'chart',
                            height: 230,
                            width: 200,
                            interactions: ['itemhighlight'],
                            colors: [
                                '#E7F292',
                                '#1BF264'
                            ],
                            axes: [
                                {
                                    type: 'numeric',
                                    position: 'left',
                                    adjustByMajorUnit: true,
                                    grid: true,
                                    fields: ['data1'],
                                    renderer: function (v) {
                                        return v.toFixed(v < 10 ? 1 : 0) + '%';
                                    },
                                    maximum: 100,
                                    minimum: 0
                                },
                                {
                                    type: 'category',
                                    position: 'bottom',
                                    grid: true,
                                    fields: ['gubun']
                                }
                            ],
                            series: [
                                {					// #6
                                    type: 'bar',
                                    axis: 'left',
                                    xField: 'gubun',
                                    yField: 'data1',
                                    stacked: true   // #7
                                }
                            ],
                            listeners: {
                                render: {
                                    fn: me.onChartRender,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'cartesian',				// #8
                            animation: false,               // #9
                            flex: 1,                        // #10
                            height: 300,
                            bodyBorder: false,
                            colors: [                       // #11
                                '#1BF264',
                                '#E7F292'
                            ],

                            bind: {
                                store: '{systemmonitoring}' // #12
                            },
                            axes: [
                                {
                                    grid: true,
                                    type: 'category',
                                    position: 'bottom'
                                },
                                {
                                    grid: true,
                                    type: 'numeric',
                                    maximum:100,
                                    minimum: 0,
                                    position: 'left',
                                    title: '(사용률)'
                                }
                            ],
                            series: [
                                {
                                    type: 'area',   // #13
                                    axis: 'left',
                                    xField: 'date', // #14
                                    yField: ['cpu'],    // #15
                                    style: {
                                        opacity: 0.80
                                    },
                                    tooltip: {  // #16
                                        trackMouse: true,
                                        style: 'background: #fff',
                                        renderer: function(storeItem, item) {
                                            this.setHtml(storeItem.get('date') + ': ' + storeItem.get('cpu') + ' %');
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            listeners: {
                startcomponent: {   					// #17  : 기존 156
                    fn: me.onStart,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onStart: function (record, title, eventOptions) {
        var me = this,
            store = me.down('#chart').store; 				// #18

        me.setTitle(title);     						// #10

        clearInterval(this.interval);   					// #21

        this.interval = setInterval(function () {    				// #22
            store.loadData(generateData(2));    				// #23
        }, 2000);
    },

    onChartRender: function (component, eOpts) {
        var store = Ext.create('Ext.data.Store', { 				// #25
            fields: ['name', 'gubun', 'data1'],
            data: generateData(2)
        });

        component.bindStore(store); 					// #26
    },

    onGridRender: function (component, eOpts) {
        var store = Ext.create('Ext.data.Store', {  				// #27
            fields: ['name', 'gubun', 'data1', 'data2', 'data3', 'data4'],
            data: generateData(12)
        });

        component.bindStore(store);
    },

    setTitle: function (title) {    						// #28
        this.down('#title').update({    					// #29
            title: '실시간 가동율' + '[' + title + ']'
        });
    }
});
