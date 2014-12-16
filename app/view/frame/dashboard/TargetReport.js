Ext.define('ext5.view.frame.dashboard.TargetReport', {
    extend: 'Ext.view.View',    // #1
    xtype: 'targetreport',      // #2
    requires: ['ext5.view.frame.dashboard.TargetLineChart'],
    itemSelector: '.target-report-item',    // #3
    cls: 'target-report',   // #4
    trackOver: true,
    margin: '5 5 5 5',
    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            listeners: {
                select: {
                    fn: me.selectOnChange,  				// #6
                    scope: me
                },

                refresh: {      // #1
                    fn: me.onChartAdd,  // #2
                    scope: me   // #3
                }
            },

            itemTpl: [  // #5
                '<div class="target-report-item" style="width:48%;height:280px;float:left">',   // #6
                '<div class="target-report-item-header">',
                '<h3><a href="#">{caption1}</a></h3>',
                '<span>{caption2}</span> </div>',
                '<div class="target-report-item-body">',
                '<p> 지역 코드  : <strong>{caption3}</strong><br>',
                '권역코드 : <strong>{caption4}</strong></p>',
                '<div class="stat_view">',
                '<div class="view_site">',
                '<p class="percent">{caption5}<span>%</span></p>',
                '<p class="count">{caption6}</p>',
                '<p class="type">{caption7}</p>',
                '</div>',
                '<div class="view_screen">',
                '<p class="percent orange">{caption8}<span>%</span></p>',
                '<p class="count">{caption9}</p>',
                '<p class="type">{caption10}</p>',
                '</div>',
                '<div class="view_random">',
                '<p class="percent red">{caption11}<span>%</span></p>',
                '<p class="count">{caption12}</p>',
                '<p class="type">{caption13}</p>',
                '</div>',
                '<div class="view_fail">',
                '<p class="percent">{caption15}<span>%</span></p>',
                '<p class="count">{caption16}</p>',
                '<p class="type">{caption17}</p>',
                '</div>',
                '</div>',
                '<div class="chart" style="width:100%;height:100%">',	// #7
                '</div>',
                '</div>',
                '</div>'
            ]
        });

        me.callParent(arguments);
    },

    onChartAdd: function () {
        var gridnode = this.el.query('div.chart');  // #4
        for (var i in gridnode) {        // #5
            Ext.widget('targetlinechart', {
                renderTo: gridnode[i]
            });
        }
        this.getSelectionModel().select(0);
    },

    selectOnChange: function(dataviewmodel, record, eOpts) {   		// #2
        var component = Ext.ComponentQuery.query('[action=servercomponent]'); // #3
        Ext.each(component, function(item){  				// #4
            item.fireEvent('startcomponent', record, record.get('caption1'));  // #5
        });
    },

    onRender: function (component) {
        this.callParent(arguments);
        var store = Ext.create('Ext.data.Store', {  // #8
            autoLoad: true,
            proxy: {
                url: 'http://extuxgroup.com/resources/data/targetlist.jsp', // #9
                type: 'jsonp',  // #10
                reader: {
                    type: 'array'   // #11
                }
            },
            fields: ['caption1', 'caption2', 'caption3',    // #12
                'caption4', 'caption5', 'caption6',
                'caption7', 'caption8', 'caption9',
                'caption10', 'caption11', 'caption12',
                'caption13', 'caption14', 'caption15',
                'caption16', 'caption17', 'caption18',
                'caption19', 'caption20', 'caption21',
                'caption22', 'caption23'
            ]
        });
        this.bindStore(store);  // #13
    }
});