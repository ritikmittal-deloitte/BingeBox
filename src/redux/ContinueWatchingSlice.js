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
      else if(alreadyHasMovie.length===1){
        var reqIndex
        for(var i=0;i<state.contineWatchingList.length;i++){
               if(action.payload.id===state.contineWatchingList[i].id){
                reqIndex=i
               }
        }
      //const t=state.contineWatchingList.indexOf(action.payload)
      state.contineWatchingList.splice(reqIndex,1)
      state.contineWatchingList.splice(0,0,action.payload)
      }
      
    },
  },
});
export default ContinueWatchingSlice.reducer;
export const ContinueWatchingAction = ContinueWatchingSlice.actions;
