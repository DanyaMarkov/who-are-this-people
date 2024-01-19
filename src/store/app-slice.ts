import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AppStateType = {
    peopleCount: number;
}

const initialAppState: AppStateType = {
  peopleCount: 5,
};

//* Создание taskSlice

const appSlice = createSlice({
  // состояние
  name: 'app',

  // * Инциируем taskSlice с помощью initialState и редукторов
  initialState: initialAppState,

  /** Редукторы - должны быть простыми функциями только для изменения состояния */
  reducers: {
    // * Редукторы принимают в качестве аргументов состояние (которое является текущим состоянием хранилища
    // * и действие типа PayloadAction<type>

    setCountPeople(state, action: PayloadAction<number>) {
      state.peopleCount = action.payload;
    },
  },
});

export default appSlice;
