import React from "react";
import { render, getQueriesForElement, fireEvent } from "@testing-library/react";
import App from "./App";
import * as ReactDOM from 'react-dom';
import { act } from "react-dom/test-utils";

test("renders the correct content", () => {
  const {getByText, getByLabelText} = render(<App />);

  expect(getByText("Email*")).not.toBeNull();
});

// test("allows users to input fields", ()=> {
//   const {getByText, getByLabelText} = render(<App />);

//   const input = getByLabelText(/email/i);

//   fireEvent.change(input, { target: {value:'ed@red.com'}})

// })

it('submits email', () => {
  const { container } = render(<App />)
  const name = container.querySelector('input[name="email"]')

    fireEvent.change(name, {
      target: {
        value: "ed@red.com"
      }
    })
    expect(name.value).toEqual("ed@red.com");
})