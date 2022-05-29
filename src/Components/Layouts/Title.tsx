import * as React from "react";
import Typography from "@mui/material/Typography";

interface IProps {
  text: string;
}

export const Title = ({ text }: IProps) => {
  return (
    <Typography component="h2" variant="h5" color="primary" gutterBottom>
      {text}
    </Typography>
  );
};
