/*! * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.*/
(this.webpackJsonpSudoku=this.webpackJsonpSudoku||[]).push([[0],{57:function(e,t,n){e.exports=n(95)},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(15),o=n.n(r);n(62),n(63),n(64),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(16),u=n(17),i=n(19),l=n(18),d=n(24),m=n(10),p=n(55),f=["layout","component"],h=function(e){var t=e.layout,n=e.component,a=Object(p.a)(e,f);return s.a.createElement(m.b,Object.assign({},a,{render:function(e){return s.a.createElement(t,null,s.a.createElement(n,e))}}))},v=n(22),g=n(9),E=(n(69),n(107)),k=n(100),O=n(101),b=n(102),j=n(99),S=n(103),y=n(104),w=n(105),C=n(97),I=n(106),N=n(98),M=(n(70),function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).toggle=function(){e.props.toggle(e.props.id)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(C.a,{style:this.props.invalid?{backgroundColor:"#c13434"}:{},id:"Popover".concat(this.props.id),value:0===this.props.value?"":this.props.value,onChange:function(){},disabled:this.props.disabled}),s.a.createElement(I.a,{placement:"right",isOpen:this.props.popoverOpen===this.props.id&&!this.props.disabled,target:"Popover".concat(this.props.id),toggle:this.toggle},s.a.createElement(N.a,null,s.a.createElement("div",{className:"sudoku-popover-grid"},[1,2,3,4,5,6,7,8,9].map((function(t){return s.a.createElement("li",{key:"".concat(e.props.id+t),onClick:function(){return e.props.setFieldValue(e.props.id,t)}},s.a.createElement("center",null,s.a.createElement(j.a,{className:"sudoku-cell-close",size:"sm"},t)))})),s.a.createElement("li",{onClick:function(){return e.props.setFieldValue(e.props.id,0)},style:{gridColumnStart:2}},s.a.createElement("center",null,s.a.createElement(j.a,{className:"sudoku-cell-close",size:"sm"},"-")))))))}}]),n}(s.a.Component)),P=function(e){for(var t=[],n=0;n<9;n++)for(var a=0;a<9;a++)n!==a&&e[n]===e[a]&&t.push([n,a]);return t},F=function(e){for(var t=[],n=0;n<9;n++){for(var a=[],s=0;s<9;s++)a.push(e[s][n]);t.push(a)}return t},R=function(e){var t=[];return[0,3,6].map((function(n){[0,3,6].map((function(a){var s=[];[0,1,2].map((function(t){[0,1,2].map((function(r){s.push(e[t+n][r+a])}))})),t.push(s)}))})),t},T={Check:function(e){var t=[];if(e.forEach((function(e,n){e.forEach((function(e,a){0===e&&t.push(n+""+a)}))})),0!==t.length)return t;e.forEach((function(e,n){var a=P(e);0!==a.length&&a.map((function(e){t.push(n+""+e[0]),t.push(n+""+e[1])}))})),F(e).forEach((function(e,n){var a=P(e);0!==a.length&&a.map((function(e){t.push(e[0]+""+n),t.push(e[1]+""+n)}))}));var n=new Map;return n.set("00","00"),n.set("01","01"),n.set("02","02"),n.set("03","10"),n.set("04","11"),n.set("05","12"),n.set("06","20"),n.set("07","21"),n.set("08","22"),n.set("10","03"),n.set("11","04"),n.set("12","05"),n.set("13","13"),n.set("14","14"),n.set("15","15"),n.set("16","23"),n.set("17","24"),n.set("18","25"),n.set("20","06"),n.set("21","07"),n.set("22","08"),n.set("23","16"),n.set("24","17"),n.set("25","18"),n.set("26","26"),n.set("27","27"),n.set("28","28"),n.set("30","30"),n.set("31","31"),n.set("32","32"),n.set("33","40"),n.set("34","41"),n.set("35","42"),n.set("36","50"),n.set("37","51"),n.set("38","52"),n.set("40","33"),n.set("41","34"),n.set("42","35"),n.set("43","43"),n.set("44","44"),n.set("45","45"),n.set("46","53"),n.set("47","54"),n.set("48","55"),n.set("50","36"),n.set("51","37"),n.set("52","38"),n.set("53","46"),n.set("54","47"),n.set("55","48"),n.set("56","56"),n.set("57","57"),n.set("58","58"),n.set("60","60"),n.set("61","61"),n.set("62","62"),n.set("63","70"),n.set("64","71"),n.set("65","72"),n.set("66","80"),n.set("67","81"),n.set("68","82"),n.set("70","73"),n.set("71","74"),n.set("72","75"),n.set("73","73"),n.set("74","74"),n.set("75","75"),n.set("76","83"),n.set("77","84"),n.set("78","85"),n.set("80","66"),n.set("81","67"),n.set("82","68"),n.set("83","76"),n.set("84","77"),n.set("85","78"),n.set("86","86"),n.set("87","87"),n.set("88","88"),R(e).forEach((function(e,a){var s=P(e);0!==s.length&&s.map((function(e){t.push(n.get(a+""+e[0]),n.get(a+""+e[0]))}))})),t}},W={getSudoku:function(e){return fetch("".concat("https://unigames-backend.herokuapp.com/v1/api","/sudoku?difficulty=").concat(e),{method:"GET",headers:{Authorization:localStorage.getItem("user"),"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){return function(e){return e.json().then((function(t){var n=t;return e.ok?n:(401===e.status&&localStorage.removeItem("user"),e.status,n&&n.message||e.statusText)}))}(e)}))}};var V=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).setLoading=function(e){a.setState(Object(g.a)(Object(g.a)({},a.state),{},{loading:e}))},a.setGameStarted=function(e){a.setState(Object(g.a)(Object(g.a)({},a.state),{},{gameStarted:e}))},a.setDifficulty=function(e){a.setState({difficulty:e.currentTarget.value})},a.setSudoku=function(e){a.setState(Object(g.a)(Object(g.a)({},a.state),{},{sudoku:e}))},a.setSudokuReset=function(e){a.setState(Object(g.a)(Object(g.a)({},a.state),{},{sudokuReset:e}))},a.setError=function(e){a.setState(Object(g.a)(Object(g.a)({},a.state),{},{error:e}))},a.setWinnerModal=function(e){a.setState(Object(g.a)(Object(g.a)({},a.state),{},{winnerModalOpen:e}))},a.setPopoverOpen=function(e){a.setState(Object(g.a)(Object(g.a)({},a.state),{},{popoverOpen:e}))},a.setFieldValue=function(e,t){var n=Object(v.a)(a.state.sudoku);n[parseInt(e[0])][parseInt(e[1])]=t,a.setSudoku(Object(v.a)(n)),a.setPopoverOpen("")},a.setInvalidIndices=function(e){a.setState(Object(g.a)(Object(g.a)({},a.state),{},{invalidIndices:e})),setTimeout((function(){return a.setState(Object(g.a)(Object(g.a)({},a.state),{},{invalidIndices:[]}))}),3e3)},a.toggle=function(e){return a.setPopoverOpen(e)},a.timer=function(){var e=a.state.timer.seconds,t=a.state.timer.minutes,n=a.state.timer.hours;++e>=60&&(e=0,++t>=60&&(t=0,n++)),a.setState(Object(g.a)(Object(g.a)({},a.state),{},{timer:{seconds:e,minutes:t,hours:n}}))},a.resetTimer=function(){a.setState(Object(g.a)(Object(g.a)({},a.state),{},{timer:{seconds:0,minutes:0,hours:0}}))},a.clearSudoku=function(){var e=[];a.state.sudokuReset.map((function(t){return e.push(Object(v.a)(t))})),a.setSudoku(e)},a.createNew=function(){clearInterval(a.state.intervalId),a.setLoading(!0),W.getSudoku(a.state.difficulty).then((function(e){a.setSudoku(e);var t=[];e.map((function(e){return t.push(Object(v.a)(e))})),a.setSudokuReset(t),a.resetTimer(),a.setState(Object(g.a)(Object(g.a)({},a.state),{},{gameStarted:!0,invalidIndices:[],loading:!1,intervalId:setInterval((function(){return a.timer()}),1e3)}))}),(function(e){a.setError(e),a.setLoading(!1)}))},a.checkSudoku=function(e){e.preventDefault();var t=T.Check(a.state.sudoku);if(0===t.length)return clearInterval(a.state.intervalId),void a.setWinnerModal(!0);a.setInvalidIndices(t)},a.state={gameStarted:!1,sudoku:null,sudokuReset:null,error:null,popoverOpen:"",invalidIndices:[],timer:{seconds:0,minutes:0,hours:0},loading:!1,intervalId:0,winnerModalOpen:!1,difficulty:"easy"},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;if(null!==this.state.error)return s.a.createElement("center",null,"Error loading sudoku please refresh");if(this.state.loading)return s.a.createElement("center",null,"Loading game...");if(!this.state.gameStarted)return s.a.createElement(E.a,{isOpen:!0},s.a.createElement(k.a,null,"Select Difficulty"),s.a.createElement(O.a,null,s.a.createElement("select",{onChange:this.setDifficulty},s.a.createElement("option",{value:"easy"},"Easy"),s.a.createElement("option",{value:"medium"},"Medium"),s.a.createElement("option",{value:"hard"},"Hard"),s.a.createElement("option",{value:"vhard"},"Very hard"),s.a.createElement("option",{value:"extreme"},"Pro"))),s.a.createElement(b.a,null,s.a.createElement(j.a,{color:"secondary",onClick:function(){return e.createNew()}},"Start game")));return s.a.createElement(S.a,{className:"sudoku",fluid:!0},s.a.createElement(E.a,{isOpen:this.state.winnerModalOpen,toggle:function(){return e.setWinnerModal(!1)}},s.a.createElement(k.a,{toggle:function(){return e.setWinnerModal(!1)}},"Congratulations"),s.a.createElement(O.a,null,"You won with a time of: ",this.state.timer.hours," hours"," ",this.state.timer.minutes," mins ",this.state.timer.seconds," secs"),s.a.createElement(b.a,null,s.a.createElement(j.a,{color:"secondary",onClick:function(){return e.setWinnerModal(!1)}},"Close"))),s.a.createElement(y.a,null,s.a.createElement(w.a,{className:"sudoku-main"},s.a.createElement("div",{className:"sudoku-table"},function(){var t=[],n=[0,3,6],a=[2,5,8],r=[0,3,6],o=[2,5,8];return[0,1,2,3,4,5,6,7,8].map((function(c,u){[0,1,2,3,4,5,6,7,8].map((function(c,i){t.push(s.a.createElement("li",{className:"".concat(n.includes(u)?"sudoku-top":""," ").concat(r.includes(i)?"sudoku-left":"","  ").concat(o.includes(i)?"sudoku-right":""," ").concat(a.includes(u)?"sudoku-bottom":"")},s.a.createElement(M,{popoverOpen:e.state.popoverOpen,setPopoverOpen:e.setPopoverOpen,toggle:e.toggle,id:"".concat(u).concat(i),invalid:e.state.invalidIndices.includes(u+""+i)&&0===e.state.sudokuReset[u][i],value:e.state.sudoku[u][i],disabled:0!==e.state.sudokuReset[u][i],setFieldValue:e.setFieldValue})))}))})),t}())),s.a.createElement(w.a,{className:"sudoku-sidebar"},s.a.createElement(j.a,{onClick:this.checkSudoku},"Check"),s.a.createElement(j.a,{onClick:function(){return e.setGameStarted(!1)}},"New Game"),s.a.createElement(j.a,{onClick:function(){return e.clearSudoku()}},"Clear"),s.a.createElement("div",null,s.a.createElement("div",{className:"sudoku-counter"},this.state.timer.hours," : ",this.state.timer.minutes," :"," ",this.state.timer.seconds)))))}}]),n}(s.a.Component),x=function(e){var t=e.children;return s.a.createElement("div",{style:{height:"100%",width:"100%"}},s.a.createElement("main",{style:{height:"100%",width:"100%"}},t))};n(93);var D=function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"game-view"},s.a.createElement(V,null)))},G=function(){return s.a.createElement(m.d,null,s.a.createElement(h,{component:D,exact:!0,layout:x,path:"/"}),s.a.createElement(m.a,{to:"/"}))},L=(n(94),function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return s.a.createElement(d.a,null,s.a.createElement(G,null))}}]),n}(a.Component));o.a.render(s.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.07f5e89a.chunk.js.map