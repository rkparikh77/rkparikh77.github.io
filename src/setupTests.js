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
