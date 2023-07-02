import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 w-10/12" }, _attrs))}><section><header class="mt-20"><h1 class="big-heading">Archive</h1><p class="subtitle">A big list of things I\u2019ve worked on</p></header><div class="archive__content"><table><thead><tr><th>Year</th><th>Title</th><th class="hide-on-mobile">Made at</th><th class="hide-on-mobile">Built with</th><th>Link</th></tr></thead><tbody><tr><td class="overline year">2022</td><td class="title">Harvard Business School Design System</td><td class="company hide-on-mobile"><span>Upstatement</span></td><td class="tech hide-on-mobile"><span>Storybook<span class="separator">\xB7</span></span><span>React<span class="separator">\xB7</span></span><span>TypeScript</span></td><td class="links"><div><a href="https://www.threadablebooks.com/" aria-label="External Link" rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a></div></td></tr></tbody></table></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/archive.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const archive = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { archive as default };
//# sourceMappingURL=archive.2702e358.mjs.map
