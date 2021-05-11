import Head from 'next/head';
import { Parallax } from 'react-scroll-parallax';
import UniNavbarHome from '../../components/UniNavbarHome';
import uniStyles from '../../styles/uniStyles.module.css'

export default function Home() {
  return (
		<div>
			<Head>
				<title>Home</title>
			</Head>
			<UniNavbarHome/>
			<div>
			</div>
		</div>
	)
}