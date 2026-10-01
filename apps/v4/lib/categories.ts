import { getBlocksCategorySlugs } from "@/lib/blocks-nav"

/** Category chips / static params for /blocks/[slug] */
export const registryCategories = getBlocksCategorySlugs().map((slug) => ({
  name: slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" "),
  slug,
  hidden: false,
}))
