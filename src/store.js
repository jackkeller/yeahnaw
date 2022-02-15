import { writable } from 'svelte/store'
import { getLocalStorage } from '@lib/utilities'

const getQuestion = getLocalStorage('question')
export const Question = writable(getQuestion)

export const Yeah = writable(0)

export const Naw = writable(0)
