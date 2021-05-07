import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import useDebounce from "../../hooks/useDebounce";
import TextInput from "../Input";
import SearchResult from "./SearchResult";
import { Wrapper } from "./style";

const GET_PAST_LAUNCHES = gql`
  query GetPastLaunches($limit: Int!, $find: LaunchFind!) {
    launchesPast(limit: $limit, find: $find) {
      mission_name
      launch_date_local
      launch_site {
        site_name
      }
      links {
        flickr_images
      }
      launch_success
      id
    }
  }
`;

const SearchBar = () => {
  const [searchString, setSearchString] = useState("");
  const debouncedSearchTerm: string = useDebounce(searchString, 500);

  const { data, loading } = useQuery(GET_PAST_LAUNCHES, {
    skip: searchString.length === 0,
    variables: {
      limit: 5,
      find: {
        mission_name: debouncedSearchTerm,
      },
    },
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  return (
    <Wrapper>
      <TextInput
        id="serch-input"
        placeholder="Buscar"
        className="SearchInput"
        children={<SearchIcon className="SearchIcon" />}
        onChange={onChangeHandler}
      />
      {!loading && data && <SearchResult results={data.launchesPast} />}
      {loading && <div>Loading...</div>}
    </Wrapper>
  );
};

export default SearchBar;
