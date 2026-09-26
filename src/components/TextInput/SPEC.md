# TextInput

A single-line text field with an outline border and 8px rounded corners.

## Description

Use `TextInput` wherever users type a short value — names, emails, search terms. It is an outlined field with 8px corners (matching `Button`), a 1px border that turns brand-colored and thickens on hover and focus, turns red when the value is invalid, and fills with gray when disabled. All native `<input>` attributes are passed through, so it works with any form library.

## Component Hierarchy

none

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `error` | `boolean` | `false` | No | Shows a red border and sets `aria-invalid` |
| `disabled` | `boolean` | `false` | No | Gray fill, not editable |
| `type` | `string` | `'text'` | No | Native input type, e.g. `'text'`, `'email'`, `'password'` |
| `placeholder` | `string` | — | No | Hint text shown while empty |
| `value` | `string` | — | No | Controlled value |
| `defaultValue` | `string` | — | No | Initial value when uncontrolled |
| `onChange` | `(event: ChangeEvent<HTMLInputElement>) => void` | — | No | Fires on every edit |
| `className` | `string` | `''` | No | Style override, e.g. a fixed width |
| ...rest | `InputHTMLAttributes<HTMLInputElement>` | — | No | Any other native input attribute |

## Variants & States

**Variants** (driven by props):
- default — transparent background, 1px `border-default` border, `input` corner radius (8px / 0.5rem)
- `error` — 1px `feedback-error` (red) border

**States** (driven by interaction or data):
- `hover` — border turns `brand-primary` (royal) and thickens to 2px, without shifting the layout; in the `error` variant the border stays red and just thickens
- `focus` — text cursor appears for typing; border stays 2px `brand-primary` (red in `error`) so keyboard users can see which field is active
- `disabled` — `surface-disabled` gray fill, muted text, not-allowed cursor, no hover effect

## Usage Example

```tsx
import { TextInput } from '@/components/TextInput'

<TextInput placeholder="Email" type="email" />
<TextInput error defaultValue="not-an-email" />
<TextInput disabled defaultValue="Locked" />
```
