import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const VideoDetails = (props) => {
	const dateUploaded = new Date(props.snippet.publishedAt)
	return (
		<Container>
			<Row className='my-2 border-bottom'>
				<Col className='px-0'>
					<h5>{props.snippet.title}</h5>
					<p>{dateUploaded.toLocaleString()}</p>
				</Col>
			</Row>
			<Row>
				<p className='h6'>{props.snippet.channelTitle}</p>
				<p>{props.snippet.description}</p>
			</Row>
		</Container>
	)
}

export default VideoDetails
