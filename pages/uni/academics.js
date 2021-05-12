import Head from 'next/head';
import UniNavbarAcademics from '../../components/UniNavbarAcademics';
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
        <button onClick={() => signIn(null, { callbackUrl: `${process.env.REDIRECT_URL}/uni/academics` })}>Sign in</button>
      </div>
    )
  }
  if (session) {
		return (
			<div>
				<Head>
					<title>Academics</title>
				</Head>
				<UniNavbarAcademics/>
				<div className={uniStyles['main-photo']}>
					<div className={uniStyles['title']}>
						<b>Academics - Projects</b>
					</div>
				</div>
			</div>
		)
	}
}