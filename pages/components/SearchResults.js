import { Box, Flex, Image, Text } from "rebass";

const SearchResults = () => {
  return (
    <Box>
      <Text
        textAlign={"center"}
        fontSize={"28px"}
        fontWeight={"bold"}
        marginTop={[3]}
      >
        Random Fact
      </Text>
      <Flex justifyContent={"center"}>
        <Image height={"60px"} width={[0.15, 0.04]} margin={[3]} src="#" />
        <Flex alignItems={"center"} width={[0.8, 0.3]}>
          <Text paddingTop={[3]}>SomeText</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SearchResults;
