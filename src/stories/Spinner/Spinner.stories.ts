import type { Meta, StoryObj } from '@storybook/react';
import {
  Spinner
} from "./Spinner";

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;
  
export default meta;
type Story = StoryObj<typeof meta>;

export const Loader: Story = {
  name: "Loader",
  args: {
  },
};
