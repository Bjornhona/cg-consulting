import { getPublishedId } from "sanity";
import { apiVersion } from "../env";

/**
 * Custom isUnique for slug fields in multilingual documents.
 * Allows the same slug to be used across different languages (e.g. "my-post" in both en and es).
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function isUniqueSlugPerLanguage(slug: any, context: any): Promise<boolean> {
  const slugValue = typeof slug === "string" ? slug : (slug as { current?: string })?.current;
  const document = context.document as { _id?: string; _type?: string; language?: string } | undefined;
  const lang = document?.language;
  const docType = document?._type;
  const docId = document?._id;

  if (!slugValue) return true;
  if (!lang) return true;

  const client = context.getClient({ apiVersion });
  const id = docId ? getPublishedId(docId) : null;

  const query = id
    ? `count(*[_type == $type && language == $lang && slug.current == $slug && !sanity::versionOf($id)])`
    : `count(*[_type == $type && language == $lang && slug.current == $slug])`;

  const count = await client.fetch(
    query,
    id ? { type: docType, lang, slug: slugValue, id } : { type: docType, lang, slug: slugValue }
  );

  return count === 0;
}
