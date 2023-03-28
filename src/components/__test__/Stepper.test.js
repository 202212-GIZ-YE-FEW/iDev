import { fireEvent, render } from "@testing-library/react";
import renderer from "react-test-renderer";

import Stepper from "../Stepper";

const steps = [
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
];
it("renders correctly", () => {
    const tree = renderer
        .create(<Stepper steps={steps} currentStep={0} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
it("renders correctly", () => {
    const { getByText } = render(<Stepper steps={steps} currentStep={0} />);
    if (steps.length > 1) {
        const nextButton = getByText("Next");
        expect(nextButton).toBeInTheDocument();
    }
});

it("renders correctly", () => {
    const { getByText } = render(<Stepper steps={steps} currentStep={1} />);
    const prevButton = getByText("Prev");
    expect(prevButton).toBeInTheDocument();
});
it("renders correctly", () => {
    const { getByText } = render(<Stepper steps={steps} currentStep={0} />);
    const nextButton = getByText("Next");
    expect(nextButton).toBeInTheDocument();
    fireEvent.click(nextButton);
    expect(getByText("Step 2")).toBeInTheDocument();
});
it("renders correctly", () => {
    const { getByText } = render(<Stepper steps={steps} currentStep={1} />);
    const prevButton = getByText("Prev");
    expect(prevButton).toBeInTheDocument();
    fireEvent.click(prevButton);
    expect(getByText("Step 1")).toBeInTheDocument();
});
it("renders correctly", () => {
    const { queryByText } = render(<Stepper steps={steps} currentStep={2} />);
    const nextButton = queryByText("Next");
    expect(nextButton).not.toBeInTheDocument();
});

it("renders correctly", () => {
    const { queryByText } = render(<Stepper steps={steps} currentStep={0} />);
    const prevButton = queryByText("Prev");
    expect(prevButton).not.toBeInTheDocument();
});
