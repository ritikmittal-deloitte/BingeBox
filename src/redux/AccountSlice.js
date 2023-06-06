
import { createSlice } from "@reduxjs/toolkit";
const AccountSlice=createSlice({
name:"Accounts",
initialState:{currentAccount:{ }},
reducers:{
selectCurrentAccount:(state,action)=>{
    
    state.currentAccount=action.payload
    console.log("yes",action,"state",state.currentAccount)
}
}
})
export default AccountSlice.reducer
export const AccountAction=AccountSlice.actions