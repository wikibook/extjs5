Ext.define('ext5.view.chapter8.ticket.BodyModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.chapter8-ticketbody',
    formulas: {
        theProject: function (get) {       // #1
            return get('projects.selection');   // #2
        }
    },
    stores: {			// #1
        sortedUsers : {	// #2
            source: '{projects.selection.users}',		// #3
            sorters: [{				// #4
                property : 'name',
                direction : 'DESC'
            }]
        }
    }
});
