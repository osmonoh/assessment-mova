import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia, Stack } from "@mui/material";

import summer2020 from "../images/summer.jpg";
import winter2020 from "../images/winter.jpg";
import sports from "../images/extreme.jpg";
const img = { summer2020, winter2020, sports };

const CollectionsCard = ({ displayName, collectionId }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        // height="140"
        image={img[collectionId]}
        alt={collectionId}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {displayName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CollectionsCard;
