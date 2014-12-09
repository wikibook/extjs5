Ext.define('ext5.view.chapter4.CustomCardTabPanel', {
    extend: 'Ext.container.Container',
    cls : 'custom-tab',
    requires: [
        'Ext.layout.container.Border',
        'Ext.layout.container.Card',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'ext5.view.chapter4.CustomTab'
    ],
    layout: 'border',
    height: 400,
    xtype : 'chapter4-customcardtabpanel',
    items: [
        {
            region: 'north',
            xtype: 'chapter4-customtab',
            listeners: {
                tabselect: function (idx) {
                    var card = this.up('container').down('container[region=center]').getLayout();   // #1
                    card.setActiveItem(parseInt(idx) - 1); //#2
                }
            }
        },
        {
            region: 'center',
            xtype: 'container', // #3
            layout: {
                type: "card",   // #4
                deferredRender: true    // #5
            },
            items: [
                {
                    xtype: 'button',    // #6
                    text: '1번 패널'
                },
                {
                    xtype: 'grid',      // #7
                    columns: [
                        {
                            text: 'name',
                            dataIndex: 'name'
                        }
                    ],
                    title: '2번 패널'
                },
                {
                    xtype: 'panel',     // #8
                    title: '3번 패널'
                },
                {
                    xtype: 'panel',     // #9
                    title: '4번 패널'
                }
            ],
            style: {
                borderColor: '#000000',
                borderStyle: 'solid',
                borderWidth: '1px'
            }
        }
    ],
    listeners: {
        afterrender: function () {
            Ext.select('.x-border-box').replaceCls('x-border-box', 'x-border-box-backup');
        },
        beforedestroy: function(){
            Ext.select('.x-border-box-backup').replaceCls('x-border-box', 'x-border-box');
        }
    }
});