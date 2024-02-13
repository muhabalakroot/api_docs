import{_ as r,m as c,r as d,o as u,c as m,w as n,a as t,V as o,b as h,d as e,t as a}from"./index-a977af96.js";import{T as _,u as f}from"./TheEnviromentSelecter-f0ed81b1.js";import{V as p,a as s}from"./VCard-06dac4c7.js";import{V as v}from"./VTable-b3a8d084.js";const b={components:{TheEnviromentSelecter:_},computed:{...c(f,["activeEnviroment"])}},g=e("div",{class:"mb-2 text-h3",align:"center"},"Safe Storage Features",-1),x=e("div",{class:"ma-2 text-h4"},"Get Color",-1),y=e("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Brief description: ",-1),E=e("ul",{class:"ml-5"},[e("li",null," This endpoint is used to fetch a list of all colors. When you send a GET request to this endpoint, the system will respond with an array of color objects, each containing details about a specific color. ")],-1),T=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request URL:",-1),w={class:"ml-5"},S=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Method:",-1),V=e("ul",{class:"ml-5"},[e("li",null,"POST")],-1),k=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request example:",-1),C={class:"ml-5"},B=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Return example:",-1),A=e("code",null,[e("pre",{class:"overflow-x-auto"},`{
    "status_code": 200,
    "message": "",
    "data": [
        {
            "id": 0,
            "name": "عديم اللون",
            "name_en": "Colorless"
        },
        {
            "id": 1,
            "name": "أبيض",
            "name_en": "White"
        },
        {
            "id": 2,
            "name": "أسود",
            "name_en": "Black"
        },
        {
            "id": 4,
            "name": "بنفسجي",
            "name_en": "Violet"
        },
        {
            "id": 5,
            "name": "أزرق",
            "name_en": "Blue"
        },
    ],
    "errors": false,
    "code": null
}
            `)],-1),N=e("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Return parameter description: ",-1),R=e("thead",{style:{"background-color":"lightblue"}},[e("tr",null,[e("th",{class:"text-left"},"Parameter"),e("th",{class:"text-left"},"Type"),e("th",{class:"text-left"},"Expanation")])],-1),q=e("tbody",null,[e("tr",null,[e("td",null,"id"),e("td",null,"Number"),e("td",null,"The unique identifier of the color.")]),e("tr",null,[e("td",null,"name"),e("td",null,"String (Arabic)"),e("td",null,"The name of the color in Arabic.")]),e("tr",null,[e("td",null,"name_en"),e("td",null,"String (English)"),e("td",null,"The name of the color in English.")])],-1);function G(l,$,P,D,I,W){const i=d("TheEnviromentSelecter");return u(),m(p,{class:"ma-4 pa-6"},{default:n(()=>[g,t(i),t(o,{class:"ma-2"}),t(s,null,{default:n(()=>[h("The Safe Storage feature is a service offered by VANEX API that allows you to securely store your valuable packages for a specified period. It provides a convenient and reliable solution for businesses that need a secure storage facility for their items without the hassle of maintaining a storage space themselves. ")]),_:1}),e("div",null,[x,t(o,{class:"ma-2"}),y,E,T,e("ul",w,[e("li",null,[t(s,null,{default:n(()=>[e("code",null,a(l.activeEnviroment||"(Chose an Enviroment)")+"/safe-storage/colors",1)]),_:1})])]),S,V,k,e("ul",C,[e("li",null,[t(s,null,{default:n(()=>[e("code",null,a(l.activeEnviroment||"(Chose an Enviroment)")+"/safe-storage/colors",1)]),_:1})])]),B,t(s,null,{default:n(()=>[A]),_:1}),N,t(v,{density:"compact"},{default:n(()=>[R,q]),_:1})])]),_:1})}const O=r(b,[["render",G]]);export{O as default};
