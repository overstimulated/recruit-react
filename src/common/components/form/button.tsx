import * as React from 'react';

interface IProps {
  disabled: boolean;
  onClick: () => void;
}

export const Button: React.StatelessComponent<IProps> = (props) => {

  return (
    <div className="control">
      <button className="button" disabled={props.disabled} onClick={props.onClick}>Submit</button>
    </div>
  );
};
