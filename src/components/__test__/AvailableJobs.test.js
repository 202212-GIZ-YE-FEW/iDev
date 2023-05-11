import renderer from "react-test-renderer";

import AvailableJobs from "../AvailableJobs";

it("renders correctly", () => {
    const tree = renderer.create(<AvailableJobs />).toJSON();

    expect(tree).toMatchSnapshot();
});
