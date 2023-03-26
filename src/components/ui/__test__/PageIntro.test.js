import renderer from "react-test-renderer";

import PageIntro from "../page-intro";

it("renders correctly", () => {
    const tree = renderer.create(<PageIntro />).toJSON();
    expect(tree).toMatchSnapshot();
});
