import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders the Cloniq platform shell", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /build, verify, and monetize ai workforces/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /apply for access/i }).length).toBeGreaterThan(0);
    expect(screen.getByText(/real onboarding before serious access/i)).toBeInTheDocument();
    expect(screen.getByText(/one account, multiple approved workspaces/i)).toBeInTheDocument();
  });
});
