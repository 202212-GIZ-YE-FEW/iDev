import renderer from "react-test-renderer";

import Select from "../Select";

it("renders correctly", () => {
    const tree = renderer.create(<Select />).toJSON();
    expect(tree).toMatchSnapshot();
});
