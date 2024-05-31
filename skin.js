// Garden Gnome Software - Skin
// Pano2VR 6.1.16/18125
// Filename: od_kamil.ggsk
// Generated 2024-05-31T12:16:35

function pano2vrSkin(player,base) {
	player.addVariable('opt_hotspot_preview', 2, true);
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true);
	player.addVariable('vis_thumbnail_menu', 2, false);
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('vis_website', 2, false);
	player.addVariable('opt_url', 2, false);
	player.addVariable('vis_video_youtube', 2, false);
	player.addVariable('opt_zoom', 2, true);
	player.addVariable('opt_projection', 2, true);
	player.addVariable('opt_thumbnail', 2, true);
	player.addVariable('opt_fullscreen', 2, true);
	player.addVariable('opt_vr', 2, true);
	player.addVariable('pos_zoom', 1, 0);
	player.addVariable('pos_projection', 1, 0);
	player.addVariable('pos_thumbnail', 1, 0);
	player.addVariable('pos_fullscreen', 1, 0);
	player.addVariable('pos_vr', 1, 0);
	player.addVariable('pos_slider', 1, 0);
	player.addVariable('vis_map', 2, false);
	player.addVariable('vis_map_close_desktop', 2, true);
	player.addVariable('vis_map_close_mobile', 2, true);
	player.addVariable('vis_info_start', 2, false);
	player.addVariable('vis_info_popup_1', 2, false);
	player.addVariable('vis_icon_help', 2, false);
	player.addVariable('vis_bg_dark', 2, false);
	player.addVariable('opt_thumbnail_menu_tooltip_1', 2, true);
	player.addVariable('vis_thumbnail_menu_1', 2, false);
	player.addVariable('vis_loader', 2, true);
	player.addVariable('vis_info_popup_eng', 2, false);
	player.addVariable('vis_info_popup_3', 2, false);
	player.addVariable('vis_info_popup_2', 2, false);
	player.addVariable('category_visible', 2, true);
	player.addVariable('node_visible', 2, true);
	player.addVariable('vis_thumbs', 2, true);
	player.addVariable('resp_phone', 2, false);
	player.addVariable('opt_thumbnail_menu_tooltip_2', 2, true);
	player.addVariable('vis_thumbnail_menu_2', 2, false);
	player.addVariable('opt_thumbnail_menu_tooltip_3', 2, true);
	player.addVariable('vis_thumbnail_menu_3', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._screendarker=document.createElement('div');
		el.ggId="screen-darker";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 100;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,0,0.882353);';
		hs+='border : 1px solid rgba(0,0,0,0.705882);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screendarker.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screendarker.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_bg_dark') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screendarker.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screendarker.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screendarker.style[domTransition]='';
				if (me._screendarker.ggCurrentLogicStateVisible == 0) {
					me._screendarker.style.visibility=(Number(me._screendarker.style.opacity)>0||!me._screendarker.style.opacity)?'inherit':'hidden';
					me._screendarker.ggVisible=true;
				}
				else if (me._screendarker.ggCurrentLogicStateVisible == 1) {
					me._screendarker.style.visibility="hidden";
					me._screendarker.ggVisible=false;
				}
				else if (me._screendarker.ggCurrentLogicStateVisible == 2) {
					me._screendarker.style.visibility=(Number(me._screendarker.style.opacity)>0||!me._screendarker.style.opacity)?'inherit':'hidden';
					me._screendarker.ggVisible=true;
				}
				else {
					me._screendarker.style.visibility="hidden";
					me._screendarker.ggVisible=false;
				}
			}
		}
		me._screendarker.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu', false);
		}
		me._screendarker.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screendarker);
		el=me._map_container=document.createElement('div');
		el.ggId="map_container";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container googleMap_Container";
		el.ggType='container';
		hs ='';
		hs+='z-index: 2200;';
		hs+='height : 75%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100%  -  15vw);';
		hs+='pointer-events:none;';
		hs+='.googleMap_Container{border-radius: 8px;}';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_container.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_container.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_container.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_container.style[domTransition]='';
				if (me._map_container.ggCurrentLogicStateVisible == 0) {
					me._map_container.style.visibility=(Number(me._map_container.style.opacity)>0||!me._map_container.style.opacity)?'inherit':'hidden';
					me._map_container.ggVisible=true;
				}
				else if (me._map_container.ggCurrentLogicStateVisible == 1) {
					me._map_container.style.visibility="hidden";
					me._map_container.ggVisible=false;
				}
				else {
					me._map_container.style.visibility="hidden";
					me._map_container.ggVisible=false;
				}
			}
		}
		me._map_container.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._map=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggId="map";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_map container_GoogleMap";
		el.ggType='map';
		hs ='';
		hs+='z-index: 1000;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map.style[domTransition]='';
				if (me._map.ggCurrentLogicStateVisible == 0) {
					me._map.style.visibility=(Number(me._map.style.opacity)>0||!me._map.style.opacity)?'inherit':'hidden';
					if (me._map.ggMapNotLoaded) {
						me._map.ggInitMap(false);
						me._map.ggInitMapMarkers(true);
					}
					me._map.ggVisible=true;
				}
				else {
					me._map.style.visibility="hidden";
					me._map.ggClearMap();
					me._map.ggVisible=false;
				}
			}
		}
		me._map.ggCurrentLogicStateVisible = -1;
		me._map.ggUpdateConditionTimer=function () {
			me._map.ggRadar.update();
		}
		me._map.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._map.ggNodeChange=function () {
			if (me._map.ggLastActivMarker) {
				if (me._map.ggLastActivMarker._div.ggDeactivate) me._map.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._map.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._map.ggLastActivMarker=marker;
			}
			if (!me._map.ggMapNotLoaded) {
				me._map.ggCenterNode();
			}
			if (player.getMapType(me._map.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map.ggChangeMap(mapId);
					}
				}
			}
			if (me._map.ggLastNodeId && me._map.ggGoogleMarkerArray.hasOwnProperty(me._map.ggLastNodeId)) {
				me._map.ggGoogleMarkerClusterer.addMarker(me._map.ggGoogleMarkerArray[me._map.ggLastNodeId]);
			}
			if (me._map.ggGoogleMarkerArray.hasOwnProperty(id)) {
				me._map.ggGoogleMarkerClusterer.removeMarker(me._map.ggGoogleMarkerArray[id]);
				me._map.ggGoogleMarkerArray[id].setMap(me._map.ggMap);
			}
			me._map.ggLastNodeId = id;
		}
		me._map_container.appendChild(me._map);
		el=me._svg4=document.createElement('div');
		els=me._svg4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMjQiIGFyaWEtaGlkZGVuPSJ0cnVlIiBkYXRhLXRlc3RpZD0iQ2xvc2VJY29uIiBjbGFzcz0iTXVpU3ZnSWNvbi1yb290IE11aVN2Z0ljb24tZm9udFNpemVNZWRpdW0gY3NzLWk0YnY4Ny1NdWlTdmdJY29uLXJvb3QiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBmb2N1c2FibGU9ImZhbHNlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCI+CiA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTkgNi40MSAxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMT'+
			'IgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPgo8L3N2Zz4K';
		me._svg4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg4__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMjQiIGFyaWEtaGlkZGVuPSJ0cnVlIiBkYXRhLXRlc3RpZD0iS2V5Ym9hcmRBcnJvd0xlZnRJY29uIiBjbGFzcz0iTXVpU3ZnSWNvbi1yb290IE11aVN2Z0ljb24tZm9udFNpemVNZWRpdW0gY3NzLWk0YnY4Ny1NdWlTdmdJY29uLXJvb3QiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBmb2N1c2FibGU9ImZhbHNlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCI+CiA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTUuNDEgMTYuNTkgMTAuODMgMTJsNC41OC00LjU5TDE0ID'+
			'ZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPgo8L3N2Zz4K';
		me._svg4__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg btn-round pointer";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 1100;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 24px;';
		hs+='top : 24px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg4.onclick=function (e) {
			player.setVariableValue('vis_map', false);
		}
		me._svg4.onmouseover=function (e) {
			me._svg4__img.style.visibility='hidden';
			me._svg4__imgo.style.visibility='inherit';
		}
		me._svg4.onmouseout=function (e) {
			me._svg4__img.style.visibility='inherit';
			me._svg4__imgo.style.visibility='hidden';
		}
		me._svg4.ggUpdatePosition=function (useTransition) {
		}
		me._map_container.appendChild(me._svg4);
		me.divSkin.appendChild(me._map_container);
		el=me._menu=document.createElement('div');
		el.ggId="Menu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container container-slider-menu";
		el.ggType='container';
		hs ='';
		hs+='z-index: 0;';
		hs+='bottom : 0px;';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu.style[domTransition]='';
				if (me._menu.ggCurrentLogicStateVisible == 0) {
					me._menu.style.visibility="hidden";
					me._menu.ggVisible=false;
				}
				else {
					me._menu.style.visibility=(Number(me._menu.style.opacity)>0||!me._menu.style.opacity)?'inherit':'hidden';
					me._menu.ggVisible=true;
				}
			}
		}
		me._menu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle google-menu";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : rgba(255,255,255,0.882353);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -64px;';
		hs+='cursor : default;';
		hs+='height : 128px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._menu.appendChild(me._rectangle_2);
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggDx=25;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen.onmouseover=function (e) {
			me.elementMouseOver['button_fullscreen']=true;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._button_fullscreen.onmouseout=function (e) {
			me.elementMouseOver['button_fullscreen']=false;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._button_fullscreen.ontouchend=function (e) {
			me.elementMouseOver['button_fullscreen']=false;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9ImJsYWNrIiBjbGFzcz0iYmkgYmktZnVsbHNjcmVlbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTYiPgogPHBhdGggZD0iTTEuNSAxYS41LjUgMCAwIDAtLjUuNXY0YS41LjUgMCAwIDEtMSAwdi00QTEuNSAxLjUgMCAwIDEgMS41IDBoNGEuNS41IDAgMCAxIDAgMWgtNHpNMTAgLjVhLjUuNSAwIDAgMSAuNS0uNWg0QTEuNSAxLjUgMCAwIDEgMTYgMS41djRhLjUuNSAwIDAgMS0xIDB2LTRhLjUuNSAwIDAgMC0uNS0uNWgtNGEuNS41IDAgMCAxLS41LS41ek0uNSAxMGEuNS41IDAgMCAxIC'+
			'41LjV2NGEuNS41IDAgMCAwIC41LjVoNGEuNS41IDAgMCAxIDAgMWgtNEExLjUgMS41IDAgMCAxIDAgMTQuNXYtNGEuNS41IDAgMCAxIC41LS41em0xNSAwYS41LjUgMCAwIDEgLjUuNXY0YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNGEuNS41IDAgMCAxIDAtMWg0YS41LjUgMCAwIDAgLjUtLjV2LTRhLjUuNSAwIDAgMSAuNS0uNXoiLz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_normalscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9ImJsYWNrIiBjbGFzcz0iYmkgYmktZnVsbHNjcmVlbi1leGl0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiI+CiA8cGF0aCBkPSJNNS41IDBhLjUuNSAwIDAgMSAuNS41djRBMS41IDEuNSAwIDAgMSA0LjUgNmgtNGEuNS41IDAgMCAxIDAtMWg0YS41LjUgMCAwIDAgLjUtLjV2LTRhLjUuNSAwIDAgMSAuNS0uNXptNSAwYS41LjUgMCAwIDEgLjUuNXY0YS41LjUgMCAwIDAgLjUuNWg0YS41LjUgMCAwIDEgMCAxaC00QTEuNSAxLjUgMCAwIDEgMTAgNC41di00YS41LjUgMCAwIDEgLjUtLj'+
			'V6TTAgMTAuNWEuNS41IDAgMCAxIC41LS41aDRBMS41IDEuNSAwIDAgMSA2IDExLjV2NGEuNS41IDAgMCAxLTEgMHYtNGEuNS41IDAgMCAwLS41LS41aC00YS41LjUgMCAwIDEtLjUtLjV6bTEwIDFhMS41IDEuNSAwIDAgMSAxLjUtMS41aDRhLjUuNSAwIDAgMSAwIDFoLTRhLjUuNSAwIDAgMC0uNS41djRhLjUuNSAwIDAgMS0xIDB2LTR6Ii8+Cjwvc3ZnPgo=';
		me._button_image_normalscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_normalscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg icon-style";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style[domTransition]='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.onmouseover=function (e) {
			me._button_image_normalscreen__img.style.visibility='hidden';
			me._button_image_normalscreen__imgo.style.visibility='inherit';
		}
		me._button_image_normalscreen.onmouseout=function (e) {
			me._button_image_normalscreen__img.style.visibility='inherit';
			me._button_image_normalscreen__imgo.style.visibility='hidden';
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9ImJsYWNrIiBjbGFzcz0iYmkgYmktZnVsbHNjcmVlbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTYiPgogPHBhdGggZD0iTTEuNSAxYS41LjUgMCAwIDAtLjUuNXY0YS41LjUgMCAwIDEtMSAwdi00QTEuNSAxLjUgMCAwIDEgMS41IDBoNGEuNS41IDAgMCAxIDAgMWgtNHpNMTAgLjVhLjUuNSAwIDAgMSAuNS0uNWg0QTEuNSAxLjUgMCAwIDEgMTYgMS41djRhLjUuNSAwIDAgMS0xIDB2LTRhLjUuNSAwIDAgMC0uNS0uNWgtNGEuNS41IDAgMCAxLS41LS41ek0uNSAxMGEuNS41IDAgMCAxIC'+
			'41LjV2NGEuNS41IDAgMCAwIC41LjVoNGEuNS41IDAgMCAxIDAgMWgtNEExLjUgMS41IDAgMCAxIDAgMTQuNXYtNGEuNS41IDAgMCAxIC41LS41em0xNSAwYS41LjUgMCAwIDEgLjUuNXY0YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNGEuNS41IDAgMCAxIDAtMWg0YS41LjUgMCAwIDAgLjUtLjV2LTRhLjUuNSAwIDAgMSAuNS0uNXoiLz4KPC9zdmc+Cg==';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9ImJsYWNrIiBjbGFzcz0iYmkgYmktYXJyb3dzLWZ1bGxzY3JlZW4iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2Ij4KIDxwYXRoIGQ9Ik01LjgyOCAxMC4xNzJhLjUuNSAwIDAgMC0uNzA3IDBsLTQuMDk2IDQuMDk2VjExLjVhLjUuNSAwIDAgMC0xIDB2My45NzVhLjUuNSAwIDAgMCAuNS41SDQuNWEuNS41IDAgMCAwIDAtMUgxLjczMmw0LjA5Ni00LjA5NmEuNS41IDAgMCAwIDAtLjcwN3ptNC4zNDQgMGEuNS41IDAgMCAxIC43MDcgMGw0LjA5NiA0LjA5NlYxMS41YS41LjUgMCAxIDEgMS'+
			'AwdjMuOTc1YS41LjUgMCAwIDEtLjUuNUgxMS41YS41LjUgMCAwIDEgMC0xaDIuNzY4bC00LjA5Ni00LjA5NmEuNS41IDAgMCAxIDAtLjcwN3ptMC00LjM0NGEuNS41IDAgMCAwIC43MDcgMGw0LjA5Ni00LjA5NlY0LjVhLjUuNSAwIDEgMCAxIDBWLjUyNWEuNS41IDAgMCAwLS41LS41SDExLjVhLjUuNSAwIDAgMCAwIDFoMi43NjhsLTQuMDk2IDQuMDk2YS41LjUgMCAwIDAgMCAuNzA3em0tNC4zNDQgMGEuNS41IDAgMCAxLS43MDcgMEwxLjAyNSAxLjczMlY0LjVhLjUuNSAwIDAgMS0xIDBWLjUyNWEuNS41IDAgMCAxIC41LS41SDQuNWEuNS41IDAgMCAxIDAgMUgxLjczMmw0LjA5NiA0LjA5NmEu'+
			'NS41IDAgMCAxIDAgLjcwN3oiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K';
		me._button_image_fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_fullscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg icon-style";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.onmouseover=function (e) {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
		}
		me._button_image_fullscreen.onmouseout=function (e) {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._button_fullscreen.appendChild(me._button_image_fullscreen);
		el=me._tt_fullscreen=document.createElement('div');
		els=me._tt_fullscreen__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_fullscreen";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_fullscreen.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_fullscreen.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_fullscreen.style.top='-25px';
					me._tt_fullscreen.ggUpdatePosition(true);
				}
				else {
					me._tt_fullscreen.ggDx=0;
					me._tt_fullscreen.style.top='-32px';
					me._tt_fullscreen.ggUpdatePosition(true);
				}
			}
		}
		me._tt_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['button_fullscreen'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._tt_fullscreen.style.visibility=(Number(me._tt_fullscreen.style.opacity)>0||!me._tt_fullscreen.style.opacity)?'inherit':'hidden';
					me._tt_fullscreen.ggVisible=true;
				}
				else {
					me._tt_fullscreen.style.visibility="hidden";
					me._tt_fullscreen.ggVisible=false;
				}
			}
		}
		me._tt_fullscreen.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getIsFullscreen() == false))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_fullscreen.ggCurrentLogicStateText = newLogicStateText;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStateText == 0) {
					me._tt_fullscreen.ggText="Enter Fullscreen";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="Enter Fullscreen";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else if (me._tt_fullscreen.ggCurrentLogicStateText == 1) {
					me._tt_fullscreen.ggText="Exit Fullscreen";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="Exit Fullscreen";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else {
					me._tt_fullscreen.ggText="";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._button_fullscreen.appendChild(me._tt_fullscreen);
		me._menu.appendChild(me._button_fullscreen);
		el=me._svg_5=document.createElement('div');
		els=me._svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9ImJsYWNrIiBjbGFzcz0iYmkgYmktaG91c2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2Ij4KIDxwYXRoIGQ9Ik04LjcwNyAxLjVhMSAxIDAgMCAwLTEuNDE0IDBMLjY0NiA4LjE0NmEuNS41IDAgMCAwIC43MDguNzA4TDIgOC4yMDdWMTMuNUExLjUgMS41IDAgMCAwIDMuNSAxNWg5YTEuNSAxLjUgMCAwIDAgMS41LTEuNVY4LjIwN2wuNjQ2LjY0N2EuNS41IDAgMCAwIC43MDgtLjcwOEwxMyA1Ljc5M1YyLjVhLjUuNSAwIDAgMC0uNS0uNWgtMWEuNS41IDAgMCAwLS41LjV2MS4yOTNMOC'+
			'43MDcgMS41Wk0xMyA3LjIwN1YxMy41YS41LjUgMCAwIDEtLjUuNWgtOWEuNS41IDAgMCAxLS41LS41VjcuMjA3bDUtNSA1IDVaIi8+Cjwvc3ZnPgo=';
		me._svg_5__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_5__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9ImJsYWNrIiBjbGFzcz0iYmkgYmktaG91c2UtYWRkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiI+CiA8cGF0aCBkPSJNOC43MDcgMS41YTEgMSAwIDAgMC0xLjQxNCAwTC42NDYgOC4xNDZhLjUuNSAwIDAgMCAuNzA4LjcwOEwyIDguMjA3VjEzLjVBMS41IDEuNSAwIDAgMCAzLjUgMTVoNGEuNS41IDAgMSAwIDAtMWgtNGEuNS41IDAgMCAxLS41LS41VjcuMjA3bDUtNSA2LjY0NiA2LjY0N2EuNS41IDAgMCAwIC43MDgtLjcwOEwxMyA1Ljc5M1YyLjVhLjUuNSAwIDAgMC0uNS0uNWgtMW'+
			'EuNS41IDAgMCAwLS41LjV2MS4yOTNMOC43MDcgMS41WiIvPgogPHBhdGggZD0iTTE2IDEyLjVhMy41IDMuNSAwIDEgMS03IDAgMy41IDMuNSAwIDAgMSA3IDBabS0zLjUtMmEuNS41IDAgMCAwLS41LjV2MWgtMWEuNS41IDAgMCAwIDAgMWgxdjFhLjUuNSAwIDEgMCAxIDB2LTFoMWEuNS41IDAgMSAwIDAtMWgtMXYtMWEuNS41IDAgMCAwLS41LS41WiIvPgo8L3N2Zz4K';
		me._svg_5__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me._svg_5__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9ImJsYWNrIiBjbGFzcz0iYmkgYmktaG91c2UtY2hlY2stZmlsbCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTYiPgogPHBhdGggZD0iTTguNzA3IDEuNWExIDEgMCAwIDAtMS40MTQgMEwuNjQ2IDguMTQ2YS41LjUgMCAwIDAgLjcwOC43MDhMOCAyLjIwN2w2LjY0NiA2LjY0N2EuNS41IDAgMCAwIC43MDgtLjcwOEwxMyA1Ljc5M1YyLjVhLjUuNSAwIDAgMC0uNS0uNWgtMWEuNS41IDAgMCAwLS41LjV2MS4yOTNMOC43MDcgMS41WiIvPgogPHBhdGggZD0ibTggMy4yOTMgNC43MTIgNC43MT'+
			'JBNC41IDQuNSAwIDAgMCA4Ljc1OCAxNUgzLjVBMS41IDEuNSAwIDAgMSAyIDEzLjVWOS4yOTNsNi02WiIvPgogPHBhdGggZD0iTTEyLjUgMTZhMy41IDMuNSAwIDEgMCAwLTcgMy41IDMuNSAwIDAgMCAwIDdabTEuNjc5LTQuNDkzLTEuMzM1IDIuMjI2YS43NS43NSAwIDAgMS0xLjE3NC4xNDRsLS43NzQtLjc3M2EuNS41IDAgMCAxIC43MDgtLjcwN2wuNTQ3LjU0NyAxLjE3LTEuOTUxYS41LjUgMCAxIDEgLjg1OC41MTRaIi8+Cjwvc3ZnPgo=';
		me._svg_5__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="Svg 5";
		el.ggDx=-25;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_5.onclick=function (e) {
			player.openNext("{node1282}","");
		}
		me._svg_5.onmouseover=function (e) {
			me._svg_5__img.style.visibility='hidden';
			me._svg_5__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_5']=true;
			me._tt_home.logicBlock_visible();
		}
		me._svg_5.onmouseout=function (e) {
			me._svg_5__img.style.visibility='inherit';
			me._svg_5__imgo.style.visibility='hidden';
			me._svg_5__imga.style.visibility='hidden';
			me.elementMouseOver['svg_5']=false;
			me._tt_home.logicBlock_visible();
		}
		me._svg_5.onmousedown=function (e) {
			me._svg_5__imga.style.visibility='inherit';
			me._svg_5__imgo.style.visibility='hidden';
		}
		me._svg_5.onmouseup=function (e) {
			me._svg_5__imga.style.visibility='hidden';
			if (skin.player.getHasTouch()) {
				me._svg_5__img.style.visibility='inherit';
			} else {
				me._svg_5__imgo.style.visibility='inherit';
			}
		}
		me._svg_5.ontouchend=function (e) {
			me.elementMouseOver['svg_5']=false;
			me._tt_home.logicBlock_visible();
		}
		me._svg_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._tt_home=document.createElement('div');
		els=me._tt_home__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_home";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -32px;';
		hs+='visibility : hidden;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Wr\xf3\u0107 na pocz\u0105tek";
		el.appendChild(els);
		me._tt_home.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_home.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_home.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_home.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_home.style[domTransition]='left 0s, top 0s';
				if (me._tt_home.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_home.style.top='-25px';
					me._tt_home.ggUpdatePosition(true);
				}
				else {
					me._tt_home.ggDx=0;
					me._tt_home.style.top='-32px';
					me._tt_home.ggUpdatePosition(true);
				}
			}
		}
		me._tt_home.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['svg_5'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_home.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_home.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_home.style[domTransition]='left 0s, top 0s';
				if (me._tt_home.ggCurrentLogicStateVisible == 0) {
					me._tt_home.style.visibility=(Number(me._tt_home.style.opacity)>0||!me._tt_home.style.opacity)?'inherit':'hidden';
					me._tt_home.ggVisible=true;
				}
				else {
					me._tt_home.style.visibility="hidden";
					me._tt_home.ggVisible=false;
				}
			}
		}
		me._tt_home.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getCurrentNode() == "start"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_home.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_home.ggCurrentLogicStateText = newLogicStateText;
				me._tt_home.style[domTransition]='left 0s, top 0s';
				if (me._tt_home.ggCurrentLogicStateText == 0) {
					me._tt_home.ggText="Jeste\u015b na starcie";
					me._tt_home__text.innerHTML=me._tt_home.ggText;
					if (me._tt_home.ggUpdateText) {
					me._tt_home.ggUpdateText=function() {
						var hs="Jeste\u015b na starcie";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_home.ggUpdatePosition) me._tt_home.ggUpdatePosition();
					}
				}
				else {
					me._tt_home.ggText="Wr\xf3\u0107 na pocz\u0105tek";
					me._tt_home__text.innerHTML=me._tt_home.ggText;
					if (me._tt_home.ggUpdateText) {
					me._tt_home.ggUpdateText=function() {
						var hs="Wr\xf3\u0107 na pocz\u0105tek";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_home.ggUpdatePosition) me._tt_home.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_home.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((133-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._svg_5.appendChild(me._tt_home);
		me._menu.appendChild(me._svg_5);
		el=me._button_toggle_map=document.createElement('div');
		el.ggId="button_toggle_map";
		el.ggDx=-47;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_toggle_map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_toggle_map.onclick=function (e) {
			player.setVariableValue('vis_map', !player.getVariableValue('vis_map'));
		}
		me._button_toggle_map.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._button_open_map=document.createElement('div');
		els=me._button_open_map__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9ImJsYWNrIiBjbGFzcz0iYmkgYmktcGluLW1hcCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTYiPgogPHBhdGggZD0iTTMuMSAxMS4yYS41LjUgMCAwIDEgLjQtLjJINmEuNS41IDAgMCAxIDAgMUgzLjc1TDEuNSAxNWgxM2wtMi4yNS0zSDEwYS41LjUgMCAwIDEgMC0xaDIuNWEuNS41IDAgMCAxIC40LjJsMyA0YS41LjUgMCAwIDEtLjQuOEguNWEuNS41IDAgMCAxLS40LS44bDMtNHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgogPHBhdGggZD0iTTggMWEzIDMgMCAxIDAgMCA2IDMgMyAwID'+
			'AgMCAwLTZ6TTQgNGE0IDQgMCAxIDEgNC41IDMuOTY5VjEzLjVhLjUuNSAwIDAgMS0xIDBWNy45N0E0IDQgMCAwIDEgNCAzLjk5OXoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K';
		me._button_open_map__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_open_map__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9ImJsYWNrIiBjbGFzcz0iYmkgYmktcGluLW1hcC1maWxsIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiI+CiA8cGF0aCBkPSJNMy4xIDExLjJhLjUuNSAwIDAgMSAuNC0uMkg2YS41LjUgMCAwIDEgMCAxSDMuNzVMMS41IDE1aDEzbC0yLjI1LTNIMTBhLjUuNSAwIDAgMSAwLTFoMi41YS41LjUgMCAwIDEgLjQuMmwzIDRhLjUuNSAwIDAgMS0uNC44SC41YS41LjUgMCAwIDEtLjQtLjhsMy00eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiA8cGF0aCBkPSJNNCA0YTQgNCAwIDEgMSA0LjUgMy'+
			'45NjlWMTMuNWEuNS41IDAgMCAxLTEgMFY3Ljk3QTQgNCAwIDAgMSA0IDMuOTk5eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=';
		me._button_open_map__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_open_map";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg icon-style";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_open_map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_open_map.onmouseover=function (e) {
			me._button_open_map__img.style.visibility='hidden';
			me._button_open_map__imgo.style.visibility='inherit';
			me.elementMouseOver['button_open_map']=true;
			me._tt_map_open.logicBlock_visible();
		}
		me._button_open_map.onmouseout=function (e) {
			me._button_open_map__img.style.visibility='inherit';
			me._button_open_map__imgo.style.visibility='hidden';
			me.elementMouseOver['button_open_map']=false;
			me._tt_map_open.logicBlock_visible();
		}
		me._button_open_map.ontouchend=function (e) {
			me.elementMouseOver['button_open_map']=false;
			me._tt_map_open.logicBlock_visible();
		}
		me._button_open_map.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._tt_map_open=document.createElement('div');
		els=me._tt_map_open__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_map_open";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -32px;';
		hs+='visibility : hidden;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Otw\xf3rz map\u0119";
		el.appendChild(els);
		me._tt_map_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_map_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_map_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_map_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_map_open.style[domTransition]='left 0s, top 0s';
				if (me._tt_map_open.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_map_open.style.top='-25px';
					me._tt_map_open.ggUpdatePosition(true);
				}
				else {
					me._tt_map_open.ggDx=0;
					me._tt_map_open.style.top='-32px';
					me._tt_map_open.ggUpdatePosition(true);
				}
			}
		}
		me._tt_map_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['button_open_map'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_map_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_map_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_map_open.style[domTransition]='left 0s, top 0s';
				if (me._tt_map_open.ggCurrentLogicStateVisible == 0) {
					me._tt_map_open.style.visibility=(Number(me._tt_map_open.style.opacity)>0||!me._tt_map_open.style.opacity)?'inherit':'hidden';
					me._tt_map_open.ggVisible=true;
				}
				else {
					me._tt_map_open.style.visibility="hidden";
					me._tt_map_open.ggVisible=false;
				}
			}
		}
		me._tt_map_open.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getCurrentNode() == "start"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_map_open.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_map_open.ggCurrentLogicStateText = newLogicStateText;
				me._tt_map_open.style[domTransition]='left 0s, top 0s';
				if (me._tt_map_open.ggCurrentLogicStateText == 0) {
					me._tt_map_open.ggText="Jeste\u015b na starcie";
					me._tt_map_open__text.innerHTML=me._tt_map_open.ggText;
					if (me._tt_map_open.ggUpdateText) {
					me._tt_map_open.ggUpdateText=function() {
						var hs="Jeste\u015b na starcie";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_map_open.ggUpdatePosition) me._tt_map_open.ggUpdatePosition();
					}
				}
				else {
					me._tt_map_open.ggText="Otw\xf3rz map\u0119";
					me._tt_map_open__text.innerHTML=me._tt_map_open.ggText;
					if (me._tt_map_open.ggUpdateText) {
					me._tt_map_open.ggUpdateText=function() {
						var hs="Otw\xf3rz map\u0119";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_map_open.ggUpdatePosition) me._tt_map_open.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_map_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((133-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._button_open_map.appendChild(me._tt_map_open);
		me._button_toggle_map.appendChild(me._button_open_map);
		el=me._button_close_map=document.createElement('div');
		els=me._button_close_map__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9ImJsYWNrIiBjbGFzcz0iYmkgYmktcGluLW1hcCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTYiPgogPHBhdGggZD0iTTMuMSAxMS4yYS41LjUgMCAwIDEgLjQtLjJINmEuNS41IDAgMCAxIDAgMUgzLjc1TDEuNSAxNWgxM2wtMi4yNS0zSDEwYS41LjUgMCAwIDEgMC0xaDIuNWEuNS41IDAgMCAxIC40LjJsMyA0YS41LjUgMCAwIDEtLjQuOEguNWEuNS41IDAgMCAxLS40LS44bDMtNHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgogPHBhdGggZD0iTTggMWEzIDMgMCAxIDAgMCA2IDMgMyAwID'+
			'AgMCAwLTZ6TTQgNGE0IDQgMCAxIDEgNC41IDMuOTY5VjEzLjVhLjUuNSAwIDAgMS0xIDBWNy45N0E0IDQgMCAwIDEgNCAzLjk5OXoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K';
		me._button_close_map__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_close_map__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9ImJsYWNrIiBjbGFzcz0iYmkgYmktcGluLW1hcC1maWxsIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiI+CiA8cGF0aCBkPSJNMy4xIDExLjJhLjUuNSAwIDAgMSAuNC0uMkg2YS41LjUgMCAwIDEgMCAxSDMuNzVMMS41IDE1aDEzbC0yLjI1LTNIMTBhLjUuNSAwIDAgMSAwLTFoMi41YS41LjUgMCAwIDEgLjQuMmwzIDRhLjUuNSAwIDAgMS0uNC44SC41YS41LjUgMCAwIDEtLjQtLjhsMy00eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiA8cGF0aCBkPSJNNCA0YTQgNCAwIDEgMSA0LjUgMy'+
			'45NjlWMTMuNWEuNS41IDAgMCAxLTEgMFY3Ljk3QTQgNCAwIDAgMSA0IDMuOTk5eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=';
		me._button_close_map__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_close_map";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg icon-style";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_close_map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_close_map.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_close_map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_close_map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_close_map.style[domTransition]='';
				if (me._button_close_map.ggCurrentLogicStateVisible == 0) {
					me._button_close_map.style.visibility=(Number(me._button_close_map.style.opacity)>0||!me._button_close_map.style.opacity)?'inherit':'hidden';
					me._button_close_map.ggVisible=true;
				}
				else {
					me._button_close_map.style.visibility="hidden";
					me._button_close_map.ggVisible=false;
				}
			}
		}
		me._button_close_map.onmouseover=function (e) {
			me._button_close_map__img.style.visibility='hidden';
			me._button_close_map__imgo.style.visibility='inherit';
			me.elementMouseOver['button_close_map']=true;
			me._tt_map_close.logicBlock_visible();
		}
		me._button_close_map.onmouseout=function (e) {
			me._button_close_map__img.style.visibility='inherit';
			me._button_close_map__imgo.style.visibility='hidden';
			me.elementMouseOver['button_close_map']=false;
			me._tt_map_close.logicBlock_visible();
		}
		me._button_close_map.ontouchend=function (e) {
			me.elementMouseOver['button_close_map']=false;
			me._tt_map_close.logicBlock_visible();
		}
		me._button_close_map.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._tt_map_close=document.createElement('div');
		els=me._tt_map_close__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_map_close";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -32px;';
		hs+='visibility : hidden;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Otw\xf3rz map\u0119";
		el.appendChild(els);
		me._tt_map_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_map_close.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_map_close.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_map_close.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_map_close.style[domTransition]='left 0s, top 0s';
				if (me._tt_map_close.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_map_close.style.top='-25px';
					me._tt_map_close.ggUpdatePosition(true);
				}
				else {
					me._tt_map_close.ggDx=0;
					me._tt_map_close.style.top='-32px';
					me._tt_map_close.ggUpdatePosition(true);
				}
			}
		}
		me._tt_map_close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['button_close_map'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_map_close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_map_close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_map_close.style[domTransition]='left 0s, top 0s';
				if (me._tt_map_close.ggCurrentLogicStateVisible == 0) {
					me._tt_map_close.style.visibility=(Number(me._tt_map_close.style.opacity)>0||!me._tt_map_close.style.opacity)?'inherit':'hidden';
					me._tt_map_close.ggVisible=true;
				}
				else {
					me._tt_map_close.style.visibility="hidden";
					me._tt_map_close.ggVisible=false;
				}
			}
		}
		me._tt_map_close.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getCurrentNode() == "start"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_map_close.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_map_close.ggCurrentLogicStateText = newLogicStateText;
				me._tt_map_close.style[domTransition]='left 0s, top 0s';
				if (me._tt_map_close.ggCurrentLogicStateText == 0) {
					me._tt_map_close.ggText="Jeste\u015b na starcie";
					me._tt_map_close__text.innerHTML=me._tt_map_close.ggText;
					if (me._tt_map_close.ggUpdateText) {
					me._tt_map_close.ggUpdateText=function() {
						var hs="Jeste\u015b na starcie";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_map_close.ggUpdatePosition) me._tt_map_close.ggUpdatePosition();
					}
				}
				else {
					me._tt_map_close.ggText="Otw\xf3rz map\u0119";
					me._tt_map_close__text.innerHTML=me._tt_map_close.ggText;
					if (me._tt_map_close.ggUpdateText) {
					me._tt_map_close.ggUpdateText=function() {
						var hs="Otw\xf3rz map\u0119";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_map_close.ggUpdatePosition) me._tt_map_close.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_map_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((133-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._button_close_map.appendChild(me._tt_map_close);
		me._button_toggle_map.appendChild(me._button_close_map);
		me._menu.appendChild(me._button_toggle_map);
		me.divSkin.appendChild(me._menu);
		el=me._info=document.createElement('div');
		el.ggId="info";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container container--help-pop-up";
		el.ggType='container';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_start') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info.style[domTransition]='';
				if (me._info.ggCurrentLogicStateVisible == 0) {
					me._info.style.visibility=(Number(me._info.style.opacity)>0||!me._info.style.opacity)?'inherit':'hidden';
					me._info.ggVisible=true;
				}
				else if (me._info.ggCurrentLogicStateVisible == 1) {
					me._info.style.visibility="hidden";
					me._info.ggVisible=false;
				}
				else {
					me._info.style.visibility="hidden";
					me._info.ggVisible=false;
				}
			}
		}
		me._info.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMjQiIGFyaWEtaGlkZGVuPSJ0cnVlIiBkYXRhLXRlc3RpZD0iQ2xvc2VJY29uIiBjbGFzcz0iTXVpU3ZnSWNvbi1yb290IE11aVN2Z0ljb24tZm9udFNpemVNZWRpdW0gY3NzLWk0YnY4Ny1NdWlTdmdJY29uLXJvb3QiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBmb2N1c2FibGU9ImZhbHNlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCI+CiA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTkgNi40MSAxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMT'+
			'IgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPgo8L3N2Zz4K';
		me._svg_3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_3__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMjQiIGFyaWEtaGlkZGVuPSJ0cnVlIiBkYXRhLXRlc3RpZD0iS2V5Ym9hcmRBcnJvd0xlZnRJY29uIiBjbGFzcz0iTXVpU3ZnSWNvbi1yb290IE11aVN2Z0ljb24tZm9udFNpemVNZWRpdW0gY3NzLWk0YnY4Ny1NdWlTdmdJY29uLXJvb3QiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBmb2N1c2FibGU9ImZhbHNlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCI+CiA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTUuNDEgMTYuNTkgMTAuODMgMTJsNC41OC00LjU5TDE0ID'+
			'ZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPgo8L3N2Zz4K';
		me._svg_3__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 3";
		el.ggDx=125;
		el.ggDy=-125;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg btn-round pointer";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3.onclick=function (e) {
			player.setVariableValue('vis_info_start', false);
			if (
				(
					((player.getVariableValue('vis_bg_dark') == false))
				)
			) {
				me._screendarker.ggVisible = !me._screendarker.ggVisible;
				var flag=me._screendarker.ggVisible;
				me._screendarker.style[domTransition]='none';
				me._screendarker.style.visibility=((flag)&&(Number(me._screendarker.style.opacity)>0||!me._screendarker.style.opacity))?'inherit':'hidden';
			}
		}
		me._svg_3.onmouseover=function (e) {
			me._svg_3__img.style.visibility='hidden';
			me._svg_3__imgo.style.visibility='inherit';
		}
		me._svg_3.onmouseout=function (e) {
			me._svg_3__img.style.visibility='inherit';
			me._svg_3__imgo.style.visibility='hidden';
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._info.appendChild(me._svg_3);
		el=me._container_4=document.createElement('div');
		el.ggId="Container 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 200px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 167px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._text_31=document.createElement('div');
		els=me._text_31__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 178px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Pomoc";
		el.appendChild(els);
		me._text_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_31.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_4.appendChild(me._text_31);
		el=me._text_30=document.createElement('div');
		els=me._text_30__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 65px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 225px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 225px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="W lewnym g\xf3rnym rogu znajduje si\u0119 menu z wszystkimi miejscami";
		el.appendChild(els);
		me._text_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_30.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_4.appendChild(me._text_30);
		el=me._container3=document.createElement('div');
		el.ggId="Container-3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 235px;';
		hs+='visibility : inherit;';
		hs+='width : 105px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container3.onmouseover=function (e) {
			me.elementMouseOver['container3']=true;
		}
		me._container3.onmouseout=function (e) {
			player.setVariableValue('vis_icon_help', false);
			me.elementMouseOver['container3']=false;
		}
		me._container3.ontouchend=function (e) {
			me.elementMouseOver['container3']=false;
		}
		me._container3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._help=document.createElement('div');
		el.ggId="help";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container pointer";
		el.ggType='container';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._help.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._help.onclick=function (e) {
			player.setVariableValue('vis_info_start', true);
		}
		me._help.ggUpdatePosition=function (useTransition) {
		}
		me._container3.appendChild(me._help);
		el=me._fav=document.createElement('div');
		el.ggId="fav";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container pointer";
		el.ggType='container';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fav.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fav.ggUpdatePosition=function (useTransition) {
		}
		me._container3.appendChild(me._fav);
		el=me._giga=document.createElement('div');
		el.ggId="giga";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container pointer";
		el.ggType='container';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._giga.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._giga.ggUpdatePosition=function (useTransition) {
		}
		me._container3.appendChild(me._giga);
		me._container_4.appendChild(me._container3);
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 70px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 65px;';
		hs+='visibility : inherit;';
		hs+='width : 225px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 225px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="W prawym g\xf3rnym rogu jest dost\u0119pne podr\u0119czne menu do zarz\u0105dzania widokiem spaceru";
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_4.appendChild(me._text_3);
		me._info.appendChild(me._container_4);
		me.divSkin.appendChild(me._info);
		el=me._screentint_info=document.createElement('div');
		el.ggId="screentint_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint_info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup_2') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_info.style[domTransition]='';
				if (me._screentint_info.ggCurrentLogicStateVisible == 0) {
					me._screentint_info.style.visibility=(Number(me._screentint_info.style.opacity)>0||!me._screentint_info.style.opacity)?'inherit':'hidden';
					me._screentint_info.ggVisible=true;
				}
				else {
					me._screentint_info.style.visibility="hidden";
					me._screentint_info.ggVisible=false;
				}
			}
		}
		me._screentint_info.onclick=function (e) {
			player.setVariableValue('vis_info_popup_2', false);
			me._info_title.ggText="";
			me._info_title.ggTextDiv.innerHTML=me._info_title.ggText;
			if (me._info_title.ggUpdateText) {
				me._info_title.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_title.ggUpdatePosition) {
				me._info_title.ggUpdatePosition();
			}
			me._info_title.ggTextDiv.scrollTop = 0;
			me._info_text_body.ggText="";
			me._info_text_body.ggTextDiv.innerHTML=me._info_text_body.ggText;
			if (me._info_text_body.ggUpdateText) {
				me._info_text_body.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_text_body.ggUpdatePosition) {
				me._info_text_body.ggUpdatePosition();
			}
			me._info_text_body.ggTextDiv.scrollTop = 0;
		}
		me._screentint_info.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint_info);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container info--box";
		el.ggType='container';
		hs ='';
		hs+='z-index: 1500;';
		hs+='height : 450px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 480px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width < 540))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._information.ggCurrentLogicStateSize != newLogicStateSize) {
				me._information.ggCurrentLogicStateSize = newLogicStateSize;
				me._information.style[domTransition]='width 0s, height 0s';
				if (me._information.ggCurrentLogicStateSize == 0) {
					me._information.style.width='300px';
					me._information.style.height='540px';
					skin.updateSize(me._information);
				}
				else {
					me._information.style.width='480px';
					me._information.style.height='450px';
					skin.updateSize(me._information);
				}
			}
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup_2') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style[domTransition]='width 0s, height 0s';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		me._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._information_bg=document.createElement('div');
		el.ggId="information_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._information_bg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._information.appendChild(me._information_bg);
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 85%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 5px 6px 5px 6px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_text_body);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text card-title";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 420px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 420px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_title);
		el=me._info_popup_close=document.createElement('div');
		els=me._info_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTExMy40LDM3OS4yLTEzNS4zLDM1Ny4zeiBNLTE0NS44LDQxMi43YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0x'+
			'LjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTUuNywxNS43TC0xNDUuOCw0MTIuN3oiLz4KIDwvZz4KID'+
			'xnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS42LDM5Ni45bDE1LjgsMTUuOGMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMt'+
			'MC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuOCwxNS44bDE1LjctMTUuN2MwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRMLTE2MS42LDM5Ni45eiIvPgogPC9nPgo8L3N2Zz4K';
		me._info_popup_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTEwNi41LDM3Ny4zLTEzMC45LDM1Mi45eiBNLTE0Mi41LDQxNC41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40'+
			'LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTE3LjQsMTcuNEwtMTQyLjUsNDE0LjV6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjAuMSwzOTYuOWwxNy41LDE3LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAu'+
			'NC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN0wtMTYwLjEsMzk2Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._info_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="info_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_close.onclick=function (e) {
			player.setVariableValue('vis_info_popup_2', false);
			me._info_title.ggText="";
			me._info_title.ggTextDiv.innerHTML=me._info_title.ggText;
			if (me._info_title.ggUpdateText) {
				me._info_title.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_title.ggUpdatePosition) {
				me._info_title.ggUpdatePosition();
			}
			me._info_title.ggTextDiv.scrollTop = 0;
			me._info_text_body.ggText="";
			me._info_text_body.ggTextDiv.innerHTML=me._info_text_body.ggText;
			if (me._info_text_body.ggUpdateText) {
				me._info_text_body.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_text_body.ggUpdatePosition) {
				me._info_text_body.ggUpdatePosition();
			}
			me._info_text_body.ggTextDiv.scrollTop = 0;
		}
		me._info_popup_close.onmouseover=function (e) {
			me._info_popup_close__img.style.visibility='hidden';
			me._info_popup_close__imgo.style.visibility='inherit';
		}
		me._info_popup_close.onmouseout=function (e) {
			me._info_popup_close__img.style.visibility='inherit';
			me._info_popup_close__imgo.style.visibility='hidden';
		}
		me._info_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_popup_close);
		me.divSkin.appendChild(me._information);
		el=me._menu_background=document.createElement('div');
		el.ggId="menu_background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 2000;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_background.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_background.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width > 1280))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._menu_background.ggCurrentLogicStateSize != newLogicStateSize) {
				me._menu_background.ggCurrentLogicStateSize = newLogicStateSize;
				me._menu_background.style[domTransition]='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._menu_background.ggCurrentLogicStateSize == 0) {
					me._menu_background.style.width='340px';
					me._menu_background.style.height='100%';
					skin.updateSize(me._menu_background);
				}
				else {
					me._menu_background.style.width='180px';
					me._menu_background.style.height='100%';
					skin.updateSize(me._menu_background);
				}
			}
		}
		me._menu_background.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_thumbnail_menu_2') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_background.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_background.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_background.style[domTransition]='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._menu_background.ggCurrentLogicStateVisible == 0) {
					me._menu_background.style.visibility=(Number(me._menu_background.style.opacity)>0||!me._menu_background.style.opacity)?'inherit':'hidden';
					me._menu_background.ggVisible=true;
				}
				else {
					me._menu_background.style.visibility=(Number(me._menu_background.style.opacity)>0||!me._menu_background.style.opacity)?'inherit':'hidden';
					me._menu_background.ggVisible=true;
				}
			}
		}
		me._menu_background.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu_2') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('vis_thumbnail_menu_2') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_background.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_background.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_background.style[domTransition]='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._menu_background.ggCurrentLogicStateAlpha == 0) {
					me._menu_background.style.visibility=me._menu_background.ggVisible?'inherit':'hidden';
					me._menu_background.style.opacity=1;
				}
				else if (me._menu_background.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._menu_background.style.opacity == 0.0) { me._menu_background.style.visibility="hidden"; } }, 505);
					me._menu_background.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._menu_background.style.opacity == 0.0) { me._menu_background.style.visibility="hidden"; } }, 505);
					me._menu_background.style.opacity=0;
				}
			}
		}
		me._menu_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_scroller=document.createElement('div');
		els=me._node_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 124px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 371px;';
		hs+="";
		els.setAttribute('style',hs);
		me._node_scroller.ggScrollByX = function(diffX) {
			if(!me._node_scroller.ggHorScrollVisible || diffX == 0 || me._node_scroller.ggHPercentVisible >= 1.0) return;
			me._node_scroller.ggScrollPosX = (me._node_scroller__horScrollFg.offsetLeft + diffX);
			me._node_scroller.ggScrollPosX = Math.max(me._node_scroller.ggScrollPosX, 0);
			me._node_scroller.ggScrollPosX = Math.min(me._node_scroller.ggScrollPosX, me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
			me._node_scroller__horScrollFg.style.left = me._node_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosX / (me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
			me._node_scroller__content.style.left = -(Math.round((me._node_scroller.ggContentWidth * (1.0 - me._node_scroller.ggHPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentLeftOffset + 'px';
			me._node_scroller.ggScrollPosXPercent = (me._node_scroller__horScrollFg.offsetLeft / me._node_scroller__horScrollBg.offsetWidth);
		}
		me._node_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._node_scroller.ggHorScrollVisible || diffX == 0 || me._node_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._node_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._node_scroller.ggScrollPosX >= me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth)) {
					me._node_scroller.ggScrollPosX = Math.min(me._node_scroller.ggScrollPosX, me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._node_scroller.ggScrollPosX <= 0)) {
					me._node_scroller.ggScrollPosX = Math.max(me._node_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._node_scroller__horScrollFg.style.left = me._node_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosX / (me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
			me._node_scroller__content.style.left = -(Math.round((me._node_scroller.ggContentWidth * (1.0 - me._node_scroller.ggHPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentLeftOffset + 'px';
			me._node_scroller.ggScrollPosXPercent = (me._node_scroller__horScrollFg.offsetLeft / me._node_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._node_scroller.ggScrollByY = function(diffY) {
			if(!me._node_scroller.ggVertScrollVisible || diffY == 0 || me._node_scroller.ggVPercentVisible >= 1.0) return;
			me._node_scroller.ggScrollPosY = (me._node_scroller__vertScrollFg.offsetTop + diffY);
			me._node_scroller.ggScrollPosY = Math.max(me._node_scroller.ggScrollPosY, 0);
			me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
			me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosY / (me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
			me._node_scroller__content.style.top = -(Math.round((me._node_scroller.ggContentHeight * (1.0 - me._node_scroller.ggVPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentTopOffset + 'px';
			me._node_scroller.ggScrollPosYPercent = (me._node_scroller__vertScrollFg.offsetTop / me._node_scroller__vertScrollBg.offsetHeight);
		}
		me._node_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._node_scroller.ggVertScrollVisible || diffY == 0 || me._node_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._node_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._node_scroller.ggScrollPosY >= me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight)) {
					me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._node_scroller.ggScrollPosY <= 0)) {
					me._node_scroller.ggScrollPosY = Math.max(me._node_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosY / (me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
			me._node_scroller__content.style.top = -(Math.round((me._node_scroller.ggContentHeight * (1.0 - me._node_scroller.ggVPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentTopOffset + 'px';
			me._node_scroller.ggScrollPosYPercent = (me._node_scroller__vertScrollFg.offsetTop / me._node_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._node_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._node_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._node_scroller.ggHPercentVisible);
					me._node_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._node_scroller.clientWidth - (me._node_scroller.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._node_scroller.clientWidth - (me._node_scroller.ggVertScrollVisible ? 15 : 0))) * me._node_scroller.ggHPercentVisible);
					me._node_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._node_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._node_scroller.ggVPercentVisible);
					me._node_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._node_scroller.clientHeight - (me._node_scroller.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._node_scroller.clientHeight - (me._node_scroller.ggHorScrollVisible ? 15 : 0))) * me._node_scroller.ggVPercentVisible);
					me._node_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._node_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._node_scroller__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaX *= 0.65;
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByX(me._node_scroller.ggDragInertiaX);
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._node_scroller__content.ontouchend = null;
				me._node_scroller__content.ontouchmove = null;
				me._node_scroller__content.onpointerup = null;
				me._node_scroller__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._node_scroller__content.onpointerup = me._node_scroller__content.ontouchend;
		}
			me._node_scroller__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._node_scroller.ggDragLastX) * me._node_scroller.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._node_scroller.ggDragLastY) * me._node_scroller.ggVPercentVisible;
				me._node_scroller.ggDragInertiaX = -diffX;
				me._node_scroller.ggDragInertiaY = -diffY;
				me._node_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._node_scroller.ggScrollByX(-diffX);
				me._node_scroller.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._node_scroller__content.onpointermove = me._node_scroller__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elVertScrollBg = me._node_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 380px; background-color: rgba(0,0,0,0.12549); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._node_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 380px; background-color: rgba(255,255,255,0.25098); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._node_scroller.ggScrollPosY = 0;
		me._node_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._node_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._node_scroller.ggDragLastY;
				me._node_scroller.ggDragInertiaY = diffY;
				me._node_scroller.ggDragLastY = e.clientY;
				me._node_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._node_scroller.ggDragLastY;
				me._node_scroller.ggDragInertiaY = diffY;
				me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._node_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._node_scroller.ggScrollHeight;
			if (e.offsetY < me._node_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._node_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._node_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._node_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._node_scroller.ggScrollByYSmooth(30 * me._node_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._node_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="node_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100%  -  50px);';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._node_scroller.ggScrollPosY / me._node_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._node_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._node_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._node_scroller__vertScrollBg.style.visibility = 'inherit';
					me._node_scroller__vertScrollFg.style.visibility = 'inherit';
					me._node_scroller.ggVertScrollVisible = true;
				} else {
					me._node_scroller__vertScrollBg.style.visibility = 'hidden';
					me._node_scroller__vertScrollFg.style.visibility = 'hidden';
					me._node_scroller.ggVertScrollVisible = false;
				}
				if(me._node_scroller.ggVertScrollVisible) {
					me._node_scroller.ggAvailableWidth = me._node_scroller.clientWidth - 15;
					if (me._node_scroller.ggHorScrollVisible) {
						me._node_scroller.ggAvailableHeight = me._node_scroller.clientHeight - 15;
						me._node_scroller.ggAvailableHeightWithScale = me._node_scroller.getBoundingClientRect().height - me._node_scroller__vertScrollBg.getBoundingClientRect().width;
						me._node_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._node_scroller.ggAvailableHeight = me._node_scroller.clientHeight;
						me._node_scroller.ggAvailableHeightWithScale = me._node_scroller.getBoundingClientRect().height;
						me._node_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._node_scroller__vertScrollBg.style.height = me._node_scroller.ggAvailableHeight + 'px';
					me._node_scroller.ggVPercentVisible = contentHeight != 0 ? me._node_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._node_scroller.ggVPercentVisible > 1.0) me._node_scroller.ggVPercentVisible = 1.0;
					me._node_scroller.ggScrollHeight =  Math.round(me._node_scroller__vertScrollBg.offsetHeight * me._node_scroller.ggVPercentVisible);
					me._node_scroller__vertScrollFg.style.height = me._node_scroller.ggScrollHeight + 'px';
					me._node_scroller.ggScrollPosY = me._node_scroller.ggScrollPosYPercent * me._node_scroller.ggAvailableHeight;
					me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
					me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
					if (me._node_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._node_scroller.ggScrollPosY / (me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
						me._node_scroller__content.style.top = -(Math.round((me._node_scroller.ggContentHeight * (1.0 - me._node_scroller.ggVPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._node_scroller.ggAvailableWidth = me._node_scroller.clientWidth;
					me._node_scroller.ggScrollPosY = 0;
					me._node_scroller.ggScrollPosYPercent = 0.0;
					me._node_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._node_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._node_scroller.ggHorScrollVisible || vertScrollWasVisible != me._node_scroller.ggVertScrollVisible) {
					me.updateSize(me._node_scroller);
					me._node_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner=document.createElement('div');
		el.ggPermeable=false;
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 180;
		el.ggHeight = 125;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._node_cloner.callChildLogicBlocks_changenode = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title0 && me._node_cloner.ggInstances[i]._node_title0.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title0.logicBlock_visible();
					}
					if (me._node_cloner.ggInstances[i]._node_bg_hover && me._node_cloner.ggInstances[i]._node_bg_hover.logicBlock_size) {
						me._node_cloner.ggInstances[i]._node_bg_hover.logicBlock_size();
					}
					if (me._node_cloner.ggInstances[i]._node_title_active && me._node_cloner.ggInstances[i]._node_title_active.logicBlock_position) {
						me._node_cloner.ggInstances[i]._node_title_active.logicBlock_position();
					}
					if (me._node_cloner.ggInstances[i]._node_title_active && me._node_cloner.ggInstances[i]._node_title_active.logicBlock_size) {
						me._node_cloner.ggInstances[i]._node_title_active.logicBlock_size();
					}
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_position) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_position();
					}
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_size) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_size();
					}
					if (me._node_cloner.ggInstances[i]._node_thumbnail && me._node_cloner.ggInstances[i]._node_thumbnail.logicBlock_size) {
						me._node_cloner.ggInstances[i]._node_thumbnail.logicBlock_size();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_bg_hover && me._node_cloner.ggInstances[i]._node_bg_hover.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_bg_hover.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_active = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title_active && me._node_cloner.ggInstances[i]._node_title_active.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title_active.logicBlock_visible();
					}
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_visible();
					}
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title0 && me._node_cloner.ggInstances[i]._node_title0.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title0.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_varchanged_resp_phone = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_bg_hover && me._node_cloner.ggInstances[i]._node_bg_hover.logicBlock_size) {
						me._node_cloner.ggInstances[i]._node_bg_hover.logicBlock_size();
					}
					if (me._node_cloner.ggInstances[i]._node_title_active && me._node_cloner.ggInstances[i]._node_title_active.logicBlock_position) {
						me._node_cloner.ggInstances[i]._node_title_active.logicBlock_position();
					}
					if (me._node_cloner.ggInstances[i]._node_title_active && me._node_cloner.ggInstances[i]._node_title_active.logicBlock_size) {
						me._node_cloner.ggInstances[i]._node_title_active.logicBlock_size();
					}
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_position) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_position();
					}
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_size) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_size();
					}
					if (me._node_cloner.ggInstances[i]._node_thumbnail && me._node_cloner.ggInstances[i]._node_thumbnail.logicBlock_size) {
						me._node_cloner.ggInstances[i]._node_thumbnail.logicBlock_size();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner.ggUpdating == true) return;
			me._node_cloner.ggUpdating = true;
			var el=me._node_cloner;
			var curNumCols = 0;
			curNumCols = me._node_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._node_cloner.ggHeight) + 'px';
				parameter.left=(column * me._node_cloner.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me._node_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._node_cloner.callChildLogicBlocks_changenode();
			me._node_cloner.callChildLogicBlocks_mouseover();
			me._node_cloner.callChildLogicBlocks_active();
			me._node_cloner.callChildLogicBlocks_changevisitednodes();
			me._node_cloner.callChildLogicBlocks_activehotspotchanged();
			me._node_cloner.callChildLogicBlocks_varchanged_resp_phone();
			me._node_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner.parentNode.classList.contains('ggskin_subelement') && me._node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "Trójkąt Lidzbarski";
		el.ggId="node_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 125px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner.childNodes.length; i++) {
				var child=me._node_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner.ggUpdatePosition=function (useTransition) {
				me._node_cloner.ggUpdate();
		}
		me._node_cloner.ggNodeChange=function () {
			me._node_cloner.ggUpdateConditionNodeChange();
		}
		me._node_scroller__content.appendChild(me._node_cloner);
		me._menu_background.appendChild(me._node_scroller);
		el=me._menu_icon=document.createElement('div');
		el.ggId="menu_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 48px;';
		hs+='position : absolute;';
		hs+='right : -55px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_icon.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_thumbnail_menu_2') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._menu_icon.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._menu_icon.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._menu_icon.style[domTransition]='right 0s, top 0s';
				if (me._menu_icon.ggCurrentLogicStatePosition == 0) {
					me._menu_icon.style.right='-55px';
					me._menu_icon.style.top='5px';
				}
				else {
					me._menu_icon.style.right='-55px';
					me._menu_icon.style.top='5px';
				}
			}
		}
		me._menu_icon.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_open0=document.createElement('div');
		els=me._menu_open0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktbGlzdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTYiPgogPHBhdGggZD0iTTIuNSAxMmEuNS41IDAgMCAxIC41LS41aDEwYS41LjUgMCAwIDEgMCAxSDNhLjUuNSAwIDAgMS0uNS0uNXptMC00YS41LjUgMCAwIDEgLjUtLjVoMTBhLjUuNSAwIDAgMSAwIDFIM2EuNS41IDAgMCAxLS41LS41em0wLTRhLjUuNSAwIDAgMSAuNS0uNWgxMGEuNS41IDAgMCAxIDAgMUgzYS41LjUgMCAwIDEtLjUtLjV6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg'+
			'==';
		me._menu_open0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._menu_open0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktYm94LWFycm93LWxlZnQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2Ij4KIDxwYXRoIGQ9Ik02IDEyLjVhLjUuNSAwIDAgMCAuNS41aDhhLjUuNSAwIDAgMCAuNS0uNXYtOWEuNS41IDAgMCAwLS41LS41aC04YS41LjUgMCAwIDAtLjUuNXYyYS41LjUgMCAwIDEtMSAwdi0yQTEuNSAxLjUgMCAwIDEgNi41IDJoOEExLjUgMS41IDAgMCAxIDE2IDMuNXY5YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtOEExLjUgMS41IDAgMCAxIDUgMTIuNXYtMmEuNS41ID'+
			'AgMCAxIDEgMHYyeiIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiA8cGF0aCBkPSJNLjE0NiA4LjM1NGEuNS41IDAgMCAxIDAtLjcwOGwzLTNhLjUuNSAwIDEgMSAuNzA4LjcwOEwxLjcwNyA3LjVIMTAuNWEuNS41IDAgMCAxIDAgMUgxLjcwN2wyLjE0NyAyLjE0NmEuNS41IDAgMCAxLS43MDguNzA4bC0zLTN6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==';
		me._menu_open0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="menu_open";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_open0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_open0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_thumbnail_menu_2') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._menu_open0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._menu_open0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._menu_open0.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me._menu_open0.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = 0;
					me._menu_open0.ggUpdatePosition(true);
				}
				else {
					me._menu_open0.ggDx=0;
					me._menu_open0.ggDy=0;
					me._menu_open0.ggUpdatePosition(true);
				}
			}
		}
		me._menu_open0.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu_2', !player.getVariableValue('vis_thumbnail_menu_2'));
		}
		me._menu_open0.onmouseover=function (e) {
			me._menu_open0__img.style.visibility='hidden';
			me._menu_open0__imgo.style.visibility='inherit';
		}
		me._menu_open0.onmouseout=function (e) {
			me._menu_open0__img.style.visibility='inherit';
			me._menu_open0__imgo.style.visibility='hidden';
		}
		me._menu_open0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._menu_icon.appendChild(me._menu_open0);
		me._menu_background.appendChild(me._menu_icon);
		me.divSkin.appendChild(me._menu_background);
		el=me._menu_icon_vis=document.createElement('div');
		el.ggId="menu_icon_vis";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 48px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_icon_vis.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_icon_vis.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_thumbnail_menu_2') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_icon_vis.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_icon_vis.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_icon_vis.style[domTransition]='';
				if (me._menu_icon_vis.ggCurrentLogicStateVisible == 0) {
					me._menu_icon_vis.style.visibility="hidden";
					me._menu_icon_vis.ggVisible=false;
				}
				else {
					me._menu_icon_vis.style.visibility=(Number(me._menu_icon_vis.style.opacity)>0||!me._menu_icon_vis.style.opacity)?'inherit':'hidden';
					me._menu_icon_vis.ggVisible=true;
				}
			}
		}
		me._menu_icon_vis.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_open=document.createElement('div');
		els=me._menu_open__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktbGlzdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTYiPgogPHBhdGggZD0iTTIuNSAxMmEuNS41IDAgMCAxIC41LS41aDEwYS41LjUgMCAwIDEgMCAxSDNhLjUuNSAwIDAgMS0uNS0uNXptMC00YS41LjUgMCAwIDEgLjUtLjVoMTBhLjUuNSAwIDAgMSAwIDFIM2EuNS41IDAgMCAxLS41LS41em0wLTRhLjUuNSAwIDAgMSAuNS0uNWgxMGEuNS41IDAgMCAxIDAgMUgzYS41LjUgMCAwIDEtLjUtLjV6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg'+
			'==';
		me._menu_open__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._menu_open__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktYm94LWFycm93LWluLXJpZ2h0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiI+CiA8cGF0aCBkPSJNNiAzLjVhLjUuNSAwIDAgMSAuNS0uNWg4YS41LjUgMCAwIDEgLjUuNXY5YS41LjUgMCAwIDEtLjUuNWgtOGEuNS41IDAgMCAxLS41LS41di0yYS41LjUgMCAwIDAtMSAwdjJBMS41IDEuNSAwIDAgMCA2LjUgMTRoOGExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTlBMS41IDEuNSAwIDAgMCAxNC41IDJoLThBMS41IDEuNSAwIDAgMCA1IDMuNXYyYS41Lj'+
			'UgMCAwIDAgMSAwdi0yeiIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiA8cGF0aCBkPSJNMTEuODU0IDguMzU0YS41LjUgMCAwIDAgMC0uNzA4bC0zLTNhLjUuNSAwIDEgMC0uNzA4LjcwOEwxMC4yOTMgNy41SDEuNWEuNS41IDAgMCAwIDAgMWg4Ljc5M2wtMi4xNDcgMi4xNDZhLjUuNSAwIDAgMCAuNzA4LjcwOGwzLTN6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==';
		me._menu_open__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="menu_open";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='svg { fill: black; }';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_thumbnail_menu_2') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._menu_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._menu_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._menu_open.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me._menu_open.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = 0;
					me._menu_open.ggUpdatePosition(true);
				}
				else {
					me._menu_open.ggDx=0;
					me._menu_open.ggDy=0;
					me._menu_open.ggUpdatePosition(true);
				}
			}
		}
		me._menu_open.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu_2', !player.getVariableValue('vis_thumbnail_menu_2'));
		}
		me._menu_open.onmouseover=function (e) {
			me._menu_open__img.style.visibility='hidden';
			me._menu_open__imgo.style.visibility='inherit';
		}
		me._menu_open.onmouseout=function (e) {
			me._menu_open__img.style.visibility='inherit';
			me._menu_open__imgo.style.visibility='hidden';
		}
		me._menu_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._menu_icon_vis.appendChild(me._menu_open);
		me.divSkin.appendChild(me._menu_icon_vis);
		el=me._additional_menu=document.createElement('div');
		el.ggId="additional_menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 155px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._additional_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._additional_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._additional_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._additional_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._additional_menu.style[domTransition]='';
				if (me._additional_menu.ggCurrentLogicStateVisible == 0) {
					me._additional_menu.style.visibility="hidden";
					me._additional_menu.ggVisible=false;
				}
				else {
					me._additional_menu.style.visibility=(Number(me._additional_menu.style.opacity)>0||!me._additional_menu.style.opacity)?'inherit':'hidden';
					me._additional_menu.ggVisible=true;
				}
			}
		}
		me._additional_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 155px;';
		hs+='position : absolute;';
		hs+='right : -11px;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width < 1280))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_1.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_1.style[domTransition]='width 0s, height 0s';
				if (me._rectangle_1.ggCurrentLogicStateSize == 0) {
					me._rectangle_1.style.width='50px';
					me._rectangle_1.style.height='135px';
					skin.updateSize(me._rectangle_1);
				}
				else {
					me._rectangle_1.style.width='50px';
					me._rectangle_1.style.height='155px';
					skin.updateSize(me._rectangle_1);
				}
			}
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me._additional_menu.appendChild(me._rectangle_1);
		el=me._button_zoom=document.createElement('div');
		el.ggId="button_zoom";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 48px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_zoom.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_zoom.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_zoom') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_zoom.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_zoom.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_zoom.style[domTransition]='opacity 0s';
				if (me._button_zoom.ggCurrentLogicStateVisible == 0) {
					me._button_zoom.style.visibility=(Number(me._button_zoom.style.opacity)>0||!me._button_zoom.style.opacity)?'inherit':'hidden';
					me._button_zoom.ggVisible=true;
				}
				else {
					me._button_zoom.style.visibility=(Number(me._button_zoom.style.opacity)>0||!me._button_zoom.style.opacity)?'inherit':'hidden';
					me._button_zoom.ggVisible=true;
				}
			}
		}
		me._button_zoom.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getViewerSize().width < 1280))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._button_zoom.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._button_zoom.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._button_zoom.style[domTransition]='opacity 0s';
				if (me._button_zoom.ggCurrentLogicStateAlpha == 0) {
					me._button_zoom.style.visibility="hidden";
					me._button_zoom.style.opacity=0;
				}
				else {
					me._button_zoom.style.visibility=me._button_zoom.ggVisible?'inherit':'hidden';
					me._button_zoom.style.opacity=1;
				}
			}
		}
		me._button_zoom.ggUpdatePosition=function (useTransition) {
		}
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktem9vbS1vdXQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2Ij4KIDxwYXRoIGQ9Ik02LjUgMTJhNS41IDUuNSAwIDEgMCAwLTExIDUuNSA1LjUgMCAwIDAgMCAxMXpNMTMgNi41YTYuNSA2LjUgMCAxIDEtMTMgMCA2LjUgNi41IDAgMCAxIDEzIDB6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KIDxwYXRoIGQ9Ik0xMC4zNDQgMTEuNzQyYy4wMy4wNC4wNjIuMDc4LjA5OC4xMTVsMy44NSAzLjg1YTEgMSAwIDAgMCAxLjQxNS0xLjQxNGwtMy44NS0zLjg1YT'+
			'EuMDA3IDEuMDA3IDAgMCAwLS4xMTUtLjEgNi41MzggNi41MzggMCAwIDEtMS4zOTggMS40eiIvPgogPHBhdGggZD0iTTMgNi41YS41LjUgMCAwIDEgLjUtLjVoNmEuNS41IDAgMCAxIDAgMWgtNmEuNS41IDAgMCAxLS41LS41eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=';
		me._zoomout__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktem9vbS1vdXQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2Ij4KIDxwYXRoIGQ9Ik02LjUgMTJhNS41IDUuNSAwIDEgMCAwLTExIDUuNSA1LjUgMCAwIDAgMCAxMXpNMTMgNi41YTYuNSA2LjUgMCAxIDEtMTMgMCA2LjUgNi41IDAgMCAxIDEzIDB6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KIDxwYXRoIGQ9Ik0xMC4zNDQgMTEuNzQyYy4wMy4wNC4wNjIuMDc4LjA5OC4xMTVsMy44NSAzLjg1YTEgMSAwIDAgMCAxLjQxNS0xLjQxNGwtMy44NS0zLjg1YT'+
			'EuMDA3IDEuMDA3IDAgMCAwLS4xMTUtLjEgNi41MzggNi41MzggMCAwIDEtMS4zOTggMS40eiIvPgogPHBhdGggZD0iTTMgNi41YS41LjUgMCAwIDEgLjUtLjVoNmEuNS41IDAgMCAxIDAgMWgtNmEuNS41IDAgMCAxLS41LS41eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=';
		me._zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 34px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomout.onmouseover=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
			me.elementMouseOver['zoomout']=true;
			me._tt_zoomout.logicBlock_visible();
		}
		me._zoomout.onmouseout=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
			me.elementMouseOver['zoomout']=false;
			me._tt_zoomout.logicBlock_visible();
		}
		me._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		me._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
			me.elementMouseOver['zoomout']=false;
			me._tt_zoomout.logicBlock_visible();
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_zoomout=document.createElement('div');
		els=me._tt_zoomout__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="oddalenie";
		el.appendChild(els);
		me._tt_zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomout.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_zoomout.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_zoomout.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_zoomout.style[domTransition]='right 0s, top 0s';
				if (me._tt_zoomout.ggCurrentLogicStatePosition == 0) {
					me._tt_zoomout.style.right='0px';
					me._tt_zoomout.style.top='-25px';
				}
				else {
					me._tt_zoomout.style.right='40px';
					me._tt_zoomout.style.top='0px';
				}
			}
		}
		me._tt_zoomout.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['zoomout'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_zoomout.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_zoomout.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_zoomout.style[domTransition]='right 0s, top 0s';
				if (me._tt_zoomout.ggCurrentLogicStateVisible == 0) {
					me._tt_zoomout.style.visibility=(Number(me._tt_zoomout.style.opacity)>0||!me._tt_zoomout.style.opacity)?'inherit':'hidden';
					me._tt_zoomout.ggVisible=true;
				}
				else {
					me._tt_zoomout.style.visibility="hidden";
					me._tt_zoomout.ggVisible=false;
				}
			}
		}
		me._tt_zoomout.ggUpdatePosition=function (useTransition) {
		}
		me._zoomout.appendChild(me._tt_zoomout);
		me._button_zoom.appendChild(me._zoomout);
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktem9vbS1pbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTYiPgogPHBhdGggZD0iTTYuNSAxMmE1LjUgNS41IDAgMSAwIDAtMTEgNS41IDUuNSAwIDAgMCAwIDExek0xMyA2LjVhNi41IDYuNSAwIDEgMS0xMyAwIDYuNSA2LjUgMCAwIDEgMTMgMHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgogPHBhdGggZD0iTTEwLjM0NCAxMS43NDJjLjAzLjA0LjA2Mi4wNzguMDk4LjExNWwzLjg1IDMuODVhMSAxIDAgMCAwIDEuNDE1LTEuNDE0bC0zLjg1LTMuODVhMS'+
			'4wMDcgMS4wMDcgMCAwIDAtLjExNS0uMSA2LjUzOCA2LjUzOCAwIDAgMS0xLjM5OCAxLjR6Ii8+CiA8cGF0aCBkPSJNNi41IDNhLjUuNSAwIDAgMSAuNS41VjZoMi41YS41LjUgMCAwIDEgMCAxSDd2Mi41YS41LjUgMCAwIDEtMSAwVjdIMy41YS41LjUgMCAwIDEgMC0xSDZWMy41YS41LjUgMCAwIDEgLjUtLjV6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==';
		me._zoomin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktem9vbS1pbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTYiPgogPHBhdGggZD0iTTYuNSAxMmE1LjUgNS41IDAgMSAwIDAtMTEgNS41IDUuNSAwIDAgMCAwIDExek0xMyA2LjVhNi41IDYuNSAwIDEgMS0xMyAwIDYuNSA2LjUgMCAwIDEgMTMgMHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgogPHBhdGggZD0iTTEwLjM0NCAxMS43NDJjLjAzLjA0LjA2Mi4wNzguMDk4LjExNWwzLjg1IDMuODVhMSAxIDAgMCAwIDEuNDE1LTEuNDE0bC0zLjg1LTMuODVhMS'+
			'4wMDcgMS4wMDcgMCAwIDAtLjExNS0uMSA2LjUzOCA2LjUzOCAwIDAgMS0xLjM5OCAxLjR6Ii8+CiA8cGF0aCBkPSJNNi41IDNhLjUuNSAwIDAgMSAuNS41VjZoMi41YS41LjUgMCAwIDEgMCAxSDd2Mi41YS41LjUgMCAwIDEtMSAwVjdIMy41YS41LjUgMCAwIDEgMC0xSDZWMy41YS41LjUgMCAwIDEgLjUtLjV6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==';
		me._zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomin.onmouseover=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
			me.elementMouseOver['zoomin']=true;
			me._tt_zoomin.logicBlock_visible();
		}
		me._zoomin.onmouseout=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
			me.elementMouseOver['zoomin']=false;
			me._tt_zoomin.logicBlock_visible();
		}
		me._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		me._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
			me.elementMouseOver['zoomin']=false;
			me._tt_zoomin.logicBlock_visible();
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_zoomin=document.createElement('div');
		els=me._tt_zoomin__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomin";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="zbli\u017cenie";
		el.appendChild(els);
		me._tt_zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomin.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_zoomin.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_zoomin.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_zoomin.style[domTransition]='right 0s, top 0s';
				if (me._tt_zoomin.ggCurrentLogicStatePosition == 0) {
					me._tt_zoomin.style.right='0px';
					this.ggDy = -25;
					me._tt_zoomin.ggUpdatePosition(true);
				}
				else {
					me._tt_zoomin.style.right='40px';
					me._tt_zoomin.ggDy=0;
					me._tt_zoomin.ggUpdatePosition(true);
				}
			}
		}
		me._tt_zoomin.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['zoomin'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_zoomin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_zoomin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_zoomin.style[domTransition]='right 0s, top 0s';
				if (me._tt_zoomin.ggCurrentLogicStateVisible == 0) {
					me._tt_zoomin.style.visibility=(Number(me._tt_zoomin.style.opacity)>0||!me._tt_zoomin.style.opacity)?'inherit':'hidden';
					me._tt_zoomin.ggVisible=true;
				}
				else {
					me._tt_zoomin.style.visibility="hidden";
					me._tt_zoomin.ggVisible=false;
				}
			}
		}
		me._tt_zoomin.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._zoomin.appendChild(me._tt_zoomin);
		me._button_zoom.appendChild(me._zoomin);
		me._additional_menu.appendChild(me._button_zoom);
		el=me._box_vr=document.createElement('div');
		el.ggId="box vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container pointer";
		el.ggType='container';
		hs ='';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 160px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._box_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._box_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width < 1280))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._box_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._box_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._box_vr.style[domTransition]='';
				if (me._box_vr.ggCurrentLogicStateVisible == 0) {
					me._box_vr.style.visibility="hidden";
					me._box_vr.ggVisible=false;
				}
				else {
					me._box_vr.style.visibility="hidden";
					me._box_vr.ggVisible=false;
				}
			}
		}
		me._box_vr.ggUpdatePosition=function (useTransition) {
		}
		el=me._enter_vr=document.createElement('div');
		els=me._enter_vr__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktYmFkZ2UtdnIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2Ij4KIDxwYXRoIGQ9Ik0xNCAzYTEgMSAwIDAgMSAxIDF2OGExIDEgMCAwIDEtMSAxSDJhMSAxIDAgMCAxLTEtMVY0YTEgMSAwIDAgMSAxLTFoMTJ6TTIgMmEyIDIgMCAwIDAtMiAydjhhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjRhMiAyIDAgMCAwLTItMkgyeiIvPgogPHBhdGggZD0iTTQuNTA4IDExaDEuNDI5bDEuOTktNS45OTlINi42MUw1LjI3NyA5LjcwOEg1LjIyTDMuOD'+
			'c1IDUuMDAxSDIuNUw0LjUwOCAxMXptNi4zODctNS45OTlIOC41VjExaDEuMTczVjguNzYzaDEuMDY0TDExLjc4NyAxMWgxLjMyN0wxMS45MSA4LjU4M0MxMi40NTUgOC4zNzMgMTMgNy43NzkgMTMgNi45YzAtMS4xNDctLjc3My0xLjktMi4xMDUtMS45em0tMS4yMjIgMi44N1Y1LjkzM2gxLjA1Yy42MyAwIDEuMDUuMzQ3IDEuMDUuOTg5IDAgLjYzMy0uNDA4Ljk1LTEuMDY3Ljk1SDkuNjczeiIvPgo8L3N2Zz4K';
		me._enter_vr__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._enter_vr__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktYmFkZ2UtdnItZmlsbCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTYiPgogPHBhdGggZD0iTTkuNjczIDUuOTMzdjEuOTM4aDEuMDMzYy42NiAwIDEuMDY4LS4zMTYgMS4wNjgtLjk1IDAtLjY0LS40MjItLjk4OC0xLjA1LS45ODhoLTEuMDV6Ii8+CiA8cGF0aCBkPSJNMCA0YTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnY4YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yVjR6bTUuOTM3IDcgMS45OS01Ljk5OUg2LjYxTDUuMjc3IDkuNz'+
			'A4SDUuMjJMMy44NzUgNS4wMDFIMi41TDQuNTA4IDExaDEuNDI5ek04LjUgNS4wMDFWMTFoMS4xNzNWOC43NjNoMS4wNjRMMTEuNzg3IDExaDEuMzI3TDExLjkxIDguNTgzQzEyLjQ1NSA4LjM3MyAxMyA3Ljc3OSAxMyA2LjljMC0xLjE0Ny0uNzczLTEuOS0yLjEwNS0xLjlIOC41eiIvPgo8L3N2Zz4K';
		me._enter_vr__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="enter_vr";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._enter_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._enter_vr.style[domTransition]='';
				if (me._enter_vr.ggCurrentLogicStateVisible == 0) {
					me._enter_vr.style.visibility="hidden";
					me._enter_vr.ggVisible=false;
				}
				else {
					me._enter_vr.style.visibility=(Number(me._enter_vr.style.opacity)>0||!me._enter_vr.style.opacity)?'inherit':'hidden';
					me._enter_vr.ggVisible=true;
				}
			}
		}
		me._enter_vr.onclick=function (e) {
			player.enterVR();
		}
		me._enter_vr.onmouseover=function (e) {
			me._enter_vr__img.style.visibility='hidden';
			me._enter_vr__imgo.style.visibility='inherit';
			me.elementMouseOver['enter_vr']=true;
			me._vrtext.logicBlock_visible();
		}
		me._enter_vr.onmouseout=function (e) {
			me._enter_vr__img.style.visibility='inherit';
			me._enter_vr__imgo.style.visibility='hidden';
			me.elementMouseOver['enter_vr']=false;
			me._vrtext.logicBlock_visible();
		}
		me._enter_vr.ontouchend=function (e) {
			me.elementMouseOver['enter_vr']=false;
			me._vrtext.logicBlock_visible();
		}
		me._enter_vr.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._vrtext=document.createElement('div');
		els=me._vrtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="vr-text";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="vr";
		el.appendChild(els);
		me._vrtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vrtext.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['enter_vr'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vrtext.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vrtext.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vrtext.style[domTransition]='';
				if (me._vrtext.ggCurrentLogicStateVisible == 0) {
					me._vrtext.style.visibility=(Number(me._vrtext.style.opacity)>0||!me._vrtext.style.opacity)?'inherit':'hidden';
					me._vrtext.ggVisible=true;
				}
				else {
					me._vrtext.style.visibility="hidden";
					me._vrtext.ggVisible=false;
				}
			}
		}
		me._vrtext.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._enter_vr.appendChild(me._vrtext);
		me._box_vr.appendChild(me._enter_vr);
		me._additional_menu.appendChild(me._box_vr);
		el=me._box_view=document.createElement('div');
		el.ggId="box view";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container pointer";
		el.ggType='container';
		hs ='';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 100px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._box_view.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._box_view.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width < 1280))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._box_view.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._box_view.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._box_view.style[domTransition]='';
				if (me._box_view.ggCurrentLogicStateVisible == 0) {
					me._box_view.style.visibility="hidden";
					me._box_view.ggVisible=false;
				}
				else {
					me._box_view.style.visibility=(Number(me._box_view.style.opacity)>0||!me._box_view.style.opacity)?'inherit':'hidden';
					me._box_view.ggVisible=true;
				}
			}
		}
		me._box_view.ggUpdatePosition=function (useTransition) {
		}
		el=me._stereographic=document.createElement('div');
		els=me._stereographic__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktYmlub2N1bGFycyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTYiPgogPHBhdGggZD0iTTMgMi41QTEuNSAxLjUgMCAwIDEgNC41IDFoMUExLjUgMS41IDAgMCAxIDcgMi41VjVoMlYyLjVBMS41IDEuNSAwIDAgMSAxMC41IDFoMUExLjUgMS41IDAgMCAxIDEzIDIuNXYyLjM4MmEuNS41IDAgMCAwIC4yNzYuNDQ3bC44OTUuNDQ3QTEuNSAxLjUgMCAwIDEgMTUgNy4xMThWMTQuNWExLjUgMS41IDAgMCAxLTEuNSAxLjVoLTNBMS41IDEuNSAwIDAgMSA5ID'+
			'E0LjV2LTNhLjUuNSAwIDAgMSAuMTQ2LS4zNTRsLjg1NC0uODUzVjkuNWEuNS41IDAgMCAwLS41LS41aC0zYS41LjUgMCAwIDAtLjUuNXYuNzkzbC44NTQuODUzQS41LjUgMCAwIDEgNyAxMS41djNBMS41IDEuNSAwIDAgMSA1LjUgMTZoLTNBMS41IDEuNSAwIDAgMSAxIDE0LjVWNy4xMThhMS41IDEuNSAwIDAgMSAuODMtMS4zNDJsLjg5NC0uNDQ3QS41LjUgMCAwIDAgMyA0Ljg4MlYyLjV6TTQuNSAyYS41LjUgMCAwIDAtLjUuNVYzaDJ2LS41YS41LjUgMCAwIDAtLjUtLjVoLTF6TTYgNEg0di44ODJhMS41IDEuNSAwIDAgMS0uODMgMS4zNDJsLS44OTQuNDQ3QS41LjUgMCAwIDAgMiA3LjExOFYx'+
			'M2g0di0xLjI5M2wtLjg1NC0uODUzQS41LjUgMCAwIDEgNSAxMC41di0xQTEuNSAxLjUgMCAwIDEgNi41IDhoM0ExLjUgMS41IDAgMCAxIDExIDkuNXYxYS41LjUgMCAwIDEtLjE0Ni4zNTRsLS44NTQuODUzVjEzaDRWNy4xMThhLjUuNSAwIDAgMC0uMjc2LS40NDdsLS44OTUtLjQ0N0ExLjUgMS41IDAgMCAxIDEyIDQuODgyVjRoLTJ2MS41YS41LjUgMCAwIDEtLjUuNWgtM2EuNS41IDAgMCAxLS41LS41VjR6bTQtMWgydi0uNWEuNS41IDAgMCAwLS41LS41aC0xYS41LjUgMCAwIDAtLjUuNVYzem00IDExaC00di41YS41LjUgMCAwIDAgLjUuNWgzYS41LjUgMCAwIDAgLjUtLjVWMTR6bS04IDBIMn'+
			'YuNWEuNS41IDAgMCAwIC41LjVoM2EuNS41IDAgMCAwIC41LS41VjE0eiIvPgo8L3N2Zz4K';
		me._stereographic__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._stereographic__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktYmlub2N1bGFycy1maWxsIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiI+CiA8cGF0aCBkPSJNNC41IDFBMS41IDEuNSAwIDAgMCAzIDIuNVYzaDR2LS41QTEuNSAxLjUgMCAwIDAgNS41IDFoLTF6TTcgNHYxaDJWNGg0di44ODJhLjUuNSAwIDAgMCAuMjc2LjQ0N2wuODk1LjQ0N0ExLjUgMS41IDAgMCAxIDE1IDcuMTE4VjEzSDl2LTEuNWEuNS41IDAgMCAxIC4xNDYtLjM1NGwuODU0LS44NTNWOS41YS41LjUgMCAwIDAtLjUtLjVoLTNhLjUuNSAwID'+
			'AgMC0uNS41di43OTNsLjg1NC44NTNBLjUuNSAwIDAgMSA3IDExLjVWMTNIMVY3LjExOGExLjUgMS41IDAgMCAxIC44My0xLjM0MmwuODk0LS40NDdBLjUuNSAwIDAgMCAzIDQuODgyVjRoNHpNMSAxNHYuNUExLjUgMS41IDAgMCAwIDIuNSAxNmgzQTEuNSAxLjUgMCAwIDAgNyAxNC41VjE0SDF6bTggMHYuNWExLjUgMS41IDAgMCAwIDEuNSAxLjVoM2ExLjUgMS41IDAgMCAwIDEuNS0xLjVWMTRIOXptNC0xMUg5di0uNUExLjUgMS41IDAgMCAxIDEwLjUgMWgxQTEuNSAxLjUgMCAwIDEgMTMgMi41VjN6Ii8+Cjwvc3ZnPgo=';
		me._stereographic__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="stereographic";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._stereographic.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stereographic.onclick=function (e) {
			if (
				(
					((player.getProjection() == 4))
				)
			) {
				player.changeProjectionEx(9,1);
			}
			if (
				(
					((player.getProjection() == 9))
				)
			) {
				player.changeProjectionEx(12,1);
			}
			if (
				(
					((player.getProjection() == 12))
				)
			) {
				player.changeProjectionEx(4,1);
			}
		}
		me._stereographic.onmouseover=function (e) {
			me._stereographic__img.style.visibility='hidden';
			me._stereographic__imgo.style.visibility='inherit';
			me.elementMouseOver['stereographic']=true;
			me._stereotext.logicBlock_visible();
		}
		me._stereographic.onmouseout=function (e) {
			me._stereographic__img.style.visibility='inherit';
			me._stereographic__imgo.style.visibility='hidden';
			me.elementMouseOver['stereographic']=false;
			me._stereotext.logicBlock_visible();
		}
		me._stereographic.ontouchend=function (e) {
			me.elementMouseOver['stereographic']=false;
			me._stereotext.logicBlock_visible();
		}
		me._stereographic.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._stereotext=document.createElement('div');
		els=me._stereotext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="stereo-text";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="zmie\u0144 tryb";
		el.appendChild(els);
		me._stereotext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stereotext.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['stereographic'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._stereotext.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._stereotext.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._stereotext.style[domTransition]='';
				if (me._stereotext.ggCurrentLogicStateVisible == 0) {
					me._stereotext.style.visibility=(Number(me._stereotext.style.opacity)>0||!me._stereotext.style.opacity)?'inherit':'hidden';
					me._stereotext.ggVisible=true;
				}
				else {
					me._stereotext.style.visibility="hidden";
					me._stereotext.ggVisible=false;
				}
			}
		}
		me._stereotext.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._stereographic.appendChild(me._stereotext);
		me._box_view.appendChild(me._stereographic);
		me._additional_menu.appendChild(me._box_view);
		el=me._box_panorama=document.createElement('div');
		el.ggId="box panorama";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container pointer";
		el.ggType='container';
		hs ='';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._box_panorama.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._box_panorama.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktY2FtZXJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiI+CiA8cGF0aCBkPSJNMTUgMTJhMSAxIDAgMCAxLTEgMUgyYTEgMSAwIDAgMS0xLTFWNmExIDEgMCAwIDEgMS0xaDEuMTcyYTMgMyAwIDAgMCAyLjEyLS44NzlsLjgzLS44MjhBMSAxIDAgMCAxIDYuODI3IDNoMi4zNDRhMSAxIDAgMCAxIC43MDcuMjkzbC44MjguODI4QTMgMyAwIDAgMCAxMi44MjggNUgxNGExIDEgMCAwIDEgMSAxdjZ6TTIgNGEyIDIgMCAwIDAtMiAydjZhMiAyIDAgMCAwID'+
			'IgMmgxMmEyIDIgMCAwIDAgMi0yVjZhMiAyIDAgMCAwLTItMmgtMS4xNzJhMiAyIDAgMCAxLTEuNDE0LS41ODZsLS44MjgtLjgyOEEyIDIgMCAwIDAgOS4xNzIgMkg2LjgyOGEyIDIgMCAwIDAtMS40MTQuNTg2bC0uODI4LjgyOEEyIDIgMCAwIDEgMy4xNzIgNEgyeiIvPgogPHBhdGggZD0iTTggMTFhMi41IDIuNSAwIDEgMSAwLTUgMi41IDIuNSAwIDAgMSAwIDV6bTAgMWEzLjUgMy41IDAgMSAwIDAtNyAzLjUgMy41IDAgMCAwIDAgN3pNMyA2LjVhLjUuNSAwIDEgMS0xIDAgLjUuNSAwIDAgMSAxIDB6Ii8+Cjwvc3ZnPgo=';
		me._svg_4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_4__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktY2FtZXJhLWZpbGwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2Ij4KIDxwYXRoIGQ9Ik0xMC41IDguNWEyLjUgMi41IDAgMSAxLTUgMCAyLjUgMi41IDAgMCAxIDUgMHoiLz4KIDxwYXRoIGQ9Ik0yIDRhMiAyIDAgMCAwLTIgMnY2YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlY2YTIgMiAwIDAgMC0yLTJoLTEuMTcyYTIgMiAwIDAgMS0xLjQxNC0uNTg2bC0uODI4LS44MjhBMiAyIDAgMCAwIDkuMTcyIDJINi44MjhhMiAyIDAgMCAwLTEuND'+
			'E0LjU4NmwtLjgyOC44MjhBMiAyIDAgMCAxIDMuMTcyIDRIMnptLjUgMmEuNS41IDAgMSAxIDAtMSAuNS41IDAgMCAxIDAgMXptOSAyLjVhMy41IDMuNSAwIDEgMS03IDAgMy41IDMuNSAwIDAgMSA3IDB6Ii8+Cjwvc3ZnPgo=';
		me._svg_4__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4.onclick=function (e) {
			player.openNext("{node1304}","");
		}
		me._svg_4.onmouseover=function (e) {
			me._svg_4__img.style.visibility='hidden';
			me._svg_4__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_4']=true;
			me._gigatext.logicBlock_visible();
		}
		me._svg_4.onmouseout=function (e) {
			player.setVariableValue('vis_icon_help', false);
			me._svg_4__img.style.visibility='inherit';
			me._svg_4__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_4']=false;
			me._gigatext.logicBlock_visible();
		}
		me._svg_4.ontouchend=function (e) {
			me.elementMouseOver['svg_4']=false;
			me._gigatext.logicBlock_visible();
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._gigatext=document.createElement('div');
		els=me._gigatext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="giga-text";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="panorama";
		el.appendChild(els);
		me._gigatext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gigatext.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['svg_4'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gigatext.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gigatext.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gigatext.style[domTransition]='';
				if (me._gigatext.ggCurrentLogicStateVisible == 0) {
					me._gigatext.style.visibility=(Number(me._gigatext.style.opacity)>0||!me._gigatext.style.opacity)?'inherit':'hidden';
					me._gigatext.ggVisible=true;
				}
				else {
					me._gigatext.style.visibility="hidden";
					me._gigatext.ggVisible=false;
				}
			}
		}
		me._gigatext.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._svg_4.appendChild(me._gigatext);
		me._box_panorama.appendChild(me._svg_4);
		me._additional_menu.appendChild(me._box_panorama);
		el=me._box_fav=document.createElement('div');
		el.ggId="box fav";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container pointer";
		el.ggType='container';
		hs ='';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 40px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._box_fav.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._box_fav.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktc3RhciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTYiPgogPHBhdGggZD0iTTIuODY2IDE0Ljg1Yy0uMDc4LjQ0NC4zNi43OTEuNzQ2LjU5M2w0LjM5LTIuMjU2IDQuMzg5IDIuMjU2Yy4zODYuMTk4LjgyNC0uMTQ5Ljc0Ni0uNTkybC0uODMtNC43MyAzLjUyMi0zLjM1NmMuMzMtLjMxNC4xNi0uODg4LS4yODItLjk1bC00Ljg5OC0uNjk2TDguNDY1Ljc5MmEuNTEzLjUxMyAwIDAgMC0uOTI3IDBMNS4zNTQgNS4xMmwtNC44OTguNjk2Yy0uNDQxLjA2Mi'+
			'0uNjEyLjYzNi0uMjgzLjk1bDMuNTIzIDMuMzU2LS44MyA0Ljczem00LjkwNS0yLjc2Ny0zLjY4NiAxLjg5NC42OTQtMy45NTdhLjU2NS41NjUgMCAwIDAtLjE2My0uNTA1TDEuNzEgNi43NDVsNC4wNTItLjU3NmEuNTI1LjUyNSAwIDAgMCAuMzkzLS4yODhMOCAyLjIyM2wxLjg0NyAzLjY1OGEuNTI1LjUyNSAwIDAgMCAuMzkzLjI4OGw0LjA1Mi41NzUtMi45MDYgMi43N2EuNTY1LjU2NSAwIDAgMC0uMTYzLjUwNmwuNjk0IDMuOTU3LTMuNjg2LTEuODk0YS41MDMuNTAzIDAgMCAwLS40NjEgMHoiLz4KPC9zdmc+Cg==';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktc3Rhci1maWxsIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiI+CiA8cGF0aCBkPSJNMy42MTIgMTUuNDQzYy0uMzg2LjE5OC0uODI0LS4xNDktLjc0Ni0uNTkybC44My00LjczTC4xNzMgNi43NjVjLS4zMjktLjMxNC0uMTU4LS44ODguMjgzLS45NWw0Ljg5OC0uNjk2TDcuNTM4Ljc5MmMuMTk3LS4zOS43My0uMzkuOTI3IDBsMi4xODQgNC4zMjcgNC44OTguNjk2Yy40NDEuMDYyLjYxMi42MzYuMjgyLjk1bC0zLjUyMiAzLjM1Ni44MyA0LjczYy4wNz'+
			'guNDQzLS4zNi43OS0uNzQ2LjU5Mkw4IDEzLjE4N2wtNC4zODkgMi4yNTZ6Ii8+Cjwvc3ZnPgo=';
		me._svg_2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu_1', !player.getVariableValue('vis_thumbnail_menu_1'));
			player.setVariableValue('vis_thumbnail_menu_3', !player.getVariableValue('vis_thumbnail_menu_3'));
		}
		me._svg_2.onmouseover=function (e) {
			me._svg_2__img.style.visibility='hidden';
			me._svg_2__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_2']=true;
			me._favtext.logicBlock_visible();
		}
		me._svg_2.onmouseout=function (e) {
			player.setVariableValue('vis_icon_help', false);
			me._svg_2__img.style.visibility='inherit';
			me._svg_2__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_2']=false;
			me._favtext.logicBlock_visible();
		}
		me._svg_2.ontouchend=function (e) {
			me.elementMouseOver['svg_2']=false;
			me._favtext.logicBlock_visible();
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._favtext=document.createElement('div');
		els=me._favtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="fav-text";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="ulubione";
		el.appendChild(els);
		me._favtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._favtext.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['svg_2'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._favtext.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._favtext.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._favtext.style[domTransition]='';
				if (me._favtext.ggCurrentLogicStateVisible == 0) {
					me._favtext.style.visibility=(Number(me._favtext.style.opacity)>0||!me._favtext.style.opacity)?'inherit':'hidden';
					me._favtext.ggVisible=true;
				}
				else {
					me._favtext.style.visibility="hidden";
					me._favtext.ggVisible=false;
				}
			}
		}
		me._favtext.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._svg_2.appendChild(me._favtext);
		me._box_fav.appendChild(me._svg_2);
		me._additional_menu.appendChild(me._box_fav);
		el=me._box_help=document.createElement('div');
		el.ggId="box help";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container pointer";
		el.ggType='container';
		hs ='';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._box_help.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._box_help.onclick=function (e) {
			player.setVariableValue('vis_info_start', true);
		}
		me._box_help.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktcXVlc3Rpb24tc3F1YXJlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiI+CiA8cGF0aCBkPSJNMTQgMWExIDEgMCAwIDEgMSAxdjEyYTEgMSAwIDAgMS0xIDFIMmExIDEgMCAwIDEtMS0xVjJhMSAxIDAgMCAxIDEtMWgxMnpNMiAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMkgyeiIvPgogPHBhdGggZD0iTTUuMjU1IDUuNzg2YS4yMzcuMjM3IDAgMCAwIC4yNDEuMjQ3aC44MjVjLj'+
			'EzOCAwIC4yNDgtLjExMy4yNjYtLjI1LjA5LS42NTYuNTQtMS4xMzQgMS4zNDItMS4xMzQuNjg2IDAgMS4zMTQuMzQzIDEuMzE0IDEuMTY4IDAgLjYzNS0uMzc0LjkyNy0uOTY1IDEuMzcxLS42NzMuNDg5LTEuMjA2IDEuMDYtMS4xNjggMS45ODdsLjAwMy4yMTdhLjI1LjI1IDAgMCAwIC4yNS4yNDZoLjgxMWEuMjUuMjUgMCAwIDAgLjI1LS4yNXYtLjEwNWMwLS43MTguMjczLS45MjcgMS4wMS0xLjQ4Ni42MDktLjQ2MyAxLjI0NC0uOTc3IDEuMjQ0LTIuMDU2IDAtMS41MTEtMS4yNzYtMi4yNDEtMi42NzMtMi4yNDEtMS4yNjcgMC0yLjY1NS41OS0yLjc1IDIuMjg2em0xLjU1NyA1Ljc2M2MwIC41'+
			'MzMuNDI1LjkyNyAxLjAxLjkyNy42MDkgMCAxLjAyOC0uMzk0IDEuMDI4LS45MjcgMC0uNTUyLS40Mi0uOTQtMS4wMjktLjk0LS41ODQgMC0xLjAwOS4zODgtMS4wMDkuOTR6Ii8+Cjwvc3ZnPgo=';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktcXVlc3Rpb24tc3F1YXJlLWZpbGwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2Ij4KIDxwYXRoIGQ9Ik0yIDBhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0ySDJ6bTMuNDk2IDYuMDMzYS4yMzcuMjM3IDAgMCAxLS4yNC0uMjQ3QzUuMzUgNC4wOTEgNi43MzcgMy41IDguMDA1IDMuNWMxLjM5NiAwIDIuNjcyLjczIDIuNjcyIDIuMjQgMCAxLjA4LS42MzUgMS41OTQtMS4yNDQgMi4wNT'+
			'ctLjczNy41NTktMS4wMS43NjgtMS4wMSAxLjQ4NnYuMTA1YS4yNS4yNSAwIDAgMS0uMjUuMjVoLS44MWEuMjUuMjUgMCAwIDEtLjI1LS4yNDZsLS4wMDQtLjIxN2MtLjAzOC0uOTI3LjQ5NS0xLjQ5OCAxLjE2OC0xLjk4Ny41OS0uNDQ0Ljk2NS0uNzM2Ljk2NS0xLjM3MSAwLS44MjUtLjYyOC0xLjE2OC0xLjMxNC0xLjE2OC0uODAzIDAtMS4yNTMuNDc4LTEuMzQyIDEuMTM0LS4wMTguMTM3LS4xMjguMjUtLjI2Ni4yNWgtLjgyNXptMi4zMjUgNi40NDNjLS41ODQgMC0xLjAwOS0uMzk0LTEuMDA5LS45MjcgMC0uNTUyLjQyNS0uOTQgMS4wMS0uOTQuNjA5IDAgMS4wMjguMzg4IDEuMDI4Ljk0IDAg'+
			'LjUzMy0uNDIuOTI3LTEuMDI5LjkyN3oiLz4KPC9zdmc+Cg==';
		me._svg_1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.onclick=function (e) {
			if (
				(
					((player.getVariableValue('vis_bg_dark') == false))
				)
			) {
				me._screendarker.ggVisible = !me._screendarker.ggVisible;
				var flag=me._screendarker.ggVisible;
				me._screendarker.style[domTransition]='none';
				me._screendarker.style.visibility=((flag)&&(Number(me._screendarker.style.opacity)>0||!me._screendarker.style.opacity))?'inherit':'hidden';
			}
		}
		me._svg_1.onmouseover=function (e) {
			me._svg_1__img.style.visibility='hidden';
			me._svg_1__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_1']=true;
			me._helptext.logicBlock_visible();
		}
		me._svg_1.onmouseout=function (e) {
			player.setVariableValue('vis_icon_help', false);
			me._svg_1__img.style.visibility='inherit';
			me._svg_1__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_1']=false;
			me._helptext.logicBlock_visible();
		}
		me._svg_1.ontouchend=function (e) {
			me.elementMouseOver['svg_1']=false;
			me._helptext.logicBlock_visible();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._helptext=document.createElement('div');
		els=me._helptext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="help-text";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="pomoc";
		el.appendChild(els);
		me._helptext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._helptext.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['svg_1'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._helptext.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._helptext.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._helptext.style[domTransition]='';
				if (me._helptext.ggCurrentLogicStateVisible == 0) {
					me._helptext.style.visibility=(Number(me._helptext.style.opacity)>0||!me._helptext.style.opacity)?'inherit':'hidden';
					me._helptext.ggVisible=true;
				}
				else {
					me._helptext.style.visibility="hidden";
					me._helptext.ggVisible=false;
				}
			}
		}
		me._helptext.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._svg_1.appendChild(me._helptext);
		me._box_help.appendChild(me._svg_1);
		me._additional_menu.appendChild(me._box_help);
		me.divSkin.appendChild(me._additional_menu);
		el=me._loading_screen=document.createElement('div');
		el.ggId="loading_screen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_screen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading_screen.onclick=function (e) {
			me._loading_screen.style[domTransition]='none';
			me._loading_screen.style.visibility='hidden';
			me._loading_screen.ggVisible=false;
		}
		me._loading_screen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._loadingbg=document.createElement('div');
		el.ggId="loadingbg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 78px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 208px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._loading_screen.appendChild(me._loadingbg);
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggDx=0;
		el.ggDy=-12;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loadingtext.ggUpdateText=function() {
			var hs="Wczytuje spacer ... "+(player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		player.addListener('downloadprogress', function() {
			me._loadingtext.ggUpdateText();
		});
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingtext.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._loading_screen.appendChild(me._loadingtext);
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggDx=0;
		el.ggDy=10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #808080;';
		hs+='cursor : default;';
		hs+='height : 12px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 181px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._loading_screen.appendChild(me._loadingbar);
		me.divSkin.appendChild(me._loading_screen);
		el=me._btn_back=document.createElement('div');
		el.ggId="btn_back";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #e6e6e6;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_back.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_back.onclick=function (e) {
			player.goBack("");
		}
		me._btn_back.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_back_icon=document.createElement('div');
		els=me._btn_back_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGhlaWdodD0iNjQiIGNsYXNzPSJzdDAiIHdpZHRoPSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgY2xhc3M9InN0MSIgcG9pbnRzPSI0Nyw0NS45IDMzLDMyIDMzLDMyIDQ3LDE4LjEgJiN4OTsiLz4KICA8cG9seWxpbmUgY2xhc3M9InN0MSIgcG9pbnRz'+
			'PSIzMSw0NS45IDE3LDMyIDE3LDMyIDMxLDE4LjEgJiN4OTsiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_back_icon__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_back_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGhlaWdodD0iNjQiIGNsYXNzPSJzdDAiIHdpZHRoPSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgY2xhc3M9InN0MSIgcG9pbnRzPSI0Nyw0NS45IDMzLDMyIDMzLDMyIDQ3LDE4LjEgJiN4OTsiLz4KICA8cG9seWxpbmUgY2xhc3M9InN0MSIgcG9pbnRz'+
			'PSIzMSw0NS45IDE3LDMyIDE3LDMyIDMxLDE4LjEgJiN4OTsiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_back_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="btn_back_icon";
		el.ggDx=5;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_back_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_back_icon.onmouseover=function (e) {
			me._btn_back_icon__img.style.visibility='hidden';
			me._btn_back_icon__imgo.style.visibility='inherit';
		}
		me._btn_back_icon.onmouseout=function (e) {
			me._btn_back_icon__img.style.visibility='inherit';
			me._btn_back_icon__imgo.style.visibility='hidden';
		}
		me._btn_back_icon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._btn_back.appendChild(me._btn_back_icon);
		me.divSkin.appendChild(me._btn_back);
		el=me._btn_forward=document.createElement('div');
		el.ggId="btn_forward";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle google-menu";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #e6e6e6;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_forward.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_forward.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._btn_forward.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_forward_icon=document.createElement('div');
		els=me._btn_forward_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGhlaWdodD0iNjQiIGNsYXNzPSJzdDAiIHdpZHRoPSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgY2xhc3M9InN0MSIgcG9pbnRzPSIxNywxOC4xIDMxLDMyIDMxLDMyIDE3LDQ1LjkgJiN4OTsiLz4KICA8cG9seWxpbmUgY2xhc3M9InN0MSIgcG9pbnRz'+
			'PSIzMywxOC4xIDQ3LDMyIDQ3LDMyIDMzLDQ1LjkgJiN4OTsiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_forward_icon__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_forward_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGhlaWdodD0iNjQiIGNsYXNzPSJzdDAiIHdpZHRoPSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgY2xhc3M9InN0MSIgcG9pbnRzPSIxNywxOC4xIDMxLDMyIDMxLDMyIDE3LDQ1LjkgJiN4OTsiLz4KICA8cG9seWxpbmUgY2xhc3M9InN0MSIgcG9pbnRz'+
			'PSIzMywxOC4xIDQ3LDMyIDQ3LDMyIDMzLDQ1LjkgJiN4OTsiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_forward_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="btn_forward_icon";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_forward_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_forward_icon.onmouseover=function (e) {
			me._btn_forward_icon__img.style.visibility='hidden';
			me._btn_forward_icon__imgo.style.visibility='inherit';
		}
		me._btn_forward_icon.onmouseout=function (e) {
			me._btn_forward_icon__img.style.visibility='inherit';
			me._btn_forward_icon__imgo.style.visibility='hidden';
		}
		me._btn_forward_icon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._btn_forward.appendChild(me._btn_forward_icon);
		me.divSkin.appendChild(me._btn_forward);
		el=me._fav_menu=document.createElement('div');
		els=me._fav_menu__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 73px;';
		hs+='left : 50%;';
		hs+='margin-left : -57.5px;';
		hs+='margin-top : -36.5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 115px;';
		hs+="";
		els.setAttribute('style',hs);
		me._fav_menu.ggScrollByX = function(diffX) {
			if(!me._fav_menu.ggHorScrollVisible || diffX == 0 || me._fav_menu.ggHPercentVisible >= 1.0) return;
			me._fav_menu.ggScrollPosX = (me._fav_menu__horScrollFg.offsetLeft + diffX);
			me._fav_menu.ggScrollPosX = Math.max(me._fav_menu.ggScrollPosX, 0);
			me._fav_menu.ggScrollPosX = Math.min(me._fav_menu.ggScrollPosX, me._fav_menu__horScrollBg.offsetWidth - me._fav_menu__horScrollFg.offsetWidth);
			me._fav_menu__horScrollFg.style.left = me._fav_menu.ggScrollPosX + 'px';
			let percentScrolled = me._fav_menu.ggScrollPosX / (me._fav_menu__horScrollBg.offsetWidth - me._fav_menu__horScrollFg.offsetWidth);
			me._fav_menu__content.style.left = -(Math.round((me._fav_menu.ggContentWidth * (1.0 - me._fav_menu.ggHPercentVisible)) * percentScrolled)) + me._fav_menu.ggContentLeftOffset + 'px';
			me._fav_menu.ggScrollPosXPercent = (me._fav_menu__horScrollFg.offsetLeft / me._fav_menu__horScrollBg.offsetWidth);
		}
		me._fav_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._fav_menu.ggHorScrollVisible || diffX == 0 || me._fav_menu.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._fav_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._fav_menu.ggScrollPosX >= me._fav_menu__horScrollBg.offsetWidth - me._fav_menu__horScrollFg.offsetWidth)) {
					me._fav_menu.ggScrollPosX = Math.min(me._fav_menu.ggScrollPosX, me._fav_menu__horScrollBg.offsetWidth - me._fav_menu__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._fav_menu.ggScrollPosX <= 0)) {
					me._fav_menu.ggScrollPosX = Math.max(me._fav_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._fav_menu__horScrollFg.style.left = me._fav_menu.ggScrollPosX + 'px';
			let percentScrolled = me._fav_menu.ggScrollPosX / (me._fav_menu__horScrollBg.offsetWidth - me._fav_menu__horScrollFg.offsetWidth);
			me._fav_menu__content.style.left = -(Math.round((me._fav_menu.ggContentWidth * (1.0 - me._fav_menu.ggHPercentVisible)) * percentScrolled)) + me._fav_menu.ggContentLeftOffset + 'px';
			me._fav_menu.ggScrollPosXPercent = (me._fav_menu__horScrollFg.offsetLeft / me._fav_menu__horScrollBg.offsetWidth);
			}, 10);
		}
		me._fav_menu.ggScrollByY = function(diffY) {
			if(!me._fav_menu.ggVertScrollVisible || diffY == 0 || me._fav_menu.ggVPercentVisible >= 1.0) return;
			me._fav_menu.ggScrollPosY = (me._fav_menu__vertScrollFg.offsetTop + diffY);
			me._fav_menu.ggScrollPosY = Math.max(me._fav_menu.ggScrollPosY, 0);
			me._fav_menu.ggScrollPosY = Math.min(me._fav_menu.ggScrollPosY, me._fav_menu__vertScrollBg.offsetHeight - me._fav_menu__vertScrollFg.offsetHeight);
			me._fav_menu__vertScrollFg.style.top = me._fav_menu.ggScrollPosY + 'px';
			let percentScrolled = me._fav_menu.ggScrollPosY / (me._fav_menu__vertScrollBg.offsetHeight - me._fav_menu__vertScrollFg.offsetHeight);
			me._fav_menu__content.style.top = -(Math.round((me._fav_menu.ggContentHeight * (1.0 - me._fav_menu.ggVPercentVisible)) * percentScrolled)) + me._fav_menu.ggContentTopOffset + 'px';
			me._fav_menu.ggScrollPosYPercent = (me._fav_menu__vertScrollFg.offsetTop / me._fav_menu__vertScrollBg.offsetHeight);
		}
		me._fav_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._fav_menu.ggVertScrollVisible || diffY == 0 || me._fav_menu.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._fav_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._fav_menu.ggScrollPosY >= me._fav_menu__vertScrollBg.offsetHeight - me._fav_menu__vertScrollFg.offsetHeight)) {
					me._fav_menu.ggScrollPosY = Math.min(me._fav_menu.ggScrollPosY, me._fav_menu__vertScrollBg.offsetHeight - me._fav_menu__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._fav_menu.ggScrollPosY <= 0)) {
					me._fav_menu.ggScrollPosY = Math.max(me._fav_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._fav_menu__vertScrollFg.style.top = me._fav_menu.ggScrollPosY + 'px';
			let percentScrolled = me._fav_menu.ggScrollPosY / (me._fav_menu__vertScrollBg.offsetHeight - me._fav_menu__vertScrollFg.offsetHeight);
			me._fav_menu__content.style.top = -(Math.round((me._fav_menu.ggContentHeight * (1.0 - me._fav_menu.ggVPercentVisible)) * percentScrolled)) + me._fav_menu.ggContentTopOffset + 'px';
			me._fav_menu.ggScrollPosYPercent = (me._fav_menu__vertScrollFg.offsetTop / me._fav_menu__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._fav_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._fav_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._fav_menu.ggHPercentVisible);
					me._fav_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._fav_menu.clientWidth - (me._fav_menu.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._fav_menu.clientWidth - (me._fav_menu.ggVertScrollVisible ? 15 : 0))) * me._fav_menu.ggHPercentVisible);
					me._fav_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._fav_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._fav_menu.ggVPercentVisible);
					me._fav_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._fav_menu.clientHeight - (me._fav_menu.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._fav_menu.clientHeight - (me._fav_menu.ggHorScrollVisible ? 15 : 0))) * me._fav_menu.ggVPercentVisible);
					me._fav_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._fav_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._fav_menu.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._fav_menu__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._fav_menu.ggDragInertiaX *= 0.65;
					me._fav_menu.ggDragInertiaY *= 0.65;
					me._fav_menu.ggScrollByX(me._fav_menu.ggDragInertiaX);
					me._fav_menu.ggScrollByY(me._fav_menu.ggDragInertiaY);
					if (Math.abs(me._fav_menu.ggDragInertiaX) < 1.0 && Math.abs(me._fav_menu.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._fav_menu__content.ontouchend = null;
				me._fav_menu__content.ontouchmove = null;
				me._fav_menu__content.onpointerup = null;
				me._fav_menu__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._fav_menu__content.onpointerup = me._fav_menu__content.ontouchend;
		}
			me._fav_menu__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._fav_menu.ggDragLastX) * me._fav_menu.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._fav_menu.ggDragLastY) * me._fav_menu.ggVPercentVisible;
				me._fav_menu.ggDragInertiaX = -diffX;
				me._fav_menu.ggDragInertiaY = -diffY;
				me._fav_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._fav_menu.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._fav_menu.ggScrollByX(-diffX);
				me._fav_menu.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._fav_menu__content.onpointermove = me._fav_menu__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elHorScrollBg = me._fav_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 512px; height: 15px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._fav_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 512px; height: 15px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._fav_menu.ggScrollPosX = 0;
		me._fav_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._fav_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._fav_menu.ggDragInertiaX *= 0.65;
					me._fav_menu.ggScrollByX(me._fav_menu.ggDragInertiaX);
					if (Math.abs(me._fav_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._fav_menu.ggDragLastX;
				me._fav_menu.ggDragInertiaX = diffX;
				me._fav_menu.ggDragLastX = e.clientX;
				me._fav_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._fav_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._fav_menu.ggDragInertiaX *= 0.65;
					me._fav_menu.ggScrollByX(me._fav_menu.ggDragInertiaX);
					if (Math.abs(me._fav_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._fav_menu.ggDragLastX;
				me._fav_menu.ggDragInertiaX = diffX;
				me._fav_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._fav_menu.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._fav_menu.ggScrollWidth;
			if (e.offsetX < me._fav_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._fav_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._fav_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._fav_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._fav_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._fav_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._fav_menu.ggScrollByXSmooth(30 * me._fav_menu.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._fav_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="fav_menu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 65px;';
		hs+='height : 84px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fav_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._fav_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._fav_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._fav_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._fav_menu.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._fav_menu.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._fav_menu.style.bottom='80px';
					me._fav_menu.ggUpdatePosition(true);
				}
				else {
					me._fav_menu.ggDx=0;
					me._fav_menu.style.bottom='65px';
					me._fav_menu.ggUpdatePosition(true);
				}
			}
		}
		me._fav_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu_3') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._fav_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._fav_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._fav_menu.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._fav_menu.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._fav_menu.style.opacity == 0.0) { me._fav_menu.style.visibility="hidden"; } }, 505);
					me._fav_menu.style.opacity=0;
				}
				else {
					me._fav_menu.style.visibility=me._fav_menu.ggVisible?'inherit':'hidden';
					me._fav_menu.style.opacity=1;
				}
			}
		}
		me._fav_menu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 15;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (15/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 15;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (15/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._fav_menu__horScrollBg.style.visibility = 'inherit';
					me._fav_menu__horScrollFg.style.visibility = 'inherit';
					me._fav_menu.ggHorScrollVisible = true;
				} else {
					me._fav_menu__horScrollBg.style.visibility = 'hidden';
					me._fav_menu__horScrollFg.style.visibility = 'hidden';
					me._fav_menu.ggHorScrollVisible = false;
				}
				if(me._fav_menu.ggHorScrollVisible) {
					me._fav_menu.ggAvailableHeight = me._fav_menu.clientHeight - 15;
					if (me._fav_menu.ggVertScrollVisible) {
						me._fav_menu.ggAvailableWidth = me._fav_menu.clientWidth - 15;
						me._fav_menu.ggAvailableWidthWithScale = me._fav_menu.getBoundingClientRect().width - me._fav_menu__horScrollBg.getBoundingClientRect().height;
					} else {
						me._fav_menu.ggAvailableWidth = me._fav_menu.clientWidth;
						me._fav_menu.ggAvailableWidthWithScale = me._fav_menu.getBoundingClientRect().width;
					}
					me._fav_menu__horScrollBg.style.width = me._fav_menu.ggAvailableWidth + 'px';
					me._fav_menu.ggHPercentVisible = contentWidth != 0 ? me._fav_menu.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._fav_menu.ggHPercentVisible > 1.0) me._fav_menu.ggHPercentVisible = 1.0;
					me._fav_menu.ggScrollWidth = Math.round(me._fav_menu__horScrollBg.offsetWidth * me._fav_menu.ggHPercentVisible);
					me._fav_menu__horScrollFg.style.width = me._fav_menu.ggScrollWidth + 'px';
					me._fav_menu.ggScrollPosX = me._fav_menu.ggScrollPosXPercent * me._fav_menu.ggAvailableWidth;
					me._fav_menu.ggScrollPosX = Math.min(me._fav_menu.ggScrollPosX, me._fav_menu__horScrollBg.offsetWidth - me._fav_menu__horScrollFg.offsetWidth);
					me._fav_menu__horScrollFg.style.left = me._fav_menu.ggScrollPosX + 'px';
					if (me._fav_menu.ggHPercentVisible < 1.0) {
						let percentScrolled = me._fav_menu.ggScrollPosX / (me._fav_menu__horScrollBg.offsetWidth - me._fav_menu__horScrollFg.offsetWidth);
						me._fav_menu__content.style.left = -(Math.round((me._fav_menu.ggContentWidth * (1.0 - me._fav_menu.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._fav_menu.ggAvailableHeight = me._fav_menu.clientHeight;
					me._fav_menu.ggScrollPosX = 0;
					me._fav_menu.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._fav_menu.ggHorScrollVisible || vertScrollWasVisible != me._fav_menu.ggVertScrollVisible) {
					me.updateSize(me._fav_menu);
					me._fav_menu.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 96;
		el.ggHeight = 62;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner.callChildLogicBlocks_changenode = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip_3 = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			var curNumRows = 0;
			curNumRows = el.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
				}
			}
			me._thumbnail_cloner.callChildLogicBlocks_changenode();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_active();
			me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes();
			me._thumbnail_cloner.callChildLogicBlocks_activehotspotchanged();
			me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip_3();
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "Favourite";
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner.ggUpdate();
		}
		me._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		me._fav_menu__content.appendChild(me._thumbnail_cloner);
		me.divSkin.appendChild(me._fav_menu);
		el=me._exit_vr=document.createElement('div');
		el.ggId="exit_vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 255px;';
		hs+='border-radius : 255px;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 45px;';
		hs+='left : 303px;';
		hs+='position : absolute;';
		hs+='top : 300px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._exit_vr.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._exit_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.isInVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._exit_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._exit_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._exit_vr.style[domTransition]='';
				if (me._exit_vr.ggCurrentLogicStateVisible == 0) {
					me._exit_vr.style.visibility=(Number(me._exit_vr.style.opacity)>0||!me._exit_vr.style.opacity)?'inherit':'hidden';
					me._exit_vr.ggVisible=true;
				}
				else {
					me._exit_vr.style.visibility="hidden";
					me._exit_vr.ggVisible=false;
				}
			}
		}
		me._exit_vr.onclick=function (e) {
			player.exitVR();
			player.openNext("{node1282}","");
		}
		me._exit_vr.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_6=document.createElement('div');
		els=me._svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktY2hldnJvbi1sZWZ0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiI+CiA8cGF0aCBkPSJNMTEuMzU0IDEuNjQ2YS41LjUgMCAwIDEgMCAuNzA4TDUuNzA3IDhsNS42NDcgNS42NDZhLjUuNSAwIDAgMS0uNzA4LjcwOGwtNi02YS41LjUgMCAwIDEgMC0uNzA4bDYtNmEuNS41IDAgMCAxIC43MDggMHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K';
		me._svg_6__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 16px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._exit_vr.appendChild(me._svg_6);
		me.divSkin.appendChild(me._exit_vr);
		me._map.ggMarkerInstances=[];
		me._map.ggMapId = 'Mapbox';
		me._map.ggLastNodeId=null;
		me._map.ggMarkerArray=[];
		me._map.ggGoogleMarkerArray=[];
		me._map.ggLastZoom = -1;
		me._map.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._map.ggRadar.update=function() {
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			var radar=me._map.ggRadar;
			var map=me._map.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._map.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map.ggMapId);
				pan -= me._map.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map.ggFilteredIds.length > 0 && me._map.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat()) && (gps[1]==radar.activeNodeLatLng.lng())) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.976563;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat() * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=5;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng();
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat();
					radar_path.push(new google.maps.LatLng(y, x));
				}
				if (radar.poly) {
					radar.poly.setMap(null);
					radar.poly = null;
				}
				radar.poly = new google.maps.Polygon({
					paths: radar_path,
					strokeColor: '#ff0000',
					strokeOpacity: 0.8,
					strokeWeight: 1,
					fillColor: '#ff0000',
					fillOpacity: 0.35
				});
				radar.poly.setMap(map);
			} else {
				if (radar) {
					activeNodeLatLng = new google.maps.LatLng(0,0);
					if (radar.poly) {
						radar.poly.setMap(null);
						radar.poly = null;
					}
				}
			}
		}
		me._map.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._map.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._map.ggInitMap=function(keepZoom) {
			me._map.ggMapNotLoaded = false;
			var mapType = player.getMapType(me._map.ggMapId);
			var mapDetails = player.getMapDetails(me._map.ggMapId);
			if (!me._map.ggMapId.substring(0,6)=='google' && Object.keys(mapDetails).length === 0) return;
			if (mapType == 'file') {
				me._map.style.backgroundColor = mapDetails['bgcolor'];
				me._map.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._map.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._map.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map.ggMapId);
			}
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = new google.maps.LatLng(0,0);
			}
			if (mapType == 'web') {
				var mapTypeId;
				if (me._map.ggMapId == 'googleroadmap') {
					mapTypeId = google.maps.MapTypeId.ROADMAP;
				} else if (me._map.ggMapId == 'googlehybrid') {
					mapTypeId = google.maps.MapTypeId.HYBRID;
				} else if (me._map.ggMapId == 'googlesatellite') {
					mapTypeId = google.maps.MapTypeId.SATELLITE;
				} else if (me._map.ggMapId == 'googleterrain') {
					mapTypeId = google.maps.MapTypeId.TERRAIN;
				} else {
					mapTypeId = mapDetails['mapprovider'];
				}
				if (me._map.ggLastZoom == -1) me._map.ggLastZoom = 18;
				var initZoom = keepZoom ? me._map.ggLastZoom : 18;
				var mapOptions = {
					zoom: initZoom,
					center: activeNodeLatLng,
					mapTypeId: mapTypeId,
					disableDefaultUI: true,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false
				};
				me._map.ggMap = new google.maps.Map(me._map, mapOptions);
				if (mapTypeId == 'googlecustomstyle') {
					var styledMapType = new google.maps.StyledMapType(JSON.parse(mapDetails['googlecustomstylecode']), {name: 'Styled Map'});
					me._map.ggMap.mapTypes.set('styled_map', styledMapType);
					me._map.ggMap.setMapTypeId('styled_map');
				}
				if (mapTypeId == 'openstreetmap') {
					me._map.ggMap.mapTypes.set('openstreetmap', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							if (mapDetails['mapstyle'] == 'streets') {
								return 'https://tile.openstreetmap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							} else if (mapDetails['mapstyle'] == 'outdoors') {
								return 'https://a.tile.opentopomap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							}
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: mapDetails['mapstyle'] == 'outdoors' ? 17 : 18
					}));
				}
				if (mapTypeId == 'mapbox') {
					me._map.ggMap.mapTypes.set('mapbox', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							if (mapDetails['styleurl'] == '') {
								if (mapDetails['mapstyle'] == 'satellite') {
									return 'https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] + '/' + zoom + '/' + coord.x + '/' + coord.y + '@2x.png?access_token=' + mapDetails['mapkey'];
								} else {
									return 'https://api.mapbox.com/styles/v1/mapbox/' + mapDetails['mapstyle'] + '-v11/tiles/256/' + zoom + '/' + coord.x + '/' + coord.y + '@2x?access_token=' + mapDetails['mapkey'];
								}
							} else {
								var styleurlstring = mapDetails['styleurl'];
								styleurlstring = styleurlstring.slice(styleurlstring.indexOf('styles/') + 7);
								return 'https://api.mapbox.com/styles/v1/' + styleurlstring + '/tiles/256/' + zoom + '/' + coord.x + '/' + coord.y + '@2x?access_token=' + mapDetails['mapkey'];
							}
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: 18
					}));
				}
				if (mapTypeId == 'custom') {
					me._map.ggMap.mapTypes.set('custom', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							var urlString = mapDetails['mapurltemplate'];
							urlString = urlString.replace('{s}', 'a');
							urlString = urlString.replace('{z}', zoom);
							urlString = urlString.replace('{x}', coord.x);
							urlString = urlString.replace('{y}', coord.y);
							return urlString;
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: mapDetails['mapmaxzoom']
					}));
				}
			} else if (mapType == 'file') {
				if (me._map.ggLastZoom == -1) me._map.ggLastZoom = 7;
				var initZoom = keepZoom ? me._map.ggLastZoom : 7;
				var mapOptions = {
				  backgroundColor: mapDetails['bgcolor'],
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: activeNodeLatLng,
					disableDefaultUI: true,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false
				};
				me._map.ggMap = new google.maps.Map(me._map, mapOptions);
				var customMapType = new google.maps.ImageMapType({
					getTileUrl: function(coord, zoom) {
						if (me._map.ggTileAvailable(coord.x, coord.y, zoom)) {
							return basePath + 'images/maptiles/' + me._map.ggMapId + '/' + zoom + '/' + coord.x + '_' + coord.y + '.' + mapDetails['tileformat'];
						} else {
							return null;
						}
					},
					tileSize: new google.maps.Size(256, 256),
					minZoom: 7,
					maxZoom: 7 + mapDetails['zoomlevels'],
					name: mapDetails['title'],
				});
				me._map.ggMap.mapTypes.set(me._map.ggMapId, customMapType);
				me._map.ggMap.setMapTypeId(me._map.ggMapId);
				me._map.ggCalculateFloorplanDimInDeg(mapDetails);
				google.maps.event.addListener(me._map.ggMap, 'center_changed', function() {
					me._map.ggCheckBounds(mapDetails);
				});
				google.maps.event.addListener(me._map.ggMap, 'zoom_changed', function() {
					me._map.ggCheckBounds(mapDetails);
				});
			}
		}
		me._map.ggClearMap=function() {
		me._map.ggMap = null;
		me._map.ggClearMapMarkers();
		me._map.ggMapNotLoaded = true;
		}
		me._map.ggClearMapMarkers=function() {
			me._map.ggLastActivMarker = null;
			var id,marker;
			var markers=me._map.ggGoogleMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.setMap(null);
					me._map.ggGoogleMarkerClusterer.removeMarker(marker);
				}
			}
			me._map.ggGoogleMarkerArray=[];
		}
		me._map.ggCenterNode=function() {
			if (!me._map.ggMap) return;
			var gps;
			if (player.getMapType(me._map.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = new google.maps.LatLng(gps[0], gps[1]);
				me._map.ggMap.panTo(markerLocation);
			}
		}
		me._map.ggFitBounds=function(force) {
			if (me._map.ggMapNotLoaded) return;
			if (!me._map.ggMarkerBounds.isEmpty()) {
				if (me._map.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._map.ggGoogleMarkerArray).length > 1) {
					if (force) {
					me._map.ggMap.fitBounds(me._map.ggMarkerBounds, 30);
					} else {
						if (player.getMapType(me._map.ggMapId) == 'web') {
							me._map.ggMap.setZoom(18);
						} else {
							me._map.ggMap.setZoom(7 + 18);
						}
					}
				} else {
					me._map.ggMap.setCenter(me._map.ggMarkerBounds.getCenter());
					if (player.getMapType(me._map.ggMapId) == 'web') {
						if (force) {
						me._map.ggMap.setZoom(18);
						} else {
							me._map.ggMap.setZoom(18);
						}
					} else {
						if (force) {
						me._map.ggMap.setZoom(7);
						} else {
							me._map.ggMap.setZoom(7 + 18);
						}
					}
				}
			}
		}
		me._map.ggInitMapMarkers=function(updateMapBounds) {
			me._map.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map.ggFilteredIds = [];
			if (me._map.ggFilter != '') {
				var filter = me._map.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map.ggFilteredIds.length > 0) ids = me._map.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._map.ggGoogleMarkerClusterer = new MarkerClusterer(me._map.ggMap, [], {imagePath: basePath + './3rdparty/google_markerclusterer/m', maxZoom: 17});
			me._map.ggMarkerBounds = new google.maps.LatLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._map.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._map.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = new google.maps.LatLng(gps[0], gps[1]);
					marker = new google.maps.Marker({position: markerLocation,map: me._map.ggMap});
					marker.setTitle(player.getNodeTitle(id));
					marker.setClickable(true);
					marker.ggId=id;
					google.maps.event.addListener(marker, 'click', function() {
						player.openNext('{' + this.ggId + '}');
						activeNodeLatLng=me.position;
						lastFov=-1; // force radar update
					});
					me._map.ggGoogleMarkerArray[id] = marker;
					if (id != currentId) {
						me._map.ggGoogleMarkerClusterer.addMarker(marker);
					} else {
						marker.setMap(me._map.ggMap);
					}
					me._map.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && !me._map.ggMarkerBounds.isEmpty() && updateMapBounds) {
				me._map.ggFitBounds(false);
			}
			skin.updateSize(me._map);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
		}
		me._map.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'file') {
				return;
			}
			me._map.ggMapId = mapId;
			if (!me._map.ggMapNotLoaded) {
				if (me._map.ggMap) {
					me._map.ggLastZoom = me._map.ggMap.getZoom();
				}
				me._map.ggClearMap();
				me._map.ggInitMap(true);
				me._map.ggInitMapMarkers(false);
			}
		}
		me._map.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me._map.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me._map.mapHeightInDeg = me._map.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me._map.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me._map.mapWidthInDeg = me._map.mapHeightInDeg * mapAR;
			}
		}
		me._map.ggInCheckBounds=false;
		me._map.ggCheckBounds=function(mapDetails) {
			if (me._map.ggInCheckBounds) return;
			me._map.ggInCheckBounds = true;
			var mapCenter = me._map.ggMap.getCenter();
			var currentZoom = me._map.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._map.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._map.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng();
			var y = mapCenter.lat();
			var xTemp = x;
			var yTemp = y;
			if (me._map.mapWidthInDeg < me._map.clientWidth * pixelInDeg) {
				var xMargin = (me._map.clientWidth * pixelInDeg - me._map.mapWidthInDeg) / 2;
				if (x < me._map.mapWidthInDeg / 2 - xMargin) x = me._map.mapWidthInDeg / 2 - xMargin;
				if (x > me._map.mapWidthInDeg / 2 + xMargin) x = me._map.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me._map.mapWidthInDeg - xOffset) x = me._map.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me._map.mapHeightInDeg < me._map.clientHeight * pixelInDeg) {
				var yMargin = (me._map.clientHeight * pixelInDeg - me._map.mapHeightInDeg) / 2;
				if (y < -me._map.mapHeightInDeg / 2 - yMargin) y = -me._map.mapHeightInDeg / 2 - yMargin;
				if (y > -me._map.mapHeightInDeg / 2 + yMargin) y = -me._map.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me._map.mapHeightInDeg + yOffset) y = -me._map.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				me._map.ggMap.setCenter(new google.maps.LatLng(y, x));
			}
			me._map.ggInCheckBounds = false;
		}
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			if (me._map.ggMapNotLoaded == false) {
				me._map.ggClearMap();
				me._map.ggInitMap(false);
				me._map.ggInitMapMarkers(true);
			}
			me._node_cloner.ggUpdate();
			me._thumbnail_cloner.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._node_scroller.ggUpdatePosition();
			me._loading_screen.style[domTransition]='none';
			me._loading_screen.style.visibility='hidden';
			me._loading_screen.ggVisible=false;
			me._fav_menu.ggUpdatePosition();
		});
		player.addListener('beforechangenode', function() {
			if (
				(
					((player.getVariableValue('vis_loader') == true))
				)
			) {
				me._loading_screen.style[domTransition]='none';
				me._loading_screen.style.visibility=(Number(me._loading_screen.style.opacity)>0||!me._loading_screen.style.opacity)?'inherit':'hidden';
				me._loading_screen.ggVisible=true;
			}
		});
		player.addListener('tilesrequested', function() {
			player.setVariableValue('vis_loader', false);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node_sizechanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_visited && hotspotTemplates['ht_node'][i]._ht_node_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_visited.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_image && hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hotspot_preview0 && hotspotTemplates['ht_node'][i]._hotspot_preview0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hotspot_preview0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_customimage && hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._checkmark_tick1 && hotspotTemplates['ht_node'][i]._checkmark_tick1.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._checkmark_tick1.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._ht_tooltip0 && hotspotTemplates['ht_node'][i]._ht_tooltip0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_tooltip0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_configloaded = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hotspot_preview0 && hotspotTemplates['ht_node'][i]._hotspot_preview0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hotspot_preview0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_position) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_position();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_autorotatechanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hotspot_preview0 && hotspotTemplates['ht_node'][i]._hotspot_preview0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hotspot_preview0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._checkmark_tick1 && hotspotTemplates['ht_node'][i]._checkmark_tick1.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._checkmark_tick1.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_active = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._checkmark_tick1 && hotspotTemplates['ht_node'][i]._checkmark_tick1.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._checkmark_tick1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_checkmark_tick0 && hotspotTemplates['ht_node'][i]._ht_checkmark_tick0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_checkmark_tick0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changevisitednodes = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node_visited && hotspotTemplates['ht_node'][i]._ht_node_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_visited.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_image && hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._checkmark_tick1 && hotspotTemplates['ht_node'][i]._checkmark_tick1.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._checkmark_tick1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_checkmark_tick0 && hotspotTemplates['ht_node'][i]._ht_checkmark_tick0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_checkmark_tick0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_hastouch = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_position) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node_visited && hotspotTemplates['ht_node'][i]._ht_node_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_visited.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_image && hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_customimage && hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._checkmark_tick1 && hotspotTemplates['ht_node'][i]._checkmark_tick1.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._checkmark_tick1.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._ht_tooltip0 && hotspotTemplates['ht_node'][i]._ht_tooltip0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_tooltip0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_hotspot_preview = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hotspot_preview0 && hotspotTemplates['ht_node'][i]._hotspot_preview0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hotspot_preview0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_pol_changenode = function(){
		if(hotspotTemplates['ht_info_pol']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_pol'].length; i++) {
				if (hotspotTemplates['ht_info_pol'][i]._ht_info_image1 && hotspotTemplates['ht_info_pol'][i]._ht_info_image1.logicBlock_visible) {
					hotspotTemplates['ht_info_pol'][i]._ht_info_image1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_pol'][i]._tt_information1 && hotspotTemplates['ht_info_pol'][i]._tt_information1.logicBlock_visible) {
					hotspotTemplates['ht_info_pol'][i]._tt_information1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_pol'][i]._ht_info_customimage1 && hotspotTemplates['ht_info_pol'][i]._ht_info_customimage1.logicBlock_visible) {
					hotspotTemplates['ht_info_pol'][i]._ht_info_customimage1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_pol_configloaded = function(){
		if(hotspotTemplates['ht_info_pol']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_pol'].length; i++) {
				if (hotspotTemplates['ht_info_pol'][i]._tt_information1 && hotspotTemplates['ht_info_pol'][i]._tt_information1.logicBlock_position) {
					hotspotTemplates['ht_info_pol'][i]._tt_information1.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_pol_mouseover = function(){
		if(hotspotTemplates['ht_info_pol']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_pol'].length; i++) {
				if (hotspotTemplates['ht_info_pol'][i]._tt_information1 && hotspotTemplates['ht_info_pol'][i]._tt_information1.logicBlock_visible) {
					hotspotTemplates['ht_info_pol'][i]._tt_information1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_pol_hastouch = function(){
		if(hotspotTemplates['ht_info_pol']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_pol'].length; i++) {
				if (hotspotTemplates['ht_info_pol'][i]._tt_information1 && hotspotTemplates['ht_info_pol'][i]._tt_information1.logicBlock_position) {
					hotspotTemplates['ht_info_pol'][i]._tt_information1.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_pol_activehotspotchanged = function(){
		if(hotspotTemplates['ht_info_pol']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_pol'].length; i++) {
				if (hotspotTemplates['ht_info_pol'][i]._ht_info_image1 && hotspotTemplates['ht_info_pol'][i]._ht_info_image1.logicBlock_visible) {
					hotspotTemplates['ht_info_pol'][i]._ht_info_image1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_pol'][i]._tt_information1 && hotspotTemplates['ht_info_pol'][i]._tt_information1.logicBlock_visible) {
					hotspotTemplates['ht_info_pol'][i]._tt_information1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_pol'][i]._ht_info_customimage1 && hotspotTemplates['ht_info_pol'][i]._ht_info_customimage1.logicBlock_visible) {
					hotspotTemplates['ht_info_pol'][i]._ht_info_customimage1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_eng_changenode = function(){
		if(hotspotTemplates['ht_info_eng']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_eng'].length; i++) {
				if (hotspotTemplates['ht_info_eng'][i]._ht_info_image0 && hotspotTemplates['ht_info_eng'][i]._ht_info_image0.logicBlock_visible) {
					hotspotTemplates['ht_info_eng'][i]._ht_info_image0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_eng'][i]._tt_information0 && hotspotTemplates['ht_info_eng'][i]._tt_information0.logicBlock_visible) {
					hotspotTemplates['ht_info_eng'][i]._tt_information0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_eng'][i]._ht_info_customimage0 && hotspotTemplates['ht_info_eng'][i]._ht_info_customimage0.logicBlock_visible) {
					hotspotTemplates['ht_info_eng'][i]._ht_info_customimage0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_eng_configloaded = function(){
		if(hotspotTemplates['ht_info_eng']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_eng'].length; i++) {
				if (hotspotTemplates['ht_info_eng'][i]._tt_information0 && hotspotTemplates['ht_info_eng'][i]._tt_information0.logicBlock_position) {
					hotspotTemplates['ht_info_eng'][i]._tt_information0.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_eng_mouseover = function(){
		if(hotspotTemplates['ht_info_eng']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_eng'].length; i++) {
				if (hotspotTemplates['ht_info_eng'][i]._tt_information0 && hotspotTemplates['ht_info_eng'][i]._tt_information0.logicBlock_visible) {
					hotspotTemplates['ht_info_eng'][i]._tt_information0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_eng_hastouch = function(){
		if(hotspotTemplates['ht_info_eng']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_eng'].length; i++) {
				if (hotspotTemplates['ht_info_eng'][i]._tt_information0 && hotspotTemplates['ht_info_eng'][i]._tt_information0.logicBlock_position) {
					hotspotTemplates['ht_info_eng'][i]._tt_information0.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_eng_activehotspotchanged = function(){
		if(hotspotTemplates['ht_info_eng']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_eng'].length; i++) {
				if (hotspotTemplates['ht_info_eng'][i]._ht_info_image0 && hotspotTemplates['ht_info_eng'][i]._ht_info_image0.logicBlock_visible) {
					hotspotTemplates['ht_info_eng'][i]._ht_info_image0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_eng'][i]._tt_information0 && hotspotTemplates['ht_info_eng'][i]._tt_information0.logicBlock_visible) {
					hotspotTemplates['ht_info_eng'][i]._tt_information0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_eng'][i]._ht_info_customimage0 && hotspotTemplates['ht_info_eng'][i]._ht_info_customimage0.logicBlock_visible) {
					hotspotTemplates['ht_info_eng'][i]._ht_info_customimage0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_ger_changenode = function(){
		if(hotspotTemplates['ht_info_ger']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_ger'].length; i++) {
				if (hotspotTemplates['ht_info_ger'][i]._ht_info_image && hotspotTemplates['ht_info_ger'][i]._ht_info_image.logicBlock_visible) {
					hotspotTemplates['ht_info_ger'][i]._ht_info_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_ger'][i]._tt_information && hotspotTemplates['ht_info_ger'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info_ger'][i]._tt_information.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_ger'][i]._ht_info_customimage && hotspotTemplates['ht_info_ger'][i]._ht_info_customimage.logicBlock_visible) {
					hotspotTemplates['ht_info_ger'][i]._ht_info_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_ger_configloaded = function(){
		if(hotspotTemplates['ht_info_ger']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_ger'].length; i++) {
				if (hotspotTemplates['ht_info_ger'][i]._tt_information && hotspotTemplates['ht_info_ger'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info_ger'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_ger_mouseover = function(){
		if(hotspotTemplates['ht_info_ger']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_ger'].length; i++) {
				if (hotspotTemplates['ht_info_ger'][i]._tt_information && hotspotTemplates['ht_info_ger'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info_ger'][i]._tt_information.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_ger_hastouch = function(){
		if(hotspotTemplates['ht_info_ger']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_ger'].length; i++) {
				if (hotspotTemplates['ht_info_ger'][i]._tt_information && hotspotTemplates['ht_info_ger'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info_ger'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_ger_activehotspotchanged = function(){
		if(hotspotTemplates['ht_info_ger']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_ger'].length; i++) {
				if (hotspotTemplates['ht_info_ger'][i]._ht_info_image && hotspotTemplates['ht_info_ger'][i]._ht_info_image.logicBlock_visible) {
					hotspotTemplates['ht_info_ger'][i]._ht_info_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_ger'][i]._tt_information && hotspotTemplates['ht_info_ger'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info_ger'][i]._tt_information.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_ger'][i]._ht_info_customimage && hotspotTemplates['ht_info_ger'][i]._ht_info_customimage.logicBlock_visible) {
					hotspotTemplates['ht_info_ger'][i]._ht_info_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_drone_sizechanged = function(){
		if(hotspotTemplates['ht_node_drone']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_drone'].length; i++) {
				if (hotspotTemplates['ht_node_drone'][i]._ht_node_drone.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._ht_node_drone.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_drone_changenode = function(){
		if(hotspotTemplates['ht_node_drone']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_drone'].length; i++) {
				if (hotspotTemplates['ht_node_drone'][i]._ht_node_drone.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._ht_node_drone.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_drone'][i]._ht_node_visited_drone && hotspotTemplates['ht_node_drone'][i]._ht_node_visited_drone.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._ht_node_visited_drone.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_drone'][i]._ht_node_image_drone && hotspotTemplates['ht_node_drone'][i]._ht_node_image_drone.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._ht_node_image_drone.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_drone'][i]._hotspot_preview && hotspotTemplates['ht_node_drone'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_drone'][i]._tt_ht_node_drone && hotspotTemplates['ht_node_drone'][i]._tt_ht_node_drone.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._tt_ht_node_drone.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_drone'][i]._ht_node_customimage_drone && hotspotTemplates['ht_node_drone'][i]._ht_node_customimage_drone.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._ht_node_customimage_drone.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_drone'][i]._checkmark_tick0 && hotspotTemplates['ht_node_drone'][i]._checkmark_tick0.logicBlock_alpha) {
					hotspotTemplates['ht_node_drone'][i]._checkmark_tick0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node_drone'][i]._ht_tooltip && hotspotTemplates['ht_node_drone'][i]._ht_tooltip.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._ht_tooltip.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_drone_configloaded = function(){
		if(hotspotTemplates['ht_node_drone']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_drone'].length; i++) {
				if (hotspotTemplates['ht_node_drone'][i]._hotspot_preview && hotspotTemplates['ht_node_drone'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_drone'][i]._tt_ht_node_drone && hotspotTemplates['ht_node_drone'][i]._tt_ht_node_drone.logicBlock_position) {
					hotspotTemplates['ht_node_drone'][i]._tt_ht_node_drone.logicBlock_position();
				}
				if (hotspotTemplates['ht_node_drone'][i]._tt_ht_node_drone && hotspotTemplates['ht_node_drone'][i]._tt_ht_node_drone.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._tt_ht_node_drone.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_drone_autorotatechanged = function(){
		if(hotspotTemplates['ht_node_drone']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_drone'].length; i++) {
				if (hotspotTemplates['ht_node_drone'][i]._ht_node_drone.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._ht_node_drone.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_drone_mouseover = function(){
		if(hotspotTemplates['ht_node_drone']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_drone'].length; i++) {
				if (hotspotTemplates['ht_node_drone'][i]._hotspot_preview && hotspotTemplates['ht_node_drone'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_drone'][i]._tt_ht_node_drone && hotspotTemplates['ht_node_drone'][i]._tt_ht_node_drone.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._tt_ht_node_drone.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_drone'][i]._checkmark_tick0 && hotspotTemplates['ht_node_drone'][i]._checkmark_tick0.logicBlock_alpha) {
					hotspotTemplates['ht_node_drone'][i]._checkmark_tick0.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_drone_active = function(){
		if(hotspotTemplates['ht_node_drone']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_drone'].length; i++) {
				if (hotspotTemplates['ht_node_drone'][i]._checkmark_tick0 && hotspotTemplates['ht_node_drone'][i]._checkmark_tick0.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._checkmark_tick0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_drone'][i]._ht_checkmark_tick && hotspotTemplates['ht_node_drone'][i]._ht_checkmark_tick.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._ht_checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_drone_changevisitednodes = function(){
		if(hotspotTemplates['ht_node_drone']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_drone'].length; i++) {
				if (hotspotTemplates['ht_node_drone'][i]._ht_node_visited_drone && hotspotTemplates['ht_node_drone'][i]._ht_node_visited_drone.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._ht_node_visited_drone.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_drone'][i]._ht_node_image_drone && hotspotTemplates['ht_node_drone'][i]._ht_node_image_drone.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._ht_node_image_drone.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_drone'][i]._checkmark_tick0 && hotspotTemplates['ht_node_drone'][i]._checkmark_tick0.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._checkmark_tick0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_drone'][i]._ht_checkmark_tick && hotspotTemplates['ht_node_drone'][i]._ht_checkmark_tick.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._ht_checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_drone_hastouch = function(){
		if(hotspotTemplates['ht_node_drone']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_drone'].length; i++) {
				if (hotspotTemplates['ht_node_drone'][i]._tt_ht_node_drone && hotspotTemplates['ht_node_drone'][i]._tt_ht_node_drone.logicBlock_position) {
					hotspotTemplates['ht_node_drone'][i]._tt_ht_node_drone.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_drone_activehotspotchanged = function(){
		if(hotspotTemplates['ht_node_drone']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_drone'].length; i++) {
				if (hotspotTemplates['ht_node_drone'][i]._ht_node_visited_drone && hotspotTemplates['ht_node_drone'][i]._ht_node_visited_drone.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._ht_node_visited_drone.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_drone'][i]._ht_node_image_drone && hotspotTemplates['ht_node_drone'][i]._ht_node_image_drone.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._ht_node_image_drone.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_drone'][i]._tt_ht_node_drone && hotspotTemplates['ht_node_drone'][i]._tt_ht_node_drone.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._tt_ht_node_drone.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_drone'][i]._ht_node_customimage_drone && hotspotTemplates['ht_node_drone'][i]._ht_node_customimage_drone.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._ht_node_customimage_drone.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_drone'][i]._checkmark_tick0 && hotspotTemplates['ht_node_drone'][i]._checkmark_tick0.logicBlock_alpha) {
					hotspotTemplates['ht_node_drone'][i]._checkmark_tick0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node_drone'][i]._ht_tooltip && hotspotTemplates['ht_node_drone'][i]._ht_tooltip.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._ht_tooltip.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_drone_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_node_drone']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_drone'].length; i++) {
				if (hotspotTemplates['ht_node_drone'][i]._ht_node_drone.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._ht_node_drone.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_drone_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_node_drone']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_drone'].length; i++) {
				if (hotspotTemplates['ht_node_drone'][i]._ht_node_drone.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._ht_node_drone.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_drone_varchanged_opt_hotspot_preview = function(){
		if(hotspotTemplates['ht_node_drone']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_drone'].length; i++) {
				if (hotspotTemplates['ht_node_drone'][i]._hotspot_preview && hotspotTemplates['ht_node_drone'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node_drone'][i]._tt_ht_node_drone && hotspotTemplates['ht_node_drone'][i]._tt_ht_node_drone.logicBlock_visible) {
					hotspotTemplates['ht_node_drone'][i]._tt_ht_node_drone.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		me._map.ggUpdateConditionTimer();
		if (me.elementMouseOver['container3']) {
			player.setVariableValue('vis_icon_help', true);
		}
		if (me.elementMouseDown['zoomout']) {
			player.changeFovLog(0.5,true);
		}
		if (me.elementMouseDown['zoomin']) {
			player.changeFovLog(-0.5,true);
		}
		if (me.elementMouseOver['svg_4']) {
			player.setVariableValue('vis_icon_help', true);
		}
		if (me.elementMouseOver['svg_2']) {
			player.setVariableValue('vis_icon_help', true);
		}
		if (me.elementMouseOver['svg_1']) {
			player.setVariableValue('vis_icon_help', true);
		}
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='top : 130px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node.style[domTransition]='';
				if (me._ht_node.ggCurrentLogicStateVisible == 0) {
					me._ht_node.style.visibility="hidden";
					me._ht_node.ggVisible=false;
				}
				else if (me._ht_node.ggCurrentLogicStateVisible == 1) {
					me._ht_node.style.visibility="hidden";
					me._ht_node.ggVisible=false;
				}
				else {
					me._ht_node.style.visibility=(Number(me._ht_node.style.opacity)>0||!me._ht_node.style.opacity)?'inherit':'hidden';
					me._ht_node.ggVisible=true;
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			if (
				(
					((player.getVariableValue('vis_map_close_desktop') == true)) && 
					((player.getHasTouch() == false))
				)
			||
				(
					((player.getVariableValue('vis_map_close_mobile') == true)) && 
					((player.getHasTouch() == true))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._hotspot_preview0.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
			me._checkmark_tick1.logicBlock_alpha();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._hotspot_preview0.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
			me._checkmark_tick1.logicBlock_alpha();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._hotspot_preview0.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
			me._checkmark_tick1.logicBlock_alpha();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_visited=document.createElement('div');
		els=me._ht_node_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktYXJyb3ctdXAtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiI+CiA8cGF0aCBkPSJNMSA4YTcgNyAwIDEgMCAxNCAwQTcgNyAwIDAgMCAxIDh6bTE1IDBBOCA4IDAgMSAxIDAgOGE4IDggMCAwIDEgMTYgMHptLTcuNSAzLjVhLjUuNSAwIDAgMS0xIDBWNS43MDdMNS4zNTQgNy44NTRhLjUuNSAwIDEgMS0uNzA4LS43MDhsMy0zYS41LjUgMCAwIDEgLjcwOCAwbDMgM2EuNS41IDAgMCAxLS43MDguNzA4TDguNSA1LjcwN1YxMS41eiIgZmlsbC'+
			'1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=';
		me._ht_node_visited__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_visited__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktYXJyb3ctdXAtY2lyY2xlLWZpbGwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2Ij4KIDxwYXRoIGQ9Ik0xNiA4QTggOCAwIDEgMCAwIDhhOCA4IDAgMCAwIDE2IDB6bS03LjUgMy41YS41LjUgMCAwIDEtMSAwVjUuNzA3TDUuMzU0IDcuODU0YS41LjUgMCAxIDEtLjcwOC0uNzA4bDMtM2EuNS41IDAgMCAxIC43MDggMGwzIDNhLjUuNSAwIDAgMS0uNzA4LjcwOEw4LjUgNS43MDdWMTEuNXoiLz4KPC9zdmc+Cg==';
		me._ht_node_visited__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_node_visited";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_visited.ggElementNodeId()) == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_visited.style[domTransition]='';
				if (me._ht_node_visited.ggCurrentLogicStateVisible == 0) {
					me._ht_node_visited.style.visibility=(Number(me._ht_node_visited.style.opacity)>0||!me._ht_node_visited.style.opacity)?'inherit':'hidden';
					me._ht_node_visited.ggVisible=true;
				}
				else {
					me._ht_node_visited.style.visibility="hidden";
					me._ht_node_visited.ggVisible=false;
				}
			}
		}
		me._ht_node_visited.onmouseover=function (e) {
			me._ht_node_visited__img.style.visibility='hidden';
			me._ht_node_visited__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_node_visited']=true;
		}
		me._ht_node_visited.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._ht_node_visited.style[domTransition]='none';
			} else {
				me._ht_node_visited.style[domTransition]='all 104ms ease-out 0ms';
			}
			me._ht_node_visited.ggParameter.sx=1;me._ht_node_visited.ggParameter.sy=1;
			me._ht_node_visited.style[domTransform]=parameterToTransform(me._ht_node_visited.ggParameter);
			me._ht_node_visited__img.style.visibility='inherit';
			me._ht_node_visited__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_node_visited']=false;
		}
		me._ht_node_visited.ontouchend=function (e) {
			me.elementMouseOver['ht_node_visited']=false;
		}
		me._ht_node_visited.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._ht_node_visited);
		el=me._ht_node_image=document.createElement('div');
		els=me._ht_node_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktYXJyb3ctdXAtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiI+CiA8cGF0aCBkPSJNMSA4YTcgNyAwIDEgMCAxNCAwQTcgNyAwIDAgMCAxIDh6bTE1IDBBOCA4IDAgMSAxIDAgOGE4IDggMCAwIDEgMTYgMHptLTcuNSAzLjVhLjUuNSAwIDAgMS0xIDBWNS43MDdMNS4zNTQgNy44NTRhLjUuNSAwIDEgMS0uNzA4LS43MDhsMy0zYS41LjUgMCAwIDEgLjcwOCAwbDMgM2EuNS41IDAgMCAxLS43MDguNzA4TDguNSA1LjcwN1YxMS41eiIgZmlsbC'+
			'1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=';
		me._ht_node_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktYXJyb3ctdXAtY2lyY2xlLWZpbGwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2Ij4KIDxwYXRoIGQ9Ik0xNiA4QTggOCAwIDEgMCAwIDhhOCA4IDAgMCAwIDE2IDB6bS03LjUgMy41YS41LjUgMCAwIDEtMSAwVjUuNzA3TDUuMzU0IDcuODU0YS41LjUgMCAxIDEtLjcwOC0uNzA4bDMtM2EuNS41IDAgMCAxIC43MDggMGwzIDNhLjUuNSAwIDAgMS0uNzA4LjcwOEw4LjUgNS43MDdWMTEuNXoiLz4KPC9zdmc+Cg==';
		me._ht_node_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_node_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_image.ggElementNodeId()) == true)) || 
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_image.style[domTransition]='';
				if (me._ht_node_image.ggCurrentLogicStateVisible == 0) {
					me._ht_node_image.style.visibility="hidden";
					me._ht_node_image.ggVisible=false;
				}
				else {
					me._ht_node_image.style.visibility=(Number(me._ht_node_image.style.opacity)>0||!me._ht_node_image.style.opacity)?'inherit':'hidden';
					me._ht_node_image.ggVisible=true;
				}
			}
		}
		me._ht_node_image.onmouseover=function (e) {
			me._ht_node_image__img.style.visibility='hidden';
			me._ht_node_image__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_node_image']=true;
		}
		me._ht_node_image.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._ht_node_image.style[domTransition]='none';
			} else {
				me._ht_node_image.style[domTransition]='all 104ms ease-out 0ms';
			}
			me._ht_node_image.ggParameter.sx=1;me._ht_node_image.ggParameter.sy=1;
			me._ht_node_image.style[domTransform]=parameterToTransform(me._ht_node_image.ggParameter);
			me._ht_node_image__img.style.visibility='inherit';
			me._ht_node_image__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_node_image']=false;
		}
		me._ht_node_image.ontouchend=function (e) {
			me.elementMouseOver['ht_node_image']=false;
		}
		me._ht_node_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._ht_node_image);
		el=me._hotspot_preview0=document.createElement('div');
		el.ggId="hotspot_preview";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -130px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_preview0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_hotspot_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview0.style[domTransition]='';
				if (me._hotspot_preview0.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview0.style.visibility=(Number(me._hotspot_preview0.style.opacity)>0||!me._hotspot_preview0.style.opacity)?'inherit':'hidden';
					me._hotspot_preview0.ggVisible=true;
				}
				else {
					me._hotspot_preview0.style.visibility="hidden";
					me._hotspot_preview0.ggVisible=false;
				}
			}
		}
		me._hotspot_preview0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._ht_preview_picture_frame_0=document.createElement('div');
		el.ggId="ht_preview_picture_frame ";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_preview_picture_frame_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_preview_picture_frame_0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_preview0.appendChild(me._ht_preview_picture_frame_0);
		el=me._ht_preview_nodeimage0=document.createElement('div');
		els=me._ht_preview_nodeimage0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/ht_preview_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_preview_nodeImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		me._ht_preview_nodeimage0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_preview_nodeimage0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_preview0.appendChild(me._ht_preview_nodeimage0);
		el=me._ht_tooltip0=document.createElement('div');
		els=me._ht_tooltip0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_tooltip";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 140px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._ht_tooltip0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_tooltip0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_tooltip0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_tooltip0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_tooltip0.style[domTransition]='';
				if (me._ht_tooltip0.ggCurrentLogicStateVisible == 0) {
					me._ht_tooltip0.style.visibility="hidden";
					me._ht_tooltip0.ggVisible=false;
				}
				else {
					me._ht_tooltip0.style.visibility="hidden";
					me._ht_tooltip0.ggVisible=false;
				}
			}
		}
		me._ht_tooltip0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_preview0.appendChild(me._ht_tooltip0);
		el=me._ht_checkmark_tick0=document.createElement('div');
		els=me._ht_checkmark_tick0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTI0MCAzMzIgMTMwIDEzMDsiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMDAwMDAwO30mI3hkOwoJLnN0MXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXogTS0xMzIuOCwzODEu'+
			'N2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNS'+
			'wxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_checkmark_tick0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 7px;';
		hs+='top : 7px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_checkmark_tick0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_checkmark_tick0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_checkmark_tick0.ggElementNodeId()) == true)) || 
				((me._ht_checkmark_tick0.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_checkmark_tick0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_checkmark_tick0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_checkmark_tick0.style[domTransition]='';
				if (me._ht_checkmark_tick0.ggCurrentLogicStateVisible == 0) {
					me._ht_checkmark_tick0.style.visibility=(Number(me._ht_checkmark_tick0.style.opacity)>0||!me._ht_checkmark_tick0.style.opacity)?'inherit':'hidden';
					me._ht_checkmark_tick0.ggVisible=true;
				}
				else {
					me._ht_checkmark_tick0.style.visibility="hidden";
					me._ht_checkmark_tick0.ggVisible=false;
				}
			}
		}
		me._ht_checkmark_tick0.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview0.appendChild(me._ht_checkmark_tick0);
		me._ht_node.appendChild(me._hotspot_preview0);
		el=me._tt_ht_node=document.createElement('div');
		els=me._tt_ht_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_node.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_node.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_node.style.top='-47px';
					me._tt_ht_node.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_node.ggDx=0;
					me._tt_ht_node.style.top='24px';
					me._tt_ht_node.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == true)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node.style.visibility="hidden";
					me._tt_ht_node.ggVisible=false;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 1) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 2) {
					me._tt_ht_node.style.visibility="hidden";
					me._tt_ht_node.ggVisible=false;
				}
				else {
					me._tt_ht_node.style.visibility="hidden";
					me._tt_ht_node.ggVisible=false;
				}
			}
		}
		me._tt_ht_node.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node.appendChild(me._tt_ht_node);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style[domTransition]='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage__img.src = '';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_node.appendChild(me._ht_node_customimage);
		el=me._checkmark_tick1=document.createElement('div');
		els=me._checkmark_tick1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0zNzIyIC0yNjA2IDMyIDMyIiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB4bWxuczppPSJodH'+
			'RwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iIGhlaWdodD0iMzJweCIgeG1sbnM6Z3JhcGg9Imh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iIHg9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiIgeT0iMHB4IiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzJweCI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5OyYjeDk7JiN4OTtjMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5'+
			'NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40IiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9IiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O00tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyJi'+
			'N4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGE6YWRvYmUtYmxlbmRpbmct'+
			'bW9kZT0ibm9ybWFsIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBkPSImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5Oy'+
			'YjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAy'+
			'Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOC'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDgu'+
			'Nzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2UtbGluZW'+
			'NhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQw'+
			'M2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._checkmark_tick1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 26px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._checkmark_tick1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick1.ggElementNodeId()) == true)) || 
				((me._checkmark_tick1.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick1.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick1.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick1.style.visibility=(Number(me._checkmark_tick1.style.opacity)>0||!me._checkmark_tick1.style.opacity)?'inherit':'hidden';
					me._checkmark_tick1.ggVisible=true;
				}
				else {
					me._checkmark_tick1.style.visibility="hidden";
					me._checkmark_tick1.ggVisible=false;
				}
			}
		}
		me._checkmark_tick1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.ggUserdata.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkmark_tick1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkmark_tick1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkmark_tick1.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick1.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._checkmark_tick1.style.opacity == 0.0) { me._checkmark_tick1.style.visibility="hidden"; } }, 505);
					me._checkmark_tick1.style.opacity=0;
				}
				else {
					me._checkmark_tick1.style.visibility=me._checkmark_tick1.ggVisible?'inherit':'hidden';
					me._checkmark_tick1.style.opacity=1;
				}
			}
		}
		me._checkmark_tick1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._checkmark_tick1);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['ht_node_visited']) {
					if (player.transitionsDisabled) {
						me._ht_node_visited.style[domTransition]='none';
					} else {
						me._ht_node_visited.style[domTransition]='all 104ms ease-out 0ms';
					}
					me._ht_node_visited.ggParameter.sx=1.05;me._ht_node_visited.ggParameter.sy=1.05;
					me._ht_node_visited.style[domTransform]=parameterToTransform(me._ht_node_visited.ggParameter);
				}
				if (me.elementMouseOver['ht_node_image']) {
					if (player.transitionsDisabled) {
						me._ht_node_image.style[domTransition]='none';
					} else {
						me._ht_node_image.style[domTransition]='all 104ms ease-out 0ms';
					}
					me._ht_node_image.ggParameter.sx=1.05;me._ht_node_image.ggParameter.sy=1.05;
					me._ht_node_image.style[domTransform]=parameterToTransform(me._ht_node_image.ggParameter);
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_info_pol(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info_pol=document.createElement('div');
		el.ggId="ht_info_pol";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 52px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_pol.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info_pol.onclick=function (e) {
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup_2', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_pol.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_pol.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info_pol']=true;
			me._tt_information1.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_pol.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info_pol']=false;
			me._tt_information1.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_pol.ontouchend=function (e) {
			me.elementMouseOver['ht_info_pol']=false;
			me._tt_information1.logicBlock_visible();
		}
		me._ht_info_pol.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image1=document.createElement('div');
		els=me._ht_info_image1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQwIDQ4MCIgaWQ9ImZsYWctaWNvbnMtcGwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02NDAgNDgwSDBWMGg2NDB6Ii8+CiAgPHBhdGggZmlsbD0iI2RjMTQzYyIgZD0iTTY0MCA0ODBIMFYyNDBoNjQweiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_info_image1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQwIDQ4MCIgaWQ9ImZsYWctaWNvbnMtcGwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02NDAgNDgwSDBWMGg2NDB6Ii8+CiAgPHBhdGggZmlsbD0iI2RjMTQzYyIgZD0iTTY0MCA0ODBIMFYyNDBoNjQweiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_info_image1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image1.style[domTransition]='';
				if (me._ht_info_image1.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image1.style.visibility="hidden";
					me._ht_info_image1.ggVisible=false;
				}
				else {
					me._ht_info_image1.style.visibility=(Number(me._ht_info_image1.style.opacity)>0||!me._ht_info_image1.style.opacity)?'inherit':'hidden';
					me._ht_info_image1.ggVisible=true;
				}
			}
		}
		me._ht_info_image1.onmouseover=function (e) {
			me._ht_info_image1__img.style.visibility='hidden';
			me._ht_info_image1__imgo.style.visibility='inherit';
		}
		me._ht_info_image1.onmouseout=function (e) {
			me._ht_info_image1__img.style.visibility='inherit';
			me._ht_info_image1__imgo.style.visibility='hidden';
		}
		me._ht_info_image1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_info_pol.appendChild(me._ht_info_image1);
		el=me._tt_information1=document.createElement('div');
		els=me._tt_information1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information1.style[domTransition]='left 0s, top 0s';
				if (me._tt_information1.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_information1.style.top='-47px';
					me._tt_information1.ggUpdatePosition(true);
				}
				else {
					me._tt_information1.ggDx=0;
					me._tt_information1.style.top='24px';
					me._tt_information1.ggUpdatePosition(true);
				}
			}
		}
		me._tt_information1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info_pol'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information1.style[domTransition]='left 0s, top 0s';
				if (me._tt_information1.ggCurrentLogicStateVisible == 0) {
					me._tt_information1.style.visibility=(Number(me._tt_information1.style.opacity)>0||!me._tt_information1.style.opacity)?'inherit':'hidden';
					me._tt_information1.ggVisible=true;
				}
				else {
					me._tt_information1.style.visibility="hidden";
					me._tt_information1.ggVisible=false;
				}
			}
		}
		me._tt_information1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_info_pol.appendChild(me._tt_information1);
		el=me._ht_info_customimage1=document.createElement('div');
		els=me._ht_info_customimage1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_info_customimage1.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_customimage1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_customimage1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_customimage1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_customimage1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_customimage1.style[domTransition]='';
				if (me._ht_info_customimage1.ggCurrentLogicStateVisible == 0) {
					me._ht_info_customimage1.style.visibility="hidden";
					me._ht_info_customimage1__img.src = '';
					me._ht_info_customimage1.ggVisible=false;
				}
				else {
					me._ht_info_customimage1.style.visibility=(Number(me._ht_info_customimage1.style.opacity)>0||!me._ht_info_customimage1.style.opacity)?'inherit':'hidden';
					me._ht_info_customimage1.ggSubElement.src=me._ht_info_customimage1.ggText;
					me._ht_info_customimage1.ggVisible=true;
				}
			}
		}
		me._ht_info_customimage1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_info_customimage1.clientWidth;
			var parentHeight = me._ht_info_customimage1.clientHeight;
			var img = me._ht_info_customimage1__img;
			var aspectRatioDiv = me._ht_info_customimage1.clientWidth / me._ht_info_customimage1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_info_pol.appendChild(me._ht_info_customimage1);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_info_pol;
	};
	function SkinHotspotClass_ht_info_eng(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info_eng=document.createElement('div');
		el.ggId="ht_info_eng";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 52px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_eng.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info_eng.onclick=function (e) {
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup_2', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_eng.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_eng.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info_eng']=true;
			me._tt_information0.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_eng.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info_eng']=false;
			me._tt_information0.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_eng.ontouchend=function (e) {
			me.elementMouseOver['ht_info_eng']=false;
			me._tt_information0.logicBlock_visible();
		}
		me._ht_info_eng.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image0=document.createElement('div');
		els=me._ht_info_image0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQwIDQ4MCIgaWQ9ImZsYWctaWNvbnMtZ2IiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBmaWxsPSIjMDEyMTY5IiBkPSJNMCAwaDY0MHY0ODBIMHoiLz4KIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Im03NSAwIDI0NCAxODFMNTYyIDBoNzh2NjJMNDAwIDI0MWwyNDAgMTc4djYxaC04MEwzMjAgMzAxIDgxIDQ4MEgwdi02MGwyMzktMTc4TDAgNjRWMGg3NXoiLz4KIDxwYXRoIGZpbGw9IiNDODEwMkUiIGQ9Im00MjQgMjgxIDIxNiAxNTl2NDBMMzY5IDI4MWg1NXptLTE4NCAyMCA2IDM1TDU0IDQ4MEgwbDI0MC0xNzl6TTY0MCAwdjNMMz'+
			'kxIDE5MWwyLTQ0TDU5MCAwaDUwek0wIDBsMjM5IDE3NmgtNjBMMCA0MlYweiIvPgogPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI0MSAwdjQ4MGgxNjBWMEgyNDF6TTAgMTYwdjE2MGg2NDBWMTYwSDB6Ii8+CiA8cGF0aCBmaWxsPSIjQzgxMDJFIiBkPSJNMCAxOTN2OTZoNjQwdi05Nkgwek0yNzMgMHY0ODBoOTZWMGgtOTZ6Ii8+Cjwvc3ZnPgo=';
		me._ht_info_image0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQwIDQ4MCIgaWQ9ImZsYWctaWNvbnMtZ2IiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBmaWxsPSIjMDEyMTY5IiBkPSJNMCAwaDY0MHY0ODBIMHoiLz4KIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Im03NSAwIDI0NCAxODFMNTYyIDBoNzh2NjJMNDAwIDI0MWwyNDAgMTc4djYxaC04MEwzMjAgMzAxIDgxIDQ4MEgwdi02MGwyMzktMTc4TDAgNjRWMGg3NXoiLz4KIDxwYXRoIGZpbGw9IiNDODEwMkUiIGQ9Im00MjQgMjgxIDIxNiAxNTl2NDBMMzY5IDI4MWg1NXptLTE4NCAyMCA2IDM1TDU0IDQ4MEgwbDI0MC0xNzl6TTY0MCAwdjNMMz'+
			'kxIDE5MWwyLTQ0TDU5MCAwaDUwek0wIDBsMjM5IDE3NmgtNjBMMCA0MlYweiIvPgogPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI0MSAwdjQ4MGgxNjBWMEgyNDF6TTAgMTYwdjE2MGg2NDBWMTYwSDB6Ii8+CiA8cGF0aCBmaWxsPSIjQzgxMDJFIiBkPSJNMCAxOTN2OTZoNjQwdi05Nkgwek0yNzMgMHY0ODBoOTZWMGgtOTZ6Ii8+Cjwvc3ZnPgo=';
		me._ht_info_image0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image0.style[domTransition]='';
				if (me._ht_info_image0.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image0.style.visibility="hidden";
					me._ht_info_image0.ggVisible=false;
				}
				else {
					me._ht_info_image0.style.visibility=(Number(me._ht_info_image0.style.opacity)>0||!me._ht_info_image0.style.opacity)?'inherit':'hidden';
					me._ht_info_image0.ggVisible=true;
				}
			}
		}
		me._ht_info_image0.onmouseover=function (e) {
			me._ht_info_image0__img.style.visibility='hidden';
			me._ht_info_image0__imgo.style.visibility='inherit';
		}
		me._ht_info_image0.onmouseout=function (e) {
			me._ht_info_image0__img.style.visibility='inherit';
			me._ht_info_image0__imgo.style.visibility='hidden';
		}
		me._ht_info_image0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_info_eng.appendChild(me._ht_info_image0);
		el=me._tt_information0=document.createElement('div');
		els=me._tt_information0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information0.style[domTransition]='left 0s, top 0s';
				if (me._tt_information0.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_information0.style.top='-47px';
					me._tt_information0.ggUpdatePosition(true);
				}
				else {
					me._tt_information0.ggDx=0;
					me._tt_information0.style.top='24px';
					me._tt_information0.ggUpdatePosition(true);
				}
			}
		}
		me._tt_information0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info_eng'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information0.style[domTransition]='left 0s, top 0s';
				if (me._tt_information0.ggCurrentLogicStateVisible == 0) {
					me._tt_information0.style.visibility=(Number(me._tt_information0.style.opacity)>0||!me._tt_information0.style.opacity)?'inherit':'hidden';
					me._tt_information0.ggVisible=true;
				}
				else {
					me._tt_information0.style.visibility="hidden";
					me._tt_information0.ggVisible=false;
				}
			}
		}
		me._tt_information0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_info_eng.appendChild(me._tt_information0);
		el=me._ht_info_customimage0=document.createElement('div');
		els=me._ht_info_customimage0__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_info_customimage0.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_customimage0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_customimage0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_customimage0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_customimage0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_customimage0.style[domTransition]='';
				if (me._ht_info_customimage0.ggCurrentLogicStateVisible == 0) {
					me._ht_info_customimage0.style.visibility="hidden";
					me._ht_info_customimage0__img.src = '';
					me._ht_info_customimage0.ggVisible=false;
				}
				else {
					me._ht_info_customimage0.style.visibility=(Number(me._ht_info_customimage0.style.opacity)>0||!me._ht_info_customimage0.style.opacity)?'inherit':'hidden';
					me._ht_info_customimage0.ggSubElement.src=me._ht_info_customimage0.ggText;
					me._ht_info_customimage0.ggVisible=true;
				}
			}
		}
		me._ht_info_customimage0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_info_customimage0.clientWidth;
			var parentHeight = me._ht_info_customimage0.clientHeight;
			var img = me._ht_info_customimage0__img;
			var aspectRatioDiv = me._ht_info_customimage0.clientWidth / me._ht_info_customimage0.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_info_eng.appendChild(me._ht_info_customimage0);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_info_eng;
	};
	function SkinHotspotClass_ht_info_ger(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info_ger=document.createElement('div');
		el.ggId="ht_info_ger";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 52px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_ger.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info_ger.onclick=function (e) {
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup_2', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_ger.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_ger.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info_ger']=true;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_ger.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info_ger']=false;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_ger.ontouchend=function (e) {
			me.elementMouseOver['ht_info_ger']=false;
			me._tt_information.logicBlock_visible();
		}
		me._ht_info_ger.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image=document.createElement('div');
		els=me._ht_info_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQwIDQ4MCIgaWQ9ImZsYWctaWNvbnMtZGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBmaWxsPSIjZmZjZTAwIiBkPSJNMCAzMjBoNjQwdjE2MEgweiIvPgogPHBhdGggZD0iTTAgMGg2NDB2MTYwSDB6Ii8+CiA8cGF0aCBmaWxsPSIjZDAwIiBkPSJNMCAxNjBoNjQwdjE2MEgweiIvPgo8L3N2Zz4K';
		me._ht_info_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQwIDQ4MCIgaWQ9ImZsYWctaWNvbnMtZGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBmaWxsPSIjZmZjZTAwIiBkPSJNMCAzMjBoNjQwdjE2MEgweiIvPgogPHBhdGggZD0iTTAgMGg2NDB2MTYwSDB6Ii8+CiA8cGF0aCBmaWxsPSIjZDAwIiBkPSJNMCAxNjBoNjQwdjE2MEgweiIvPgo8L3N2Zz4K';
		me._ht_info_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image.style[domTransition]='';
				if (me._ht_info_image.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image.style.visibility="hidden";
					me._ht_info_image.ggVisible=false;
				}
				else {
					me._ht_info_image.style.visibility=(Number(me._ht_info_image.style.opacity)>0||!me._ht_info_image.style.opacity)?'inherit':'hidden';
					me._ht_info_image.ggVisible=true;
				}
			}
		}
		me._ht_info_image.onmouseover=function (e) {
			me._ht_info_image__img.style.visibility='hidden';
			me._ht_info_image__imgo.style.visibility='inherit';
		}
		me._ht_info_image.onmouseout=function (e) {
			me._ht_info_image__img.style.visibility='inherit';
			me._ht_info_image__imgo.style.visibility='hidden';
		}
		me._ht_info_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_info_ger.appendChild(me._ht_info_image);
		el=me._tt_information=document.createElement('div');
		els=me._tt_information__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_information.style.top='-47px';
					me._tt_information.ggUpdatePosition(true);
				}
				else {
					me._tt_information.ggDx=0;
					me._tt_information.style.top='24px';
					me._tt_information.ggUpdatePosition(true);
				}
			}
		}
		me._tt_information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info_ger'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStateVisible == 0) {
					me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
					me._tt_information.ggVisible=true;
				}
				else {
					me._tt_information.style.visibility="hidden";
					me._tt_information.ggVisible=false;
				}
			}
		}
		me._tt_information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_info_ger.appendChild(me._tt_information);
		el=me._ht_info_customimage=document.createElement('div');
		els=me._ht_info_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_info_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_customimage.style[domTransition]='';
				if (me._ht_info_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_info_customimage.style.visibility="hidden";
					me._ht_info_customimage__img.src = '';
					me._ht_info_customimage.ggVisible=false;
				}
				else {
					me._ht_info_customimage.style.visibility=(Number(me._ht_info_customimage.style.opacity)>0||!me._ht_info_customimage.style.opacity)?'inherit':'hidden';
					me._ht_info_customimage.ggSubElement.src=me._ht_info_customimage.ggText;
					me._ht_info_customimage.ggVisible=true;
				}
			}
		}
		me._ht_info_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_info_customimage.clientWidth;
			var parentHeight = me._ht_info_customimage.clientHeight;
			var img = me._ht_info_customimage__img;
			var aspectRatioDiv = me._ht_info_customimage.clientWidth / me._ht_info_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_info_ger.appendChild(me._ht_info_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_info_ger;
	};
	function SkinHotspotClass_ht_node_drone(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_drone=document.createElement('div');
		el.ggId="ht_node_drone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='top : 130px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_drone.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_drone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_drone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_drone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_drone.style[domTransition]='';
				if (me._ht_node_drone.ggCurrentLogicStateVisible == 0) {
					me._ht_node_drone.style.visibility="hidden";
					me._ht_node_drone.ggVisible=false;
				}
				else if (me._ht_node_drone.ggCurrentLogicStateVisible == 1) {
					me._ht_node_drone.style.visibility="hidden";
					me._ht_node_drone.ggVisible=false;
				}
				else {
					me._ht_node_drone.style.visibility=(Number(me._ht_node_drone.style.opacity)>0||!me._ht_node_drone.style.opacity)?'inherit':'hidden';
					me._ht_node_drone.ggVisible=true;
				}
			}
		}
		me._ht_node_drone.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			if (
				(
					((player.getVariableValue('vis_map_close_desktop') == true)) && 
					((player.getHasTouch() == false))
				)
			||
				(
					((player.getVariableValue('vis_map_close_mobile') == true)) && 
					((player.getHasTouch() == true))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_drone.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_drone.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_drone']=true;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node_drone.logicBlock_visible();
			me._checkmark_tick0.logicBlock_alpha();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_drone.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_drone']=false;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node_drone.logicBlock_visible();
			me._checkmark_tick0.logicBlock_alpha();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_drone.ontouchend=function (e) {
			me.elementMouseOver['ht_node_drone']=false;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node_drone.logicBlock_visible();
			me._checkmark_tick0.logicBlock_alpha();
		}
		me._ht_node_drone.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_visited_drone=document.createElement('div');
		els=me._ht_node_visited_drone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBTdmcgVmVjdG9yIEljb25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiAtLT4KPHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiB4PSIwcHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMDAgMTAwMCIgZmlsbD0id2hpdGUiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxucz'+
			'p4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxtZXRhZGF0YT4gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gPC9tZXRhZGF0YT4KIDxnPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDUxMS4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiPgogICA8cGF0aCBkPSJNMTQxMS45LDIzMTcuM2MtMjYuOC0yOC43LTMyLjYtOTItMzYuNC0zNjUuOWwtNS43LTMzMy4zbC04NC4zLTI0LjljLTIwMy4xLTU5LjQtMjY0LjQtMjA1LTIxMC43'+
			'LTQ5Ni4xYzkwLTQ4OC41LDQ1NC02NzIuNCw2ODcuNy0zNTAuNWM4Mi40LDExMywxNTMuMiwzNTAuNSwxNTMuMiw1MTUuM1YxMzk0aDc3My45aDc3Mmw0Ny45LTEwOS4ybDQ3LjktMTA5LjJsLTExMy04Mi40Yy0yOTUtMjE2LjUtNTIxLTU0Mi4xLTYzMC4yLTkwNi4xYy00Mi4xLTEzNy45LTQ0LjEtMTc0LjMtNTEuNy0xMDIxYy01LjgtOTI3LjEtNS44LTkzMi45LDgwLjQtOTMyLjljNzguNSwwLDg4LjEsMzIuNiw4OC4xLDI5MS4ydjI0NS4yaDk1LjhoOTUuOHYyMjAuM3YyMjAuM2gtOTcuN2gtOTkuNmwxMS41LDM3OS4zYzExLjUsNDE5LjUsMzIuNiw1MzYuNCwxMzcuOSw3NjQuM0MzMTgzLjgsNT'+
			'kxLjMsMzM2MCw4MDkuNywzNTY1LDk2MWw3MC45LDUxLjdsMzQuNS03Mi44YzIxLjEtNDAuMiw1Ny41LTgyLjQsODQuMy05NS44YzY5LTM0LjUsMjQyMS4zLTM0LjUsMjQ5MC4yLDBjMjYuOCwxMy40LDYzLjIsNTUuNiw4NC4zLDk1LjhsMzQuNSw3Mi44bDcwLjktNTEuN2MyMDMtMTUxLjMsMzgxLjItMzY5LjcsNDg4LjUtNjA1LjNjMTA5LjItMjM3LjUsMTI4LjMtMzQ4LjYsMTM5LjgtNzY2LjJsMTEuNS0zNzkuM2gtOTkuNkg2ODc3di0yMjAuM3YtMjIwLjNoOTUuOGg5NS44di0yNDUuMmMwLTI1OC42LDkuNi0yOTEuMiw4OC4xLTI5MS4yYzg2LjIsMCw4Ni4yLDUuNyw4MC41LDkzMi45Yy03LjYs'+
			'ODQ2LjctOS42LDg4My4xLTUxLjcsMTAyMWMtMTExLjEsMzY3LjgtMzM1LjIsNjg3LjctNjM2LDkwOS45bC0xMDkuMiw4MC40bDQ3LjksMTA5LjJsNDkuOCwxMDcuM0g3MzA4aDc3Mmw3LjctMTY2LjdjMjMtNDE1LjcsMjQzLjMtNjk5LjIsNDk0LjItNjMyLjFjODQuMywyMywxNDkuNCw3Mi44LDIxNC41LDE2OC42YzExNi44LDE3NC4zLDE4NS44LDU0Mi4xLDEyNC41LDY2Mi44Yy00NC4xLDg2LjItMTM5LjgsMTU3LjEtMjI2LDE3MC41bC03NC43LDEzLjR2MzM5LjFjMCwzMDQuNi0zLjgsMzQyLjktMzQuNSwzNjkuN2MtNDIuMSwzOC4zLTk5LjYsNDIuMS0xNDcuNSw3LjdjLTMwLjYtMjQuOS0zNC'+
			'41LTU3LjUtMzIuNi0zNjRsMS45LTMzOS4xbC0xMDkzLjgsMy44bC0xMDk1LjcsNS43bC0xNy4yLDY3Yy0zMC43LDExNi45LTIxLjEsMTE0LjktNDYxLjcsMTE0LjloLTQwNC4ybC00Niw2Ny4xYy01NS42LDgyLjQtMTgwLjEsMTQzLjctMjg5LjIsMTQzLjdjLTEwOS4yLDAtMjQxLjQtNjUuMS0yOTMuMS0xNDUuNmwtNDIuMS02NS4xaC00MDQuMmMtNDQwLjYsMC00MzEsMS45LTQ2MS43LTExNC45bC0xNy4yLTY3bC0xMDk1LjctNS43bC0xMDk1LjctMy44djM0NC44YzAsMzE5LjktMS45LDM0NC44LTM2LjQsMzY0QzE0OTguMSwyMzYxLjMsMTQ0Ni4zLDIzNTUuNiwxNDExLjksMjMxNy4zeiIvPgog'+
			'ICA8cGF0aCBkPSJNMjk3LDIxMDIuN2MtMTgyLTM4LjMtMjMzLjctODYuMi0xNzIuNC0xNTMuMmMxMDEuNS0xMTEuMSw0NTcuOC0xNjguNiw4MzcuMS0xMzZjMTM5LjgsMTMuNCwyNjIuNCwzMC43LDI3MC4xLDM4LjNjOS42LDkuNiwxMy40LDUzLjYsOS42LDk5LjZjLTUuNyw4MC40LTcuNyw4NC4zLTcyLjgsOTBjLTM2LjQsMy44LTEzNiwxOS4yLTIyMC4zLDM0LjVDNzU4LjcsMjExMC40LDQwMC40LDIxMjUuNywyOTcsMjEwMi43eiIvPgogICA8cGF0aCBkPSJNMTkyNS4yLDIxMDIuN2MtODIuNC05LjYtMTYyLjgtMjMtMTc2LjItMjYuOGMtMjYuOC0xMS41LTM2LjQtMTgzLjktOS42LTE4My45Yz'+
			'cuNywwLDExNi45LTE3LjIsMjQzLjMtMzYuNGMzMjkuNS01My42LDUwMC02NS4xLDY0NS42LTQyLjFjMzE5LjksNDYsMzI1LjYsMTY2LjcsMTUuMywyNjAuNUMyNTE3LjEsMjExMi4zLDIxNDMuNiwyMTI3LjYsMTkyNS4yLDIxMDIuN3oiLz4KICAgPHBhdGggZD0iTTc0MzIuNSwyMDkzLjFjLTE4MC4xLTQwLjItMjk2LjktMTA1LjQtMjk2LjktMTYyLjhjMC01OS40LDY1LjEtOTEuOSwyMzUuNi0xMTYuOWMxNDUuNi0yMywzMTYuMS0xMS41LDY0NS41LDQyLjFjMTI2LjQsMTkuMiwyMzcuNSwzNi40LDI0NS4yLDM2LjRjNy43LDAsMTMuNCw0MC4yLDkuNiw5MGMtNS43LDkwLTcuNiw5MS45LTgyLjQs'+
			'MTA1LjRDODAxMi45LDIxMTgsNzU1OC45LDIxMjEuOSw3NDMyLjUsMjA5My4xeiIvPgogICA8cGF0aCBkPSJNOTI4MSwyMTEwLjRjLTMwLjYtMy44LTEzNC4xLTIxLjEtMjI5LjktMzYuNGMtOTMuOS0xNS4zLTE5Ny4zLTMwLjYtMjI5LjktMzIuNmMtNTUuNi01LjctNTcuNS05LjYtNjMuMi0xMDUuNGMtMy44LTc0LjcsMS45LTEwMS41LDE5LjItMTAxLjVjMTMuNCwwLDEzNC4xLTkuNiwyNjguMi0yMS4xYzI3NS44LTI0LjksNTIxLTMuOCw2OTMuNCw1OS40YzI4My41LDEwNy4zLDE4MC4xLDIyNi0yMDguOCwyMzkuNEM5NDI0LjcsMjExNi4xLDkzMTMuNiwyMTE0LjIsOTI4MSwyMTEwLjR6Ii8+Ci'+
			'AgIDxwYXRoIGQ9Ik00NTg0LDI2My44Yy0zNC41LTE5LjItNzQuNy02MS4zLTkwLTkxLjlsLTI4LjctNTUuNmwtMzg2LjktMS45Yy0yMTQuNS0xLjktNDE3LjYtMTMuNC00NTAuMi0yM2MtODIuNC0yNi44LTE5MS42LTE1MS4zLTIxNi41LTI0My4zYy0yOC43LTEwMy40LTI4LjctMTYyNi4zLDAtMTcxMi41YzM0LjUtMTAxLjUsMTExLjEtMTg5LjYsMTk3LjMtMjI5LjljNzQuNy0zNC41LDE0OS40LTM2LjQsMTM5MC43LTM2LjRjMTI0MS4zLDAsMTMxNiwxLjksMTM5MC43LDM2LjRjOTMuOSw0Mi4xLDE2OC42LDEzNC4xLDE5Ny4zLDI0MS40YzI4LjcsMTAxLjUsMjguNywxNTk5LjUsMCwxNzAxYy0y'+
			'NC45LDkwLTEyMC43LDIwMy4xLTIwNSwyMzcuNWMtNDYsMTkuMi0xNjAuOSwyNi44LTQyMS40LDI2LjhjLTE5Ny4zLDAtMzc3LjQsMy44LTM5OC40LDkuNmMtMjMsNS44LTQ5LjgsMzAuNy02My4yLDU3LjVjLTExLjUsMjQuOS00Ny45LDYzLjItODIuNCw4NC4zYy01Ny41LDM0LjUtOTcuNywzOC4zLTQxNy42LDM4LjNDNDY4MS43LDMwMi4xLDQ2MzkuNiwyOTguMyw0NTg0LDI2My44eiBNNjI0Ni43LTIzMi40YzY1LjEtNjcsNzAuOS0xMzAuMywxNS4zLTIwMS4xYy04MC41LTEwMS41LTI2Ni4zLTQwLjItMjY2LjMsODguMUM1OTk1LjgtMTkwLjIsNjEzOS41LTEyNyw2MjQ2LjctMjMyLjR6IE01Mz'+
			'I5LjItMjgwLjJjMzI3LjUtMTU3LjEsNTE5LjEtNTE1LjMsNDU3LjgtODUyLjRjLTcyLjgtMzk2LjUtMzk0LjYtNjcyLjQtNzg3LjMtNjcyLjRjLTM5MC44LDAtNzI0LjEsMjgzLjUtNzkxLjEsNjc2LjJjLTYxLjMsMzY1LjksMTY0LjcsNzQzLjMsNTI4LjcsODc3LjNDNDg5MC41LTE5NCw1MTgxLjctMjA3LjUsNTMyOS4yLTI4MC4yeiIvPgogICA8cGF0aCBkPSJNNDgzMS4yLTUzOC44Yy0xMjYuNC00NC4xLTIzNy41LTE0Ny41LTI5My4xLTI3Ny44Yy03Ni42LTE4MC4xLTI0LjktNDI1LjMsMTIwLjctNTYxLjNjMTcwLjUtMTU5LDQ2MS42LTE2NC43LDY2MC45LTEzLjRjMTYwLjksMTIyLjYsMjI0'+
			'LjEsMzgzLjEsMTM5LjgsNTc4LjVjLTU1LjUsMTI4LjMtMTgzLjksMjQzLjMtMzEyLjIsMjgxLjZDNTAyMi43LTQ5NC44LDQ5NTUuNy00OTQuOCw0ODMxLjItNTM4Ljh6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_visited_drone__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_visited_drone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktYXJyb3ctdXAtY2lyY2xlLWZpbGwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2Ij4KIDxwYXRoIGQ9Ik0xNiA4QTggOCAwIDEgMCAwIDhhOCA4IDAgMCAwIDE2IDB6bS03LjUgMy41YS41LjUgMCAwIDEtMSAwVjUuNzA3TDUuMzU0IDcuODU0YS41LjUgMCAxIDEtLjcwOC0uNzA4bDMtM2EuNS41IDAgMCAxIC43MDggMGwzIDNhLjUuNSAwIDAgMS0uNzA4LjcwOEw4LjUgNS43MDdWMTEuNXoiLz4KPC9zdmc+Cg==';
		me._ht_node_visited_drone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_node_visited_drone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_visited_drone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_visited_drone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_visited_drone.ggElementNodeId()) == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_visited_drone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_visited_drone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_visited_drone.style[domTransition]='';
				if (me._ht_node_visited_drone.ggCurrentLogicStateVisible == 0) {
					me._ht_node_visited_drone.style.visibility=(Number(me._ht_node_visited_drone.style.opacity)>0||!me._ht_node_visited_drone.style.opacity)?'inherit':'hidden';
					me._ht_node_visited_drone.ggVisible=true;
				}
				else {
					me._ht_node_visited_drone.style.visibility="hidden";
					me._ht_node_visited_drone.ggVisible=false;
				}
			}
		}
		me._ht_node_visited_drone.onmouseover=function (e) {
			me._ht_node_visited_drone__img.style.visibility='hidden';
			me._ht_node_visited_drone__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_node_visited_drone']=true;
		}
		me._ht_node_visited_drone.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._ht_node_visited_drone.style[domTransition]='none';
			} else {
				me._ht_node_visited_drone.style[domTransition]='all 104ms ease-out 0ms';
			}
			me._ht_node_visited_drone.ggParameter.sx=1;me._ht_node_visited_drone.ggParameter.sy=1;
			me._ht_node_visited_drone.style[domTransform]=parameterToTransform(me._ht_node_visited_drone.ggParameter);
			me._ht_node_visited_drone__img.style.visibility='inherit';
			me._ht_node_visited_drone__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_node_visited_drone']=false;
		}
		me._ht_node_visited_drone.ontouchend=function (e) {
			me.elementMouseOver['ht_node_visited_drone']=false;
		}
		me._ht_node_visited_drone.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node_drone.appendChild(me._ht_node_visited_drone);
		el=me._ht_node_image_drone=document.createElement('div');
		els=me._ht_node_image_drone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBTdmcgVmVjdG9yIEljb25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiAtLT4KPHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiB4PSIwcHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMDAgMTAwMCIgZmlsbD0id2hpdGUiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxucz'+
			'p4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxtZXRhZGF0YT4gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gPC9tZXRhZGF0YT4KIDxnPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDUxMS4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiPgogICA8cGF0aCBkPSJNMTQxMS45LDIzMTcuM2MtMjYuOC0yOC43LTMyLjYtOTItMzYuNC0zNjUuOWwtNS43LTMzMy4zbC04NC4zLTI0LjljLTIwMy4xLTU5LjQtMjY0LjQtMjA1LTIxMC43'+
			'LTQ5Ni4xYzkwLTQ4OC41LDQ1NC02NzIuNCw2ODcuNy0zNTAuNWM4Mi40LDExMywxNTMuMiwzNTAuNSwxNTMuMiw1MTUuM1YxMzk0aDc3My45aDc3Mmw0Ny45LTEwOS4ybDQ3LjktMTA5LjJsLTExMy04Mi40Yy0yOTUtMjE2LjUtNTIxLTU0Mi4xLTYzMC4yLTkwNi4xYy00Mi4xLTEzNy45LTQ0LjEtMTc0LjMtNTEuNy0xMDIxYy01LjgtOTI3LjEtNS44LTkzMi45LDgwLjQtOTMyLjljNzguNSwwLDg4LjEsMzIuNiw4OC4xLDI5MS4ydjI0NS4yaDk1LjhoOTUuOHYyMjAuM3YyMjAuM2gtOTcuN2gtOTkuNmwxMS41LDM3OS4zYzExLjUsNDE5LjUsMzIuNiw1MzYuNCwxMzcuOSw3NjQuM0MzMTgzLjgsNT'+
			'kxLjMsMzM2MCw4MDkuNywzNTY1LDk2MWw3MC45LDUxLjdsMzQuNS03Mi44YzIxLjEtNDAuMiw1Ny41LTgyLjQsODQuMy05NS44YzY5LTM0LjUsMjQyMS4zLTM0LjUsMjQ5MC4yLDBjMjYuOCwxMy40LDYzLjIsNTUuNiw4NC4zLDk1LjhsMzQuNSw3Mi44bDcwLjktNTEuN2MyMDMtMTUxLjMsMzgxLjItMzY5LjcsNDg4LjUtNjA1LjNjMTA5LjItMjM3LjUsMTI4LjMtMzQ4LjYsMTM5LjgtNzY2LjJsMTEuNS0zNzkuM2gtOTkuNkg2ODc3di0yMjAuM3YtMjIwLjNoOTUuOGg5NS44di0yNDUuMmMwLTI1OC42LDkuNi0yOTEuMiw4OC4xLTI5MS4yYzg2LjIsMCw4Ni4yLDUuNyw4MC41LDkzMi45Yy03LjYs'+
			'ODQ2LjctOS42LDg4My4xLTUxLjcsMTAyMWMtMTExLjEsMzY3LjgtMzM1LjIsNjg3LjctNjM2LDkwOS45bC0xMDkuMiw4MC40bDQ3LjksMTA5LjJsNDkuOCwxMDcuM0g3MzA4aDc3Mmw3LjctMTY2LjdjMjMtNDE1LjcsMjQzLjMtNjk5LjIsNDk0LjItNjMyLjFjODQuMywyMywxNDkuNCw3Mi44LDIxNC41LDE2OC42YzExNi44LDE3NC4zLDE4NS44LDU0Mi4xLDEyNC41LDY2Mi44Yy00NC4xLDg2LjItMTM5LjgsMTU3LjEtMjI2LDE3MC41bC03NC43LDEzLjR2MzM5LjFjMCwzMDQuNi0zLjgsMzQyLjktMzQuNSwzNjkuN2MtNDIuMSwzOC4zLTk5LjYsNDIuMS0xNDcuNSw3LjdjLTMwLjYtMjQuOS0zNC'+
			'41LTU3LjUtMzIuNi0zNjRsMS45LTMzOS4xbC0xMDkzLjgsMy44bC0xMDk1LjcsNS43bC0xNy4yLDY3Yy0zMC43LDExNi45LTIxLjEsMTE0LjktNDYxLjcsMTE0LjloLTQwNC4ybC00Niw2Ny4xYy01NS42LDgyLjQtMTgwLjEsMTQzLjctMjg5LjIsMTQzLjdjLTEwOS4yLDAtMjQxLjQtNjUuMS0yOTMuMS0xNDUuNmwtNDIuMS02NS4xaC00MDQuMmMtNDQwLjYsMC00MzEsMS45LTQ2MS43LTExNC45bC0xNy4yLTY3bC0xMDk1LjctNS43bC0xMDk1LjctMy44djM0NC44YzAsMzE5LjktMS45LDM0NC44LTM2LjQsMzY0QzE0OTguMSwyMzYxLjMsMTQ0Ni4zLDIzNTUuNiwxNDExLjksMjMxNy4zeiIvPgog'+
			'ICA8cGF0aCBkPSJNMjk3LDIxMDIuN2MtMTgyLTM4LjMtMjMzLjctODYuMi0xNzIuNC0xNTMuMmMxMDEuNS0xMTEuMSw0NTcuOC0xNjguNiw4MzcuMS0xMzZjMTM5LjgsMTMuNCwyNjIuNCwzMC43LDI3MC4xLDM4LjNjOS42LDkuNiwxMy40LDUzLjYsOS42LDk5LjZjLTUuNyw4MC40LTcuNyw4NC4zLTcyLjgsOTBjLTM2LjQsMy44LTEzNiwxOS4yLTIyMC4zLDM0LjVDNzU4LjcsMjExMC40LDQwMC40LDIxMjUuNywyOTcsMjEwMi43eiIvPgogICA8cGF0aCBkPSJNMTkyNS4yLDIxMDIuN2MtODIuNC05LjYtMTYyLjgtMjMtMTc2LjItMjYuOGMtMjYuOC0xMS41LTM2LjQtMTgzLjktOS42LTE4My45Yz'+
			'cuNywwLDExNi45LTE3LjIsMjQzLjMtMzYuNGMzMjkuNS01My42LDUwMC02NS4xLDY0NS42LTQyLjFjMzE5LjksNDYsMzI1LjYsMTY2LjcsMTUuMywyNjAuNUMyNTE3LjEsMjExMi4zLDIxNDMuNiwyMTI3LjYsMTkyNS4yLDIxMDIuN3oiLz4KICAgPHBhdGggZD0iTTc0MzIuNSwyMDkzLjFjLTE4MC4xLTQwLjItMjk2LjktMTA1LjQtMjk2LjktMTYyLjhjMC01OS40LDY1LjEtOTEuOSwyMzUuNi0xMTYuOWMxNDUuNi0yMywzMTYuMS0xMS41LDY0NS41LDQyLjFjMTI2LjQsMTkuMiwyMzcuNSwzNi40LDI0NS4yLDM2LjRjNy43LDAsMTMuNCw0MC4yLDkuNiw5MGMtNS43LDkwLTcuNiw5MS45LTgyLjQs'+
			'MTA1LjRDODAxMi45LDIxMTgsNzU1OC45LDIxMjEuOSw3NDMyLjUsMjA5My4xeiIvPgogICA8cGF0aCBkPSJNOTI4MSwyMTEwLjRjLTMwLjYtMy44LTEzNC4xLTIxLjEtMjI5LjktMzYuNGMtOTMuOS0xNS4zLTE5Ny4zLTMwLjYtMjI5LjktMzIuNmMtNTUuNi01LjctNTcuNS05LjYtNjMuMi0xMDUuNGMtMy44LTc0LjcsMS45LTEwMS41LDE5LjItMTAxLjVjMTMuNCwwLDEzNC4xLTkuNiwyNjguMi0yMS4xYzI3NS44LTI0LjksNTIxLTMuOCw2OTMuNCw1OS40YzI4My41LDEwNy4zLDE4MC4xLDIyNi0yMDguOCwyMzkuNEM5NDI0LjcsMjExNi4xLDkzMTMuNiwyMTE0LjIsOTI4MSwyMTEwLjR6Ii8+Ci'+
			'AgIDxwYXRoIGQ9Ik00NTg0LDI2My44Yy0zNC41LTE5LjItNzQuNy02MS4zLTkwLTkxLjlsLTI4LjctNTUuNmwtMzg2LjktMS45Yy0yMTQuNS0xLjktNDE3LjYtMTMuNC00NTAuMi0yM2MtODIuNC0yNi44LTE5MS42LTE1MS4zLTIxNi41LTI0My4zYy0yOC43LTEwMy40LTI4LjctMTYyNi4zLDAtMTcxMi41YzM0LjUtMTAxLjUsMTExLjEtMTg5LjYsMTk3LjMtMjI5LjljNzQuNy0zNC41LDE0OS40LTM2LjQsMTM5MC43LTM2LjRjMTI0MS4zLDAsMTMxNiwxLjksMTM5MC43LDM2LjRjOTMuOSw0Mi4xLDE2OC42LDEzNC4xLDE5Ny4zLDI0MS40YzI4LjcsMTAxLjUsMjguNywxNTk5LjUsMCwxNzAxYy0y'+
			'NC45LDkwLTEyMC43LDIwMy4xLTIwNSwyMzcuNWMtNDYsMTkuMi0xNjAuOSwyNi44LTQyMS40LDI2LjhjLTE5Ny4zLDAtMzc3LjQsMy44LTM5OC40LDkuNmMtMjMsNS44LTQ5LjgsMzAuNy02My4yLDU3LjVjLTExLjUsMjQuOS00Ny45LDYzLjItODIuNCw4NC4zYy01Ny41LDM0LjUtOTcuNywzOC4zLTQxNy42LDM4LjNDNDY4MS43LDMwMi4xLDQ2MzkuNiwyOTguMyw0NTg0LDI2My44eiBNNjI0Ni43LTIzMi40YzY1LjEtNjcsNzAuOS0xMzAuMywxNS4zLTIwMS4xYy04MC41LTEwMS41LTI2Ni4zLTQwLjItMjY2LjMsODguMUM1OTk1LjgtMTkwLjIsNjEzOS41LTEyNyw2MjQ2LjctMjMyLjR6IE01Mz'+
			'I5LjItMjgwLjJjMzI3LjUtMTU3LjEsNTE5LjEtNTE1LjMsNDU3LjgtODUyLjRjLTcyLjgtMzk2LjUtMzk0LjYtNjcyLjQtNzg3LjMtNjcyLjRjLTM5MC44LDAtNzI0LjEsMjgzLjUtNzkxLjEsNjc2LjJjLTYxLjMsMzY1LjksMTY0LjcsNzQzLjMsNTI4LjcsODc3LjNDNDg5MC41LTE5NCw1MTgxLjctMjA3LjUsNTMyOS4yLTI4MC4yeiIvPgogICA8cGF0aCBkPSJNNDgzMS4yLTUzOC44Yy0xMjYuNC00NC4xLTIzNy41LTE0Ny41LTI5My4xLTI3Ny44Yy03Ni42LTE4MC4xLTI0LjktNDI1LjMsMTIwLjctNTYxLjNjMTcwLjUtMTU5LDQ2MS42LTE2NC43LDY2MC45LTEzLjRjMTYwLjksMTIyLjYsMjI0'+
			'LjEsMzgzLjEsMTM5LjgsNTc4LjVjLTU1LjUsMTI4LjMtMTgzLjksMjQzLjMtMzEyLjIsMjgxLjZDNTAyMi43LTQ5NC44LDQ5NTUuNy00OTQuOCw0ODMxLjItNTM4Ljh6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_image_drone__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_image_drone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiBjbGFzcz0iYmkgYmktYXJyb3ctdXAtY2lyY2xlLWZpbGwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2Ij4KIDxwYXRoIGQ9Ik0xNiA4QTggOCAwIDEgMCAwIDhhOCA4IDAgMCAwIDE2IDB6bS03LjUgMy41YS41LjUgMCAwIDEtMSAwVjUuNzA3TDUuMzU0IDcuODU0YS41LjUgMCAxIDEtLjcwOC0uNzA4bDMtM2EuNS41IDAgMCAxIC43MDggMGwzIDNhLjUuNSAwIDAgMS0uNzA4LjcwOEw4LjUgNS43MDdWMTEuNXoiLz4KPC9zdmc+Cg==';
		me._ht_node_image_drone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_node_image_drone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_image_drone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image_drone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_image_drone.ggElementNodeId()) == true)) || 
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_image_drone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_image_drone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_image_drone.style[domTransition]='';
				if (me._ht_node_image_drone.ggCurrentLogicStateVisible == 0) {
					me._ht_node_image_drone.style.visibility="hidden";
					me._ht_node_image_drone.ggVisible=false;
				}
				else {
					me._ht_node_image_drone.style.visibility=(Number(me._ht_node_image_drone.style.opacity)>0||!me._ht_node_image_drone.style.opacity)?'inherit':'hidden';
					me._ht_node_image_drone.ggVisible=true;
				}
			}
		}
		me._ht_node_image_drone.onmouseover=function (e) {
			me._ht_node_image_drone__img.style.visibility='hidden';
			me._ht_node_image_drone__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_node_image_drone']=true;
		}
		me._ht_node_image_drone.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._ht_node_image_drone.style[domTransition]='none';
			} else {
				me._ht_node_image_drone.style[domTransition]='all 104ms ease-out 0ms';
			}
			me._ht_node_image_drone.ggParameter.sx=1;me._ht_node_image_drone.ggParameter.sy=1;
			me._ht_node_image_drone.style[domTransform]=parameterToTransform(me._ht_node_image_drone.ggParameter);
			me._ht_node_image_drone__img.style.visibility='inherit';
			me._ht_node_image_drone__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_node_image_drone']=false;
		}
		me._ht_node_image_drone.ontouchend=function (e) {
			me.elementMouseOver['ht_node_image_drone']=false;
		}
		me._ht_node_image_drone.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node_drone.appendChild(me._ht_node_image_drone);
		el=me._hotspot_preview=document.createElement('div');
		el.ggId="hotspot_preview";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -130px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_preview.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node_drone'] == true)) && 
				((player.getVariableValue('opt_hotspot_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview.style[domTransition]='';
				if (me._hotspot_preview.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview.style.visibility=(Number(me._hotspot_preview.style.opacity)>0||!me._hotspot_preview.style.opacity)?'inherit':'hidden';
					me._hotspot_preview.ggVisible=true;
				}
				else {
					me._hotspot_preview.style.visibility="hidden";
					me._hotspot_preview.ggVisible=false;
				}
			}
		}
		me._hotspot_preview.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._ht_preview_picture_frame_=document.createElement('div');
		el.ggId="ht_preview_picture_frame ";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_preview_picture_frame_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_preview_picture_frame_.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_preview.appendChild(me._ht_preview_picture_frame_);
		el=me._ht_preview_nodeimage=document.createElement('div');
		els=me._ht_preview_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/ht_preview_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_preview_nodeImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		me._ht_preview_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_preview_nodeimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_preview.appendChild(me._ht_preview_nodeimage);
		el=me._ht_tooltip=document.createElement('div');
		els=me._ht_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_tooltip";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 140px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._ht_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_tooltip.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_tooltip.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_tooltip.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_tooltip.style[domTransition]='';
				if (me._ht_tooltip.ggCurrentLogicStateVisible == 0) {
					me._ht_tooltip.style.visibility="hidden";
					me._ht_tooltip.ggVisible=false;
				}
				else {
					me._ht_tooltip.style.visibility=(Number(me._ht_tooltip.style.opacity)>0||!me._ht_tooltip.style.opacity)?'inherit':'hidden';
					me._ht_tooltip.ggVisible=true;
				}
			}
		}
		me._ht_tooltip.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_preview.appendChild(me._ht_tooltip);
		el=me._ht_checkmark_tick=document.createElement('div');
		els=me._ht_checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTI0MCAzMzIgMTMwIDEzMDsiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMDAwMDAwO30mI3hkOwoJLnN0MXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXogTS0xMzIuOCwzODEu'+
			'N2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNS'+
			'wxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 7px;';
		hs+='top : 7px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_checkmark_tick.ggElementNodeId()) == true)) || 
				((me._ht_checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_checkmark_tick.style[domTransition]='';
				if (me._ht_checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._ht_checkmark_tick.style.visibility=(Number(me._ht_checkmark_tick.style.opacity)>0||!me._ht_checkmark_tick.style.opacity)?'inherit':'hidden';
					me._ht_checkmark_tick.ggVisible=true;
				}
				else {
					me._ht_checkmark_tick.style.visibility="hidden";
					me._ht_checkmark_tick.ggVisible=false;
				}
			}
		}
		me._ht_checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._ht_checkmark_tick);
		me._ht_node_drone.appendChild(me._hotspot_preview);
		el=me._tt_ht_node_drone=document.createElement('div');
		els=me._tt_ht_node_drone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node_drone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node_drone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node_drone.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_node_drone.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_node_drone.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_node_drone.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node_drone.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_node_drone.style.top='-47px';
					me._tt_ht_node_drone.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_node_drone.ggDx=0;
					me._tt_ht_node_drone.style.top='24px';
					me._tt_ht_node_drone.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_node_drone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node_drone'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['ht_node_drone'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == true)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.elementMouseOver['ht_node_drone'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node_drone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node_drone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node_drone.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node_drone.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node_drone.style.visibility=(Number(me._tt_ht_node_drone.style.opacity)>0||!me._tt_ht_node_drone.style.opacity)?'inherit':'hidden';
					me._tt_ht_node_drone.ggVisible=true;
				}
				else if (me._tt_ht_node_drone.ggCurrentLogicStateVisible == 1) {
					me._tt_ht_node_drone.style.visibility=(Number(me._tt_ht_node_drone.style.opacity)>0||!me._tt_ht_node_drone.style.opacity)?'inherit':'hidden';
					me._tt_ht_node_drone.ggVisible=true;
				}
				else if (me._tt_ht_node_drone.ggCurrentLogicStateVisible == 2) {
					me._tt_ht_node_drone.style.visibility=(Number(me._tt_ht_node_drone.style.opacity)>0||!me._tt_ht_node_drone.style.opacity)?'inherit':'hidden';
					me._tt_ht_node_drone.ggVisible=true;
				}
				else {
					me._tt_ht_node_drone.style.visibility=(Number(me._tt_ht_node_drone.style.opacity)>0||!me._tt_ht_node_drone.style.opacity)?'inherit':'hidden';
					me._tt_ht_node_drone.ggVisible=true;
				}
			}
		}
		me._tt_ht_node_drone.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node_drone.appendChild(me._tt_ht_node_drone);
		el=me._ht_node_customimage_drone=document.createElement('div');
		els=me._ht_node_customimage_drone__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_node_customimage_drone.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_CustomImage_drone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_customimage_drone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage_drone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage_drone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage_drone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage_drone.style[domTransition]='';
				if (me._ht_node_customimage_drone.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage_drone.style.visibility="hidden";
					me._ht_node_customimage_drone__img.src = '';
					me._ht_node_customimage_drone.ggVisible=false;
				}
				else {
					me._ht_node_customimage_drone.style.visibility=(Number(me._ht_node_customimage_drone.style.opacity)>0||!me._ht_node_customimage_drone.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage_drone.ggSubElement.src=me._ht_node_customimage_drone.ggText;
					me._ht_node_customimage_drone.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage_drone.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_node_customimage_drone.clientWidth;
			var parentHeight = me._ht_node_customimage_drone.clientHeight;
			var img = me._ht_node_customimage_drone__img;
			var aspectRatioDiv = me._ht_node_customimage_drone.clientWidth / me._ht_node_customimage_drone.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_node_drone.appendChild(me._ht_node_customimage_drone);
		el=me._checkmark_tick0=document.createElement('div');
		els=me._checkmark_tick0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0zNzIyIC0yNjA2IDMyIDMyIiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB4bWxuczppPSJodH'+
			'RwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iIGhlaWdodD0iMzJweCIgeG1sbnM6Z3JhcGg9Imh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iIHg9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiIgeT0iMHB4IiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzJweCI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5OyYjeDk7JiN4OTtjMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5'+
			'NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40IiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9IiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O00tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyJi'+
			'N4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGE6YWRvYmUtYmxlbmRpbmct'+
			'bW9kZT0ibm9ybWFsIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBkPSImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5Oy'+
			'YjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAy'+
			'Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOC'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDgu'+
			'Nzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2UtbGluZW'+
			'NhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQw'+
			'M2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._checkmark_tick0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 26px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._checkmark_tick0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick0.ggElementNodeId()) == true)) || 
				((me._checkmark_tick0.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick0.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick0.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick0.style.visibility=(Number(me._checkmark_tick0.style.opacity)>0||!me._checkmark_tick0.style.opacity)?'inherit':'hidden';
					me._checkmark_tick0.ggVisible=true;
				}
				else {
					me._checkmark_tick0.style.visibility="hidden";
					me._checkmark_tick0.ggVisible=false;
				}
			}
		}
		me._checkmark_tick0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_drone'] == true)) && 
				((me.ggUserdata.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkmark_tick0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkmark_tick0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkmark_tick0.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick0.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._checkmark_tick0.style.opacity == 0.0) { me._checkmark_tick0.style.visibility="hidden"; } }, 505);
					me._checkmark_tick0.style.opacity=0;
				}
				else {
					me._checkmark_tick0.style.visibility=me._checkmark_tick0.ggVisible?'inherit':'hidden';
					me._checkmark_tick0.style.opacity=1;
				}
			}
		}
		me._checkmark_tick0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_drone.appendChild(me._checkmark_tick0);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['ht_node_visited_drone']) {
					if (player.transitionsDisabled) {
						me._ht_node_visited_drone.style[domTransition]='none';
					} else {
						me._ht_node_visited_drone.style[domTransition]='all 104ms ease-out 0ms';
					}
					me._ht_node_visited_drone.ggParameter.sx=1.05;me._ht_node_visited_drone.ggParameter.sy=1.05;
					me._ht_node_visited_drone.style[domTransform]=parameterToTransform(me._ht_node_visited_drone.ggParameter);
				}
				if (me.elementMouseOver['ht_node_image_drone']) {
					if (player.transitionsDisabled) {
						me._ht_node_image_drone.style[domTransition]='none';
					} else {
						me._ht_node_image_drone.style[domTransition]='all 104ms ease-out 0ms';
					}
					me._ht_node_image_drone.ggParameter.sx=1.05;me._ht_node_image_drone.ggParameter.sy=1.05;
					me._ht_node_image_drone.style[domTransform]=parameterToTransform(me._ht_node_image_drone.ggParameter);
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._ht_node_drone;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node_autorotatechanged();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_active();;
			me.callChildLogicBlocksHotspot_ht_node_changevisitednodes();;
			me.callChildLogicBlocksHotspot_ht_node_hastouch();;
			me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_website();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_hotspot_preview();;
		} else
		if (hotspot.skinid=='ht_info_pol') {
			hotspot.skinid = 'ht_info_pol';
			hsinst = new SkinHotspotClass_ht_info_pol(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_pol_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_pol_configloaded();;
			me.callChildLogicBlocksHotspot_ht_info_pol_mouseover();;
			me.callChildLogicBlocksHotspot_ht_info_pol_hastouch();;
			me.callChildLogicBlocksHotspot_ht_info_pol_activehotspotchanged();;
		} else
		if (hotspot.skinid=='ht_info_eng') {
			hotspot.skinid = 'ht_info_eng';
			hsinst = new SkinHotspotClass_ht_info_eng(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_eng_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_eng_configloaded();;
			me.callChildLogicBlocksHotspot_ht_info_eng_mouseover();;
			me.callChildLogicBlocksHotspot_ht_info_eng_hastouch();;
			me.callChildLogicBlocksHotspot_ht_info_eng_activehotspotchanged();;
		} else
		if (hotspot.skinid=='ht_info_ger') {
			hotspot.skinid = 'ht_info_ger';
			hsinst = new SkinHotspotClass_ht_info_ger(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_ger_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_ger_configloaded();;
			me.callChildLogicBlocksHotspot_ht_info_ger_mouseover();;
			me.callChildLogicBlocksHotspot_ht_info_ger_hastouch();;
			me.callChildLogicBlocksHotspot_ht_info_ger_activehotspotchanged();;
		} else
		{
			hotspot.skinid = 'ht_node_drone';
			hsinst = new SkinHotspotClass_ht_node_drone(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_drone_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_node_drone_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_drone_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node_drone_autorotatechanged();;
			me.callChildLogicBlocksHotspot_ht_node_drone_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_drone_active();;
			me.callChildLogicBlocksHotspot_ht_node_drone_changevisitednodes();;
			me.callChildLogicBlocksHotspot_ht_node_drone_hastouch();;
			me.callChildLogicBlocksHotspot_ht_node_drone_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_node_drone_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_node_drone_varchanged_vis_website();;
			me.callChildLogicBlocksHotspot_ht_node_drone_varchanged_opt_hotspot_preview();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info_pol']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_pol'].length; i++) {
				hotspotTemplates['ht_info_pol'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info_eng']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_eng'].length; i++) {
				hotspotTemplates['ht_info_eng'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info_ger']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_ger'].length; i++) {
				hotspotTemplates['ht_info_ger'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node_drone']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_drone'].length; i++) {
				hotspotTemplates['ht_node_drone'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=-208;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 339px;';
		hs+='height : 41px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					((me._map_pin.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
			player.setVariableValue('vis_map', !player.getVariableValue('vis_map'));
		}
		me._map_pin.onmouseover=function (e) {
			me.elementMouseOver['map_pin']=true;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.onmouseout=function (e) {
			me.elementMouseOver['map_pin']=false;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.ontouchend=function (e) {
			me.elementMouseOver['map_pin']=false;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAYAAAAWy4frAAATIUlEQVR4nMWba3Bcx3Xnf6e77wxmQFLiA5Yl0SQlK5JsQpJtWCJVVhKwnCwp26mkolBVydbWVqKqPKryIZ9clVQSM0pixS57vYmTKEqZ5Yo363VZeViJYlMVe4lNLJESRclLgqHEOLT4BgmAIDDPe293n3y4M8AIJEGAguSDupiZO7cf/z6nz/n36R7hOuTrO7EAjz5NAFAwz2299wNC/EiEB1DuBt1kRNYqCICARtVJkDcQXjPwkmKe377/0PcE4pXqXYrIUh5WMCPDw2bbyIgH2HP/+zeLMf9VhZ8xIu/rdxYAr5DHSFB9U3krQmIMrtNqwwei6lFRvqEx/u8dB/7tCMDe4WE3PDISuwCXFchTQ0PJrxw8mAP80wODHzaG3xL4mZXOSY6ShqgxBO'+
			'+9F9UgghgRI7MtKKhGVTSKWHXOqbHWla2RBKHmvSp8I0Y+/fGXRl+e3+ZyAJG9w8N228iI/8ehO9clSemzVuQXK9bQjEoIIc/z1AjG9q9YwapVN7ByxQoq5RIll4B0mlAl8zmtNKNWrzMzM02jXkeJIUnK0VqbVI3QCpGg+uU8zz75UwePTewdHnbbRkZCMRTXCWQXmE+BCuieLff8NKK7Vzq7thFUYww+S1NX6e+Xd990E+9as5ZV/VVKzmGMKfp+lcZijGTeM9NocuHiJGPnz9NqNrRUKntjrOu3IjUfJlF5bMeLh59RkN8D2bWAqV0ViILp2uhzWwY/3efMb3oFr5qlabtUqVTZ9J4N3DKwjkq53OmgoqrowoOHIIgIxhTNt9KUs+MTvHHyJK12k3K5L3MiJSfQ9vGJ7S+O/tb8Pi0KSG+BPVvu+eoNifn5magh'+
			'hojPU7thw0beu3491b4+YoyEWNQtsiTfgXacgTUGYwzNdpv/OH2akydP4JJyMNawyoidzuP/2fHi4V9YCMxlLWth1QqwZ+vg39zg7CMzIWbe50niEnn/nXdx89q1RJTYBbA053c5IOYACcK5yUn+7djr5D5X55J8lTWlaR/+dsf+0Z+b38eumPmVPr2zuPfc1sEv3eDsI7WoaZ7npWp1hTxw333csm4tPgRiiMjsSOhburr1hBDxwXPLurU8cN99VKsrJM/zUi1qeoOzjzy3dfBLvX3sFdv74eWhoeQnv33O73lw82+scu43a0HzPM9KK/r7uX/zIP2VCrn3GOkC6PGtl32Wea+93zPvOTqACt36EKiUy7xrzRomLl2i1W47LyZf6eyHd966bvqnnxvf9/LQUPKX587NmthszR035/c8uPkBi3kxAsF77euryP2Dg1'+
			'TLZXwIS54H1yuqirOWZppyYHSUdrul1jkxQCBu2bHvyEvdPkPHtBSkewOV3YkRVNWLEbnvrruolsvkwXdCwlszo0Wbm0AePNVymXvvuhMREVX1iRFQ2Q2wbWTEdymQAfjLoSEHsGfr5k+ucnYwjWRZlrq7b7+D1StWFOaELKkvqoU77r10iXgMgveeNStWcvd77yDLUpdGslXODu7ZuvmTvX2XXWB2QXz2oXtWO6//nhiztpmm8V3rBsyH7ryT2JmMizeJwgtZMTgz5w5A8VEJGjtxZAl1UoB65dgxLkyMx2q5bPIYJ72TH/nEdw9P7QJjfnx42AA4r7+20tm1PmpurTF3rF+PEYGoix7BGBUnQtk6fIycrTc5MT3DiekZztab+BgpW4cTIS6hXqJiRLhj/XqsNcZHzVc6u9Z5/TWAHx8eLkLrNx++o2ymyq+VrdtU'+
			'b7fCe25Zb+/ZtAkfw6JjRFSl7BxT7TYjp87yT8dPsPvYDwoVAYjw2J238fHbNzL8nltY3ddH6n0xWIvSiuKM5fAbb3Dq7Omwoq9i0+DfiKvTuz/2re+nDsBcrOyoOtnUitEbY9yt69YVJtLrHRdqRJWytXzvwgS//p3v8vz45Ox3a2zh8i+GyO7Xj7P79eN8ZGAtf/rRh/jAwFrSRXrCbn9uXbeOM2NnbRajr1q7qXmxsgN4phNY9GetMeR5zpobV7OqUiHEUGDo1nCVK8ZI2VqePzPGB7/2DM+PT3J3f4UBZymJMB0i0yFSEmHAWe7ur/D8+GTx7JkxytYWDOEa7QgQYmBVpcKaG1eT5znWGEB/FsC88OCDFYThrKDkZuDGNThjCh50rTmhSp+1fH9qmof+7psAbCyXeK3RYtwHclUiBTHKVRn3gdcaLTaWSwjw0N'+
			'99k3+fmqbPWuIi2lNVnDEM3LiGEILJooIw/MKDD1ZMLdbfb0Q2pCFQShJZ3V9d1AihigFSH/iTVw8DcFtfiRNp9qb43nvRsdQTacamvhIAX3z1MKkPnYB27TZjjKzur1JKEklDwIhs6GDgnqo1xBh9pVKRSqmEql6TQ0WNlIzhtYtTfPHIMW4rl/hBO8P0dPqKtk4RvH7QzritXOKLR47x2sUpSsYQNS7YplBopVIqUalUJMboq9Ygwj0mwvuMCCFGqn0VEmvRK7nG3p50w6kqr1yYeFNHF7PInv/MKxcmZufBZe313lPQqCTWUu2rEGLEiBDhfU7RDcXDqtVSaRb1ZY5kXuVCkWA4OjkFgNeF9HBl6ZY5OjlFHmOPFVwBTLcbWiwbqqUS3QWNohucwE2hmEhSTkpznmpR8UNJvZ99v3QpyqTed+bAYooUmisnJVRV'+
			'QmEdNzlFk+4zZna5sshKL+/T9ZdZLJBO33oDqaKJE5lXXAtyJ3L1WrvfWAwDlT5g6cvc3jIDlb6CINJdcS4AQ7v/eupR1KHiu6VDjJ34odekilEV64R7160FILkOIN0y965bixUhCwWnWlAxWiQ4QoxziEWCQ2XMCIiIplk6mxCYj3o+riLSRj44sAaAsSwjEcHrtXIoRVknwliWAfDBgTWE7mSf5WYUqr/CAlNVSbMUEdFOIua8QfS4UNhcM02JehVdzHPHAmQhsL6/ypd/bAsNhburfbNtLwRCKZ5tKHz5x7awvr9KFsKby+m81573qkoryxApKK0ox40gR6MqxlhppG1y72dd8GL4jw+RR27fyGN3bOJwo8W9/RVKC5hZSYR7+yscbrR47I5NPHL7Rnzo0cYi2ETuPY20jRhrYmEBR11UPVz3ASPi2mmqrSyTUq'+
			'XSddgLiiD4GKlayxNbPwQou79/AgfcXk6I82zMCJxMcw41Wjx2x0ae2PohqtaSdQLbtdyWdrxVO89pp6laEdvwgWjiqNM17ddlqu8HJWtum8kzrbVasrpS6WTSrzWBixHKQmBNucT//MgDPPTum/jF5w9wPL1K7lmEL3/kfn7uvRupOEtW8KXL5+RVkAhQa7XIvdcV5bKkMZ6xDXfMfexb30/3bB08UBJzmzEmTjXqZv3q1XNDsAgxImQhUjaG/37Xe/mJ9TdzaOIiR6YuMZMWE3pVucTm1Tdy77o13NpfxcdIFuLiQfSAmWo2EJFYMsZkGl7efuhQw3W+/WdFH7XGcqlRJ81zStZxbf8zV7kBgirBe26uVli/cT3bN9w66wVFBCtC0A4bEJljvIuUgm17LtXrOGu1cNTm2wAOIDGyt+6Dd8a4ZprqdKspN61chY9L'+
			'Szx0n81DIFO9LEh2773JzS5SlCKlWm+3aaZtdc4lNR8QY0YAjIJ89IXR/wD291kDQhiv1eYC47UdyWUXHWJ3ucsu7l1Pnd2F3kS9RtAY+4xB0Ve3v3BoFIqtNAsgyjMWsMYyWa/RznNEpGNeP9xLUQxC6nPGazMk1sVEBFGehSJLasYHRrQwi/BMrWNerTTVqWazZ9XW+9p9r/Pam/95Md/pFeqb307xagSmWy0a7ZYaMUk9BBD7DYDxgQEVKHamdkHcs3Xzt/ud++h0mvl3rbrB3XfresLVIv07KN21+pGxc5yemgyrSmXbjOHlh/eN3t99xkCR4AIQ+F8COFuYVz1NsXTt84dzqRZEspXnTNRrJMZFJyCRr0GxYToLZLjYbKTqzD/Ucj+RGOPy4OOFWq0zQRcym7f7KubHRL1OK0ujNZLUfGgHG/4G4NzBg2EWiI'+
			'DuHR52P/rdw1Mi8nSfMSTWhbGZaTKfFwnsHxKS7n7JuZlprLGxYg0K3/r4C0dPfH0ndlcnBTC78zM+MFBMepXdjRCwYlwtbTHZbBZrhB+CVlQVK8J0q8WlVgNnrQRVUPkSwMD48Oz0nc+cjUDcs3Xw//Zbu20mz/2aar/74C23LjV+LYsoYI0wen6MszNTYWVSsu0Qj27fP7p5wT3Ekc6kNyJPKsWO0WSzwaVWC9vVyjukjkIbUE9TxjuTPClyCrsFtDvJrwikO+mT8tq/b4ZwrGzEKTGcmZmhw/vfOYcFgHCuViPzPjpjknoeLjn4a5ib5FcE0kW6bWTEC+YvEhFKxsUL9RlqaYoV5rQyXzvLqa0OCW3nOWO1aRJrQ6XYgf3qT7w4en7v8LDbNS/Pd9k27y8fPOgBVOJf1byfcMYkeQzxXG0G0R7+xLz2539ehkl+'+
			'vl6jlWdqjElqPpCb8CRAl40sCKSrlR37jlxU4UsVI5SsC2P1GZp5NqeVtzkAZt5ztjaDM9b3W4PA33/ihaOjX9+5017pPNdlQDpaKYKMlz+fyUPDiiRtn8cztZmetfXyaeDNV2FWFxoNamlbjYhNY0Sj+QLAwPj4FRnTFYEIxL3Dw277gdFTCF+pWkPJuHC2Nk0rzzu5p7cHSTehcbo2jTEmVK01edSRHS8d+tddMHvobVFAAIZHRiKAWvPHNR+CMZKkPtdzjXpxXOJt0Ep3bky0mkynLZwx4lVB9DMwxwmXBKSrlYefP/Q68JV+a3DG+dMz0zTzgrYst1YE8DFyauYSRoyvGGPTGF/ase/IHu091LAUIDDnHaLq52o+RGskaflcz9Zr2CL5tayT3Iow2WwyVWijA5DPA3QXgAsM/MIyd0Zl8Csrrf1vNR9yKya5/6'+
			'abi41MfXN2cynSLdNb9tXxMS5laVjhrG2F+P937B/9wGLqWlAj0OOzTfxMzQc1hQfTs406QkFbuia21L/ZMh2Xe6HV5GLaIjFGO2cmnugO5rX6uahBnNXKlsHdKxP7SzUfciOS3D9wM2U3p5W3Kq9MnKeWpb7fWdcK8cCO/aMP9PRTFyp7TY3AnFbUmc/WfAhGJEmD1zONWk9uSudee9/3zgXm3WOOHF5oNbiUtjqn6AAtPFVHGwuC6CJdlHTP4O7ZOvjkSmd/teZDLpB8eODdVK0r1vbXeZZLVXll8gK1POvOjZd27B/dolc48nc1WZRGAFbffrCIK7jP1HxoW5EkiyGertfmRuN6PBVwvtXkUtbueCoQ4ffh2p7quoA8+jThqaGh5OH933tD0Cer1pAYG862GtTybC5JsYS4YYAsBk42ZnCduNHy8V+27xt9dtcC'+
			'UfwtAYG5NYAPfHbGh5oTSXwMerLRq5XFXV1tjDWbxUAYI0EVY8zjsHAUf8tAdkF8amgo+fiBI2Oi+oWKNZSM9YVpLD51pJ3MSDt4TjVrOLG+aoxNY/jWf9l36Dtf34ldijaWDATmtGJ963/UfDjvjEmCajzZqMFi3XBHG2eaTZo+VyfYNEai2sfhzUmFxcqSgeyC+PLQUPKTB49PK/qZPiOUjA0X0haTaRtDseOrC1xGhIbPOd2qkxjrq85Krvq1j714aH/vydG3FQjAUGcVWavxZzN5OF4ykggSTjRrhKjI/MX3PLMShVPNBmkomELdhxjgcbjy6u9tA9JdRT565EhmRB93IjgxejFLmUi7GZfu03P9UgWLUPMZZ9tNEmN8vzUg8uQn9o8e3Ts87K7n1zzXDQSg8wMV2b7/yF81Qnilz4ozRsKJVmPugMz8id5xWS'+
			'ebDXyM6kSSmg91nP9DgP/XWQO9o0AA9nb3VoRPATgxTOcZ59utnoxLIarFIYFLWcb5tEXJmOKsFXxux78ePffy0FCyawk/RVpWINtGRvwuMNv3jT7bCvHbVWOsM8afbDVIQ+gcei60IRSn30606iiExEgy4/3ZUp9+HuDZeXmqdxQIzAUuNfK7aYxYMI3gOdsuNoq6nsoijGcpE3lKSUwsGQPI728bOVJ/6i1qA5aHfffQ/Hu+uiIxP1/3ITeQDK1aQ58xs87r1doUtRhCvzG2FePhh/eP3rsc7cMyaATmXKYYHq93aX6MerrdRBSswFja4lLIcVIcJxeV34HFLZoWI8sCpEsot+87/Brok/3WkBjjz2YtGsGTx8gbaZNEjK8aY1shfGfHi4ef2bVEYriQLAsQmKMu5cAfzhFKjafTFqfSFu0Y1DBLRX4b4P07dy7b'+
			'9uSyAdnVIZTbDhwZAz5fEEoTxvKUU2mLkhjf76wE1b/uUpFHn376LXmqXlk2IDCXADdN87m6D2ecSCLFYWwFkroPWR7kU3D9VORqsqxABPTloaFk+6FDDVV9onOSIgr4lc4C+oVPHDh8/KmhoeR6qcjVZFmBwByhnNlw5C9mvD+WiDgRkhkfLpT7kj+CyzdplkOWHcgsoXyaICp/YI3QZwwon9428r1LyxH83mkRgD1bBl/bs3Xw1Pz7yy3LrpGuzBFKfQKV3+3cW1SO6nrkPwHZ1w2h+2jlNgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 1.1;
					me._map_pin_active.ggParameter.sy = 1.1;
					me._map_pin_active.style[domTransform]=parameterToTransform(me._map_pin_active.ggParameter);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style[domTransform]=parameterToTransform(me._map_pin_active.ggParameter);
				}
			}
		}
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active.style.opacity == 0.0) { me._map_pin_active.style.visibility="hidden"; } }, 505);
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active']=true;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAYAAAAWy4frAAAP30lEQVR4nN2bfYzlV1nHP+f8Xu/bzOy87U53ZrdtcFugFiwhrRKhDcY/uhL5x0b5xxDDHyZq1Eg0DUEgQqRGXpoK0WBM1ShgAikRTa0KVAi02KYYaLsF2i47szs7L3dm7vvv5ZzHP87vzu7s7tw7L3dq4rM5yeTe3z3n+Z7vc56381v1S7/5e/x/EH/UE16auGfeC0sntR/OCzKPyAJoDyWvKtSizdNFk3aXSpWtSxNLL5hRrTsSICuz992tPP9XgAcCpRbcp4ICUAoQ+p9pP0D7AbmM1VfnTn7ZWPP52F/+2mFBqYOa1qWJe+b9Uu13gQcULOycVRF4Hn4QEAZur9IsJ88yMmNAhGuer4vYL0uePzS7+vWXXhMgy9U3VSiN/6H2gj/QSpf6n5dKJW'+
			'qVMrValcDXA+fIjdBqd2i3OzRbre3PrdiuUvozSbv+sfnGM/UjA3Jp/J73+uXahxG7ABAGIccmxqnVqvje9cqLCLb4WwNKqeueMSK0Wh3W1+ukWdr/3ary/I8G6sIjezW5PZ2R82NviMqVm/7Ct/Y3sAalPWanp5gYr+1QOjNCkluMFXIrmGtMyCuARL4m8jSBr9DAWLXMWLXM5laTlbV1EDODyT+VyOwvLlfDB060vtcepuNQRhbH3jIZxtUvKeW9A2BsbJzZmSk87ZQyVuhm1gG41vb3IJGnqUbejvnW1utsbm4CYK35H5slZ+c2v7M4aJ6Bxrwyc++ZMB77Lqh3iFiOz85y/Pg0SiusQCsxrLUz2qkht4II+x693LLWztjq5hgrKK2YmZlibm4OAKXUnV5UfnZl9r67DwTk0sQ982j9TZBblfY4tXCKscKU0lRY'+
			'a6e0UoPASEY3t6x3MjqJOxLVapmF+Xm0F4DYGbT+2sXqXXfsC8hy9U0VHURfReyM9gJuOX2KOI5AoNnN2Uwy7P6taKhYgVZqaHQMCMRxxM2n5omCEKwp+eXxxxbH3jK5ZyCE1b/XYu/0EeZvmsP3fYwV6u2MTmoRy5GObmaotzOMFXzf58TcTSilUTa/NYyrX9o8+XpvKJDlmbd/RCn1bivC9PE5oih0IDoZqbHIa/QvNZZ6x4EJQ5+5uTmsCGLMO9J0+s8GAlmZufeMsvZBgMnpWSrVKlag0cvJzf4Ps6eVc7W+xtNq37/PjbDVzbHiAu7k9CwAYuV3VmbuPXO17jviiDXZx5VSXhxFTE46U+ykhm5m2YtoBZXQudJAa/S1fAtkuZCJpZPuzV33covq5YzFPpOTk3RaLXq9jidKPgmcvY6Rldn77kZ4t1jh2NSMWz'+
			'QTmj2zJ7cTac1UOaQceESeRhe5Ypam9Hrpdt4Y+Ipy4DFZDoh9vae5u6mLUwhMzcwgVpAsv3/5+H2/0Nd/mxHJep8CKJVrlMrOpJqJuS6/u1aUgmrkUwrcnmRZytbGBr0kIU26GJO757RHHEXEcZnK2BhRVKIW+YTa0kjyoes0e4agrImiEqXqGN3WJsraPwfetM3Iyux9dwvcAzA9ewKAJLP0jMXCrkMpmCwF2yCaW1ucf/VlNjbW6HaaO0CINXS7HTY21lg8/zL1+joiEAWa6UqI76mBa6VGtk18enrGbX6e3tkPlD6AFXNWRCiXKwRBiAg0knzwFuGY0FphTc7ypYt02g0ATk/XOPvmBd6wMM0dC1MEnuaFpTrPL23wn99f5Lnza9RXL9FtbDFz0zxBEFILfda72cD1WklO7IcEQUipVKbTaWOSzq8CT3ln3vqz'+
			'NLyZzyqlpmvHpimVyiTG0E0HH/DY96hGzp0vL52n026CUrznbWf4+Ht+jre+7gTzU1VC38P3NCcmKvz0qSne9ZZbqJUCvvvKOmnao91qMj4+ged5gJDlu68r4s6YrzVWhE6rgVhzrJZefERfrN51h9LebQDVag1rhV5uEVG7DoBKrLFW2Nqq02m3UFrzyHvfzu+ffTNRcF282hal4D1vO8Pnf+ud1OKAPEtZX13FWqHse2i1+7oiil5u3bPlqptPe7ddrN51h0bkLCJEUYznBQB0E8HK7qMceGhRGJOxvnIJRPj1nz/DPT91YiCLV8vNs2O8/10/AyJsbaySJi5Tr4X+wLW7ifMKnhcQRXE/6JzVyg9PAHhRGYDcuh8MkqAIEJvrq4gx3DxT433v3DWf21Xuv+sW7r3dga+vrADge9cXX1eLFSEtEr0odjoL3KKV59'+
			'8sYomL2tra4RG3v1jS6yBiefdbbx1oToPk197+ekQs3Z5jRCsK89p9/X7Z6fs+IhZgQdu05xoHngOS2cGH3NMKrVymmvS6ANxxavpAIABuu8llEGINed5zCg7Zk20dC52V0sc1yEmsJfB8rEC/ybF7/uRA5GkbKeLE60/eMLPek1TjgPnJClhLt9vFijPdQToY43QIPN+ZEHJSi7UVB8u5NCMgIrsOjXsuz1wBVAnUgc2qLxPlCACbZVgRtBqsgxF3VlDurIq1Fa08/6KIkOWug+GpwalPn9aoVEJEaPVyXl1pHBiECJy7tIWIEBQOp5fbgTpozx32LE8REZTnX9RizY8VgkkdkGEHrR+wRPmEYYhCeH5x/cBAzq82yNIEhRDFjplsSMngiWPCpCkKQaz5sQYuWCtkeYa1MKS35s5HLlgLQVTBWuGpc0sHBvLNF5ew'+
			'VgjCCCM+1rpUf5BoRfFchnWu+IJW8AoIaeI8kC7aMoN2JDVuodLYOCD88zMv88zLl/cNYqne4q/+7TlAKI85h7GXAq7v/p3OgoJXdN7rfBsgaW1hcueFAn+webVSd9BLlWOUx45hreWP/+FJkmzvfWgR+NDn/4tmJyGKS1QnXGBsJ3bg2oFfbLQVktYWAKbXfU6PndDfUlo3wQU4gMgb7IWyXGgXSeWx2dNoz2ep3uZ9n/nXPR38eqvH+x/9Ov/9I8fi1NzNKK1Ic6EzZDPiIsh0O83+lnRsRX/du/O218mmTNytlLpda01cGQcUnXTwhGkuRL7G15qwFNNpbLCy2eKfvv0Sge9xemaMUrizI9vqZTzx3Cv89uf+gxcvrALCsePzxJVjiMBaO0OGpEfjsY8CWvVl0l4LkCdOdZ7/Wx8gqEw8lnebv9xpbTJx/DS+dh'+
			'SmAw6diLDVy5gqB0SlCY7f/EY2l1+m12nx8Fee4uGvPMX89Bi3z89QiXx+cH6FH1/e3FbUCyIm524lLtcQYDNxncZBEvouqxCg03Jzic2/Cv1SV/EEgMkSep0mYalGyfNIssHFVZIJ9W7OROzjBTFTC2+gWV+iub6MWMPiWoPFtZ2mppSiOjHL+Mw8ojysuHPRSYY3OMqhyz7SbhOTJQAE1WNfYbMAMrf5ncXF6I3/Itbe39y8zFSpRhho6DG0lu4mll6aMhH7xKGmNnmS2uRJTNYj6XXIu02sGOJSlSCqbmfZgvNQG13XahomSkFUeKutjWUQi4g81m9uX2k+5OZhtLq/t7WGmTmN5weUIk2nN3ynRGCjm1MzPuXYdVC8IKYcxFC7Pg+zAp2epZkOL6f7UoucqibPSBsuACvhs/3vt4HUTqh/byyb88DpTmOFyrGT'+
			'lLRHW/bW0wJX5zcS0Bpiz8PXirBwl5kVslxIrSE/wG1h5LsbgHb9ImINoM6dMuce73+/Hccnll4wUiBsrju36PvKxRT21H7aHsZCOzNsJTmr7YzVdsZmN6edGbK9tcl2jChUrslhhdamK8BQPHw10B0JiS/qb4DEZl16rfp2WTsoE30tRsX3XJnbvIzNUwQaYRw/uiuQk3JuBcUXAZr1SyCOUq2GpMRHOHxPuZREoF2/XJDB3117HXddiqhEHgHI2ptkRf5VDrz/KxxU+yV42iLvtQCsUvpT1+p9HZAF88OngWcBOlsXHZBQo3De5rUcnlbEoXMWm+suwxZ4YiF/8UdDgQCI4pMA3Y3L26xUo5G/7TFUxqIirU+6V1wu6mM3evaGQMaPe/8I6gewkxWv/zbGazAC74rrbqy96hQT9Y1T5tyTewbiLunlg+BYMVnBSu'+
			'gPrRVGNfpnI+m2yVobFHR88Eb67goE4JR56UsUZ6VZX8SKEIcKT8NRX7uFgSIMXIOhXX/FkQGP78bGQCBuA/SDAGljlayoVWrR0bNSLroySbtJ3nFJp1X80SBdBwJZMC8+DnwLoLP5EwDHirf/aL/XEfqKOHBno7v1k2JH9WO35C89d2AgxSwPAmStjW1WxiP/yA553ztexYb14/IHhmk5FMgpc+5JgccBOhvnMQJB4KLtqONGWOR2RqBTnA3gCze1nv3+oYG4h5wHy9qb5EWtPB6PPq7UijmT5gbGXTNYpfSunmqnjnuQBfPDp1H6MXB2K9blQIGnRpYYxoHC1wqxkGxdcAuLevRGUfzAQAAKO7V5p0Hadn59fITRvl84pe1tNhKlbxzFbyR7BlLY6Rfgyo4FgSL0B3fO9zKiQG833Xob5/tLfm6vbOwLCEBhr9Yk'+
			'bdL2BtYW+dAhD/lY6HKq7tYK1mURSVCb/NP96LYvIAv5iz9C1KNwZed8T1EK9zXNDimFGs9TWISsWfSQRT0y7I25a2XfGgRjxz5IUUXm3Q1EHCsHMSlw50wEsuYqNush0PCEh/ar176BFDv1OXCsCIKnFeVo/6yUQo3WCkFIiyiu4NMn5dzKfuc6kE14Vn2EgpWstYogVIPB18rXDiiYREgay4jJEGjoSu266u/IgJyUcyuIciVx4wJi3d2ia1Tszaxi31WdYiEvzoaCT+/3xeVDAQHQ1erHBBo2T0lbywhQjTxu8I7ydaIUjMU+Au63JgNYCUuljx9Yn4P+cL7xTF3Bp+HKjvqe2hMr5cBDa7AmJ2+4mCTCJ/byovLIgQAUO7giJiNrLQPDWemzAZA1LxddQ1aicumRw+hyKCAnWt9ri/AJgLxxAWtytFJUwt1ZqY'+
			'SuaLImx3ZcPwClPnwYNg4NBKDYyRWxhqzpGmj915+ujeBXf5c1L/XZOC9l768Pq8ehgZxofa+NUh8G3A5LwUp0/fVdLfaKrmWO7ThTRKmHTjeeTw6rx6GBABQ7et6xcgkrQi0qXtDsL6SgErq3JpLNC9tsjB3XfzkKHUYC5HTj+QSlHgKwnWVMnqGuYaUSeSilMHmGdJ0JiuIDo/p/ViMBAuB2Vp0Ta7CtpR0HG9h2ALbVf7lAnXONwNHIyIBMLL1gRMmfAEj3MtYFOWqxRy3ue6orbIA8OMr/9TYyILCz1drf+UroXXG522zwbNEAHJmMFMjVrVbpXkby3nabR/LeVWzw0VGuCyMGAjtbrbZ95WWbq/4eORtwBEDgSquV3ho262CzDvTWdn43YjkSIFe3WqW9iLSLqlXUN4rvRi5HAsSJa7WSbrgBA68FDitHBuTq'+
			'Visw9FrgsHKEjFxptV7791HIkV4MLpgfPv0T//bHABbyF58+yrWO/IbTYD901GsA/C9GVYNNoq0j2AAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.1;
					me._map_pin_normal.ggParameter.sy = 1.1;
					me._map_pin_normal.style[domTransform]=parameterToTransform(me._map_pin_normal.ggParameter);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style[domTransform]=parameterToTransform(me._map_pin_normal.ggParameter);
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
				else {
					me._map_pin_normal.style.visibility=me._map_pin_normal.ggVisible?'inherit':'hidden';
					me._map_pin_normal.style.opacity=1;
				}
			}
		}
		me._map_pin_normal.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin.appendChild(me._map_pin_normal);
		el=me._map_pin_tt=document.createElement('div');
		els=me._map_pin_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_pin_tt";
		el.ggDx=0;
		el.ggDy=44;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text map_pin";
		el.ggType='text';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 4px 2px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._map_pin_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_tt.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._map_pin_tt.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._map_pin_tt.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = -38;
					me._map_pin_tt.ggUpdatePosition(true);
				}
				else {
					me._map_pin_tt.ggDx=0;
					me._map_pin_tt.ggDy=44;
					me._map_pin_tt.ggUpdatePosition(true);
				}
			}
		}
		me._map_pin_tt.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['map_pin'] == true)) && 
				((me.ggUserdata.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_tt.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_tt.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_tt.style.visibility=me._map_pin_tt.ggVisible?'inherit':'hidden';
					me._map_pin_tt.style.opacity=1;
				}
				else {
					me._map_pin_tt.style.visibility=me._map_pin_tt.ggVisible?'inherit':'hidden';
					me._map_pin_tt.style.opacity=1;
				}
			}
		}
		me._map_pin_tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._map_pin.appendChild(me._map_pin_tt);
		el=me._maptesttext=document.createElement('div');
		els=me._maptesttext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map-test-text";
		el.ggDx=0;
		el.ggDy=86;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text map_pin-test";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 158px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._maptesttext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._maptesttext.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._map_pin.appendChild(me._maptesttext);
	};
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 96px; height: 62px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage=document.createElement('div');
		els=me._thumbnail_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/ht_preview_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_nodeimage);
		el=me._thumbnail_active=document.createElement('div');
		el.ggId="thumbnail_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #d1d1d1;';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style[domTransition]='border-color 0s';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		me._thumbnail_active.onclick=function (e) {
			if (
				(
					((me._thumbnail_active.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
			player.setVariableValue('vis_thumbnail_menu_3', false);
		}
		me._thumbnail_active.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
			me._thumbnail_title.logicBlock_alpha();
			me._checkmark_tick.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._checkmark_tick.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._checkmark_tick.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title=document.createElement('div');
		els=me._thumbnail_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 85px;';
		hs+='height: 51px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._thumbnail_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active'] == true)) && 
				((me.ggUserdata.title != "")) && 
				((player.getVariableValue('opt_thumbnail_menu_tooltip_3') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title.style[domTransition]='opacity 500ms ease 0ms';
				if (me._thumbnail_title.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title.style.visibility=me._thumbnail_title.ggVisible?'inherit':'hidden';
					me._thumbnail_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_title.style.opacity == 0.0) { me._thumbnail_title.style.visibility="hidden"; } }, 505);
					me._thumbnail_title.style.opacity=0;
				}
			}
		}
		me._thumbnail_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._thumbnail_active.appendChild(me._thumbnail_title);
		el=me._checkmark_tick=document.createElement('div');
		els=me._checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0zNzIyIC0yNjA2IDMyIDMyIiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB4bWxuczppPSJodH'+
			'RwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iIGhlaWdodD0iMzJweCIgeG1sbnM6Z3JhcGg9Imh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iIHg9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiIgeT0iMHB4IiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzJweCI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5OyYjeDk7JiN4OTtjMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5'+
			'NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40IiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9IiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O00tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyJi'+
			'N4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGE6YWRvYmUtYmxlbmRpbmct'+
			'bW9kZT0ibm9ybWFsIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBkPSImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5Oy'+
			'YjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAy'+
			'Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOC'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDgu'+
			'Nzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2UtbGluZW'+
			'NhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQw'+
			'M2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : -1px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true)) || 
				((me._checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick.style.visibility=(Number(me._checkmark_tick.style.opacity)>0||!me._checkmark_tick.style.opacity)?'inherit':'hidden';
					me._checkmark_tick.ggVisible=true;
				}
				else {
					me._checkmark_tick.style.visibility="hidden";
					me._checkmark_tick.ggVisible=false;
				}
			}
		}
		me._checkmark_tick.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active'] == true)) && 
				((me.ggUserdata.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkmark_tick.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkmark_tick.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._checkmark_tick.style.opacity == 0.0) { me._checkmark_tick.style.visibility="hidden"; } }, 505);
					me._checkmark_tick.style.opacity=0;
				}
				else {
					me._checkmark_tick.style.visibility=me._checkmark_tick.ggVisible?'inherit':'hidden';
					me._checkmark_tick.style.opacity=1;
				}
			}
		}
		me._checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active.appendChild(me._checkmark_tick);
		me.__div.appendChild(me._thumbnail_active);
	};
	function SkinCloner_node_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 180px; height: 125px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._node_image_cloner=document.createElement('div');
		els=me._node_image_cloner__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/ht_preview_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_Image_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_image_cloner.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_image_cloner.onclick=function (e) {
			if (
				(
					((me._node_image_cloner.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
			player.setVariableValue('vis_thumbnail_menu_2', !player.getVariableValue('vis_thumbnail_menu_2'));
		}
		me._node_image_cloner.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_title0=document.createElement('div');
		els=me._node_title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 1px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 136px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 136px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(23,23,23,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 1px 2px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._node_title0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_title0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title0.style[domTransition]='';
				if (me._node_title0.ggCurrentLogicStateVisible == 0) {
					me._node_title0.style.visibility="hidden";
					me._node_title0.ggVisible=false;
				}
				else {
					me._node_title0.style.visibility=(Number(me._node_title0.style.opacity)>0||!me._node_title0.style.opacity)?'inherit':'hidden';
					me._node_title0.ggVisible=true;
				}
			}
		}
		me._node_title0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._node_image_cloner.appendChild(me._node_title0);
		el=me._node_visited0=document.createElement('div');
		el.ggId="node_visited";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 87px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_visited0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_visited0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_image_cloner.appendChild(me._node_visited0);
		me.__div.appendChild(me._node_image_cloner);
		el=me._node_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="node_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 125px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_container.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_thumbnail_menu_2', !player.getVariableValue('vis_thumbnail_menu_2'));
		}
		me._node_container.onmouseover=function (e) {
			me.elementMouseOver['node_container']=true;
			me._node_bg_hover.logicBlock_visible();
		}
		me._node_container.onmouseout=function (e) {
			me.elementMouseOver['node_container']=false;
			me._node_bg_hover.logicBlock_visible();
		}
		me._node_container.ontouchend=function (e) {
			me.elementMouseOver['node_container']=false;
			me._node_bg_hover.logicBlock_visible();
		}
		me._node_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_bg_hover=document.createElement('div');
		el.ggId="node_bg_hover";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : rgba(230,230,230,0.0980392);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 112px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_bg_hover.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_bg_hover.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._node_bg_hover.ggCurrentLogicStateSize != newLogicStateSize) {
				me._node_bg_hover.ggCurrentLogicStateSize = newLogicStateSize;
				me._node_bg_hover.style[domTransition]='width 0s, height 0s';
				if (me._node_bg_hover.ggCurrentLogicStateSize == 0) {
					me._node_bg_hover.style.width='100%';
					me._node_bg_hover.style.height='75px';
					skin.updateSize(me._node_bg_hover);
				}
				else {
					me._node_bg_hover.style.width='100%';
					me._node_bg_hover.style.height='112px';
					skin.updateSize(me._node_bg_hover);
				}
			}
		}
		me._node_bg_hover.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['node_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_bg_hover.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_bg_hover.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_bg_hover.style[domTransition]='width 0s, height 0s';
				if (me._node_bg_hover.ggCurrentLogicStateVisible == 0) {
					me._node_bg_hover.style.visibility=(Number(me._node_bg_hover.style.opacity)>0||!me._node_bg_hover.style.opacity)?'inherit':'hidden';
					me._node_bg_hover.ggVisible=true;
				}
				else {
					me._node_bg_hover.style.visibility="hidden";
					me._node_bg_hover.ggVisible=false;
				}
			}
		}
		me._node_bg_hover.ggUpdatePosition=function (useTransition) {
		}
		me._node_container.appendChild(me._node_bg_hover);
		el=me._node_title_active=document.createElement('div');
		els=me._node_title_active__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text poppins";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 112px;';
		hs+='left : 172px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100%  -  165px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 112px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(23,23,23,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 5px 6px 5px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._node_title_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_title_active.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._node_title_active.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._node_title_active.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._node_title_active.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
				if (me._node_title_active.ggCurrentLogicStatePosition == 0) {
					me._node_title_active.style.left='115px';
					me._node_title_active.style.top='0px';
				}
				else {
					me._node_title_active.style.left='172px';
					me._node_title_active.style.top='0px';
				}
			}
		}
		me._node_title_active.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._node_title_active.ggCurrentLogicStateSize != newLogicStateSize) {
				me._node_title_active.ggCurrentLogicStateSize = newLogicStateSize;
				me._node_title_active.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
				me._node_title_active__text.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
				if (me._node_title_active.ggCurrentLogicStateSize == 0) {
					me._node_title_active.style.width='calc(100%  -  115px)';
					me._node_title_active__text.style.width='100%';
					me._node_title_active__text.style.height='75px';
					skin.updateSize(me._node_title_active);
				}
				else {
					me._node_title_active.style.width='calc(100%  -  165px)';
					me._node_title_active__text.style.width='100%';
					me._node_title_active__text.style.height='112px';
					skin.updateSize(me._node_title_active);
				}
			}
		}
		me._node_title_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._node_title_active.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title_active.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
				if (me._node_title_active.ggCurrentLogicStateVisible == 0) {
					me._node_title_active.style.visibility=(Number(me._node_title_active.style.opacity)>0||!me._node_title_active.style.opacity)?'inherit':'hidden';
					me._node_title_active.ggVisible=true;
				}
				else {
					me._node_title_active.style.visibility="hidden";
					me._node_title_active.ggVisible=false;
				}
			}
		}
		me._node_title_active.ggUpdatePosition=function (useTransition) {
		}
		me._node_container.appendChild(me._node_title_active);
		el=me._node_title=document.createElement('div');
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text poppins";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 112px;';
		hs+='left : 172px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 165px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 165px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(23,23,23,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 5px 6px 5px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._node_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._node_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._node_title.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
				if (me._node_title.ggCurrentLogicStatePosition == 0) {
					me._node_title.style.left='115px';
					me._node_title.style.top='0px';
				}
				else {
					me._node_title.style.left='172px';
					me._node_title.style.top='0px';
				}
			}
		}
		me._node_title.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._node_title.ggCurrentLogicStateSize != newLogicStateSize) {
				me._node_title.ggCurrentLogicStateSize = newLogicStateSize;
				me._node_title__text.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
				if (me._node_title.ggCurrentLogicStateSize == 0) {
					me._node_title__text.style.width='0px';
					me._node_title__text.style.height='75px';
					skin.updateSize(me._node_title);
				}
				else {
					me._node_title__text.style.width='165px';
					me._node_title__text.style.height='112px';
					skin.updateSize(me._node_title);
				}
			}
		}
		me._node_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._node_title.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
				if (me._node_title.ggCurrentLogicStateVisible == 0) {
					me._node_title.style.visibility="hidden";
					me._node_title.ggVisible=false;
				}
				else {
					me._node_title.style.visibility=(Number(me._node_title.style.opacity)>0||!me._node_title.style.opacity)?'inherit':'hidden';
					me._node_title.ggVisible=true;
				}
			}
		}
		me._node_title.ggUpdatePosition=function (useTransition) {
		}
		me._node_container.appendChild(me._node_title);
		el=me._node_thumbnail=document.createElement('div');
		els=me._node_thumbnail__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/node_thumbnail_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 112px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 172px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		me._node_thumbnail.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_thumbnail.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._node_thumbnail.ggCurrentLogicStateSize != newLogicStateSize) {
				me._node_thumbnail.ggCurrentLogicStateSize = newLogicStateSize;
				me._node_thumbnail.style[domTransition]='width 0s, height 0s';
				if (me._node_thumbnail.ggCurrentLogicStateSize == 0) {
					me._node_thumbnail.style.width='115px';
					me._node_thumbnail.style.height='75px';
					skin.updateSize(me._node_thumbnail);
				}
				else {
					me._node_thumbnail.style.width='172px';
					me._node_thumbnail.style.height='112px';
					skin.updateSize(me._node_thumbnail);
				}
			}
		}
		me._node_thumbnail.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_visited=document.createElement('div');
		els=me._node_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0QyRDJEMjt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO30mI3hkOwoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodCI+CiAgPGNpcmNsZSBjeT0iMzIiIGN4PSIzMiIgY2xhc3M9InN0MCIgcj0iMzEiLz4KIDwvZz4KIDxnIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiBjbGFzcz0ic3QxIiB3aWR0aD0iNjQiLz4K'+
			'IDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIGNsYXNzPSJzdDIiIHBvaW50cz0iMTguNiwyNi43IDMwLjksNDggNDkuNCwxNiAmI3g5OyIvPgogPC9nPgo8L3N2Zz4K';
		me._node_visited__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -7px;';
		hs+='height : 18px;';
		hs+='position : absolute;';
		hs+='right : -7px;';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._node_visited.ggElementNodeId()) == true)) || 
				((me._node_visited.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_visited.style[domTransition]='';
				if (me._node_visited.ggCurrentLogicStateVisible == 0) {
					me._node_visited.style.visibility=(Number(me._node_visited.style.opacity)>0||!me._node_visited.style.opacity)?'inherit':'hidden';
					me._node_visited.ggVisible=true;
				}
				else {
					me._node_visited.style.visibility="hidden";
					me._node_visited.ggVisible=false;
				}
			}
		}
		me._node_visited.ggUpdatePosition=function (useTransition) {
		}
		me._node_thumbnail.appendChild(me._node_visited);
		me._node_container.appendChild(me._node_thumbnail);
		me.__div.appendChild(me._node_container);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: "Poppins", sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._information.logicBlock_size();
	me._menu_background.logicBlock_size();
	me._rectangle_1.logicBlock_size();
	me._button_zoom.logicBlock_alpha();
	me._box_vr.logicBlock_visible();
	me._box_view.logicBlock_visible();
	me._button_image_normalscreen.logicBlock_visible();
	me._tt_fullscreen.logicBlock_text();
	me._screendarker.logicBlock_visible();
	me._map_container.logicBlock_visible();
	me._map.logicBlock_visible();
	me._menu.logicBlock_visible();
	me._tt_home.logicBlock_text();
	me._tt_map_open.logicBlock_text();
	me._button_close_map.logicBlock_visible();
	me._tt_map_close.logicBlock_text();
	me._info.logicBlock_visible();
	me._screentint_info.logicBlock_visible();
	me._information.logicBlock_visible();
	me._menu_background.logicBlock_visible();
	me._menu_background.logicBlock_alpha();
	me._menu_icon.logicBlock_position();
	me._menu_open0.logicBlock_position();
	me._menu_icon_vis.logicBlock_visible();
	me._menu_open.logicBlock_position();
	me._additional_menu.logicBlock_visible();
	me._button_zoom.logicBlock_visible();
	me._fav_menu.logicBlock_alpha();
	me._tt_fullscreen.logicBlock_position();
	me._tt_home.logicBlock_position();
	me._tt_map_open.logicBlock_position();
	me._tt_map_close.logicBlock_position();
	me._tt_zoomout.logicBlock_position();
	me._tt_zoomin.logicBlock_position();
	me._enter_vr.logicBlock_visible();
	me._fav_menu.logicBlock_position();
	me._exit_vr.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._information.logicBlock_size();me._menu_background.logicBlock_size();me._rectangle_1.logicBlock_size();me._button_zoom.logicBlock_alpha();me._box_vr.logicBlock_visible();me._box_view.logicBlock_visible(); });
	player.addListener('fullscreenenter', function(args) { me._button_image_normalscreen.logicBlock_visible();me._tt_fullscreen.logicBlock_text(); });
	player.addListener('fullscreenexit', function(args) { me._button_image_normalscreen.logicBlock_visible();me._tt_fullscreen.logicBlock_text(); });
	player.addListener('changenode', function(args) { me._screendarker.logicBlock_visible();me._map_container.logicBlock_visible();me._map.logicBlock_visible();me._menu.logicBlock_visible();me._tt_home.logicBlock_text();me._tt_map_open.logicBlock_text();me._button_close_map.logicBlock_visible();me._tt_map_close.logicBlock_text();me._info.logicBlock_visible();me._screentint_info.logicBlock_visible();me._information.logicBlock_visible();me._menu_background.logicBlock_visible();me._menu_background.logicBlock_alpha();me._menu_icon.logicBlock_position();me._menu_open0.logicBlock_position();me._menu_icon_vis.logicBlock_visible();me._menu_open.logicBlock_position();me._additional_menu.logicBlock_visible();me._button_zoom.logicBlock_visible();me._fav_menu.logicBlock_alpha(); });
	player.addListener('configloaded', function(args) { me._tt_fullscreen.logicBlock_position();me._tt_home.logicBlock_position();me._tt_map_open.logicBlock_position();me._tt_map_close.logicBlock_position();me._tt_zoomout.logicBlock_position();me._tt_zoomin.logicBlock_position();me._enter_vr.logicBlock_visible();me._fav_menu.logicBlock_position(); });
	player.addListener('autorotatechanged', function(args) { me._screendarker.logicBlock_visible();me._map_container.logicBlock_visible();me._menu.logicBlock_visible();me._info.logicBlock_visible();me._additional_menu.logicBlock_visible(); });
	player.addListener('vrchanged', function(args) { me._exit_vr.logicBlock_visible(); });
	player.addListener('hastouch', function(args) { me._tt_fullscreen.logicBlock_position();me._tt_home.logicBlock_position();me._tt_map_open.logicBlock_position();me._tt_map_close.logicBlock_position();me._tt_zoomout.logicBlock_position();me._tt_zoomin.logicBlock_position();me._fav_menu.logicBlock_position(); });
	player.addListener('varchanged_vis_bg_dark', function(args) { me._screendarker.logicBlock_visible(); });
	player.addListener('varchanged_vis_map', function(args) { me._screendarker.logicBlock_visible();me._map_container.logicBlock_visible();me._map.logicBlock_visible();me._button_close_map.logicBlock_visible(); });
	player.addListener('varchanged_vis_info_start', function(args) { me._info.logicBlock_visible(); });
	player.addListener('varchanged_vis_info_popup_2', function(args) { me._screentint_info.logicBlock_visible();me._information.logicBlock_visible(); });
	player.addListener('varchanged_vis_thumbnail_menu_2', function(args) { me._menu_background.logicBlock_visible();me._menu_background.logicBlock_alpha();me._menu_icon.logicBlock_position();me._menu_open0.logicBlock_position();me._menu_icon_vis.logicBlock_visible();me._menu_open.logicBlock_position(); });
	player.addListener('varchanged_vis_thumbnail_menu_3', function(args) { me._fav_menu.logicBlock_alpha(); });
	player.addListener('varchanged_opt_zoom', function(args) { me._button_zoom.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._node_cloner.callChildLogicBlocks_changenode();me._thumbnail_cloner.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('mouseover', function(args) { me._node_cloner.callChildLogicBlocks_mouseover();me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._node_cloner.callChildLogicBlocks_active();me._thumbnail_cloner.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._node_cloner.callChildLogicBlocks_changevisitednodes();me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes(); });
	player.addListener('activehotspotchanged', function(args) { me._node_cloner.callChildLogicBlocks_activehotspotchanged();me._thumbnail_cloner.callChildLogicBlocks_activehotspotchanged(); });
	player.addListener('varchanged_opt_thumbnail_menu_tooltip_3', function(args) { me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip_3(); });
	player.addListener('varchanged_resp_phone', function(args) { me._node_cloner.callChildLogicBlocks_varchanged_resp_phone(); });
	player.addListener('sizechanged', function(args) { me.callChildLogicBlocksHotspot_ht_node_sizechanged();me.callChildLogicBlocksHotspot_ht_node_drone_sizechanged(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_changenode();me.callChildLogicBlocksHotspot_ht_info_pol_changenode();me.callChildLogicBlocksHotspot_ht_info_eng_changenode();me.callChildLogicBlocksHotspot_ht_info_ger_changenode();me.callChildLogicBlocksHotspot_ht_node_drone_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_node_configloaded();me.callChildLogicBlocksHotspot_ht_info_pol_configloaded();me.callChildLogicBlocksHotspot_ht_info_eng_configloaded();me.callChildLogicBlocksHotspot_ht_info_ger_configloaded();me.callChildLogicBlocksHotspot_ht_node_drone_configloaded(); });
	player.addListener('autorotatechanged', function(args) { me.callChildLogicBlocksHotspot_ht_node_autorotatechanged();me.callChildLogicBlocksHotspot_ht_node_drone_autorotatechanged(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node_mouseover();me.callChildLogicBlocksHotspot_ht_info_pol_mouseover();me.callChildLogicBlocksHotspot_ht_info_eng_mouseover();me.callChildLogicBlocksHotspot_ht_info_ger_mouseover();me.callChildLogicBlocksHotspot_ht_node_drone_mouseover(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_active();me.callChildLogicBlocksHotspot_ht_node_drone_active(); });
	player.addListener('changevisitednodes', function(args) { me.callChildLogicBlocksHotspot_ht_node_changevisitednodes();me.callChildLogicBlocksHotspot_ht_node_drone_changevisitednodes(); });
	player.addListener('hastouch', function(args) { me.callChildLogicBlocksHotspot_ht_node_hastouch();me.callChildLogicBlocksHotspot_ht_info_pol_hastouch();me.callChildLogicBlocksHotspot_ht_info_eng_hastouch();me.callChildLogicBlocksHotspot_ht_info_ger_hastouch();me.callChildLogicBlocksHotspot_ht_node_drone_hastouch(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_info_pol_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_info_eng_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_info_ger_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_node_drone_activehotspotchanged(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_node_drone_varchanged_vis_info_popup(); });
	player.addListener('varchanged_vis_website', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_node_drone_varchanged_vis_website(); });
	player.addListener('varchanged_opt_hotspot_preview', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_hotspot_preview();me.callChildLogicBlocksHotspot_ht_node_drone_varchanged_opt_hotspot_preview(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	document.addEventListener('keydown', function(e) {
		var key = e.which || e.keyCode;
		if (!player.getLockedKeyboard()) {
			switch(key) {
				case 27:
					me._exit_vr.onclick.call(me._exit_vr);
					break;
				case 37:
					me._btn_back.onclick.call(me._btn_back);
					break;
				case 39:
					me._btn_forward.onclick.call(me._btn_forward);
					break;
			}
		}
	});
	me.skinTimerEvent();
};