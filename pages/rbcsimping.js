import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'

export default function RobocoSimping() {
	return(
		<div>
			<Head>
				<title>Roboco Simping</title>
				<link rel="icon" href="/main_ico.svg" />
				<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
				<script
            dangerouslySetInnerHTML={{
              __html: `
							axios.get('https://api.holotools.app/v1/live')
							.then(response => {
								console.log(response.data.live);
								var found = false;
								for (let i=0; i < (response.data.live).length; i++){
									if (response.data.live[i].channel.yt_channel_id === "UCDqI2jOz0weumE8s7paEk6g"){
										found = true;
										document.getElementById('activeStream').src = "https://www.youtube.com/embed/" + response.data.live[i].yt_video_key;
									}
								}
								if (found === false){
									document.getElementById('activeStream').src = "https://www.youtube.com/embed/" + response.data.live[i].yt_video_key
								}
							})
							.catch(error => console.error(error))
                  `,
            }}
          ></script>
			</Head>
			<div className={styles.navbar}>
        <div>
          <a
          href="/"
          rel="noopener noreferrer"
          >
            <img src="/main_ico.svg" alt="Home Icon" className={styles.mainico} />
            &nbsp;Home
          </a>
        </div>
        <a
        href="/rbcsimping"
        rel="noopener noreferrer"
				className={styles.navbaractive}
        >
          Roboco Simping
        </a>
        <a>
          No
        </a>
      </div>
			<main className={styles.main}>
				<h1 className={styles.title}>
					Sub to Robocosan
				</h1>
				<p className={styles.description}>
				　を購読するロボコさん
				</p>
				<iframe 
				id = "activeStream"
				width="1280" 
				height="720" 
				src="https://www.youtube.com/embed/_oqh2f3CTj4" 
				frameBorder="0"
				>
				</iframe>
			</main>
		</div>
	)
}