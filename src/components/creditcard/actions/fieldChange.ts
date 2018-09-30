import { actionTypes } from '../../../components/creditcard/actions/actionTypes';
import { ICreditCardModel } from '../../../model';
import { creditCardFormValidation } from '../creditCardFormValidation';

import { FieldValidationResult } from 'lc-form-validation';

export const creditCardFieldChangeAction = (card: ICreditCardModel, fieldName: string, value: any) => (dispatch: any) => {
    creditCardFormValidation.validateField(card, fieldName, value)
    .then((fieldValidationResult) => {
      // tslint:disable:no-console
      console.log(`debugging ${JSON.stringify(fieldValidationResult)} FIELD NAME ${fieldName} VALUE ${value}`);
      dispatch(creditCardFieldChangeCompleted(fieldValidationResult, value));
    });
};

export interface IFieldChangePayload {
  fieldValidationResult: FieldValidationResult;
  value: any;
}

const creditCardFieldChangeCompleted = (fieldValidationResult: FieldValidationResult, value: any) => ({
  payload: {
    fieldValidationResult,
    value,
  } as IFieldChangePayload,
  type: actionTypes.UPDATE_CREDIT_CARD_FIELD
});
