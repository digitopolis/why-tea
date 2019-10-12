import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const VideoDetails = (props) => {
	const dateUploaded = new Date(props.snippet.publishedAt)
	return (
		<Row>
			<h2>{props.snippet.title}</h2>
			<p>{dateUploaded.toLocaleString()}</p>
			<hr />
			<h6>{props.snippet.channelTitle}</h6>
			<p>{props.snippet.description}</p>
		</Row>
	)
}

export default VideoDetails
