/** @format */

import { render } from "@testing-library/react";
import CreatePost from "../../../pages/posts/create";
const mockedSession = {
  user: {
    name: "moc",
    email: "mock@mail.com",
  },
  expires: "23-09-2023",
};

const mockedNullSession = null;

describe("create post page", () => {
  it("render create page when user is authenticated", () => {
    const { getByText } = render(
      <CreatePost session={mockedSession}></CreatePost>
    );

    expect(getByText("CreatePost")).toBeInTheDocument();
  });
    
  it("does not display create page when user is unauthenticated", () => {
    const { getByText } = render(
      <CreatePost session={mockedNullSession}></CreatePost>
    );

    expect(getByText(/Not Logged In/)).toBeInTheDocument();
  });
});
