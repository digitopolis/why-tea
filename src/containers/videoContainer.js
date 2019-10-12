import React from 'react'
import { details } from '../testingData'
import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
import VideoPlayer from '../components/videoPlayer'
import VideoDetails from '../components/videoDetails'

const VideoContainer = (props) => {
	return (
		<Col xs={12} md={8}>
			<VideoPlayer videoId={'K-r7FRpZReo'}/>
			<VideoDetails {...details}/>
		</Col>
	)
}

export default VideoContainer
