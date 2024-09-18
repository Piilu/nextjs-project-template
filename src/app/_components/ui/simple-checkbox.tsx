import React from 'react'
import { Checkbox } from './checkbox';

type SimpleCheckboxProps = {
  value: boolean,
  name: string,
  id: string;
  onChange: (value: boolean) => void;
}

export default function SimpleCheckbox(props: SimpleCheckboxProps)
{
  const { value, name, id, onChange } = props;
  return (
    <div className="flex items-center space-x-2">
      <Checkbox onClick={() => {onChange(!value)}} checked={value} id={id} />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {name}
      </label>
    </div>
  )
}
