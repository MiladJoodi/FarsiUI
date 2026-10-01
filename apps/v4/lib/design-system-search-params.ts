"use client"

import { DEFAULT_CONFIG } from "@/registry/config"

/** Stub after /create removal — always returns site defaults. */
export function useDesignSystemSearchParams() {
  return [DEFAULT_CONFIG, (() => {}) as () => void] as const
}
