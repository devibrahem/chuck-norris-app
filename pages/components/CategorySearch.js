import { Box } from "rebass";
import { InputSubmit, InputSelect } from "../views/FormElements";

const CategorySearch = () => {
  return (
    <form
      style={{ textAlign: "center" }}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label style={{ fontSize: "24px", fontWeight: "bold" }} htmlFor="fact">
        Pick a fact type
      </label>
      <Box margin={[2]}>
        <InputSelect autoFocus defaultValue={"animal"} name="fact" id="fact">
          <option value="something">something</option>
        </InputSelect>
      </Box>
      <InputSubmit type="submit" value="Search" id="submit-category" default />
      <InputSubmit type="submit" id="submit-random" value="a Random Fact" />
    </form>
  );
};

export default CategorySearch;
