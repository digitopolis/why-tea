import React from 'react';
import './App.css';
import { YOUTUBE } from './apiEndpoints'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import SearchBar from './components/searchBar'
import VideoList from './containers/videoList'
import VideoContainer from './containers/videoContainer'

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

	handleVideoSelect = (videoId) => {
		const selectedVideo = videoId
		this.setState({ selectedVideo })
	}

	render() {
		return (
	    <Container>
				<Row className='justify-content-center'>
					<SearchBar handleSubmit={this.handleSubmit}/>
				</Row>
				<Row className='justify-content-center'>
					<VideoContainer />
					<VideoList
						videos={this.state.searchResults}
						handleVideoSelect={this.handleVideoSelect}
					/>
				</Row>
			</Container>
	  );
	}
}

export default App;
