import renderer from "react-test-renderer";

import CommunicateThrough from "../CommunicateThrough";

it("renders correctly", () => {
    const tree = renderer.create(<CommunicateThrough />).toJSON();
    expect(tree).toMatchSnapshot();
});
