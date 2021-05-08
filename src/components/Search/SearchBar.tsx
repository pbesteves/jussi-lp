import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import useDebounce from "../../hooks/useDebounce";
import TextInput from "../Input";
import Text from "../Text";
import SearchResult from "./SearchResult";
import { ResultLoading } from "./SearchResult/style";
import { Wrapper } from "./style";

export type SearchBarProps = {
  expanded?: boolean;
};

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

const SearchBar = ({ expanded }: SearchBarProps) => {
  const [searchString, setSearchString] = useState("");
  const [hideResults, setHideResults] = useState(false);
  const debouncedSearchTerm: string = useDebounce(searchString, 500);

  const { data, loading } = useQuery(GET_PAST_LAUNCHES, {
    skip: searchString.length === 0 || searchString.length < 3,
    variables: {
      limit: 5,
      find: {
        mission_name: debouncedSearchTerm,
      },
    },
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
    setHideResults(true);
  };

  const onBlurHandler = () => {
    setHideResults(false);
  };

  return (
    <Wrapper expanded={expanded}>
      <TextInput
        id="serch-input"
        placeholder="Buscar"
        className="SearchInput"
        children={<SearchIcon className="SearchIcon" />}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
      {!loading && data && (
        <SearchResult results={data.launchesPast} hide={hideResults} />
      )}
      {loading && (
        <ResultLoading>
          <Text as="span">Carregando resultados</Text>
        </ResultLoading>
      )}
    </Wrapper>
  );
};

export default SearchBar;
