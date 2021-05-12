import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
	providers: [
		Providers.Credentials({
			name: 'Password (For Admissions Officers)',
			credentials: {
				password: { label: "Password", type: "password" }
			},
			async authorize(credentials) {
					if (credentials.password !== process.env.PASSWORD) {
						return null
					} else {
						const user = { id: 1, name: 'Admissions Officer'}
						return user
					}
			}
		})
	]
})