import renderer from "react-test-renderer";

import CommunicateThroughItem from "../CommunicateThroughItem";

it("renders correctly", () => {
    const tree = renderer.create(<CommunicateThroughItem />).toJSON();
    expect(tree).toMatchSnapshot();
});
