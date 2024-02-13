import{_ as i,m as u,r as d,o as c,c as _,w as s,a as e,V as l,b as m,d as t,t as o}from"./index-a977af96.js";import{T as h,u as f}from"./TheEnviromentSelecter-f0ed81b1.js";import{V as p,a}from"./VCard-06dac4c7.js";import{V as g}from"./VTable-b3a8d084.js";const v={components:{TheEnviromentSelecter:h},computed:{...u(f,["activeEnviroment"])}},b=t("div",{class:"mb-2 text-h3",align:"center"},"Safe Storage Features",-1),S=t("div",{class:"ma-2 text-h4"},"Get Storage Statuses",-1),x=t("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Brief description: ",-1),w=t("ul",{class:"ml-5"},[t("li",null,' The "Get Storage Statuses" endpoint is used to retrieve a list of storage statuses that represent various states of storage orders or products. ')],-1),y=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request URL:",-1),T={class:"ml-5"},E=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Method:",-1),V=t("ul",{class:"ml-5"},[t("li",null,"POST")],-1),k=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request example:",-1),C={class:"ml-5"},N=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Return example:",-1),R=t("code",null,[t("pre",{class:"overflow-x-auto"},`{
    "status_code": 200,
    "message": "",
    "data": [
        {
            "id": 1,
            "name": "قيد الإجراء",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 2,
            "name": "قيد التجهيز",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 3,
            "name": "مرفوض",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 4,
            "name": "مكتمل",
            "created_at": null,
            "updated_at": null
        }
    ],
    "errors": false,
    "code": null
}
            `)],-1),B=t("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Return parameter description: ",-1),G=t("thead",{style:{"background-color":"lightblue"}},[t("tr",null,[t("th",{class:"text-left"},"Parameter"),t("th",{class:"text-left"},"Type"),t("th",{class:"text-left"},"Expanation")])],-1),$=t("tbody",null,[t("tr",null,[t("td",null,"id"),t("td",null,"Number"),t("td",null,"The unique identifier of the storage status.")]),t("tr",null,[t("td",null,"name"),t("td",null,"String"),t("td",null,"The name of the storage status.")]),t("tr",null,[t("td",null,"created_at"),t("td",null,"String"),t("td",null," The timestamp when the storage status was created. Currently unavailable. ")]),t("tr",null,[t("td",null,"updated_at"),t("td",null,"String"),t("td",null," The timestamp when the storage status was last updated. Currently unavailable. ")])],-1);function q(n,A,P,D,I,F){const r=d("TheEnviromentSelecter");return c(),_(p,{class:"ma-4 pa-6"},{default:s(()=>[b,e(r),e(l,{class:"ma-2"}),e(a,null,{default:s(()=>[m("The Safe Storage feature is a service offered by VANEX API that allows you to securely store your valuable packages for a specified period. It provides a convenient and reliable solution for businesses that need a secure storage facility for their items without the hassle of maintaining a storage space themselves. ")]),_:1}),t("div",null,[S,e(l,{class:"ma-2"}),x,w,y,t("ul",T,[t("li",null,[e(a,null,{default:s(()=>[t("code",null,o(n.activeEnviroment||"(Chose an Enviroment)")+"/safe-storage/storage-statuses",1)]),_:1})])]),E,V,k,t("ul",C,[t("li",null,[e(a,null,{default:s(()=>[t("code",null,o(n.activeEnviroment||"(Chose an Enviroment)")+"/safe-storage/storage-statuses",1)]),_:1})])]),N,e(a,null,{default:s(()=>[R]),_:1}),B,e(g,{density:"compact"},{default:s(()=>[G,$]),_:1})])]),_:1})}const X=i(v,[["render",q]]);export{X as default};
