Ext.define('ext5.view.frame.dashboard.TargetColumnChart', {
    extend: 'Ext.container.Container',
    xtype : 'targetcolumn',
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
                    xtype: 'cartesian',
                    itemId : 'chart',
                    height: 230,
                    width: 200,
                    interactions: ['itemhighlight'],
                    axes: [{
                        type: 'numeric',
                        position: 'left',
                        adjustByMajorUnit: true,
                        grid: true,
                        fields: ['data1'],
                        renderer: function (v) { return v.toFixed(v < 10 ? 1: 0) + '%'; },
                        maximum: 100,
                        minimum: 0
                    }, {
                        type: 'category',
                        position: 'bottom',
                        grid: true,
                        fields: ['name']
                    }],
                    series: [{
                        type: 'bar',
                        axis: 'left',
                        xField: 'name',
                        yField: 'data1',
                        stacked: true
                    }],
                    listeners: {
                        render: {   // #8
                            fn: me.onChartRender,
                            scope: me
                        }
                    }
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

    onStart: function(record, title, eventOptions) {
        var me = this,
            store = me.down('#chart').store;
        me.setTitle(title);
        clearInterval(this.interval);
        this.interval = setInterval(function() {
            store.loadData(generateData(12));
        }, 2000);
    },

    onChartRender: function(component, eOpts) {
        var store = Ext.create('Ext.data.Store', {
            fields : ['name','data1','data2','data3'],
            data : generateData(12)
        });
        component.bindStore(store);
    },

    setTitle: function(title) {
        this.down('#title').update({
            title : '년간 가동율 추이'+'['+title+']'
        });
    }

});