
import * as React from 'react';

import { ICreditCardModel, IPageModel } from '../../model';
import { CreditCardForm } from './creditCardForm';


interface IProps {
  creditCard: ICreditCardModel;
  page: IPageModel;
  onChange: (member: ICreditCardModel, fieldName: string, value: string) => void;
  onSave: (creditCard: ICreditCardModel) => void;
}

export class CreditCardRegistrationPage extends React.Component<IProps, {}> {
  constructor(props: any) {
    super(props);
    
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  public render() {
    return (
      <CreditCardForm
        creditCard={this.props.creditCard}
        onChange={this.onChange}
        onSave={this.onSave}
      />
    );
  }

  private onChange(fieldName: string, value: string) {
    this.props.onChange(this.props.creditCard, fieldName, value);
  }

  private onSave() {
    this.props.onSave(this.props.creditCard);
  }
}
