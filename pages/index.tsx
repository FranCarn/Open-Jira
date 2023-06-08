import type { NextPage } from "next";
import { Card, CardHeader, Grid } from "@mui/material";
import { Layout } from "../components/layout";
import { EntryList } from "../components/ui/EntryList";
import { NewEntry } from "../components/ui";

const Home: NextPage = () => {
  return (
    <Layout title="Home - Open Jira">
      <>
        <NewEntry />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 100px)" }}>
              <CardHeader title="Pendientes" />
              <EntryList status="pending" />
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 100px)" }}>
              <CardHeader title="En Progreso" />
              <EntryList status="in-progress" />
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 100px)" }}>
              <CardHeader title="Completadas" />
              <EntryList status="finished" />
            </Card>
          </Grid>
        </Grid>
      </>
    </Layout>
  );
};

export default Home;
