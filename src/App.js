import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked'
import './App.scss';


class App extends Component {

  state = {
    text: placeholder,
    title: "Markdown Previewer"
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  render(){
    const markdown = marked(this.state.text)

    return (   
      <div className = "container mt-4">
        <h1>{this.state.title}</h1>
        <div className = "row">
          <div className="col-lg-6 editor-border">
            <h5 className = "editor-border__header text-center">Editor</h5>
            <textarea id="editor" className="editor" value={this.state.text} onChange = {this.handleChange}/>
          </div>
          <div className="col-lg-6 preview-border">
            <h5 className = "preview-border__header text-center">Preview</h5>
            <div id="preview" className="previewer" dangerouslySetInnerHTML={{__html: markdown}}></div>
          </div>
        </div>
      </div>
    );
  }
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links to my github](https://github.com/budnickip), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export default App;
