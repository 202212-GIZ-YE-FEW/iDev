import renderer from "react-test-renderer";

import BringsHere from "../BringsHere";

it("renders correctly", () => {
    const tree = renderer.create(<BringsHere />).toJSON();
    expect(tree).toMatchSnapshot();
});
