import renderer from "react-test-renderer";

import AuthSocialMedia from "../AuthSocialMedia";

it("renders correctly", () => {
    const tree = renderer.create(<AuthSocialMedia />).toJSON();
    expect(tree).toMatchSnapshot();
});
