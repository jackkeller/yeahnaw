import { writable } from "svelte/store"
import { getLocalStorage, setLocalStorage } from "@lib/utilities.js"

const getQuestion = getLocalStorage('question')
export const Question = writable(getQuestion ? getQuestion : 'What is your name?')

const getYeah = getLocalStorage('yeah')
export const Yeah = writable(getYeah ? getYeah : 0)

const getNaw = getLocalStorage('naw')
export const Naw = writable(getNaw ? getNaw : 0)