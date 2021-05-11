import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function RobocoCheck () {
	const { data: holoData, error: holoError } = useSWR('https://api.holotools.app/v1/live/', fetcher)
		if (holoError) return <h1>API Call Failed</h1>
		if (!holoData) return <h1>Checking For Livestream...</h1>

		for (var i = 0; i < holoData.live.length; i++) {
			if (holoData.live[i].channel.yt_channel_id === 'UCDqI2jOz0weumE8s7paEk6g') {
				return (
					<div>
						<h1>Roboco Is Live</h1>
						<p>Watch her right here!</p>
						<iframe src={"https://www.youtube.com/embed/"+holoData.live[i].yt_video_key} frameBorder="0"></iframe>
					</div>
				)
			}
		}
		for (var i = 0; i < holoData.ended.length; i++) {
			if (holoData.ended[i].channel.yt_channel_id === 'UCDqI2jOz0weumE8s7paEk6g') {
				return (
					<div>
						<h1>Roboco Is Not Live</h1>
						<p>Watch her most recent stream:</p>
						<iframe src={"https://www.youtube.com/embed/"+holoData.ended[i].yt_video_key} frameBorder="0"></iframe>
					</div>
				)
			}
		}

		return (
			<div>
				<h1>Roboco Is Not Live</h1>
				<p>Holotools API does not have her most recent stream saved.</p>
			</div>
		)
}

export default RobocoCheck