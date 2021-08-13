import React from 'react';
import { Small } from '../Input/Input.stories';
import Button from './Button';
import Center from '../Center/Center';
import { text, boolean } from '@storybook/addon-knobs';

export default {
    title: 'Form/control/Button',
    component: Button,
    args: {
        children: 'Button' //set args at a components level. Args at story levek overrides args at component level.
    },
    decorators: [story => <Center>{story()}</Center>], //this adds decorator locally
    argTypes: {
        variant: {control: 'text'},
        children: {control: 'text'},
        onClick: { action: 'clicked'},
        onMouseOver: { action: 'mouseOver:'}
    }
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

export const TestArgType = Template.bind({});
TestArgType.args = {
    variant: 'primary',
    children: 'Secondary Args'
};

export const Log = () => (
    <Button variant='primary' onClick={()=>console.log('button clicked', process.env.STORYBOOK_THEME)}>
        Log
    </Button>
);

export const Knobs = () => (
    <button disabled={boolean('Disabled',false)}>
        {text('Label','Button Label')}
    </button>
);

export const Accessible = () => <button>Accessible button</button>;

export const Inaccessible = () => (
  <button style={{ backgroundColor: 'red', color: 'darkRed' }}>Inaccessible button</button>
);