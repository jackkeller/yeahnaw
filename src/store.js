import { writable } from "svelte/store"
import { getLocalStorage, setLocalStorage } from "@lib/utilities.js"

const getQuestion = getLocalStorage('question')

export const Question = writable(getQuestion ? getQuestion : 'What is your name?')