Ext.define('ext5.view.chapter6.DeliveryPersonInfo', {
    extend: 'Ext.form.FieldSet',
    xtype: 'chapter6-deliveryperson',
    title: '수취인 정보',
    defaultType: 'textfield',
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },
    initComponent: function () {

        Ext.apply(this, {
            items: [
                {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '0 0 5 0',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: '이름',
                            name: 'deliveryusername',
                            flex: 1,
                            allowBlank: false
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            columnWidth: 1,
                            defaultType: 'textfield',
                            margin: '0 0 5 0',
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'deliverycellphone1',
                                    fieldLabel: '휴대폰',
                                    labelWidth: 60,
                                    width: 110
                                },
                                {
                                    xtype: 'label',
                                    text: '-',
                                    margin: '0 5 0 5'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'deliverycellphone2',
                                    width: 40,
                                    margin: '0 5 0 0'
                                },
                                {
                                    xtype: 'label',
                                    text: '-',
                                    margin: '0 5 0 5'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'deliverycellphone3',
                                    width: 40
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'deliveryphone1',
                                    fieldLabel: '연락처',
                                    labelWidth: 60,
                                    width: 110
                                },
                                {
                                    xtype: 'label',
                                    text: '-',
                                    margin: '0 5 0 5'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'deliveryphone2',
                                    width: 40,
                                    margin: '0 5 0 0'
                                },
                                {
                                    xtype: 'label',
                                    text: '-',
                                    margin: '0 5 0 5'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'deliveryphone3',
                                    width: 40
                                }
                            ]
                        }
                    ]
                }
            ]
        });
        this.callParent();
    }
});
