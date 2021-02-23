import React from "react";

interface SearchFieldProps {
  // eslint-disable-next-line no-unused-vars
  handleInput: (event: React.FormEvent<HTMLInputElement>) => void;
  query: string;
  placeholder: string;
}
const SearchField = ({
  handleInput,
  query,
  placeholder,
}: SearchFieldProps): JSX.Element => (
  <div>
    <input
      type="text"
      name="inputSearch"
      value={query}
      onInput={handleInput}
      placeholder={placeholder}
    />
  </div>
);

export default SearchField;
