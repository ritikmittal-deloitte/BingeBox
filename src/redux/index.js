import { configureStore } from "@reduxjs/toolkit";
import accountSliceReducer from "./AccountSlice"
const store=configureStore({
    reducer:{account:accountSliceReducer}
})
export default store