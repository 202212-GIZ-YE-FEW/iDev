import renderer from "react-test-renderer";
import About from "../../pages/About/About";

it("renders correctly", () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
});
