import renderer from "react-test-renderer";

import CreateVacancy from "../CreateVacancy";

it("renders correctly", () => {
    const tree = renderer.create(<CreateVacancy />).toJSON();
    expect(tree).toMatchSnapshot();
});
