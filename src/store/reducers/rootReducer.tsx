// reducers/rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';

import langReducer from './langReducer';


const rootReducer = combineReducers({
  lang: langReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
