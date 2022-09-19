import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';;

export default {
    title: 'button/Button',
    component: Button,
    argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args} />
);

export const Base = Template.bind({});

Base.args = {
    label: 'Button',
};