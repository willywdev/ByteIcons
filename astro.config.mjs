import starlight from "@astrojs/starlight";
import { astroImageTools } from "astro-imagetools";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [
    starlight({
      title: "ByteIcons",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      favicon: "/favicon.svg",
      logo: {
        src: "./src/assets/houston.webp",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Getting started", link: "/guides/getting-started/" },
          ],
        },
      ],
    }),
    astroImageTools,
  ],
});
