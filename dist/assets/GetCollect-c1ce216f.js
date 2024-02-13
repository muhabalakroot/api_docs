import{_ as a,m as i,r as c,o as h,c as m,w as e,a as l,V as s,b as _,d as t,t as d}from"./index-a977af96.js";import{T as f,u as p}from"./TheEnviromentSelecter-f0ed81b1.js";import{V as g,a as n}from"./VCard-06dac4c7.js";import{V as o}from"./VTable-b3a8d084.js";const b={components:{TheEnviromentSelecter:f},computed:{...i(p,["activeEnviroment"])}},v=t("div",{class:"mb-2 text-h3",align:"center"},"Collect",-1),x=t("div",{class:"ma-2 text-h4"},"Get Collect",-1),y=t("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Brief description: ",-1),T=t("ul",{class:"ml-5"},[t("li",null,"It allows users to get an existing collect by Its Id.")],-1),k=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request URL:",-1),N={class:"ml-5"},S=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Method:",-1),w=t("ul",{class:"ml-5"},[t("li",null,"GET")],-1),I=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request example:",-1),C={class:"ml-5"},E=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Path Variables:",-1),V=t("thead",{style:{"background-color":"lightblue"}},[t("tr",null,[t("th",{class:"text-left"},"Name"),t("th",{class:"text-left"},"Required"),t("th",{class:"text-left"},"Type"),t("th",{class:"text-left"},"Expanation")])],-1),q=t("tbody",null,[t("tr",null,[t("td",null,"collect id"),t("td",null,"yes"),t("td",null,"String"),t("td",null,"Id of the collect")])],-1),A=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Return example:",-1),R=t("code",null,[t("pre",{class:"overflow-x-auto"},`{
    "status_code": 200,
    "message": "طلب التجميع الخاص بالمستخدم",
    "data": {
        "id": 33641,
        "store": 1,
        "user_id": 24,
        "branch": 1,
        "address": "السياحية",
        "phone": "0918101704",
        "phone_2": null,
        "num_pkg": 0,
        "actual_num_pkg": 0,
        "pkg_num_rec": 0,
        "returns_request": 0,
        "sett": 1,
        "ready": 0,
        "packaging": 0,
        "map": "",
        "notes": "القيمة الموجودة بحسابي٫ طلب حقيقي",
        "created": "2023-06-26 12:07:47",
        "setteled": "2023-07-02",
        "amount": "7.000",
        "status": "complete",
        "status_ar": "طلب مكتمل",
        "delegate": 1071,
        "journey": 9869,
        "non_delivery_reason": 0,
        "non_delivery_text": null
    },
    "errors": false,
    "code": null
}
          `)],-1),B=t("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Response body description: ",-1),j=t("thead",{style:{"background-color":"lightblue"}},[t("tr",null,[t("th",{class:"text-left"},"Parameter"),t("th",{class:"text-left"},"Type"),t("th",{class:"text-left"},"Expanation")])],-1),G=t("tbody",null,[t("tr",null,[t("td",null,"status_code"),t("td",null,"Number"),t("td",null,"The status code of the response.")]),t("tr",null,[t("td",null,"message"),t("td",null,"String"),t("td",null,"A message associated with the response.")]),t("tr",null,[t("td",null,"data"),t("td",null,"Object"),t("td",null,"Contains detailed information about the collect.")]),t("tr",null,[t("td",null,"id"),t("td",null,"Number"),t("td",null,"The unique identifier for the collect.")]),t("tr",null,[t("td",null,"store"),t("td",null,"Number"),t("td",null,"Identifier of the store.")]),t("tr",null,[t("td",null,"user_id"),t("td",null,"Number"),t("td",null,"Identifier of the user.")]),t("tr",null,[t("td",null,"branch"),t("td",null,"Number"),t("td",null,"Identifier of the branch.")]),t("tr",null,[t("td",null,"address"),t("td",null,"String"),t("td",null,"The address of the collect.")]),t("tr",null,[t("td",null,"phone"),t("td",null,"String"),t("td",null,"The phone number associated with the collect.")]),t("tr",null,[t("td",null,"phone_2"),t("td",null,"String"),t("td",null,"An additional phone number.")]),t("tr",null,[t("td",null,"num_pkg"),t("td",null,"Number"),t("td",null,"The number of packages.")]),t("tr",null,[t("td",null,"actual_num_pkg"),t("td",null,"Number"),t("td",null,"The actual number of packages.")]),t("tr",null,[t("td",null,"pkg_num_rec"),t("td",null,"Number"),t("td",null,"The number of received packages.")]),t("tr",null,[t("td",null,"returns_request"),t("td",null,"Number"),t("td",null,"Indicator for return requests.")]),t("tr",null,[t("td",null,"sett"),t("td",null,"Number"),t("td",null,"Indicator for settlement status.")]),t("tr",null,[t("td",null,"ready"),t("td",null,"Number"),t("td",null,"Indicator for ready status.")]),t("tr",null,[t("td",null,"packaging"),t("td",null,"Number"),t("td",null,"Indicator for packaging status.")]),t("tr",null,[t("td",null,"map"),t("td",null,"String"),t("td",null,"The map details.")]),t("tr",null,[t("td",null,"notes"),t("td",null,"String"),t("td",null,"Additional notes.")]),t("tr",null,[t("td",null,"created"),t("td",null,"String"),t("td",null,"The creation date and time.")]),t("tr",null,[t("td",null,"setteled"),t("td",null,"String"),t("td",null,"The settlement date.")]),t("tr",null,[t("td",null,"amount"),t("td",null,"String"),t("td",null,"The amount associated with the collect.")]),t("tr",null,[t("td",null,"status"),t("td",null,"String"),t("td",null,"The status of the collect.")]),t("tr",null,[t("td",null,"status_ar"),t("td",null,"String"),t("td",null,"The status of the collect in Arabic.")]),t("tr",null,[t("td",null,"delegate"),t("td",null,"Number"),t("td",null,"Identifier of the delegate.")]),t("tr",null,[t("td",null,"delegate"),t("td",null,"Number"),t("td",null,"Identifier of the delegate.")]),t("tr",null,[t("td",null,"journey"),t("td",null,"Number"),t("td",null,"Identifier of the journey.")]),t("tr",null,[t("td",null,"non_delivery_reason"),t("td",null,"Number"),t("td",null,"Reason for non-delivery.")]),t("tr",null,[t("td",null,"non_delivery_text"),t("td",null,"String"),t("td",null,"Text for non-delivery reason.")]),t("tr",null,[t("td",null,"errors"),t("td",null,"Boolean"),t("td",null,"Indicator for any errors.")]),t("tr",null,[t("td",null,"code"),t("td",null,"String"),t("td",null,"Error code.")])],-1);function $(u,P,D,L,M,O){const r=c("TheEnviromentSelecter");return h(),m(g,{class:"ma-4 pa-6"},{default:e(()=>[v,l(r),l(s,{class:"ma-2"}),l(n,null,{default:e(()=>[_(`The "Collect" feature in the VANEX API serves as a core functionality for migrating items from the user's application to the system. It allows users to create Collects and get the existing Collects. These Collects can then be processed and handled within the system. `)]),_:1}),t("div",null,[x,l(s,{class:"ma-2"}),y,T,k,t("ul",N,[t("li",null,[l(n,null,{default:e(()=>[t("code",null,d(u.activeEnviroment||"(Chose an Enviroment)")+"/customer/collects/:id/show",1)]),_:1})])]),S,w,I,t("ul",C,[t("li",null,[l(n,null,{default:e(()=>[t("code",null,d(u.activeEnviroment||"(Chose an Enviroment)")+"/customer/collects/12345/show",1)]),_:1})])]),E,l(o,{density:"compact"},{default:e(()=>[V,q]),_:1}),A,l(n,null,{default:e(()=>[R]),_:1}),B,l(o,{density:"compact"},{default:e(()=>[j,G]),_:1})])]),_:1})}const H=a(b,[["render",$]]);export{H as default};