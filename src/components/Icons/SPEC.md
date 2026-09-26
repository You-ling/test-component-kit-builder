# Icons

A set of small, reusable icon components — one named component per icon, all sharing the same props.

## Description

Icons are generated from SVG files in `assets/icons/` via the `sync-icons` skill. Each icon is its own named export (e.g. `HomeIcon`) rather than a single configurable component, so consumers import only the icons they use. Single-tone icons render in `currentColor` so they inherit the surrounding text color; multi-color icons keep their original colors.

## Component Hierarchy

none

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|--------------|
| `className` | `string` | — | No | Style override, e.g. sizing via Tailwind (`w-4 h-4`) |
| `style` | `CSSProperties` | — | No | Inline style override |
| ...rest | `SVGProps<SVGSVGElement>` | — | No | Any native SVG attribute (e.g. `width`, `height`, `onClick`) |

## Variants & States

Each icon is a separate named export:

- `CloseIcon`
- `HomeFillIcon`
- `HomeIcon`
- `ImgFillIcon`
- `ImgIcon`
- `MenuIcon`
- `PeopleFillIcon`
- `PeopleIcon`
- `SettingsIcon`

This list must stay in sync with `index.ts` and `assets/icons/` — the `sync-icons` skill keeps all three in sync automatically.

## Usage Example

```tsx
import { HomeIcon } from '@/components/Icons'

<HomeIcon className="w-5 h-5 text-gray-500" />
```

## Credits

`CloseIcon`, `MenuIcon` and `SettingsIcon` are [Material Symbols](https://fonts.google.com/icons) by Google (Outlined, weight 200, unfilled), licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0). When adding more Material icons, download them with the same style settings so the set stays consistent, and rename each file to `icon_<name>.svg` before running `sync-icons`.
