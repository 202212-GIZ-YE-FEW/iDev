import renderer from "react-test-renderer";

import TicketItem from "../TicketItem";

it("renders correctly", () => {
    const tree = renderer.create(<TicketItem />).toJSON();
    expect(tree).toMatchSnapshot();
});
