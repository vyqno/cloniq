import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Providers } from "@/components/providers/Providers";
import ApplyPage from "@/app/apply/page";

describe("Apply page", () => {
  it("renders the real application form", () => {
    render(
      <Providers>
        <ApplyPage />
      </Providers>,
    );

    expect(screen.getByRole("heading", { name: /apply for cloniq access/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/applicant name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/creator/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit application/i })).toBeInTheDocument();
  });
});
