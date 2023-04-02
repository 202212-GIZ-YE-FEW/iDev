import renderer from "react-test-renderer";

import RecentBlogSection from "../RecentBlogSection";
it("renders correctly", () => {
    const tree = renderer.create(<RecentBlogSection />).toJSON();
    expect(tree).toMatchSnapshot();
});
