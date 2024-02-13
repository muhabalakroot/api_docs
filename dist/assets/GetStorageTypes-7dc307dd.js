import{_ as r,m as u,r as d,o as c,c as _,w as s,a as t,V as n,b as h,d as e,t as o}from"./index-a977af96.js";import{T as p,u as m}from"./TheEnviromentSelecter-f0ed81b1.js";import{V as f,a as l}from"./VCard-06dac4c7.js";import{V as g}from"./VTable-b3a8d084.js";const v={components:{TheEnviromentSelecter:p},computed:{...u(m,["activeEnviroment"])}},b=e("div",{class:"mb-2 text-h3",align:"center"},"Safe Storage Features",-1),y=e("div",{class:"ma-2 text-h4"},"Get Storage Types",-1),x=e("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Brief description: ",-1),S=e("ul",{class:"ml-5"},[e("li",null,' The "Get Storage Types" endpoint is used to retrieve a list of storage types available in the system. ')],-1),T=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request URL:",-1),w={class:"ml-5"},E=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Method:",-1),V=e("ul",{class:"ml-5"},[e("li",null,"POST")],-1),k=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request example:",-1),C={class:"ml-5"},N=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Return example:",-1),R=e("code",null,[e("pre",{class:"overflow-x-auto"},`{
    "status_code": 200,
    "message": "",
    "data": [
        {
            "id": 1,
            "name": "إدخال",
            "super_type_id": null,
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 2,
            "name": "إخراج",
            "super_type_id": null,
            "created_at": null,
            "updated_at": null
        }
    ],
    "errors": false,
    "code": null
}
            `)],-1),B=e("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Return parameter description: ",-1),G=e("thead",{style:{"background-color":"lightblue"}},[e("tr",null,[e("th",{class:"text-left"},"Parameter"),e("th",{class:"text-left"},"Type"),e("th",{class:"text-left"},"Expanation")])],-1),$=e("tbody",null,[e("tr",null,[e("td",null,"id"),e("td",null,"Number"),e("td",null,"The unique identifier of the storage sub-type.")]),e("tr",null,[e("td",null,"name"),e("td",null,"String"),e("td",null,"The name of the storage sub-types.")]),e("tr",null,[e("td",null,"super_type_id"),e("td",null,"String"),e("td",null," The identifier of the super type to which this sub-type belongs. ")]),e("tr",null,[e("td",null,"created_at"),e("td",null,"String"),e("td",null," The timestamp when the storage sub-type was created. Currently unavailable. ")]),e("tr",null,[e("td",null,"updated_at"),e("td",null,"String"),e("td",null," The timestamp when the storage sub-type was last updated. Currently unavailable. ")])],-1);function q(a,A,P,D,I,F){const i=d("TheEnviromentSelecter");return c(),_(f,{class:"ma-4 pa-6"},{default:s(()=>[b,t(i),t(n,{class:"ma-2"}),t(l,null,{default:s(()=>[h("The Safe Storage feature is a service offered by VANEX API that allows you to securely store your valuable packages for a specified period. It provides a convenient and reliable solution for businesses that need a secure storage facility for their items without the hassle of maintaining a storage space themselves. ")]),_:1}),e("div",null,[y,t(n,{class:"ma-2"}),x,S,T,e("ul",w,[e("li",null,[t(l,null,{default:s(()=>[e("code",null,o(a.activeEnviroment||"(Chose an Enviroment)")+"/safe-storage/storage-types",1)]),_:1})])]),E,V,k,e("ul",C,[e("li",null,[t(l,null,{default:s(()=>[e("code",null,o(a.activeEnviroment||"(Chose an Enviroment)")+"/safe-storage/storage-types",1)]),_:1})])]),N,t(l,null,{default:s(()=>[R]),_:1}),B,t(g,{density:"compact"},{default:s(()=>[G,$]),_:1})])]),_:1})}const X=r(v,[["render",q]]);export{X as default};
