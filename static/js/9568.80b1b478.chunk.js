"use strict";(self.webpackChunkcra_ts_5=self.webpackChunkcra_ts_5||[]).push([[9568],{76514:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var a=t(1413),i=t(29439),o=t(47313),r=t(92649),l=t(71003),s=t(69625),u=t(57775),c=t(40490),d=t.n(c),f=t(16330),h=t(20466),m=t(67375),v=t(1084),S=t(2682),j=t(33187),x=t(7410),p=t(3463),b=t(57829),Z=t(6961),g=t(20791),C=t(29417),k=t(56417),M=t(46417),P=p.Ry({name:p.Z_().required("Nama Pelajaran harus diisi"),codeName:p.Z_().test("len","Kode harus 3 karakter",(function(e){return 3===e.length})).required("Kode harus diisi")}),_=function(e){var n=new k.O(f.JC,{onSaveSuccess:e.onSaveSuccess,onSaveFailed:e.onSaveFailed});return(0,M.jsx)(M.Fragment,{children:(0,M.jsx)(x.J9,{initialValues:e.model,validationSchema:P,onSubmit:function(e,t){return n.onSubmit(e,t)},children:function(n){var t=n.isSubmitting;return(0,M.jsxs)(x.l0,{children:[(0,M.jsx)(b.Z,{mb:4,children:(0,M.jsx)(C.nv,{name:"name",variant:"filled",label:"Nama Pelajaran"})}),(0,M.jsx)(b.Z,{mb:4,children:(0,M.jsx)(C.nv,{name:"codeName",variant:"filled",label:"Kode"})}),(0,M.jsx)(b.Z,{mt:4,children:(0,M.jsxs)(Z.Z,{children:[(0,M.jsx)(l.Z,{color:"secondary",onClick:e.onCancel,disabled:t,variant:"text",disableElevation:!0,children:"Batal"}),(0,M.jsx)(g.M,{isSubmitting:t,text:"Simpan"})]})})]})}})})},y=t(14997),F=function(){var e=(0,o.useState)(null),n=(0,i.Z)(e,2),t=n[0],c=n[1],x=(0,v.I0)(),p=o.useRef(),b=o.useCallback((function(e,n){e.formMode=n,c(e)}),[]),Z=o.useCallback((function(e){x((0,m.PV)("Mata Pelajaran berhasil disimpan")),p.current.onQueryChange(),C()}),[]),g=o.useCallback((function(){x((0,m.Tl)("Mata Pelajaran gagal disimpan"))}),[]),C=o.useCallback((function(){c(null)}),[]),k=o.useCallback((function(){return f.JC.remove(t).then((function(e){e.status?(p.current.onQueryChange(),x((0,m.PV)("Mata Pelajaran telah dihapus"))):x((0,m.Tl)("Mata Pelajaran gagal dihapus"))}))}),[t]);return(0,M.jsxs)(r.Z,{title:"Pengaturan Mata Pelajaran",toolbar:(0,M.jsx)(l.Z,{variant:"contained",onClick:function(){return c(new h.T0)},children:"Tambah Mata Pelajaran"}),children:[t&&("create"==t.formMode||"edit"==t.formMode)&&(0,M.jsx)(j.Z,{open:!0,title:t.isNewRecord?"Tambah Mata Pelajaran":"Perbarui Mata Pelajaran",children:(0,M.jsx)(s.Z,{children:(0,M.jsx)(_,{model:t,onCancel:C,onSaveFailed:g,onSaveSuccess:Z})})}),t&&"delete"==t.formMode&&(0,M.jsx)(y.Z,{open:!0,onDeny:C,onConfirm:k,dialogTitle:"Hapus Mata Pelajaran",title:"Yakin ingin menghapus Mata Pelajaran <strong>".concat(t.name,"</strong> ?")}),(0,M.jsx)(d(),{title:"",tableRef:p,components:{Toolbar:function(){return(0,M.jsx)(M.Fragment,{})},Container:function(e){return(0,M.jsx)(u.Z,(0,a.Z)({},e))}},options:{search:!1,pageSize:10,sorting:!1,draggable:!1,actionsColumnIndex:-1},data:function(e){return new Promise((function(n,t){f.JC.findAll({page:e.page+1}).then((function(e){e.status?n({data:e.items,page:e.page-1,totalCount:e.totalCount}):n({data:[],page:0,totalCount:0})}))}))},columns:[{title:"Name",field:"name"},{title:"Kode",field:"codeName"},{title:"Dibuat",field:"createdAt",render:function(e){return(0,S.ss)(e.createdAt,"LL")}},{title:"Diperbarui",field:"updatedAt",render:function(e){return(0,S.ss)(e.updatedAt,"LL")}}],actions:[{icon:"create",tooltip:"Edit Mata Pelajaran",onClick:function(e,n){n instanceof h.T0&&b(n,"edit"),x((0,m.SR)())}},{icon:"delete",tooltip:"Hapus Mata Pelajaran",iconProps:{color:"error"},onClick:function(e,n){n instanceof h.T0&&b(n,"delete")}}]})]})}},14997:function(e,n,t){var a=t(29439),i=t(1413),o=t(47313),r=t(71003),l=t(1001),s=t(50301),u=t(94469),c=t(33604),d=t(47605),f=t(69625),h=t(6961),m=t(69680),v=t(20791),S=t(65476),j=t(46417),x=o.forwardRef((function(e,n){return(0,j.jsx)(s.Z,(0,i.Z)({direction:"up",ref:n},e))}));n.Z=function(e){var n=e.open,t=e.onDeny,i=e.onConfirm,s=e.title,p=e.dialogTitle,b=o.useState(!1),Z=(0,a.Z)(b,2),g=Z[0],C=Z[1];return(0,j.jsxs)(u.Z,{TransitionComponent:x,open:n,onClose:function(){return t(!1)},children:[(0,j.jsx)(c.Z,{children:(0,j.jsx)(d.Z,{component:"h4",variant:"h4",sx:{mb:3,fontWeight:m.F3.SEMI_BOLD},id:"alert-dialog-title",children:p})}),(0,j.jsx)(f.Z,{sx:{color:"text.secondary",fontSize:14},id:"alert-dialog-description",children:(0,S.ZP)("".concat(s))}),(0,j.jsxs)(h.Z,{sx:{pb:5,px:6},children:[(0,j.jsx)(r.Z,{variant:"outlined",sx:{fontWeight:m.F3.MEDIUM,mr:4},onClick:function(){return t(!1)},color:"secondary",children:(0,j.jsx)(l.Z,{id:"common.no"})}),(0,j.jsx)(v.M,{isSubmitting:g,onClick:function(){C(!0),i().finally((function(){C(!1),t(!1)}))},text:"Lanjutkan"})]})]})}},33187:function(e,n,t){var a=t(1413),i=(t(47313),t(19860)),o=t(24813),r=t(94469),l=t(33604),s=t(46417);n.Z=function(e){var n=(0,i.Z)(),t=(0,o.Z)(n.breakpoints.down("sm"));return(0,s.jsxs)(r.Z,(0,a.Z)((0,a.Z)({fullWidth:!0,fullScreen:t,maxWidth:"sm"},e),{},{children:[e.title&&(0,s.jsx)(l.Z,{children:e.title}),e.children]}))}},56417:function(e,n,t){t.d(n,{O:function(){return o}});var a=t(15671),i=t(43144),o=function(){function e(n,t,i){(0,a.Z)(this,e),this.repository=void 0,this._onSaveSuccess=void 0,this._onSaveFailed=void 0,this._onBeforeSubmit=void 0,this.repository=n,this._onSaveSuccess=t.onSaveSuccess,this._onSaveFailed=t.onSaveFailed,this._onBeforeSubmit=null===i||void 0===i?void 0:i.onBeforeSubmit}return(0,i.Z)(e,[{key:"submitToServer",value:function(e){return this._onBeforeSubmit&&(e=this._onBeforeSubmit(e)),e.id?this.repository.update(e):this.repository.create(e)}},{key:"onSubmit",value:function(e,n,t){var a=this,i=n.setSubmitting,o=n.resetForm;i(!0),this.submitToServer(e).then((function(e){e.status?(!0===t&&o(),a._onSaveSuccess&&a._onSaveSuccess(e.item)):a._onSaveFailed&&a._onSaveFailed(),i(!1)}))}}]),e}()}}]);