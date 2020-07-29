import { Box, Flex, Image, Text } from "rebass";

const SearchResults = ({
  fact = { categories: [], icon_url: "#", value: "empty" },
}) => {
  const { categories, icon_url, value } = fact;

  return (
    <Box>
      {/* displaying the facts results corresponding to the category if available */}
      {categories.length ? (
        <Text
          textAlign={"center"}
          fontSize={"28px"}
          fontWeight={"bold"}
          marginTop={[3]}
        >
          {categories[0]} Fact
        </Text>
      ) : (
        <Text
          textAlign={"center"}
          fontSize={"28px"}
          fontWeight={"bold"}
          marginTop={[3]}
        >
          Random Fact
        </Text>
      )}
      <Flex justifyContent={"center"}>
        <Image
          height={"60px"}
          width={[0.15, 0.04]}
          margin={[3]}
          src={icon_url}
        />
        <Flex alignItems={"center"} width={[0.8, 0.3]}>
          <Text paddingTop={[3]}>{value}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SearchResults;
