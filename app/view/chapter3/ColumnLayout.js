Ext.define('ext5.view.chapter3.ColumnLayout', {
    alias: 'widget.chapter3-columnlayout',
    extend: 'Ext.panel.Panel',
    title: 'Column Layout',
    width: 350,
    height: 250,
    layout: 'column',   // #1
    items: [
        {
            title: 'Column 1',
            width: 120  // #2
        },
        {
            title: 'Column 2',
            columnWidth: 0.7    // #3
        },
        {
            title: 'Column 3',
            columnWidth: 0.3    // #4
        }
    ]
});
