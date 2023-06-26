// utils
import { styled } from "@mui/material/styles";
// components
import Box from "@mui/material/Box";

export const FormWrapper = styled(Box)(({ theme }) => ({
  boxSizing: "border-box",
  padding: theme.spacing(4, 4),
  width: "100%",
  minHeight: 500,
}));
