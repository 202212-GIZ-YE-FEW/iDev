import renderer from "react-test-renderer";

import BookAppointment from "../BookAppointment";

it("renders correctly", () => {
    const tree = renderer.create(<BookAppointment />).toJSON();
    expect(tree).toMatchSnapshot();
});
