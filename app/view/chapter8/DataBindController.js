Ext.define('ext5.view.chapter8.DataBindController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.chapter8-databind',
    routes: {
        'user': 'findUser',
        'param/:id': {			// #1
            before: 'beforeHandleRoute',	// #2
            action: 'handleRoute',		// #3
            conditions: {
                ':id':'([0-9]+)'
            }
        }
    },
    beforeHandleRoute: function (id, action) {	// #4
        console.log('routing start', id);
        if (id == 100) {			// #5
            console.log('routing stop');
            action.stop();			// #6
            return false;			// #7
        }
        console.log('routing continue')
        action.resume();			// #8
    },

    handleRoute: function (id) {		// #9
        console.log('routing finish', id);
    }
});