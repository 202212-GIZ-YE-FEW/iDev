import renderer from "react-test-renderer";

import JobsTable from "../JobsTable";

it("renders correctly", () => {
    const tree = renderer.create(<JobsTable />).toJSON();
    expect(tree).toMatchSnapshot();
});
