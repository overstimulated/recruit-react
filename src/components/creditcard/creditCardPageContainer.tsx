import { ICreditCardModel } from '../../model';
import { creditCardFieldChangeAction } from './actions/fieldChange';
import { registerCreditCard } from './actions/registerCard';
import { CreditCardRegistrationPage } from './creditCardPage';

import { connect } from 'react-redux';
import { IState } from '../../reducers';

const mapStateToProps = (state: IState) => ({
  creditCard: state.creditCard
});

const mapDispatchToProps = (dispatch: any) => ({
  onChange: (creditCard: ICreditCardModel, fieldName: string, value: any) => dispatch(creditCardFieldChangeAction(creditCard, fieldName, value)),
  onSave: (creditCard: ICreditCardModel) => dispatch(registerCreditCard(creditCard))
});

export const CreditCardPageContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(CreditCardRegistrationPage);
