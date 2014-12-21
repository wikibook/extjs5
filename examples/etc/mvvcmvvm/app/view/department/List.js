Ext.define('AM.view.department.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.departmentlist',
    requires: [
        'AM.view.department.DeptController',
        'AM.view.department.DeptModel'
    ],

    viewModel: {
        type: 'dept'
    },
    controller: 'dept',

    title: 'Departments',
    bind: {
        store: '{Departments}'
    },
    listeners: {
        itemclick: 'showDepartmentUser'
    },
    columns: [
        {
            header: 'Name',
            dataIndex: 'name',
            flex: 1
        },
        {
            header: 'Location',
            dataIndex: 'location',
            flex: 1
        }
    ]
});