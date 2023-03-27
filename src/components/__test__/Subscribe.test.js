import renderer from "react-test-renderer";

import Subscribe from "../Subscribe";

it("renders correctly", () => {
    const tree = renderer.create(<Subscribe />).toJSON();
    expect(tree).toMatchSnapshot();
});
