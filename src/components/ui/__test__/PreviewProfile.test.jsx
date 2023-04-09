import renderer from "react-test-renderer";

import PreviewProfile from "../PreviewProfile";

it("renders correctly", () => {
    const tree = renderer.create(<PreviewProfile />).toJSON();
    expect(tree).toMatchSnapshot();
});
