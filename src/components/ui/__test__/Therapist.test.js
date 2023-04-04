import renderer from "react-test-renderer";

import Therapist from "@/pages/therapist";

it("renders correctly", () => {
    const tree = renderer.create(<Therapist />).toJSON();
    expect(tree).toMatchSnapshot();
});
