import { Controller, type FieldValues, type Path } from "react-hook-form";
// utils
import { memo } from "react";
// types
import type { FormDatePickerProps } from "./form-date-picker.interface";
// styles
import { FormDatePickerWrapper } from "./form-date-picker.styled";

const FormDatePicker = <
  TFieldValue extends FieldValues = FieldValues,
  TName extends Path<TFieldValue> = Path<TFieldValue>
>({
  name,
  control,
  errorMessage,
  hasError,
  isDisabled,
  isFullWidth = true,
  onBlur,
  onChange,
  ...props
}: FormDatePickerProps<TFieldValue, TName>) => {
  return (
    <Controller
      render={({
        field: {
          onChange: onControllerChange,
          onBlur: onControllerBlur,
          ...field
        },
      }) => (
        <FormDatePickerWrapper
          {...props}
          {...field}
          slotProps={{
            textField: {
              helperText: hasError ? errorMessage : "",
              onBlur: onBlur ?? onControllerBlur,
              error: hasError,
            },
            openPickerButton: {
              onBlur: onBlur ?? onControllerBlur,
            },
          }}
          disabled={isDisabled}
          isFullWidth={isFullWidth}
          onChange={onChange ?? onControllerChange}
        />
      )}
      control={control}
      name={name}
    />
  );
};

export default memo(FormDatePicker) as typeof FormDatePicker;
