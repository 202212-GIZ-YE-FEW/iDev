import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import Textarea from "./Textarea";

describe("Textarea component", () => {
    test("renders label and placeholder correctly", () => {
        const labelText = "Enter your message:";
        const placeholderText = "Type your message here...";
        render(<Textarea label={labelText} placeholder={placeholderText} />);

        const labelElement = screen.getByText(labelText);
        const inputElement = screen.getByPlaceholderText(placeholderText);

        expect(labelElement).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
    });

    test("applies custom styles correctly", () => {
        const size = "base";
        const height = "12";
        const radius = "lg";
        const border = "blue";
        const shadow = "lg";
        render(
            <Textarea
                size={size}
                height={height}
                radius={radius}
                border={border}
                shadow={shadow}
            />
        );

        const inputElement = screen.getByRole("textbox");

        expect(inputElement).toHaveClass(`text-${size}`);
        expect(inputElement).toHaveClass(`h-${height}`);
        expect(inputElement).toHaveClass(`rounded-${radius}`);
        expect(inputElement).toHaveClass(`border-${border}`);
        expect(inputElement).toHaveClass(`shadow-${shadow}`);
    });
});

it("renders correctly", () => {
    const tree = renderer.create(<Textarea />).toJSON();
    expect(tree).toMatchSnapshot();
});
