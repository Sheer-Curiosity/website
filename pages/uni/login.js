import Head from 'next/head';
import UniNavbarHome from '../../components/UniNavbarHome';
import uniStyles from '../../styles/uniStyles.module.css'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Page() {
  const [ session, loading ] = useSession()

  if (loading) {
		return (
			<div>Loading...</div>
		)
	}
  if (!session) {
    return (
      <div>
        Not signed in <br/>
        <button onClick={() => signIn(null, {callbackUrl: 'https://absoluteinquisition.xyz/uni' })}>Sign in</button>
      </div>
    )
  }
  if (session) {
    return (
      <div>
        Signed in as {session.user.name} <br/>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
}