"use strict";(self.webpackChunkcra_ts_5=self.webpackChunkcra_ts_5||[]).push([[4160],{50104:function(t,e,n){n.r(e),n.d(e,{default:function(){return k}});var o=n(47313),i=n(92649),r=n(17049),s=n(44894),l=n(19106),c=n(54750),a=n(46417),d=(0,c.Z)((0,a.jsx)("path",{d:"M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z"}),"PeopleOutlined"),u=(0,c.Z)((0,a.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"}),"PollOutlined"),x=n(57864),h=n(57829),p=n(69680),m=n(62847),f=n(47414),v=n(63855),j=function(t){var e=t.courseClassroom;return(0,a.jsx)(h.Z,{py:6,bgcolor:"#fff",style:{borderRadius:24},children:(0,a.jsx)(h.Z,{display:"flex",flexDirection:"column",flex:1,alignItems:"center",justifyContent:"center",children:e instanceof m.dg?function(t){var e,n,o,i,r,s;return console.log(t),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.Z,{mt:1,mb:3,children:(0,a.jsx)(v.Z,{title:null!==(e=null===(n=t.teacher)||void 0===n?void 0:n.getFullName())&&void 0!==e?e:"",status:null===(o=t.teacher)||void 0===o?void 0:o.visibilityStatus,sx:{width:75,height:75}})}),(0,a.jsxs)(h.Z,{textAlign:"center",children:[(0,a.jsx)(h.Z,{color:"text.secondary",mb:3,children:null===(i=t.teacher)||void 0===i?void 0:i.getFullName()}),(0,a.jsxs)(h.Z,{component:"p",fontSize:14,fontWeight:p.F3.BOLD,style:{color:"#000"},children:[null===(r=t.course)||void 0===r?void 0:r.name," - ",null===(s=t.classroom)||void 0===s?void 0:s.name]})]})]})}(e):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.Z,{mt:1,mb:3,children:(0,a.jsx)(f.Z,{variant:"circular",width:80,height:80})}),(0,a.jsxs)(h.Z,{textAlign:"center",children:[(0,a.jsx)(h.Z,{color:"text.secondary",component:"p",mb:3,children:(0,a.jsx)(f.Z,{variant:"text",width:150,style:{display:"inline-block"}})}),(0,a.jsx)(h.Z,{component:"p",fontSize:14,fontWeight:p.F3.BOLD,style:{color:"#000"},children:(0,a.jsx)(f.Z,{variant:"text",width:150,style:{display:"inline-block"}})})]})]})})})},g=o.memo(j),Z=n(19536),y=n(16330),b=n(11579),w=[{title:"Modul",subtitle:"",page:"module",showNotificationIcon:!1,icon:(0,a.jsx)(l.Z,{}),roles:[s.lg.Student,s.lg.Teacher]},{title:"Siswa",subtitle:"",page:"student",showNotificationIcon:!1,icon:(0,a.jsx)(d,{}),roles:[s.lg.Teacher]},{title:"Report",subtitle:"",page:"report",showNotificationIcon:!1,icon:(0,a.jsx)(u,{}),roles:[s.lg.Teacher]},{title:"Pengaturan",subtitle:"",page:"setting",showNotificationIcon:!1,icon:(0,a.jsx)(x.zPD,{}),roles:[s.lg.Teacher]}],C=function(t){var e=t.courseClassroomId,n=(0,b.useQuery)(["course-classroom",e],(function(){return y.$E.view(e)})),o=(n.isLoading,n.data);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g,{courseClassroom:null===o||void 0===o?void 0:o.item}),(0,a.jsx)(Z.Z,{}),(0,a.jsx)(r.Z,{items:w,onGenerateLink:function(t){var n,i="";"student"===t.page&&(i="/".concat(null===o||void 0===o||null===(n=o.item)||void 0===n?void 0:n.classroomId));return{path:"/module/".concat(e,"/").concat(t.page).concat(i),state:{}}}})]})},z=o.memo(C),S=n(97890),k=function(){var t=(0,S.s0)(),e=(0,S.UO)().courseClassroomId;return(0,a.jsx)(i.Z,{title:"Modul Pembelajaran",showBackButton:!0,onBackButtonPress:function(){return t("/courses",{replace:!0})},sidebarContent:(0,a.jsx)(z,{courseClassroomId:null!==e&&void 0!==e?e:""}),children:(0,a.jsx)(S.j3,{})})}},63855:function(t,e,n){var o=n(1413),i=n(45987),r=(n(47313),n(63585)),s=n(50919),l=n(46417),c=["className","title","url","status"];e.Z=function(t){var e,n,a=t.className,d=t.title,u=t.url,x=t.status,h=(0,i.Z)(t,c),p={online:"#11C15B",offline:"#F04F47",busy:"#ffba52"};return void 0==x&&(x="offline"),(0,l.jsx)(s.Z,{anchorOrigin:{horizontal:"right",vertical:"bottom"},color:"success",variant:"dot",overlap:"circular",sx:{"& .MuiBadge-badge":{backgroundColor:null!==(e=p[x])&&void 0!==e?e:p.offline,color:null!==(n=p[x])&&void 0!==n?n:p.offline,width:12,height:12,bottom:"15%",right:"15%",border:"2px solid #fff",borderRadius:12,"&::after":"online"!==x?{}:{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}}},children:u?(0,l.jsx)(r.Z,(0,o.Z)({className:a,src:u},h)):(0,l.jsx)(r.Z,(0,o.Z)((0,o.Z)({className:a},h),{},{children:d.charAt(1).toUpperCase()}))})}},17049:function(t,e,n){n.d(e,{Z:function(){return I}});var o=n(1413),i=n(47313),r=n(88228),s=n(57829),l=n(98668),c=n(47605),a=n(71003),d=n(1001),u=n(69680),x=n(46417),h=function(t){var e=t.loader,n=t.placeholder,o=t.loading,r=t.title,h=void 0===r?(0,x.jsx)(d.Z,{id:"common.noRecordFound"}):r,p=t.actionTitle,m=t.content,f=t.onClick;return o||e?(0,x.jsx)(i.Fragment,{children:n||(0,x.jsxs)(s.Z,{sx:{flexDirection:"row",minHeight:"450px",height:"100%",flex:1,display:"flex",p:5,justifyContent:"center",alignItems:"center",borderColor:"transparent",borderRadius:"4px",textAlign:"center"},children:[(0,x.jsx)(l.Z,{size:16}),(0,x.jsx)(s.Z,{component:"span",sx:{ml:2},children:"Loading..."})]})}):(0,x.jsxs)(s.Z,{sx:{flexDirection:"column",minHeight:"450px",height:"100%",flex:1,display:"flex",p:5,justifyContent:"center",alignItems:"center",border:1,borderColor:"transparent",borderRadius:"4px",textAlign:"center"},children:[h?(0,x.jsx)(c.Z,{sx:{fontSize:14,color:function(t){return t.palette.text.secondary},fontWeight:u.F3.MEDIUM,mb:2},component:"h4",variant:"h4",children:h}):null,(0,x.jsx)(c.Z,{sx:{fontSize:14,color:function(t){return t.palette.text.secondary}},children:m}),p?(0,x.jsx)(a.Z,{color:"primary",variant:"contained",sx:{mt:7.5,height:45,minWidth:150},onClick:f,children:p}):null]})},p=n(35990),m=function(){return(0,x.jsxs)(p.ZP,{viewBox:"0 0 200 45",children:[(0,x.jsx)("rect",{x:"0",y:"10",rx:"0",ry:"0",width:"20",height:"20"}),(0,x.jsx)("rect",{x:"35",y:"12",rx:"2",ry:"2",width:"100",height:"15"})]})},f=function(){return(0,x.jsxs)(i.Fragment,{children:[(0,x.jsx)(m,{}),(0,x.jsx)(m,{}),(0,x.jsx)(m,{}),(0,x.jsx)(m,{}),(0,x.jsx)(m,{}),(0,x.jsx)(m,{})]})},v=n(3191),j=n(4942),g=n(34499),Z=n(20729),y=n(88564),b=n(17551),w=n(74748),C=n(83213),z=(0,y.ZP)((function(t){return(0,x.jsx)(g.ZP,(0,o.Z)({component:Z.Z},t))}))((function(t){var e,n=t.theme;return e={padding:"7px 16px",borderRadius:"0 30px 30px 0",marginBottom:1,marginTop:1,color:n.palette.text.primary,width:"95%"},(0,j.Z)(e,n.breakpoints.up("md"),{paddingLeft:20,paddingRight:20}),(0,j.Z)(e,n.breakpoints.up("lg"),{paddingLeft:24,paddingRight:24}),(0,j.Z)(e,"& svg",{fontSize:"18px"}),(0,j.Z)(e,"&:hover,&:focus,&.active",{backgroundColor:(0,b.Fq)(n.palette.primary.main,.1),color:n.palette.primary.main,"& .material-icons, & svg, & .MuiTypography-root":{color:n.palette.primary.main}}),(0,j.Z)(e,"&.active",{color:n.palette.primary.main,"& .material-icons, & .MuiTypography-root":{color:n.palette.primary.main},"& .list-item-text":{"& .MuiTypography-body1":{fontWeight:u.F3.SEMI_BOLD}}}),e})),S=function(t){var e=i.useCallback((function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(w.Z,{sx:{minWidth:10,mr:3.5,"& .material-icons, & svg":{fontSize:22,color:function(t){return t.palette.text.secondary}}},children:t.icon}),(0,x.jsx)(C.Z,{primary:t.title,sx:{my:0,"& .MuiTypography-body1":{fontSize:14,mb:.5}},className:"list-item-text"})]})}),[]);return t.onAction?(0,x.jsx)(z,{component:a.Z,onClick:function(){return t.onAction(t)},children:e()}):(0,x.jsx)(z,{to:t.to,replace:!0,activeClassName:"active",children:e()})},k=n(88913),B=n(69737),I=function(t){var e=t.items,n=t.onGenerateLink,i=(0,B.f)().user;return(0,x.jsx)(v.Z,{sx:{mb:{xs:2,xl:5}},component:"nav",children:(0,x.jsx)(r.Z,{data:e.filter((function(t){return(0,k.P)(t.roles,i.role)})),ListEmptyComponent:(0,x.jsx)(h,{loading:!0,placeholder:(0,x.jsx)(s.Z,{sx:{px:{xs:4,md:5,lg:6.2}},children:(0,x.jsx)(f,{})})}),renderRow:function(t){var e=n(t),i=e;return"object"===typeof e&&(i=e.path),t.to=i,(0,x.jsx)(S,(0,o.Z)({},t))}})})}},92649:function(t,e,n){n.d(e,{Z:function(){return S},W:function(){return z}});var o=n(29439),i=n(57829),r=n(34499),s=n(37429),l=n(80836),c=n(83213),a=n(47313),d=n(26672),u=n(97890),x=n(94614),h=n(4942),p=n(57451),m=n(21212),f=n(57775),v=n(50301),j=n(86302),g=n(1084),Z=n(67375),y=n(46417),b=function(t){var e=t.isAppDrawerOpen,n=t.sidebarContent,o=(0,g.I0)();return(0,y.jsx)(v.Z,{direction:"right",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:(0,y.jsxs)(i.Z,{sx:{width:{lg:280}},children:[(0,y.jsx)(p.Z,{lgUp:!0,children:(0,y.jsx)(m.ZP,{open:e,onClose:function(){return o((0,Z.Y1)())},sx:(0,h.Z)({position:"absolute"},"& .".concat(j.Z.paper),{width:280,"& .listItem":{zIndex:1305}}),children:n})}),(0,y.jsx)(p.Z,{lgDown:!0,children:(0,y.jsx)(f.Z,{style:{height:"100%"},children:n})})]})})},w=n(19406),C=a.createContext({setTitle:function(t){},setSubtitle:function(t){},setShowBackButton:function(t){},setOnBackButtonPress:function(t){},setToolbar:function(t){},resetLayout:function(){}}),z=function(){return(0,a.useContext)(C)},S=function(t){var e=(0,a.useState)(),n=(0,o.Z)(e,2),h=n[0],p=n[1],m=(0,a.useState)(t.toolbar),f=(0,o.Z)(m,2),v=f[0],j=f[1],Z=(0,a.useState)(),z=(0,o.Z)(Z,2),S=z[0],k=z[1],B=(0,a.useState)(t.showBackButton),I=(0,o.Z)(B,2),M=I[0],P=I[1],F=(0,a.useState)(t.fullView),T=(0,o.Z)(F,2),O=T[0],D=(T[1],(0,a.useState)()),V=(0,o.Z)(D,2),A=V[0],H=V[1],L=(0,a.useState)(t.sidebarContent),N=(0,o.Z)(L,2),R=N[0],E=(N[1],(0,a.useState)(t.contentPadding)),W=(0,o.Z)(E,2),_=W[0],U=(W[1],(0,u.s0)()),G=(0,a.useCallback)((function(){U(-1)}),[history]),q=((0,g.I0)(),(0,g.v9)((function(t){return t.common})).isAppDrawerOpen),Q=(0,w.l5)().footer,Y=((0,w.l5)().navStyle,null!==h&&void 0!==h?h:t.title),$=null!==S&&void 0!==S?S:t.subTitle,J=null!==v&&void 0!==v?v:t.toolbar,K=null!==M&&void 0!==M?M:t.showBackButton,X=null!==A&&void 0!==A?A:t.onBackButtonPress;return(0,a.useEffect)((function(){document.title=null!==Y&&void 0!==Y?Y:"AFresto System Indonesia"}),[Y]),(0,y.jsx)(C.Provider,{value:{setTitle:p,setSubtitle:k,setOnBackButtonPress:H,setShowBackButton:P,setToolbar:j,resetLayout:function(){p(void 0),k(void 0),P(void 0),H(void 0),j(void 0)}},children:(0,y.jsxs)(i.Z,{children:[Y&&(0,y.jsxs)(r.ZP,{component:"div",sx:{backgroundColor:"#fff",borderBottom:"1px solid #ccc",position:"sticky",top:"70px",zIndex:99},secondaryAction:J,children:[K&&(0,y.jsx)(s.Z,{children:(0,y.jsx)(l.Z,{onClick:null!==X&&void 0!==X?X:G,children:(0,y.jsx)(d.x_l,{})})}),(0,y.jsx)(c.Z,{primary:Y,primaryTypographyProps:{fontSize:20},secondary:$})]}),(0,y.jsx)(x.uc,{animation:"transition.slideUpIn",delay:200,children:(0,y.jsx)(i.Z,{sx:{p:null!==_&&void 0!==_?_:{xs:5,md:7.5,xl:12.5}},children:R?(0,y.jsxs)(i.Z,{sx:{display:"flex"},children:[R?(0,y.jsx)(i.Z,{children:(0,y.jsx)(b,{isAppDrawerOpen:q,footer:Q,fullView:O,sidebarContent:R})}):null,(0,y.jsx)(i.Z,{sx:{display:"flex",flexDirection:"column",width:{xs:"100%",lg:"calc(100% - ".concat(O?0:280,"px)")},pl:{lg:O?0:8}},children:t.children})]}):t.children})})]})})}},19106:function(t,e,n){var o=n(54750),i=n(46417);e.Z=(0,o.Z)((0,i.jsx)("path",{d:"M14.67 5v6.5H9.33V5h5.34zm1 6.5H21V5h-5.33v6.5zm-1 7.5v-6.5H9.33V19h5.34zm1-6.5V19H21v-6.5h-5.33zm-7.34 0H3V19h5.33v-6.5zm0-1V5H3v6.5h5.33z"}),"ViewModule")}}]);