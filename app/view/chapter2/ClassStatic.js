Ext.define('ext5.view.chapter2.ClassStatic', { // ①
    extend: 'Ext.panel.Panel',
    xtype: 'chapter2-classstatic',
    config : {
        studentName : null
    },
    statics : {
        studentCount : 0,
        student : function(studentName) {
            return new this({	// 강제로 생성자 호출
                studentName : studentName,
                studentCount: this.studentCount++
            });
        }
    }
});