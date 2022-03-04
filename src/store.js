import { writable } from 'svelte/store'
import { getLocalStorage } from '@lib/utilities'

const getQuestion = getLocalStorage('question')
export const Question = writable(getQuestion)

const getYeah = getLocalStorage('yeah')
export const Yeah = writable(getYeah)

const getNaw = getLocalStorage('naw')
export const Naw = writable(getNaw)
