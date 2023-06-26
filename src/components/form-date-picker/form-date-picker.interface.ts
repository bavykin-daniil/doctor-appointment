// types
import type { RefAttributes } from "react";
import type { DatePickerProps } from "@mui/x-date-pickers";
import type { Path, Control, FieldValues } from "react-hook-form";

export interface FormDatePickerProps<
  TFieldValue extends FieldValues = FieldValues,
  TName extends Path<TFieldValue> = Path<TFieldValue>
> extends Omit<
    DatePickerProps<unknown> & RefAttributes<HTMLDivElement>,
    "name" | "value" | "ref" | "disabled" | "fullWidth" | "error"
  > {
  name: TName;
  control: Control<TFieldValue>;
  errorMessage?: string;
  hasError?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  onBlur?: () => void;
}
