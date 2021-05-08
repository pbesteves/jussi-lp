export type SearchResultProps = {
  results: Array<{
    mission_name: string;
    launch_site: {
      site_name: string;
    };
    links: {
      flickr_images: Array<string>;
    };
    launch_success: boolean;
    id: string;
  }>;
  hide: boolean;
};
