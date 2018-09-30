import { actionTypes } from './mainPageActionTypes';

export const updateNavPage = (newValue: string) => (dispatch : any) => {
    // tslint:disable:no-console
    console.log('PAGE IS CLICKED ' + newValue)
   dispatch(updateLink(newValue));
}

const updateLink = (newValue: string) => ({
    title: newValue,
    type: actionTypes.UPDATE_NAV_LINK
  });
  