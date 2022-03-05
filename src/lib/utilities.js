import { goto } from '$app/navigation'

export const getLocalStorage = (item) => {
	return localStorage.getItem(item)
}

export const setLocalStorage = (item, value) => {
	localStorage.setItem(item, value)
}

export const removeLocalStorage = (item) => {
	localStorage.removeItem(item)
}

export const routeToPage = (route) => {
	goto(`${route}`)
}
