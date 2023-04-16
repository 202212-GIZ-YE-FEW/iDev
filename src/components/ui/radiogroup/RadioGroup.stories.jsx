import React from "react";

import RadioGroup from "./RadioGroup";
import RadioInputItem from "./RadioInputItem";

export default {
    title: "UI/RadioGroup",
    component: RadioGroup,
    argsTypes: {
        title: { control: "text" },
        as: { control: "text" },
    },
};

const Template = (args) => <RadioGroup {...args} />;
export const Default = Template.bind({});
Default.args = {
    title: "Radio Group",
    as: "standard",
    children: [
        <RadioInputItem
            key={1}
            id='1'
            name='radio'
            value='1'
            content='Option 1'
        />,
        <RadioInputItem
            key={2}
            id='2'
            name='radio'
            value='2'
            content='Option 2'
        />,
        <RadioInputItem
            key={3}
            id='3'
            name='radio'
            value='3'
            content='Option 3'
        />,
    ],
};

export const As = Template.bind({});
As.args = {
    title: "Radio Group",
    as: "standard",
    children: [
        <RadioInputItem
            key={1}
            id='1'
            name='radio'
            value='1'
            content='Option 1'
        />,
        <RadioInputItem
            key={2}
            id='2'
            name='radio'
            value='2'
            content='Option 2'
        />,
        <RadioInputItem
            key={3}
            id='3'
            name='radio'
            value='3'
            content='Option 3'
        />,
    ],
};
