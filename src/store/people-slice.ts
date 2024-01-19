import { IPeopleResult } from './../components/People/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PeopleStateType = {
  peopleList: IPeopleResult[];
}

const initialPeopleState: PeopleStateType = {
  peopleList: [],
};

const peopleSlice = createSlice({
  name: 'people',

  initialState: initialPeopleState,

  reducers: {
    setPeopleList(state, action: PayloadAction<IPeopleResult[]>) {
      state.peopleList = action.payload;
    },
  },
});

export default peopleSlice;
