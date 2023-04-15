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
// it("renders children correctly", () => {
//     const { getByText } = render(
//         <RadioGroup title='test title'>
//             <RadioInputItem title='test title for child' />
//         </RadioGroup>
//     );
//     expect(getByText("test title for child")).toBeInTheDocument();
// });
// it("passes asButton prop to child", () => {
//     const { getByText } = render(
//         <RadioGroup title='test title'>
//             <RadioInputItem title='test title for child' />
//         </RadioGroup>
//     );
//     expect(getByText("test title for child")).toBeInTheDocument();
// });
it("does not render title if not passed", () => {
    const { queryByText } = render(
        <RadioGroup>
            <RadioInputItem title='test title for child' />
        </RadioGroup>
    );
    expect(queryByText("test title")).not.toBeInTheDocument();
});
