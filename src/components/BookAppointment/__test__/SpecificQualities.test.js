import renderer from "react-test-renderer";

import SpecificQualities from "../SpecificQualities";

it("renders correctly", () => {
    const tree = renderer.create(<SpecificQualities />).toJSON();
    expect(tree).toMatchSnapshot();
});
