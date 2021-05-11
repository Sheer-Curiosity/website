import Head from 'next/head';
import { Parallax } from 'react-scroll-parallax';
import CurrentLives from '../../components/CurrentLives';
import RobocoCheck from '../../components/RobocoCheck';
import devStyles from '../../styles/devStyles.module.css'

export default function Home() {
  return (
		<div>
			<Head>
				<title>Dev Playground</title>
			</Head>
			<div className={devStyles['background']}>
				<div className={devStyles['main']}>
					<h1 className={devStyles['page-title']}> Dev Playground </h1>
					<div className={devStyles['container']}>
						<div className={devStyles['container-column']}>
							<div className={devStyles['component']}>
								<h1>About This Page</h1>
								<p>This page is two things:</p>
								<ol type="1">
									<li>A pure and simple shitpost</li>
									<li>A way of showing my progress in learning web development</li>
								</ol>
							</div>
							<div className={devStyles['component']}>
								<h1>Image (Provided By My Friend)</h1>
								<img src="https://cdn.discordapp.com/attachments/639286586739130372/825190201596575764/image0.png"/>
							</div>
							<div className={devStyles['component']}>
								<h1>Embedded Video</h1>
								<div className={devStyles['video-mask']}>
									<video width="100%" controls autoPlay> 
										<source src="/dev/videos/C-uhba1vgcgan61.mp4" type="video/mp4"></source>
									</video>
								</div>
							</div>
						</div>
						<div className={devStyles['container-column']}>
							<div className={devStyles['component']}>
								<h1>I Hope Your Eyes Bleed Here</h1>
							</div>
						</div>
						<div className={devStyles['container-column']}>
							<div className ={devStyles['component']}>
								<CurrentLives/>
							</div>
							<div className={devStyles['component']}>
								<RobocoCheck/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}
