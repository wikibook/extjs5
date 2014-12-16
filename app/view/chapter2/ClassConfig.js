Ext.define('ext5.view.chapter2.ClassConfig', {
    extend: 'Ext.panel.Panel',
    xtype: 'chapter2-classconfig',
    title : 'ClassConfig',
    config: {   // #1
        subject: 'Subject Here',    // #2

        bottomBar: {    // #3
            height: 50,
            width: 200
        }
    },

    applySubject: function (subject) {  // #4
        if (!Ext.isString(subject) || subject.length === 0) {
            console.log('제목은 반드시 입력해야 합니다.');
        }
        else {
            return subject;
        }
    },

    applyBottomBar: function (bottomBar) {  // #5
        if (bottomBar) {    // #6
            if (!this.bottomBar) {  // #7
                return Ext.create('MyInnerClass', bottomBar);
            }
            else {
                this.bottomBar.setConfig(bottomBar);    // #8
            }
        }
    }
});
Ext.define('MyInnerClass', {    // #9
    config: {
        height: undefined,
        width: 100
    }
});
