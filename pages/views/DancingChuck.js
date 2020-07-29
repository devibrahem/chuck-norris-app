import { Flex, Image, Box } from "rebass";

function DancingChuck() {
  return (
    <Box>
      <Flex justifyContent={"center"}>
        <Image marginTop={"2%"} src="/chuck.gif" alt={"dancing chuck GIF"} />
      </Flex>
      <Flex justifyContent={"center"}>
        <Image
          width={[0.55, 0.2]}
          paddingLeft={"1%"}
          src="/chuck-logo.png"
          alt={"Chuck Norris Name Logo"}
        />
      </Flex>
    </Box>
  );
}

export default DancingChuck;
