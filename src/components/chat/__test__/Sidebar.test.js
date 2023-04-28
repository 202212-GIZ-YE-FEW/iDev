import { useRouter } from "next/navigation";
import renderer from "react-test-renderer";

import Sidebar from "../Sidebar";

// Mock the useRouter hook
jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}));
jest.mock("next/router", () => ({
    useRouter: jest.fn(),
}));

it("renders correctly", () => {
    // Set up the mocked useRouter function
    useRouter.mockImplementation(() => ({
        push: () => "/",
    }));

    const tree = renderer.create(<Sidebar />).toJSON();
    expect(tree).toMatchSnapshot();
});
