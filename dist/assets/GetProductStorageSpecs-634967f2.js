import{_ as c,m as r,r as d,o as u,c as _,w as n,a as t,V as o,b as p,d as e,t as i}from"./index-a977af96.js";import{T as m,u as h}from"./TheEnviromentSelecter-f0ed81b1.js";import{V as f,a as s}from"./VCard-06dac4c7.js";import{V as v}from"./VTable-b3a8d084.js";const g={components:{TheEnviromentSelecter:m},computed:{...r(h,["activeEnviroment"])}},b=e("div",{class:"mb-2 text-h3",align:"center"},"Safe Storage Features",-1),S=e("div",{class:"ma-2 text-h4"},"Get Product Special Care Cases",-1),x=e("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Brief description: ",-1),y=e("ul",{class:"ml-5"},[e("li",null,' The "Get Product Special Care Cases" endpoint is designed to provide information about special care cases related to product storage. ')],-1),E=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request URL:",-1),w={class:"ml-5"},T=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Method:",-1),V=e("ul",{class:"ml-5"},[e("li",null,"POST")],-1),k=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request example:",-1),C={class:"ml-5"},P=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Return example:",-1),N=e("code",null,[e("pre",{class:"overflow-x-auto"},`{
    "status_code": 200,
    "message": "",
    "data": [
        {
            "id": 1,
            "description": "قابل للكسر",
            "description_en": null,
            "icon": null
        },
        {
            "id": 2,
            "description": "قابل للتلف",
            "description_en": null,
            "icon": null
        },
        {
            "id": 3,
            "description": "قابل للخدش",
            "description_en": null,
            "icon": null
        },
        {
            "id": 4,
            "description": "قابل للطي",
            "description_en": null,
            "icon": null
        },
        {
            "id": 5,
            "description": "قابل للسكب",
            "description_en": null,
            "icon": null
        },
        {
            "id": 6,
            "description": "قابل للانفجار",
            "description_en": null,
            "icon": null
        }
    ],
    "errors": false,
    "code": null
}
            `)],-1),R=e("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Return parameter description: ",-1),A=e("thead",{style:{"background-color":"lightblue"}},[e("tr",null,[e("th",{class:"text-left"},"Parameter"),e("th",{class:"text-left"},"Type"),e("th",{class:"text-left"},"Expanation")])],-1),B=e("tbody",null,[e("tr",null,[e("td",null,"id"),e("td",null,"Number"),e("td",null,"The unique identifier of the color.")]),e("tr",null,[e("td",null,"description"),e("td",null,"String"),e("td",null,"Description in Arabic.")]),e("tr",null,[e("td",null,"description_en"),e("td",null,"String"),e("td",null,"Description in English")]),e("tr",null,[e("td",null,"icon"),e("td",null,"String"),e("td",null,"Icon of the case")])],-1);function D(l,G,$,q,I,F){const a=d("TheEnviromentSelecter");return u(),_(f,{class:"ma-4 pa-6"},{default:n(()=>[b,t(a),t(o,{class:"ma-2"}),t(s,null,{default:n(()=>[p("The Safe Storage feature is a service offered by VANEX API that allows you to securely store your valuable packages for a specified period. It provides a convenient and reliable solution for businesses that need a secure storage facility for their items without the hassle of maintaining a storage space themselves. ")]),_:1}),e("div",null,[S,t(o,{class:"ma-2"}),x,y,E,e("ul",w,[e("li",null,[t(s,null,{default:n(()=>[e("code",null,i(l.activeEnviroment||"(Chose an Enviroment)")+"/safe-storage/storage-specs",1)]),_:1})])]),T,V,k,e("ul",C,[e("li",null,[t(s,null,{default:n(()=>[e("code",null,i(l.activeEnviroment||"(Chose an Enviroment)")+"/safe-storage/storage-specs",1)]),_:1})])]),P,t(s,null,{default:n(()=>[N]),_:1}),R,t(v,{density:"compact"},{default:n(()=>[A,B]),_:1})])]),_:1})}const X=c(g,[["render",D]]);export{X as default};
