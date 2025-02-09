import { Meta, StoryObj } from '@storybook/angular';
import { TdrButton } from './tdr-button';

const meta: Meta<TdrButton> = {
  title: 'Button',
  component: TdrButton,
  argTypes: {
    size: {
      options: ['base', 'sm', 'lg'],
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;
type Story = StoryObj<TdrButton>;

export const Default: Story = {
  args: {
    size: 'base',
  },
};
