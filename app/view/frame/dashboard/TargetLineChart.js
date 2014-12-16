Ext.define('ext5.view.frame.dashboard.TargetLineChart', {
    extend: 'Ext.panel.Panel',
    xtype: 'targetlinechart',
    requires: [
        'Ext.chart.*'
    ],
    minWidth: 240,

    initComponent: function () {
        // generateData메소드메서드는 Common.js내부에 있다.
        var me = this,
            store = Ext.create('Ext.data.Store', {
                fields: ['name', 'data1', 'data2', 'data3'],
                data: generateData(12)
            });

        Ext.apply(this, {
            items: [
                {
                    width: '100%',
                    height: 100,
                    animate: true,
                    store: store,
                    xtype: 'cartesian',
                    interactions: 'itemhighlight',
                    axes: [
                        {
                            type: 'numeric',
                            fields: ['data1', 'data2', 'data3' ],
                            position: 'left',
                            grid: true,
                            minimum: 0,
                            renderer: function (v) {
                                return v.toFixed(v < 10 ? 1 : 0);
                            }
                        },
                        {
                            type: 'category',
                            fields: 'name',
                            position: 'bottom',
                            grid: true
                        }
                    ],
                    series: [
                        {
                            type: 'line',
                            axis: 'left',
                            title: 'IE',
                            xField: 'name',
                            yField: 'data1',
                            style: {
                                lineWidth: 1
                            },
                            marker: {
                                radius: 2
                            },
                            highlight: {
                                fillStyle: '#000',
                                lineWidth: 1,
                                strokeStyle: '#fff'
                            },
                            tooltip: {
                                trackMouse: true,
                                style: 'background: #fff',
                                renderer: function (storeItem, item) {
                                    var title = item.series.getTitle();
                                    this.setHtml(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.getYField()) + '%');
                                }
                            }
                        },
                        {
                            type: 'line',
                            axis: 'left',
                            title: 'Firefox',
                            xField: 'name',
                            yField: 'data2',
                            style: {
                                lineWidth: 1
                            },
                            marker: {
                                radius: 2
                            },
                            highlight: {
                                fillStyle: '#000',
                                radius: 5,
                                lineWidth: 2,
                                strokeStyle: '#fff'
                            },
                            tooltip: {
                                trackMouse: true,
                                style: 'background: #fff',
                                renderer: function (storeItem, item) {
                                    var title = item.series.getTitle();
                                    this.setHtml(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.getYField()) + '%');
                                }
                            }
                        },
                        {
                            type: 'line',
                            axis: 'left',
                            title: 'Chrome',
                            xField: 'name',
                            yField: 'data3',
                            style: {
                                lineWidth: 1
                            },
                            marker: {
                                radius: 2
                            },
                            highlight: {
                                fillStyle: '#000',
                                radius: 5,
                                lineWidth: 2,
                                strokeStyle: '#fff'
                            },
                            tooltip: {
                                trackMouse: true,
                                style: 'background: #fff',
                                renderer: function (storeItem, item) {
                                    var title = item.series.getTitle();
                                    this.setHtml(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.getYField()) + '%');
                                }
                            }
                        }
                    ]
                }
            ]

        });
        this.callParent(arguments);
    }
});
