import mockRouter from "next-router-mock";
import renderer from "react-test-renderer";

import Navbar from "../Navbar";

jest.mock("next/router", () => require("next-router-mock"));
it("renders correctly", () => {
    mockRouter.setCurrentUrl("/payment");
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
});
