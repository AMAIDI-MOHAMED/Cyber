export { renderers } from '../renderers.mjs';

const getRobotsTxt = () => `
User-agent: *
Allow: /
`;
const GET = () => {
  return new Response(getRobotsTxt());
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
