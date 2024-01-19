import { configureStore } from "@reduxjs/toolkit";
import { peopleApi } from "./peopleApi";
import appSlice  from '@store/app-slice'
import peopleSlice from "./people-slice";

export const store = configureStore({
    reducer: {
        [peopleApi.reducerPath]: peopleApi.reducer,
        people: peopleSlice.reducer,
        app: appSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(peopleApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch
export default store;