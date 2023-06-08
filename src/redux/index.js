import { configureStore } from "@reduxjs/toolkit";
import accountSliceReducer from "./AccountSlice"
import continueWatchingReducer from "./ContinueWatchingSlice";
const store=configureStore({
    reducer:{account:accountSliceReducer,continueWatching:continueWatchingReducer}
})
export default store