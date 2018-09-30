import { actionTypes } from '../components/mainPageActionTypes';
import { IPageModel } from '../model';



const initialPageState = (): IPageModel => ({
    title: 'menu'   
});

export const pageReducer = (state = initialPageState(), action: any) => {
    
    switch (action.type) {
        case actionTypes.UPDATE_NAV_LINK:
        return Object.assign({}, state, {
            title: action.title
          })
      }
      // tslint:disable:no-console
      console.log('STATE IS ' + state.title)
    return state;
};