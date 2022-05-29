import * as React from "react";
import Container from "@mui/material/Container";

interface IProps {
  children: React.ReactNode;
}
export const PageLayout = ({ children }: IProps) => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4, marginButton: 4 }}>
      {children}
    </Container>
  );
};
