import Head from 'next/head';
import { Container, ListGroup, Card, Button, Row, Col, Image } from 'react-bootstrap';

export default function Home() {
	return (
		<div className='container'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'
					integrity='sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=='
					crossOrigin='anonymous'
				/>
			</Head>

			<main>
				<Container>
					<section className='hero'>
						<h1 className='title'>Welcome</h1>

						<p className='description'>
							My name is <span className='hero-name'>Joey Desjardin</span>. I am a{' '}
							<span className='hero-job'>front-end engineer</span> from San Jose, CA.
							Check out some of my recent projects below.
						</p>
					</section>

					<section>
						<h2>Projects</h2>
						<Card style={{ padding: '2rem', margin: '2rem 0' }}>
							<Row style={{ display: 'flex', flexDirection: 'column' }}>
								<h2>Album Rankings</h2>
								<p>
									<strong>About:</strong> This application allows the user to
									compile lists of their ranked favorite albums within chosen
									categories{' '}
								</p>
							</Row>
							<Row>
								<Col>
									<Image
										src='/image1.PNG'
										style={{ width: '480px', height: '270px' }}
									/>
								</Col>
								<Col>
									<Button className='btn btn-large m-2'>Visit Site</Button>
									<Button className='btn btn-large m-2'>View Code</Button>
								</Col>
							</Row>

							<h3>Tech Stack Used</h3>
							<Row>
								<Col>
									<ListGroup>
										<h4>Backend</h4>
										<ListGroup.Item>Node.js & Express API</ListGroup.Item>
										<ListGroup.Item>JWT Authentication</ListGroup.Item>
										<ListGroup.Item>PostgreSQL</ListGroup.Item>
									</ListGroup>
								</Col>

								<Col>
									<ListGroup>
										<h4>Frontend</h4>
										<ListGroup.Item>React</ListGroup.Item>
										<ListGroup.Item>Redux</ListGroup.Item>
										<ListGroup.Item>CSS</ListGroup.Item>
									</ListGroup>
								</Col>
							</Row>
						</Card>

						<Card style={{ padding: '2rem', margin: '2rem 0' }}>
							<Row style={{ display: 'flex', flexDirection: 'column' }}>
								<h2>E-Commerce</h2>
								<p>
									<strong>About:</strong> This application has a shopping cart
									that users can use to add items to anc create an order. Then the
									user can go through the process to place the order. Finally an
									admin can manage orders, users, and products{' '}
								</p>
							</Row>
							<Row>
								<Col>
									<Image
										src='/ecomm-img.jpg'
										style={{ width: '480px', height: '270px' }}
									/>
								</Col>
								<Col>
									<Button className='btn btn-large m-2'>Visit Site</Button>
									<Button className='btn btn-large m-2'>View Code</Button>
								</Col>
							</Row>

							<h3>Tech Stack Used</h3>
							<Row>
								<Col>
									<ListGroup>
										<h4>Backend</h4>
										<ListGroup.Item>Node.js & Express API</ListGroup.Item>
										<ListGroup.Item>JWT Authentication</ListGroup.Item>
										<ListGroup.Item>MongoDB</ListGroup.Item>
									</ListGroup>
								</Col>

								<Col>
									<ListGroup>
										<h4>Frontend</h4>
										<ListGroup.Item>React</ListGroup.Item>
										<ListGroup.Item>Redux</ListGroup.Item>
										<ListGroup.Item>CSS</ListGroup.Item>
									</ListGroup>
								</Col>
							</Row>
						</Card>

						<Card style={{ padding: '2rem', margin: '2rem 0' }}>
							<Row style={{ display: 'flex', flexDirection: 'column' }}>
								<h2>Quotes</h2>
								<p>
									<strong>About:</strong> This application allows user to view
									quotes and seach by tag name, author, or word in quote.{' '}
								</p>
							</Row>
							<Row>
								<Col>
									<Image
										src='/image1.PNG'
										style={{ width: '480px', height: '270px' }}
									/>
								</Col>
								<Col>
									<Button className='btn btn-large m-2'>Visit Site</Button>
									<Button className='btn btn-large m-2'>View Code</Button>
								</Col>
							</Row>

							<h3>Tech Stack Used</h3>
							<Row>
								<Col>
									<ListGroup>
										<h4>Backend</h4>
										<ListGroup.Item>CMS - Sanity</ListGroup.Item>
									</ListGroup>
								</Col>

								<Col>
									<ListGroup>
										<h4>Frontend</h4>

										<ListGroup.Item>Next.js</ListGroup.Item>
										<ListGroup.Item>React</ListGroup.Item>
										<ListGroup.Item>CSS</ListGroup.Item>
									</ListGroup>
								</Col>
							</Row>
						</Card>

						<Card style={{ padding: '2rem', margin: '2rem 0' }}>
							<Row style={{ display: 'flex', flexDirection: 'column' }}>
								<h2>Blog</h2>
								<p>
									<strong>About:</strong> This is a markdown blog that is
									generated using next.js static site generation feature{' '}
								</p>
							</Row>
							<Row>
								<Col>
									<Image
										src='/blog-img.jpg'
										style={{
											width: '480px',
											height: '270px'
										}}
									/>
								</Col>
								<Col>
									<Button className='btn btn-large m-2'>Visit Site</Button>
									<Button className='btn btn-large m-2'>View Code</Button>
								</Col>
							</Row>

							<h3>Tech Stack Used</h3>
							<Row>
								<Col>
									<ListGroup>
										<h4>JAMStack</h4>
										<ListGroup.Item>Next.js - React</ListGroup.Item>
										<ListGroup.Item>Markdown</ListGroup.Item>
										<ListGroup.Item>CSS</ListGroup.Item>
									</ListGroup>
								</Col>
							</Row>
						</Card>
					</section>

					<section>
						<Row className='m-5 p-5'>
							<Col sm={6}>
								<h2>About me</h2>
								<p>this is a paragraph description about me ...</p>
							</Col>
							<Col sm={6}>
								<Image
									src='/profile-square.jpg'
									style={{ width: '200px', height: '200px' }}
									rounded
								/>
							</Col>
						</Row>
					</section>
				</Container>
			</main>

			<footer>
				<a href='https://github.com/jwdesjardin' target='__blank'>
					<i className='fab fa-github fa-2x m-3' />
				</a>
				<a href='https://www.linkedin.com/in/joseph-desjardin-b34441137/' target='__blank'>
					<i className='fab fa-linkedin fa-2x m-3' />
				</a>
				<a href='mailto:jwdesjardin@gmail.com'>
					<i className='fas fa-envelope fa-2x m-3' />
				</a>
			</footer>

			{/* color: #00c597; */}
			{/* color: #61dbfb; */}

			<style jsx>{`
				.hero {
					min-height: 80vh;
					display: flex;
					flex-direction: column;
					justify-content: center;
				}

				.container {
					min-height: 100vh;
					padding: 0 0.5rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				main {
					padding: 5rem 0;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				footer {
					width: 100%;
					height: 100px;
					border-top: 1px solid #eaeaea;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				footer img {
					margin-left: 0.5rem;
				}

				footer a {
					display: flex;
					justify-content: center;
					align-items: center;
				}

				a {
					color: inherit;
					text-decoration: none;
				}

				.title a {
					color: #0070f3;
					text-decoration: none;
				}

				.title a:hover,
				.title a:focus,
				.title a:active {
					text-decoration: underline;
				}

				.title {
					margin: 0;
					line-height: 1.15;
					font-size: 4rem;
				}

				.title,
				.description {
					text-align: center;
				}

				.description {
					line-height: 1.5;
					font-size: 1.5rem;
				}

				code {
					background: #fafafa;
					border-radius: 5px;
					padding: 0.75rem;
					font-size: 1.1rem;
					font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
						Bitstream Vera Sans Mono, Courier New, monospace;
				}

				.grid {
					display: flex;
					align-items: center;
					justify-content: center;
					flex-wrap: wrap;

					max-width: 800px;
					margin-top: 3rem;
				}

				.card {
					margin: 1rem;
					flex-basis: 45%;
					padding: 1.5rem;
					text-align: left;
					color: inherit;
					text-decoration: none;
					border: 1px solid #eaeaea;
					border-radius: 10px;
					transition: color 0.15s ease, border-color 0.15s ease;
				}

				.card:hover,
				.card:focus,
				.card:active {
					color: #0070f3;
					border-color: #0070f3;
				}

				.card h3 {
					margin: 0 0 1rem 0;
					font-size: 1.5rem;
				}

				.card p {
					margin: 0;
					font-size: 1.25rem;
					line-height: 1.5;
				}

				.hero-name {
					color: #833fbc;
				}

				.hero-job {
					color: #48e5c2;
				}

				.logo {
					height: 1em;
				}

				@media (max-width: 600px) {
					.grid {
						width: 100%;
						flex-direction: column;
					}
				}
			`}</style>

			<style jsx global>{`
				html,
				body {
					background-color: #3d405b;
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
						Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
				}

				* {
					box-sizing: border-box;
				}
			`}</style>
		</div>
	);
}
