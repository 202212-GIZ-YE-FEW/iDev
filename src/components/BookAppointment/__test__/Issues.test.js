import renderer from "react-test-renderer";

import Issues from "../Issues";

it("renders correctly", () => {
    const tree = renderer.create(<Issues />).toJSON();
    expect(tree).toMatchSnapshot();
});
