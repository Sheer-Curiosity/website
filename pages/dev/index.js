import Head from 'next/head'

export const getStaticProps = async () => {
	const response = await fetch('https://api.holotools.app/v1/live/');
	const data = await response.json();

	return { props: { holostat: data }, revalidate: 1 };
};

export default function Home({ holostat }) {
  return (
		<div>
			<Head>
				<title>Epic API Return</title>
			</Head>
				<div className="container">
					<div className="container-column">
						<div className="component">
							<h1>Gaming</h1>
							<p>Here is where the gaming occurs. Epic gaming. bhfbveywuibfiy b heufiwlb uiw fb uiw eubf wiubfiuwebfiu wbeuf iuwe bfuiwebiuf beiuwb fiuwe</p>
						</div>
						<div className="component">
							<h1>Gaming</h1>
						</div>
						<div className="component">
							<h1>Gaming576854672356785423</h1>
							<img src="https://cdn.discordapp.com/attachments/639286586739130372/825190201596575764/image0.png"></img>
						</div>
						<div className="component">
							<h1>Gaming</h1>
							<video width="100%" controls autoplay> 
								<source src="C-uhba1vgcgan61.mp4" type="video/mp4"></source>
							</video>
						</div>
					</div>
					<div className="container-column">
						<div className ="component">
							<h1>Upcoming Hololive Streams</h1>
							{holostat.live.map((live, index) => {
								return(
								<li key={index}>{live.title}</li>)
							})}
						</div>
					</div>
					<div className="container-column">
						<div className="component">
							<h1>Gaming</h1>
						</div>
						<div className="component">
							<h1>Gaming</h1>
						</div>
						<div className="component">
							<h1>Gaming</h1>
						</div>
						<div className="component">
							<h1>Gaming</h1>
						</div>
					</div>
				</div>
			</div>
  );
}
