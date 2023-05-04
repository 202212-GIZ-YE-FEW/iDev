import { QueryClient, QueryClientProvider } from "react-query";
import renderer from "react-test-renderer";

import ChatItem from "../ChatItem";

it("renders correctly", () => {
    const tree = renderer
        .create(
            <QueryClientProvider client={new QueryClient()}>
                <ChatItem />
            </QueryClientProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
