/* eslint-disable react/require-default-props */
import { ChangeEvent } from 'react';

type InputProps = {
  label: string;
  value: string;
  placeholder: string;
  name?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  label, value, placeholder, onChange, name,
}:InputProps) => (
  <label className="label" htmlFor={label}>
    <input
      type="text"
      id={label}
      name={name}
      className="input input-bordered border-solid input-primary w-full"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  </label>
);
