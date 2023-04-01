import renderer from "react-test-renderer";

import TrustTherapists from "../TrustTherapistSection";

it("renders correctly", () => {
    const tree = renderer.create(<TrustTherapists />).toJSON();
    expect(tree).toMatchSnapshot();
});
