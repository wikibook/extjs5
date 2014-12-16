Ext.define('ext5.controller.Root', {
    extend: 'Ext.app.Controller',
    alias: 'controller.root',
    requires: ['Ext.window.MessageBox'],

    config: {
        routes: {     				// #1
            ':id': {    				// #2
                action: 'onSampleCodeLoad',  	// #3
                before: 'beforeHandleRoute'  	// #4
            }
        },
        refs: {
            topprogressbar: '#topprogressbar',
            navigationTree: 'navigation-tree',
            contentPanel: 'contentPanel',	// #1
            navigationBreadcrumb: 'navigation-breadcrumb',	// #2
            codePreview: '#codePreview'
        },
        control: {
            'navigation-breadcrumb breadcrumb': {		// #3
                selectionchange: 'onBreadcrumbNavSelectionChange'	// #4
            },
            'navigation-tree': {	// #5
                selectionchange: 'onTreeNavSelectionChange'	// #6
            },
            '#codePreview tool[type=maximize]': {	// #1
                click: 'onMaximizeClick'	// #2
            }
        }
    },

    beforeHandleRoute: function (id, action) {   					// #1
        var me = this,
            node = Ext.StoreMgr.get('navigation').getNodeById(id);  // #2

        if (node) { // #3
            action.resume();    // #4
        } else {    // #5
            Ext.Msg.alert(
                '라우터 경고',
                    '입력된 ' + id + ' 는 정상적이지 않습니다.',
                function () {
                    me.redirectTo(me.getApplication().getDefaultToken());       // #6
                }
            );
            action.stop();  // #7
        }
    },


    onMaximizeClick: function () {
        var preview = this.getCodePreview();	// #3
        var w = new Ext.window.Window({		// #4
            maximized: true,	// #5
            title: 'Code Preview',
            closable: false,	// #6
            layout: 'fit',
            items: {
                xtype: 'codePreview',	// #7
                tools: [],
                showTitle: false,
                items: preview.activeView.codePreviewProcessed	// #8
            },
            tools: [
                {
                    type: 'close',	// #9
                    handler: function () {	// #10
                        w.hide(preview, function () {	// #11
                            w.destroy();	// #12
                        });
                    }
                }
            ]
        });
        w.show(preview);	// #13
    },

    onBreadcrumbNavSelectionChange: function (breadcrumb, node) {	// #7
        if (node) {
            this.redirectTo(node.getId());
        }
    },

    onTreeNavSelectionChange: function (selModel, records) {	// #9
        var record = records[0];

        if (record) {
            this.redirectTo(record.getId());
        }
    },

    onSampleCodeLoad: function (id) {
        var me = this,
            navigationTree = me.getNavigationTree(),    // #1
            navigationBreadcrumb = me.getNavigationBreadcrumb(),    // #2
            store = Ext.StoreMgr.get('navigation'), // #3
            node = store.getNodeById(id),// #4
            text = node.get('text'),    // #5
            contentPanel = me.getContentPanel(),    // #6
            cmp, className, ViewClass, clsProto;

        if (navigationTree && navigationTree.isVisible()) { // #7
            navigationTree.getSelectionModel().select(node);    // #8
            navigationTree.getView().focusNode(node);   // #9
        } else {    // 네비게이션이 활성화 되었다면.
            navigationBreadcrumb.setSelection(node);    // #10
        }

        if (node.isLeaf()) {    // #11
            className = Ext.ClassManager.getNameByAlias('widget.' + id);    // #12
            if (!className) { // #13
                console.log('해당 클래스가 로딩되지 않았습니다.', id);
            } else {  // #14
                Ext.suspendLayouts();   // #15
                contentPanel.removeAll(true);   // #16
                ViewClass = Ext.ClassManager.get(className);    // #17
                clsProto = ViewClass.prototype;     // #18
                cmp = new ViewClass();  // #19
                contentPanel.add(cmp);  // #20
                this.setupPreview(clsProto);
                this.updateTitle(node);	// #21
                Ext.resumeLayouts(true);    // #22

                if (cmp.floating) {     // #23
                    cmp.show(); // #24
                }
            }
        }
    },

    setupPreview: function (clsProto) {
        var me = this,
            preview = me.getCodePreview(),  // #1
            otherContent = clsProto.otherContent,   // #2
            resources = [], // #3
            codePreviewProcessed = clsProto.codePreviewProcessed;   // #4

        if (!codePreviewProcessed) {    // #5
            resources.push({    // #6
                type: 'View',   // #7
                path: clsProto.$className.replace(/\./g, '/').replace('ext5', 'app') + '.js'    // #8
            });
            if (otherContent) { // #9
                resources = resources.concat(otherContent);     // #10
            }
            codePreviewProcessed = clsProto.codePreviewProcessed = [];  // #11
            Ext.each(resources, function (resource) {
                resource.xtype = 'codeContent';     // #12
                resource.title = resource.type;     // #13
                resource.tabConfig = {              // #14
                    tooltip: resource.path
                };
                var clone = Ext.apply({}, resource);    // #15
                codePreviewProcessed.push(clone);       // #16
                resource.loader = {         // #17
                    url: resource.path,     // #18
                    autoLoad: true,         // #19
                    rendererScope: me,      // #20
                    renderer: me.renderCodeMarkup,  // #21
                    resource: clone // #22
                };
            });
        } else {
            resources = codePreviewProcessed;
        }

        // preview를 지우고.
        preview.removeAll();    // #23
        // 다시 추가.
        preview.add(resources); // #24
        // 추가된 자식이 여러개 일경우 첫번째 활성화.
        preview.setActiveTab(0);    // #25

        // 탭이 2개 이상일 경우 탭바를 보이도록 한다.
        preview.tabBar.setVisible(resources.length > 1);    // #26

        preview.activeView = clsProto;  // #27
    },

    exampleRe: /^\s*\/\/\s*(\<\/?example\>)\s*$/,
    themeInfoRe: /this\.themeInfo\.(\w+)/g,

    renderCodeMarkup: function (loader, response) {
        var code = this.processText(response.responseText, loader.themeInfo);
        // Passed in from the block above, we keep the proto cloned copy.
        loader.resource.html = code;
        loader.getTarget().setHtml(code);
        prettyPrint();
        return true;
    },

    processText: function (text, themeInfo) {
        var lines = text.split('\n'),
            removing = false,
            keepLines = [],
            len = lines.length,
            exampleRe = this.exampleRe,
            themeInfoRe = this.themeInfoRe,
            encodeTheme = function (text, match) {
                return Ext.encode(themeInfo[match]);
            },
            i, line, code;

        for (i = 0; i < len; ++i) {
            line = lines[i];
            if (removing) {
                if (exampleRe.test(line)) {
                    removing = false;
                }
            } else if (exampleRe.test(line)) {
                removing = true;
            } else {
                line = line.replace(themeInfoRe, encodeTheme);
                keepLines.push(line);
            }
        }

        code = Ext.htmlEncode(keepLines.join('\n'));
        return '<pre class="prettyprint">' + code + '</pre>';
    },

    // ContentPanel의 title을 변경한다.
    updateTitle: function (node) {
        var text = node.get('text'),
            title = node.isLeaf() ? (node.parentNode.get('text') + '-' + text ) : text;

        this.getContentPanel().setTitle(title);
        document.title = document.title.split(' - ')[0] + ' - ' + text;
    },

    init: function () {
        var me = this;
        Ext.Ajax.on('beforerequest', function (conn, response, eOpts) {	// #1
            me.progressBarStart();
        });
        Ext.Ajax.on('requestexception', function (conn, response, options) {		// #2
            me.progressBarStop(response);
            Ext.MessageBox.show({
                title: '통신 오류',
                msg: '잠시 오류가 발생하고 있습니다. \n\n 계속 오류가 발생할 경우 관리자에게 문의하세요.',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        });
        Ext.Ajax.on('requestcomplete', function (conn, response, options, eOpts) {  // #3
            me.progressBarEnd();
            var result = Ext.JSON.decode(response.responseText, true);  // #1
            if (result && result.errMsg) {   // #2
                Ext.MessageBox.show({  // #3
                    title: result.errTitle, // #4
                    msg: result.errMsg, // #5
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK,
                    fn: function () {   // #6
                        if (result.reload) {    // #7
                            window.location.reload();   // #8
                        }
                    }
                });
            }

        });
//        Ext.Ajax.request({  // #4
//            url: '/resources/data/sessionout.json'	// #5
//        });
    },
    progressBarStart: function () { // #1
        var progressbar = this.getTopprogressbar(); // #2
        if (progressbar !== undefined) {     // #3
            progressbar.wait({  // #4
                interval: 100,  // #5
                increment: 100,  // #6
                text: 'Progress...' + Ext.Date.format(new Date(), 'A H:i:s')    // #7
            });
        }
    },

    progressBarEnd: function () {   // #8
        var progressbar = this.getTopprogressbar();
        if (progressbar !== undefined) {
            progressbar.reset();// #9
            progressbar.updateText('Complete..' + Ext.Date.format(new Date(), 'A H:i:s'));  // #10
        }
    },
    progressBarStop: function (response) {  // #11
        var progressbar = this.getTopprogressbar(),
            errStr = 'Error: ' + response.status +  // #12
                ' ' + response.statusText +  // #13
                ' (' + Ext.Date.format(new Date(), 'A H:i:s') + ')';
        if (progressbar !== undefined) {
            progressbar.updateText(errStr);  // #14
        }
    }

});
