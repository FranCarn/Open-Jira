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
import { useRouter } from "next/router";
import { dateFunctions } from "../../utils";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { setIsDragging } = useContext(UIContext);
  const router = useRouter();
  const startDrag = (e: DragEvent) => {
    e.dataTransfer.setData("text", entry._id);
    setIsDragging(true);
  };
  const handleRedirect = () => {
    router.push(`/entries/${entry._id}`);
  };
  return (
    <Card
      onClick={handleRedirect}
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
          <Typography variant="body2">
            {dateFunctions.getFormatTimeToNow(entry.createdAt)}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
