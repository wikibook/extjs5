Ext.define('ext5.view.frame.dashboard.DashBoardModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dashboard',

    requires: [
        'Ext.data.Store',
        'Ext.data.field.Field'
    ],

    stores: {                               // #1
        systemmonitoring: {                 // #2
            storeId: 'systemmonitoring',    // #3
            fields: [                       // #3
                {
                    name: 'date'
                },
                {
                    name: 'cpu'
                },
                {
                    name: 'memory'
                }
            ]
        }
    }
});