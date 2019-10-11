import React from 'react';
import './App.css';
import { YOUTUBE } from './apiEndpoints'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import SearchBar from './components/searchBar'
import VideoPlayer from './containers/videoPlayer'
import VideoList from './containers/videoList'

class App extends React.Component {

	state = {
		searchResults: [],
		selectedVideo: null
	}

	handleSubmit = async (searchTerm) => {
		const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
		const data = await fetch(`${YOUTUBE}q=${searchTerm}&key=${apiKey}`).then(res => res.json())
		this.setState({
			searchResults: data.items
		})
	}

	render() {
		return (
	    <Container>
				<Row className='justify-content-center'>
					<SearchBar handleSubmit={this.handleSubmit}/>
				</Row>
				<Row className='justify-content-center'>
					<VideoPlayer />
					<VideoList />
				</Row>
			</Container>
	  );
	}
}

export default App;
