import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import * as React from "react";
import styled from "@emotion/styled";

const CardBox = styled("div")(({ theme }) => ({
  padding: 4,
  background: "bg.bgCards",
  minWidth: 300,
  textAlign: "center",
}));

const OutlinedCard = (props) => {
  const card = (
    <>
      <CardBox>
        <CardContent>
          <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
            {props.Subtitle}
          </Typography>
          <Typography variant="h5" component="div">
            {props.Title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.Description}
          </Typography>
          <Typography variant="body2">
            {props.Text}
            <br />
            {props.Text2}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
            <Button variant='text' size="small" color="warning">
              {props.Button}
            </Button>
        </CardActions>
      </CardBox>
    </>
  );

  return <Card variant='elevation'>{card}</Card>;
};

export default OutlinedCard;
