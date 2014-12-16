Ext.define('ext5.view.chapter6.CustomPickerField', {
    extend: 'Ext.form.field.Picker',   // #1
    xtype: 'chapter6-custompicker',      // #2
    requires: [
        'ext5.view.chapter6.GridPicker',
        'ext5.view.chapter6.WindowPicker'
    ],
    triggerCls: 'x-form-search-trigger',       // #3
    createPicker: function (C) {        // #4
        var me = this;
        if (!me.picker) {               // #5
            if (!me.picker) {
                me.picker = Ext.widget(me.pickerAlias);		// #1
                me.picker.on('select', function (p, record) {	// #2
                    me.setValue(record.get('company') || record.get('text'));		// #3
                    me.collapse();	// #4
                });
            }
            return me.picker
        }
        return me.picker;       // #11
    }
});