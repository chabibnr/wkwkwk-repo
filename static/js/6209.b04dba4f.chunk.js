"use strict";(self.webpackChunkcra_ts_5=self.webpackChunkcra_ts_5||[]).push([[6209],{15882:function(e,n,i){i.r(n),i.d(n,{default:function(){return B}});var a=i(47313),s=i(92649),r=i(57829),t=i(69625),u=i(97741),l=i(6961),o=i(29417),m=i(20791),d=i(7410),c=i(3463),h=i(56417),v=i(16330),f=i(67375),S=i(1084),b=i(1413),x=i(29439),j=i(46417),Z=function(e){var n=a.useState([]),i=(0,x.Z)(n,2),s=i[0],r=i[1];a.useEffect((function(){t()}),[]);var t=function(){v.xJ.findAll({page:0}).then((function(e){var n;r(null!==(n=e.items)&&void 0!==n?n:[])}))};return(0,j.jsx)(o.Ph,(0,b.Z)((0,b.Z)({},e),{},{children:s.map((function(n,i){return(0,j.jsx)(u.Z,{value:n.id,children:n.name},"".concat(e.name,"-select-option-").concat(i))}))}))},_=i(97890),p=c.Ry({username:c.Z_().required("Username harus diisi"),email:c.Z_().email("Masukan format email yang benar").required("Email harus diisi"),password:c.Z_().required("Kata sandi harus diisi"),firstname:c.Z_().required("Nama Depan harus diisi"),surname:c.Z_().required("Nama Belakang harus diisi"),gender:c.Z_().required("Jenis Kelamin harus dipilih")}),g=function(e){var n=(0,S.I0)(),i=(0,_.s0)(),a=new h.O(v.yH,{onSaveSuccess:function(e){n((0,f.SR)()),n((0,f.PV)("Pegawai telah ditambahkan")),i(-1)},onSaveFailed:function(){n((0,f.SR)()),n((0,f.Tl)("Pegawai gagal ditambahkan,<br/>username atau email mungkin sudah digunakan."))}});return(0,j.jsx)(d.J9,{initialValues:e.model,validationSchema:p,onSubmit:function(e,n){return a.onSubmit(e,n)},children:function(e){var n=e.isSubmitting;return(0,j.jsx)(r.Z,{component:d.l0,children:(0,j.jsxs)(t.Z,{children:[(0,j.jsx)(r.Z,{mb:8,children:(0,j.jsx)(o.nv,{name:"username",label:"Username"})}),(0,j.jsx)(r.Z,{mb:8,children:(0,j.jsx)(o.nv,{name:"email",label:"Email"})}),(0,j.jsx)(r.Z,{mb:8,children:(0,j.jsx)(o.nv,{name:"password",label:"Password",type:"password"})}),(0,j.jsx)(r.Z,{mb:8,children:(0,j.jsx)(o.nv,{name:"firstname",label:"Nama Depan"})}),(0,j.jsx)(r.Z,{mb:8,children:(0,j.jsx)(o.nv,{name:"surname",label:"Nama Belakang"})}),(0,j.jsx)(r.Z,{mb:8,children:(0,j.jsxs)(o.Ph,{name:"gender",label:"Jenis Kelamin",fullWidth:!0,children:[(0,j.jsx)(u.Z,{value:"male",children:"Laki-laki"}),(0,j.jsx)(u.Z,{value:"female",children:"Perempuan"})]})}),(0,j.jsx)(r.Z,{mb:8,children:(0,j.jsx)(Z,{name:"role",label:"Pilih Jabatan",fullWidth:!0})}),(0,j.jsx)(l.Z,{children:(0,j.jsx)(m.M,{isSubmitting:n,text:"Simpan"})})]})})}})},k=i(20466),w=i(94614),B=function(){return(0,j.jsx)(s.Z,{showBackButton:!0,title:"Tambah Pegawai Baru",children:(0,j.jsx)(w.CP,{children:(0,j.jsx)(g,{model:new k.RB})})})}},56417:function(e,n,i){i.d(n,{O:function(){return r}});var a=i(15671),s=i(43144),r=function(){function e(n,i,s){(0,a.Z)(this,e),this.repository=void 0,this._onSaveSuccess=void 0,this._onSaveFailed=void 0,this._onBeforeSubmit=void 0,this.repository=n,this._onSaveSuccess=i.onSaveSuccess,this._onSaveFailed=i.onSaveFailed,this._onBeforeSubmit=null===s||void 0===s?void 0:s.onBeforeSubmit}return(0,s.Z)(e,[{key:"submitToServer",value:function(e){return this._onBeforeSubmit&&(e=this._onBeforeSubmit(e)),e.id?this.repository.update(e):this.repository.create(e)}},{key:"onSubmit",value:function(e,n,i){var a=this,s=n.setSubmitting,r=n.resetForm;s(!0),this.submitToServer(e).then((function(e){e.status?(!0===i&&r(),a._onSaveSuccess&&a._onSaveSuccess(e.item)):a._onSaveFailed&&a._onSaveFailed(),s(!1)}))}}]),e}()}}]);