import renderer from "react-test-renderer";

import Received from "../ChatReceived";

it("renders correctly", () => {
    const tree = renderer.create(<Received />).toJSON();
    expect(tree).toMatchSnapshot();
});
