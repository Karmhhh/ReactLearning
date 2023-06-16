import {
  Card,
  Box,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import * as React from "react";

const OutlinedCard = (props) => {
    const card=(
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
       { props.Subtitle}
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
    <CardActions>
      <Button size="small">{props.Button}</Button>
    </CardActions>
  </React.Fragment>)

  return (
    <Box sx={{ minWidth: 220 , maxWidth: 350 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default OutlinedCard;