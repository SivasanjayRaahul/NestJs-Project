/** @format */

import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const headingPost = screen.getByRole("heading", {
      name: /POSTS/i,
    });

    expect(headingPost).toBeInTheDocument();
  });

  it("renders create post button", () => {
    render(<Home />);

    const createButton = screen.getByText("Create");

    expect(createButton).toBeTruthy();
  });

  it("renders view post button", () => {
    render(<Home />);

    const viewButton = screen.getByText("View");

    expect(viewButton).toBeTruthy();
  });

  it("renders update post button", () => {
    render(<Home />);

    const updateButton = screen.getByText("Update");

    expect(updateButton).toBeTruthy();
  });
});
