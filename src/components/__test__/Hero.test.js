import renderer from "react-test-renderer";

import Hero from "../Hero";

it("renders correctly", () => {
    const tree = renderer.create(<Hero />).toJSON();
    expect(tree).toMatchSnapshot();
});
