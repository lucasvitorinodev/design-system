import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { SignIn } from "./SignIn";
import { rest } from "msw";

export default {
  title: "Pages/Sign In",
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/sessions", (req, res, ctx) => {
          return res(
            ctx.json({
              message: "Login realizado!"
            })
          );
        })
      ]
    }
  }
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.type(
      canvas.getByPlaceholderText("Digite seu e-mail"),
      "lucasvitorino.dev@gmail.com"
    );
    userEvent.type(
      canvas.getByPlaceholderText("Digite sua senha"),
      "123123123"
    );

    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      expect(canvas.getByText("Login Realizado!")).toBeVisible();
    });
  }
};
