import renderer from "react-test-renderer";

import RequirementsSection from "../RequirementsSection";
it("renders correctly", () => {
    const tree = renderer.create(<RequirementsSection />).toJSON();
    expect(tree).toMatchSnapshot();
});
