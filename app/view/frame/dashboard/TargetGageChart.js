Ext.define('ext5.view.frame.dashboard.TargetGageChart', {
    extend: 'Ext.container.Container',
    alias: 'widget.targetgage',
    action: 'servercomponent',
    cls: 'target-report-item',
    height: 280,
    minWidth: 200,
    width: 400,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'component',
                    data: {
                        title: me.title
                    },
                    height: 30,
                    itemId: 'title',
                    tpl: [
                        '<div style="background: #e8ecf0;" class="target-report-item-header">',
                        '    <h3>{title}</h3>',
                        '</div>'
                    ]
                },{
                    xtype: 'polar',
                    itemId : 'chart',
                    flex: 1,
                    height: 240,
                    width: 300,
                    insetPadding: 30,
                    store: [{}],
//                    sprites: fuelPumpSprite,
                    axes: {
                        type: 'numeric',
                        position: 'gauge'
                    },
                    series: {
                        type: 'gauge',
                        field: 'data1',
                        donut: 50
                    },
                    listeners: {
                        render: {
                            fn: me.onChartRender,
                            scope: me
                        }
                    }
                },
                {
                    xtype: 'component',
                    margin : '5 5 5 5',
                    data: {
                    },
                    itemId: 'details',
                    tpl: [
                        '<div class="">',
                        '<div class="chart"></div>',
                        '<div class="box">',
                        '<div style="width:33.3%;float:left">',
                        '<p class="num">{data1}</p>',
                        '<p class="type">{desc1}</p>',
                        '</div>',
                        '<div style="width:33.3%;float:left">',
                        '<p class="num">{data2}</p>',
                        '<p class="type">{desc2}</p>',
                        '</div>',
                        '<div style="width:33.3%;float:left">',
                        '<p class="num">{data3}</p>',
                        '<p class="type">{desc3}</p>',
                        '</div>',
                        '</div>',
                        '</div>'
                    ]
                }
            ],
            listeners: {
                startcomponent: {
                    fn: me.onStart,
                    scope: me
                },
                beforedestroy: function(component){
                    clearInterval(me.interval);
                }
            }
        });

        me.callParent(arguments);
    },

    onChartRender: function(component, eOpts) {
        var store = Ext.create('Ext.data.Store', {
            fields : ['name','data1','data2','data3'],
            data : generateData(6)
        });

        component.bindStore(store);
    },

    onStart: function(record, title, eventOptions) {
        var me = this,
            store = me.down('#chart').store;
        me.setTitle(title);
        clearInterval(this.interval);
        this.interval = setInterval(function() {
            store.loadData(generateData(6));
            var record = store.getAt(0);
            me.getComponent('details').update({
                desc1 : 'CPU',
                desc2 : 'Memory',
                desc3 : 'HDD',
                data1 : record.get('data1'),
                data2 : record.get('data2'),
                data3 : record.get('data3')
            });
        }, 2000);
    },

    setTitle: function(title) {
        this.down('#title').update({
            title : '실시간 가동율 추이'+'['+title+']'
        });
    }
});