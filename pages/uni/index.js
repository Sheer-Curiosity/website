import Head from 'next/head';
import UniNavbarHome from '../../components/UniNavbarHome';
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
        <button onClick={() => signIn(null, { callbackUrl: `${process.env.REDIRECT_URL}/uni` })}>Sign in</button>
      </div>
    )
  }
  if (session) {
    return (
			<div>
				<Head>
					<title>Home</title>
				</Head>
				<UniNavbarHome/>
				<div>
					<div className={uniStyles['main-photo']}>
						<div className={uniStyles['title']}>
							<b>Ryan Severin</b>
						</div>
						<div className={uniStyles['subtitle']}>
							<b>Programmer, Developer, Video Editor, And Much More</b>
						</div>
					</div>
					<div className={uniStyles['divider']}/>
					<div className={uniStyles['component']}>
						<img src="/uni/photos/31kx55b4dhb31.jpg"/>
						<b>About</b>
						<p>I've had the mind of a maker for as long as I can remember. Click the tab above to learn more about me, and this website.</p>
					</div>
					<div className={uniStyles['component2']}>
						<img src="/uni/photos/31kx55b4dhb31.jpg"/>
						<b>Academics - Projects</b>
						<p>While my grades may not be top notch, I have more to show than that! Click the tab above to see more.</p>
					</div>
				</div>
			</div>
		)
  }
}