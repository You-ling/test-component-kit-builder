import '../src/styles/globals.css'
import globalsCssRaw from '../src/styles/globals.css?raw'
import { createElement, type CSSProperties } from 'react'
import type { Preview } from '@storybook/react-vite'
import { extractCssColorVars } from '../src/foundations/DesignGuideline/cssSync'

// globals.css switches colors with `prefers-color-scheme`, which follows the
// OS setting. For previews we pin the scheme via the toolbar instead: each
// story gets the chosen scheme's color tokens as inline CSS variables, which
// override the ones inherited from :root.
const cssColorVars = extractCssColorVars(globalsCssRaw)

function colorVarsStyle(scheme: 'light' | 'dark'): CSSProperties {
  const vars = { ...cssColorVars.light, ...(scheme === 'dark' ? cssColorVars.dark : {}) }
  return Object.fromEntries(
    Object.entries(vars).map(([name, value]) => [`--color-${name}`, value])
  ) as CSSProperties
}

const preview: Preview = {
  globalTypes: {
    colorScheme: {
      description: 'Color scheme for component previews',
      toolbar: {
        title: 'Color scheme',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    colorScheme: 'light',
  },
  decorators: [
    (Story, context) => {
      // Foundations pages (e.g. Design Guideline) have their own light/dark handling.
      if (!context.title.startsWith('Components/')) return Story()
      const scheme = context.globals.colorScheme === 'dark' ? 'dark' : 'light'
      return createElement(
        'div',
        {
          style: {
            ...colorVarsStyle(scheme),
            backgroundColor: 'var(--color-surface-page)',
            color: 'var(--color-text-default)',
            padding: 16,
          },
        },
        Story()
      )
    },
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
