import renderer from "react-test-renderer";

import Dropdown from "@/components/Dropdown/Dropdown";

it("renders correctly", () => {
    const tree = renderer.create(<Dropdown />).toJSON();
    expect(tree).toMatchSnapshot();
});
