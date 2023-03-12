import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, useMediaQuery } from "@mui/material";

import { Link } from "react-router-dom";

const FieldsCard = ({ title, img, description }) => {
  const matches = useMediaQuery("(min-width:770px)");

  return (
    <Card sx={{ maxWidth: matches ? 375 : 550 }}>
      <Link to="/mission">
        <CardActionArea>
          <img className="h-58" src={img} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};
export default FieldsCard;
