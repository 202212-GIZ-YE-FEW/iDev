import renderer from "react-test-renderer";

import TrustTherapistSection from "../TrustTherapistSection";

it("renders correctly", () => {
    const tree = renderer.create(<TrustTherapistSection />).toJSON();
    expect(tree).toMatchSnapshot();
});
