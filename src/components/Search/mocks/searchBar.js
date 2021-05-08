import { GET_PAST_LAUNCHES } from "../SearchBar";

export const GetPastLaunchesMock = [
  {
    request: {
      query: GET_PAST_LAUNCHES,
      variables: {
        limit: 2,
        find: {
          mission_name: "Test",
        },
      },
    },
    result: {
      data: {
        data: {
          launchesPast: [
            {
              mission_name: "Test 01",
              launch_site: {
                site_name: "CCAFS SLC 40",
                __typename: "LaunchSite",
              },
              links: { flickr_images: [], __typename: "LaunchLinks" },
              launch_success: true,
              id: "109",
              __typename: "Launch",
            },
            {
              mission_name: "Test 02",
              launch_site: {
                site_name: "CCAFS SLC 40",
                __typename: "LaunchSite",
              },
              links: { flickr_images: [], __typename: "LaunchLinks" },
              launch_success: true,
              id: "105",
              __typename: "Launch",
            },
          ],
        },
      },
    },
  },
];
