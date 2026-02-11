// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

// Mock GSAP to prevent import errors in tests
jest.mock("gsap", () => ({
  gsap: {
    registerPlugin: jest.fn(),
    to: jest.fn(),
    from: jest.fn(),
    fromTo: jest.fn(),
    timeline: jest.fn(() => ({
      to: jest.fn(),
      from: jest.fn(),
      fromTo: jest.fn(),
    })),
  },
  ScrollTrigger: {
    create: jest.fn(),
    refresh: jest.fn(),
  },
}));

jest.mock("gsap/ScrollTrigger", () => ({
  ScrollTrigger: {
    create: jest.fn(),
    refresh: jest.fn(),
  },
}));
