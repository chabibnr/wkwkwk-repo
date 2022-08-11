"use strict";(self.webpackChunkcra_ts_5=self.webpackChunkcra_ts_5||[]).push([[9568],{76514:function(n,e,a){a.r(e),a.d(e,{default:function(){return w}});var t=a(1413),i=a(29439),r=a(47313),o=a(92649),l=a(71003),c=a(69625),s=a(57775),u=a(40490),d=a.n(u),f=a(16330),m=a(20466),h=a(67375),j=a(1084),x=a(2682),p=a(33187),Z=a(7410),g=a(3463),b=a(57829),C=a(6961),v=a(20791),S=a(29417),M=a(56417),P=a(46417),k=g.Ry({name:g.Z_().required("Nama Pelajaran harus diisi"),codeName:g.Z_().test("len","Kode harus 3 karakter",(function(n){return 3===n.length})).required("Kode harus diisi")}),T=function(n){var e=new M.O(f.JC,{onSaveSuccess:n.onSaveSuccess,onSaveFailed:n.onSaveFailed});return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(Z.J9,{initialValues:n.model,validationSchema:k,onSubmit:function(n,a){return e.onSubmit(n,a)},children:function(e){var a=e.isSubmitting;return(0,P.jsxs)(Z.l0,{children:[(0,P.jsx)(b.Z,{mb:4,children:(0,P.jsx)(S.nv,{name:"name",variant:"filled",label:"Nama Pelajaran"})}),(0,P.jsx)(b.Z,{mb:4,children:(0,P.jsx)(S.nv,{name:"codeName",variant:"filled",label:"Kode"})}),(0,P.jsx)(b.Z,{mt:4,children:(0,P.jsxs)(C.Z,{children:[(0,P.jsx)(l.Z,{color:"secondary",onClick:n.onCancel,disabled:a,variant:"text",disableElevation:!0,children:"Batal"}),(0,P.jsx)(v.M,{isSubmitting:a,text:"Simpan"})]})})]})}})})},y=a(14997),w=function(){var n=(0,r.useState)(null),e=(0,i.Z)(n,2),a=e[0],u=e[1],Z=(0,j.I0)(),g=r.useRef(),b=r.useCallback((function(n,e){n.formMode=e,u(n)}),[]),C=r.useCallback((function(n){Z((0,h.PV)("Mata Pelajaran berhasil disimpan")),g.current.onQueryChange(),S()}),[]),v=r.useCallback((function(){Z((0,h.Tl)("Mata Pelajaran gagal disimpan"))}),[]),S=r.useCallback((function(){u(null)}),[]),M=r.useCallback((function(){return f.JC.remove(a).then((function(n){n.status?(g.current.onQueryChange(),Z((0,h.PV)("Mata Pelajaran telah dihapus"))):Z((0,h.Tl)("Mata Pelajaran gagal dihapus"))}))}),[a]);return(0,P.jsxs)(o.Z,{title:"Pengaturan Mata Pelajaran",toolbar:(0,P.jsx)(l.Z,{variant:"contained",onClick:function(){return u(new m.T0)},children:"Tambah Mata Pelajaran"}),children:[a&&("create"==a.formMode||"edit"==a.formMode)&&(0,P.jsx)(p.Z,{open:!0,title:a.isNewRecord?"Tambah Mata Pelajaran":"Perbarui Mata Pelajaran",children:(0,P.jsx)(c.Z,{children:(0,P.jsx)(T,{model:a,onCancel:S,onSaveFailed:v,onSaveSuccess:C})})}),a&&"delete"==a.formMode&&(0,P.jsx)(y.Z,{open:!0,onDeny:S,onConfirm:M,dialogTitle:"Hapus Mata Pelajaran",title:"Yakin ingin menghapus Mata Pelajaran <strong>".concat(a.name,"</strong> ?")}),(0,P.jsx)(d(),{title:"",tableRef:g,components:{Toolbar:function(){return(0,P.jsx)(P.Fragment,{})},Container:function(n){return(0,P.jsx)(s.Z,(0,t.Z)({},n))}},options:{search:!1,pageSize:10,sorting:!1,draggable:!1,actionsColumnIndex:-1},data:function(n){return new Promise((function(e,a){f.JC.findAll({page:n.page+1}).then((function(n){n.status?e({data:n.items,page:n.page-1,totalCount:n.totalCount}):e({data:[],page:0,totalCount:0})}))}))},columns:[{title:"Name",field:"name"},{title:"Kode",field:"codeName"},{title:"Dibuat",field:"createdAt",render:function(n){return(0,x.ss)(n.createdAt,"LL")}},{title:"Diperbarui",field:"updatedAt",render:function(n){return(0,x.ss)(n.updatedAt,"LL")}}],actions:[{icon:"create",tooltip:"Edit Mata Pelajaran",onClick:function(n,e){e instanceof m.T0&&b(e,"edit"),Z((0,h.SR)())}},{icon:"delete",tooltip:"Hapus Mata Pelajaran",iconProps:{color:"error"},onClick:function(n,e){e instanceof m.T0&&b(e,"delete")}}]})]})}},14997:function(n,e,a){var t=a(29439),i=a(1413),r=a(47313),o=a(71003),l=a(1001),c=a(50301),s=a(94469),u=a(33604),d=a(47605),f=a(69625),m=a(6961),h=a(69680),j=a(20791),x=a(65476),p=a(46417),Z=r.forwardRef((function(n,e){return(0,p.jsx)(c.Z,(0,i.Z)({direction:"up",ref:e},n))}));e.Z=function(n){var e=n.open,a=n.onDeny,i=n.onConfirm,c=n.title,g=n.dialogTitle,b=r.useState(!1),C=(0,t.Z)(b,2),v=C[0],S=C[1];return(0,p.jsxs)(s.Z,{TransitionComponent:Z,open:e,onClose:function(){return a(!1)},children:[(0,p.jsx)(u.Z,{children:(0,p.jsx)(d.Z,{component:"h4",variant:"h4",sx:{mb:3,fontWeight:h.F3.SEMI_BOLD},id:"alert-dialog-title",children:g})}),(0,p.jsx)(f.Z,{sx:{color:"text.secondary",fontSize:14},id:"alert-dialog-description",children:(0,x.ZP)("".concat(c))}),(0,p.jsxs)(m.Z,{sx:{pb:5,px:6},children:[(0,p.jsx)(o.Z,{variant:"outlined",sx:{fontWeight:h.F3.MEDIUM,mr:4},onClick:function(){return a(!1)},color:"secondary",children:(0,p.jsx)(l.Z,{id:"common.no"})}),(0,p.jsx)(j.M,{isSubmitting:v,onClick:function(){S(!0),i().finally((function(){S(!1),a(!1)}))},text:"Lanjutkan"})]})]})}},33187:function(n,e,a){var t=a(1413),i=(a(47313),a(19860)),r=a(24813),o=a(94469),l=a(33604),c=a(46417);e.Z=function(n){var e=(0,i.Z)(),a=(0,r.Z)(e.breakpoints.down("sm"));return(0,c.jsxs)(o.Z,(0,t.Z)((0,t.Z)({fullWidth:!0,fullScreen:a,maxWidth:"sm"},n),{},{children:[n.title&&(0,c.jsx)(l.Z,{children:n.title}),n.children]}))}}}]);