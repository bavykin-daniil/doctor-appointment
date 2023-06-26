// components
import Box from "@mui/material/Box";
import MuiContainer from "@mui/material/Container";
import CorePaperWrapper from "@mui/material/Paper";
// utils
import { styled } from "@mui/material/styles";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  padding: theme.spacing(4, 4),
}));

export const ContentContainer = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flex: 1,
  width: "100%",
  position: "relative",

  [theme.breakpoints.down("sm")]: {
    background: theme.palette.background.default,
  },
})) as typeof MuiContainer;

export const PaperWrapper = styled(CorePaperWrapper)(({ theme }) => ({
  width: "100%",
  minHeight: 500,
  borderRadius: 10,

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(7.5, 6.25),
  },

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3, 0, 7.5),
    boxShadow: "unset",
    borderRadius: 0,
  },
}));

export const LoaderWrapper = styled(Box)({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 99,
});
