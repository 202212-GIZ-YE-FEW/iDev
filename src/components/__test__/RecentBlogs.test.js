import renderer from "react-test-renderer";

import RecentBlogs from "../recent blog/RecentBlogs";

it("renders correctly", () => {
    const tree = renderer.create(<RecentBlogs />).toJSON();
    expect(tree).toMatchSnapshot();
});
