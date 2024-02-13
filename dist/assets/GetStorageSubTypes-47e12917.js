import{_ as r,m as u,r as d,o as c,c as _,w as s,a as t,V as l,b as p,d as e,t as o}from"./index-a977af96.js";import{T as h,u as m}from"./TheEnviromentSelecter-f0ed81b1.js";import{V as f,a as n}from"./VCard-06dac4c7.js";import{V as b}from"./VTable-b3a8d084.js";const g={components:{TheEnviromentSelecter:h},computed:{...u(m,["activeEnviroment"])}},y=e("div",{class:"mb-2 text-h3",align:"center"},"Safe Storage Features",-1),v=e("div",{class:"ma-2 text-h4"},"Get Storage Sub Type",-1),S=e("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Brief description: ",-1),x=e("ul",{class:"ml-5"},[e("li",null," This endpoint allows you to retrieve information about storage sub-types. Storage sub-types are used to categorize different types of storage within the system. ")],-1),w=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request URL:",-1),T={class:"ml-5"},E=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Method:",-1),V=e("ul",{class:"ml-5"},[e("li",null,"POST")],-1),k=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request example:",-1),C={class:"ml-5"},N=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Return example:",-1),R=e("code",null,[e("pre",{class:"overflow-x-auto"},`{
    "status_code": 200,
    "message": "",
    "data": [
        {
            "id": 3,
            "name": "من المتجر",
            "super_type_id": "1",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 4,
            "name": "إلى المتجر",
            "super_type_id": "2",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 5,
            "name": "مسترد",
            "super_type_id": "1",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 6,
            "name": "عملية شحن",
            "super_type_id": "2",
            "created_at": null,
            "updated_at": null
        }
    ],
    "errors": false,
    "code": null
}
            `)],-1),B=e("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Return parameter description: ",-1),$=e("thead",{style:{"background-color":"lightblue"}},[e("tr",null,[e("th",{class:"text-left"},"Parameter"),e("th",{class:"text-left"},"Type"),e("th",{class:"text-left"},"Expanation")])],-1),q=e("tbody",null,[e("tr",null,[e("td",null,"id"),e("td",null,"Number"),e("td",null,"The unique identifier of the storage sub-type.")]),e("tr",null,[e("td",null,"name"),e("td",null,"String"),e("td",null,"The name of the storage sub-types.")]),e("tr",null,[e("td",null,"super_type_id"),e("td",null,"String"),e("td",null," The identifier of the super type to which this sub-type belongs. ")]),e("tr",null,[e("td",null,"created_at"),e("td",null,"String"),e("td",null," The timestamp when the storage sub-type was created. Currently unavailable. ")]),e("tr",null,[e("td",null,"updated_at"),e("td",null,"String"),e("td",null," The timestamp when the storage sub-type was last updated. Currently unavailable. ")])],-1);function A(a,G,P,D,I,z){const i=d("TheEnviromentSelecter");return c(),_(f,{class:"ma-4 pa-6"},{default:s(()=>[y,t(i),t(l,{class:"ma-2"}),t(n,null,{default:s(()=>[p("The Safe Storage feature is a service offered by VANEX API that allows you to securely store your valuable packages for a specified period. It provides a convenient and reliable solution for businesses that need a secure storage facility for their items without the hassle of maintaining a storage space themselves. ")]),_:1}),e("div",null,[v,t(l,{class:"ma-2"}),S,x,w,e("ul",T,[e("li",null,[t(n,null,{default:s(()=>[e("code",null,o(a.activeEnviroment||"(Chose an Enviroment)")+"/safe-storage/storage-sub-types",1)]),_:1})])]),E,V,k,e("ul",C,[e("li",null,[t(n,null,{default:s(()=>[e("code",null,o(a.activeEnviroment||"(Chose an Enviroment)")+"/safe-storage/storage-sub-types",1)]),_:1})])]),N,t(n,null,{default:s(()=>[R]),_:1}),B,t(b,{density:"compact"},{default:s(()=>[$,q]),_:1})])]),_:1})}const U=r(g,[["render",A]]);export{U as default};
