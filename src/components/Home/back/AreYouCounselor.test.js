import renderer from "react-test-renderer";

import AreYouCounselor from "../AreYouCounselor";

it("renders correctly", () => {
    const tree = renderer.create(<AreYouCounselor />).toJSON();
    expect(tree).toMatchSnapshot();
});
