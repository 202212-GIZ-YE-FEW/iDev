import renderer from "react-test-renderer";

import CounselingType from "../CounselingType";

it("renders correctly", () => {
    const tree = renderer.create(<CounselingType />).toJSON();
    expect(tree).toMatchSnapshot();
});
