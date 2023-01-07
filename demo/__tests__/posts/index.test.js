/** @format */

import { render } from "@testing-library/react";
import Posts from "@/pages/posts/index";

export const mockedPosts = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 2,
    id: 2,
    title: "aut autem",
    completed: true,
  },
];

describe("render view posts page", () => {
  it("display posts at top", () => {
    const { getByText } = render(<Posts posts={mockedPosts} />);

    expect(getByText("Posts")).toBeInTheDocument();
  });

  it("display no of posts as number", () => {
    const { getByText } = render(<Posts posts={mockedPosts} />);

    expect(getByText("Total posts: 2")).toBeInTheDocument;
  });
});
