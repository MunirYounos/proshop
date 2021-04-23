import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'


const ProductScreen = ({ match, color }) => {
	// const product = products.find(p => p._id === match.params.id)
	const [product, setProduct] = useState({})
	useEffect(() => {
		const fetchProduct = async () => {
			const { data } = await axios.get(`/api/products/${match.params.id}`)
			setProduct(data)
		}
		fetchProduct()
	}, [match])
	return (
		<>
			<Link className="btn btn-light my-3" to='/'>
				<i className="fas fa-arrow-left"></i>    Go back
				</Link>
			<Row>
				<Col md={6}>
					<Image src={product.image} alt={product.name} fluid />
				</Col>
				<Col md={6}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h2>{product.name}</h2>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating
								value={product.rating}
								text={`${product.numReviews} reviews`} />
						</ListGroup.Item>
						<ListGroup.Item>
							<h3>Price: <span style={{ color }}>${product.price}</span></h3>
						</ListGroup.Item>
					</ListGroup>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<p>{product.description}</p>
						</ListGroup.Item>
					</ListGroup>
					<Card>
						<ListGroup variant='flush'>
							<ListGroup.Item >
								<Row>
									<Col>
										Status :
									</Col>
									<Col>
										{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Button className='btn-block' type='button' disabled={product.countInStock === 0}>Add to cart</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	)
}
ProductScreen.defaultProps = {
	color: '#242423'
}
export default ProductScreen
