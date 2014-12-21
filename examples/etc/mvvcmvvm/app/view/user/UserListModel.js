Ext.define('AM.view.user.UserListModel', {
    extend: 'Ext.app.ViewModel',    // #1
    alias: 'viewmodel.userlist',
    requires : [
        'AM.model.User'
    ],
    data: {
        title: 'All Users'
    },
    stores: {   // #5
        Users: {    // #6
            model : 'AM.model.User',
            autoLoad : true,
            proxy : {
                type : 'ajax',
                api : {
                    read : 'data/users.json'
                },
                reader : {
                    type : 'json',
                    rootProperty : 'users',
                    successProperty : 'success'
                }
            },

            filterUsersByDepartment : function(deptCode){
                this.clearFilter();
                this.filter([{
                    property : 'department',
                    value : deptCode
                }]);
            },

            refresh : function(){
                this.clearFilter();
            }
        }
    }
});
