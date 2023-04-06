import renderer from "react-test-renderer";

import Requirement from "../Requirement";
it("renders correctly", () => {
    const tree = renderer.create(<Requirement />).toJSON();
    expect(tree).toMatchSnapshot();
});
