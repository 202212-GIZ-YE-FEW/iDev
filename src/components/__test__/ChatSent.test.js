import renderer from "react-test-renderer";

import Sent from "../ChatSent";

it("renders correctly", () => {
    const tree = renderer.create(<Sent />).toJSON();
    expect(tree).toMatchSnapshot();
});
