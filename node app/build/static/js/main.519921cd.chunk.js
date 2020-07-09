(this.webpackJsonpmystore=this.webpackJsonpmystore||[]).push([[0],{24:function(e,t,a){},39:function(e,t,a){e.exports=a(71)},44:function(e,t,a){},62:function(e,t,a){},66:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(35),o=a.n(l),c=(a(44),a(24),a(9)),s=a(10),u=a(12),i=a(11),m=a(72),h=a(76),d=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={jobs:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://129.173.67.163:1337/getJobsParts").then((function(e){return e.json()})).then((function(t){e.setState({jobs:t}),console.log(t)}),(function(e){console.log(e)}))}},{key:"renderTable",value:function(){var e=this.state.jobs;return console.log(e),e.length>0?r.a.createElement(m.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Job"),r.a.createElement("th",null,"Parts"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,this.renderJobs())):r.a.createElement("div",null,"No Jobs")}},{key:"orderJob",value:function(e){console.log(e),localStorage.setItem("jobID",e.jobName),console.log("jobID : "+e.jobName),this.props.history.push("/orderParts")}},{key:"renderJobs",value:function(){var e=this,t=this.state.jobs;return t.length>0?t.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",null,t.jobName),r.a.createElement("td",null,t.parts),r.a.createElement("td",null,r.a.createElement(h.a,{variant:"dark",onClick:function(){return e.orderJob(t)}},"Get Job"))))})):r.a.createElement("div",null,"No jobs")}},{key:"filterJobs",value:function(){var e=this;console.log(this.refs.job.value),this.setState({jobs:this.state.jobs.filter((function(t){return t.jobName===e.refs.job.value}))});var t={jobName:this.refs.job.value};fetch("http://cloud6a-env.eba-t7ffpjmv.us-east-1.elasticbeanstalk.com/companyz/insertSearch",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e&&console.log("search logged successfully")}))}},{key:"reset",value:function(){window.location.reload()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"inner"},r.a.createElement("h2",null,"Jobs"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"text",ref:"job",placeholder:"Enter Job Name","aria-label":"Search"})," ","    ",r.a.createElement(h.a,{variant:"dark",type:"submit",onClick:function(){return e.filterJobs()}},"Search"),"    ",r.a.createElement(h.a,{variant:"dark",onClick:function(){return e.reset()}},"Reset"),r.a.createElement("br",null),r.a.createElement("br",null),this.renderTable()))}}]),a}(n.Component),b=a(14),f=a(20),p=a.n(f),E=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).constructFinalArray=e.constructFinalArray.bind(Object(b.a)(e)),e.state={jobDetails:[],tableData:[],partDetails:[],jobs:[],JobID:localStorage.getItem("jobID")},e}return Object(s.a)(a,[{key:"constructFinalArray",value:function(e){var t=this,a="http://129.173.67.163:1337/getJobsById/"+e,n=[];p.a.get(a).then((function(e){e.data.forEach((function(e){var a="http://129.173.67.174:1337/getPartsById/"+e.partId;p.a.get(a).then((function(a){var r={};r.qoh=a.data[0].qoh,r.partName=a.data[0].partName,r.partId=e.partId,r.qty=e.qty,r.id=e.id,n.push(r),t.setState({tableData:n})}),(function(e){console.log(e)}))})),console.log(n)}),(function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.constructFinalArray(this.state.JobID)}},{key:"renderTable",value:function(){return console.log(this.state.tableData),this.state.tableData?r.a.createElement(m.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Job ID"),r.a.createElement("th",null,"Part ID"),r.a.createElement("th",null,"Part Name"),r.a.createElement("th",null,"Required Quantity"),r.a.createElement("th",null,"Available Quantity"))),r.a.createElement("tbody",null,this.renderJobs())):null}},{key:"sendToLogin",value:function(){localStorage.setItem("jobDetails",JSON.stringify(this.state.tableData)),localStorage.removeItem("logInResults"),this.props.history.push("/login")}},{key:"isQuantityValid",value:function(){var e={},t=this.state.tableData;if(!t)return!0;var a=!1;try{t.forEach((function(t){if(t.qoh<t.qty)throw e}))}catch(n){a=!0}return console.log("Returning "+a),a}},{key:"renderJobs",value:function(){var e=this.state.tableData;return console.log(e),e.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.partId),r.a.createElement("td",null,e.partName),r.a.createElement("td",null,e.qty),r.a.createElement("td",null,e.qoh)))}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"inner"},r.a.createElement("h1",null,"Job Details"),r.a.createElement("br",null),r.a.createElement("br",null),this.renderTable(),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(h.a,{size:"sm",variant:"dark",disabled:this.isQuantityValid(),type:"submit",onClick:function(){return e.sendToLogin()}},"Login to Confirm order")))}}]),a}(n.Component),v=a(73),g=a(75),y=(a(62),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={username:"",password:"",fields:{},errors:{}},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.loginForm=e.loginForm.bind(Object(b.a)(e)),e.fetchAPI=e.fetchAPI.bind(Object(b.a)(e)),e}return Object(s.a)(a,[{key:"handleChange",value:function(e){var t=this.state.fields;t[e.target.name]=e.target.value,this.setState({fields:t})}},{key:"loginForm",value:function(e){if(e.preventDefault(),this.validateForm()){console.log("fields"+this.refs.username.value);var t={username:"",password:""};this.setState({fields:t}),console.log(window.getSelection().toString()),this.fetchAPI(this.refs.username.value,this.refs.password.value)}}},{key:"fetchAPI",value:function(e,t){var a=this;console.log("Username"+e),console.log("Username"+t),fetch("http://cloud6a-env.eba-t7ffpjmv.us-east-1.elasticbeanstalk.com/companyz/users/".concat(e,"/").concat(t)).then((function(e){return e.json()})).then((function(e){console.log("Line 12"+e.uerId),e.uerId?(console.log("TResult of response   "+e.uerId),localStorage.setItem("user",e.uerId),a.props.history.push("/afterLogin")):(console.log("Failure"),localStorage.setItem("logInResults","failure"),alert("Invalid Credentials"))}))}},{key:"validateForm",value:function(){var e=this.state.fields,t={},a=!0;return e.password||(a=!1,t.password="password cannot be empty"),e.username||(a=!1,t.username="username cannot be empty"),this.setState({errors:t}),a}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{className:"login"},r.a.createElement(g.a,{className:"loginForm"},r.a.createElement("br",null),r.a.createElement("h1",null,"Login"),r.a.createElement("br",null),r.a.createElement("form",{method:"post",name:"loginForm",onSubmit:this.loginForm},r.a.createElement("table",null," ",r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement("label",null,"Username")," "),r.a.createElement("td",null," ",r.a.createElement("input",{type:"text",name:"username",ref:"username",onChange:this.handleChange,placeholder:"Enter your username"}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.username))),r.a.createElement("br",null),r.a.createElement("tr",null," ",r.a.createElement("td",null," ",r.a.createElement("label",null,"Password")),r.a.createElement("td",null," ",r.a.createElement("input",{type:"password",name:"password",ref:"password",onChange:this.handleChange,placeholder:"Enter your password"}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.password))),r.a.createElement("br",null),r.a.createElement("tr",null," ",r.a.createElement("input",{type:"submit",className:"btn btn-success ",value:"Login"}))," ")))))}}]),a}(n.Component)),j=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"printUser",value:function(){var e=this;console.log("Called print user");var t=localStorage.getItem("user"),a=JSON.parse(localStorage.getItem("jobDetails"));console.log("Job Details Array: "+a),console.log("User name--\x3e"+t);var n={};n.userId=t,n.partsToBook=a,console.log(n),fetch("http://cloud6a-env.eba-t7ffpjmv.us-east-1.elasticbeanstalk.com/companyz/book",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)}).then((function(t){t&&(200==t.status?e.props.history.push("/bookSuccess"):e.props.history.push("/bookFailure"))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Successfully Logged In"),r.a.createElement("p",null,"Do you want to confirm Order?"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(h.a,{size:"sm",variant:"dark",type:"submit",onClick:function(){return e.printUser()}},"Confirm booking"))}}]),a}(r.a.Component),k=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Successfully Booked your Job order"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}}]),a}(r.a.Component),O=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Your Job Order cannot be completed since you have already ordered it before!! Try ordering other Jobs"),r.a.createElement("a",{href:"/"},"Home"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}}]),a}(r.a.Component),I=a(74),S=(a(66),function(){return r.a.createElement(I.a,{fluid:!0,className:"jumbo"},r.a.createElement(v.a,null,r.a.createElement("div",{className:"welcomeDiv"},r.a.createElement("p",{className:"welcomeP"},"Welcome to CompanyZ!"))))}),J=a(38),w=a(5);var N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(J.a,null,r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/",component:d}),r.a.createElement(w.a,{exact:!0,path:"/login",component:y}),r.a.createElement(w.a,{exact:!0,path:"/orderParts",component:E}),r.a.createElement(w.a,{exact:!0,path:"/afterlogin",component:j}),r.a.createElement(w.a,{exact:!0,path:"/bookSuccess",component:k}),r.a.createElement(w.a,{exact:!0,path:"/bookFailure",component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(70);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.519921cd.chunk.js.map