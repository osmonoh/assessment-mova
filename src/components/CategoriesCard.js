import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

import ladies from "../images/ladies1.jpg";
import men from "../images/mens1.jpg";
const img = { ladies, men };

const CategoriesCard = ({ displayName, categoryId }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        // height="140"
        image={img[categoryId]}
        alt={categoryId}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {displayName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoriesCard;
