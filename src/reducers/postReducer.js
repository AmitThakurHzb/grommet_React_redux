import {FETCH_POSTS  } from "../actions/type";

const initialState = {
    items: [],
    item:{}
}

export default function (state = initialState,action) {
    switch (action.type) {
        default:
            return state;
    }
}