import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://zooft-ware.github.io",
  base: "electro-space-landing-page",
  integrations: [tailwind(), react()],
  image: {
    service: passthroughImageService(),
  },
});
