import React from 'react'
import { Spinner } from 'react-bootstrap'
const Loader = () => {
	return (
		<Spinner animation='grow' role='status' variant='success' style={{
			width: '100px',
			height: '100px',
			margin: 'auto',
			display: 'block'
		}} >
			<span className="sr-only">Waiting for data loading ...</span>
		</Spinner>
	)
}

export default Loader
