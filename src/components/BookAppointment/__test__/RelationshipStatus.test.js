import renderer from "react-test-renderer";

import RelationshipStatus from "../RelationshipStatus";

it("renders correctly", () => {
    const tree = renderer.create(<RelationshipStatus />).toJSON();
    expect(tree).toMatchSnapshot();
});
