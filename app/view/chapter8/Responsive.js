Ext.define('ext5.view.chapter8.Responsive', {
    extend: 'Ext.tab.Panel',
    plugins: 'responsive',
    responsiveConfig: {
        landscape: {
            tabPosition: 'left'
        },
        portrait: {
            tabPosition: 'top'
        }
    },
    items: [
        { title: 'Foo' },
        { title: 'Bar' }
    ]
});
