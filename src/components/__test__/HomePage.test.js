import { QueryClient, QueryClientProvider } from "react-query";
import renderer from "react-test-renderer";

import HomePage from "../HomePage";

const queryClient = new QueryClient();

it("renders correctly", () => {
    const tree = renderer
        .create(
            <QueryClientProvider client={queryClient}>
                <HomePage />
            </QueryClientProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
