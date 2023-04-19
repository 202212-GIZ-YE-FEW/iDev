import renderer from "react-test-renderer";

import BlogsSection from "../BlogsSection";
it("renders correctly", () => {
    const tree = renderer.create(<BlogsSection />).toJSON();
    expect(tree).toMatchSnapshot();
});
