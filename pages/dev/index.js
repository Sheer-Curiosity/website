import Head from 'next/head';
import CurrentLives from '../../components/CurrentLives';
import RobocoCheck from '../../components/RobocoCheck';

export default function Home() {
  return (
		<div className="main">
			<Head>
				<title>Dev Playground</title>
			</Head>
			<div>
				<h1 className="center-text"> Dev Playground </h1>
			</div>
				<div className="container">
					<div className="container-column">
						<div className="component">
							<h1>About This Page</h1>
							<p>This page is two things:</p>
							<ol type="1">
								<li>A pure and simple shitpost</li>
								<li>A way of showing my progress in learning web development</li>
							</ol>
						</div>
						<div className="component">
							<h1>Image (Provided By My Friend)</h1>
							<img src="https://cdn.discordapp.com/attachments/639286586739130372/825190201596575764/image0.png"></img>
						</div>
						<div className="component">
							<h1>Embedded Video</h1>
							<div className="video-mask">
								<video width="100%" controls autoPlay> 
									<source src="C-uhba1vgcgan61.mp4" type="video/mp4"></source>
								</video>
							</div>
						</div>
					</div>
					<div className="container-column">
						<div className="component">
							<h1>I Hope Your Eyes Bleed Here</h1>
						</div>
					</div>
					<div className="container-column">
						<div className ="component">
							<CurrentLives/>
						</div>
						<div className="component">
							<RobocoCheck/>
						</div>
					</div>
				</div>
			</div>
  );
}
