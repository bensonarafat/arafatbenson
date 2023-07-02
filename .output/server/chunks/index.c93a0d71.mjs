import { useSSRContext, mergeProps, unref, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
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

const _imports_0$1 = "" + globalThis.__publicAssetsURL("images/benson_arafat.jpeg");
const _sfc_main$4 = {
  methods: {
    changeImageBlendMode() {
      let img = this.$refs.benimage;
      img.setAttribute("style", "mix-blend-mode: none");
    },
    resetImageBlendMode() {
      let img = this.$refs.benimage;
      img.setAttribute("style", "mix-blend-mode: luminosity");
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "about" }, _attrs))}><div class="flex flex-col flex-1"><div class="flex flex-auto flex-col justify-center" style="${ssrRenderStyle({ "padding": "2rem 0 4rem" })}"><div class="flex items-center"><div class="grow flex-1 flex flex-col p-3"><p class="text-4xl font-bold text-[1.4rem]" style="${ssrRenderStyle({ "letter-spacing": "1px", "margin-bottom": "1rem" })}">Hello \u{1F44B},</p><h1 class="text-[3.0rem] font-bold" style="${ssrRenderStyle({ "line-height": "1", "margin-bottom": "0.33em" })}">I&#39;m Benson Arafat</h1><div class="text-[2rem] font-light hero__content" style="${ssrRenderStyle({ "line-height": "1.4" })}"><p class="pb-3">Developer \u{1F36D} at <a class="hero__link hero__link" href="https://www.codepym.com/" target="_blank">Codepym</a> and Technical Writer \u{1F680}</p><p class="pb-3"> I\u2019m a full-stack developer and founder of <a href="https://geofootball.live" target="_blank" class="hero__link hero__link--codista">Geo Football</a>. <br class="hero__br"></p><p> I also write about tech on my <a href="https://blog.bensonarafat.com/" target="_blank" class="hero__link">Blog</a>, <a href="https://medium.com/@bensonarafat" target="_blank" class="hero__link">Medium</a>, <a href="https://hackernoon.com/u/bensonarafat" target="_blank" class="hero__link">Hackernoon</a> and on <a href="https://twitter.com/bensonarafat" target="_blank" class="hero__link hero__link--twitter">Twitter</a>. </p><p class="pt-5"> Here are a few technologies I\u2019ve been working with recently: </p><ul class="skills-list"><li>JavaScript (ES6+)</li><li>ReactJS</li><li>VueJs</li><li>Flutter/Dart</li><li>PHP/Laravel</li><li>NodeJs</li></ul><p class="pt-5"><a href="https://docs.google.com/document/d/1WMOQ5Z2wl3RR9yjOAPD_hRCBp4OvIQVwgqHz6vtQAyk/edit?usp=share_link" target="_blank" class="hero__link hero__link--codista">R\xE9sum\xE9 \u{1F4D1}</a></p></div></div><div class="grow flex-1 image_wrapper hidden sm:block md:block"><img${ssrRenderAttr("src", _imports_0$1)} alt="Benson Arafat"></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {
  __name: "Experience",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "experience" }, _attrs))} data-v-494096cd><h2 class="numbered-heading" data-v-494096cd>Where I\u2019ve Worked</h2>`);
      _push(ssrRenderComponent(unref(TabGroup), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="inner" data-v-494096cd${_scopeId}>`);
            _push2(ssrRenderComponent(unref(TabList), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="inner__left" data-v-494096cd${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Tab), {
                    as: "template",
                    class: "activeTab"
                  }, {
                    default: withCtx(({ selected }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="${ssrRenderClass({ "activeTab": selected, "inActiveTab": !selected })}" data-v-494096cd${_scopeId3}><img width="15" style="${ssrRenderStyle({ "padding-right": "5px" })}" src="https://media.licdn.com/dms/image/D4D0BAQHoUFJWWm-4Nw/company-logo_100_100/0/1681394451693?e=1689811200&amp;v=beta&amp;t=hx_Eo4Wjon4HJpYhqsxBbCym7tYUvqs769twjkwTAJI" data-v-494096cd${_scopeId3}> Codepym</div>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: { "activeTab": selected, "inActiveTab": !selected }
                          }, [
                            createVNode("img", {
                              width: "15",
                              style: { "padding-right": "5px" },
                              src: "https://media.licdn.com/dms/image/D4D0BAQHoUFJWWm-4Nw/company-logo_100_100/0/1681394451693?e=1689811200&v=beta&t=hx_Eo4Wjon4HJpYhqsxBbCym7tYUvqs769twjkwTAJI"
                            }),
                            createTextVNode(" Codepym")
                          ], 2)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Tab), {
                    as: "template",
                    class: "activeTab"
                  }, {
                    default: withCtx(({ selected }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="${ssrRenderClass({ "activeTab": selected, "inActiveTab": !selected })}" data-v-494096cd${_scopeId3}><img width="15" style="${ssrRenderStyle({ "padding-right": "5px" })}" src="https://media.licdn.com/dms/image/C4D0BAQGLp00edl9VVg/company-logo_100_100/0/1637222604391?e=1689811200&amp;v=beta&amp;t=F3KCh6IVX6hGxpE8Ddwoo-6ZnvXkIUdA8vQ5qDYjhiA" data-v-494096cd${_scopeId3}> BluePortal</div>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: { "activeTab": selected, "inActiveTab": !selected }
                          }, [
                            createVNode("img", {
                              width: "15",
                              style: { "padding-right": "5px" },
                              src: "https://media.licdn.com/dms/image/C4D0BAQGLp00edl9VVg/company-logo_100_100/0/1637222604391?e=1689811200&v=beta&t=F3KCh6IVX6hGxpE8Ddwoo-6ZnvXkIUdA8vQ5qDYjhiA"
                            }),
                            createTextVNode(" BluePortal")
                          ], 2)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Tab), {
                    as: "template",
                    class: "activeTab"
                  }, {
                    default: withCtx(({ selected }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="${ssrRenderClass({ "activeTab": selected, "inActiveTab": !selected })}" data-v-494096cd${_scopeId3}><img width="15" style="${ssrRenderStyle({ "padding-right": "5px" })}" src="https://media.licdn.com/dms/image/C4D0BAQFeRwrW1d2bWw/company-logo_100_100/0/1660311591898?e=1689811200&amp;v=beta&amp;t=3sQmRnIKcWiDvK2BuJSqlPHtlntPyHjpDEaM4Chedfk" data-v-494096cd${_scopeId3}> Bemo Technologies</div>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: { "activeTab": selected, "inActiveTab": !selected }
                          }, [
                            createVNode("img", {
                              width: "15",
                              style: { "padding-right": "5px" },
                              src: "https://media.licdn.com/dms/image/C4D0BAQFeRwrW1d2bWw/company-logo_100_100/0/1660311591898?e=1689811200&v=beta&t=3sQmRnIKcWiDvK2BuJSqlPHtlntPyHjpDEaM4Chedfk"
                            }),
                            createTextVNode(" Bemo Technologies")
                          ], 2)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "inner__left" }, [
                      createVNode(unref(Tab), {
                        as: "template",
                        class: "activeTab"
                      }, {
                        default: withCtx(({ selected }) => [
                          createVNode("div", {
                            class: { "activeTab": selected, "inActiveTab": !selected }
                          }, [
                            createVNode("img", {
                              width: "15",
                              style: { "padding-right": "5px" },
                              src: "https://media.licdn.com/dms/image/D4D0BAQHoUFJWWm-4Nw/company-logo_100_100/0/1681394451693?e=1689811200&v=beta&t=hx_Eo4Wjon4HJpYhqsxBbCym7tYUvqs769twjkwTAJI"
                            }),
                            createTextVNode(" Codepym")
                          ], 2)
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Tab), {
                        as: "template",
                        class: "activeTab"
                      }, {
                        default: withCtx(({ selected }) => [
                          createVNode("div", {
                            class: { "activeTab": selected, "inActiveTab": !selected }
                          }, [
                            createVNode("img", {
                              width: "15",
                              style: { "padding-right": "5px" },
                              src: "https://media.licdn.com/dms/image/C4D0BAQGLp00edl9VVg/company-logo_100_100/0/1637222604391?e=1689811200&v=beta&t=F3KCh6IVX6hGxpE8Ddwoo-6ZnvXkIUdA8vQ5qDYjhiA"
                            }),
                            createTextVNode(" BluePortal")
                          ], 2)
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Tab), {
                        as: "template",
                        class: "activeTab"
                      }, {
                        default: withCtx(({ selected }) => [
                          createVNode("div", {
                            class: { "activeTab": selected, "inActiveTab": !selected }
                          }, [
                            createVNode("img", {
                              width: "15",
                              style: { "padding-right": "5px" },
                              src: "https://media.licdn.com/dms/image/C4D0BAQFeRwrW1d2bWw/company-logo_100_100/0/1660311591898?e=1689811200&v=beta&t=3sQmRnIKcWiDvK2BuJSqlPHtlntPyHjpDEaM4Chedfk"
                            }),
                            createTextVNode(" Bemo Technologies")
                          ], 2)
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(TabPanels), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TabPanel), { class: "tabWrapper" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="tabContent" data-v-494096cd${_scopeId3}><h3 data-v-494096cd${_scopeId3}><span data-v-494096cd${_scopeId3}>Software Engineer</span><span class="company" data-v-494096cd${_scopeId3}>\xA0@\xA0 <a href="https://www.codepym.com/" class="inline-link" rel="noopener noreferrer" target="_blank" data-v-494096cd${_scopeId3}>Codepym</a></span></h3><p class="range" data-v-494096cd${_scopeId3}>Feb 2021 - Present</p><div data-v-494096cd${_scopeId3}><ul data-v-494096cd${_scopeId3}><li data-v-494096cd${_scopeId3}>\u200B\u200BLed a project to implement a new feature that allowed teachers to track student progress more effectively, resulting in a 25% increase in teacher satisfaction.</li><li data-v-494096cd${_scopeId3}>Worked with a team of developers to improve the platform&#39;s user interface and user experience, resulting in a 15% increase in customer retention.</li><li data-v-494096cd${_scopeId3}>Developed and implemented a new customer service strategy that reduced response times by 50% and increased customer satisfaction scores by 20%. </li><li data-v-494096cd${_scopeId3}>Successfully launched a new mobile app allowing students to access educational content offline, resulting in a 20% increase in active users.</li></ul></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "tabContent" }, [
                            createVNode("h3", null, [
                              createVNode("span", null, "Software Engineer"),
                              createVNode("span", { class: "company" }, [
                                createTextVNode("\xA0@\xA0 "),
                                createVNode("a", {
                                  href: "https://www.codepym.com/",
                                  class: "inline-link",
                                  rel: "noopener noreferrer",
                                  target: "_blank"
                                }, "Codepym")
                              ])
                            ]),
                            createVNode("p", { class: "range" }, "Feb 2021 - Present"),
                            createVNode("div", null, [
                              createVNode("ul", null, [
                                createVNode("li", null, "\u200B\u200BLed a project to implement a new feature that allowed teachers to track student progress more effectively, resulting in a 25% increase in teacher satisfaction."),
                                createVNode("li", null, "Worked with a team of developers to improve the platform's user interface and user experience, resulting in a 15% increase in customer retention."),
                                createVNode("li", null, "Developed and implemented a new customer service strategy that reduced response times by 50% and increased customer satisfaction scores by 20%. "),
                                createVNode("li", null, "Successfully launched a new mobile app allowing students to access educational content offline, resulting in a 20% increase in active users.")
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(TabPanel), { class: "tabWrapper" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="tabContent" data-v-494096cd${_scopeId3}><h3 data-v-494096cd${_scopeId3}><span data-v-494096cd${_scopeId3}>Software Engineer</span><span class="company" data-v-494096cd${_scopeId3}>\xA0@\xA0 <a href="https://blueportalcompany.com/" class="inline-link" rel="noopener noreferrer" target="_blank" data-v-494096cd${_scopeId3}>Blueportal Company</a></span></h3><p class="range" data-v-494096cd${_scopeId3}>Dec 2021 - Jan 2023</p><div data-v-494096cd${_scopeId3}><ul data-v-494096cd${_scopeId3}><li data-v-494096cd${_scopeId3}>Developed and implemented novel software tools. Increased automation and efficiency level by 35%. </li><li data-v-494096cd${_scopeId3}>Developed and implemented a new customer service strategy that reduced response times by 50% and increased customer satisfaction scores by 20%.</li><li data-v-494096cd${_scopeId3}>Suggested advancement of data security and confidentiality by implementing key processes and protocols. </li></ul></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "tabContent" }, [
                            createVNode("h3", null, [
                              createVNode("span", null, "Software Engineer"),
                              createVNode("span", { class: "company" }, [
                                createTextVNode("\xA0@\xA0 "),
                                createVNode("a", {
                                  href: "https://blueportalcompany.com/",
                                  class: "inline-link",
                                  rel: "noopener noreferrer",
                                  target: "_blank"
                                }, "Blueportal Company")
                              ])
                            ]),
                            createVNode("p", { class: "range" }, "Dec 2021 - Jan 2023"),
                            createVNode("div", null, [
                              createVNode("ul", null, [
                                createVNode("li", null, "Developed and implemented novel software tools. Increased automation and efficiency level by 35%. "),
                                createVNode("li", null, "Developed and implemented a new customer service strategy that reduced response times by 50% and increased customer satisfaction scores by 20%."),
                                createVNode("li", null, "Suggested advancement of data security and confidentiality by implementing key processes and protocols. ")
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(TabPanel), { class: "tabWrapper" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="tabContent" data-v-494096cd${_scopeId3}><h3 data-v-494096cd${_scopeId3}><span data-v-494096cd${_scopeId3}>Software Engineer</span><span class="company" data-v-494096cd${_scopeId3}>\xA0@\xA0 <a href="https://bemo.ng/" class="inline-link" rel="noopener noreferrer" target="_blank" data-v-494096cd${_scopeId3}>Bemo Technologies </a></span></h3><p class="range" data-v-494096cd${_scopeId3}>Apr 2019 - Feb 2021</p><div data-v-494096cd${_scopeId3}><ul data-v-494096cd${_scopeId3}><li data-v-494096cd${_scopeId3}>Successfully led a team of engineers to implement a new surge pricing algorithm that improved pricing accuracy and reduced customer complaints by 25%.</li><li data-v-494096cd${_scopeId3}>Developed and implemented a new onboarding process for new drivers that reduced the time it took to get them on the road by 50%.</li><li data-v-494096cd${_scopeId3}>Successfully launched a new ride-sharing feature that allowed customers to share rides and split the cost, resulting in a 30% increase in daily rides.</li><li data-v-494096cd${_scopeId3}>Increased driver retention by 20% by implementing a new incentive program that rewarded drivers for consistently high ratings and low cancellation rates.</li></ul></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "tabContent" }, [
                            createVNode("h3", null, [
                              createVNode("span", null, "Software Engineer"),
                              createVNode("span", { class: "company" }, [
                                createTextVNode("\xA0@\xA0 "),
                                createVNode("a", {
                                  href: "https://bemo.ng/",
                                  class: "inline-link",
                                  rel: "noopener noreferrer",
                                  target: "_blank"
                                }, "Bemo Technologies ")
                              ])
                            ]),
                            createVNode("p", { class: "range" }, "Apr 2019 - Feb 2021"),
                            createVNode("div", null, [
                              createVNode("ul", null, [
                                createVNode("li", null, "Successfully led a team of engineers to implement a new surge pricing algorithm that improved pricing accuracy and reduced customer complaints by 25%."),
                                createVNode("li", null, "Developed and implemented a new onboarding process for new drivers that reduced the time it took to get them on the road by 50%."),
                                createVNode("li", null, "Successfully launched a new ride-sharing feature that allowed customers to share rides and split the cost, resulting in a 30% increase in daily rides."),
                                createVNode("li", null, "Increased driver retention by 20% by implementing a new incentive program that rewarded drivers for consistently high ratings and low cancellation rates.")
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(TabPanel), { class: "tabWrapper" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "tabContent" }, [
                          createVNode("h3", null, [
                            createVNode("span", null, "Software Engineer"),
                            createVNode("span", { class: "company" }, [
                              createTextVNode("\xA0@\xA0 "),
                              createVNode("a", {
                                href: "https://www.codepym.com/",
                                class: "inline-link",
                                rel: "noopener noreferrer",
                                target: "_blank"
                              }, "Codepym")
                            ])
                          ]),
                          createVNode("p", { class: "range" }, "Feb 2021 - Present"),
                          createVNode("div", null, [
                            createVNode("ul", null, [
                              createVNode("li", null, "\u200B\u200BLed a project to implement a new feature that allowed teachers to track student progress more effectively, resulting in a 25% increase in teacher satisfaction."),
                              createVNode("li", null, "Worked with a team of developers to improve the platform's user interface and user experience, resulting in a 15% increase in customer retention."),
                              createVNode("li", null, "Developed and implemented a new customer service strategy that reduced response times by 50% and increased customer satisfaction scores by 20%. "),
                              createVNode("li", null, "Successfully launched a new mobile app allowing students to access educational content offline, resulting in a 20% increase in active users.")
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(TabPanel), { class: "tabWrapper" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "tabContent" }, [
                          createVNode("h3", null, [
                            createVNode("span", null, "Software Engineer"),
                            createVNode("span", { class: "company" }, [
                              createTextVNode("\xA0@\xA0 "),
                              createVNode("a", {
                                href: "https://blueportalcompany.com/",
                                class: "inline-link",
                                rel: "noopener noreferrer",
                                target: "_blank"
                              }, "Blueportal Company")
                            ])
                          ]),
                          createVNode("p", { class: "range" }, "Dec 2021 - Jan 2023"),
                          createVNode("div", null, [
                            createVNode("ul", null, [
                              createVNode("li", null, "Developed and implemented novel software tools. Increased automation and efficiency level by 35%. "),
                              createVNode("li", null, "Developed and implemented a new customer service strategy that reduced response times by 50% and increased customer satisfaction scores by 20%."),
                              createVNode("li", null, "Suggested advancement of data security and confidentiality by implementing key processes and protocols. ")
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(TabPanel), { class: "tabWrapper" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "tabContent" }, [
                          createVNode("h3", null, [
                            createVNode("span", null, "Software Engineer"),
                            createVNode("span", { class: "company" }, [
                              createTextVNode("\xA0@\xA0 "),
                              createVNode("a", {
                                href: "https://bemo.ng/",
                                class: "inline-link",
                                rel: "noopener noreferrer",
                                target: "_blank"
                              }, "Bemo Technologies ")
                            ])
                          ]),
                          createVNode("p", { class: "range" }, "Apr 2019 - Feb 2021"),
                          createVNode("div", null, [
                            createVNode("ul", null, [
                              createVNode("li", null, "Successfully led a team of engineers to implement a new surge pricing algorithm that improved pricing accuracy and reduced customer complaints by 25%."),
                              createVNode("li", null, "Developed and implemented a new onboarding process for new drivers that reduced the time it took to get them on the road by 50%."),
                              createVNode("li", null, "Successfully launched a new ride-sharing feature that allowed customers to share rides and split the cost, resulting in a 30% increase in daily rides."),
                              createVNode("li", null, "Increased driver retention by 20% by implementing a new incentive program that rewarded drivers for consistently high ratings and low cancellation rates.")
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "inner" }, [
                createVNode(unref(TabList), null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "inner__left" }, [
                      createVNode(unref(Tab), {
                        as: "template",
                        class: "activeTab"
                      }, {
                        default: withCtx(({ selected }) => [
                          createVNode("div", {
                            class: { "activeTab": selected, "inActiveTab": !selected }
                          }, [
                            createVNode("img", {
                              width: "15",
                              style: { "padding-right": "5px" },
                              src: "https://media.licdn.com/dms/image/D4D0BAQHoUFJWWm-4Nw/company-logo_100_100/0/1681394451693?e=1689811200&v=beta&t=hx_Eo4Wjon4HJpYhqsxBbCym7tYUvqs769twjkwTAJI"
                            }),
                            createTextVNode(" Codepym")
                          ], 2)
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Tab), {
                        as: "template",
                        class: "activeTab"
                      }, {
                        default: withCtx(({ selected }) => [
                          createVNode("div", {
                            class: { "activeTab": selected, "inActiveTab": !selected }
                          }, [
                            createVNode("img", {
                              width: "15",
                              style: { "padding-right": "5px" },
                              src: "https://media.licdn.com/dms/image/C4D0BAQGLp00edl9VVg/company-logo_100_100/0/1637222604391?e=1689811200&v=beta&t=F3KCh6IVX6hGxpE8Ddwoo-6ZnvXkIUdA8vQ5qDYjhiA"
                            }),
                            createTextVNode(" BluePortal")
                          ], 2)
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Tab), {
                        as: "template",
                        class: "activeTab"
                      }, {
                        default: withCtx(({ selected }) => [
                          createVNode("div", {
                            class: { "activeTab": selected, "inActiveTab": !selected }
                          }, [
                            createVNode("img", {
                              width: "15",
                              style: { "padding-right": "5px" },
                              src: "https://media.licdn.com/dms/image/C4D0BAQFeRwrW1d2bWw/company-logo_100_100/0/1660311591898?e=1689811200&v=beta&t=3sQmRnIKcWiDvK2BuJSqlPHtlntPyHjpDEaM4Chedfk"
                            }),
                            createTextVNode(" Bemo Technologies")
                          ], 2)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(unref(TabPanels), null, {
                  default: withCtx(() => [
                    createVNode(unref(TabPanel), { class: "tabWrapper" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "tabContent" }, [
                          createVNode("h3", null, [
                            createVNode("span", null, "Software Engineer"),
                            createVNode("span", { class: "company" }, [
                              createTextVNode("\xA0@\xA0 "),
                              createVNode("a", {
                                href: "https://www.codepym.com/",
                                class: "inline-link",
                                rel: "noopener noreferrer",
                                target: "_blank"
                              }, "Codepym")
                            ])
                          ]),
                          createVNode("p", { class: "range" }, "Feb 2021 - Present"),
                          createVNode("div", null, [
                            createVNode("ul", null, [
                              createVNode("li", null, "\u200B\u200BLed a project to implement a new feature that allowed teachers to track student progress more effectively, resulting in a 25% increase in teacher satisfaction."),
                              createVNode("li", null, "Worked with a team of developers to improve the platform's user interface and user experience, resulting in a 15% increase in customer retention."),
                              createVNode("li", null, "Developed and implemented a new customer service strategy that reduced response times by 50% and increased customer satisfaction scores by 20%. "),
                              createVNode("li", null, "Successfully launched a new mobile app allowing students to access educational content offline, resulting in a 20% increase in active users.")
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(TabPanel), { class: "tabWrapper" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "tabContent" }, [
                          createVNode("h3", null, [
                            createVNode("span", null, "Software Engineer"),
                            createVNode("span", { class: "company" }, [
                              createTextVNode("\xA0@\xA0 "),
                              createVNode("a", {
                                href: "https://blueportalcompany.com/",
                                class: "inline-link",
                                rel: "noopener noreferrer",
                                target: "_blank"
                              }, "Blueportal Company")
                            ])
                          ]),
                          createVNode("p", { class: "range" }, "Dec 2021 - Jan 2023"),
                          createVNode("div", null, [
                            createVNode("ul", null, [
                              createVNode("li", null, "Developed and implemented novel software tools. Increased automation and efficiency level by 35%. "),
                              createVNode("li", null, "Developed and implemented a new customer service strategy that reduced response times by 50% and increased customer satisfaction scores by 20%."),
                              createVNode("li", null, "Suggested advancement of data security and confidentiality by implementing key processes and protocols. ")
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(TabPanel), { class: "tabWrapper" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "tabContent" }, [
                          createVNode("h3", null, [
                            createVNode("span", null, "Software Engineer"),
                            createVNode("span", { class: "company" }, [
                              createTextVNode("\xA0@\xA0 "),
                              createVNode("a", {
                                href: "https://bemo.ng/",
                                class: "inline-link",
                                rel: "noopener noreferrer",
                                target: "_blank"
                              }, "Bemo Technologies ")
                            ])
                          ]),
                          createVNode("p", { class: "range" }, "Apr 2019 - Feb 2021"),
                          createVNode("div", null, [
                            createVNode("ul", null, [
                              createVNode("li", null, "Successfully led a team of engineers to implement a new surge pricing algorithm that improved pricing accuracy and reduced customer complaints by 25%."),
                              createVNode("li", null, "Developed and implemented a new onboarding process for new drivers that reduced the time it took to get them on the road by 50%."),
                              createVNode("li", null, "Successfully launched a new ride-sharing feature that allowed customers to share rides and split the cost, resulting in a 30% increase in daily rides."),
                              createVNode("li", null, "Increased driver retention by 20% by implementing a new incentive program that rewarded drivers for consistently high ratings and low cancellation rates.")
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Experience.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-494096cd"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<!--[--><section id="project" data-v-61617be1><h2 class="numbered-heading" data-v-61617be1>Projects</h2><ul class="projectul" data-v-61617be1><li class="projectlist" data-v-61617be1><div class="project-content" data-v-61617be1><div data-v-61617be1><p class="project-overline" data-v-61617be1>Featured Project</p><h3 class="project-title" data-v-61617be1><a href="https://geofootball.live" rel="noopener noreferrer" target="_blank" data-v-61617be1>Geo Football</a></h3><div class="project-description" data-v-61617be1><p data-v-61617be1>Geo Football gives you all the live scores, stats, and storylines to keep you up to speed with the world of soccer. Available on <a href="#" target="_blank" rel="noopener noreferrer" data-v-61617be1>Google Play Store</a>, <a href="#" target="_blank" rel="noopener noreferrer" data-v-61617be1>Amazon Appstore</a> and <a href="#" target="_blank" rel="noopener noreferrer" data-v-61617be1>Apple Store</a>. </p></div></div><ul class="project-tech-list" data-v-61617be1><li data-v-61617be1>Flutter</li><li data-v-61617be1>Dart</li><li data-v-61617be1>Getx</li><li data-v-61617be1>Sportmonk API</li></ul><div class="project-links" data-v-61617be1><a href="https://github.com/bchiang7/halcyon-site" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank" data-v-61617be1><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github" data-v-61617be1><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" data-v-61617be1></path></svg></a><a href="https://halcyon-theme.netlify.com/" aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank" data-v-61617be1><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link" data-v-61617be1><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-v-61617be1></path><polyline points="15 3 21 3 21 9" data-v-61617be1></polyline><line x1="10" y1="14" x2="21" y2="3" data-v-61617be1></line></svg></a></div></div><div class="project-image" data-v-61617be1><a href="" data-v-61617be1><div class="gatsby-image-wrapper gatsby-image-wrapper-constrained img" data-v-61617be1><div style="${ssrRenderStyle({ "max-width": "700px", "display": "block" })}" data-v-61617be1><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#39;438&#39; width=&#39;700&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; version=&#39;1.1&#39;%3E%3C/svg%3E" style="${ssrRenderStyle({ "max-width": "100%", "display": "block", "position": "static" })}" data-v-61617be1></div><img aria-hidden="true" data-placeholder-image="" decoding="async" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAACBklEQVQoz23O7W6bMBQGYO5iSoEY7GBjY2MwH/6AJk3SrStVlQbabJq23f9lTCRR1x+VHllH57zHtie76VOZmbidhDuf9vOMl7vxgyl3k7Bj2b/uH093D6dm89rfv3X7N2Gny/Rj3hP2+J+Zcf2iuvHv7x/jdHo5vv359fM4nrL2Ov2Y94R5eSfdUXZj4UbpRqaP3BxzN3Izk+4qn9+45j2uD1wfhDlwc5BuLLqp6Maz6XLLpX4vcnvk5zA3B4+3z0I/0XpgzROrh7Sa0Xq4dLL2Oa0er+qBzc2B1XOeNoPH6iHhOiblTSQT0SNuAFE+Uj4sfVjG1CTCkWIdEwNQuYjLm7j0oQqQiqjziHpIWJPr9ZI6IDa0vaftGkoXi36ZuiXRMe9w+ZVXD7zdFlUPM+OjClJDilsvVd8xazBvF7EE1LF6l5s9re6R3GK5BakNsUGpw/ldVN5JZRKpfVQBXENmPVJ+A6hEpFlEwk8aLG+pcii3ATbBqvGhilKbFDuidqxaA96F2IH5RyYkxlvJPYhFKjdLogOssVpz2ydNH3MN0yZMKjAvb0W9E/WGlBvIbudNrENqvVW+A7Egol/AMsQaFWskWsRNIjrITLCqQGri1BLek9zBrLmBlT9Ty6T1VmIbRDxaqS9hFiRNgFsf1T6q3oHUQNbHqQXMwsxA2kbUAKLDpP0H4Daf056mKVMAAAAASUVORK5CYII=" alt="" style="${ssrRenderStyle({ "opacity": "0", "transition": "opacity 500ms linear 0s", "object-fit": "cover" })}" data-v-61617be1><picture data-v-61617be1><source type="image/avif" srcset="https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/f47db/halcyon.avif 175w,
                                https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/f47db/halcyon.avif 350w,
                                https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/f47db/halcyon.avif 700w" sizes="(min-width: 700px) 700px, 100vw" data-v-61617be1><source type="image/webp" srcset="https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/d5dc4/halcyon.webp 175w,
                                https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/faefe/halcyon.webp 350w,
                                https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/d5dc4/halcyon.webp 700w" sizes="(min-width: 700px) 700px, 100vw" data-v-61617be1><img width="700" height="438" data-main-image="" sizes="(min-width: 700px) 700px, 100vw" decoding="async" src="https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/d2194/halcyon.png" srcset="https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/cebcc/halcyon.png 175w,
                                https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/272cf/halcyon.png 350w,
                                https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/d2194/halcyon.png 700w" alt="Halcyon Theme" style="${ssrRenderStyle({ "object-fit": "cover", "opacity": "1" })}" data-v-61617be1></picture></div></a></div></li><li class="projectlist" data-v-61617be1><div class="project-content" data-v-61617be1><div data-v-61617be1><p class="project-overline" data-v-61617be1>Featured Project</p><h3 class="project-title" data-v-61617be1><a href="https://halcyon-theme.netlify.com/" rel="noopener noreferrer" target="_blank" data-v-61617be1>Chatease</a></h3><div class="project-description" data-v-61617be1><p data-v-61617be1> ChatGPT has been one of the biggest talks for the past days. How Al applies machine language algorithms to a massive corpus of text to respond to user&#39;s requests. Available on <a href="" target="_blank" rel="noopener noreferrer" data-v-61617be1>Google Play Store</a>, <a href="" target="_blank" rel="noopener noreferrer" data-v-61617be1>Amazon Appstore</a> and <a href="" target="_blank" rel="noopener noreferrer" data-v-61617be1>Apple Store</a>. </p></div></div><ul class="project-tech-list" data-v-61617be1><li data-v-61617be1>Flutter</li><li data-v-61617be1>Dart</li><li data-v-61617be1>OpenAI</li><li data-v-61617be1>ChatGPT</li><li data-v-61617be1>Bloc</li></ul><div class="project-links" data-v-61617be1><a href="https://github.com/bchiang7/halcyon-site" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank" data-v-61617be1><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github" data-v-61617be1><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" data-v-61617be1></path></svg></a><a href="https://halcyon-theme.netlify.com/" aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank" data-v-61617be1><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link" data-v-61617be1><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-v-61617be1></path><polyline points="15 3 21 3 21 9" data-v-61617be1></polyline><line x1="10" y1="14" x2="21" y2="3" data-v-61617be1></line></svg></a></div></div><div class="project-image" data-v-61617be1><a href="" data-v-61617be1><div class="gatsby-image-wrapper gatsby-image-wrapper-constrained img" data-v-61617be1><div style="${ssrRenderStyle({ "max-width": "700px", "display": "block" })}" data-v-61617be1><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#39;438&#39; width=&#39;700&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39; version=&#39;1.1&#39;%3E%3C/svg%3E" style="${ssrRenderStyle({ "max-width": "100%", "display": "block", "position": "static" })}" data-v-61617be1></div><img aria-hidden="true" data-placeholder-image="" decoding="async" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAACBklEQVQoz23O7W6bMBQGYO5iSoEY7GBjY2MwH/6AJk3SrStVlQbabJq23f9lTCRR1x+VHllH57zHtie76VOZmbidhDuf9vOMl7vxgyl3k7Bj2b/uH093D6dm89rfv3X7N2Gny/Rj3hP2+J+Zcf2iuvHv7x/jdHo5vv359fM4nrL2Ov2Y94R5eSfdUXZj4UbpRqaP3BxzN3Izk+4qn9+45j2uD1wfhDlwc5BuLLqp6Maz6XLLpX4vcnvk5zA3B4+3z0I/0XpgzROrh7Sa0Xq4dLL2Oa0er+qBzc2B1XOeNoPH6iHhOiblTSQT0SNuAFE+Uj4sfVjG1CTCkWIdEwNQuYjLm7j0oQqQiqjziHpIWJPr9ZI6IDa0vaftGkoXi36ZuiXRMe9w+ZVXD7zdFlUPM+OjClJDilsvVd8xazBvF7EE1LF6l5s9re6R3GK5BakNsUGpw/ldVN5JZRKpfVQBXENmPVJ+A6hEpFlEwk8aLG+pcii3ATbBqvGhilKbFDuidqxaA96F2IH5RyYkxlvJPYhFKjdLogOssVpz2ydNH3MN0yZMKjAvb0W9E/WGlBvIbudNrENqvVW+A7Egol/AMsQaFWskWsRNIjrITLCqQGri1BLek9zBrLmBlT9Ty6T1VmIbRDxaqS9hFiRNgFsf1T6q3oHUQNbHqQXMwsxA2kbUAKLDpP0H4Daf056mKVMAAAAASUVORK5CYII=" alt="" style="${ssrRenderStyle({ "opacity": "0", "transition": "opacity 500ms linear 0s", "object-fit": "cover" })}" data-v-61617be1><picture data-v-61617be1><source type="image/avif" srcset="https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/f47db/halcyon.avif 175w,
                                https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/f47db/halcyon.avif 350w,
                                https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/f47db/halcyon.avif 700w" sizes="(min-width: 700px) 700px, 100vw" data-v-61617be1><source type="image/webp" srcset="https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/d5dc4/halcyon.webp 175w,
                                https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/faefe/halcyon.webp 350w,
                                https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/d5dc4/halcyon.webp 700w" sizes="(min-width: 700px) 700px, 100vw" data-v-61617be1><img width="700" height="438" data-main-image="" sizes="(min-width: 700px) 700px, 100vw" decoding="async" src="https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/d2194/halcyon.png" srcset="https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/cebcc/halcyon.png 175w,
                                https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/272cf/halcyon.png 350w,
                                https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/d2194/halcyon.png 700w" alt="Halcyon Theme" style="${ssrRenderStyle({ "object-fit": "cover", "opacity": "1" })}" data-v-61617be1></picture></div></a></div></li></ul></section><section class="flex flex-col" style="${ssrRenderStyle({ "-webkit-box-align": "center", "max-width": "1000px" })}" data-v-61617be1><h2 style="${ssrRenderStyle({ "font-size": "clamp(24px,5vw,32px)" })}" data-v-61617be1>Other Noteworthy Projects</h2>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/archive",
    class: "archive-link inline-link",
    style: { "font-size": "14px" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`view the archive`);
      } else {
        return [
          createTextVNode("view the archive")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="projects-grid" data-v-61617be1><li class="relative" data-v-61617be1><div class="project-inner" data-v-61617be1><header class="w-full" data-v-61617be1><div class="project-top" data-v-61617be1><div class="folder" data-v-61617be1><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder" data-v-61617be1><title data-v-61617be1>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" data-v-61617be1></path></svg></div><div class="project-links" data-v-61617be1><a href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c" aria-label="External Link" class="external" target="_blank" rel="noopener noreferrer" data-v-61617be1><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link" data-v-61617be1><title data-v-61617be1>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-v-61617be1></path><polyline points="15 3 21 3 21 9" data-v-61617be1></polyline><line x1="10" y1="14" x2="21" y2="3" data-v-61617be1></line></svg></a></div></div><h3 class="project-title" data-v-61617be1><a href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c" target="_blank" rel="noopener noreferrer" data-v-61617be1> Grad </a></h3><div class="project-description" data-v-61617be1><p data-v-61617be1> Grad app for running of day-to-day operations for school, developed with Flutter/Dart. </p></div></header><footer data-v-61617be1><ul class="project-tech-list" data-v-61617be1><li data-v-61617be1>Flutter</li><li data-v-61617be1>Getx</li><li data-v-61617be1>Dart</li></ul></footer></div></li><li class="relative" data-v-61617be1><div class="project-inner" data-v-61617be1><header class="w-full" data-v-61617be1><div class="project-top" data-v-61617be1><div class="folder" data-v-61617be1><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder" data-v-61617be1><title data-v-61617be1>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" data-v-61617be1></path></svg></div><div class="project-links" data-v-61617be1><a href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c" aria-label="External Link" class="external" target="_blank" rel="noopener noreferrer" data-v-61617be1><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link" data-v-61617be1><title data-v-61617be1>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-v-61617be1></path><polyline points="15 3 21 3 21 9" data-v-61617be1></polyline><line x1="10" y1="14" x2="21" y2="3" data-v-61617be1></line></svg></a></div></div><h3 class="project-title" data-v-61617be1><a href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c" target="_blank" rel="noopener noreferrer" data-v-61617be1> Raktapp </a></h3><div class="project-description" data-v-61617be1><p data-v-61617be1>A new and innovative social media platform connecting people like never </p></div></header><footer data-v-61617be1><ul class="project-tech-list" data-v-61617be1><li data-v-61617be1>Flutter</li><li data-v-61617be1>Dart</li><li data-v-61617be1>Provider</li><li data-v-61617be1>NodeJs</li></ul></footer></div></li><li class="relative" data-v-61617be1><div class="project-inner" data-v-61617be1><header class="w-full" data-v-61617be1><div class="project-top" data-v-61617be1><div class="folder" data-v-61617be1><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder" data-v-61617be1><title data-v-61617be1>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" data-v-61617be1></path></svg></div><div class="project-links" data-v-61617be1><a href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c" aria-label="External Link" class="external" target="_blank" rel="noopener noreferrer" data-v-61617be1><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link" data-v-61617be1><title data-v-61617be1>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-v-61617be1></path><polyline points="15 3 21 3 21 9" data-v-61617be1></polyline><line x1="10" y1="14" x2="21" y2="3" data-v-61617be1></line></svg></a></div></div><h3 class="project-title" data-v-61617be1><a href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c" target="_blank" rel="noopener noreferrer" data-v-61617be1> Portfolio </a></h3><div class="project-description" data-v-61617be1><p data-v-61617be1> My personal portfolio developed with VueJs, Nuxt and Tawilwind CSS </p></div></header><footer data-v-61617be1><ul class="project-tech-list" data-v-61617be1><li data-v-61617be1>Vue</li><li data-v-61617be1>Nuxt</li><li data-v-61617be1>Tailwindcss</li></ul></footer></div></li><li class="relative" data-v-61617be1><div class="project-inner" data-v-61617be1><header class="w-full" data-v-61617be1><div class="project-top" data-v-61617be1><div class="folder" data-v-61617be1><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder" data-v-61617be1><title data-v-61617be1>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" data-v-61617be1></path></svg></div><div class="project-links" data-v-61617be1><a href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c" aria-label="External Link" class="external" target="_blank" rel="noopener noreferrer" data-v-61617be1><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link" data-v-61617be1><title data-v-61617be1>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-v-61617be1></path><polyline points="15 3 21 3 21 9" data-v-61617be1></polyline><line x1="10" y1="14" x2="21" y2="3" data-v-61617be1></line></svg></a></div></div><h3 class="project-title" data-v-61617be1><a href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c" target="_blank" rel="noopener noreferrer" data-v-61617be1> Zoom Clone </a></h3><div class="project-description" data-v-61617be1><p data-v-61617be1> Zoom clone developed to function just like normal zoom web application developed with NodeJs and Socket.IO </p></div></header><footer data-v-61617be1><ul class="project-tech-list" data-v-61617be1><li data-v-61617be1>NodeJS</li><li data-v-61617be1>Ejs</li><li data-v-61617be1>Socket.IO</li></ul></footer></div></li><li class="relative" data-v-61617be1><div class="project-inner" data-v-61617be1><header class="w-full" data-v-61617be1><div class="project-top" data-v-61617be1><div class="folder" data-v-61617be1><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder" data-v-61617be1><title data-v-61617be1>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" data-v-61617be1></path></svg></div><div class="project-links" data-v-61617be1><a href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c" aria-label="External Link" class="external" target="_blank" rel="noopener noreferrer" data-v-61617be1><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link" data-v-61617be1><title data-v-61617be1>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-v-61617be1></path><polyline points="15 3 21 3 21 9" data-v-61617be1></polyline><line x1="10" y1="14" x2="21" y2="3" data-v-61617be1></line></svg></a></div></div><h3 class="project-title" data-v-61617be1><a href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c" target="_blank" rel="noopener noreferrer" data-v-61617be1> WhatsApp Clone </a></h3><div class="project-description" data-v-61617be1><p data-v-61617be1> WhatsApp Clone developed with ReactJS, uses Firebase for Realtime database and Google Auth. </p></div></header><footer data-v-61617be1><ul class="project-tech-list" data-v-61617be1><li data-v-61617be1>ReactJs</li><li data-v-61617be1>Firebase</li><li data-v-61617be1>Google Auth</li></ul></footer></div></li><li class="relative" data-v-61617be1><div class="project-inner" data-v-61617be1><header class="w-full" data-v-61617be1><div class="project-top" data-v-61617be1><div class="folder" data-v-61617be1><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder" data-v-61617be1><title data-v-61617be1>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" data-v-61617be1></path></svg></div><div class="project-links" data-v-61617be1><a href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c" aria-label="External Link" class="external" target="_blank" rel="noopener noreferrer" data-v-61617be1><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link" data-v-61617be1><title data-v-61617be1>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-v-61617be1></path><polyline points="15 3 21 3 21 9" data-v-61617be1></polyline><line x1="10" y1="14" x2="21" y2="3" data-v-61617be1></line></svg></a></div></div><h3 class="project-title" data-v-61617be1><a href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c" target="_blank" rel="noopener noreferrer" data-v-61617be1> Grad API </a></h3><div class="project-description" data-v-61617be1><p data-v-61617be1> A REST API for grad mobile application developed with Laraval/PHP and MySQL Database. </p></div></header><footer data-v-61617be1><ul class="project-tech-list" data-v-61617be1><li data-v-61617be1>Laravel</li><li data-v-61617be1>PHP</li><li data-v-61617be1>MySQL</li></ul></footer></div></li></ul></section><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-61617be1"]]);
const _imports_0 = "" + globalThis.__publicAssetsURL("images/twitter.svg");
const _imports_1 = "" + globalThis.__publicAssetsURL("images/github.svg");
const _imports_2 = "" + globalThis.__publicAssetsURL("images/linkedin.svg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "contact" }, _attrs))} data-v-c95c3897><h2 class="numbered-heading overliner" data-v-c95c3897>What\u2019s Next?</h2><h2 class="title" data-v-c95c3897>Get In Touch</h2><p data-v-c95c3897>I\u2019m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I\u2019ll try my best to get back to you!</p><a class="email-link" href="mailto:benpaul320@gmail.com" rel="noopener noreferrer" target="_blank" data-v-c95c3897>Say Hello</a><div class="flex justify-around mt-20 px-20" data-v-c95c3897><a href="https://twitter.com/bensonarafat" target="_blank" data-v-c95c3897><img${ssrRenderAttr("src", _imports_0)} alt="" srcset="" data-v-c95c3897></a><a href="https://github.com/bensonarafat" target="_blank" data-v-c95c3897><img${ssrRenderAttr("src", _imports_1)} alt="" srcset="" data-v-c95c3897></a><a href="https://www.linkedin.com/in/bensonarafat/" target="_blank" data-v-c95c3897><img${ssrRenderAttr("src", _imports_2)} alt="" srcset="" data-v-c95c3897></a></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c95c3897"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_About = __nuxt_component_0;
  const _component_Experience = __nuxt_component_1;
  const _component_Projects = __nuxt_component_2;
  const _component_Contact = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 md:w-10/12 sm:w-10/12 w-auto" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_About, null, null, _parent));
  _push(ssrRenderComponent(_component_Experience, null, null, _parent));
  _push(ssrRenderComponent(_component_Projects, null, null, _parent));
  _push(ssrRenderComponent(_component_Contact, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.c93a0d71.mjs.map
