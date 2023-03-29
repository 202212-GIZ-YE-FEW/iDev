import renderer from "react-test-renderer";

import Dropdown from "../Dropdown/Dropdown";

it("renders correctly", () => {
    const tree = renderer.create(<Dropdown />).toJSON();
    expect(tree).toMatchSnapshot();
});
