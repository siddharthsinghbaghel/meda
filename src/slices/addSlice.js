import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-hot-toast"


const initialState = {
    totalItems: localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems") ): 0
};

const addSlice = createSlice({
    name: "add",
    initialState: initialState,
    reducers:{
        setTotalItems(state,value){
            state.token = value.payload;
        },

        //add function to add cart , remove cart , resetCart
    },

});


export const {setTotalItems} = addSlice.actions;
export default addSlice.reducer;
