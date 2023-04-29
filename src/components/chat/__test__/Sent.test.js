import renderer from "react-test-renderer";

import Sent from "../Sent";

it("renders correctly", () => {
    const tree = renderer.create(<Sent />).toJSON();
    expect(tree).toMatchSnapshot();
});
