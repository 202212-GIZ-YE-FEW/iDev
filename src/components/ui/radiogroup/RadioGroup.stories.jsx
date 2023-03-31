import React from "react";

import RadioGroup from "./RadioGroup";
import RadioInputItem from "./RadioInputItem";

export default {
    title: "UI/RadioGroup",
    component: RadioGroup,
    argsTypes: {
        title: { control: "text" },
        asButton: { control: "boolean" },
    },
};

const Template = (args) => <RadioGroup {...args} />;
export const Default = Template.bind({});
Default.args = {
    title: "Radio Group",
    asButton: false,
    children: [
        <RadioInputItem
            key={1}
            id='1'
            name='radio'
            value='1'
            title='Option 1'
        />,
        <RadioInputItem
            key={2}
            id='2'
            name='radio'
            value='2'
            title='Option 2'
        />,
        <RadioInputItem
            key={3}
            id='3'
            name='radio'
            value='3'
            title='Option 3'
        />,
    ],
};

export const AsButton = Template.bind({});
AsButton.args = {
    title: "Radio Group",
    asButton: true,
    children: [
        <RadioInputItem
            key={1}
            id='1'
            name='radio'
            value='1'
            title='Option 1'
        />,
        <RadioInputItem
            key={2}
            id='2'
            name='radio'
            value='2'
            title='Option 2'
        />,
        <RadioInputItem
            key={3}
            id='3'
            name='radio'
            value='3'
            title='Option 3'
        />,
    ],
};
