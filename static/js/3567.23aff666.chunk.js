"use strict";(self.webpackChunkcra_ts_5=self.webpackChunkcra_ts_5||[]).push([[3567],{81371:function(e,n,a){a.d(n,{Z:function(){return P}});var t=a(1413),i=a(29439),c=a(47313),r=a(40490),l=a.n(r),o=a(16330),s=a(57829),d=a(85345),u=a(40935),f=a(70816),m=a.n(f),v=a(11193),h=a(45987),x=a(88564),p=a(51885),Z=a(22429),j=a(70660),g=a(59656),C=a(99990),b=a(72469),S=a(46417),y=["value"],z=(0,x.ZP)(p.Z)((function(e){return{"& .MuiRating-iconEmpty .MuiSvgIcon-root":{color:e.theme.palette.action.disabled}}})),M={1:{icon:(0,S.jsx)(Z.Z,{color:"error"}),label:"Tidak Paham"},2:{icon:(0,S.jsx)(j.Z,{color:"error"}),label:"Kurang Paham"},3:{icon:(0,S.jsx)(g.Z,{color:"warning"}),label:"Cukup Paham"},4:{icon:(0,S.jsx)(C.Z,{color:"success"}),label:"Paham"},5:{icon:(0,S.jsx)(b.Z,{color:"success"}),label:"Sangat Paham"}};function k(e){var n=e.value,a=(0,h.Z)(e,y);return(0,S.jsx)("span",(0,t.Z)((0,t.Z)({},a),{},{children:M[n].icon}))}function R(e){var n,a=e.onValueChange,r=e.ratingProps,l=c.useState(null!==(n=null===r||void 0===r?void 0:r.value)&&void 0!==n?n:3),o=(0,i.Z)(l,2),d=o[0],u=o[1],f=c.useState(-1),m=(0,i.Z)(f,2),h=m[0],x=m[1];return(0,S.jsx)(v.Z,{title:null===d?"Tidak ada":M[-1!==h?h:d].label,children:(0,S.jsx)(s.Z,{display:"inline-block",children:(0,S.jsx)(z,(0,t.Z)({name:"highlight-selected-only",IconContainerComponent:k,onChange:function(e,n){u(n),a&&a(n)},onChangeActive:function(e,n){x(n)},highlightSelectedOnly:!0},r))})})}var P=function(e){var n=e.model,a=e.level,r=void 0===a?"all":a,f=e.fixedSize,h=void 0!==f&&f,x=c.createRef(),p=c.useState([]),Z=(0,i.Z)(p,2),j=Z[0],g=Z[1];c.useLayoutEffect((function(){console.log("tref",x),C()}),[]);var C=function(){var e;o.mu.findAllByTopic(null!==(e=null===n||void 0===n?void 0:n.id)&&void 0!==e?e:"",r,{page:0}).then((function(e){console.log(e);var n=[];null!=e.items&&e.items.map((function(e){var a,t;e.id=null!==(a=null===(t=e.student)||void 0===t?void 0:t.id)&&void 0!==a?a:"",n.push(e),e.records&&e.records.length>1&&e.records.map((function(a){a.parentId=e.id,delete a.student,n.push(a)}))})),console.log(n),g(n)}))};return(0,S.jsx)(s.Z,{children:(0,S.jsx)(l(),{tableRef:x,components:{Container:function(e){return(0,S.jsx)(d.Z,(0,t.Z)((0,t.Z)({},e),{},{elevation:0}))}},title:"Daftar Pembaca",options:{search:!1,pageSizeOptions:h?[5]:void 0,pageSize:h?5:10,sorting:!1,draggable:!1,actionsColumnIndex:-1,exportButton:{csv:!0},exportAllData:!0,exportCsv:function(e,n){var a=new u.CsvBuilder("download.csv"),t=[];j.forEach((function(e){var n;t.push([e.studentName,e.countRead,e.totalDuration,null!==(n=e.lastFeedback)&&void 0!==n?n:e.feedback,e.lastReadFormat])})),a.setDelimeter(",").setColumns(["Nama","Jumlah Membaca","Lama Membaca","Tingkat Pemahaman","Tanggal Membaca"]).addRows(t).exportFile()}},onRowClick:function(e,n,a){},data:j,parentChildData:function(e,n){return n.find((function(n){return n.id===e.parentId}))},columns:[{title:"Name",field:"studentName",render:function(e){return e.studentName}},{title:"Jumlah baca",field:"countRead",render:function(e){return e.hasReading?e.countRead:"Belum Membaca"}},{title:"Lama baca",field:"totalDuration",render:function(e){return e.hasReading?e.totalDuration:""}},{title:"Tingkat Pemahaman",field:"lastFeedback",render:function(e){return e.hasReading?(0,S.jsx)(R,{ratingProps:{readOnly:!0,size:"small",value:e.lastFeedback}}):""}},{title:"Terakhir Membaca",field:"lastReadFormat",render:function(e){return null==e.lastRead?"":(0,S.jsx)(v.Z,{title:e.lastReadFormat,children:(0,S.jsx)(s.Z,{children:m()(e.lastRead).fromNow()})})}}]})})}},33567:function(e,n,a){a.r(n);a(47313);var t=a(57775),i=a(20466),c=a(97890),r=a(81371),l=a(46417);n.default=function(e){var n=(0,c.UO)().topicId,a=new i.Zf;return a.id=null!==n&&void 0!==n?n:"",(0,l.jsx)(t.Z,{children:(0,l.jsx)(r.Z,{model:a})})}},70660:function(e,n,a){var t=a(95318);n.Z=void 0;var i=t(a(45045)),c=a(46417),r=(0,i.default)([(0,c.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),(0,c.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),(0,c.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-3.5c.73 0 1.39.19 1.97.53.12-.14.86-.98 1.01-1.14-.85-.56-1.87-.89-2.98-.89-1.11 0-2.13.33-2.99.88.97 1.09.01.02 1.01 1.14.59-.33 1.25-.52 1.98-.52z"},"2")],"SentimentDissatisfied");n.Z=r},59656:function(e,n,a){var t=a(95318);n.Z=void 0;var i=t(a(45045)),c=a(46417),r=(0,i.default)([(0,c.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),(0,c.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),(0,c.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-.73 0-1.38-.18-1.96-.52-.12.14-.86.98-1.01 1.15.86.55 1.87.87 2.97.87 1.11 0 2.12-.33 2.98-.88-.97-1.09-.01-.02-1.01-1.15-.59.35-1.24.53-1.97.53z"},"2")],"SentimentSatisfied");n.Z=r},99990:function(e,n,a){var t=a(95318);n.Z=void 0;var i=t(a(45045)),c=a(46417),r=(0,i.default)([(0,c.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),(0,c.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),(0,c.jsx)("path",{d:"M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"2")],"SentimentSatisfiedAltOutlined");n.Z=r},22429:function(e,n,a){var t=a(95318);n.Z=void 0;var i=t(a(45045)),c=a(46417),r=(0,i.default)([(0,c.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),(0,c.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),(0,c.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"},"2")],"SentimentVeryDissatisfied");n.Z=r},72469:function(e,n,a){var t=a(95318);n.Z=void 0;var i=t(a(45045)),c=a(46417),r=(0,i.default)([(0,c.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),(0,c.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),(0,c.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z"},"2")],"SentimentVerySatisfied");n.Z=r}}]);