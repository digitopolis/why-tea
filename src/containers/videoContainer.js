import React from 'react'
import Col from 'react-bootstrap/Col'
import VideoPlayer from '../components/videoPlayer'
import VideoDetails from '../components/videoDetails'

const VideoContainer = (props) => {
	return (
		<Col xs={12} md={8} className='mr-3 border'>
			<VideoPlayer videoId={props.details.id}/>
			<VideoDetails {...props.details}/>
		</Col>
	)
}

export default VideoContainer
