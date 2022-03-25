function Actions(e){this.editorUi=e,this.actions=new Object,this.init()}function Action(e,t,n,l,i){mxEventSource.call(this),this.label=e,this.funct=this.createFunction(t),this.enabled=null==n||n,this.iconCls=l,this.shortcut=i,this.visible=!0}Actions.prototype.init=function(){function e(){return Action.prototype.isEnabled.apply(this,arguments)&&g.isEnabled()}var a=this.editorUi,d=a.editor,g=d.graph;this.addAction("new...",function(){g.openLink(a.getUrl())}),this.addAction("open...",function(){window.openNew=!0,window.openKey="open",a.openFile()}),this.addAction("import...",function(){window.openNew=!1,window.openKey="import",window.openFile=new OpenFile(mxUtils.bind(this,function(){a.hideDialog()})),window.openFile.setConsumer(mxUtils.bind(this,function(e,t){try{var n=mxUtils.parseXml(e);d.graph.setSelectionCells(d.graph.importGraphModel(n.documentElement))}catch(e){mxUtils.alert(mxResources.get("invalidOrMissingFile")+": "+e.message)}})),a.showDialog(new OpenDialog(this).container,320,220,!0,!0,function(){window.openFile=null})}).isEnabled=e,this.addAction("save",function(){a.saveFile(!1)},null,null,Editor.ctrlKey+"+S").isEnabled=e,this.addAction("saveAs...",function(){a.saveFile(!0)},null,null,Editor.ctrlKey+"+Shift+S").isEnabled=e,this.addAction("export...",function(){a.showDialog(new ExportDialog(a).container,300,296,!0,!0)}),this.addAction("editDiagram...",function(){var e=new EditDiagramDialog(a);a.showDialog(e.container,620,420,!0,!1),e.init()}),this.addAction("pageSetup...",function(){a.showDialog(new PageSetupDialog(a).container,320,220,!0,!0)}).isEnabled=e,this.addAction("print...",function(){a.showDialog(new PrintDialog(a).container,300,180,!0,!0)},null,"sprite-print",Editor.ctrlKey+"+P"),this.addAction("preview",function(){mxUtils.show(g,null,10,10)}),this.addAction("undo",function(){a.undo()},null,"sprite-undo",Editor.ctrlKey+"+Z"),this.addAction("redo",function(){a.redo()},null,"sprite-redo",mxClient.IS_WIN?Editor.ctrlKey+"+Y":Editor.ctrlKey+"+Shift+Z"),this.addAction("cut",function(){mxClipboard.cut(g)},null,"sprite-cut",Editor.ctrlKey+"+X"),this.addAction("copy",function(){try{mxClipboard.copy(g)}catch(e){a.handleError(e)}},null,"sprite-copy",Editor.ctrlKey+"+C"),this.addAction("paste",function(){g.isEnabled()&&!g.isCellLocked(g.getDefaultParent())&&mxClipboard.paste(g)},!1,"sprite-paste",Editor.ctrlKey+"+V"),this.addAction("pasteHere",function(e){if(g.isEnabled()&&!g.isCellLocked(g.getDefaultParent())){g.getModel().beginUpdate();try{var t=mxClipboard.paste(g);if(null!=t){for(var n=!0,l=0;l<t.length&&n;l++)n=n&&g.model.isEdge(t[l]);var i,o,s,a=g.view.translate,d=g.view.scale,c=a.x,r=a.y,u=null;1!=t.length||!n||null!=(i=g.getCellGeometry(t[0]))&&(u=i.getTerminalPoint(!0)),null!=(u=null!=u?u:g.getBoundingBoxFromGeometry(t,n))&&(o=Math.round(g.snap(g.popupMenuHandler.triggerX/d-c)),s=Math.round(g.snap(g.popupMenuHandler.triggerY/d-r)),g.cellsMoved(t,o-u.x,s-u.y))}}finally{g.getModel().endUpdate()}}}),this.addAction("copySize",function(e){var t=g.getSelectionCell();g.isEnabled()&&null!=t&&g.getModel().isVertex(t)&&(null!=(t=g.getCellGeometry(t))&&(a.copiedSize=new mxRectangle(t.x,t.y,t.width,t.height)))},null,null,"Alt+Shift+X"),this.addAction("pasteSize",function(e){if(g.isEnabled()&&!g.isSelectionEmpty()&&null!=a.copiedSize){g.getModel().beginUpdate();try{for(var t,n=g.getSelectionCells(),l=0;l<n.length;l++)!g.getModel().isVertex(n[l])||null!=(t=g.getCellGeometry(n[l]))&&((t=t.clone()).width=a.copiedSize.width,t.height=a.copiedSize.height,g.getModel().setGeometry(n[l],t))}finally{g.getModel().endUpdate()}}},null,null,"Alt+Shift+V"),this.addAction("delete",function(e){e=null!=e&&mxEvent.isControlDown(e),g.escape(),null!=(e=g.deleteCells(g.getDeletableCells(g.getSelectionCells()),e))&&g.setSelectionCells(e)},null,null,"Delete"),this.addAction("deleteAll",function(){if(!g.isSelectionEmpty()){g.getModel().beginUpdate();try{for(var e=g.getSelectionCells(),t=0;t<e.length;t++)g.cellLabelChanged(e[t],"")}finally{g.getModel().endUpdate()}}}),this.addAction("deleteLabels",function(){if(!g.isSelectionEmpty()){g.getModel().beginUpdate();try{for(var e=g.getSelectionCells(),t=0;t<e.length;t++)g.cellLabelChanged(e[t],"")}finally{g.getModel().endUpdate()}}},null,null,Editor.ctrlKey+"+Delete"),this.addAction("duplicate",function(){try{g.setSelectionCells(g.duplicateCells()),g.scrollCellToVisible(g.getSelectionCell())}catch(e){a.handleError(e)}},null,null,Editor.ctrlKey+"+D"),this.put("turn",new Action(mxResources.get("turn")+" / "+mxResources.get("reverse"),function(e){g.turnShapes(g.getSelectionCells(),null!=e&&mxEvent.isShiftDown(e))},null,null,Editor.ctrlKey+"+R")),this.addAction("selectVertices",function(){g.selectVertices(null,!0)},null,null,Editor.ctrlKey+"+Shift+I"),this.addAction("selectEdges",function(){g.selectEdges()},null,null,Editor.ctrlKey+"+Shift+E"),this.addAction("selectAll",function(){g.selectAll(null,!0)},null,null,Editor.ctrlKey+"+A"),this.addAction("selectNone",function(){g.clearSelection()},null,null,Editor.ctrlKey+"+Shift+A"),this.addAction("lockUnlock",function(){if(!g.isSelectionEmpty()){g.getModel().beginUpdate();try{var e=g.isCellMovable(g.getSelectionCell())?1:0;g.toggleCellStyles(mxConstants.STYLE_MOVABLE,e),g.toggleCellStyles(mxConstants.STYLE_RESIZABLE,e),g.toggleCellStyles(mxConstants.STYLE_ROTATABLE,e),g.toggleCellStyles(mxConstants.STYLE_DELETABLE,e),g.toggleCellStyles(mxConstants.STYLE_EDITABLE,e),g.toggleCellStyles("connectable",e)}finally{g.getModel().endUpdate()}}},null,null,Editor.ctrlKey+"+L"),this.addAction("home",function(){g.home()},null,null,"Shift+Home"),this.addAction("exitGroup",function(){g.exitGroup()},null,null,Editor.ctrlKey+"+Shift+Home"),this.addAction("enterGroup",function(){g.enterGroup()},null,null,Editor.ctrlKey+"+Shift+End"),this.addAction("collapse",function(){g.foldCells(!0)},null,null,Editor.ctrlKey+"+Home"),this.addAction("expand",function(){g.foldCells(!1)},null,null,Editor.ctrlKey+"+End"),this.addAction("toFront",function(){g.orderCells(!1)},null,null,Editor.ctrlKey+"+Shift+F"),this.addAction("toBack",function(){g.orderCells(!0)},null,null,Editor.ctrlKey+"+Shift+B"),this.addAction("group",function(){var e;g.isEnabled()&&(1!=(e=mxUtils.sortCells(g.getSelectionCells(),!0)).length||g.isTable(e[0])||g.isTableRow(e[0])?1<(e=g.getCellsForGroup(e)).length&&g.setSelectionCell(g.groupCells(null,0,e)):g.setCellStyles("container","1"))},null,null,Editor.ctrlKey+"+G"),this.addAction("ungroup",function(){if(g.isEnabled()){var e=g.getSelectionCells();g.model.beginUpdate();try{var t=g.ungroupCells();if(null!=e)for(var n=0;n<e.length;n++)g.model.contains(e[n])&&(0==g.model.getChildCount(e[n])&&g.model.isVertex(e[n])&&g.setCellStyles("container","0",[e[n]]),t.push(e[n]))}finally{g.model.endUpdate()}g.setSelectionCells(t)}},null,null,Editor.ctrlKey+"+Shift+U"),this.addAction("removeFromGroup",function(){if(g.isEnabled()){var e=g.getSelectionCells();if(null!=e){for(var t=[],n=0;n<e.length;n++)g.isTableRow(e[n])||g.isTableCell(e[n])||t.push(e[n]);g.removeCellsFromParent(t)}}}),this.addAction("edit",function(){g.isEnabled()&&g.startEditingAtCell()},null,null,"F2/Enter"),this.addAction("editData...",function(){var e=g.getSelectionCell()||g.getModel().getRoot();a.showDataDialog(e)},null,null,Editor.ctrlKey+"+M"),this.addAction("editTooltip...",function(){var t,e,n;g.isEnabled()&&!g.isSelectionEmpty()&&(t=g.getSelectionCell(),e="",mxUtils.isNode(t.value)&&(n=null)!=(n=null==(n=Graph.translateDiagram&&null!=Graph.diagramLanguage&&t.value.hasAttribute("tooltip_"+Graph.diagramLanguage)?t.value.getAttribute("tooltip_"+Graph.diagramLanguage):n)?t.value.getAttribute("tooltip"):n)&&(e=n),n=new TextareaDialog(a,mxResources.get("editTooltip")+":",e,function(e){g.setTooltipForCell(t,e)}),a.showDialog(n.container,320,200,!0,!0),n.init())},null,null,"Alt+Shift+T"),this.addAction("openLink",function(){var e=g.getLinkForCell(g.getSelectionCell());null!=e&&g.openLink(e)}),this.addAction("editLink...",function(){var t,e;g.isEnabled()&&!g.isSelectionEmpty()&&(t=g.getSelectionCell(),e=g.getLinkForCell(t)||"",a.showLinkDialog(e,mxResources.get("apply"),function(e){e=mxUtils.trim(e),g.setLinkForCell(t,0<e.length?e:null)}))},null,null,"Alt+Shift+L"),this.put("insertImage",new Action(mxResources.get("image")+"...",function(){g.isEnabled()&&!g.isCellLocked(g.getDefaultParent())&&(g.clearSelection(),a.actions.get("image").funct())})).isEnabled=e,this.put("insertLink",new Action(mxResources.get("link")+"...",function(){g.isEnabled()&&!g.isCellLocked(g.getDefaultParent())&&a.showLinkDialog("",mxResources.get("insert"),function(e,t){if(0<(e=mxUtils.trim(e)).length){var n=null,l=g.getLinkTitle(e),t=(null!=t&&0<t.length&&(n=t[0].iconUrl,30<(l=(l=t[0].name||t[0].type).charAt(0).toUpperCase()+l.substring(1)).length&&(l=l.substring(0,30)+"...")),new mxCell(l,new mxGeometry(0,0,100,40),"fontColor=#0000EE;fontStyle=4;rounded=1;overflow=hidden;"+(null!=n?"shape=label;imageWidth=16;imageHeight=16;spacingLeft=26;align=left;image="+n:"spacing=10;"))),l=(t.vertex=!0,g.getCenterInsertPoint(g.getBoundingBoxFromGeometry([t],!0)));t.geometry.x=l.x,t.geometry.y=l.y,g.setLinkForCell(t,e),g.cellSizeUpdated(t,!0),g.getModel().beginUpdate();try{t=g.addCell(t),g.fireEvent(new mxEventObject("cellsInserted","cells",[t]))}finally{g.getModel().endUpdate()}g.setSelectionCell(t),g.scrollCellToVisible(g.getSelectionCell())}})})).isEnabled=e,this.addAction("link...",mxUtils.bind(this,function(){if(g.isEnabled())if(g.cellEditor.isContentEditing()){var e=g.getSelectedElement(),t=g.getParentByName(e,"A",g.cellEditor.textarea),n="";if(null==t&&null!=e&&null!=e.getElementsByTagName)for(var l=e.getElementsByTagName("a"),i=0;i<l.length&&null==t;i++)l[i].textContent==e.textContent&&(t=l[i]);null!=t&&"A"==t.nodeName&&(n=t.getAttribute("href")||"",g.selectNode(t));var o=g.cellEditor.saveSelection();a.showLinkDialog(n,mxResources.get("apply"),mxUtils.bind(this,function(e){g.cellEditor.restoreSelection(o),null!=e&&g.insertLink(e)}))}else(g.isSelectionEmpty()?this.get("insertLink"):this.get("editLink")).funct()})).isEnabled=e,this.addAction("autosize",function(){var e=g.getSelectionCells();if(null!=e){g.getModel().beginUpdate();try{for(var t=0;t<e.length;t++){var n,l,i=e[t];g.getModel().getChildCount(i)?g.updateGroupBounds([i],20):(n=g.view.getState(i),l=g.getCellGeometry(i),g.getModel().isVertex(i)&&null!=n&&null!=n.text&&null!=l&&g.isWrapping(i)?((l=l.clone()).height=n.text.boundingBox.height/g.view.scale,g.getModel().setGeometry(i,l)):g.updateCellSize(i))}}finally{g.getModel().endUpdate()}}},null,null,Editor.ctrlKey+"+Shift+Y"),this.addAction("formattedText",function(){var e=g.getView().getState(g.getSelectionCell());if(null!=e){g.stopEditing();var t="1"==e.style.html?null:"1";g.getModel().beginUpdate();try{for(var n,l,i,o=g.getSelectionCells(),s=0;s<o.length;s++)null!=(state=g.getView().getState(o[s]))&&("1"==(n=mxUtils.getValue(state.style,"html","0"))&&null==t?(i=g.convertValueToString(state.cell),"0"!=mxUtils.getValue(state.style,"nl2Br","1")&&(i=i.replace(/\n/g,"").replace(/<br\s*.?>/g,"\n")),(l=document.createElement("div")).innerHTML=g.sanitizeHtml(i),i=mxUtils.extractTextWithWhitespace(l.childNodes),g.cellLabelChanged(state.cell,i),g.setCellStyles("html",t,[o[s]])):"0"==n&&"1"==t&&(i=mxUtils.htmlEntities(g.convertValueToString(state.cell),!1),"0"!=mxUtils.getValue(state.style,"nl2Br","1")&&(i=i.replace(/\n/g,"<br/>")),g.cellLabelChanged(state.cell,g.sanitizeHtml(i)),g.setCellStyles("html",t,[o[s]])));a.fireEvent(new mxEventObject("styleChanged","keys",["html"],"values",[null!=t?t:"0"],"cells",o))}finally{g.getModel().endUpdate()}}}),this.addAction("wordWrap",function(){var e=g.getView().getState(g.getSelectionCell()),t="wrap";g.stopEditing(),null!=e&&"wrap"==e.style[mxConstants.STYLE_WHITE_SPACE]&&(t=null),g.setCellStyles(mxConstants.STYLE_WHITE_SPACE,t)}),this.addAction("rotation",function(){var e="0",t=g.getView().getState(g.getSelectionCell()),t=(null!=t&&(e=t.style[mxConstants.STYLE_ROTATION]||e),new FilenameDialog(a,e,mxResources.get("apply"),function(e){null!=e&&0<e.length&&g.setCellStyles(mxConstants.STYLE_ROTATION,e)},mxResources.get("enterValue")+" ("+mxResources.get("rotation")+" 0-360)"));a.showDialog(t.container,375,80,!0,!0),t.init()}),this.addAction("resetView",function(){g.zoomTo(1),a.resetScrollbars()},null,null,"Home"),this.addAction("zoomIn",function(e){g.isFastZoomEnabled()?g.lazyZoom(!0,!0,a.buttonZoomDelay):g.zoomIn()},null,null,Editor.ctrlKey+" + (Numpad) / Alt+Mousewheel"),this.addAction("zoomOut",function(e){g.isFastZoomEnabled()?g.lazyZoom(!1,!0,a.buttonZoomDelay):g.zoomOut()},null,null,Editor.ctrlKey+" - (Numpad) / Alt+Mousewheel"),this.addAction("fitWindow",function(){var e=g.isSelectionEmpty()?g.getGraphBounds():g.getBoundingBox(g.getSelectionCells()),t=g.view.translate,n=g.view.scale;e.x=e.x/n-t.x,e.y=e.y/n-t.y,e.width/=n,e.height/=n,null!=g.backgroundImage&&e.add(new mxRectangle(0,0,g.backgroundImage.width,g.backgroundImage.height)),0==e.width||0==e.height?(g.zoomTo(1),a.resetScrollbars()):g.fitWindow(e)},null,null,Editor.ctrlKey+"+Shift+H"),this.addAction("fitPage",mxUtils.bind(this,function(){g.pageVisible||this.get("pageView").funct();var e=g.pageFormat,t=g.pageScale,n=g.container.clientWidth-10,l=g.container.clientHeight-10,n=Math.floor(20*Math.min(n/e.width/t,l/e.height/t))/20;g.zoomTo(n),mxUtils.hasScrollbars(g.container)&&(l=g.getPagePadding(),g.container.scrollTop=l.y*g.view.scale-1,g.container.scrollLeft=Math.min(l.x*g.view.scale,(g.container.scrollWidth-g.container.clientWidth)/2)-1)}),null,null,Editor.ctrlKey+"+J"),this.addAction("fitTwoPages",mxUtils.bind(this,function(){g.pageVisible||this.get("pageView").funct();var e=g.pageFormat,t=g.pageScale,n=g.container.clientWidth-10,l=g.container.clientHeight-10,n=Math.floor(20*Math.min(n/(2*e.width)/t,l/e.height/t))/20;g.zoomTo(n),mxUtils.hasScrollbars(g.container)&&(l=g.getPagePadding(),g.container.scrollTop=Math.min(l.y,(g.container.scrollHeight-g.container.clientHeight)/2),g.container.scrollLeft=Math.min(l.x,(g.container.scrollWidth-g.container.clientWidth)/2))}),null,null,Editor.ctrlKey+"+Shift+J"),this.addAction("fitPageWidth",mxUtils.bind(this,function(){g.pageVisible||this.get("pageView").funct();var e=g.pageFormat,t=g.pageScale,n=g.container.clientWidth-10,n=Math.floor(20*n/e.width/t)/20;g.zoomTo(n),mxUtils.hasScrollbars(g.container)&&(e=g.getPagePadding(),g.container.scrollLeft=Math.min(e.x*g.view.scale,(g.container.scrollWidth-g.container.clientWidth)/2))})),this.put("customZoom",new Action(mxResources.get("custom")+"...",mxUtils.bind(this,function(){var e=new FilenameDialog(this.editorUi,parseInt(100*g.getView().getScale()),mxResources.get("apply"),mxUtils.bind(this,function(e){e=parseInt(e);!isNaN(e)&&0<e&&g.zoomTo(e/100)}),mxResources.get("zoom")+" (%)");this.editorUi.showDialog(e.container,300,80,!0,!0),e.init()}),null,null,Editor.ctrlKey+"+0")),this.addAction("pageScale...",mxUtils.bind(this,function(){var e=new FilenameDialog(this.editorUi,parseInt(100*g.pageScale),mxResources.get("apply"),mxUtils.bind(this,function(e){var e=parseInt(e);!isNaN(e)&&0<e&&((e=new ChangePageSetup(a,null,null,null,e/100)).ignoreColor=!0,e.ignoreImage=!0,g.model.execute(e))}),mxResources.get("pageScale")+" (%)");this.editorUi.showDialog(e.container,300,80,!0,!0),e.init()}));var t=null,n=((t=this.addAction("grid",function(){g.setGridEnabled(!g.isGridEnabled()),a.fireEvent(new mxEventObject("gridEnabledChanged"))},null,null,Editor.ctrlKey+"+Shift+G")).setToggleAction(!0),t.setSelectedCallback(function(){return g.isGridEnabled()}),t.setEnabled(!1),(t=this.addAction("guides",function(){g.graphHandler.guidesEnabled=!g.graphHandler.guidesEnabled,a.fireEvent(new mxEventObject("guidesEnabledChanged"))})).setToggleAction(!0),t.setSelectedCallback(function(){return g.graphHandler.guidesEnabled}),t.setEnabled(!1),(t=this.addAction("tooltips",function(){g.tooltipHandler.setEnabled(!g.tooltipHandler.isEnabled()),a.fireEvent(new mxEventObject("tooltipsEnabledChanged"))})).setToggleAction(!0),t.setSelectedCallback(function(){return g.tooltipHandler.isEnabled()}),(t=this.addAction("collapseExpand",function(){var e=new ChangePageSetup(a);e.ignoreColor=!0,e.ignoreImage=!0,e.foldingEnabled=!g.foldingEnabled,g.model.execute(e)})).setToggleAction(!0),t.setSelectedCallback(function(){return g.foldingEnabled}),t.isEnabled=e,(t=this.addAction("scrollbars",function(){a.setScrollbars(!a.hasScrollbars())})).setToggleAction(!0),t.setSelectedCallback(function(){return g.scrollbars}),(t=this.addAction("pageView",mxUtils.bind(this,function(){a.setPageVisible(!g.pageVisible)}))).setToggleAction(!0),t.setSelectedCallback(function(){return g.pageVisible}),(t=this.addAction("connectionArrows",function(){g.connectionArrowsEnabled=!g.connectionArrowsEnabled,a.fireEvent(new mxEventObject("connectionArrowsChanged"))},null,null,"Alt+Shift+A")).setToggleAction(!0),t.setSelectedCallback(function(){return g.connectionArrowsEnabled}),(t=this.addAction("connectionPoints",function(){g.setConnectable(!g.connectionHandler.isEnabled()),a.fireEvent(new mxEventObject("connectionPointsChanged"))},null,null,"Alt+Shift+P")).setToggleAction(!0),t.setSelectedCallback(function(){return g.connectionHandler.isEnabled()}),(t=this.addAction("copyConnect",function(){g.connectionHandler.setCreateTarget(!g.connectionHandler.isCreateTarget()),a.fireEvent(new mxEventObject("copyConnectChanged"))})).setToggleAction(!0),t.setSelectedCallback(function(){return g.connectionHandler.isCreateTarget()}),t.isEnabled=e,(t=this.addAction("autosave",function(){a.editor.setAutosave(!a.editor.autosave)})).setToggleAction(!0),t.setSelectedCallback(function(){return a.editor.autosave}),t.isEnabled=e,t.visible=!1,this.addAction("help",function(){var e="";mxResources.isLanguageSupported(mxClient.language)&&(e="_"+mxClient.language),g.openLink(RESOURCES_PATH+"/help"+e+".html")}),!1),l=(this.put("about",new Action(mxResources.get("about")+" Graph Editor...",function(){n||(a.showDialog(new AboutDialog(a).container,320,280,!0,!0,function(){n=!1}),n=!0)})),mxUtils.bind(this,function(e,n,l,t){return this.addAction(e,function(){if(null!=l&&g.cellEditor.isContentEditing())l();else{g.stopEditing(!1),g.getModel().beginUpdate();try{var e=g.getSelectionCells();g.toggleCellStyleFlags(mxConstants.STYLE_FONTSTYLE,n,e),(n&mxConstants.FONT_BOLD)==mxConstants.FONT_BOLD?g.updateLabelElements(g.getSelectionCells(),function(e){e.style.fontWeight=null,"B"==e.nodeName&&g.replaceElement(e)}):(n&mxConstants.FONT_ITALIC)==mxConstants.FONT_ITALIC?g.updateLabelElements(g.getSelectionCells(),function(e){e.style.fontStyle=null,"I"==e.nodeName&&g.replaceElement(e)}):(n&mxConstants.FONT_UNDERLINE)==mxConstants.FONT_UNDERLINE&&g.updateLabelElements(g.getSelectionCells(),function(e){e.style.textDecoration=null,"U"==e.nodeName&&g.replaceElement(e)});for(var t=0;t<e.length;t++)0==g.model.getChildCount(e[t])&&g.autoSizeCell(e[t],!1)}finally{g.getModel().endUpdate()}}},null,null,t)}));l("bold",mxConstants.FONT_BOLD,function(){document.execCommand("bold",!1,null)},Editor.ctrlKey+"+B"),l("italic",mxConstants.FONT_ITALIC,function(){document.execCommand("italic",!1,null)},Editor.ctrlKey+"+I"),l("underline",mxConstants.FONT_UNDERLINE,function(){document.execCommand("underline",!1,null)},Editor.ctrlKey+"+U"),this.addAction("fontColor...",function(){a.menus.pickColor(mxConstants.STYLE_FONTCOLOR,"forecolor","000000")}),this.addAction("strokeColor...",function(){a.menus.pickColor(mxConstants.STYLE_STROKECOLOR)}),this.addAction("fillColor...",function(){a.menus.pickColor(mxConstants.STYLE_FILLCOLOR)}),this.addAction("gradientColor...",function(){a.menus.pickColor(mxConstants.STYLE_GRADIENTCOLOR)}),this.addAction("backgroundColor...",function(){a.menus.pickColor(mxConstants.STYLE_LABEL_BACKGROUNDCOLOR,"backcolor")}),this.addAction("borderColor...",function(){a.menus.pickColor(mxConstants.STYLE_LABEL_BORDERCOLOR)}),this.addAction("vertical",function(){a.menus.toggleStyle(mxConstants.STYLE_HORIZONTAL,!0)}),this.addAction("shadow",function(){a.menus.toggleStyle(mxConstants.STYLE_SHADOW)}),this.addAction("solid",function(){g.getModel().beginUpdate();try{g.setCellStyles(mxConstants.STYLE_DASHED,null),g.setCellStyles(mxConstants.STYLE_DASH_PATTERN,null),a.fireEvent(new mxEventObject("styleChanged","keys",[mxConstants.STYLE_DASHED,mxConstants.STYLE_DASH_PATTERN],"values",[null,null],"cells",g.getSelectionCells()))}finally{g.getModel().endUpdate()}}),this.addAction("dashed",function(){g.getModel().beginUpdate();try{g.setCellStyles(mxConstants.STYLE_DASHED,"1"),g.setCellStyles(mxConstants.STYLE_DASH_PATTERN,null),a.fireEvent(new mxEventObject("styleChanged","keys",[mxConstants.STYLE_DASHED,mxConstants.STYLE_DASH_PATTERN],"values",["1",null],"cells",g.getSelectionCells()))}finally{g.getModel().endUpdate()}}),this.addAction("dotted",function(){g.getModel().beginUpdate();try{g.setCellStyles(mxConstants.STYLE_DASHED,"1"),g.setCellStyles(mxConstants.STYLE_DASH_PATTERN,"1 4"),a.fireEvent(new mxEventObject("styleChanged","keys",[mxConstants.STYLE_DASHED,mxConstants.STYLE_DASH_PATTERN],"values",["1","1 4"],"cells",g.getSelectionCells()))}finally{g.getModel().endUpdate()}}),this.addAction("sharp",function(){g.getModel().beginUpdate();try{g.setCellStyles(mxConstants.STYLE_ROUNDED,"0"),g.setCellStyles(mxConstants.STYLE_CURVED,"0"),a.fireEvent(new mxEventObject("styleChanged","keys",[mxConstants.STYLE_ROUNDED,mxConstants.STYLE_CURVED],"values",["0","0"],"cells",g.getSelectionCells()))}finally{g.getModel().endUpdate()}}),this.addAction("rounded",function(){g.getModel().beginUpdate();try{g.setCellStyles(mxConstants.STYLE_ROUNDED,"1"),g.setCellStyles(mxConstants.STYLE_CURVED,"0"),a.fireEvent(new mxEventObject("styleChanged","keys",[mxConstants.STYLE_ROUNDED,mxConstants.STYLE_CURVED],"values",["1","0"],"cells",g.getSelectionCells()))}finally{g.getModel().endUpdate()}}),this.addAction("toggleRounded",function(){if(!g.isSelectionEmpty()&&g.isEnabled()){g.getModel().beginUpdate();try{var e=g.getSelectionCells(),t=g.getCurrentCellStyle(e[0]),n="1"==mxUtils.getValue(t,mxConstants.STYLE_ROUNDED,"0")?"0":"1";g.setCellStyles(mxConstants.STYLE_ROUNDED,n),g.setCellStyles(mxConstants.STYLE_CURVED,null),a.fireEvent(new mxEventObject("styleChanged","keys",[mxConstants.STYLE_ROUNDED,mxConstants.STYLE_CURVED],"values",[n,"0"],"cells",g.getSelectionCells()))}finally{g.getModel().endUpdate()}}}),this.addAction("curved",function(){g.getModel().beginUpdate();try{g.setCellStyles(mxConstants.STYLE_ROUNDED,"0"),g.setCellStyles(mxConstants.STYLE_CURVED,"1"),a.fireEvent(new mxEventObject("styleChanged","keys",[mxConstants.STYLE_ROUNDED,mxConstants.STYLE_CURVED],"values",["0","1"],"cells",g.getSelectionCells()))}finally{g.getModel().endUpdate()}}),this.addAction("collapsible",function(){var e=g.view.getState(g.getSelectionCell()),t="1";null!=e&&null!=g.getFoldingImage(e)&&(t="0"),g.setCellStyles("collapsible",t),a.fireEvent(new mxEventObject("styleChanged","keys",["collapsible"],"values",[t],"cells",g.getSelectionCells()))}),this.addAction("editStyle...",mxUtils.bind(this,function(){var e,t=g.getSelectionCells();null!=t&&0<t.length&&(e=g.getModel(),e=new TextareaDialog(this.editorUi,mxResources.get("editStyle")+":",e.getStyle(t[0])||"",function(e){null!=e&&g.setCellStyle(mxUtils.trim(e),t)},null,null,400,220),this.editorUi.showDialog(e.container,420,300,!0,!0),e.init())}),null,null,Editor.ctrlKey+"+E"),this.addAction("setAsDefaultStyle",function(){g.isEnabled()&&!g.isSelectionEmpty()&&a.setDefaultStyle(g.getSelectionCell())},null,null,Editor.ctrlKey+"+Shift+D"),this.addAction("clearDefaultStyle",function(){g.isEnabled()&&a.clearDefaultStyle()},null,null,Editor.ctrlKey+"+Shift+R"),this.addAction("addWaypoint",function(){var e=g.getSelectionCell();if(null!=e&&g.getModel().isEdge(e)){var t=d.graph.selectionCellsHandler.getHandler(e);if(t instanceof mxEdgeHandler){for(var n=g.view.translate,l=g.view.scale,i=n.x,o=n.y,s=g.getModel().getParent(e),a=g.getCellGeometry(s);g.getModel().isVertex(s)&&null!=a;)i+=a.x,o+=a.y,s=g.getModel().getParent(s),a=g.getCellGeometry(s);n=Math.round(g.snap(g.popupMenuHandler.triggerX/l-i)),e=Math.round(g.snap(g.popupMenuHandler.triggerY/l-o));t.addPointAt(t.state,n,e)}}}),this.addAction("removeWaypoint",function(){var e=a.actions.get("removeWaypoint");null!=e.handler&&e.handler.removePoint(e.handler.state,e.index)}),this.addAction("clearWaypoints",function(){var e=g.getSelectionCells();if(null!=e){e=g.addAllEdges(e),g.getModel().beginUpdate();try{for(var t=0;t<e.length;t++){var n,l=e[t];!g.getModel().isEdge(l)||null!=(n=g.getCellGeometry(l))&&((n=n.clone()).points=null,g.getModel().setGeometry(l,n))}}finally{g.getModel().endUpdate()}}},null,null,"Alt+Shift+C"),t=this.addAction("subscript",mxUtils.bind(this,function(){g.cellEditor.isContentEditing()&&document.execCommand("subscript",!1,null)}),null,null,Editor.ctrlKey+"+,"),t=this.addAction("superscript",mxUtils.bind(this,function(){g.cellEditor.isContentEditing()&&document.execCommand("superscript",!1,null)}),null,null,Editor.ctrlKey+"+."),t=this.addAction("indent",mxUtils.bind(this,function(){g.cellEditor.isContentEditing()&&document.execCommand("indent",!1,null)}),null,null,"Shift+Tab"),this.addAction("image...",function(){var e,t,n,c;g.isEnabled()&&!g.isCellLocked(g.getDefaultParent())&&(e=mxResources.get("image")+" ("+mxResources.get("url")+"):",n="",null!=(t=g.getView().getState(g.getSelectionCell()))&&(n=t.style[mxConstants.STYLE_IMAGE]||n),c=g.cellEditor.saveSelection(),a.showImageDialog(e,n,function(e,t,n){if(g.cellEditor.isContentEditing())g.cellEditor.restoreSelection(c),g.insertImage(e,t,n);else{var l=g.getSelectionCells();if(null!=e&&(0<e.length||0<l.length)){var i=null;g.getModel().beginUpdate();try{0==l.length&&(l=[g.insertVertex(g.getDefaultParent(),null,"",0,0,t,n,"shape=image;imageAspect=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;")],o=g.getCenterInsertPoint(g.getBoundingBoxFromGeometry(l,!0)),l[0].geometry.x=o.x,l[0].geometry.y=o.y,i=l,g.fireEvent(new mxEventObject("cellsInserted","cells",i))),g.setCellStyles(mxConstants.STYLE_IMAGE,0<e.length?e:null,l);var o,s,a,d=g.getCurrentCellStyle(l[0]);"image"!=d[mxConstants.STYLE_SHAPE]&&"label"!=d[mxConstants.STYLE_SHAPE]?g.setCellStyles(mxConstants.STYLE_SHAPE,"image",l):0==e.length&&g.setCellStyles(mxConstants.STYLE_SHAPE,null,l),1==g.getSelectionCount()&&null!=t&&null!=n&&(s=l[0],null!=(a=g.getModel().getGeometry(s))&&((a=a.clone()).width=t,a.height=n,g.getModel().setGeometry(s,a)))}finally{g.getModel().endUpdate()}null!=i&&(g.setSelectionCells(i),g.scrollCellToVisible(i[0]))}}},g.cellEditor.isContentEditing(),!g.cellEditor.isContentEditing()))}).isEnabled=e,(t=this.addAction("layers",mxUtils.bind(this,function(){null==this.layersWindow?(this.layersWindow=new LayersWindow(a,document.body.offsetWidth-280,120,220,196),this.layersWindow.window.addListener("show",function(){a.fireEvent(new mxEventObject("layers"))}),this.layersWindow.window.addListener("hide",function(){a.fireEvent(new mxEventObject("layers"))}),this.layersWindow.window.setVisible(!0),a.fireEvent(new mxEventObject("layers")),this.layersWindow.init()):this.layersWindow.window.setVisible(!this.layersWindow.window.isVisible())}),null,null,Editor.ctrlKey+"+Shift+L")).setToggleAction(!0),t.setSelectedCallback(mxUtils.bind(this,function(){return null!=this.layersWindow&&this.layersWindow.window.isVisible()})),(t=this.addAction("formatPanel",mxUtils.bind(this,function(){a.toggleFormatPanel()}),null,null,Editor.ctrlKey+"+Shift+P")).setToggleAction(!0),t.setSelectedCallback(mxUtils.bind(this,function(){return 0<a.formatWidth})),(t=this.addAction("outline",mxUtils.bind(this,function(){null==this.outlineWindow?(this.outlineWindow=new OutlineWindow(a,document.body.offsetWidth-260,100,180,180),this.outlineWindow.window.addListener("show",function(){a.fireEvent(new mxEventObject("outline"))}),this.outlineWindow.window.addListener("hide",function(){a.fireEvent(new mxEventObject("outline"))}),this.outlineWindow.window.setVisible(!0),a.fireEvent(new mxEventObject("outline"))):this.outlineWindow.window.setVisible(!this.outlineWindow.window.isVisible())}),null,null,Editor.ctrlKey+"+Shift+O")).setToggleAction(!0),t.setSelectedCallback(mxUtils.bind(this,function(){return null!=this.outlineWindow&&this.outlineWindow.window.isVisible()}))},Actions.prototype.addAction=function(e,t,n,l,i){var o="..."==e.substring(e.length-3)?(e=e.substring(0,e.length-3),mxResources.get(e)+"..."):mxResources.get(e);return this.put(e,new Action(o,t,n,l,i))},Actions.prototype.put=function(e,t){return this.actions[e]=t},Actions.prototype.get=function(e){return this.actions[e]},mxUtils.extend(Action,mxEventSource),Action.prototype.createFunction=function(e){return e},Action.prototype.setEnabled=function(e){this.enabled!=e&&(this.enabled=e,this.fireEvent(new mxEventObject("stateChanged")))},Action.prototype.isEnabled=function(){return this.enabled},Action.prototype.setToggleAction=function(e){this.toggleAction=e},Action.prototype.setSelectedCallback=function(e){this.selectedCallback=e},Action.prototype.isSelected=function(){return this.selectedCallback()};