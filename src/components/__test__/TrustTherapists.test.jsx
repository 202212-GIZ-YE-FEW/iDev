import renderer from "react-test-renderer";

import TrustTherapists from "../TrustTherapists";

it("renders correctly", () => {
    const tree = renderer.create(<TrustTherapists />).toJSON();
    expect(tree).toMatchSnapshot();
});
