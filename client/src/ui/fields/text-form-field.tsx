import React, { CSSProperties } from 'react';
import { TextField } from '@mui/material';
import { Field, FieldProps } from 'formik';

interface TextFieldProps {
  label?: React.ReactNode;
  name?: string;
  type?: string;
  //
  placeholder?: string;
  multiline?: boolean;
  maxRows?: number;
  disabled?: boolean;
  textColor?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  description?: React.ReactNode;
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
export const TextFormField: React.FC<TextFieldProps> = ({ label, name, type }) => {
  return (
    <Field name={name}>
      {(fieldProps: FieldProps) => (
        <TextFormFieldComponent label={label} type={type} {...fieldProps} />
      )}
    </Field>
  );
};

const TextFormFieldComponent: React.FC<FieldProps & TextFieldProps> = ({
  label,
  field,
  type,
  meta,
  error,
  description
}) => {
  const isError = React.useMemo(
    () => meta.touched && (!!meta.error || !!error),
    [error, meta.error, meta.touched]
  );
  const helperText = React.useMemo(
    () => (isError ? error || meta.error : description),
    [description, error, isError, meta.error]
  );

  return (
    <TextField
      type={type}
      label={label}
      name={field.name}
      value={field.value ?? ''}
      onChange={field.onChange}
      onBlur={field.onBlur}
      error={isError}
      helperText={helperText}
    />
  );
};
