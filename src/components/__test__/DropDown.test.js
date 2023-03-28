import renderer from "react-test-renderer";

import DropDown from "../DropDown/DropDown";

it("renders correctly", () => {
    const tree = renderer.create(<DropDown />).toJSON();
    expect(tree).toMatchSnapshot();
});
