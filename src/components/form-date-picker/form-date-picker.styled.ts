// components
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// utils
import { styled } from "@mui/material/styles";

export const FormDatePickerWrapper = styled(DatePicker, {
  shouldForwardProp: (prop) => prop !== "isFullWidth",
})<{ isFullWidth: boolean }>(({ theme, isFullWidth }) => ({
  flex: isFullWidth ? 1 : "initial",
  width: isFullWidth ? "100%" : "auto",

  ".MuiFormLabel-root": {
    color: theme.palette.text.secondary,
  },

  ".MuiIconButton-root": {
    marginRight: 0,
  },
}));
