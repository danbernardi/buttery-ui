import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import { Accordion } from './Accordion';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Accordion',
  component: Accordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
  argTypes: {
    onClick: { action: 'onClick' },
  }
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    id: '1',
    title: 'Click to open/close',
    children: 'This is the accordion content that is revealed when the accordion is open.',
    defaultOpen: false,
  },
};
