import React, { FC, useContext, useMemo, DragEvent } from "react";
import { Paper, List } from "@mui/material";
import { EntryCard } from "./";
import { EntryStatus } from "../../interfaces/entry";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";
import styles from "./EntryList.module.css";
interface Props {
  status: EntryStatus;
}
export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, setIsDragging } = useContext(UIContext);
  const entriesByStatus = useMemo(
    () => entries.filter((item) => item.status === status),
    [entries, status]
  );
  const allowDrop = (e: DragEvent) => {
    e.preventDefault();
  };
  const isDrop = (e: DragEvent) => {
    const id = e.dataTransfer.getData("text");
    const entry = entries.find((e) => e._id === id)!;
    entry.status = status;
    setIsDragging(false);
    updateEntry(entry);
  };
  return (
    <div
      onDrop={isDrop}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ""}
    >
      <Paper
        sx={{
          height: "calc(100vh - 250px)",
          overflow: "auto",
          backgroundColor: "transparent",
          padding: "2px 5px",
        }}
      >
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all .3s" }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
