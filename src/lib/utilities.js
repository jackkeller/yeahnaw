import { goto } from '$app/navigation'

export const getLocalStorage = (item) => {
	return localStorage.getItem(item)
}

export const setLocalStorage = (item, value) => {
	localStorage.setItem(item, value)
}

export const clearQuestionData = () => {
	localStorage.removeItem('question')
	localStorage.removeItem('yeah')
	localStorage.removeItem('naw')
}

export const routeToPage = (route) => {
	goto(`${route}`)
}
