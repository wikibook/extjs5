Ext.define('ext5.view.chapter6.PaymentOfCardInfo', {
    extend: 'Ext.form.FieldSet',
    xtype: 'chapter6-paymentcard',
    requires: [
        'ext5.view.chapter6.DataSet',
        'ext5.model.smpl.Data'
    ],
    title: '결제정보',
    initComponent: function () {
        Ext.apply(this, {
            items: this.getItems()
        });
        this.callParent();
    },
    getItems: function () {
        return [
            {
                xtype: 'container',
                layout: 'hbox',
                margin: '0 0 5 0',
                items: [
                    {
                        xtype: 'combo',
                        fieldLabel: '카드종류',
                        width: 210,
                        displayField: 'name',
                        valueField: 'code',
                        queryMode: 'local',					// #1
                        emptyText: '카드를 선택하세요.',
                        editable: false,					// #2
                        layout: {
                            autoFlex: false
                        },
                        margin: '0 0 10 0',
                        store: new Ext.data.Store({				// #3
                            model: ext5.model.smpl.Data,			// #4
                            proxy: {
                                type: 'memory',				// #5
                                reader: {
                                    type: 'array'				// #6
                                }
                            },
                            data: ext5.view.chapter6.DataSet.cardList			// #7
                        })
                    },
                    {
                        xtype: 'textfield',
                        name: 'cardNumber',
                        fieldLabel: '카드번호',
                        flex: 1,
                        allowBlank: false,
                        minLength: 15,
                        maxLength: 16,
                        enforceMaxLength: true,
                        maskRe: /\d/
                    },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: '유효일',
                        labelWidth: 75,
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'numberfield',
                                name: 'cardExpireYear',
                                hideLabel: true,
                                width: 70,
                                margins: '0 6 0 0',
                                value: new Date().getFullYear(),
                                minValue: new Date().getFullYear(),
                                allowBlank: false
                            },
                            {
                                xtype: 'combobox',
                                editable: false,
                                name: 'cardExpireMonth',
                                displayField: 'name',
                                valueField: 'num',
                                queryMode: 'local',
                                emptyText: '유효월',
                                hideLabel: true,
                                margins: '0 6 0 0',
                                store: new Ext.data.Store({             // #1
                                    fields: ['name', 'num'],            // #2
                                    data: (function () {                // #3
                                        var data = [],                  // #4
                                            months = ext5.view.chapter6.DataSet.monthNames;     // #5
                                        Ext.Array.forEach(months, function (name, i) {  // #6
                                            data[i] = {name: name, num: i + 1};         // #7
                                        });
                                        return data;
                                    })()
                                }),
                                width: 60,
                                allowBlank: false,
                                forceSelection: true
                            }

                        ]
                    }

                ]
            }
        ]
    }

});
