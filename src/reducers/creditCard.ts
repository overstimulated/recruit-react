import { actionTypes } from '../components/creditcard/actions/actionTypes';
import { IFieldChangePayload } from '../components/creditcard/actions/fieldChange';
import { ICreditCardModel } from '../model';


const initialCreditCardState = (): ICreditCardModel => ({
    ccv: '',
    creditCardNumber: '',
    expiryDate: '',
});

export const creditCardReducer = (state = initialCreditCardState(), action: any) => {
    switch (action.type) {
        case actionTypes.UPDATE_CREDIT_CARD_FIELD:
            return creditCardUpdateField(state, action.payload);
      }
    return state;
};

const creditCardUpdateField = (state: ICreditCardModel = initialCreditCardState(), payload: IFieldChangePayload): ICreditCardModel => {
    // tslint:disable:no-console
    console.log(JSON.stringify(state));
    console.log(JSON.stringify(payload.fieldValidationResult.key));
    return {
      ...state,
      [ payload.fieldValidationResult.key ]: payload.value
    };
  };