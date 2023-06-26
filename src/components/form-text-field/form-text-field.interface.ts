// types
import type { TextFieldProps } from "@mui/material/TextField";
import type { Path, Control, FieldValues } from "react-hook-form";

export interface FormTextFieldProps<
  TFieldValue extends FieldValues = FieldValues,
  TName extends Path<TFieldValue> = Path<TFieldValue>
> extends Omit<TextFieldProps, "fullWidth" | "disabled" | "ref" | "error"> {
  control: Control<TFieldValue>;
  name: TName;
  label: string;
  errorMessage?: string;
  hasError?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
}
