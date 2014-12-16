Ext.define('ext5.view.chapter8.DataBind', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.chapter8-databind',
    requires: [
        'ext5.view.chapter8.DataBindModel',
        'ext5.view.chapter8.DataBindController'
    ],
    viewModel : 'chapter8-databind',
    controller: 'chapter8-databind',
    width: 500,
    bodyPadding: 10,

    items: [{
        padding : '5 5 5 5',
        xtype : 'panel',	// #1
        height: 50,
        reference : 'datapanel',	// #2
        bind: {
            title : '{name}'	// #3
        }
    }],

    bind: { // #3
        title: '{title}',
        html: '{html}'
    },

    tbar: [{    // #4
        bind: '{buttonText}'
    }]
});
