import renderer from "react-test-renderer";

import ChatLabel from "../ChatLabel";

it("renders correctly", () => {
    const tree = renderer.create(<ChatLabel />).toJSON();
    expect(tree).toMatchSnapshot();
});
