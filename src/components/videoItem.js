import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const VideoItem = ({ id, snippet }) => {
	const thumbnailUrl = snippet.thumbnails.default.url
	return (
		<Card>
			<Col>
				<Card.Img src={thumbnailUrl}/>
			</Col>
			<Col>
				<Card.Body>
					<Card.Title>{snippet.title}</Card.Title>
					<Card.Text>{snippet.channelTitle}</Card.Text>
				</Card.Body>
			</Col>
		</Card>
	)
}

export default VideoItem
