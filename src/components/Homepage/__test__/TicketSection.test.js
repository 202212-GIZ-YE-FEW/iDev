import renderer from "react-test-renderer";

import TicketSection from "../TicketSection";

it("renders correctly", () => {
    const tree = renderer.create(<TicketSection />).toJSON();
    expect(tree).toMatchSnapshot();
});
