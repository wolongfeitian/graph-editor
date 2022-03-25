function Menubar(e,t){this.editorUi=e,this.container=t}function Menu(e,t){mxEventSource.call(this),this.funct=e,this.enabled=null==t||t}(Menus=function(e){this.editorUi=e,this.menus=new Object,this.init(),mxClient.IS_SVG||((new Image).src=this.checkmarkImage)}).prototype.defaultFont="Helvetica",Menus.prototype.defaultFontSize="12",Menus.prototype.defaultMenuItems=["file","edit","view","arrange","extras","help"],Menus.prototype.defaultFonts=["Helvetica","Verdana","Times New Roman","Garamond","Comic Sans MS","Courier New","Georgia","Lucida Console","Tahoma"],Menus.prototype.init=function(){var o=this.editorUi.editor.graph,e=mxUtils.bind(o,o.isEnabled);this.customFonts=[],this.customFontSizes=[],this.put("fontFamily",new Menu(mxUtils.bind(this,function(t,n){for(var e=mxUtils.bind(this,function(e){this.styleChange(t,e,[mxConstants.STYLE_FONTFAMILY],[e],null,n,function(){document.execCommand("fontname",!1,e)},function(){o.updateLabelElements(o.getSelectionCells(),function(e){e.removeAttribute("face"),e.style.fontFamily=null,"PRE"==e.nodeName&&o.replaceElement(e,"div")})}).firstChild.nextSibling.style.fontFamily=e}),i=0;i<this.defaultFonts.length;i++)e(this.defaultFonts[i]);if(t.addSeparator(n),0<this.customFonts.length){for(i=0;i<this.customFonts.length;i++)e(this.customFonts[i]);t.addSeparator(n),t.addItem(mxResources.get("reset"),null,mxUtils.bind(this,function(){this.customFonts=[],this.editorUi.fireEvent(new mxEventObject("customFontsChanged"))}),n),t.addSeparator(n)}this.promptChange(t,mxResources.get("custom")+"...","",mxConstants.DEFAULT_FONTFAMILY,mxConstants.STYLE_FONTFAMILY,n,!0,mxUtils.bind(this,function(e){mxUtils.indexOf(this.customFonts,e)<0&&(this.customFonts.push(e),this.editorUi.fireEvent(new mxEventObject("customFontsChanged")))}))}))),this.put("formatBlock",new Menu(mxUtils.bind(this,function(n,i){function e(e,t){return n.addItem(e,null,mxUtils.bind(this,function(){null!=o.cellEditor.textarea&&(o.cellEditor.textarea.focus(),document.execCommand("formatBlock",!1,"<"+t+">"))}),i)}e(mxResources.get("normal"),"p"),e("","h1").firstChild.nextSibling.innerHTML='<h1 style="margin:0px;">'+mxResources.get("heading")+" 1</h1>",e("","h2").firstChild.nextSibling.innerHTML='<h2 style="margin:0px;">'+mxResources.get("heading")+" 2</h2>",e("","h3").firstChild.nextSibling.innerHTML='<h3 style="margin:0px;">'+mxResources.get("heading")+" 3</h3>",e("","h4").firstChild.nextSibling.innerHTML='<h4 style="margin:0px;">'+mxResources.get("heading")+" 4</h4>",e("","h5").firstChild.nextSibling.innerHTML='<h5 style="margin:0px;">'+mxResources.get("heading")+" 5</h5>",e("","h6").firstChild.nextSibling.innerHTML='<h6 style="margin:0px;">'+mxResources.get("heading")+" 6</h6>",e("","pre").firstChild.nextSibling.innerHTML='<pre style="margin:0px;">'+mxResources.get("formatted")+"</pre>",e("","blockquote").firstChild.nextSibling.innerHTML='<blockquote style="margin-top:0px;margin-bottom:0px;">'+mxResources.get("blockquote")+"</blockquote>"}))),this.put("fontSize",new Menu(mxUtils.bind(this,function(e,t){for(var n=[6,8,9,10,11,12,14,18,24,36,48,72],i=mxUtils.bind(this,function(n){this.styleChange(e,n,[mxConstants.STYLE_FONTSIZE],[n],null,t,function(){if(null!=o.cellEditor.textarea){document.execCommand("fontSize",!1,"3");for(var e=o.cellEditor.textarea.getElementsByTagName("font"),t=0;t<e.length;t++)if("3"==e[t].getAttribute("size")){e[t].removeAttribute("size"),e[t].style.fontSize=n+"px";break}}})}),l=0;l<n.length;l++)i(n[l]);if(e.addSeparator(t),0<this.customFontSizes.length){for(l=0;l<this.customFontSizes.length;l++)i(this.customFontSizes[l]);e.addSeparator(t),e.addItem(mxResources.get("reset"),null,mxUtils.bind(this,function(){this.customFontSizes=[]}),t),e.addSeparator(t)}this.promptChange(e,mxResources.get("custom")+"...","(pt)","12",mxConstants.STYLE_FONTSIZE,t,!0,mxUtils.bind(this,function(e){this.customFontSizes.push(e)}))}))),this.put("direction",new Menu(mxUtils.bind(this,function(e,t){e.addItem(mxResources.get("flipH"),null,function(){o.toggleCellStyles(mxConstants.STYLE_FLIPH,!1)},t),e.addItem(mxResources.get("flipV"),null,function(){o.toggleCellStyles(mxConstants.STYLE_FLIPV,!1)},t),this.addMenuItems(e,["-","rotation"],t)}))),this.put("align",new Menu(mxUtils.bind(this,function(e,t){e.addItem(mxResources.get("leftAlign"),null,function(){o.alignCells(mxConstants.ALIGN_LEFT)},t),e.addItem(mxResources.get("center"),null,function(){o.alignCells(mxConstants.ALIGN_CENTER)},t),e.addItem(mxResources.get("rightAlign"),null,function(){o.alignCells(mxConstants.ALIGN_RIGHT)},t),e.addSeparator(t),e.addItem(mxResources.get("topAlign"),null,function(){o.alignCells(mxConstants.ALIGN_TOP)},t),e.addItem(mxResources.get("middle"),null,function(){o.alignCells(mxConstants.ALIGN_MIDDLE)},t),e.addItem(mxResources.get("bottomAlign"),null,function(){o.alignCells(mxConstants.ALIGN_BOTTOM)},t)}))),this.put("distribute",new Menu(mxUtils.bind(this,function(e,t){e.addItem(mxResources.get("horizontal"),null,function(){o.distributeCells(!0)},t),e.addItem(mxResources.get("vertical"),null,function(){o.distributeCells(!1)},t)}))),this.put("layout",new Menu(mxUtils.bind(this,function(e,t){var i=mxUtils.bind(this,function(e,t){e=new FilenameDialog(this.editorUi,e,mxResources.get("apply"),function(e){t(parseFloat(e))},mxResources.get("spacing"));this.editorUi.showDialog(e.container,300,80,!0,!0),e.init()});e.addItem(mxResources.get("horizontalFlow"),null,mxUtils.bind(this,function(){var t=new mxHierarchicalLayout(o,mxConstants.DIRECTION_WEST);this.editorUi.executeLayout(function(){var e=o.getSelectionCells();t.execute(o.getDefaultParent(),0==e.length?null:e)},!0)}),t),e.addItem(mxResources.get("verticalFlow"),null,mxUtils.bind(this,function(){var t=new mxHierarchicalLayout(o,mxConstants.DIRECTION_NORTH);this.editorUi.executeLayout(function(){var e=o.getSelectionCells();t.execute(o.getDefaultParent(),0==e.length?null:e)},!0)}),t),e.addSeparator(t),e.addItem(mxResources.get("horizontalTree"),null,mxUtils.bind(this,function(){var t,n=o.getSelectionCell(),e=null;null==n||0==o.getModel().getChildCount(n)?0==o.getModel().getEdgeCount(n)&&(e=o.findTreeRoots(o.getDefaultParent())):e=o.findTreeRoots(n),null!=(n=null!=e&&0<e.length?e[0]:n)&&((t=new mxCompactTreeLayout(o,!0)).edgeRouting=!1,t.levelDistance=30,i(t.levelDistance,mxUtils.bind(this,function(e){t.levelDistance=e,this.editorUi.executeLayout(function(){t.execute(o.getDefaultParent(),n)},!0)})))}),t),e.addItem(mxResources.get("verticalTree"),null,mxUtils.bind(this,function(){var t,n=o.getSelectionCell(),e=null;null==n||0==o.getModel().getChildCount(n)?0==o.getModel().getEdgeCount(n)&&(e=o.findTreeRoots(o.getDefaultParent())):e=o.findTreeRoots(n),null!=(n=null!=e&&0<e.length?e[0]:n)&&((t=new mxCompactTreeLayout(o,!1)).edgeRouting=!1,t.levelDistance=30,i(t.levelDistance,mxUtils.bind(this,function(e){t.levelDistance=e,this.editorUi.executeLayout(function(){t.execute(o.getDefaultParent(),n)},!0)})))}),t),e.addItem(mxResources.get("radialTree"),null,mxUtils.bind(this,function(){var t,n=o.getSelectionCell(),e=null;null==n||0==o.getModel().getChildCount(n)?0==o.getModel().getEdgeCount(n)&&(e=o.findTreeRoots(o.getDefaultParent())):e=o.findTreeRoots(n),null!=(n=null!=e&&0<e.length?e[0]:n)&&((t=new mxRadialTreeLayout(o,!1)).levelDistance=80,t.autoRadius=!0,i(t.levelDistance,mxUtils.bind(this,function(e){t.levelDistance=e,this.editorUi.executeLayout(function(){t.execute(o.getDefaultParent(),n),o.isSelectionEmpty()||(n=o.getModel().getParent(n),o.getModel().isVertex(n)&&o.updateGroupBounds([n],2*o.gridSize,!0))},!0)})))}),t),e.addSeparator(t),e.addItem(mxResources.get("organic"),null,mxUtils.bind(this,function(){var t=new mxFastOrganicLayout(o);i(t.forceConstant,mxUtils.bind(this,function(e){t.forceConstant=e,this.editorUi.executeLayout(function(){var e=o.getSelectionCell();null!=e&&0!=o.getModel().getChildCount(e)||(e=o.getDefaultParent()),t.execute(e),o.getModel().isVertex(e)&&o.updateGroupBounds([e],2*o.gridSize,!0)},!0)}))}),t),e.addItem(mxResources.get("circle"),null,mxUtils.bind(this,function(){var t=new mxCircleLayout(o);this.editorUi.executeLayout(function(){var e=o.getSelectionCell();null!=e&&0!=o.getModel().getChildCount(e)||(e=o.getDefaultParent()),t.execute(e),o.getModel().isVertex(e)&&o.updateGroupBounds([e],2*o.gridSize,!0)},!0)}),t)}))),this.put("navigation",new Menu(mxUtils.bind(this,function(e,t){this.addMenuItems(e,["home","-","exitGroup","enterGroup","-","expand","collapse","-","collapsible"],t)}))),this.put("arrange",new Menu(mxUtils.bind(this,function(e,t){this.addMenuItems(e,["toFront","toBack","-"],t),this.addSubmenu("direction",e,t),this.addMenuItems(e,["turn","-"],t),this.addSubmenu("align",e,t),this.addSubmenu("distribute",e,t),e.addSeparator(t),this.addSubmenu("navigation",e,t),this.addSubmenu("insert",e,t),this.addSubmenu("layout",e,t),this.addMenuItems(e,["-","group","ungroup","removeFromGroup","-","clearWaypoints","autosize"],t)}))).isEnabled=e,this.put("insert",new Menu(mxUtils.bind(this,function(e,t){this.addMenuItems(e,["insertLink","insertImage"],t)}))),this.put("view",new Menu(mxUtils.bind(this,function(e,t){this.addMenuItems(e,(null!=this.editorUi.format?["formatPanel"]:[]).concat(["outline","layers","-","pageView","pageScale","-","scrollbars","tooltips","-","grid","guides","-","connectionArrows","connectionPoints","-","resetView","zoomIn","zoomOut"],t))}))),this.put("viewPanels",new Menu(mxUtils.bind(this,function(e,t){null!=this.editorUi.format&&this.addMenuItems(e,["formatPanel"],t),this.addMenuItems(e,["outline","layers"],t)}))),this.put("viewZoom",new Menu(mxUtils.bind(this,function(t,n){this.addMenuItems(t,["resetView","-"],n);for(var e=[.25,.5,.75,1,1.25,1.5,2,3,4],i=0;i<e.length;i++)!function(e){t.addItem(100*e+"%",null,function(){o.zoomTo(e)},n)}(e[i]);this.addMenuItems(t,["-","fitWindow","fitPageWidth","fitPage","fitTwoPages","-","customZoom"],n)}))),this.put("file",new Menu(mxUtils.bind(this,function(e,t){this.addMenuItems(e,["new","open","-","save","saveAs","-","import","export","-","pageSetup","print"],t)}))),this.put("edit",new Menu(mxUtils.bind(this,function(e,t){this.addMenuItems(e,["undo","redo","-","cut","copy","paste","delete","-","duplicate","-","editData","editTooltip","-","editStyle","-","edit","-","editLink","openLink","-","selectVertices","selectEdges","selectAll","selectNone","-","lockUnlock"])}))),this.put("extras",new Menu(mxUtils.bind(this,function(e,t){this.addMenuItems(e,["copyConnect","collapseExpand","-","editDiagram"])}))),this.put("help",new Menu(mxUtils.bind(this,function(e,t){this.addMenuItems(e,["help","-","about"])})))},Menus.prototype.put=function(e,t){return this.menus[e]=t},Menus.prototype.get=function(e){return this.menus[e]},Menus.prototype.addSubmenu=function(e,t,n,i){var l=this.get(e);null!=l&&(l=l.isEnabled(),(t.showDisabled||l)&&(i=t.addItem(i||mxResources.get(e),null,null,n,null,l),this.addMenu(e,t,i)))},Menus.prototype.addMenu=function(e,t,n){var i=this.get(e);null!=i&&(t.showDisabled||i.isEnabled())&&this.get(e).execute(t,n)},Menus.prototype.addInsertTableCellItem=function(e,t){var i=this.editorUi.editor.graph;this.addInsertTableItem(e,mxUtils.bind(this,function(e,t,n){t=mxEvent.isControlDown(e)||mxEvent.isMetaDown(e)?i.createCrossFunctionalSwimlane(t,n):i.createTable(t,n,null,null,mxEvent.isShiftDown(e)?"Table":null),n=mxEvent.isAltDown(e)?i.getFreeInsertPoint():i.getCenterInsertPoint(i.getBoundingBoxFromGeometry([t],!0)),e=i.importCells([t],n.x,n.y);null!=e&&0<e.length&&(i.scrollCellToVisible(e[0]),i.setSelectionCells(e))}),t)},Menus.prototype.addInsertTableItem=function(e,n,t){n=null!=n?n:mxUtils.bind(this,function(e,t,n){var i=this.editorUi.editor.graph,e=i.getParentByName(mxEvent.getSource(e),"TD");if(null!=e&&null!=i.cellEditor.textarea){i.getParentByName(e,"TR");for(var l=i.cellEditor.textarea.getElementsByTagName("table"),o=[],s=0;s<l.length;s++)o.push(l[s]);i.container.focus(),i.pasteHtmlAtCaret(function(e,t){for(var n=["<table>"],i=0;i<e;i++){n.push("<tr>");for(var l=0;l<t;l++)n.push("<td><br></td>");n.push("</tr>")}return n.push("</table>"),n.join("")}(t,n));var r=i.cellEditor.textarea.getElementsByTagName("table");if(r.length==o.length+1)for(s=r.length-1;0<=s;s--)if(0==s||r[s]!=o[s-1]){i.selectNode(r[s].rows[0].cells[0]);break}}});var g=this.editorUi.editor.graph,p=null,f=null;var e=e.addItem("",null,null,t,null,null,null,!0),x='<img src="'+mxClient.imageBasePath+'/transparent.gif" width="16" height="16"/>';e.firstChild.innerHTML="";var M=function(e,t){var n=document.createElement("table");n.setAttribute("border","1"),n.style.borderCollapse="collapse",n.style.borderStyle="solid",mxClient.IS_QUIRKS||n.setAttribute("cellPadding","8");for(var i=0;i<e;i++)for(var l=n.insertRow(i),o=0;o<t;o++){var s=l.insertCell(-1);mxClient.IS_QUIRKS&&(s.innerHTML=x)}return n}(5,5),C=(e.firstChild.appendChild(M),document.createElement("div"));function i(e){var t=!1;if(null!=(f=g.getParentByName(mxEvent.getSource(e),"TD"))){p=g.getParentByName(f,"TR");for(var n=mxEvent.isMouseEvent(e)?2:4,i=M,l=Math.min(20,p.sectionRowIndex+n),o=Math.min(20,f.cellIndex+n),s=i.rows.length;s<l;s++)for(var r=i.insertRow(s),u=0;u<i.rows[0].cells.length;u++){var a=r.insertCell(-1);mxClient.IS_QUIRKS&&(a.innerHTML=x)}for(s=0;s<i.rows.length;s++)for(u=(r=i.rows[s]).cells.length;u<o;u++){a=r.insertCell(-1);mxClient.IS_QUIRKS&&(a.innerHTML=x)}C.innerHTML=f.cellIndex+1+"x"+(p.sectionRowIndex+1);for(var d=0;d<M.rows.length;d++)for(var c=M.rows[d],m=0;m<c.cells.length;m++){var h=c.cells[m];d==p.sectionRowIndex&&m==f.cellIndex&&(t="blue"==h.style.backgroundColor),d<=p.sectionRowIndex&&m<=f.cellIndex?h.style.backgroundColor="blue":h.style.backgroundColor="transparent"}}return mxEvent.consume(e),t}C.style.padding="4px",C.style.fontSize=Menus.prototype.defaultFontSize+"px",C.innerHTML="1x1",e.firstChild.appendChild(C),mxEvent.addGestureListeners(M,null,null,mxUtils.bind(this,function(e){var t=i(e);null!=f&&null!=p&&t&&(n(e,p.sectionRowIndex+1,f.cellIndex+1),window.setTimeout(mxUtils.bind(this,function(){this.editorUi.hideCurrentMenu()}),0))})),mxEvent.addListener(M,"mouseover",i)},Menus.prototype.edgeStyleChange=function(e,t,r,u,n,i,a){return e.addItem(t,null,mxUtils.bind(this,function(){var e=this.editorUi.editor.graph;e.stopEditing(!1),e.getModel().beginUpdate();try{for(var t=e.getSelectionCells(),n=[],i=0;i<t.length;i++){var l,o=t[i];if(e.getModel().isEdge(o)){!a||null!=(l=e.getCellGeometry(o))&&((l=l.clone()).points=null,e.getModel().setGeometry(o,l));for(var s=0;s<r.length;s++)e.setCellStyles(r[s],u[s],[o]);n.push(o)}}this.editorUi.fireEvent(new mxEventObject("styleChanged","keys",r,"values",u,"cells",n))}finally{e.getModel().endUpdate()}}),i,n)},Menus.prototype.styleChange=function(e,t,n,i,l,o,s,r){var u=this.createStyleChangeFunction(n,i);return e.addItem(t,null,mxUtils.bind(this,function(){var e=this.editorUi.editor.graph;null!=s&&e.cellEditor.isContentEditing()?s():u(r)}),o,l)},Menus.prototype.createStyleChangeFunction=function(o,s){return mxUtils.bind(this,function(e){var t=this.editorUi.editor.graph;t.stopEditing(!1),t.getModel().beginUpdate();try{for(var n=t.getSelectionCells(),i=0;i<o.length;i++)if(t.setCellStyles(o[i],s[i],n),o[i]==mxConstants.STYLE_ALIGN&&t.updateLabelElements(n,function(e){e.removeAttribute("align"),e.style.textAlign=null}),o[i]==mxConstants.STYLE_FONTFAMILY)for(var l=0;l<n.length;l++)0==t.model.getChildCount(n[l])&&t.autoSizeCell(n[l],!1);null!=e&&e(),this.editorUi.fireEvent(new mxEventObject("styleChanged","keys",o,"values",s,"cells",n))}finally{t.getModel().endUpdate()}})},Menus.prototype.promptChange=function(e,t,i,l,o,n,s,r,u){return e.addItem(t,null,mxUtils.bind(this,function(){var t=this.editorUi.editor.graph,e=l,n=t.getView().getState(t.getSelectionCell()),n=(null!=n&&(e=n.style[o]||e),new FilenameDialog(this.editorUi,e,mxResources.get("apply"),mxUtils.bind(this,function(e){if(null!=e&&0<e.length){t.getModel().beginUpdate();try{t.stopEditing(!1),t.setCellStyles(o,e)}finally{t.getModel().endUpdate()}null!=r&&r(e)}}),mxResources.get("enterValue")+(0<i.length?" "+i:"")));this.editorUi.showDialog(n.container,300,80,!0,!0),n.init()}),n,u,s)},Menus.prototype.pickColor=function(e,t,n){var i,l,o=this.editorUi.editor.graph,s=226+17*(Math.ceil(ColorDialog.prototype.presetColors.length/12)+Math.ceil(ColorDialog.prototype.defaultColors.length/12));null!=t&&o.cellEditor.isContentEditing()?(i=o.cellEditor.saveSelection(),n=new ColorDialog(this.editorUi,n||"000000",mxUtils.bind(this,function(e){o.cellEditor.restoreSelection(i),document.execCommand(t,!1,e!=mxConstants.NONE?e:"transparent")}),function(){o.cellEditor.restoreSelection(i)}),this.editorUi.showDialog(n.container,230,s,!0,!0),n.init()):(null==this.colorDialog&&(this.colorDialog=new ColorDialog(this.editorUi)),this.colorDialog.currentColorKey=e,(n="none")==(n=null!=(l=o.getView().getState(o.getSelectionCell()))?l.style[e]||n:n)?(this.colorDialog.picker.fromString(n="ffffff"),this.colorDialog.colorInput.value="none"):this.colorDialog.picker.fromString(n),this.editorUi.showDialog(this.colorDialog.container,230,s,!0,!0),this.colorDialog.init())},Menus.prototype.toggleStyle=function(e,t){var n=this.editorUi.editor.graph,t=n.toggleCellStyles(e,t);this.editorUi.fireEvent(new mxEventObject("styleChanged","keys",[e],"values",[t],"cells",n.getSelectionCells()))},Menus.prototype.addMenuItem=function(e,t,n,i,l,o){var s=this.editorUi.actions.get(t);return null!=s&&(e.showDisabled||s.isEnabled())&&s.visible?(t=e.addItem(o||s.label,null,function(){s.funct(i)},n,l,s.isEnabled()),s.toggleAction&&s.isSelected()&&e.addCheckmark(t,Editor.checkmarkImage),this.addShortcut(t,s),t):null},Menus.prototype.addShortcut=function(e,t){var n;null!=t.shortcut&&(e=e.firstChild.nextSibling.nextSibling,(n=document.createElement("span")).style.color="gray",mxUtils.write(n,t.shortcut),e.appendChild(n))},Menus.prototype.addMenuItems=function(e,t,n,i,l){for(var o=0;o<t.length;o++)"-"==t[o]?e.addSeparator(n):this.addMenuItem(e,t[o],n,i,null!=l?l[o]:null)},Menus.prototype.createPopupMenu=function(e,t,n){e.smartSeparators=!0,this.addPopupMenuHistoryItems(e,t,n),this.addPopupMenuEditItems(e,t,n),this.addPopupMenuStyleItems(e,t,n),this.addPopupMenuArrangeItems(e,t,n),this.addPopupMenuCellItems(e,t,n),this.addPopupMenuSelectionItems(e,t,n)},Menus.prototype.addPopupMenuHistoryItems=function(e,t,n){this.editorUi.editor.graph.isSelectionEmpty()&&this.addMenuItems(e,["undo","redo"],null,n)},Menus.prototype.addPopupMenuEditItems=function(e,t,n){this.editorUi.editor.graph.isSelectionEmpty()?this.addMenuItems(e,["pasteHere"],null,n):this.addMenuItems(e,["delete","-","cut","copy","-","duplicate"],null,n)},Menus.prototype.addPopupMenuStyleItems=function(e,t,n){1==this.editorUi.editor.graph.getSelectionCount()?this.addMenuItems(e,["-","setAsDefaultStyle"],null,n):this.editorUi.editor.graph.isSelectionEmpty()&&this.addMenuItems(e,["-","clearDefaultStyle"],null,n)},Menus.prototype.addPopupMenuArrangeItems=function(e,t,n){var i=this.editorUi.editor.graph;i.isSelectionEmpty()||this.addMenuItems(e,["-","toFront","toBack"],null,n),1<i.getSelectionCount()?this.addMenuItems(e,["-","group"],null,n):1==i.getSelectionCount()&&!i.getModel().isEdge(t)&&!i.isSwimlane(t)&&0<i.getModel().getChildCount(t)&&this.addMenuItems(e,["-","ungroup"],null,n)},Menus.prototype.addPopupMenuCellItems=function(e,t,n){var i,l,o,s,r,u=this.editorUi.editor.graph,a=(t=u.getSelectionCell(),u.view.getState(t));e.addSeparator(),null!=a&&(r=!1,u.getModel().isEdge(t)&&"entityRelationEdgeStyle"!=mxUtils.getValue(a.style,mxConstants.STYLE_EDGE,null)&&"arrow"!=mxUtils.getValue(a.style,mxConstants.STYLE_SHAPE,null)&&(l=!1,(i=u.selectionCellsHandler.getHandler(t))instanceof mxEdgeHandler&&null!=i.bends&&2<i.bends.length&&(o=i.getHandleForEvent(u.updateMouseEvent(new mxMouseEvent(n))),(s=this.editorUi.actions.get("removeWaypoint")).handler=i,l=0<(s.index=o)&&o<i.bends.length-1),e.addSeparator(),this.addMenuItem(e,"turn",null,n,null,mxResources.get("reverse")),this.addMenuItems(e,[l?"removeWaypoint":"addWaypoint"],null,n),r=null!=(s=u.getModel().getGeometry(t))&&null!=s.points&&0<s.points.length),1==u.getSelectionCount()&&(r||u.getModel().isVertex(t)&&0<u.getModel().getEdgeCount(t))&&this.addMenuItems(e,["-","clearWaypoints"],null,n),1==u.getSelectionCount()&&(this.addMenuItems(e,["-","editStyle","editData","editLink"],null,n),u.getModel().isVertex(t)&&null!=mxUtils.getValue(a.style,mxConstants.STYLE_IMAGE,null)&&(e.addSeparator(),this.addMenuItem(e,"image",null,n).firstChild.nextSibling.innerHTML=mxResources.get("editImage")+"...")))},Menus.prototype.addPopupMenuSelectionItems=function(e,t,n){this.editorUi.editor.graph.isSelectionEmpty()&&this.addMenuItems(e,["-","selectVertices","selectEdges","selectAll"],null,n)},Menus.prototype.createMenubar=function(e){for(var n=new Menubar(this.editorUi,e),i=this.defaultMenuItems,l=0;l<i.length;l++)mxUtils.bind(this,function(e){var t=n.addMenu(mxResources.get(i[l]),mxUtils.bind(this,function(){e.funct.apply(this,arguments)}));this.menuCreated(e,t)})(this.get(i[l]));return n},Menus.prototype.menuCreated=function(e,t,n){null!=t&&(n=null!=n?n:"geItem",e.addListener("stateChanged",function(){t.enabled=e.enabled,e.enabled?(t.className=n,8==document.documentMode&&(t.style.color="")):(t.className=n+" mxDisabled",8==document.documentMode&&(t.style.color="#c3c3c3"))}))},Menubar.prototype.hideMenu=function(){this.editorUi.hideCurrentMenu()},Menubar.prototype.addMenu=function(e,t,n){var i=document.createElement("a");return i.className="geItem",mxUtils.write(i,e),this.addMenuHandler(i,t),null!=n?this.container.insertBefore(i,n):this.container.appendChild(i),i},Menubar.prototype.addMenuHandler=function(i,l){var o,t;null!=l&&(o=!0,t=mxUtils.bind(this,function(e){var t,n;(o&&null==i.enabled||i.enabled)&&(this.editorUi.editor.graph.popupMenuHandler.hideMenu(),(t=new mxPopupMenu(l)).div.className+=" geMenubarMenu",t.smartSeparators=!0,t.showDisabled=!0,t.autoExpand=!0,t.hideMenu=mxUtils.bind(this,function(){mxPopupMenu.prototype.hideMenu.apply(t,arguments),this.editorUi.resetCurrentMenu(),t.destroy()}),n=mxUtils.getOffset(i),t.popup(n.x,n.y+i.offsetHeight,null,e),this.editorUi.setCurrentMenu(t,i)),mxEvent.consume(e)}),mxEvent.addListener(i,"mousemove",mxUtils.bind(this,function(e){null!=this.editorUi.currentMenu&&this.editorUi.currentMenuElt!=i&&(this.editorUi.hideCurrentMenu(),t(e))})),mxEvent.addListener(i,mxClient.IS_POINTER?"pointerdown":"mousedown",mxUtils.bind(this,function(e){o=this.currentElt!=i,e.preventDefault()})),mxEvent.addListener(i,"click",mxUtils.bind(this,function(e){t(e),o=!0})))},Menubar.prototype.destroy=function(){},mxUtils.extend(Menu,mxEventSource),Menu.prototype.isEnabled=function(){return this.enabled},Menu.prototype.setEnabled=function(e){this.enabled!=e&&(this.enabled=e,this.fireEvent(new mxEventObject("stateChanged")))},Menu.prototype.execute=function(e,t){this.funct(e,t)},EditorUi.prototype.createMenus=function(){return new Menus(this)};