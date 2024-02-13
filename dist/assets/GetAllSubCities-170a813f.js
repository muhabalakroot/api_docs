import{_ as d,m as u,r as c,o as r,c as m,w as l,a as e,V as i,b as _,d as t,t as o}from"./index-a977af96.js";import{T as h,u as f}from"./TheEnviromentSelecter-f0ed81b1.js";import{V as p,a as n}from"./VCard-06dac4c7.js";import{V as b}from"./VTable-b3a8d084.js";const v={components:{TheEnviromentSelecter:h},computed:{...u(f,["activeEnviroment"])}},g=t("div",{class:"mb-2 text-h3",align:"center"},"Utilities",-1),y=t("div",{class:"ma-2 text-h4"},"Get All SubCities",-1),x=t("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Brief description: ",-1),S=t("ul",{class:"ml-5"},[t("li",null," It allows users to get all of the SubCities of a City with there IDs. (note that some Cities does not have SubCities) ")],-1),T=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request URL:",-1),C={class:"ml-5"},E=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Method:",-1),w=t("ul",{class:"ml-5"},[t("li",null,"GET")],-1),I=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request example:",-1),V={class:"ml-5"},k=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Return example:",-1),N=t("code",null,[t("pre",{class:"overflow-x-auto"},`{
    "status_code": 200,
    "message": "قائمة مناطق المدينة رقم : 1",
    "data": {
        "data": [
            {
                "id": 70,
                "name": "السياحية",
                "code": "TIP",
                "name_en": "Seyahia",
                "region": "TIP",
                "price": 10,
                "est_time": null
            },
            {
                "id": 71,
                "name": "حي الأندلس",
                "code": "TIP",
                "name_en": "Hay alandulus",
                "region": "TIP",
                "price": 10,
                "est_time": null
            },
            {
                "id": 73,
                "name": "الظهرة",
                "code": "TIP",
                "name_en": "aldahraa",
                "region": "TIP",
                "price": 10,
                "est_time": null
            },
        ]
    },
    "errors": false
}
          `)],-1),P=t("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Response body description: ",-1),A=t("thead",{style:{"background-color":"lightblue"}},[t("tr",null,[t("th",{class:"text-left"},"Parameter"),t("th",{class:"text-left"},"Type"),t("th",{class:"text-left"},"Expanation")])],-1),R=t("tbody",null,[t("tr",null,[t("td",null,"status_code"),t("td",null,"Number"),t("td",null,"The status code of the response.")]),t("tr",null,[t("td",null,"message"),t("td",null,"String"),t("td",null,"A message associated with the response.")]),t("tr",null,[t("td",null,"data"),t("td",null,"Object"),t("td",null,"Contains detailed information about the collect.")]),t("tr",null,[t("td",null,"id"),t("td",null,"Number"),t("td",null,"ID of the city")]),t("tr",null,[t("td",null,"name"),t("td",null,"String"),t("td",null,"Name of the city in Arabic")]),t("tr",null,[t("td",null,"name_en"),t("td",null,"String"),t("td",null,"Name of the city in English")]),t("tr",null,[t("td",null,"code"),t("td",null,"String"),t("td",null,"Code of the city")]),t("tr",null,[t("td",null,"price"),t("td",null,"Number"),t("td",null,"Price of the city")]),t("tr",null,[t("td",null,"est_time"),t("td",null,"String"),t("td",null,"Estimated time for delivery")]),t("tr",null,[t("td",null,"region"),t("td",null,"String"),t("td",null,"Region code")]),t("tr",null,[t("td",null,"errors"),t("td",null,"Boolean"),t("td",null,"Indicator for any errors.")])],-1);function B(s,D,G,$,U,q){const a=c("TheEnviromentSelecter");return r(),m(p,{class:"ma-4 pa-6"},{default:l(()=>[g,e(a),e(i,{class:"ma-2"}),e(n,null,{default:l(()=>[_("The Utilities provides a set of useful utility endpoints and functionalities that can be utilized by various parts in your application. ")]),_:1}),t("div",null,[y,e(i,{class:"ma-2"}),x,S,T,t("ul",C,[t("li",null,[e(n,null,{default:l(()=>[t("code",null,o(s.activeEnviroment||"(Chose an Enviroment)")+"/city/:city_id/subs",1)]),_:1})])]),E,w,I,t("ul",V,[t("li",null,[e(n,null,{default:l(()=>[t("code",null,o(s.activeEnviroment||"(Chose an Enviroment)")+"/city/1/subs",1)]),_:1})])]),k,e(n,null,{default:l(()=>[N]),_:1}),P,e(b,{density:"compact"},{default:l(()=>[A,R]),_:1})])]),_:1})}const M=d(v,[["render",B]]);export{M as default};
