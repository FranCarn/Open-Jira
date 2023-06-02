import { Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Typography variant="h1" color="primary"></Typography>
    </Layout>
  );
};

export default Home;
