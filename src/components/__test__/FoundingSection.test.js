import FoundingSection from "@/pages/About/FoundingSection";
import renderer from "react-test-renderer";

it("renders correctly", () => {
    const tree = renderer.create(<FoundingSection />).toJSON();
    expect(tree).toMatchSnapshot();
});
