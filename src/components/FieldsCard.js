import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { Link } from "react-router-dom";

const FieldsCard = ({ title, img, description }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
