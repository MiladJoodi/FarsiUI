import { describe, expect, it } from "vitest"

import {
  BUILTIN_REGISTRIES,
  FARSIUI_URL,
  REGISTRY_URL,
} from "./constants"

describe("registry defaults", () => {
  it("defaults REGISTRY_URL to the FarsiUI production registry", () => {
    expect(REGISTRY_URL).toBe("https://farsiui.ir/r")
  })

  it("exposes FARSIUI_URL derived from the registry origin", () => {
    expect(FARSIUI_URL).toBe("https://farsiui.ir")
  })

  it("registers @farsiui as the builtin namespace", () => {
    expect(Object.keys(BUILTIN_REGISTRIES)).toEqual(["@farsiui"])
    expect(BUILTIN_REGISTRIES["@farsiui"]).toBe(
      "https://farsiui.ir/r/styles/{style}/{name}.json"
    )
  })
})
