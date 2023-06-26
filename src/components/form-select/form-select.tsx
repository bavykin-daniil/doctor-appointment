import { Controller, type Path, type FieldValues } from "react-hook-form";
// components
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
// utils
import { memo } from "react";
// types
import type { FormSelectProps } from "./form-select.interface";

const FormSelect = <
  TFieldValue extends FieldValues = FieldValues,
  TValue extends string | number = string,
  TName extends Path<TFieldValue> = Path<TFieldValue>
>({
  name,
  label,
  control,
  options,
  errorMessage,
  hasError,
  isDisabled,
  hasNoneOption = true,
  onBlur,
  onChange,
  ...props
}: FormSelectProps<TFieldValue, TValue, TName>) => (
  <Controller
    render={({
      field: {
        name,
        value,
        onBlur: onControllerBlur,
        onChange: onControllerChange,
      },
    }) => (
      <FormControl error={hasError}>
        <InputLabel id={name}>{label}</InputLabel>
        <Select
          {...props}
          id={name}
          name={name}
          label={label}
          value={value}
          labelId={name}
          disabled={isDisabled}
          error={hasError}
          onChange={onChange ?? onControllerChange}
          onBlur={onBlur ?? onControllerBlur}
        >
          {hasNoneOption ? <MenuItem value={""}>None</MenuItem> : null}
          {options.map(({ id, name, value }) => (
            <MenuItem key={id} value={value}>
              {name}
            </MenuItem>
          ))}
        </Select>
        {hasError ? <FormHelperText>{errorMessage}</FormHelperText> : null}
      </FormControl>
    )}
    name={name}
    control={control}
  />
);

export default memo(FormSelect) as typeof FormSelect;
