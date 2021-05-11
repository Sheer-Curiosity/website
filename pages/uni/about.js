import Head from 'next/head';
import UniNavbarAbout from '../../components/UniNavbarAbout';
import uniStyles from '../../styles/uniStyles.module.css'

export default function Home() {
	return (
		<div>
			<Head>
				<title>About</title>
			</Head>
			<UniNavbarAbout/>
			<div>
			</div>
		</div>
	);
}