Ext.define('ext5.view.navigation.Breadcrumb', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'navigation-breadcrumb',
    requires: ['Ext.toolbar.Breadcrumb'],
    config: {   // #1
        selection: null     // #2
    },

    initComponent: function () {
        this.items = [
            {
                xtype: 'tool',  // #6
                type: 'down',
                tooltip: 'Switch to Tree View',
                listeners: {
                    click: 'showTreeNav'    // #7
                }
            },
            {
                xtype: 'breadcrumb',    // #8
                reference: 'toolbar',   // #9
                selection: this.getSelection(),     // #10
                flex: 1,
                store: Ext.StoreMgr.get('navigation')   // #11
            }
        ];
        this.callParent();

        this._breadcrumbBar = this.items.getAt(1);  // #12
    },

    updateSelection: function (node) {	// #13
        if (this.rendered) {    // #14
            this._breadcrumbBar.setSelection(node); // #15
        }
    }
});
