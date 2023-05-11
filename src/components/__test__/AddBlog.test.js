import renderer from "react-test-renderer";
import AddBlog from "../AddBlog";
it("renders correctly", () => {
    const tree = renderer.create(<AddBlog />).toJSON();
    expect(tree).toMatchSnapshot();
});
