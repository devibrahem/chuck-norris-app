import { Box } from "rebass";
import DancingChuck from "./views/DancingChuck";
import SearchForm from "./components/SearchForm";

const Home = () => {
  return (
    <Box>
      <DancingChuck />
      <SearchForm />
    </Box>
  );
};

export default Home;
