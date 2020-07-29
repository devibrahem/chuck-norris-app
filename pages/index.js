import { Box } from "rebass";
import DancingChuck from "../views/DancingChuck";
import SearchForm from "./components/SearchForm";
import Head from "next/head";
import fetch from "node-fetch";
const Home = ({ categories }) => {
  return (
    <Box>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Norris API facts Generator Site" />
        <title>Norris Facts</title>
      </Head>
      <DancingChuck />
      <SearchForm categories={categories || []} />
    </Box>
  );
};

// rendering the index page with Data to improve performance at runtime
// fetching external data (from the API) and pre-rendered the index page with this data
// This function gets called at runtime on server-side.
export async function getServerSideProps() {
  const res = await fetch("https://api.chucknorris.io/jokes/categories");
  const categories = await res.json();

  // By returning { props: categories }, the Blog component
  // will receive `categories` as a prop at build time
  return {
    props: {
      categories,
    },
  };
}
export default Home;
