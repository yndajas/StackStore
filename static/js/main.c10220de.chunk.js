(this.webpackJsonpStackStore=this.webpackJsonpStackStore||[]).push([[0],{40:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),r=n(19),c=n.n(r),o=n(16),i=n(7),u=n(25),l=n(24),j=n(26),b=n.n(j),d=n(27),h=n(28),p=n(10),O=n(3),f=n(4),x=n(6),m=n(5),v=(n(40),n(0)),g=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(v.jsx)("button",{name:"log-out",className:"btn btn-primary",onClick:this.props.logOut,children:"Log out"})}}]),n}(a.a.Component),y=Object(i.b)(null,{logOut:function(){return function(e){e({type:"LOG_OUT"})}}})(g),k=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(v.jsx)("header",{children:Object(v.jsx)("nav",{className:"navbar navbar-expand-md navbar-light",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(p.b,{to:"/",children:Object(v.jsx)("img",{src:"/StackStore/images/logo.png",className:"logo",alt:"logo",title:"StackStore logo"})}),Object(v.jsx)("button",{"aria-controls":"navbar","aria-expanded":"false","aria-label":"Toggle navigation",className:"navbar-toggler","data-target":"#navbar","data-toggle":"collapse",type:"button",children:Object(v.jsx)("span",{className:"navbar-toggler-icon"})}),Object(v.jsxs)("div",{className:"collapse navbar-collapse",id:"navbar",children:[Object(v.jsx)("ul",{className:"navbar-nav mr-auto mt-2",id:"nav-elements",children:this.props.user?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(p.b,{to:"/questions",className:"nav-link",children:"Questions"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(p.b,{to:"/tags",className:"nav-link",children:"Tags"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(p.b,{to:"/search",className:"nav-link",children:"Search"})})]}):Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(p.b,{to:"/about",className:"nav-link",children:"About"})})}),Object(v.jsx)("ul",{className:"navbar-nav ml-auto mt-2",id:"log-out",children:this.props.user?Object(v.jsx)(y,{}):""})]})]})})})}}]),n}(a.a.Component),S=Object(i.b)((function(e){return{user:e.user}}))(k),w=n(2),q=n(9),_=n(15),C=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(O.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(_.a)({},t.target.name,t.target.value))},e.handleSubmit=function(e){e.preventDefault()},e.handleClick=function(t){var n="register"===t.target.name;e.props.logIn(e.state,n)},e}return Object(f.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("form",{id:"log-in",onSubmit:this.handleSubmit,children:[Object(v.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{name:"log-in",className:"btn btn-primary",onClick:this.handleClick,children:"Log in"}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{name:"register",className:"btn btn-success",onClick:this.handleClick,children:"Register"})]})}}]),n}(a.a.Component),T=Object(i.b)(null,{logIn:function(e,t){var n=[t?"users":"sessions"];return function(t){fetch("".concat("https://stackstore-backend.herokuapp.com","/").concat(n),{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.error?window.alert(e.error):t({type:"LOG_IN",payload:e.user})}))}}})(C),E=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){document.title="StackStore"}},{key:"render",value:function(){return Object(v.jsxs)("div",{id:"home",children:[Object(v.jsx)("h2",{children:"Get started"}),Object(v.jsx)("br",{}),Object(v.jsx)(T,{}),Object(v.jsx)("br",{}),Object(v.jsx)("p",{children:Object(v.jsx)(p.b,{to:"/about",children:"What is StackStore?"})})]})}}]),n}(a.a.Component),N=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){document.title="About - StackStore"}},{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"What is StackStore?"}),Object(v.jsx)("br",{}),Object(v.jsx)("p",{children:"With StackStore, you can:"}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"search for Stack Overflow questions by title"}),Object(v.jsx)("li",{children:"view questions and answers"}),Object(v.jsx)("li",{children:"save questions to your own store"}),Object(v.jsx)("li",{children:"add tags and notes to questions and view questions by tag"})]}),Object(v.jsx)("hr",{}),Object(v.jsx)("h3",{children:"Demo"}),Object(v.jsx)("div",{class:"embed-responsive embed-responsive-16by9 iframe_container",children:Object(v.jsx)("iframe",{title:"YouTube demo",class:"embed-responsive-item",src:"https://www.youtube.com/embed/47qTNiLzgQU",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"})}),Object(v.jsx)("hr",{}),Object(v.jsx)("h3",{children:"Creator and GitHub repository"}),Object(v.jsxs)("ul",{children:[Object(v.jsxs)("li",{children:["Ynda Jas (",Object(v.jsx)("a",{href:"https://pronoun.is/they/.../themself",title:"Creator pronouns",children:"they"}),"):"," ",Object(v.jsx)("a",{href:"https://github.com/yndajas",title:"Creator GitHub profile",children:"GitHub"})," ","|"," ",Object(v.jsx)("a",{href:"https://yndajas.co",title:"Creator website",children:"website"})]}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"https://github.com/yndajas/StackStore",title:"GitHub repository",children:"GitHub repository"})})]}),Object(v.jsx)("h3",{children:"Image credits"}),Object(v.jsxs)("ul",{children:[Object(v.jsxs)("li",{children:["Logo icon/favicon based on shape (colour edited for use on StackStore) by"," ",Object(v.jsx)("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik on Flaticon",children:"Freepik"}),", available"," ",Object(v.jsx)("a",{href:"https://www.flaticon.com/free-icon/stacked-files_17640",title:"Logo icon/favicon",children:"here"})]}),Object(v.jsxs)("li",{children:["Background image by"," ",Object(v.jsx)("a",{href:"https://www.sanderottens.com",title:"Sander Ottens",children:"Sander Ottens"}),", available at"," ",Object(v.jsx)("a",{href:"https://www.transparenttextures.com",title:"Background image source one",children:"Transparent Textures"})," ","and"," ",Object(v.jsx)("a",{href:"https://www.toptal.com/designers/subtlepatterns/cubes",title:"Background image source two",children:"Subtle Patterns"})," ","(by Toptal)"]})]})]})}}]),n}(a.a.Component),Q=function(e,t){var n=t.filter((function(t){return t.attributes.question_id===parseInt(e.id)})),s=n.filter((function(e){return"answer"===e.type})).map((function(e){return t=e,Object(w.a)(Object(w.a)({id:t.id},t.attributes),{},{stack_created:Date.parse(t.attributes.stack_created),stack_updated:Date.parse(t.attributes.stack_updated)});var t})),a=n.filter((function(e){return"question_tag"===e.type})).map((function(e){return t=e,Object(w.a)({id:t.id},t.attributes);var t})),r=Object(w.a)(Object(w.a)({id:e.id},e.attributes),{},{stack_created:Date.parse(e.attributes.stack_created),stack_updated:Date.parse(e.attributes.stack_updated),answers:s,tags:a});return delete r.user_id,r},A=function(e){if(e.answers){var t=e.answers.sort((function(e,t){return e.accepted?-1:t.accepted?1:parseInt(t.score)-parseInt(e.score)}));return Object(w.a)(Object(w.a)({},e),{},{answers:t})}return e},D=function(e){return e.sort((function(e,t){return e.text<t.text?-1:1}))},I=function(e){if(e.tags){var t=D(e.tags);return Object(w.a)(Object(w.a)({},e),{},{tags:t})}return e},R=function(e){return e.sort((function(e,t){return parseInt(t.answer_count)-parseInt(e.answer_count)})).sort((function(e,t){return parseInt(t.score)-parseInt(e.score)})).map((function(e){return I(A(e))}))},U=function(e){var t=e.data.map((function(t){return Q(t,e.included||[])}));return R(t)},L=function(){return function(e){e({type:"CLEAR_QUESTIONS"})}},F=function(e){return new Intl.DateTimeFormat("en-GB",{dateStyle:"long"}).format(e)},H=function(e){var t=e.question;return Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{dangerouslySetInnerHTML:{__html:t.body}}),Object(v.jsx)("p",{children:"----"}),Object(v.jsxs)("p",{children:["Score: ",t.score,Object(v.jsx)("br",{}),"Last activity: ",F(t.stack_updated),Object(v.jsx)("br",{}),"Created: ",F(t.stack_created),Object(v.jsx)("br",{}),Object(v.jsx)("a",{href:"https://stackoverflow.com/q/".concat(t.stack_id),title:"View question on Stack Overflow",children:"View question on Stack Overflow"})]})]})},G=function(e){var t=e.answer;return Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{dangerouslySetInnerHTML:{__html:t.body}}),Object(v.jsx)("p",{children:"----"}),Object(v.jsxs)("p",{children:[t.accepted?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("b",{children:"Accepted"}),Object(v.jsx)("br",{})]}):"","Score: ",t.score,Object(v.jsx)("br",{}),t.stack_updated?Object(v.jsxs)(v.Fragment,{children:["Updated: ",F(t.stack_updated),Object(v.jsx)("br",{})]}):"","Created: ",F(t.stack_created),Object(v.jsx)("br",{}),Object(v.jsx)("a",{href:"https://stackoverflow.com/a/".concat(t.stack_id),title:"View answer on Stack Overflow",children:"View answer on Stack Overflow"})]})]})},M=function(e){var t=Q(e.data,e.included||[]);return I(A(t))},V=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=this,t=function(){if(!e.props.savedQuestions)return!1;var t=e.props.savedQuestions.find((function(t){return t.stack_id===e.props.question.stack_id}));return t?t.new?"Saved":"Updated":void 0};return Object(v.jsx)("button",{disabled:!!t(),name:"save-question",className:"btn btn-success",onClick:function(){return e.props.saveQuestion(e.props.user,e.props.question)},children:t()||"Save question"})}}]),n}(a.a.Component),J=Object(i.b)((function(e){return{user:e.user,savedQuestions:e.savedQuestions}}),{saveQuestion:function(e,t){return function(n){fetch("".concat("https://stackstore-backend.herokuapp.com","/users/").concat(e.id,"/questions"),{headers:{"Content-Type":"application/json",Accept:"application/json",token:e.token},method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){if(e.error)window.alert(e.error);else{var t=M(e);t.new=e.new,n({type:"SAVE_QUESTION",payload:t})}}))}}})(V),W=function(e){var t=e.question;return Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsx)(H,{question:t}),Object(v.jsx)("hr",{}),Object(v.jsx)("h3",{children:"Answers"}),t.answers?t.answers.map((function(e,n){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(G,{answer:e}),n<t.answers.length-1?Object(v.jsx)("hr",{}):""]})})):Object(v.jsx)("p",{children:"No answers"}),Object(v.jsx)(J,{question:t})]})},B=function(e){var t=e.question;return Object(v.jsx)(v.Fragment,{children:t.notes&&t.notes.length>0?Object(v.jsxs)("p",{className:"notes",children:[Object(v.jsx)("b",{children:"Notes"}),Object(v.jsx)("br",{}),t.notes]}):""})},Y=function(e){return e.map((function(e){return e.text})).join(", ")},P=function(e){var t=e.question;return Object(v.jsx)(v.Fragment,{children:t.tags.length>0?Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"Tags: "}),Y(t.tags)]}):""})},K=function(e){var t=e.question;return Object(v.jsx)(p.b,{to:"/questions/".concat(t.id,"/edit"),children:Object(v.jsx)("button",{name:"edit-question",className:"btn btn-primary",children:"Edit question*"})})},z=function(e){var t=e.question;return Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsx)(B,{question:t}),Object(v.jsx)(P,{question:t}),Object(v.jsx)(K,{question:t}),Object(v.jsx)("hr",{}),Object(v.jsx)(H,{question:t}),Object(v.jsx)("hr",{}),Object(v.jsx)("h3",{children:"Answers"}),t.answers&&t.answers.length>0?t.answers.map((function(e,n){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(G,{answer:e}),n<t.answers.length-1?Object(v.jsx)("hr",{}):""]})})):"No answers"]})},X=function(e){var t=e.question,n=e.type;return Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)("div",{className:"card-header",id:"heading".concat(t.stack_id),children:Object(v.jsx)("button",{className:"btn","data-toggle":"collapse","data-target":"#collapse".concat(t.stack_id),"aria-expanded":"false","aria-controls":"collapse".concat(t.stack_id),dangerouslySetInnerHTML:{__html:t.title}})}),Object(v.jsx)("div",{className:"collapse",id:"collapse".concat(t.stack_id),"aria-labelledby":"heading".concat(t.stack_id),"data-parent":"#accordion",children:"search"===n?Object(v.jsx)(W,{question:t}):Object(v.jsx)(z,{question:t})})]})},Z=function(e){var t=e.questions;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{id:"accordion",children:t.map((function(e){return Object(v.jsx)(X,{question:e,type:"saved"})}))}),Object(v.jsx)("br",{}),Object(v.jsx)("p",{children:Object(v.jsx)("i",{children:"* add/edit notes and tags, update question and answer data or delete the question"})})]})},$=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){document.title="Questions - StackStore",this.props.fetchSavedQuestions(this.props.user)}},{key:"componentWillUnmount",value:function(){this.props.clearQuestions()}},{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Saved questions"}),this.props.questions&&this.props.questions.length>0?Object(v.jsx)(Z,{questions:this.props.questions}):"Loading or no saved questions"]})}}]),n}(a.a.Component),ee=Object(i.b)((function(e){return{user:e.user,questions:e.questions}}),{fetchSavedQuestions:function(e){return function(t){fetch("".concat("https://stackstore-backend.herokuapp.com","/users/").concat(e.id,"/questions"),{method:"GET",headers:{token:e.token}}).then((function(e){return e.json()})).then((function(e){if(e.error)window.alert(e.error);else{var n=U(e);t({type:"FETCH_SAVED_QUESTIONS",payload:n})}}))}},clearQuestions:L})($),te=function(e,t){return function(n){fetch("".concat("https://stackstore-backend.herokuapp.com","/users/").concat(e.id,"/questions/").concat(t.id),{headers:{"Content-Type":"application/json",Accept:"application/json",token:e.token},method:"PATCH",body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){if(e.error)window.alert(e.error);else{var t=M(e);n({type:"UPDATE_QUESTION",payload:t})}}))}},ne=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(O.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={notes:e.props.question.notes},e.handleChange=function(t){e.setState(Object(_.a)({},t.target.name,t.target.value))},e.handleSubmit=function(e){e.preventDefault()},e.handleClick=function(){e.props.updateQuestion(e.props.user,{id:e.props.question.id,notes:e.state.notes})},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this,t=function(){return e.props.question.notes!==e.state.notes};return Object(v.jsxs)("form",{id:"edit-notes",onSubmit:this.handleSubmit,children:[Object(v.jsx)("textarea",{name:"notes",value:this.state.notes,onChange:this.handleChange}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{disabled:!t(),name:"save-notes",className:"btn btn-success",onClick:this.handleClick,children:t()?"Save":"Saved"})]})}}]),n}(a.a.Component),se=Object(i.b)((function(e){return{user:e.user}}),{updateQuestion:te})(ne),ae=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(O.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={tags:Y(e.props.question.tags)},e.handleChange=function(t){e.setState(Object(_.a)({},t.target.name,t.target.value))},e.handleSubmit=function(e){e.preventDefault()},e.handleClick=function(){e.props.updateQuestion(e.props.user,{id:e.props.question.id,tags:e.state.tags})},e}return Object(f.a)(n,[{key:"componentDidUpdate",value:function(e){Y(e.question.tags)!==Y(this.props.question.tags)&&this.setState({tags:Y(this.props.question.tags)})}},{key:"render",value:function(){var e=this,t=function(){return Y(e.props.question.tags)!==e.state.tags};return Object(v.jsxs)("form",{id:"edit-tags",onSubmit:this.handleSubmit,children:[Object(v.jsx)("input",{type:"text",name:"tags",value:this.state.tags,onChange:this.handleChange}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{disabled:!t(),name:"save-tags",className:"btn btn-success",onClick:this.handleClick,children:t()?"Save":"Saved"})]})}}]),n}(a.a.Component),re=Object(i.b)((function(e){return{user:e.user}}),{updateQuestion:te})(ae),ce=function(e){var t=e.answers?e.answers.map((function(e){return{stack_id:(t=e).answer_id,stack_question_id:t.question_id,accepted:t.is_accepted,score:t.score,body:t.body,stack_created:1e3*t.creation_date,stack_updated:1e3*t.last_edit_date||null};var t})):null;return{stack_id:e.question_id,score:e.score,title:e.title,body:e.body,stack_created:1e3*e.creation_date,stack_updated:1e3*e.last_activity_date,answers:t}},oe=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsx)("button",{name:"update-question-data",className:"btn btn-success",onClick:function(){return e.props.updateQuestionFromExternalData(e.props.user,e.props.question)},children:"Update question data"})}}]),n}(a.a.Component),ie=Object(i.b)((function(e){return{user:e.user}}),{updateQuestionFromExternalData:function(e,t){return function(n){fetch("https://api.stackexchange.com/2.3/questions/".concat(t.stack_id,"?order=desc&sort=activity&site=stackoverflow&filter=!FyMx1JbYiY93N3*4)4pJ0SHrESnSXd7e0oDq2L")).then((function(e){return e.json()})).then((function(s){var a=ce(s.items[0]),r=A(a);r.id=t.id,n(te(e,r))}))}}})(oe),ue=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsx)("button",{name:"delete-question",className:"btn btn-danger",onClick:function(){return e.props.deleteQuestion(e.props.user,e.props.question)},children:"Delete question"})}}]),n}(a.a.Component),le=Object(i.b)((function(e){return{user:e.user}}),{deleteQuestion:function(e,t){return function(n){fetch("".concat("https://stackstore-backend.herokuapp.com","/users/").concat(e.id,"/questions/").concat(t.id),{headers:{"Content-Type":"application/json",Accept:"application/json",token:e.token},method:"DELETE"}).then((function(e){return e.json()})).then((function(e){e.error?window.alert(e.error):n({type:"DELETE_QUESTION"})}))}}})(ue),je=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){document.title="Edit question - StackStore",this.props.fetchSavedQuestion(this.props.user,this.props.match.params.id)}},{key:"componentWillUnmount",value:function(){this.props.clearQuestion()}},{key:"render",value:function(){var e=this;return Object(v.jsx)("div",{children:this.props.question?this.props.question.deleted?Object(v.jsx)(q.a,{to:"/questions"}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{children:"Edit question"}),Object(v.jsx)("h3",{children:"Notes"}),Object(v.jsx)(se,{question:this.props.question}),Object(v.jsx)("hr",{}),Object(v.jsx)("h3",{children:"Tags"}),Object(v.jsx)("p",{children:"Add tags in a comma-separated list"}),Object(v.jsx)(re,{question:this.props.question}),Object(v.jsx)("hr",{}),Object(v.jsx)("h3",{children:"Question data"}),Object(v.jsx)("p",{children:"Update question and answer data from Stack Overflow"}),Object(v.jsx)(ie,{question:this.props.question}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("h4",{children:this.props.question.title}),Object(v.jsx)(H,{question:this.props.question}),Object(v.jsx)("hr",{}),Object(v.jsx)("h4",{children:"Answers"}),this.props.question.answers&&this.props.question.answers.length>0?this.props.question.answers.map((function(t,n){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(G,{answer:t}),n<e.props.question.answers.length-1?Object(v.jsx)("hr",{}):""]})})):"No answers",Object(v.jsx)("hr",{}),Object(v.jsx)("h3",{children:"Delete question"}),Object(v.jsx)("p",{children:"If you delete a question, you can save it again via the search feature, however all notes and tags will be lost permanently"}),Object(v.jsx)(le,{question:this.props.question})]}):""})}}]),n}(a.a.Component),be=Object(i.b)((function(e){return{user:e.user,question:e.question}}),{fetchSavedQuestion:function(e,t){return function(n){fetch("".concat("https://stackstore-backend.herokuapp.com","/users/").concat(e.id,"/questions/").concat(t),{method:"GET",headers:{token:e.token}}).then((function(e){return e.json()})).then((function(e){if(e.error)window.alert(e.error);else{var t=M(e);n({type:"FETCH_SAVED_QUESTION",payload:t})}}))}},clearQuestion:function(){return function(e){e({type:"CLEAR_QUESTION"})}}})(je),de=function(e){var t=e.tag;return Object(v.jsx)(p.b,{to:"/tags/".concat(t.slug),children:Object(v.jsx)("button",{name:"".concat(t.text,"-link"),className:"btn btn-primary",children:t.text})})},he=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){document.title="Tags - StackStore",this.props.fetchSavedTags(this.props.user)}},{key:"componentWillUnmount",value:function(){this.props.clearTags()}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Tags"}),this.props.tags?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("p",{children:"View questions by tag"}),Object(v.jsx)("div",{id:"tag-link-buttons",children:this.props.tags.map((function(t,n){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(de,{tag:t}),n<e.props.tags.length-1?Object(v.jsx)(v.Fragment,{children:"\xa0"}):""]})}))})]}):"Loading or no saved tags"]})}}]),n}(a.a.Component),pe=Object(i.b)((function(e){return{user:e.user,tags:e.tags}}),{fetchSavedTags:function(e){return function(t){fetch("".concat("https://stackstore-backend.herokuapp.com","/users/").concat(e.id,"/tags"),{method:"GET",headers:{token:e.token}}).then((function(e){return e.json()})).then((function(e){if(e.error)window.alert(e.error);else{var n=e.data.map((function(e){return function(e){return Object(w.a)({id:e.id},e.attributes)}(e)})),s=D(n);t({type:"FETCH_SAVED_TAGS",payload:s})}}))}},clearTags:function(){return function(e){e({type:"CLEAR_TAGS"})}}})(he),Oe=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){document.title="Questions by tag - StackStore",this.props.fetchSavedTag(this.props.user,this.props.match.params.tagSlug)}},{key:"componentWillUnmount",value:function(){this.props.clearTag(),this.props.clearQuestions()}},{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsxs)("h2",{children:["Saved questions by tag",this.props.tag?Object(v.jsxs)(v.Fragment,{children:[": ",this.props.tag]}):""]}),this.props.questions?Object(v.jsx)(Z,{questions:this.props.questions}):"Loading questions"]})}}]),n}(a.a.Component),fe=Object(i.b)((function(e){return{user:e.user,tag:e.tag,questions:e.questions}}),{fetchSavedTag:function(e,t){return function(n){fetch("".concat("https://stackstore-backend.herokuapp.com","/users/").concat(e.id,"/tags/").concat(t),{method:"GET",headers:{token:e.token}}).then((function(e){return e.json()})).then((function(e){if(e.error)window.alert(e.error);else{n({type:"SET_TAG",payload:e.tag});var t=U(e);n({type:"FETCH_SAVED_QUESTIONS",payload:t})}}))}},clearQuestions:L,clearTag:function(){return function(e){e({type:"CLEAR_TAG"})}}})(Oe),xe=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(O.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={query:""},e.handleChange=function(t){e.setState(Object(_.a)({},t.target.name,t.target.value))},e.handleSubmit=function(e){e.preventDefault()},e.handleClick=function(){e.props.searchQuestions(e.state.query)},e}return Object(f.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("form",{id:"search",onSubmit:this.handleSubmit,children:[Object(v.jsx)("p",{children:"Search for questions from Stack Overflow by words in their title"}),Object(v.jsx)("input",{type:"text",name:"query",placeholder:"Keyword(s)",value:this.state.query,onChange:this.handleChange}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{name:"search",className:"btn btn-primary",onClick:this.handleClick,children:"Search"})]})}}]),n}(a.a.Component),me=Object(i.b)(null,{searchQuestions:function(e){return function(t){t({type:"SET_SEARCH_QUERY",payload:e}),fetch("https://api.stackexchange.com/2.3/search?page=1&pagesize=20&order=desc&sort=activity&intitle=".concat(e,"&site=stackoverflow&filter=!SBqKECKMLIB-ijOvJS9H1*qxQqh7Evi_6BCJ0xoAl1DWJn*5.(Ks-p).sR*s9M_*")).then((function(e){return e.json()})).then((function(e){var n=e.items.map((function(e){return ce(e)})),s=R(n);t({type:"SEARCH_QUESTIONS",payload:Object(w.a)(Object(w.a)({},e),{},{items:s})})}))}}})(xe),ve=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h3",{children:"Search results"}),this.props.searchResults&&this.props.searchResults.length>0?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("p",{children:["Showing ",this.props.searchResults.length," of"," ",this.props.searchResultsTotal,' results for "',this.props.searchQuery,'"',this.props.searchResults.length<this.props.searchResultsTotal?Object(v.jsxs)(v.Fragment,{children:["\xa0[",Object(v.jsx)("a",{href:"https://stackoverflow.com/search?q=".concat(this.props.searchQuery),title:"Search on Stack Overflow",children:"view full results on Stack Overflow"}),"]"]}):""]}),Object(v.jsx)("div",{id:"accordion",children:this.props.searchResults.map((function(e){return Object(v.jsx)(X,{question:e,type:"search"})}))})]}):"Loading or no results"]})}}]),n}(a.a.Component),ge=Object(i.b)((function(e){return{searchQuery:e.searchQuery,searchResults:e.searchResults,searchResultsTotal:e.searchResultsTotal}}))(ve),ye=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){document.title="Search - StackStore"}},{key:"componentWillUnmount",value:function(){this.props.clearSearch()}},{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Search"}),Object(v.jsx)(me,{}),Object(v.jsx)("br",{}),Object(v.jsx)(ge,{})]})}}]),n}(a.a.Component),ke=Object(i.b)(null,{clearSearch:function(){return function(e){e({type:"CLEAR_SEARCH"})}}})(ye),Se=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=this,t=function(t){var n=Object.assign({},t);return e.props.user?Object(v.jsx)(q.b,Object(w.a)({},n)):Object(v.jsx)(q.a,{to:"/"})};return Object(v.jsx)("main",{children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)(q.d,{children:[Object(v.jsx)(q.b,{exact:!0,path:"/",children:this.props.user?Object(v.jsx)(q.a,{to:"/questions"}):Object(v.jsx)(E,{})}),Object(v.jsx)(q.b,{exact:!0,path:"/about",component:N}),Object(v.jsx)(t,{exact:!0,path:"/questions",component:ee}),Object(v.jsx)(t,{exact:!0,path:"/questions/:id/edit",component:be}),Object(v.jsx)(t,{exact:!0,path:"/tags",component:pe}),Object(v.jsx)(t,{exact:!0,path:"/tags/:tagSlug",component:fe}),Object(v.jsx)(t,{exact:!0,path:"/search",component:ke})]})})})}}]),n}(a.a.Component),we=Object(i.b)((function(e){return{user:e.user}}))(Se),qe=function(e){var t=e.email;return Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsxs)("span",{className:"navbar-text",children:["Logged in as ",t]})})},_e=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=(new Date).getFullYear();return Object(v.jsx)("footer",{children:Object(v.jsx)("nav",{className:"navbar navbar-light",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("ul",{id:"user-info",className:"navbar-nav d-none d-sm-block",children:this.props.user?Object(v.jsx)(qe,{email:this.props.user.email}):""}),Object(v.jsx)("ul",{className:"navbar-nav",id:"copyright",children:Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsxs)("span",{className:"navbar-text",children:["\xa9 Ynda Jas ",e]})})})]})})})}}]),n}(a.a.Component),Ce=Object(i.b)((function(e){return{user:e.user}}))(_e),Te=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(S,{}),Object(v.jsx)(we,{}),Object(v.jsx)(Ce,{})]})}}]),n}(a.a.Component),Ee=n(30);var Ne={key:"root",storage:b.a},Qe=Object(l.a)(Ne,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_IN":return Object(w.a)(Object(w.a)({},e),{},{user:t.payload});case"LOG_OUT":return{};case"SET_SEARCH_QUERY":return Object(w.a)(Object(w.a)({},e),{},{searchQuery:t.payload});case"SEARCH_QUESTIONS":return Object(w.a)(Object(w.a)({},e),{},{searchResults:t.payload.items,searchResultsTotal:t.payload.total});case"CLEAR_SEARCH":var n=Object(w.a)({},e);return delete n.searchQuery,delete n.searchResults,delete n.searchResultsTotal,delete n.savedQuestions,n;case"SAVE_QUESTION":return e.savedQuestions?Object(w.a)(Object(w.a)({},e),{},{savedQuestions:[].concat(Object(Ee.a)(e.savedQuestions),[t.payload])}):Object(w.a)(Object(w.a)({},e),{},{savedQuestions:[t.payload]});case"FETCH_SAVED_QUESTIONS":return Object(w.a)(Object(w.a)({},e),{},{questions:t.payload});case"CLEAR_QUESTIONS":var s=Object(w.a)({},e);return delete s.questions,s;case"FETCH_SAVED_QUESTION":case"UPDATE_QUESTION":return Object(w.a)(Object(w.a)({},e),{},{question:t.payload});case"DELETE_QUESTION":return Object(w.a)(Object(w.a)({},e),{},{question:Object(w.a)(Object(w.a)({},e.question),{},{deleted:!0})});case"CLEAR_QUESTION":var a=Object(w.a)({},e);return delete a.question,a;case"FETCH_SAVED_TAGS":return Object(w.a)(Object(w.a)({},e),{},{tags:t.payload});case"CLEAR_TAGS":var r=Object(w.a)({},e);return delete r.tags,r;case"SET_TAG":return Object(w.a)(Object(w.a)({},e),{},{tag:t.payload});case"CLEAR_TAG":var c=Object(w.a)({},e);return delete c.tag,c;default:return e}})),Ae=Object(o.createStore)(Qe,Object(h.composeWithDevTools)(Object(o.applyMiddleware)(u.a))),De=Object(l.b)(Ae);c.a.render(Object(v.jsx)(i.a,{store:Ae,children:Object(v.jsx)(d.a,{loading:null,persistor:De,children:Object(v.jsx)(p.a,{basename:"/StackStore",children:Object(v.jsx)(Te,{})})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.c10220de.chunk.js.map