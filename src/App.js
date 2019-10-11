import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import SearchBar from './components/searchBar'

class App extends React.Component {

	handleSubmit = (searchTerm) => {
		const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
		console.log(searchTerm, apiKey);
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
