import { QueryClient, QueryClientProvider } from "react-query";
import renderer from "react-test-renderer";

import TicketSection from "../TicketSection";

const queryClient = new QueryClient();

it("renders correctly", () => {
    const tree = renderer
        .create(
            <QueryClientProvider client={queryClient}>
                <TicketSection />
            </QueryClientProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
