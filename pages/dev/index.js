import Head from 'next/head'

export const getStaticProps = async () => {
	const response = await fetch('https://api.holotools.app/v1/live/');
	const data = await response.json();

	return { props: { holostat: data }, revalidate: 1 };
};

export default function Home({ holostat }) {
	function checkLive() {
		let found = false;
		for (var i = 0; i < holostat.live.length; i++) {
			if (holostat.live[i].channel.yt_channel_id === 'UCDqI2jOz0weumE8s7paEk6g') {
				found = true;
				return (
					<div>
						<h1>Roboco Is Live</h1>
						<p>Watch her right here!</p>
						<iframe src={"https://www.youtube.com/embed/"+holostat.live[i].yt_video_key} frameBorder="0"></iframe>
					</div>
				)
			}
		}
		if (found === false) {
			return (
				<div>
					<h1>Roboco Is Not Live</h1>
					<p>I haven't implemented fetching past streams yet, so look out for that</p>
				</div>
			)
		}
	}

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
							<p>This page is two things: 
								<ol type="1">
									<li>A pure and simple shitpost</li>
									<li>A way of showing my progress in learning web development</li>
								</ol>
							</p>
						</div>
						<div className="component">
							<h1>Image (Provided By My Friend)</h1>
							<img src="https://cdn.discordapp.com/attachments/639286586739130372/825190201596575764/image0.png"></img>
						</div>
						<div className="component">
							<h1>Embedded Video</h1>
							<div className="video-mask">
								<video width="100%" controls autoplay> 
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
							<h1>Current Hololive Streams</h1>
							{holostat.live.map((live, index) => {
								return(
								<li key={index}><b>{live.channel.name}:</b> {live.title}</li>)
							})}
						</div>
						<div className="component">
							{checkLive()}
						</div>
					</div>
				</div>
			</div>
  );
}
