import renderer from "react-test-renderer";

import RadioInputItem from "./RadioInputItem";

it("renders correctly", () => {
    const tree = renderer.create(<RadioInputItem />).toJSON();
    expect(tree).toMatchSnapshot();
});
