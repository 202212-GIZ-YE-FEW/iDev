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
                options: ["sm", "md", "lg", "2xl"],
            },
        },
        border: {
            control: {
                type: "select",
                options: [
                    "gray",
                    "cyan",
                    "yellow",
                    "black",
                    "light-black",
                    "light-gray",
                    "phosphorescent",
                    "background",
                    "white",
                    "transparent",
                ],
            },
        },
        shadow: {
            control: {
                type: "select",
                options: ["md", "2xl"],
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
    height: "48",
    radius: "md",
    border: "gray",
    shadow: "2xl",
};
