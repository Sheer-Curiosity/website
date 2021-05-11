import uniStyles from '../styles/uniStyles.module.css'

function UniNavbarAbout () {
 return (
	<div>
		<a href="/uni">
			<div className={uniStyles['navbar-home']}>
				<div className={uniStyles['overline-home']}/>
				<b>Home</b>
			</div>
		</a>
		<a href="/uni/about">
			<div className={uniStyles['navbar-about-selected']}>
				<div className={uniStyles['overline-about-selected']}/>
				<b>About</b>
			</div>
		</a>
		<a href="/uni/academics">
			<div className={uniStyles['navbar-academics']}>
				<div className={uniStyles['overline-academics']}/>
				<b>Academics</b>
			</div>
		</a>
		<a href="https://github.com/Sheer-Curiosity" target="_blank">
			<div className={uniStyles['logo-github']}>
				<img src="/github_logo.svg"/>
			</div>
		</a>
	</div>
 )
}

export default UniNavbarAbout