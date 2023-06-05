import React, { FC, DragEvent, useContext } from "react";
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
} from "@mui/material";
import { Entry } from "../../interfaces/entry";
import { UIContext } from "../../context/ui";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { setIsDragging } = useContext(UIContext);
  const startDrag = (e: DragEvent) => {
    e.dataTransfer.setData("text", entry._id);
    setIsDragging(true);
  };

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={startDrag}
      onDragEnd={() => setIsDragging(false)}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2"></Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
