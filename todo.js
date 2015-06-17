var TodoItem = React.createClass({
  getInitialState: function() {
    return {done: false};
  },
  markDone: function(){
  	this.setState({done: true});
  },
  render: function() {
  	var style = {};
  	if (this.state.done) {
  		style = {'color':'grey','text-decoration':'line-through'};
  	} else{

  	};

    return <li style={style} key={this.props.itemText} >
    		 {this.props.itemText}
  			 <button onClick={this.markDone}>X</button>
	  	   </li>;	
  }
});

var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText, index) {
      return <TodoItem itemText={itemText} />;
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
