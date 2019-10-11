import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const VideoItem = ({ id, snippet }) => {
	return (
		<Card>
			<Col>
				<p>video {snippet.channelTitle}</p>
			</Col>
		</Card>
	)
}

export default VideoItem
