Ext.define('ext5.view.frame.dashboard.DashBoardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboard',
    config: {
        control: {  // 뷰를 통해서 들어온 이벤트.

            '#': {
                beforedestroy: function(){
                    clearInterval(this.interval);
                },
                render: function(view){
                    var store = Ext.StoreMgr.get('systemmonitoring'),
                        i = 0;
                    var data = [],
                        p = (Math.random() *  11) + 1;

                    clearInterval(this.interval);   // #19

                    this.interval = setInterval(function () {    // #20
                        if(store.getCount()>59){
                            store.remove(store.first());
                        }
                        store.add({
                            date: Ext.Date.format(new Date(),'g:i:s'),
                            cpu: Math.floor(Math.max((Math.random() * 100), 1)),
                            memory: Math.floor(Math.max((Math.random() * 40), 1))
                        });
                        i++;
                    }, 1000);
                }
            }
        }
    }
});
