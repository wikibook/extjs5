Ext.define('ext5.store.Navigation', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.navigation',
    constructor: function(config) {
        var me = this;

        me.callParent([Ext.apply({  // #1
            root: {                 // #2
                text: '전체',        // #3
                id: 'all',          // #4
                expanded: true,     // #5
                children: me.getItems() // #5
            }
        }, config)]);
    },

    getItems: function() {  // #6
        var retvalue = [];  // #7
        Ext.Ajax.request({
            async: false,   // #8
            url: 'resources/data/navigation.json',  // #9
            failure: function (conn, response, options, eOpts) {
                Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
            },
            success: function (conn, response, options, eOpts) {
                var me = this;
                var result = Ext.JSON.decode(conn.responseText, true);  // #10
                retvalue =  result;
            }

        });
        return retvalue;
    }
});
