import React from 'react';
import './App.css';
import { YTSEARCH, ONEVIDEO, apiKey } from './apiEndpoints'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import SearchBar from './components/searchBar'
import VideoList from './containers/videoList'
import VideoContainer from './containers/videoContainer'

class App extends React.Component {

	state = {
		searchTerm: '',
		searchResults: [],
		pageTokens: {},
		selectedVideo: null,
		videoDetails: {}
	}

	handleSubmit = async (searchTerm) => {
		// const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
		const pageTokens = {}
		const data = await fetch(`${YTSEARCH}q=${searchTerm}&key=${apiKey}`).then(res => res.json())
		pageTokens.next = data.nextPageToken ? data.nextPageToken : null
		pageTokens.prev = data.prevPageToken ? data.prevPageToken : null
		this.setState({
			searchTerm: searchTerm,
			searchResults: data.items,
			selectedVideo: null,
			pageTokens: pageTokens
		})
	}

	handleVideoSelect = async (videoId) => {
		// const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
		const details = await fetch(`${ONEVIDEO}id=${videoId}&key=${apiKey}`).then(res => res.json())
		this.setState({
			selectedVideo: videoId,
		 	videoDetails: details.items[0]
		})
	}

	handlePageChange = async (pageToken) => {
		// const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
		const pageTokens = {}
		const data = await fetch(`${YTSEARCH}pageToken=${pageToken}&q=${this.state.searchTerm}&key=${apiKey}`)
		.then(res => res.json())
		pageTokens.next = data.nextPageToken ? data.nextPageToken : null
		pageTokens.prev = data.prevPageToken ? data.prevPageToken : null
		this.setState({
			searchResults: data.items,
			pageTokens: pageTokens
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
						pageTokens={this.state.pageTokens}
						handleVideoSelect={this.handleVideoSelect}
						handlePageChange={this.handlePageChange}
					/>
				</Row>
			</Container>
	  );
	}
}

export default App;
