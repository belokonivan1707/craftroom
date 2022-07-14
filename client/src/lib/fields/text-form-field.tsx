import React, { CSSProperties } from 'react';
import { TextField } from '@mui/material';
import { Field, FieldProps } from 'formik';

interface TextFieldProps {
  label?: React.ReactNode;
  name?: string;
  //
  placeholder?: string;
  multiline?: boolean;
  maxRows?: number;
  disabled?: boolean;
  textColor?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  description?: React.ReactNode;
  type?: string;
  fontSize?: string;
  textAlign?: CSSProperties['textAlign'];
  naked?: boolean;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  max?: number;
  min?: number;
  className?: string;
  error?: string;
  step?: number;
}
export const TextFormField: React.FC<TextFieldProps> = ({ label, name }) => {
  return (
    <Field name={name}>
      {(fieldProps: FieldProps) => <TextFormFieldComponent label={label} {...fieldProps} />}
    </Field>
  );
};

const TextFormFieldComponent: React.FC<FieldProps & TextFieldProps> = ({ label, field }) => {
  return (
    <TextField
      label={label}
      name={field.name}
      value={field.value ?? ''}
      onChange={field.onChange}
      onBlur={field.onBlur}
    />
  );
};
