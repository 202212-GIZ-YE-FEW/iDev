import renderer from "react-test-renderer";

import BlogItem from "../BlogItem";

it("renders correctly", () => {
    const tree = renderer.create(<BlogItem />).toJSON();
    expect(tree).toMatchSnapshot();
});
