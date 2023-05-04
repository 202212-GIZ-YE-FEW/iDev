import renderer from "react-test-renderer";
import { QueryClient, QueryClientProvider } from "react-query";
import ChatItem from "../ChatItem";
import { doc } from "firebase/firestore";

import { db } from "../../firebase/config";

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
