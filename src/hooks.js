export function handle({ event, resolve }) {
	const response = resolve(event, {
		ssr: false
	})

	return response
}
