import React from "react";

import Textarea from "./Textarea";

export default {
    title: "UI/Textarea",
    component: Textarea,
    argTypes: {
        label: { control: "text" },
        placeholder: { control: "text" },
        size: {
            control: {
                type: "select",
                options: [
                    "xs",
                    "sm",
                    "base",
                    "lg",
                    "xl",
                    "2xl",
                    "3xl",
                    "4xl",
                    "5xl",
                    "6xl",
                    "7xl",
                    "8xl",
                    "9xl",
                ],
            },
        },
        height: {
            control: {
                type: "select",
                options: [
                    "24",
                    "28",
                    "32",
                    "36",
                    "40",
                    "44",
                    "48",
                    "52",
                    "56",
                    "60",
                    "64",
                    "72",
                    "80",
                ],
            },
        },
        radius: {
            control: {
                type: "select",
                options: ["none", "sm", "md", "lg", "full"],
            },
        },
        border: {
            control: {
                type: "select",
                options: [
                    "gray",
                    "red",
                    "yellow",
                    "green",
                    "blue",
                    "indigo",
                    "purple",
                    "pink",
                ],
            },
        },
        shadow: {
            control: {
                type: "select",
                options: ["sm", "md", "lg", "xl", "2xl", "inner", "none"],
            },
        },
    },
};

const Template = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Label",
    placeholder: "Placeholder",
    size: "sm",
    height: "24",
    radius: "none",
    border: "gray",
    shadow: "md",
};
