Ext.define('ext5.view.chapter3.CardLayout', {
    alias: 'widget.chapter3-cardlayout',
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.form.field.Date',
        'Ext.layout.container.Card',
        'ext5.view.chapter3.CardChild1',
        'ext5.view.chapter3.CardChild2',
        'ext5.view.chapter3.CardChild3'
    ],
    title: 'Card Layout',
    width: 350,
    height: 150,
    layout: {
        type: 'card',        // #1
        deferredRender: true
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            bbar: ['->', { // #2
                xtype: 'button',    // #3
                text: '이전',
                handler: function (btn) {   // #4
                    var layout = btn.up('panel').getLayout();   // #5

                    if (layout.getPrev()) {     // #6
                        layout.prev();          // #7
                        me.cardInfo();        // #8
                    }
                }
            }, {
                xtype: 'button',
                text: '다음',
                handler: function (btn) {
                    var layout = btn.up('panel').getLayout();

                    if (layout.getNext()) { // #9
                        layout.next();      // #10
                        me.cardInfo();      // #11
                    }
                }
            }],
            items: [    // #12
                {
                    xtype: 'chapter3-cardchild1'
                },
                {
                    xtype: 'chapter3-cardchild2'
                },
                {
                    xtype: 'chapter3-cardchild3'
                }
            ],
            listeners: {
                render: {   // #13
                    fn: this.cardInfo,
                    scope: this
                }
            }
        });
        me.callParent(arguments);
    },

    cardCheck: function (domId) {   // #14
        var checkValue = Ext.Object.isEmpty(document.getElementById(domId));
        return domId + '는 ' + (checkValue ? '존재하지 않습니다.' : '존재합니다.') + '전체 Dom 크기는 :' + document.getElementsByTagName("*").length + '입니다.';
    },

    cardInfo: function () { // #15
        var me = this,
            task = new Ext.util.DelayedTask(function () {
                console.log(me.cardCheck('card1'))
                console.log(me.cardCheck('card2'))
                console.log(me.cardCheck('card3'))
            });
        task.delay(500);
    }
});
