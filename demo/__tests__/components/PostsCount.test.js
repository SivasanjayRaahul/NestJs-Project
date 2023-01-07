/** @format */

import { render } from "@testing-library/react";

import PostsCount from "../../components/PostsCount";
import { mockedPosts } from "../posts/index.test";

describe("render to display no of posts", () => {
  it("display no of posts", () => {
    const { getByText } = render(<PostsCount posts={mockedPosts}></PostsCount>);

    expect(getByText("Total posts: 2")).toBeInTheDocument();
  });
});
