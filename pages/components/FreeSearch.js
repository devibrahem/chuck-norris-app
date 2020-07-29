import { useState } from "react";
import { Box } from "rebass";
import { InputText, InputSubmit } from "../views/FormElements";

const FreeSearch = ({ handleQuery }) => {
  // passes and calls the search query function in the parent
  const [queryVal, SetQueryVal] = useState();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleQuery(queryVal);
        SetQueryVal("");
      }}
      style={{ textAlign: "center", marginTop: "14px" }}
    >
      <label style={{ fontSize: "24px", fontWeight: "bold" }} htmlFor="search">
        Free Search
      </label>
      <Box margin={[2]}>
        <InputText
          minLength={3}
          required={true}
          type="text"
          name="search"
          id="search"
          value={queryVal}
          onChange={(e) => {
            SetQueryVal(e.target.value);
          }}
        />
      </Box>
      <InputSubmit type="submit" value="Search" id="submit-query" />
    </form>
  );
};

export default FreeSearch;
