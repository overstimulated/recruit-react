import { combineReducers } from 'redux';
import { ICreditCardModel, IPageModel } from '../model';
import { creditCardReducer } from './creditCard';
import { pageReducer } from './page';

export interface IState {
  creditCard: ICreditCardModel;
  page: IPageModel;
};

export const state = combineReducers<IState>({
  creditCard: creditCardReducer,
  page: pageReducer
});
