import { Box } from "rebass";
import { InputText, InputSubmit } from "../views/FormElements";

const FreeSearch = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
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
        />
      </Box>
      <InputSubmit type="submit" value="Search" id="submit-query" />
    </form>
  );
};

export default FreeSearch;
