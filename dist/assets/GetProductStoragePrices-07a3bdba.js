import{_ as r,m as c,r as d,o as u,c as _,w as s,a as t,V as a,b as h,d as e,t as l}from"./index-a977af96.js";import{T as m,u as p}from"./TheEnviromentSelecter-f0ed81b1.js";import{V as f,a as o}from"./VCard-06dac4c7.js";import{V as v}from"./VTable-b3a8d084.js";const g={components:{TheEnviromentSelecter:m},computed:{...c(p,["activeEnviroment"])}},b=e("div",{class:"mb-2 text-h3",align:"center"},"Safe Storage Features",-1),x=e("div",{class:"ma-2 text-h4"},"Get Product Storage Prices",-1),S=e("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Brief description: ",-1),y=e("ul",{class:"ml-5"},[e("li",null," This endpoint allows you to retrieve information about the storage prices of products in the system. It returns a list of data, each representing a storage price for a specific product. ")],-1),w=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request URL:",-1),T={class:"ml-5"},E=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Method:",-1),V=e("ul",{class:"ml-5"},[e("li",null,"POST")],-1),k=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request example:",-1),P={class:"ml-5"},N=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Return example:",-1),C=e("code",null,[e("pre",{class:"overflow-x-auto"},`{
    "status_code": 200,
    "message": "",
    "data": [
        {
            "id": 7,
            "description": "عناية عادية",
            "price": "75.000"
        },
        {
            "id": 8,
            "description": "عناية خاصة",
            "price": "85.000"
        },
        {
            "id": 9,
            "description": "عناية فائقة",
            "price": "95.000"
        }
    ],
    "errors": false,
    "code": null
}
            `)],-1),R=e("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Return parameter description: ",-1),A=e("thead",{style:{"background-color":"lightblue"}},[e("tr",null,[e("th",{class:"text-left"},"Parameter"),e("th",{class:"text-left"},"Type"),e("th",{class:"text-left"},"Expanation")])],-1),B=e("tbody",null,[e("tr",null,[e("td",null,"id"),e("td",null,"Number"),e("td",null,"The unique identifier of the color.")]),e("tr",null,[e("td",null,"description"),e("td",null,"String"),e("td",null,"Description in Arabic.")]),e("tr",null,[e("td",null,"price"),e("td",null,"Number"),e("td",null,"The price of the service")])],-1);function $(n,q,D,G,I,F){const i=d("TheEnviromentSelecter");return u(),_(f,{class:"ma-4 pa-6"},{default:s(()=>[b,t(i),t(a,{class:"ma-2"}),t(o,null,{default:s(()=>[h("The Safe Storage feature is a service offered by VANEX API that allows you to securely store your valuable packages for a specified period. It provides a convenient and reliable solution for businesses that need a secure storage facility for their items without the hassle of maintaining a storage space themselves. ")]),_:1}),e("div",null,[x,t(a,{class:"ma-2"}),S,y,w,e("ul",T,[e("li",null,[t(o,null,{default:s(()=>[e("code",null,l(n.activeEnviroment||"(Chose an Enviroment)")+"/safe-storage/storage-prices",1)]),_:1})])]),E,V,k,e("ul",P,[e("li",null,[t(o,null,{default:s(()=>[e("code",null,l(n.activeEnviroment||"(Chose an Enviroment)")+"/safe-storage/storage-prices",1)]),_:1})])]),N,t(o,null,{default:s(()=>[C]),_:1}),R,t(v,{density:"compact"},{default:s(()=>[A,B]),_:1})])]),_:1})}const X=r(g,[["render",$]]);export{X as default};
