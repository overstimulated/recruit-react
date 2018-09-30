import * as React from 'react';

interface IProps {
  className: string;
  pattern?: string;
  name: string;
  placeholder?: string;
  type: string;
  value: any;
  onChange: (fieldName: string, value: any) => void;
}

export const Input: React.StatelessComponent<IProps> = (props) => {
  return (
    <div className="control">
        <input type={props.type}
          name={props.name}
          className={props.className}
          placeholder={props.placeholder}
          value={props.value}
          onChange={onChangeInput(props)}
        />
    </div>
  )
};

const onChangeInput = (props: IProps) => (e: React.ChangeEvent<HTMLInputElement>) => {
  props.onChange(e.target.name, e.target.value);
}
