Ext.define('ext5.view.chapter8.ticket.BodyController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.chapter8-ticketbody',

    onProjectSelect: function (grid, selected) {
        console.log(selected[0].data);	// #1
        console.log('currentUser', this.getViewModel().getData().currentUser.data); // #2
    },

    projectSave : function(){
        var form = this.lookupReference('form'),        // #1
            projects = this.lookupReference('projects'),    // #2
            rec;

        if (form.isValid()) {
            rec = this.getViewModel().getData().theProject; // #3
            Ext.Msg.wait('Saving', 'Saving ...');
            rec.save({  // #4
                scope: this,
                callback: function(){
                    Ext.Msg.hide();
                    projects.store.load();  // #5
                }
            });
        }
    }

});
