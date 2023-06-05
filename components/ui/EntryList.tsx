import React, { FC, useContext, useMemo } from "react";
import { Paper, List } from "@mui/material";
import { EntryCard } from "./";
import { EntryStatus } from "../../interfaces/entry";
import { EntriesContext } from "../../context/entries";

interface Props {
  status: EntryStatus;
}
export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);
  const entriesByStatus = useMemo(
    () => entries.filter((item) => item.status === status),
    [entries, status]
  );

  return (
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 250px)",
          overflow: "auto",
          backgroundColor: "transparent",
          padding: "2px 5px",
        }}
      >
        <List sx={{ opacity: 1 }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};