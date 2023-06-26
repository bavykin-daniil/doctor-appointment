import { Controller, type FieldValues, type Path } from "react-hook-form";
// components
import TextField from "@mui/material/TextField";
// types
import type { FormTextFieldProps } from "./form-text-field.interface";
// utils
import { memo } from "react";

const FormTextField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
>({
  name,
  control,
  errorMessage,
  hasError,
  isDisabled,
  isFullWidth,
  onBlur,
  onChange,
  ...props
}: FormTextFieldProps<TFieldValues, TName>) => (
  <Controller
    render={({
      field: {
        onChange: onControllerChange,
        onBlur: onControllerBlur,
        ...field
      },
    }) => (
      <TextField
        {...props}
        {...field}
        helperText={hasError ? errorMessage : ""}
        disabled={isDisabled}
        fullWidth={isFullWidth}
        onBlur={onBlur ?? onControllerBlur}
        onChange={onChange ?? onControllerChange}
        error={hasError}
      />
    )}
    name={name}
    control={control}
  />
);

export default memo(FormTextField) as typeof FormTextField;
