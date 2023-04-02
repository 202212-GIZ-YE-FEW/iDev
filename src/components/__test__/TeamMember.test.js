import renderer from "react-test-renderer";
import TeamMember from "../TeamMember";

it("renders correctly", () => {
    const tree = renderer.create(<TeamMember />).toJSON();
    expect(tree).toMatchSnapshot();
});
