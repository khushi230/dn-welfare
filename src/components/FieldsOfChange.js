import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import educationCard from "../assets/educationCard.jpg";
import healthCard from "../assets/healthCard.jpg";
import sportsCard from "../assets/sportsCard.jpg";
import womenCard from "../assets/womenCard.jpg";

const FieldsOfChange = () => {
  return (
    <div className="w-full  bg-gray-300 px-10 py-5">
      <h2 className="text-center font-bold font-sans text-3xl py-10 ">
        FIELDS OF CHANGE
      </h2>
      <div className="flex justify-between">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <img className="h-58" src={educationCard} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Education
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Education, nutrition and holistic development of children
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={healthCard}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Healthcare
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Education, nutrition and holistic development of children
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <img className="h-58 " src={womenCard} alt="green iguana" />
            <div className="p-3">
              <Typography gutterBottom variant="h5" component="div">
                Women Empowerment
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Education, nutrition and holistic development of children
              </Typography>
            </div>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <img className="h-58" src={sportsCard} alt="green iguana" />
            <div className="p-3">
              <Typography gutterBottom variant="h5" component="div">
                sports
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Education, nutrition and holistic development of children
              </Typography>
            </div>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default FieldsOfChange;
