import renderer from "react-test-renderer";

import ChatReceived from "../ChatReceived";

it("renders correctly", () => {
    const tree = renderer.create(<ChatReceived />).toJSON();
    expect(tree).toMatchSnapshot();
});
