(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{207:function(e,t){},208:function(e,t){},209:function(e,t){},216:function(e,t,n){e.exports=n(518)},221:function(e,t,n){},518:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(25),c=n.n(o),s=(n(221),n(3)),i=n(4),l=n(6),u=n(5),p=n(7),h=n(521),m=n(524),d=n(520),f=n(17),g=n(31),b=n(15),O=n(211),v=n(16),E=n.n(v),j=(n(264),n(265),n(197)),y=n.n(j),k=n(215),C=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(b.a)(Object(b.a)(n))),n.handleOptionChange=n.handleOptionChange.bind(Object(b.a)(Object(b.a)(n))),n.handleChangeNumber=n.handleChangeNumber.bind(Object(b.a)(Object(b.a)(n))),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.type,a=t.multi,o=t.noResultsText,c=t.onChange,s=t.readonly,i=t.multiOptionsValue,l=t.readOnly,u=t.options,p=(t.validation,t.optionValue),h=(t.placeHolder,t.withPortal),m=t.isInvalid,d=(t.errorMsg,t.multiSelectOptions),f=t.placeholder,b=Object(g.a)(t,["type","multi","noResultsText","onChange","readonly","multiOptionsValue","readOnly","options","validation","optionValue","placeHolder","withPortal","isInvalid","errorMsg","multiSelectOptions","placeholder"]);return"date"===n?r.a.createElement(O.a,{readOnly:!!s,disabled:!!s,className:"".concat(s?"successInput":""),withPortal:!!h,selected:this.props.value||E()(),locale:"cs",onChange:c,peekNextMonth:!0,showMonthDropdown:!0,showYearDropdown:!0}):"dropdown"===n?r.a.createElement("select",Object.assign({className:"input-style ".concat(m||""),onChange:this.handleChange},b),u.map(function(e,t){return r.a.createElement("option",{key:t,value:e.value},e.label)})):"email"===n?r.a.createElement("input",Object.assign({className:"input-style ".concat(m||""," ").concat(s?"successInput":""),type:n||"text",readOnly:!!s,onChange:this.handleChange},b)):"checkbox"===n?r.a.createElement("input",Object.assign({readOnly:!!s,checked:this.props.value||!1,type:n,onChange:s?{}:function(e){return c(e.target.checked)}},b)):"radio"===n?r.a.createElement("input",Object.assign({checked:this.props.value===p,type:n,onChange:function(t){return e.handleOptionChange(t,p)}},b)):"positiveNumber"===n?r.a.createElement("input",Object.assign({className:"input-style ".concat(this.props.isInvalid),type:"text",onChange:this.handleChangeNumber},b)):"select"===n?r.a.createElement(k.a,{name:"filters",placeholder:f,options:d,onChange:function(e){return c(e)},isSearchable:!0,classNamePrefix:"react-select",className:"react-select-container  ".concat(m||""),value:i,multi:a,noResultsText:o}):r.a.createElement("input",Object.assign({readOnly:!(!l&&!s),className:"input-style  ".concat(m||""," ").concat(s?"successInput":""),type:n||"text",onChange:this.handleChange},b))}},{key:"handleOptionChange",value:function(e,t){var n=this.props.onChange;e.target.checked&&n(t)}},{key:"handleChange",value:function(e){var t=e.target.value;console.log(t);var n=this.props,a=n.onChange,r=n.validation;r&&!r(t)||a(t)}},{key:"handleChangeNumber",value:function(e){var t=e.target.value,n=this.props.onChange;y.a.isInt(t)&&t>=0?n(Number(t)):""===t&&n(t)}}]),t}(a.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this,n=this.props,o=n.name,c=n.rawValue,s=n.beforeRawValue,i=n.outer,l=(n.inner,n.errorMsg),u=n.afterRawValue,p=n.labelClass,h=Object(g.a)(n,["name","rawValue","beforeRawValue","outer","inner","errorMsg","afterRawValue","labelClass"]);return e=this.props.outer?r.a.createElement("span",{className:i},r.a.createElement(C,h),this.props.inner):r.a.createElement(C,h),r.a.createElement(a.Fragment,null,r.a.createElement("label",{onClick:function(e){return"date"===t.props.type?e.preventDefault(e):{}},className:"label-style ".concat(void 0!==p?p:"")},s,r.a.createElement("span",null,o),e,c),l?r.a.createElement("div",{className:"errorMsg"},l):null,u)}}]),t}(a.Component),S=n(118),D=n.n(S),N=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).generateInput=n.generateInput.bind(Object(b.a)(Object(b.a)(n))),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:this.props.class,onSubmit:function(e){return e.preventDefault()}},this.props.schema.map(this.generateInput))}},{key:"generateInput",value:function(e){var t=this.props,n=t.onChange,a=t.formData,o=e.path,c=(e.pk,Object(g.a)(e,["path","pk"]));return"raw"===e.type?e.value:r.a.createElement(w,Object.assign({},c,{key:o+(e.optionValue||""),value:D.a.get(a,o),onChange:function(t){return n(D.a.set(a,e.path,t))}}))}}]),t}(a.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.t,e.formData),n=e.onChange,a=e.action;return r.a.createElement("div",{className:"mt-30 mb-30 panel panel-default"},r.a.createElement("div",{className:"outer"},r.a.createElement(N,{formData:t,onChange:n,schema:[{name:"name",path:"name"},{name:"email",path:"email",type:"email"},{name:"password",path:"password",type:"password"},{name:"password2",path:"password2",type:"password"}]}),r.a.createElement("button",{onClick:function(){a()}}," ","register"," ")))}}]),t}(a.Component),I=n(13),M=n.n(I),R=function(e){return{type:"ERROR_RECEIVED",error:e}},B={getUsersList:function(){return function(e){M.a.get("/api/users/usersList/").then(function(t){return e({type:"USERS_LIST_RECEIVED",users:t})}).catch(function(e){return console.log(e)})}}},_=function(e,t,n){return function(t){M.a.post("/api/users/register/",{name:e.name,password:e.password,password2:e.password2,email:e.email,userType:"0",location:e.location}).then(function(){return t(function(e){return{type:"REGISTRATION_RECEIVED",registartionAction:e}}(n))}).catch(function(e){return t(R(e.response.data))})}},L=n(523),U=n(522),A=n(48),T=n(201),P=Object(A.withScriptjs)(Object(A.withGoogleMap)(function(e){return r.a.createElement(A.GoogleMap,{defaultZoom:14,center:e.center},r.a.createElement(T.SearchBox,{ref:e.onSearchBoxMounted,bounds:e.bounds,controlPosition:window.google.maps.ControlPosition.TOP_LEFT,onPlacesChanged:e.onPlacesChanged,inputPlaceholder:"Customized your placeholder",inputStyle:{boxSizing:"border-box",MozBoxSizing:"border-box",border:"1px solid transparent",width:"240px",height:"32px",marginTop:"27px",padding:"0 12px",borderRadius:"1px",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.3)",fontSize:"14px",outline:"none",textOverflow:"ellipses"}},r.a.createElement("input",{type:"text",placeholder:"Find Place",style:{boxSizing:"border-box",border:"1px solid transparent",width:"240px",height:"32px",marginTop:"27px",padding:"0 12px",borderRadius:"3px",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.3)",fontSize:"14px",outline:"none",textOverflow:"ellipses"}})),void 0!==e.locations?e.locations.map(function(t,n){return r.a.createElement(A.Marker,{onClick:function(){return e.click(n)},position:{lat:Number(e.locations[n][0]),lng:Number(e.locations[n][1])}},void 0!==e.displayInfo&&e.displayInfo===n?r.a.createElement(A.InfoWindow,null,r.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){return e.redirectToProfile(e.locations[n][2].name,e.locations[n][2]._id)}},e.locations[n][2].name)):null)}):r.a.createElement(A.Marker,{ref:e.onMarkerMounted,onPositionChanged:e.onPositionChanged,position:e.center}))})),V=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={bounds:null,center:{lat:50.29449229999999,lng:18.67138019999993},markers:[],lat:"",lng:"",serched:!1},n.handleMapMounted=n.handleMapMounted.bind(Object(b.a)(Object(b.a)(n))),n.handleBoundsChanged=n.handleBoundsChanged.bind(Object(b.a)(Object(b.a)(n))),n.handleSearchBoxMounted=n.handleSearchBoxMounted.bind(Object(b.a)(Object(b.a)(n))),n.handlePlacesChanged=n.handlePlacesChanged.bind(Object(b.a)(Object(b.a)(n))),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handleMapMounted",value:function(e){this._map=e}},{key:"componentDidUpdate",value:function(e){e.lat!==this.state.lat&&e.lng!==this.state.lng&&!0===this.state.serched&&void 0!==this.props.setLocation&&(this.props.setLocation(this.state.lat,this.state.lng),this.setState({serched:!1}))}},{key:"handleBoundsChanged",value:function(){this.setState({bounds:this._map.getBounds(),center:this._map.getCenter()})}},{key:"handleSearchBoxMounted",value:function(e){this._searchBox=e}},{key:"handlePlacesChanged",value:function(){var e=this._searchBox.getPlaces();this.setState({lat:(e[0].geometry.location||{}).lat(),lng:(e[0].geometry.location||{}).lng()});var t=e.map(function(e){return{position:e.geometry.location}}),n=t.length>0?t[0].position:this.state.center;this.setState({center:n,markers:t,serched:!0})}},{key:"render",value:function(){var e=this.props,t=(e.setLocation,Object(g.a)(e,["setLocation"]));return r.a.createElement(P,Object.assign({onMapMounted:this.handleMapMounted,onBoundsChanged:this.handleBoundsChanged,markers:this.state.markers,onSearchBoxMounted:this.handleSearchBoxMounted,bounds:this.state.bounds,center:this.state.center,onPlacesChanged:this.handlePlacesChanged,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBj4blO0jFHddFGpPJA6bnFPw_QWpBL12U&v=3.exp&libraries=geometry,drawing,places",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"600px",width:"600px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})},t))}}]),t}(a.Component),H=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).setLocation=function(e,t){n.setState({location:"(".concat(Number(e),",").concat(Number(t),")")})},n.register=function(){var e=Math.random();n.props.registerAction(n.state,n.props.history,e)},n.state={name:"",email:"",password:"",password2:"",redirect:!1,lat:"",lng:""},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){e.registartionAction!==this.props.registartionAction&&this.setState({redirect:!0})}},{key:"render",value:function(){var e=this;return console.log(this.state.location),r.a.createElement(a.Fragment,null,!0===this.state.redirect?r.a.createElement(U.a,{to:"/"}):null,r.a.createElement(x,{formData:this.state,onChange:function(t){return e.setState(t)},action:this.register}),r.a.createElement("div",null,this.state.location),r.a.createElement(V,{setLocation:this.setLocation}))}}]),t}(a.Component);var F=Object(L.a)(Object(f.b)(function(e){return{registartionAction:e.registartionAction}},function(e){return{registerAction:function(t,n,a){return e(_(t,n,a))}}})(H)),G=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(F,null)}}]),t}(a.Component),z=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.t,e.formData),n=e.onChange,a=e.action;e.errors;return r.a.createElement("div",{className:"mt-30 mb-30 panel panel-default"},r.a.createElement("div",{className:"outer"},r.a.createElement(N,{formData:t,onChange:n,schema:[{name:"email",path:"email",type:"email"},{name:"password",path:"password",type:"password"}]}),r.a.createElement("div",{onClick:function(){return n({email:"qq@q.pl",password:"qq"})}},"qq"),r.a.createElement("div",{onClick:function(){return n({email:"w@w.pl",password:"ww"})}},"ww"),r.a.createElement("button",{onClick:function(){a()}}," ","register"," ")))}}]),t}(a.Component),K=function(e){e?M.a.defaults.headers.common.Authorization=e:delete M.a.defaults.headers.common.Authorization},Y=n(116),q=n.n(Y),W=n(29),J=n(203),Z=n(204),Q=n(120),$=n(205),X=n.n($),ee=n(214),te=n(206),ne=n.n(te),ae=n(213),re=n(207),oe=n.n(re),ce=function(){return function(e){M.a.get("/api/books/").then(function(t){return e((n=t.data,console.log(n),{type:"BOOKS_RECEIVED",books:n}));var n}).catch(function(e){return console.log(e)})}},se={createBook:function(e,t){return function(n){console.log(e);var a=new FormData;a.append("title",e.title),a.append("author",e.author),a.append("description",e.description),a.append("isbn",e.isbn),a.append("image",e.image),a.append("created",t),console.log(a),M.a.post("/api/books/",a,"multipart/form-data").then(function(){return n(ce())}).catch(function(e){return n(R(e.response.data))})}},getBooksList:ce,updateBookStatus:function(e,t){return function(n){M.a.post("/api/books/"+e,{state:t}).then(function(e){return n(ce())}).catch(function(e){return console.log(e)})}}},ie=function(){return function(e){M.a.get("/api/chats/list/").then(function(t){return e({type:"CHAT_ROOMS_RECEIVED",chatRooms:t})}).catch(function(e){return console.log(e)})}},le={createRoom:function(e){return function(t){M.a.post("/api/chats/create/",{roomName:e}).then(function(e){return t(ie())}).catch(function(e){return console.log(e)})}},getChatRoomsList:ie,getChatDetails:function(e){return function(t){M.a.post("/chats/detail/"+e).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})}},sendMsg:function(e,t){return function(n){console.log(e,t),M.a.post("/api/chats/newmessage",e).then(function(e){return n({type:"ADD_MESSAGE",messages:e.data})}).catch(function(e){return console.log(e)})}},getMessages:function(e){return function(t){M.a.get("/api/chats/messages/"+e).then(function(e){return t((n=e,console.log(n.data),{type:"MESSAGES_RECEIVED",messages:n.data}));var n}).catch(function(e){return console.log(e)})}},receiveSocket:function(e){return console.log(e),{type:"RECEIVE_SOCKET",socketID:e}}},ue="CHANGE_CHANNEL";var pe=function(){return function(e){M.a.get("/api/channel/list").then(function(t){return e({type:"CHANNELS_RECEIVED",channels:t})}).catch(function(e){return console.log(e)})}},he={createChannel:function(e){return function(t){M.a.post("/api/channel/new_channel",{name:e}).then(function(e){return t(pe())}).catch(function(e){return console.log(e)})}},getChannels:pe,changeChannel:function(e){return{type:ue,channel:e}}};var me=n(208),de=n.n(me),fe={key:"root",storage:X.a},ge=Object(W.createStore)(Object(Q.a)(fe,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,a=e,r=0;r<t.length;r++)a=(0,t[r])(a,n);return a}}(Object(W.combineReducers)({error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ERROR_RECEIVED":var n=ne.a.camelizeKeys(t.error);return Object(ee.a)({},e,{error:n});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe:return Object(ae.a)(e).concat([t.user]);case ve:return t.user;default:return e}},currentUser:oe.a,users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS_LIST_RECEIVED":return t.users.data;default:return e}},registartionAction:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTRATION_RECEIVED":return t.registartionAction;default:return e}},books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BOOKS_RECEIVED":return t.books;default:return e}},book:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BOOK_RECEIVED":return t.book;default:return e}},chatRooms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHAT_ROOMS_RECEIVED":return t.chatRooms;default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MESSAGES_RECEIVED":return console.log(e),t.messages;default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MESSAGE_RECEIVED":return t.message;default:return e}},socketID:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_SOCKET":return t.socketID;default:return e}},channels:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANNELS_RECEIVED":return console.log(e),t.channels.data;default:return e}},activeChannel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue:return{name:t.channel.name,id:t.channel._id};default:return e}},token:de.a}))),{token:null,error:[],user:[],currentUser:{},users:[],registartionAction:null,books:[],book:null,chatRooms:[],messages:[],message:{},socketID:null,channels:[],activeChannel:{}},Object(J.composeWithDevTools)(Object(W.applyMiddleware)(Z.a))),be=Object(Q.b)(ge),Oe="SET_CURRENT_USER",ve="LOGOUT",Ee=function(e){return{type:Oe,user:e}},je={logout:function(e){return function(t){localStorage.removeItem("jwtToken"),K(!1),t({type:ve,user:[]}),e.push("/")}},login:function(e,t){return function(n){console.log(t),M.a.post("/api/users/login/",{password:e.password,email:e.email}).then(function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),K(a);var r=q()(a);n(Ee(r)),t.push({pathname:"/"+r.id,state:{user:r.id}})}).catch(function(e){return n(R(e))})}},getCurrentUser:function(e){return function(t){M.a.get("/api/users/current/"+e).then(function(e){return t(Ee(e))}).catch(function(e){return console.log(e)})}}},ye=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).login=function(){n.props.login(n.state,n.props.history)},n.state={name:"",email:"",password:"",errors:{}},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.errors!==e.errors&&this.setState({errors:this.props.errors})}},{key:"render",value:function(){var e=this;return r.a.createElement(a.Fragment,null,r.a.createElement(z,{errors:this.state.errors,formData:this.state,onChange:function(t){return e.setState(t)},action:this.login}))}}]),t}(a.Component);var ke=Object(L.a)(Object(f.b)(function(e){return{token:e.token,errors:e.error}},function(e){return{login:function(t,n){return e(je.login(t,n))}}})(ye)),Ce=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(ke,null)}}]),t}(a.Component),we=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.openChat,e.currentUser,e.match,e.books),n=Object(g.a)(e,["openChat","currentUser","match","books"]);return t.slice(0).sort(function(e,t){return new Date(e.created)-new Date(t.created)}),r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"container"},t.map(function(e){return r.a.createElement("div",{className:"col-sm-4 block"},r.a.createElement("img",{style:{width:"200px"},src:"http://localhost:5000/api/books/".concat((e.image||{}).filename)}),e.title,E()(e.created).format("DD.MM.YYYY HH:mm"))})),r.a.createElement(V,n),"}")}}]),t}(a.Component),Se=Object(L.a)(we),De=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).click=function(e){n.setState(function(t){return{displayInfo:t.displayInfo===e?null:e}})},n.redirectToProfile=function(e,t){n.props.history.push({pathname:"profile/".concat(e),state:{id:t}})},n.openChat=function(){n.props.createChannel({name:"Lobby",id:0,private:!1})},n.state={action:null,redirect:!1,displayInfo:null},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsersList(),this.props.getBooksList()}},{key:"componentDidUpdate",value:function(e){this.props.user!==e.user&&this.props.user}},{key:"render",value:function(){var e=this.props,t=e.users,n=e.match,o=e.books;return r.a.createElement(a.Fragment,null,r.a.createElement(Se,{books:o,currentUser:this.props.user.user,openChat:this.openChat,locations:t.length>0?t.filter(function(e){return void 0!==e.location}).map(function(e,t){return e.location.slice(1,-1).split(",").concat(e)}):[],logout:this.props.logout,click:this.click,match:n,redirectToProfile:this.redirectToProfile,displayInfo:this.state.displayInfo}))}}]),t}(a.Component);var Ne=Object(L.a)(Object(f.b)(function(e){return{token:e.token,user:e.user,users:e.users,registartionAction:e.registartionAction,books:e.books}},function(e){return{getCurrentUser:function(){return e(B.getCurrentUser())},logout:function(){return e(je.logout())},getUsersList:function(){return e(B.getUsersList())},createChannel:function(t){return e(he.createChannel(t))},getBooksList:function(t){return e(se.getBooksList(t))}}})(De)),xe=n(519),Ie=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.token&&this.props.getCurrentUser()}},{key:"render",value:function(){var e=this.props,t=(e.userName,e.currentUser),n=e.match;return r.a.createElement("nav",{className:"user-navbar navbar navbar-default"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"},r.a.createElement("span",{className:"glyphicon glyphicon-menu-hamburger"}))),r.a.createElement("div",{id:"navbar",className:"navbar-collapse collapse"},Object.keys(t||{}).length>0?r.a.createElement("ul",{className:"navLinks nav navbar-nav"},r.a.createElement("li",null,"name: ",(t||{}).name),r.a.createElement(xe.a,{to:"".concat(n.path).concat((t||{})._id)},"HOME"),r.a.createElement(xe.a,{to:"".concat(n.path).concat((t||{})._id,"/myBooks")},"my books"),r.a.createElement(xe.a,{to:"".concat(n.path).concat((t||{})._id,"/planner/")},"planner"),r.a.createElement("li",{style:{cursor:"pointer"},onClick:this.props.logout},"logOut")):r.a.createElement("ul",{className:"nav navbar-nav button-holder"},r.a.createElement(xe.a,{to:"".concat(n.path,"login")},"Login"),r.a.createElement(xe.a,{to:"registration"},"Register")))))))}}]),t}(a.Component),Me=Object(L.a)(Ie),Re=n(525),Be=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsersList()}},{key:"render",value:function(){var e=this;return console.log(this.props.location.pathname.split("/")[1]),r.a.createElement(Me,{currentUser:this.props.user,logout:function(){return e.props.logout(e.props.history)}})}}]),t}(a.Component);var _e=Object(Re.a)(Object(f.b)(function(e,t){return{user:(e.users||[]).find(function(e){return e._id===t.location.pathname.split("/")[1]})}},function(e){return{logout:function(t){return e(je.logout(t))},getCurrentUser:function(t){return e(je.getCurrentUser(t))},getUsersList:function(){return e(B.getUsersList())}}})(Be)),Le=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){this.props.match;return r.a.createElement(a.Fragment,null,r.a.createElement(xe.a,{to:"/login"},"Login"),r.a.createElement(xe.a,{to:"registration"},"Register"),r.a.createElement(Ne,{action:(this.props.location.state||{}).action}))}}]),t}(a.Component),Ue=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.props.match),r.a.createElement("div",{className:"userPage",style:{padding:"0px"}},r.a.createElement(_e,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12"},r.a.createElement("div",{className:"content-holder"},this.props.children)))))}}]),t}(a.Component),Ae=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.formData,n=e.onChange,a=e.imageSelectedHandler,o=e.action,c=e.books;return console.log(c),r.a.createElement("div",null,r.a.createElement(N,{formData:t,onChange:n,schema:[{name:"title",path:"title"},{name:"author",path:"author"},{name:"description",path:"description"},{name:"isbn",path:"isbn"}]}),r.a.createElement("div",{className:"imgUploadContainer"},r.a.createElement("span",null,"uploadImage"),r.a.createElement("label",{htmlFor:"file-upload",className:"custom-file-upload"},r.a.createElement("input",{id:"file-upload",type:"file",name:"image",onChange:a}))),r.a.createElement("button",{onClick:o},"create"),r.a.createElement("div",null,c?c.map(function(e){return r.a.createElement("div",null,r.a.createElement("div",null,"title:",e.title),r.a.createElement("div",null,"description:",e.description),r.a.createElement("img",{style:{width:"200px"},src:"http://localhost:5000/api/books/".concat((e.image||{}).filename)}))}):null))}}]),t}(a.Component),Te=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).imageSelectedHandler=function(e){n.setState({image:e.target.files[0]})},n.createBook=function(){n.props.createBook(n.state,new Date)},n.state={title:"",author:"",description:"",isbn:"",image:""},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getBooksList(),this.props.getCurrentUser()}},{key:"render",value:function(){var e=this,t=this.props.books;return console.log(t),r.a.createElement(Ae,{formData:this.state,books:t,onChange:function(t){return e.setState(t)},action:this.createBook,imageSelectedHandler:this.imageSelectedHandler})}}]),t}(a.Component);var Pe=Object(f.b)(function(e,t){return console.log(t),{registartionAction:e.registartionAction,books:e.books.filter(function(e){return e.user===t.location.pathname.split("/")[1]}),book:e.book,user:e.user}},function(e){return{createBook:function(t,n){return e(se.createBook(t,n))},getBooksList:function(t){return e(se.getBooksList(t))},getCurrentUser:function(t){return e(je.getCurrentUser(t))}}})(Te),Ve=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("sfjfkdj"),r.a.createElement(Pe,{location:this.props.location})}}]),t}(a.Component),He=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",null,(e||{}).books?(e||{}).books.map(function(e){return r.a.createElement("div",null,r.a.createElement("div",null,"title:",e.title),r.a.createElement("div",null,"description:",e.description),r.a.createElement("img",{style:{width:"200px"},src:"http://localhost:5000/api/books/".concat((e.image||{}).filename)}))}):null)}}]),t}(a.Component),Fe=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.user;return console.log(e),r.a.createElement(He,{user:e})}}]),t}(a.Component);var Ge=Object(f.b)(function(e,t){return{user:e.users.find(function(e){return e._id===t.userId})}},function(e){return{}})(Fe),ze=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(Ge,{userId:(this.props.location.state||{}).id})}}]),t}(a.Component),Ke=n(209),Ye=n.n(Ke),qe=(a.Component,function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.formData,n=e.onChange,a=e.action;return r.a.createElement("div",null,r.a.createElement(N,{formData:t,onChange:n,schema:[{name:"chatMsg",path:"chatMsg"},{name:"msgBy",path:"msgBy"}]}),r.a.createElement("button",{onClick:function(){a()}},"send"))}}]),t}(a.Component)),We=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).sendMsg=function(){n.props.sendMsg(n.state,n.props.chatId)},n.state={chatMsg:"",msgBy:""},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(qe,{formData:this.state,onChange:function(t){return e.setState(t)},action:this.sendMsg})}}]),t}(a.Component);var Je=Object(f.b)(function(e,t){return{}},function(e){return{sendMsg:function(t,n){return e(le.sendMsg(t,n))}}})(We),Ze=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(Je,{chatId:this.props.match.params.chatListId})}}]),t}(a.Component),Qe=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onDragStart=function(e,t){console.log(e,t),e.dataTransfer.setData("id",t)},n.onDragOver=function(e){console.log(e),e.preventDefault()},n.onDrop=function(e,t){var a=e.dataTransfer.getData("id"),r=n.state.books.filter(function(e){return e._id==a&&(e.state=t),e});n.setState({books:r}),n.props.changed(a,t)},n.state={books:""},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){e.books!==this.props.books&&this.setState({books:this.props.books})}},{key:"render",value:function(){var e=this,t={unread:[],inProgess:[],complete:[]};return this.state.books.length>0?(this.state.books||[]).forEach(function(n){(t[n.state]||[]).push(r.a.createElement("div",{key:n.id,onDragStart:function(t){return e.onDragStart(t,n._id)},draggable:!0,className:"draggable",style:{backgroundColor:n.bgcolor}},r.a.createElement("div",null," ",r.a.createElement("span",{className:"title-sm"},"TYTU\u0141: "),n.title)))}):t={},console.log(t),r.a.createElement("div",{className:"container-drag"},r.a.createElement("div",{className:"wip",onDragOver:function(t){return e.onDragOver(t)},onDrop:function(t){e.onDrop(t,"unread")}},r.a.createElement("span",{className:"book-header"},"OCZEKUJ\u0104CE"),t.unread),r.a.createElement("div",{className:"inProgess",onDragOver:function(t){return e.onDragOver(t)},onDrop:function(t){e.onDrop(t,"inProgess")}},r.a.createElement("span",{className:"book-header"},"W TRAKCIE"),t.inProgess),r.a.createElement("div",{className:"droppable",onDragOver:function(t){return e.onDragOver(t)},onDrop:function(t){return e.onDrop(t,"complete")}},r.a.createElement("span",{className:"book-header"},"GOTOWE"),t.complete))}}]),t}(a.Component),$e=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).changed=function(e,t){n.props.updateBookStatus(e,t)},n.state={chatMsg:"",msgBy:""},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getBooksList()}},{key:"render",value:function(){var e=this.props.books;return r.a.createElement(Qe,{changed:this.changed,books:e})}}]),t}(a.Component);var Xe=Object(f.b)(function(e,t){return{books:e.books.filter(function(e){return e.user===t.location.pathname.split("/")[1]})}},function(e){return{getBooksList:function(t){return e(se.getBooksList(t))},updateBookStatus:function(t,n){return e(se.updateBookStatus(t,n))}}})($e),et=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(Xe,{location:this.props.location})}}]),t}(a.Component),tt=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){this.props.match.path;return r.a.createElement("div",null,r.a.createElement(Ue,null,r.a.createElement(m.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:Le}),r.a.createElement(d.a,{exact:!0,path:"/:user",component:Le}),r.a.createElement(d.a,{exact:!0,path:"/:user/myBooks",component:Ve}),"          ",r.a.createElement(d.a,{exact:!0,path:"/:user/planner",component:et}),r.a.createElement(d.a,{exact:!0,path:"/profile/:user",component:ze}),r.a.createElement(d.a,{exact:!0,path:"/chatDetail/:chatListId",component:Ze}))))}}]),t}(a.Component),nt=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(m.a,null,r.a.createElement(d.a,{path:"/registration/",component:G}),r.a.createElement(d.a,{path:"/login/",component:Ce}),r.a.createElement(d.a,{path:"/",component:tt})))}}]),t}(a.Component),at=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(nt,null)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var rt=n(210);c.a.render(r.a.createElement(f.a,{store:ge},r.a.createElement(rt.a,{loading:null,persistor:be},r.a.createElement("span",null,r.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",integrity:"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",crossOrigin:"anonymous"}),r.a.createElement(at,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[216,2,1]]]);
//# sourceMappingURL=main.48a82fff.chunk.js.map