Ext.define('ext5.view.chapter6.SurveyCheck', {
    extend: 'Ext.container.Container',
    xtype: 'chapter6-surveycheck',
    requires: ['ext5.view.chapter6.DataSet', 'ext5.model.smpl.Data'],		// #1
    layout: {
        type: 'vbox',						// #2
        align: 'stretch'						// #3
    },
    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            items: [
                {
                    xtype: 'component',				// #4
                    html: me.label,				// #5
                    cls: 'x-form-check-group-label'			// #6
                }
            ]
        });
        this.callParent();						// #7
        this.on('render', function () {					// #8
            var store = new Ext.data.Store({
                model: ext5.model.smpl.Data,
                proxy: {
                    type: 'memory',
                    reader: {
                        type: 'array'
                    }
                },
                data: eval('ext5.view.chapter6.DataSet.' + me.code)
            });

            var checkboxGroup = {
                xtype: 'checkboxgroup',				// #1
                columns: me.columns,					// #2
                name: me.code,					// #3
                style: {
                    padding: '5px 10px 5px 10px'
                },
                items: []						// #4
            };
            store.each(function (item) {
                checkboxGroup.items.push({
                    xtype: 'checkbox',
                    name: me.code,
                    inputValue: item.get('code'),
                    boxLabel: item.get('name')
                });
            });
            this.add(checkboxGroup);

        })
    }
});
