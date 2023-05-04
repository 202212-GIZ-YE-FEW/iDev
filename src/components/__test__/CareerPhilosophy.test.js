import renderer from "react-test-renderer";

import CareerPhilosophy from "../CareerPhilosophy";

it("renders correctly", () => {
    const tree = renderer.create(<CareerPhilosophy />).toJSON();
    expect(tree).toMatchSnapshot();
});
