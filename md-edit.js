class MarkdownEditor extends React.Component {

  constructor(props) {
    super(props);
    this.getUpdate = this.getUpdate.bind(this);
    this.state = {value: ''};
  }

  getUpdate() {
    this.setState({value: this.refs.textinput.value})
  }
  outputText() {
    return {__html: marked(this.state.value)};
  }

  render() {
    return (
      <div className="container">
        <h3> markdown editor </h3>
        <div className="row">
          <div className="col"><textarea id="textinput" ref="textinput" onChange={this.getUpdate}/></div>
          <div className="col mdText" dangerouslySetInnerHTML={this.outputText()}></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MarkdownEditor />, document.getElementById("root"));