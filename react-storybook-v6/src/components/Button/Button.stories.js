import React from 'react';
import { Small } from '../Input/Input.stories';
import Button from './Button';
import Center from '../Center/Center';

export default {
    title: 'Form/control/Button',
    component: Button,
    args: {
        children: 'Button' //set args at a components level. Args at story levek overrides args at component level.
    },
    decorators: [story => <Center>{story()}</Center>] //this adds decorator locally
}

export const Primary = () => (
    <Center>
        <Button variant='primary'>
            Primary
        </Button>
    </Center>
);

export const Secondary = () => (
    <Button variant='secondary'>
        Secondary
    </Button>
);

export const Success = () => (
    <Button variant='success'>
        Success
    </Button>
);

export const Danger = () => (
    <Button variant='danger'>
        Danger
    </Button>
);

const Template = args => <Button {...args}/>;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
    variant: 'primary',
    //children: 'Primary Args'
};

export const LongPrimaryA  = Template.bind({});
LongPrimaryA.args = {
    ...PrimaryA.args, //this reuses PrimaryA args
    //children: 'Long PrimaryA' //and then overrrides children prop
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
    variant: 'secondary',
    //children: 'Secondary Args'
};