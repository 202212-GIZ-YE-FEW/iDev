import renderer from "react-test-renderer";

import RecentBlogItem from "../RecentBlogItem";

it("renders correctly", () => {
    const tree = renderer.create(<RecentBlogItem />).toJSON();
    expect(tree).toMatchSnapshot();
});
