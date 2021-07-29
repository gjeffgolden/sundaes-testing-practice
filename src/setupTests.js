// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

//import Mock Service Worker handlers
import { server } from "./mocks/server.js";

// establish API mocking before all tests
beforeAll(() => server.listen());

// reset any request handlers that we may add during tests
afterEach(() => server.resetHandlers());

// clean up after tests are finished
afterAll(() => server.close());
