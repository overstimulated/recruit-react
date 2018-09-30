import { ICreditCardModel } from '../../../model';
import { creditCardFormValidation } from '../creditCardFormValidation';

export const registerCreditCard = (creditCard: ICreditCardModel) => (dispatch: any) => {
    creditCardFormValidation.validateForm(creditCard)
    .then((result) => {
        if(result.succeeded) {
            logCreditCard(creditCard);
        }
    })
};

const logCreditCard = (creditCard: ICreditCardModel)  => {
    // tslint:disable:no-console
    console.log(`credit card registered ${JSON.stringify(creditCard)}`);
};
