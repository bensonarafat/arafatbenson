import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
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

const _imports_0 = "" + globalThis.__publicAssetsURL("images/logo.png");
const _imports_1 = "" + globalThis.__publicAssetsURL("images/header__verification.png");
const _imports_2 = "" + globalThis.__publicAssetsURL("images/official.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 border-slate-50/[0.06] supports-backdrop-blur:bg-white/60 bg-transparent" }, _attrs))}><div class="max-w-8xl mx-auto"><div class="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 border-slate-300/10 mx-4 lg:mx-0"><div class="relative flex items-center">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "mr-3 flex-none overflow-hidden md:w-auto flex items-center font-bold"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Ben" style="${ssrRenderStyle({ "width": "50px", "height": "50px", "margin-right": "0.5rem" })}"${_scopeId}><span class="header__name"${_scopeId}><span${_scopeId}> Benson Arafat </span><span class="header__verification" style="${ssrRenderStyle({ "padding-left": "0.25em" })}"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} style="${ssrRenderStyle({ "width": "25px" })}"${_scopeId}></span><span class="header__official" aria-hidden="true"${_scopeId}><img${ssrRenderAttr("src", _imports_2)} style="${ssrRenderStyle({ "width": "20px", "margin-right": "0.25em" })}"${_scopeId}> Official </span></span>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "Ben",
            style: { "width": "50px", "height": "50px", "margin-right": "0.5rem" }
          }, null, 4),
          createVNode("span", { class: "header__name" }, [
            createVNode("span", null, " Benson Arafat "),
            createVNode("span", {
              class: "header__verification",
              style: { "padding-left": "0.25em" }
            }, [
              createVNode("img", {
                src: _imports_1,
                style: { "width": "25px" }
              })
            ], 4),
            createVNode("span", {
              class: "header__official",
              "aria-hidden": "true"
            }, [
              createVNode("img", {
                src: _imports_2,
                style: { "width": "20px", "margin-right": "0.25em" }
              }, null, 4),
              createTextVNode(" Official ")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="relative lg:flex items-center ml-auto"><nav class="text-sm leading-6 font-semibold text-white"><ul class="flex space-x-8"><li><a class="hover:text-[#ff5277]" href="/#about">About</a></li><li><a class="hover:text-[#ff5277]" href="/#experience">Experience</a></li><li><a class="hover:text-[#ff5277]" href="/#project">Projects</a></li><li><a class="hover:text-[#ff5277]" href="https://blog.bensonarafat.com/" target="black">Blog</a></li><li><a class="hover:text-[#ff5277]" href="/#contact">Contact</a></li></ul></nav><div class="flex items-center border-l border-slate-200 ml-6 border-slate-800"><a href="https://github.com/bensonarafat" target="_blank" class="ml-6 block text-slate-400 hover:text-slate-300"><span class="sr-only">Benson Arafat on GitHub</span><svg viewBox="0 0 16 16" class="w-5 h-5" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></a></div></div><div class="ml-2 -my-1 lg:hidden"><button type="button" class="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 hover:text-slate-300"><span class="sr-only">Navigation</span><svg width="24" height="24" fill="none" aria-hidden="true"><path d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button><div style="${ssrRenderStyle({ "position": "fixed", "top": "1px", "left": "1px", "width": "1px", "height": "0", "padding": "0", "margin": "-1px", "overflow": "hidden", "clip": "rect(0, 0, 0, 0)", "white-space": "nowrap", "border-width": "0", "display": "none" })}"></div></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default.fcbb1184.mjs.map
