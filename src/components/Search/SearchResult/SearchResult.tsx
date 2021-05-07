import PlaceholderImage from "../../../assets/images/placeholder.png";
import Image from "../../Image";
import Text from "../../Text";
import { SearchResultProps } from "./searchResult";
import { Result, SearchResultComponent } from "./style";

const SearchResult = ({ results }: SearchResultProps) => {
  return (
    <SearchResultComponent>
      {results &&
        results.map(
          ({
            mission_name,
            links: {
              flickr_images: [thumbnail, ...rest],
            },
            launch_success,
            id,
          }) => (
            <Result key={id}>
              <Image
                urls={{ src: thumbnail ? thumbnail : PlaceholderImage }}
                alt={mission_name}
                width="60"
              />
              <div className="TextContainer">
                <Text className="MissionName">{mission_name}</Text>
                <Text as="span" className="MissionStatus">
                  Status: {launch_success ? "Success" : "Fail"}
                </Text>
              </div>
            </Result>
          )
        )}
    </SearchResultComponent>
  );
};

export default SearchResult;
