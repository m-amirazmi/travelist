import React from "react";
import type { Preview } from "@storybook/react";
import { Jost } from "next/font/google";

const font = Jost({ subsets: ["latin"] });

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <main className={font.className}>
        <Story />
      </main>
    ),
  ],
};

export default preview;
