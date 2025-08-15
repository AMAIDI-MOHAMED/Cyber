import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import { eq, sql } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../renderers.mjs';

const db = await createRemoteDatabaseClient({
  url: void 0,
  token: process.env.ASTRO_DB_APP_TOKEN
});
const Feedback = asDrizzleTable("Feedback", { "columns": { "slug": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "slug", "collection": "Feedback", "primaryKey": true } }, "helpful": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "helpful", "collection": "Feedback", "primaryKey": false, "optional": false, "default": 0 } }, "notHelpful": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "notHelpful", "collection": "Feedback", "primaryKey": false, "optional": false, "default": 0 } } }, "deprecated": false, "indexes": {} }, false);

const prerender = false;
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { slug, type } = data;
    if (!slug || type && type !== "helpful" && type !== "notHelpful") {
      const feedback = await db.select().from(Feedback).where(eq(Feedback.slug, slug)).then((rows) => rows[0] || { helpful: 0, notHelpful: 0 });
      return new Response(JSON.stringify(feedback), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }
    let updatedFeedback;
    if (type === "helpful") {
      updatedFeedback = await db.insert(Feedback).values({ slug, helpful: 1 }).onConflictDoUpdate({
        target: Feedback.slug,
        set: { helpful: sql`helpful + 1` }
      }).returning({
        helpful: Feedback.helpful,
        notHelpful: Feedback.notHelpful
      }).then((res) => res[0]);
    } else {
      updatedFeedback = await db.insert(Feedback).values({ slug, notHelpful: 1 }).onConflictDoUpdate({
        target: Feedback.slug,
        set: { notHelpful: sql`notHelpful + 1` }
      }).returning({
        helpful: Feedback.helpful,
        notHelpful: Feedback.notHelpful
      }).then((res) => res[0]);
    }
    return new Response(JSON.stringify(updatedFeedback), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    console.error("Error handling feedback:", error);
    return new Response("Internal server error", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
