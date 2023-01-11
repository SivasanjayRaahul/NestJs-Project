/** @format */

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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

  it("navigates to view post page", async () => {
    render(<Home />);

    const viewButton = screen.getByRole("button", { name: "View" });

    fireEvent.click(viewButton);

    const signInWithGithubButton = waitFor(() =>
      screen.getByRole("button", {
        name: /sign in with github/,
      })
    );

    expect(signInWithGithubButton).toBeInTheDocument;
  });

  it("navigates to create post page", async () => {
    render(<Home />);

    const createButton = screen.getByRole("button", { name: "Create" });

    fireEvent.click(createButton);

    const notLoggedInText = waitFor(() => screen.getByText(/not logged in/));

    expect(notLoggedInText).toBeInTheDocument;
  });
});
