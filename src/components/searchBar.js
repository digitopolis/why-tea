import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class SearchBar extends React.Component {

	state = {
		searchTerm: ''
	}

	render() {
		return (
			<Row>
				<Col>
					<InputGroup>
						<FormControl
							placeholder='Search'/>
						<InputGroup.Append>
							<Button>Search</Button>
						</InputGroup.Append>
					</InputGroup>
				</Col>
			</Row>
		)
	}
}

export default SearchBar
