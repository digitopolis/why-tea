import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class SearchBar extends React.Component {

	state = {
		searchTerm: ''
	}

	handleChange = (event) => {
		const searchTerm = event.target.value
		this.setState({ searchTerm })
	}

	handleSubmit = (event) => {
		event.preventDefault()
		console.log('submited!', this.state.searchTerm);
	}

	render() {
		return (
			<Row>
				<Col>
					<Form onSubmit={this.handleSubmit}>
						<InputGroup>
							<FormControl
								placeholder='Search'
								value={this.state.searchTerm}
								onChange={this.handleChange}/>
							<InputGroup.Append>
								<Button variant='secondary' type='submit'>Search</Button>
							</InputGroup.Append>
						</InputGroup>
					</Form>
				</Col>
			</Row>
		)
	}
}

export default SearchBar
