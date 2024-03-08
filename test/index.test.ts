import { describe, it, expect } from "vitest";

describe('test', () => {
  it('getItem("foo")', () => {
    expect(localStorage.getItem("foo")).toBe(null)
    expect(localStorage.getItem).toBeCalledWith("foo")
  })

  it('setItem("foo", "bar") then getItem("foo")', () => {
    localStorage.setItem("foo", "bar")
    expect(localStorage.setItem).toBeCalledWith("foo", "bar")
    expect(localStorage.getItem("foo")).toBe("bar")
  })
})
