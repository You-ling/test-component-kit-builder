import type { Meta, StoryObj } from '@storybook/react-vite'
import { TextInput } from './TextInput'

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  args: {
    placeholder: 'Enter text',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 320 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof TextInput>

export const Default: Story = {}

export const Filled: Story = {
  args: {
    defaultValue: 'Hello world',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'Not editable',
  },
}

export const Error: Story = {
  args: {
    error: true,
    defaultValue: 'Invalid value',
  },
}
