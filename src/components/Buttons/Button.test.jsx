import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react"
import { it, expect } from "vitest"
import { Button } from "./Button"


it("Should render button component", () => {
    render(<Button />)
    const ButtonComponent = screen.getByTestId("buttoncomponent")
    expect(ButtonComponent).toBeInTheDocument()

})