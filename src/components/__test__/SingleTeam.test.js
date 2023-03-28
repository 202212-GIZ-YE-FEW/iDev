import renderer from "react-test-renderer";
import SingleTeam from "@/components/SingleTeam";

it("renders correctly", () => {
    const tree = renderer.create(<SingleTeam />).toJSON();
    expect(tree).toMatchSnapshot();
});
