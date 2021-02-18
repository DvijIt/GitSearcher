import React from "react";

interface SearchFieldProps {
  // eslint-disable-next-line no-unused-vars
  handleInput: (event: React.FormEvent<HTMLInputElement>) => void;
  query: string;
}
const SearchField = ({ handleInput, query }: SearchFieldProps): JSX.Element => (
  <div>
    <label htmlFor="inputSearch">Search Users</label>
    <input type="text" name="inputSearch" value={query} onInput={handleInput} />
  </div>
);

export default SearchField;
