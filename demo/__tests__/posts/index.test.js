import { render, screen } from "@testing-library/react"

import Posts from "@/pages/posts/index"

describe("render view posts page", () => {

    it("display posts at top", () => {
        const { getByText}=render(<Posts />)
        
        expect(getByText("Posts")).toBeInTheDocument();

    })
})