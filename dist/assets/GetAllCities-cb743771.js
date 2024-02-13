import{_ as d,m as r,r as c,o as u,c as m,w as n,a as e,V as i,b as _,d as t,t as o}from"./index-a977af96.js";import{T as h,u as f}from"./TheEnviromentSelecter-f0ed81b1.js";import{V as p,a as l}from"./VCard-06dac4c7.js";import{V as b}from"./VTable-b3a8d084.js";const g={components:{TheEnviromentSelecter:h},computed:{...r(f,["activeEnviroment"])}},v=t("div",{class:"mb-2 text-h3",align:"center"},"Utilities",-1),y=t("div",{class:"ma-2 text-h4"},"Get All Cities",-1),x=t("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Brief description: ",-1),E=t("ul",{class:"ml-5"},[t("li",null,"It allows users to get all of the Cities with there IDs.")],-1),S=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request URL:",-1),T={class:"ml-5"},w=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Method:",-1),C=t("ul",{class:"ml-5"},[t("li",null,"GET")],-1),N=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request example:",-1),B={class:"ml-5"},V=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Return example:",-1),k=t("code",null,[t("pre",{class:"overflow-x-auto"},`{
    "status_code": 200,
    "message": "قائمة أسماء المدن",
    "data": [
        {
            "id": 1,
            "name": "طرابلس",
            "name_en": "Tripoli",
            "code": "TIP",
            "price": 10,
            "branch": 1,
            "est_time": "يوم",
            "region": "TIP",
            "branch_region_details": {
                "id": 1,
                "name": "طرابلس"
            }
        },
        {
            "id": 2,
            "name": "بنغازي",
            "name_en": "Benghazi",
            "code": "BEN",
            "price": 30,
            "branch": 1,
            "est_time": "ثلاثة أيام",
            "region": "BEN",
            "branch_region_details": {
                "id": 1,
                "name": "طرابلس"
            }
        },
        {
            "id": 3,
            "name": "سبها",
            "name_en": "Sebha",
            "code": "SBH",
            "price": 30,
            "branch": 1,
            "est_time": "من ثلاثة إلى خمسة أيام",
            "region": "STH",
            "branch_region_details": {
                "id": 1,
                "name": "طرابلس"
            }
        },
    ],
    "errors": false
}
          `)],-1),A=t("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Response body description: ",-1),I=t("thead",{style:{"background-color":"lightblue"}},[t("tr",null,[t("th",{class:"text-left"},"Parameter"),t("th",{class:"text-left"},"Type"),t("th",{class:"text-left"},"Expanation")])],-1),R=t("tbody",null,[t("tr",null,[t("td",null,"status_code"),t("td",null,"Number"),t("td",null,"The status code of the response.")]),t("tr",null,[t("td",null,"message"),t("td",null,"String"),t("td",null,"A message associated with the response.")]),t("tr",null,[t("td",null,"data"),t("td",null,"Object"),t("td",null,"Contains detailed information about the collect.")]),t("tr",null,[t("td",null,"id"),t("td",null,"Number"),t("td",null,"ID of the city")]),t("tr",null,[t("td",null,"name"),t("td",null,"String"),t("td",null,"Name of the city in Arabic")]),t("tr",null,[t("td",null,"name_en"),t("td",null,"String"),t("td",null,"Name of the city in English")]),t("tr",null,[t("td",null,"code"),t("td",null,"String"),t("td",null,"Code of the city")]),t("tr",null,[t("td",null,"price"),t("td",null,"Number"),t("td",null,"Price of the city")]),t("tr",null,[t("td",null,"branch"),t("td",null,"Number"),t("td",null,"Branch code")]),t("tr",null,[t("td",null,"est_time"),t("td",null,"String"),t("td",null,"Estimated time for delivery")]),t("tr",null,[t("td",null,"region"),t("td",null,"String"),t("td",null,"Region code")]),t("tr",null,[t("td",null,"branch_region_details"),t("td",null,"object"),t("td",null,"Details of the branch region")]),t("tr",null,[t("td",null,"errors"),t("td",null,"Boolean"),t("td",null,"Indicator for any errors.")])],-1);function D(s,G,P,$,U,j){const a=c("TheEnviromentSelecter");return u(),m(p,{class:"ma-4 pa-6"},{default:n(()=>[v,e(a),e(i,{class:"ma-2"}),e(l,null,{default:n(()=>[_("The Utilities provides a set of useful utility endpoints and functionalities that can be utilized by various parts in your application. ")]),_:1}),t("div",null,[y,e(i,{class:"ma-2"}),x,E,S,t("ul",T,[t("li",null,[e(l,null,{default:n(()=>[t("code",null,o(s.activeEnviroment||"(Chose an Enviroment)")+"/city/names",1)]),_:1})])]),w,C,N,t("ul",B,[t("li",null,[e(l,null,{default:n(()=>[t("code",null,o(s.activeEnviroment||"(Chose an Enviroment)")+"/city/names",1)]),_:1})])]),V,e(l,null,{default:n(()=>[k]),_:1}),A,e(b,{density:"compact"},{default:n(()=>[I,R]),_:1})])]),_:1})}const M=d(g,[["render",D]]);export{M as default};
