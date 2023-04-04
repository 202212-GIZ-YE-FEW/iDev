import renderer from "react-test-renderer";

import Singup from "@/pages/signup";

it("renders correctly", () => {
    const tree = renderer.create(<Singup />).toJSON();
    expect(tree).toMatchSnapshot();
});
