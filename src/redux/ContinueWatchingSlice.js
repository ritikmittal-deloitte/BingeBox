import { createSlice } from "@reduxjs/toolkit";
import {mockData} from "../mockData/moviesMockData"
const ContinueWatchingSlice = createSlice({
  name: "ContinueWatching",
  initialState: {
    contineWatchingList: [
      mockData[0],mockData[1]
    ],
  },
  reducers: {
    addToContinueWatching: (state, action) => {
      const alreadyHasMovie=state.contineWatchingList.filter((movie)=>action.payload.id===movie.id)
      if(alreadyHasMovie.length===0){
        state.contineWatchingList.splice(0,0,action.payload)
      }
      
    },
  },
});
export default ContinueWatchingSlice.reducer;
export const ContinueWatchingAction = ContinueWatchingSlice.actions;
