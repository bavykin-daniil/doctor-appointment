// types
import type { SelectProps } from "@mui/material";
import type { SelectOption } from "@root/types/select-option.types";
import type { Control, FieldValues, Path } from "react-hook-form";

export interface FormSelectProps<
  TFieldValue extends FieldValues = FieldValues,
  TValue extends string | number = string,
  TName extends Path<TFieldValue> = Path<TFieldValue>
> extends Omit<
    SelectProps<TValue>,
    "value" | "name" | "disabled" | "hasError" | "errorMessage" | "ref"
  > {
  name: TName;
  options: SelectOption<TValue>[];
  control: Control<TFieldValue>;
  errorMessage?: string | null;
  hasError?: boolean;
  isDisabled?: boolean;
  hasNoneOption?: boolean;
}
