import { useState, useEffect } from "react";
import { Flex, Box } from "rebass";

import CategorySearch from "./CategorySearch";
import FreeSearch from "./FreeSearch";
import SearchResults from "./SearchResults";

const SearchForm = ({ categories }) => {
  const [facts, setFacts] = useState([]);

  // Handler Functions

  const handleCategory = async (categoryVal) => {
    const res = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${categoryVal}`
    );
    const data = await res.json();
    setFacts([...facts, data]);
  };

  const handleRandom = async () => {
    const res = await fetch(`https://api.chucknorris.io/jokes/random`);
    const data = await res.json();
    setFacts([...facts, data]);
  };

  const handleQuery = async (queryVal) => {
    const res = await fetch(
      `https://api.chucknorris.io/jokes/search?query=${queryVal}`
    );
    const data = await res.json();
    setFacts([...facts, ...data.result]);
  };

  return (
    <Box>
      <Flex justifyContent={"center"} flexWrap={"wrap"} marginTop={[3]}>
        <Box marginTop={[2]}>
          {/* the searching component using a Categorical Term or pick up a random fact  */}
          <CategorySearch
            categories={categories}
            handleCategory={handleCategory}
            handleRandom={handleRandom}
          />
          {/* the Free search component */}
          <FreeSearch handleQuery={handleQuery} />
        </Box>
      </Flex>
      {/* Display all the Facts using the Search Results component */}
      <Box id="facts-view">
        {facts.map((fact) => {
          return <SearchResults fact={fact} key={fact.id} />;
        })}
      </Box>
    </Box>
  );
};

export default SearchForm;
