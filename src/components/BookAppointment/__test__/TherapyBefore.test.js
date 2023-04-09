import renderer from "react-test-renderer";

import TherapyBefore from "../TherapyBefore";

it("renders correctly", () => {
    const tree = renderer.create(<TherapyBefore />).toJSON();
    expect(tree).toMatchSnapshot();
});
