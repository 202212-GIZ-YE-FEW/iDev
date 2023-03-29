import renderer from "react-test-renderer";
import TeamMember from "@/components/TeamMember";

it("renders correctly", () => {
    const tree = renderer.create(<TeamMember />).toJSON();
    expect(tree).toMatchSnapshot();
});
