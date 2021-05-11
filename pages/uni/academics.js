import Head from 'next/head';
import UniNavbarAcademics from '../../components/UniNavbarAcademics';
import uniStyles from '../../styles/uniStyles.module.css'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Academics</title>
			</Head>
			<UniNavbarAcademics/>
			<div>
			</div>
		</div>
	);
}