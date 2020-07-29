import { useState } from "react";
import { Box } from "rebass";
import { InputSubmit, InputSelect } from "../views/FormElements";

function CategorySearch({ handleCategory, handleRandom, categories }) {
  // t passes and calls the catergory function in the parent or trigger the random fact function
  const [categoryVal, SetCategoryVal] = useState("animal");
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
        <InputSelect
          defaultValue={"animal"}
          name="fact"
          id="fact"
          onChange={(e) => {
            SetCategoryVal(e.target.value);
          }}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </InputSelect>
      </Box>
      <InputSubmit
        type="submit"
        value="Search"
        id="submit-category"
        onClick={() => handleCategory(categoryVal)}
        default
      />
      <InputSubmit
        type="submit"
        id="submit-random"
        value="a Random Fact"
        onClick={() => handleRandom()}
      />
    </form>
  );
}

export default CategorySearch;
