import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function CurrentLives () {
		const { data, error } = useSWR('https://api.holotools.app/v1/live/', fetcher)
		if (error) return <h1>API Call Failed</h1>
		if (!data) return <h1>Getting Streams...</h1>

		if (data.live.length === 0) return (
			<div>
				<h1>Current Hololive Streams</h1>
				<p>None... Now That's Rare.</p>
			</div>
		)

		return (
			<div>
				<h1>Current Hololive Streams</h1>
				{data.live.map((live, index) => {
					return(
						<li key={index}><b>{live.channel.name}:</b> {live.title}</li>
					)
				})}
			</div>
		)
}

export default CurrentLives