"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3743],{25929:(e,r,a)=>{a.d(r,{M:()=>m,a:()=>h,e:()=>d,f:()=>i,i:()=>c,p:()=>p,r:()=>s,t:()=>l,w:()=>o});var t=a(70586),n=a(17452);function i(e,r){const a=r&&r.url&&r.url.path;if(e&&a&&(e=(0,n.hF)(e,a,{preserveProtocolRelative:!0}),r.portalItem&&r.readResourcePaths)){const a=(0,n.PF)(e,r.portalItem.itemUrl);null!=a&&u.test(a)&&r.readResourcePaths.push(r.portalItem.resourceFromPath(a).path)}return L(e,r&&r.portal)}function l(e,r,a=m.YES){if(null==e)return e;!(0,n.YP)(e)&&r&&r.blockedRelativeUrls&&r.blockedRelativeUrls.push(e);let t=(0,n.hF)(e);if(r){const a=r.verifyItemRelativeUrls&&r.verifyItemRelativeUrls.rootPath||r.url&&r.url.path;if(a){const i=L(a,r.portal);t=(0,n.PF)(L(t,r.portal),i,i),null!=t&&t!==e&&r.verifyItemRelativeUrls&&r.verifyItemRelativeUrls.writtenUrls.push(t)}}return t=d(t,r?.portal),(0,n.YP)(t)&&(t=(0,n.Fv)(t)),r?.resources&&r?.portalItem&&!(0,n.YP)(t)&&!(0,n.HK)(t)&&a===m.YES&&r.resources.toKeep.push({resource:r.portalItem.resourceFromPath(t),compress:!1}),t}function s(e,r,a){return i(e,a)}function o(e,r,a,t){const n=l(e,t);void 0!==n&&(r[a]=n)}const y=/\/items\/([^\/]+)\/resources\/(.*)/,u=/^\.\/resources\//;function c(e){return(e?.match(y)??null)?.[1]??null}function p(e){const r=e?.match(y)??null;if(null==r)return null;const a=r[2],i=a.lastIndexOf("/");if(-1===i){const{path:e,extension:r}=(0,n.fZ)(a);return{prefix:null,filename:e,extension:(0,t.Wg)(r)}}const{path:l,extension:s}=(0,n.fZ)(a.slice(i+1));return{prefix:a.slice(0,i),filename:l,extension:(0,t.Wg)(s)}}function d(e,r){return r&&!r.isPortal&&r.urlKey&&r.customBaseUrl?(0,n.Ie)(e,`${r.urlKey}.${r.customBaseUrl}`,r.portalHostname):e}function L(e,r){if(!r||r.isPortal||!r.urlKey||!r.customBaseUrl)return e;const a=`${r.urlKey}.${r.customBaseUrl}`,t=(0,n.TI)();return(0,n.D6)(t,`${t.scheme}://${a}`)?(0,n.Ie)(e,r.portalHostname,a):(0,n.Ie)(e,a,r.portalHostname)}var m,f;(f=m||(m={}))[f.YES=0]="YES",f[f.NO=1]="NO";const h=Object.freeze(Object.defineProperty({__proto__:null,fromJSON:i,toJSON:l,read:s,write:o,itemIdFromResourceUrl:c,prefixAndFilenameFromResourceUrl:p,ensureMainOnlineDomain:d,get MarkKeep(){return m}},Symbol.toStringTag,{value:"Module"}))},10699:(e,r,a)=>{a.d(r,{IG:()=>l});var t=a(43697),n=a(52011);let i=0;const l=e=>{let r=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+i++})}};return r=(0,t._)([(0,n.j)("esri.core.Identifiable")],r),r};let s=class extends(l(class{})){};s=(0,t._)([(0,n.j)("esri.core.Identifiable")],s)},24470:(e,r,a)=>{a.d(r,{Gv:()=>S,HH:()=>y,SO:()=>c,Ue:()=>i,al:()=>s,cS:()=>m,fS:()=>h,jE:()=>p,jn:()=>u,kK:()=>d,oJ:()=>o,r3:()=>L}),a(80442),a(22021);var t=a(70586),n=a(6570);function i(e=b){return[e[0],e[1],e[2],e[3]]}function l(e,r){return e!==r&&(e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3]),e}function s(e,r,a,t,n=i()){return n[0]=e,n[1]=r,n[2]=a,n[3]=t,n}function o(e,r=i()){return r[0]=e.xmin,r[1]=e.ymin,r[2]=e.xmax,r[3]=e.ymax,r}function y(e,r){return new n.Z({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:r})}function u(e,r,a){if((0,t.Wi)(r))l(a,e);else if("length"in r)f(r)?(a[0]=Math.min(e[0],r[0]),a[1]=Math.min(e[1],r[1]),a[2]=Math.max(e[2],r[2]),a[3]=Math.max(e[3],r[3])):2!==r.length&&3!==r.length||(a[0]=Math.min(e[0],r[0]),a[1]=Math.min(e[1],r[1]),a[2]=Math.max(e[2],r[0]),a[3]=Math.max(e[3],r[1]));else switch(r.type){case"extent":a[0]=Math.min(e[0],r.xmin),a[1]=Math.min(e[1],r.ymin),a[2]=Math.max(e[2],r.xmax),a[3]=Math.max(e[3],r.ymax);break;case"point":a[0]=Math.min(e[0],r.x),a[1]=Math.min(e[1],r.y),a[2]=Math.max(e[2],r.x),a[3]=Math.max(e[3],r.y)}}function c(e){return function(e){return(0,t.Wi)(e)||e[0]>=e[2]?0:e[2]-e[0]}(e)*function(e){return e[1]>=e[3]?0:e[3]-e[1]}(e)}function p(e,r,a){return r>=e[0]&&a>=e[1]&&r<=e[2]&&a<=e[3]}function d(e,r){return Math.max(r[0],e[0])<=Math.min(r[2],e[2])&&Math.max(r[1],e[1])<=Math.min(r[3],e[3])}function L(e,r){return r[0]>=e[0]&&r[2]<=e[2]&&r[1]>=e[1]&&r[3]<=e[3]}function m(e){return e?l(e,S):i(S)}function f(e){return null!=e&&4===e.length}function h(e,r){return f(e)&&f(r)?e[0]===r[0]&&e[1]===r[1]&&e[2]===r[2]&&e[3]===r[3]:e===r}const S=[1/0,1/0,-1/0,-1/0],b=[0,0,0,0]},87085:(e,r,a)=>{a.d(r,{Z:()=>b});var t=a(43697),n=(a(66577),a(3172)),i=a(20102),l=a(32448),s=a(10699),o=a(83379),y=a(92604),u=a(95330),c=a(17452),p=a(5600),d=(a(67676),a(75215),a(52011)),L=a(68773),m=a(6570),f=a(82971);let h=0,S=class extends(l.Z.EventedMixin((0,s.IG)(o.Z))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new m.Z(-180,-90,180,90,f.Z.WGS84),this.id=Date.now().toString(16)+"-layer-"+h++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=f.Z.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(e){const r="string"==typeof e?{url:e}:e;return(await a.e(3529).then(a.bind(a,63529))).fromUrl(r)}static fromPortalItem(e){return async function(e){const r="portalItem"in e?e:{portalItem:e},t=await Promise.all([a.e(4547),a.e(9300),a.e(6636)]).then(a.bind(a,28008));try{return await t.fromItem(r)}catch(e){const a=r&&r.portalItem,t=a&&a.id||"unset",n=a&&a.portal&&a.portal.url||L.Z.portalUrl;throw y.Z.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+n+"', id: '"+t+"')",e),e}}(e)}initialize(){this.when().catch((e=>{(0,u.D_)(e)||y.Z.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:e})}))}destroy(){if(this.parent){const e=this,r=this.parent;"layers"in r&&r.layers.includes(e)?r.layers.remove(e):"tables"in r&&r.tables.includes(e)?r.tables.remove(e):"baseLayers"in r&&r.baseLayers.includes(e)?r.baseLayers.remove(e):"baseLayers"in r&&r.referenceLayers.includes(e)&&r.referenceLayers.remove(e)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){return(0,c.mN)(this.url)}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await(0,n.default)(e,{query:{f:"json"},responseType:"json"})).data;throw new i.Z("layer:no-attribution-data","Layer does not have attribution data")}};(0,t._)([(0,p.Cb)({type:String})],S.prototype,"attributionDataUrl",void 0),(0,t._)([(0,p.Cb)({type:m.Z})],S.prototype,"fullExtent",void 0),(0,t._)([(0,p.Cb)({readOnly:!0})],S.prototype,"hasAttributionData",null),(0,t._)([(0,p.Cb)({type:String,clonable:!1})],S.prototype,"id",void 0),(0,t._)([(0,p.Cb)({type:Boolean,nonNullable:!0})],S.prototype,"legendEnabled",void 0),(0,t._)([(0,p.Cb)({type:["show","hide","hide-children"]})],S.prototype,"listMode",void 0),(0,t._)([(0,p.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0})],S.prototype,"opacity",void 0),(0,t._)([(0,p.Cb)({clonable:!1})],S.prototype,"parent",void 0),(0,t._)([(0,p.Cb)({readOnly:!0})],S.prototype,"parsedUrl",null),(0,t._)([(0,p.Cb)({type:Boolean})],S.prototype,"popupEnabled",void 0),(0,t._)([(0,p.Cb)({type:Boolean})],S.prototype,"attributionVisible",void 0),(0,t._)([(0,p.Cb)({type:f.Z})],S.prototype,"spatialReference",void 0),(0,t._)([(0,p.Cb)({type:String})],S.prototype,"title",void 0),(0,t._)([(0,p.Cb)({readOnly:!0,json:{read:!1}})],S.prototype,"type",void 0),(0,t._)([(0,p.Cb)()],S.prototype,"url",void 0),(0,t._)([(0,p.Cb)({type:Boolean,nonNullable:!0})],S.prototype,"visible",void 0),S=(0,t._)([(0,d.j)("esri.layers.Layer")],S);const b=S},66677:(e,r,a)=>{a.d(r,{B5:()=>c,DR:()=>d,G:()=>I,M8:()=>f,Nm:()=>h,Qc:()=>p,XG:()=>S,a7:()=>m,ld:()=>L,wH:()=>b});var t=a(70586),n=a(17452),i=a(25929);const l={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer"},s=Object.values(l),o=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${s.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),y=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${s.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),u=/(.*?)\/(?:layers\/)?(\d+)\/?$/i;function c(e){return!!o.test(e)}function p(e){if((0,t.Wi)(e))return null;const r=(0,n.mN)(e),a=r.path.match(o)||r.path.match(y);if(!a)return null;const[,i,s,u,c]=a,p=s.indexOf("/");return{title:L(-1!==p?s.slice(p+1):s),serverType:l[u.toLowerCase()],sublayer:null!=c&&""!==c?parseInt(c,10):null,url:{path:i}}}function d(e){const r=(0,n.mN)(e).path.match(u);return r?{serviceUrl:r[1],sublayerId:Number(r[2])}:null}function L(e){return(e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function m(e,r){const a=[];if(e){const r=p(e);(0,t.pC)(r)&&r.title&&a.push(r.title)}if(r){const e=L(r);a.push(e)}if(2===a.length){if(a[0].toLowerCase().includes(a[1].toLowerCase()))return a[0];if(a[1].toLowerCase().includes(a[0].toLowerCase()))return a[1]}return a.join(" - ")}function f(e){if(!e)return!1;const r=(e=e.toLowerCase()).includes(".arcgis.com/"),a=e.includes("//services")||e.includes("//tiles")||e.includes("//features");return r&&a}function h(e,r){return e?(0,n.Qj)((0,n.Hu)(e,r)):e}function S(e){let{url:r}=e;if(!r)return{url:r};r=(0,n.Hu)(r,e.logger);const a=(0,n.mN)(r),i=p(a.path);let l;if((0,t.pC)(i))null!=i.sublayer&&null==e.layer.layerId&&(l=i.sublayer),r=i.url.path;else if(e.nonStandardUrlAllowed){const e=d(a.path);(0,t.pC)(e)&&(r=e.serviceUrl,l=e.sublayerId)}return{url:(0,n.Qj)(r),layerId:l}}function b(e,r,a,t,l){(0,i.w)(r,t,"url",l),t.url&&null!=e.layerId&&(t.url=(0,n.v_)(t.url,a,e.layerId.toString()))}function I(e){if(!e)return!1;const r=e.toLowerCase(),a=r.includes("/services/"),t=r.includes("/mapserver/wmsserver"),n=r.includes("/imageserver/wmsserver"),i=r.includes("/wmsserver");return a&&(t||n||i)}},70024:(e,r,a)=>{a.r(r),a.d(r,{populateOperationalLayers:()=>u});var t=a(46791),n=(a(80442),a(95330)),i=a(87344),l=a(15235);function s(e,r){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}var o=a(28008),y=a(40555);async function u(e,r,a){if(!r)return;const t=[];for(const e of r){const r=h(e,a);"GroupLayer"===e.layerType?t.push(g(r,e,a)):t.push(r)}const i=await(0,n.as)(t);for(const r of i)!r.value||a.filter&&!a.filter(r.value)||e.add(r.value)}const c={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},p={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},d={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},L={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},m={ArcGISFeatureLayer:"FeatureLayer"},f={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function h(e,r){return async function(e,r,a){const t=new e;return t.read(r,a.context),"group"===t.type&&S(r)&&await async function(e,r,a){const t=i.T.FeatureLayer,n=await t(),l=r.featureCollection,s=l.showLegend,o=l.layers.map(((t,i)=>{const l=new n;l.read(t,a);const o={...a,ignoreDefaults:!0};return l.read({id:`${e.id}-sublayer-${i}`,visibility:r.visibleLayers?.includes(i)??!0},o),null!=s&&l.read({showLegend:s},o),l}));e.layers.addMany(o)}(t,r,a.context),await(0,y.y)(t,a.context),t}(await async function(e,r){const a=r.context,t=I(a);let n=e.layerType||e.type;!n&&r&&r.defaultLayerType&&(n=r.defaultLayerType);const y=t[n];let u=y?i.T[y]:i.T.UnknownLayer;if(b(e)){const r=a?.portal;if(e.itemId){const a=new l.default({id:e.itemId,portal:r});await a.load();const t=(await(0,o.selectLayerClassPath)(a)).className||"UnknownLayer";u=i.T[t]}}else"ArcGISFeatureLayer"===n?function(e){return s(e,"notes")}(e)||function(e){return s(e,"markup")}(e)?u=i.T.MapNotesLayer:function(e){return s(e,"route")}(e)?u=i.T.RouteLayer:S(e)&&(u=i.T.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?u=i.T.WMTSLayer:"WFS"===n&&"2.0.0"!==e.wfsInfo.version&&(u=i.T.UnsupportedLayer);return u()}(e,r),e,r)}function S(e){return"ArcGISFeatureLayer"===e.layerType&&!b(e)&&(e.featureCollection?.layers?.length??0)>1}function b(e){return"Feature Collection"===e.type}function I(e){let r;if("web-scene"===e.origin)switch(e.layerContainerType){case"basemap":r=d;break;case"ground":r=p;break;default:r=c}else switch(e.layerContainerType){case"basemap":r=f;break;case"tables":r=m;break;default:r=L}return r}async function g(e,r,a){const n=new t.Z,i=u(n,Array.isArray(r.layers)?r.layers:[],a),l=await e;if(await i,"group"===l.type)return l.layers.addMany(n),l}},87344:(e,r,a)=>{a.d(r,{T:()=>t});const t={BingMapsLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(9513)]).then(a.bind(a,2723))).default,BuildingSceneLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(4547),a.e(3929),a.e(1773),a.e(8244),a.e(4321),a.e(1423),a.e(5795),a.e(911),a.e(5546),a.e(759),a.e(9238),a.e(9268),a.e(3572),a.e(7698),a.e(223)]).then(a.bind(a,30223))).default,CSVLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(3929),a.e(1773),a.e(8244),a.e(4321),a.e(1423),a.e(5795),a.e(911),a.e(5546),a.e(759),a.e(9238),a.e(7827)]).then(a.bind(a,45425))).default,DimensionLayer:async()=>(await Promise.all([a.e(4547),a.e(5179),a.e(81)]).then(a.bind(a,40081))).default,ElevationLayer:async()=>(await Promise.all([a.e(8794),a.e(7542)]).then(a.bind(a,49932))).default,FeatureLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(3929),a.e(1773),a.e(8244),a.e(4321),a.e(1423),a.e(5795),a.e(911),a.e(5546),a.e(759),a.e(9238),a.e(4202)]).then(a.bind(a,19238))).default,GroupLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(9)]).then(a.bind(a,89348))).default,GeoRSSLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(3929),a.e(8691)]).then(a.bind(a,3723))).default,GeoJSONLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(3929),a.e(1773),a.e(8244),a.e(4321),a.e(1423),a.e(5795),a.e(911),a.e(5546),a.e(7202)]).then(a.bind(a,23477))).default,ImageryLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(3929),a.e(1773),a.e(8244),a.e(4321),a.e(5795),a.e(4599),a.e(8363),a.e(4242),a.e(4028)]).then(a.bind(a,66210))).default,ImageryTileLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(4547),a.e(3929),a.e(1773),a.e(8244),a.e(4321),a.e(8794),a.e(8363),a.e(4242),a.e(3645),a.e(2592)]).then(a.bind(a,92045))).default,IntegratedMeshLayer:async()=>(await Promise.all([a.e(2710),a.e(4547),a.e(3572),a.e(4046)]).then(a.bind(a,9310))).default,KMLLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(3929),a.e(1773),a.e(8244),a.e(4321),a.e(1423),a.e(739)]).then(a.bind(a,42756))).default,LineOfSightLayer:async()=>(await Promise.all([a.e(4547),a.e(5179),a.e(690)]).then(a.bind(a,30690))).default,MapImageLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(3929),a.e(1773),a.e(8244),a.e(4321),a.e(1423),a.e(5795),a.e(911),a.e(4436),a.e(7374)]).then(a.bind(a,27374))).default,MapNotesLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(4547),a.e(3929),a.e(1773),a.e(8244),a.e(4321),a.e(1423),a.e(5795),a.e(911),a.e(5546),a.e(759),a.e(9238),a.e(9956)]).then(a.bind(a,62128))).default,OGCFeatureLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(3929),a.e(1773),a.e(8244),a.e(4321),a.e(1423),a.e(5795),a.e(911),a.e(5546),a.e(2855)]).then(a.bind(a,88068))).default,OpenStreetMapLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(9903),a.e(6237)]).then(a.bind(a,66237))).default,OrientedImageryLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(3929),a.e(1773),a.e(8244),a.e(4321),a.e(1423),a.e(5795),a.e(911),a.e(5546),a.e(759),a.e(9238),a.e(9356)]).then(a.bind(a,76604))).default,PointCloudLayer:async()=>(await Promise.all([a.e(2710),a.e(1773),a.e(5468)]).then(a.bind(a,10608))).default,RouteLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(4547),a.e(3929),a.e(1773),a.e(8244),a.e(4321),a.e(1423),a.e(6925)]).then(a.bind(a,40153))).default,SceneLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(4547),a.e(3929),a.e(1773),a.e(8244),a.e(4321),a.e(1423),a.e(5795),a.e(911),a.e(5546),a.e(759),a.e(9238),a.e(9268),a.e(3572),a.e(7698),a.e(7476)]).then(a.bind(a,57476))).default,StreamLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(3929),a.e(1773),a.e(8244),a.e(4321),a.e(1423),a.e(5795),a.e(911),a.e(5546),a.e(5004)]).then(a.bind(a,88387))).default,SubtypeGroupLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(3929),a.e(1773),a.e(8244),a.e(4321),a.e(1423),a.e(5795),a.e(911),a.e(759),a.e(2374)]).then(a.bind(a,30359))).default,TileLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(3929),a.e(1773),a.e(8244),a.e(4321),a.e(1423),a.e(5795),a.e(911),a.e(8794),a.e(4436),a.e(8636)]).then(a.bind(a,98636))).default,UnknownLayer:async()=>(await a.e(4166).then(a.bind(a,44166))).default,UnsupportedLayer:async()=>(await a.e(9296).then(a.bind(a,39296))).default,VectorTileLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(8794),a.e(4325),a.e(1785),a.e(6904)]).then(a.bind(a,94756))).default,VoxelLayer:async()=>(await Promise.all([a.e(2710),a.e(6794)]).then(a.bind(a,28865))).default,WebTileLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(9903)]).then(a.bind(a,16199))).default,WFSLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(4547),a.e(3929),a.e(1773),a.e(8244),a.e(4321),a.e(1423),a.e(5795),a.e(911),a.e(5546),a.e(3810)]).then(a.bind(a,12653))).default,WMSLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(3929),a.e(1773),a.e(8383)]).then(a.bind(a,25906))).default,WMTSLayer:async()=>(await Promise.all([a.e(2710),a.e(1612),a.e(9903),a.e(5853)]).then(a.bind(a,55853))).default}},28008:(e,r,a)=>{a.r(r),a.d(r,{fromItem:()=>y,selectLayerClassPath:()=>u});var t=a(20102),n=a(87344),i=a(15235),l=a(18062),s=a(14661),o=a(96187);function y(e){return!e.portalItem||e.portalItem instanceof i.default||(e={...e,portalItem:new i.default(e.portalItem)}),function(e){return e.load().then(u).then(c)}(e.portalItem).then((r=>{const a={portalItem:e.portalItem,...r.properties};return new(0,r.constructor)(a)}))}function u(e){switch(e.type){case"Map Service":return function(e){return(0,o.b)(e.url).then((e=>e.tileInfo))}(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}));case"Feature Service":return function(e){return(0,s._$)(e,"Oriented Imagery Layer")?function(e){return e.load().then((()=>e.fetchData())).then((e=>e.coverage?{className:"GroupLayer"}:{className:"OrientedImageryLayer",properties:e}))}(e):p(e).then((e=>{if("object"==typeof e){const r={};return null!=e.id&&(r.layerId=e.id),{className:e.className||"FeatureLayer",properties:r}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return async function(e){await e.load();const r=(0,s._$)(e,"Map Notes"),a=(0,s._$)(e,"Markup");if(r||a)return{className:"MapNotesLayer"};if((0,s._$)(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return 1===(0,l.getNumLayersAndTables)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return function(e){return p(e).then((r=>{if("object"==typeof r){const a={};let t;if(null!=r.id?(a.layerId=r.id,t=`${e.url}/layers/${r.id}`):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const r={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const a of Object.keys(r))if(e.typeKeywords.includes(a))return{className:r[a]}}return(0,o.b)(t).then((e=>{let r="SceneLayer";const t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&t[e.layerType]&&(r=t[e.layerType]),{className:r,properties:a}}))}return!1===r?(0,o.b)(e.url).then((e=>"Voxel"===e?.layerType?{className:"VoxelLayer"}:{className:"GroupLayer"})):{className:"GroupLayer"}}))}(e);case"Image Service":return async function(e){await e.load();const r=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(r.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(r.includes("tiled imagery"))return{className:"ImageryTileLayer"};const a=(await e.fetchData())?.layerType;if("ArcGISTiledImageServiceLayer"===a)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===a)return{className:"ImageryLayer"};const t=await(0,o.b)(e.url),n=t.cacheType?.toLowerCase(),i=t.capabilities?.toLowerCase().includes("tilesonly");return"map"===n||i?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"CSV":return{className:"CSVLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Promise.reject(new t.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function c(e){return(0,n.T[e.className])().then((r=>({constructor:r,properties:e.properties})))}function p(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((()=>e.fetchData())).then((async r=>{if("Feature Service"===e.type){const a=d(await(0,l.preprocessFSItemData)(r,e.url));if("object"==typeof a){const e=(0,l.getSubtypeGroupLayerIds)(r);a.className=e.includes(a.id)?"SubtypeGroupLayer":"FeatureLayer"}return a}return(0,l.getNumLayersAndTables)(r)>0?d(r):(0,o.b)(e.url).then(d)}))}function d(e){return 1===(0,l.getNumLayersAndTables)(e)&&{id:(0,l.getFirstLayerOrTableId)(e)}}}}]);