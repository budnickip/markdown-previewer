(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),a=n.n(i),s=n(3),o=n.n(s),c=(n(14),n(4)),d=n(5),l=n(8),h=n(7),u=n(6),b=n.n(u),m=(n(15),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={text:f,title:"Markdown Previewer"},e.handleChange=function(t){e.setState({text:t.target.value})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=b()(this.state.text);return Object(r.jsxs)("div",{className:"container mt-4",children:[Object(r.jsx)("h1",{children:this.state.title}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-6 editor-border",children:[Object(r.jsx)("h5",{className:"editor-border__header text-center",children:"Editor"}),Object(r.jsx)("textarea",{id:"editor",className:"editor",value:this.state.text,onChange:this.handleChange})]}),Object(r.jsxs)("div",{className:"col-6 preview-border",children:[Object(r.jsx)("h5",{className:"preview-border__header text-center",children:"Preview"}),Object(r.jsx)("div",{id:"preview",className:"previewer",dangerouslySetInnerHTML:{__html:e}})]})]})]})}}]),n}(i.Component)),f="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links to my github](https://github.com/budnickip), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n",j=m,v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),i(e),a(e),s(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.8747ef9d.chunk.js.map