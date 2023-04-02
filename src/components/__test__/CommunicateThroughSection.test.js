import renderer from "react-test-renderer";

import CommunicateThroughSection from "../CommunicateThroughSection";

it("renders correctly", () => {
    const tree = renderer.create(<CommunicateThroughSection />).toJSON();
    expect(tree).toMatchSnapshot();
});
