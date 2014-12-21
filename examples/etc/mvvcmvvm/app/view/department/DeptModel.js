Ext.define('AM.view.department.DeptModel', {
    extend: 'Ext.app.ViewModel',    // #1
    alias: 'viewmodel.dept',
    requires : [
        'AM.model.Department'
    ],

    stores: {   // #5
        Departments: {    // #6
            model : 'AM.model.Department',
            autoLoad : true,
            proxy : {
                type : 'ajax',
                api : {
                    read : 'data/departments.json'
                },
                reader : {
                    type : 'json',
                    rootProperty : 'departments',
                    successProperty : 'success'
                }
            }
        }
    }
});
