(this["webpackJsonpotp-generation"]=this["webpackJsonpotp-generation"]||[]).push([[0],{135:function(e,t,a){e.exports=a(274)},140:function(e,t,a){},274:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),i=(a(140),a(24)),l=a(29),s=a(38),u=a(37),m=(a(95),a(96),a(71)),p=a(9),h={apiKey:"AIzaSyBRpn8m9yxrJKeZxFsCd3hkr-vdMQ4zGNQ",authDomain:"otpgeneration-14305.firebaseapp.com",databaseURL:"https://otpgeneration-14305.firebaseio.com",projectId:"otpgeneration-14305",storageBucket:"otpgeneration-14305.appspot.com",messagingSenderId:"779376225855",appId:"1:779376225855:web:ec0b4e5283d5de2b29128a",measurementId:"G-SNC2VC17LX"},b=a(117),d=a(79),f=a.n(d),E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=(f.a.initializeApp(h),{signInSuccessUrl:"/success-otp",signInOptions:[f.a.auth.PhoneAuthProvider.PROVIDER_ID],tosUrl:"/success-otp",callbacks:{signInSuccessWithAuthResult:function(t,a){e.props.history.push("/success-otp")}}});new b.a.AuthUI(f.a.auth()).start("#firebaseui-auth-container",t)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"firebaseui-auth-container"}))}}]),a}(n.Component),y=Object(p.f)(E),g=a(278),v=a(279),O=a(280),I=a(281),j=a(92),w=a(56),k=a(33),N=a(282),P=a(283),C=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).submitPhoneNumberAuth=function(){e.props.history.replace("/otp-auth")},e.submitPhoneNumberAuthDB=function(){},e}return Object(l.a)(a,[{key:"render",value:function(){var e={wrapperCol:{offset:6,span:12}};return r.a.createElement("div",null,r.a.createElement(g.a,{title:"Firebase Otp Authentication"},r.a.createElement(v.a,Object.assign({},{labelCol:{span:8},wrapperCol:{span:12}},{name:"basic",initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(v.a.Item,{label:"Number",name:"number",rules:[{required:!0,message:"Please input your number!"}]},r.a.createElement(O.a,{style:{width:"100%"}})),r.a.createElement(v.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(I.a.Password,null)),r.a.createElement(v.a.Item,e,r.a.createElement(j.a,{style:{width:"100%"},type:"primary",htmlType:"submit",onClick:this.submitPhoneNumberAuthDB},r.a.createElement(N.a,null)," SIGN IN WITH DB"))),r.a.createElement(w.a,null,r.a.createElement(k.a,{span:12,offset:6},r.a.createElement(j.a,{danger:!0,style:{width:"100%"},type:"primary",htmlType:"submit",onClick:this.submitPhoneNumberAuth},r.a.createElement(P.a,null)," SIGN IN USING YOUR PHONE NUMBER")))))}}]),a}(r.a.Component),A=Object(p.f)(C),S=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Phone Login Successful"))}}]),a}(n.Component),B=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/otp-auth"},r.a.createElement(y,null)),r.a.createElement(p.a,{path:"/success-otp"},r.a.createElement(S,null)),r.a.createElement(p.a,{path:"/"},r.a.createElement(A,null)))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},96:function(e,t,a){}},[[135,1,2]]]);
//# sourceMappingURL=main.ae7f6390.chunk.js.map