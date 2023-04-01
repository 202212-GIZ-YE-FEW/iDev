import renderer from "react-test-renderer";

import Hero from "../HeroSection";

it("renders correctly", () => {
    const tree = renderer.create(<Hero />).toJSON();
    expect(tree).toMatchSnapshot();
});
