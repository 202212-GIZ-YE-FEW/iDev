import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

import RadioGroup from "./RadioGroup";
import RadioInputItem from "./RadioInputItem";

it("renders correctly", () => {
    const tree = renderer.create(<RadioGroup />).toJSON();
    expect(tree).toMatchSnapshot();
});
it("renders title correctly", () => {
    const { getByText } = render(<RadioGroup title='test title' />);
    expect(getByText("test title")).toBeInTheDocument();
});
it("renders children correctly", () => {
    const { getByText } = render(
        <RadioGroup title='test title'>
            <RadioInputItem title='test title for child' />
        </RadioGroup>
    );
    expect(getByText("test title for child")).toBeInTheDocument();
});
it("passes asButton prop to child", () => {
    const { getByText } = render(
        <RadioGroup title='test title'>
            <RadioInputItem title='test title for child' />
        </RadioGroup>
    );
    expect(getByText("test title for child")).toBeInTheDocument();
});
it("does not render title if not passed", () => {
    const { queryByText } = render(
        <RadioGroup>
            <RadioInputItem title='test title for child' />
        </RadioGroup>
    );
    expect(queryByText("test title")).not.toBeInTheDocument();
});

describe("RadioGroup", () => {
    it("renders without error when passed only RadioInputItem children", () => {
        const { container } = render(
            <RadioGroup>
                <RadioInputItem value='option1'>Option 1</RadioInputItem>
                <RadioInputItem value='option2'>Option 2</RadioInputItem>
            </RadioGroup>
        );
        expect(container.firstChild).toBeInTheDocument();
    });

    it("throws an error when passed non-RadioInputItem children", () => {
        const errorMsg =
            "RadioGroup component can only have RadioInputItem as children";
        expect(() => {
            render(
                <RadioGroup>
                    <div>This should cause an error</div>
                </RadioGroup>
            );
        }).toThrow(errorMsg);

        expect(() => {
            render(
                <RadioGroup>
                    <RadioInputItem value='option1'>Option 1</RadioInputItem>
                    <div>This should also cause an error</div>
                </RadioGroup>
            );
        }).toThrow(errorMsg);
    });
});
