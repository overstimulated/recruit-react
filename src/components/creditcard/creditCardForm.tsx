import * as React from 'react';

import { Button, Input } from '../../common/components/form';
import { ICreditCardModel } from '../../model';



interface IProps {
  creditCard: ICreditCardModel;
  onChange: (fieldName: string, value: any) => void;
  onSave: () => void;
}

export const CreditCardForm: React.StatelessComponent<IProps> = (props) => {
    return (
      <div className="hero-body">
      <div className="container has-text-centered">
          <div className="column is-6 is-offset-3">
              <div className="box">
                  <div className="field">
                    <Input
                    className="input"
                    pattern="[0-9]"
                    name="creditCardNumber"
                    type="number"
                    placeholder="Credit Card Number"
                    value={props.creditCard.creditCardNumber || ""}
                    onChange={props.onChange}
                    />

                    <Input
                    className="input"
                    pattern="[0-9]"
                    name="ccv"
                    type="number"
                    placeholder="CCV"
                    value={props.creditCard.ccv || ""}
                    onChange={props.onChange}
                    />

                    <Input
                    className="input"
                    name="expiryDate"
                    type="datetime"
                    pattern="[0-9]{1,2}/[0-9]{1,2}/[0-9]{4}"
                    placeholder="Expiry DD/mm/yyyy"
                    value={props.creditCard.expiryDate || ""}
                    onChange={props.onChange}
                    />
                    <Button
                    onClick={props.onSave}
                    disabled={!props.creditCard.ccv || !props.creditCard.creditCardNumber || !props.creditCard.expiryDate}
                    />
                  </div>
              </div>
          </div>
      </div>
  </div>
      )
};
