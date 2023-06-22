import { createSlice } from "@reduxjs/toolkit";
const AccountSlice = createSlice({
    name: "Accounts",
    initialState: { currentAccount: {}, userDetails: {} },
    reducers: {
        selectCurrentAccount: (state, action) => {

            state.currentAccount = action.payload
            console.log("yes", action, "state", state.currentAccount)
        },
        saveSignUpInfo: (state, action) => {
            state.userDetails = action.payload
            state.currentAccount = action.payload.accounts[0]
        },
        addAccount: (state, action) => {
            state.userDetails?.accounts?.push(action.payload)
        }
    }
})
export default AccountSlice.reducer
export const AccountAction = AccountSlice.actions