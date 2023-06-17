import { defineConfig } from "astro/config";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://last-will.thuanowa.com',
  integrations: [compress(), robotsTxt()],
});
