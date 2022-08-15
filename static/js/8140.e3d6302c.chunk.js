"use strict";(self.webpackChunkcra_ts_5=self.webpackChunkcra_ts_5||[]).push([[8140],{39246:function(a,n,s){s.r(n),s.d(n,{default:function(){return y}});var i=s(47313),t=s(14924),e=s(57829),r=s(29417),d=s(20791),o=s(7410),l=s(3463),u=s(44894),c=s(16330),f=s(1084),m=s(67375),w=s(69737),h=s(88913),P=s(46417),p=l.Ry({oldPassword:l.Z_().required("Kata sandi lama harus diisi"),newPassword:l.Z_().required("Kata sandi baru harus diisi").min(8,"Katasandi paling sedikit 8 karakter"),confirmPassword:l.Z_().required("Konfirmasi kata sandi harus diisi").oneOf([l.iH("newPassword")],"Konfirmasi kata sandi harus sama")}),b=function(a){var n=a.accountId,s=a.accountType,i=(0,w.f)().user,l=(0,f.I0)(),b=function(){return(0,h.P)(u.lg.Admin,null===i||void 0===i?void 0:i.role)&&i.uid!==n};return(0,P.jsx)(t.Z,{children:(0,P.jsx)(o.J9,{initialValues:{oldPassword:b()?"-":"",newPassword:"",confirmPassword:""},validationSchema:p,onSubmit:function(a,i){var t=i.setSubmitting,e=i.resetForm;l((0,m.SR)()),b()?c.P_.updatePassword("student"===s?"student":"employee",n,a.newPassword).then((function(a){a.status?(l((0,m.PV)("Katasandi telah diganti")),e()):l((0,m.Tl)("Katasandi gagal diganti"))})).finally((function(){t(!1)})):c.P_.changeMyPassword(a.oldPassword,a.newPassword).then((function(a){a.status?(l((0,m.PV)("Katasandi telah diganti")),e()):l((0,m.Tl)("Katasandi lama salah"))})).finally((function(){t(!1)}))},children:function(a){var n=a.isSubmitting;return(0,P.jsxs)(e.Z,{component:o.l0,children:[(0,P.jsx)(e.Z,{mb:8,display:b()?"none":"block",children:(0,P.jsx)(r.nv,{variant:"filled",type:"password",name:"oldPassword",label:"Kata sandi lama"})}),(0,P.jsx)(e.Z,{mb:8,children:(0,P.jsx)(r.nv,{variant:"filled",type:"password",name:"newPassword",label:"Kata sandi baru"})}),(0,P.jsx)(e.Z,{mb:8,children:(0,P.jsx)(r.nv,{variant:"filled",type:"password",name:"confirmPassword",label:"Konfirmasi kata sandi baru"})}),(0,P.jsx)(e.Z,{children:(0,P.jsx)(d.M,{isSubmitting:n,text:"Simpan"})})]})}})})},v=s(92649),x=s(97890),y=function(a){var n=(0,v.W)().setTitle,s=(0,x.UO)().employeeId;return i.useEffect((function(){n("Ganti Password")}),[]),(0,P.jsx)(b,{accountId:s,accountType:"employee"})}}}]);