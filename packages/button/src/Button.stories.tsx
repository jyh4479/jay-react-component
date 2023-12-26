import {Meta, StoryObj} from '@storybook/react';
import Button from './Button';

const meta = {
    title: "Component/Button",
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {}
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
