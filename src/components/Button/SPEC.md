# Button

A clickable button for triggering an action, with style, size, and icon variants.

## Description

Button is the standard clickable control across the library — used for form submission, confirming/canceling actions, and triggering navigation or side effects. It supports an optional icon before and/or after the label.

## Component Hierarchy

none

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|--------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost'` | `'primary'` | No | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | No | Size |
| `leftIcon` | `ReactNode` | — | No | Icon shown before the label, e.g. `<HomeIcon className="w-4 h-4" />` |
| `rightIcon` | `ReactNode` | — | No | Icon shown after the label, e.g. `<HomeIcon className="w-4 h-4" />` |
| `className` | `string` | — | No | Style override |
| `disabled` | `boolean` | `false` | No | Disabled state |
| `onClick` | `() => void` | — | No | Click handler |

## Variants & States

**Variants** (driven by props):
- `primary` — solid `brand-primary` (royal) background, `text-inverse` (white) text; darkens to `brand-hover` on hover
- `secondary` — transparent background, 1px `brand-primary` border and text; fills with `brand-subtle` on hover
- `ghost` — no background or border, `brand-primary` text; fills with `brand-subtle` on hover

All variants use the `button` corner radius (8px / 0.5rem) and use the body font (Montserrat) at bold weight (700).

**Sizes**:
- `sm` — 32px tall
- `md` — 40px tall (default)
- `lg` — 48px tall

**States** (driven by interaction or data):
- `hover` — see each variant above; cursor becomes a pointer
- `focus-visible` — 2px `brand-primary` ring with a small gap, shown when reached by keyboard
- `disabled` — 50% opacity, not clickable

## Usage Example

```tsx
import { Button } from '@/components/Button'
import { HomeIcon } from '@/components/Icons'

<Button variant="primary" leftIcon={<HomeIcon className="w-4 h-4" />} onClick={handleClick}>
  Download
</Button>
```
