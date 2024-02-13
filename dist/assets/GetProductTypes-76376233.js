import{_ as c,m as r,r as d,o as u,c as p,w as n,a as e,V as l,b as h,d as t,t as a}from"./index-a977af96.js";import{T as _,u as m}from"./TheEnviromentSelecter-f0ed81b1.js";import{V as f,a as s}from"./VCard-06dac4c7.js";import{V as v}from"./VTable-b3a8d084.js";const y={components:{TheEnviromentSelecter:_},computed:{...r(m,["activeEnviroment"])}},b=t("div",{class:"mb-2 text-h3",align:"center"},"Safe Storage Features",-1),g=t("div",{class:"ma-2 text-h4"},"Get Product Types",-1),x=t("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Brief description: ",-1),T=t("ul",{class:"ml-5"},[t("li",null,' The "Get Product Types" is an endpoint that allows you to retrieve a list of product types available in the system. ')],-1),S=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request URL:",-1),w={class:"ml-5"},E=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Method:",-1),V=t("ul",{class:"ml-5"},[t("li",null,"POST")],-1),k=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request example:",-1),P={class:"ml-5"},C=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Return example:",-1),N=t("code",null,[t("pre",{class:"overflow-x-auto"},`{
    "status_code": 200,
    "message": "",
    "data": [
        {
            "id": 1,
            "description": "مواد منزلية",
            "notes": "",
            "active": "1"
        },
        {
            "id": 2,
            "description": "كهربية",
            "notes": "",
            "active": "1"
        },
        {
            "id": 11,
            "description": "ساعات",
            "notes": "",
            "active": "1"
        },
        {
            "id": 10,
            "description": "كاميرات مراقبه ",
            "notes": "",
            "active": "1"
        },
        {
            "id": 6,
            "description": "حقائب",
            "notes": "",
            "active": "1"
        },
        {
            "id": 7,
            "description": "ملابس",
            "notes": "",
            "active": "1"
        },
        {
            "id": 8,
            "description": "مواد تجميلية",
            "notes": "",
            "active": "1"
        }
    ],
    "errors": false,
    "code": null
}
            `)],-1),R=t("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Return parameter description: ",-1),A=t("thead",{style:{"background-color":"lightblue"}},[t("tr",null,[t("th",{class:"text-left"},"Parameter"),t("th",{class:"text-left"},"Type"),t("th",{class:"text-left"},"Expanation")])],-1),B=t("tbody",null,[t("tr",null,[t("td",null,"id"),t("td",null,"Number"),t("td",null,"The unique identifier of the product type.")]),t("tr",null,[t("td",null,"description"),t("td",null,"String"),t("td",null,"The description of the product type.")]),t("tr",null,[t("td",null,"notes"),t("td",null,"String"),t("td",null,"Additional notes or comments related to the product type.")]),t("tr",null,[t("td",null,"active"),t("td",null,"String"),t("td",null,"Indicates whether the product type is active.")])],-1);function G(o,$,q,I,D,F){const i=d("TheEnviromentSelecter");return u(),p(f,{class:"ma-4 pa-6"},{default:n(()=>[b,e(i),e(l,{class:"ma-2"}),e(s,null,{default:n(()=>[h("The Safe Storage feature is a service offered by VANEX API that allows you to securely store your valuable packages for a specified period. It provides a convenient and reliable solution for businesses that need a secure storage facility for their items without the hassle of maintaining a storage space themselves. ")]),_:1}),t("div",null,[g,e(l,{class:"ma-2"}),x,T,S,t("ul",w,[t("li",null,[e(s,null,{default:n(()=>[t("code",null,a(o.activeEnviroment||"(Chose an Enviroment)")+"/safe-storage/product-types",1)]),_:1})])]),E,V,k,t("ul",P,[t("li",null,[e(s,null,{default:n(()=>[t("code",null,a(o.activeEnviroment||"(Chose an Enviroment)")+"/safe-storage/product-types",1)]),_:1})])]),C,e(s,null,{default:n(()=>[N]),_:1}),R,e(v,{density:"compact"},{default:n(()=>[A,B]),_:1})])]),_:1})}const X=c(y,[["render",G]]);export{X as default};
