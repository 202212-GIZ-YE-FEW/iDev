import React from "react";

import Stepper from "../Stepper";

export default {
    title: "UI/Stepper",
    component: Stepper,
    argTypes: {
        steps: {
            control: {
                type: "object",
            },
        },
        currentStep: {
            control: {
                type: "number",
            },
        },
    },
};

const Template = (args) => <Stepper {...args} />;
export const Default = Template.bind({});
Default.args = {
    steps: [
        {
            title: "Step 1",
            content: "This is the first step",
        },
        {
            title: "Step 2",
            content: "This is the second step",
        },
        {
            title: "Step 3",
            content: "This is the third step",
        },
    ],
    currentStep: 0,
};
