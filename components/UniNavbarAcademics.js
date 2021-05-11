import uniStyles from '../styles/uniStyles.module.css'

function UniNavbarAcademics () {
 return (
	<div>
		<a href="/uni">
			<div className={uniStyles['navbar-home']}>
				<div className={uniStyles['overline-home']}/>
				<b>Home</b>
			</div>
		</a>
		<a href="/uni/about">
			<div className={uniStyles['navbar-about']}>
				<div className={uniStyles['overline-about']}/>
				<b>About</b>
			</div>
		</a>
		<a href="/uni/academics">
			<div className={uniStyles['navbar-academics-selected']}>
				<div className={uniStyles['overline-academics-selected']}/>
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

export default UniNavbarAcademics