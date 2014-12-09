Ext.define('ext5.view.chapter6.SurveyForm', {
    extend: 'Ext.form.FieldSet',
    xtype: 'chapter6-surveyform',
    requires: [
        'ext5.view.chapter6.SurveyRadio',
        'ext5.view.chapter6.SurveyCheck'
    ],
    title: '설문조사',
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },
    initComponent: function () {
        Ext.apply(this, {
            items: [
                {
                    xtype: 'container',
                    layout: 'hbox',
                    defaults: {
                        flex: 1
                    },
                    items: [
                        {
                            xtype: 'chapter6-surveyradio',
                            label: '성별',
                            code: 'gender'
                        },
                        {
                            xtype: 'chapter6-surveyradio',
                            label: '연령대',
                            code: 'age'
                        },
                        {
                            xtype: 'chapter6-surveyradio',
                            label: '경력',
                            code: 'career'
                        },
                        {
                            xtype: 'chapter6-surveyradio',
                            label: '직업',
                            code: 'job'
                        },
                        {
                            xtype: 'chapter6-surveyradio',				// #1
                            label: '고용형태',				// #2
                            code: 'jobtype'				// #3
                        }
                    ]
                },
                {
                    xtype: 'chapter6-surveycheck',
                    label: '관심분야(복수선택)',
                    code: 'interest',				// #1
                    columns: 5				// #2
                }
            ]
        });
        this.callParent();
    }
});
