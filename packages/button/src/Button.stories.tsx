import React from 'react';
import {Meta, Story} from '@storybook/react';
import Button from './Button';

export default {
    title: 'Button',
    component: Button,
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Click me',
    onClick: () => console.log('Button clicked'),
};