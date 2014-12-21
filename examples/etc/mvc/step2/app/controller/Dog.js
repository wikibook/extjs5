Ext.define('dog.controller.Dog', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'doggrid',
            selector: 'doggrid'
        },
        {
            ref: 'dogview',
            selector: 'dogview'
        }
    ],

    stores: ['Dogs'],

    init: function () {
        this.control({
            'doggrid': {
                dogselected: this.onDogselected
            }
        });
    },

    onDogselected : function(grid, record){
        this.getDogview().update(record.data);
    }
});
