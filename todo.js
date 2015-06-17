var TodoList = React.createClass({
  markDone: function(e){
  	e.target.style.textDecoration = 'line-through';
  },
  render: function() {
  	var that = this;
    var createItem = function(itemText, index) {
      return <li onClick={that.markDone} key={index + itemText}>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h3>TODO</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }
});

React.render(<TodoApp />, document.getElementById('container')); 
