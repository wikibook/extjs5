Ext.define('ext5.view.chapter6.MyForm', {
    extend: 'Ext.form.Panel',           // #
    xtype: 'chapter6-myform',
    requires: [
        'Ext.form.field.HtmlEditor',
        'Ext.form.field.Number',
        'Ext.form.CheckboxGroup',
        'Ext.form.RadioGroup',
        'Ext.form.field.ComboBox',
        'ext5.model.smpl.Code',
        'ext5.view.chapter6.CustomPickerField'
    ],
    frame: true,
    width: 500,                         // #3
    title: '폼패널의 생성',                // #4
    bodyStyle: 'padding: 6px',          // #5
    defaultType: 'textfield',           // #6
    defaults: {                         // #7
        msgTarget: 'under',
        anchor: '100%',
        labelWidth: 120,
        labelAlign: 'right'
    },
    items: [
//        {
//            xtype: 'textfield',        // #1
//            msgTarget: 'under',         // #2
//            anchor: '100%',             // #3
//            labelWidth: 120,            // #4
//            fieldLabel: '텍스트필드',      // #5
//            allowBlank: false,          // #6
//            emptyText: '이 필드는 필수로 알파벳만 허용합니다.',  // #7
//            maskRe: /[a-z]/i,           // #8
//            name: 'mytext',            // #9
//            enableKeyEvents: true,     // #10
//            listeners: {
//                keydown: function (field, event) {
//                    console.log('keydown', arguments)
//                },
//                keypress: function (field, event) {
//                    console.log('keypress', arguments)
//                },
//                keyup: function (field, event) {
//                    console.log('keyup', arguments)
//                }
//            }
//        },
//        {
//            xtype: 'numberfield',      // #1
//            fieldLabel: '숫자필드',
//            name: 'mynumber',
//            value: 1.0,                 // #2
//            maxValue: 10,               // #3
//            minValue: 0,                // #4
//            step: 0.01,                 // #5
//            decimalPrecision: 2,        // #6
//            allowBlank: false,
//            allowDecimals: true,        // #7
//            mouseWheelEnabled: true,   // #8
//            emptyText: '소숫점 2자리 입력'
//        },
//        {
//            xtype: 'checkboxgroup',             // #1
//            fieldLabel: '체크박스',
//            name: 'mobilephone',                // #2
//            columns: 3,                         // #3
//            items: [                            // #4
//                {
//                    xtype: 'checkbox',          // #5
//                    boxLabel: '아이폰4',
//                    name: 'ip4'               // #6
//                },
//                {
//                    boxLabel: '아이폰5',
//                    xtype: 'checkbox',
//                    name: 'mobilephone',
//                    inputValue: 'ip5'
//                },
//                {
//                    boxLabel: '갤럭시S',
//                    xtype: 'checkbox',
//                    name: 'mobilephone',
//                    inputValue: 'gs'
//                },
//                {
//                    boxLabel: '갤럭시노트',
//                    xtype: 'checkbox',
//                    name: 'mobilephone',
//                    inputValue: 'gnote'
//                },
//                {
//                    boxLabel: '베가',
//                    xtype: 'checkbox',
//                    name: 'mobilephone',
//                    inputValue: 'vega'
//                },
//                {
//                    boxLabel: 'G2',
//                    xtype: 'checkbox',
//                    name: 'mobilephone',
//                    inputValue: 'g2'
//                }
//            ]
//        },
//        {
//            xtype: 'radiogroup',            // #1
//            fieldLabel: '라디오그룹',
//            allowBlank: false,             // #2
//            columns: 3,                   // #3
//            items: [
//                {
//                    xtype: 'radio',         // #4
//                    boxLabel: '윈도우95',
//                    name: 'os',            // #5
//                    inputValue: 'win95',   // #6
//                    checked: true        // #7
//                },
//                {
//                    boxLabel: '윈도우XP',
//                    xtype: 'radio',
//                    name: 'os',
//                    inputValue: 'winxp'
//                },
//                {
//                    boxLabel: '윈도우7',
//                    xtype: 'radio',
//                    name: 'os',
//                    inputValue: 'win7'
//                },
//                {
//                    boxLabel: '윈도우8',
//                    xtype: 'radio',
//                    name: 'os',
//                    inputValue: 'win8'
//                },
//                {
//                    boxLabel: '우분투',
//                    xtype: 'radio',
//                    name: 'os',
//                    inputValue: 'ubuntu'
//                },
//                {
//                    boxLabel: 'MacOS',
//                    xtype: 'radio',
//                    name: 'os',
//                    inputValue: 'mac'
//                }
//            ]
//        },
//        {
//            xtype: 'combo',             // #1
//            name: 'code',              // #2
//            store: {
//                model: 'ext5.model.smpl.Code'
//            },
//            fieldLabel: '콤보박스',
//            displayField: 'cd_desc',      // #4
//            valueField: 'cd_code',       // #5
//            queryMode: 'remote',      // #6 .
//            forceSelection: true,       // #7
//            typeAhead: true,          // #8
//            typeAheadDelay: 100,     // #9
//            minChars: 1,              // #10
//            hideTrigger: false          // #11
//        },
//        {
//            xtype: 'fieldcontainer',
//            fieldLabel: '리치텍스트에디터',
//            itemId: 'htmlfield1',
//            layout: 'anchor',
//            items: [
//                {
//                    xtype: 'toolbar',
//                    items: [
//                        '-',
//                        {
//                            xtype: 'button',
//                            text: 'Save',
//                            handler: function (button) {
//                                // 클릭 이벤트를 구현하자.
//                                var myView = button.up('fieldcontainer');
//                                var bigcontent = myView.down('[itemId=bigcontent]');
//                                var myEditor = myView.down('[name=bigcontent]');
//                                if (button.getText() === "Save") {
//                                    button.setText("Edit");
//                                    bigcontent.setValue(myEditor.getValue());
//                                    myEditor.hide();
//                                    bigcontent.show();
//                                } else {
//                                    button.setText("Save");
//                                    myEditor.setValue(bigcontent.getValue());
//                                    bigcontent.hide();
//                                    myEditor.show();
//
//                                }
//                            }
//                        }, '-'
//                    ]
//                },
//                {
//                    xtype: 'htmleditor',
//                    name: 'bigcontent',
//                    anchor: '100%'
//                },
//                {
//                    anchor: '100%',
//                    style: {
//                        borderColor: '#000000',
//                        borderStyle: 'solid',
//                        borderWidth: '1px'
//                    },
//                    xtype: 'displayfield',
//                    itemId: 'bigcontent'
//                }
//            ]
//        },
//        {         xtype: 'chapter6-custompicker',
//            fieldLabel: 'First Name',
//            name: 'first',
//            allowBlank: false,
//            pickerAlias: 'chapter6-gridpicker'  // #1
//        },
//        {
//            xtype: 'chapter6-custompicker',
//            fieldLabel: 'Last Name',
//            name: 'last',
//            allowBlank: false,
//            matchFieldWidth: false,    // #2
//            pickerOffset: [10, 10],     // #3
//            pickerAlias: 'chapter6-windowpicker'// #4
//        }
    ],                                    // #8
    buttons: [
        {
            text: '전송',
            handler: function () {
                this.up('form').getForm().submit({
                    url: 'serverside/formSave.do',
                    success: function (form, action) {
                        Ext.Msg.alert('Success', '저장 성공');
                    },
                    failure: function (form, action) {
                        Ext.Msg.alert('Failure', '저장 실패');
                    }
                });
            }
        }
    ]
});