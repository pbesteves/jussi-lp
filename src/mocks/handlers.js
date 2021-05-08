import { graphql } from "msw";

export const handlers = [
  graphql.query("GetPastLaunches", (req, res, ctx) => {
    return res(
      ctx.data({
        launchesPast: [
          {
            mission_name: "Starlink-15 (v1.0)",
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
            mission_name: "Starlink-14 (v1.0)",
            launch_site: {
              site_name: "CCAFS SLC 40",
              __typename: "LaunchSite",
            },
            links: { flickr_images: [], __typename: "LaunchLinks" },
            launch_success: true,
            id: "105",
            __typename: "Launch",
          },
          {
            mission_name: "Starlink-13 (v1.0)",
            launch_site: { site_name: "KSC LC 39A", __typename: "LaunchSite" },
            links: {
              flickr_images: [
                "https://live.staticflickr.com/65535/50500804918_eb1187e1b2_o.jpg",
                "https://live.staticflickr.com/65535/50501674637_f16f528728_o.jpg",
                "https://live.staticflickr.com/65535/50501515611_2a3753bed1_o.jpg",
                "https://live.staticflickr.com/65535/50501674632_0d5276b1b5_o.jpg",
              ],
              __typename: "LaunchLinks",
            },
            launch_success: true,
            id: "104",
            __typename: "Launch",
          },
          {
            mission_name: "Starlink-12 (v1.0)",
            launch_site: { site_name: "KSC LC 39A", __typename: "LaunchSite" },
            links: {
              flickr_images: [
                "https://live.staticflickr.com/65535/50428228397_6151927733_o.jpg",
                "https://live.staticflickr.com/65535/50427359318_67b3397892_o.jpg",
                "https://live.staticflickr.com/65535/50428050591_36defbe958_o.jpg",
              ],
              __typename: "LaunchLinks",
            },
            launch_success: null,
            id: "103",
            __typename: "Launch",
          },
          {
            mission_name: "Starlink-11 (v1.0)",
            launch_site: { site_name: "KSC LC 39A", __typename: "LaunchSite" },
            links: { flickr_images: [], __typename: "LaunchLinks" },
            launch_success: true,
            id: "102",
            __typename: "Launch",
          },
        ],
      })
    );
  }),
];
