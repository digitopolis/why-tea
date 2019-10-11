import React from 'react';
import './App.css';
import { YOUTUBE } from './apiEndpoints'
import Container from 'react-bootstrap/Container'
import SearchBar from './components/searchBar'

class App extends React.Component {

	handleSubmit = (searchTerm) => {
		const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
		fetch(`${YOUTUBE}q=${searchTerm}&key=${apiKey}`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
			})
	}

	render() {
		return (
	    <Container>
				<SearchBar handleSubmit={this.handleSubmit}/>
			</Container>
	  );
	}
}

export default App;
