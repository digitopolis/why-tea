import React from 'react';
import './App.css';
import { YTSEARCH, ONEVIDEO } from './apiEndpoints'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import SearchBar from './components/searchBar'
import VideoList from './containers/videoList'
import VideoContainer from './containers/videoContainer'

class App extends React.Component {

	state = {
		searchResults: [],
		selectedVideo: null,
		videoDetails: {}
	}

	handleSubmit = async (searchTerm) => {
		const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
		const data = await fetch(`${YTSEARCH}q=${searchTerm}&key=${apiKey}`).then(res => res.json())
		this.setState({
			searchResults: data.items,
			selectedVideo: null
		})
	}

	handleVideoSelect = async (videoId) => {
		const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
		const details = await fetch(`${ONEVIDEO}id=${videoId}&key=${apiKey}`).then(res => res.json())
		this.setState({
			selectedVideo: videoId,
		 	videoDetails: details.items[0]
		})
	}

	render() {
		return (
	    <Container>
				<Row className='justify-content-center my-3'>
					<SearchBar handleSubmit={this.handleSubmit}/>
				</Row>
				<Row className='justify-content-center'>
					{this.state.selectedVideo ? <VideoContainer details={this.state.videoDetails}/> : null }
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
