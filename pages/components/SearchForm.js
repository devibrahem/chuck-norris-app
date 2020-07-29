import { Flex, Box } from "rebass";
import CategorySearch from "./CategorySearch";
import FreeSearch from "./FreeSearch";
import SearchResults from "./SearchResults";
const SearchForm = () => {
  return (
    <Box>
      <Flex justifyContent={"center"} flexWrap={"wrap"} marginTop={[3]}>
        <Box marginTop={[2]}>
          {/* the searching component using a Categorical Term or pick up a random fact  */}
          <CategorySearch />
          {/* the Free search component */}
          <FreeSearch />
        </Box>
      </Flex>
      <Box id="facts-view">
        <SearchResults />
      </Box>
    </Box>
  );
};

export default SearchForm;
