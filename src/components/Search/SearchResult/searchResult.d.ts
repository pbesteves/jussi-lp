export type SearchResultProps = {
  results: Array<{
    mission_name: string;
    launch_date_local: string;
    launch_site: {
      site_name: string;
    };
    links: {
      article_link: string;
      flickr_images: Array<string>;
    };
    launch_success: boolean;
    id: string;
  }>;
  hide: boolean;
};
