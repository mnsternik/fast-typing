import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    length: '',
    language: '',
    text: '',
    time: 0,
    mistakes: 0,
    effectiveness: 0,
    wordsPerMinute: 0, 
}

const textSlice = createSlice({
    name: 'text', 
    initialState: initialState, 
    reducers: {
        setLanguage(state, action) {
            state.language = action.payload; 
        }, 
        setTime(state, action) {
            state.time = action.payload; 
            state.wordsPerMinute = (state.text.split(' ').length / action.payload) * 60;
        },
        setLength(state, action) {
            state.length = action.payload; 
        },
        setText(state, action) {
            state.text = action.payload;
        },
        setMistakes(state, action) {
            state.mistakes = action.payload;
            state.effectiveness = ((state.text.split(' ').length - action.payload) / state.text.split(' ').length) * 100;
        }
    }
})

export const textActions = textSlice.actions;

export default textSlice.reducer; 