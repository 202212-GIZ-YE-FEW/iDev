import renderer from "react-test-renderer";

import Received from "../Received";

it("renders correctly", () => {
    const tree = renderer.create(<Received />).toJSON();
    expect(tree).toMatchSnapshot();
});
