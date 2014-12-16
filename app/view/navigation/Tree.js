Ext.define('ext5.view.navigation.Tree', {
    extend: 'Ext.tree.Panel',
    xtype: 'navigation-tree',
    title: 'Examples',
    rootVisible: false,
    lines: true,
    useAroows: true,
    hideHeader: true,
    collapseFirst: false,
    width: 250,
    minWidth: 100,
    height: 200,
    split: true,
    collapsible: true,

    tools: [
        {
            type: 'up', // #1
            tooltip: 'Switcher to Breadcrumb View',
            listeners: {
                click: 'showBreadcrumbNav'  // #2
            }
        }
    ],

    initComponent: function () {
        var me = this;

        me.columns = [{     // #3
            xtype: 'treecolumn',    // #4
            flex: 1,
            dataIndex: 'text',  // #5
            scope: me
        }];

        Ext.apply(me, {
            store: Ext.StoreMgr.get('navigation'), // #6
            hideHeaders: true   // #7
        });
        me.callParent(arguments);
    }
});
