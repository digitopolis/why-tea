import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import VideoPlayer from '../components/videoPlayer'

const VideoContainer = (props) => {
	return (
		<Col xs={12} md={8}>
			<VideoPlayer videoId={'K-r7FRpZReo'}/>
			<Row>Details</Row>
		</Col>
	)
}

export default VideoContainer
