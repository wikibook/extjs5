/**
 * This entity represents a comment on a ticket made by a particular user.
 */
Ext.define('ext5.model.smpl.Notice', {
//    extend: 'ext5.model.smpl.Smpl',
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'noticeId'
        },
        {
            name: 'subject'
        },
        {
            name: 'content'
        },
        {
            name: 'crDate'
        },
        {
            name: 'chDate'
        },
        {
            name: 'deleted',
            type: 'boolean'
        },
        {
            name: 'crUserSeq'
        }
    ]
});