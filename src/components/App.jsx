import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Foo from '../Foo';

class App extends Component {
	constructor() {
		super();
		let foo = new Foo('demo');
		this.state = {
			greeting: 'loading...'
		};
		foo.greet()
			.then((value) => {
                this.setState({ greeting: value });
        	});
	}
	render() {

		return (
			<p>{this.state.greeting}</p>
		);
		
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));