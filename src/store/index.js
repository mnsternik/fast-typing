import { configureStore } from "@reduxjs/toolkit";

import textReducer from "./text";

const store = configureStore({
    reducer: {
        text: textReducer,
    }
})

export default store; 