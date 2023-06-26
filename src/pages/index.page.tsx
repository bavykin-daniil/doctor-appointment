// components
import Container from "@mui/material/Container";
// containers
import AppointmentFormContainer from "@root/containers/appointment-form-container";
// types
import type { FC } from "react";

const HomePage: FC = () => (
  <Container maxWidth="sm">
    <AppointmentFormContainer />
  </Container>
);

export default HomePage;
