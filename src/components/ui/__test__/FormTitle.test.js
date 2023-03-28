import renderer from "react-test-renderer";

import FormTitle from "../FormTitle";

it("renders correctly", () => {
    const tree = renderer.create(<FormTitle />).toJSON();
    expect(tree).toMatchSnapshot();
});
