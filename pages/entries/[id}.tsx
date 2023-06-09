import React, { ChangeEvent, FC, useState, useMemo, useContext } from "react";
import { GetServerSideProps } from "next";
import { Layout } from "../../components/layout";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  capitalize,
} from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { Entry, EntryStatus } from "../../interfaces/entry";
import { dbEntries } from "../../database";
import { EntriesContext } from "../../context/entries";
import { useRouter } from "next/router";

const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];
interface Props {
  entry: Entry;
}
const EntryPage: FC<Props> = ({ entry }) => {
  const { updateEntry } = useContext(EntriesContext);
  const router = useRouter();
  const [inputValue, setInputValue] = useState(entry.description);
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<EntryStatus>(entry.status);

  const isNotValid = useMemo(
    () => inputValue.length <= 0 && touched,
    [inputValue, touched]
  );

  const onTextFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value);
  };

  const onStatusChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value as EntryStatus);
  };

  const onSave = () => {
    if (!inputValue) return;
    const updatedEntry: Entry = {
      ...entry,
      status,
      description: inputValue,
    };
    updateEntry(updatedEntry, true);
    router.push("/");
  };

  return (
    <Layout title={inputValue.substring(0, 20) + "..."}>
      <>
        <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
          <Grid item xs={12} sm={8} md={6}>
            <Card>
              <CardHeader
                title="Entry"
                subheader={`Created at ${entry.createdAt} minutes`}
              />
              <CardContent>
                <TextField
                  sx={{ marginTop: 2, marginBottom: 1 }}
                  fullWidth
                  placeholder="New entry"
                  autoFocus
                  multiline
                  label="New entry"
                  value={inputValue}
                  onBlur={() => setTouched(true)}
                  onChange={onTextFieldChange}
                  helperText={isNotValid && "Field required"}
                  error={isNotValid}
                />
                <FormControl>
                  <FormLabel>Status:</FormLabel>
                  <RadioGroup row onChange={onStatusChanged} value={status}>
                    {validStatus.map((option) => (
                      <FormControlLabel
                        key={option}
                        value={option}
                        control={<Radio />}
                        label={capitalize(option)}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </CardContent>
              <CardActions>
                <Button
                  startIcon={<SaveOutlinedIcon />}
                  variant="contained"
                  fullWidth
                  onClick={onSave}
                  disabled={!inputValue}
                >
                  Save
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <IconButton
          sx={{
            position: "fixed",
            bottom: 30,
            right: 30,
            backgroundColor: "error.dark",
          }}
        >
          <DeleteOutlinedIcon />
        </IconButton>
      </>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  const entry = await dbEntries.getEntryById(id);

  if (!entry) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      entry,
    },
  };
};

export default EntryPage;
