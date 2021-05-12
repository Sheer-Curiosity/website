import Head from 'next/head';
import UniNavbarAbout from '../../components/UniNavbarAbout';
import uniStyles from '../../styles/uniStyles.module.css'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
	const [ session, loading ] = useSession()

	if (loading) {
		return (
			<div>Loading...</div>
		)
	}
	if (!session) {
    return (
      <div>
				<Head>
					<title>Login</title>
				</Head>
        Not signed in <br/>
        <button onClick={() => signIn(null, { callbackUrl: 'https://absoluteinquisition.xyz/uni/about' })}>Sign in</button>
      </div>
    )
  }
  if (session) {
		return (
			<div>
				<Head>
					<title>About</title>
				</Head>
				<UniNavbarAbout/>
				<div className={uniStyles['main-photo']}>
					<div className={uniStyles['title']}>
						<b>About</b>
					</div>
				</div>
				<div className={uniStyles['divider']}/>
				<div className={uniStyles['component3']}>
					<b>About Me</b>
					<p>
						My name is Ryan Severin. I was born and raised with my younger sister in Manhattan Beach, California by parents who are both Canadian immigrants. At age 7, I was diagnosed with ADHD.
						This diagnosis has made my academic life challenging, but I don't let it stop me from doing the things I love. A few of my hobbies include programming, scripting,
						game modding, 3D rigging, video editing, and streaming. I have also dabbled in game development, making small VR demos in Unity. But, more than anything, I love 
						anime and Japanese internet culture. As of writing, I channel this love by volunteering as a video editor in a Virtual YouTuber translation group. Most of my work
						in programming and 3D rigging also revolves around anime-themed topics. Despite how much I've already done, I'm always looking to learn more, and do more.
					</p>
				</div>
				<div className={uniStyles['component4']}>
						<img src="/uni/photos/logos.png"/>
						<b>About This Website</b>
						<p>
							The website you are currently viewing was built from the ground up by me. And when I say "from ground up", I mean from the ground up. I purchased the domain name
							with my own money, the site is hosted on Vercel, and each page was written using a comination of React + Next.js and CSS. No premade sites, no easy route for me.
							When I set out to make this site, I said to myself that if I was going to add a website to my college applications, I had to make it my way. So, I did.
						</p>
						<p>
							<a className={uniStyles['link-color']} href="https://github.com/Sheer-Curiosity/website" target="_blank">Click here</a> to view the site repository on GitHub
						</p>
					</div>
			</div>
		)
	}
}