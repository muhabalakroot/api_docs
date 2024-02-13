import{_ as d,m as i,r as c,o as m,c as h,w as u,a as e,V as r,b as p,d as t,t as n}from"./index-a977af96.js";import{T as _,u as g}from"./TheEnviromentSelecter-f0ed81b1.js";import{V as f,a as s}from"./VCard-06dac4c7.js";import{V as a}from"./VTable-b3a8d084.js";const b={components:{TheEnviromentSelecter:_},computed:{...i(g,["activeEnviroment"])}},v=t("div",{class:"mb-2 text-h3",align:"center"},"Collect",-1),y=t("div",{class:"ma-2 text-h4"},"Get All Collects",-1),T=t("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Brief description: ",-1),k=t("ul",{class:"ml-5"},[t("li",null,"It allows users to get all of the existing collects.")],-1),E=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request URL:",-1),N={class:"ml-5"},x=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Method:",-1),S=t("ul",{class:"ml-5"},[t("li",null,"GET")],-1),C=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request example:",-1),w={class:"ml-5"},I=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Query Params:",-1),A=t("thead",{style:{"background-color":"lightblue"}},[t("tr",null,[t("th",{class:"text-left"},"Query Params"),t("th",{class:"text-left"},"Required"),t("th",{class:"text-left"},"Type"),t("th",{class:"text-left"},"Expanation")])],-1),V=t("tbody",null,[t("tr",null,[t("td",null,"page"),t("td",null,"no"),t("td",null,"Number"),t("td",null,"pagenation")])],-1),R=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Return example:",-1),q={class:"overflow-x-auto"},B=t("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Response body description: ",-1),P=t("thead",{style:{"background-color":"lightblue"}},[t("tr",null,[t("th",{class:"text-left"},"Parameter"),t("th",{class:"text-left"},"Type"),t("th",{class:"text-left"},"Expanation")])],-1),j=t("tbody",null,[t("tr",null,[t("td",null,"status_code"),t("td",null,"Number"),t("td",null,"The status code of the response.")]),t("tr",null,[t("td",null,"message"),t("td",null,"String"),t("td",null,"A message associated with the response.")]),t("tr",null,[t("td",null,"data"),t("td",null,"Object"),t("td",null,"Contains detailed information about the collect.")]),t("tr",null,[t("td",null,"id"),t("td",null,"Number"),t("td",null,"The unique identifier for the collect.")]),t("tr",null,[t("td",null,"store"),t("td",null,"Number"),t("td",null,"Identifier of the store.")]),t("tr",null,[t("td",null,"user_id"),t("td",null,"Number"),t("td",null,"Identifier of the user.")]),t("tr",null,[t("td",null,"branch"),t("td",null,"Number"),t("td",null,"Identifier of the branch.")]),t("tr",null,[t("td",null,"address"),t("td",null,"String"),t("td",null,"The address of the collect.")]),t("tr",null,[t("td",null,"phone"),t("td",null,"String"),t("td",null,"The phone number associated with the collect.")]),t("tr",null,[t("td",null,"phone_2"),t("td",null,"String"),t("td",null,"An additional phone number.")]),t("tr",null,[t("td",null,"num_pkg"),t("td",null,"Number"),t("td",null,"The number of packages.")]),t("tr",null,[t("td",null,"actual_num_pkg"),t("td",null,"Number"),t("td",null,"The actual number of packages.")]),t("tr",null,[t("td",null,"pkg_num_rec"),t("td",null,"Number"),t("td",null,"The number of received packages.")]),t("tr",null,[t("td",null,"returns_request"),t("td",null,"Number"),t("td",null,"Indicator for return requests.")]),t("tr",null,[t("td",null,"sett"),t("td",null,"Number"),t("td",null,"Indicator for settlement status.")]),t("tr",null,[t("td",null,"ready"),t("td",null,"Number"),t("td",null,"Indicator for ready status.")]),t("tr",null,[t("td",null,"packaging"),t("td",null,"Number"),t("td",null,"Indicator for packaging status.")]),t("tr",null,[t("td",null,"map"),t("td",null,"String"),t("td",null,"The map details.")]),t("tr",null,[t("td",null,"notes"),t("td",null,"String"),t("td",null,"Additional notes.")]),t("tr",null,[t("td",null,"created"),t("td",null,"String"),t("td",null,"The creation date and time.")]),t("tr",null,[t("td",null,"setteled"),t("td",null,"String"),t("td",null,"The settlement date.")]),t("tr",null,[t("td",null,"amount"),t("td",null,"String"),t("td",null,"The amount associated with the collect.")]),t("tr",null,[t("td",null,"status"),t("td",null,"String"),t("td",null,"The status of the collect.")]),t("tr",null,[t("td",null,"status_ar"),t("td",null,"String"),t("td",null,"The status of the collect in Arabic.")]),t("tr",null,[t("td",null,"delegate"),t("td",null,"Number"),t("td",null,"Identifier of the delegate.")]),t("tr",null,[t("td",null,"delegate"),t("td",null,"Number"),t("td",null,"Identifier of the delegate.")]),t("tr",null,[t("td",null,"journey"),t("td",null,"Number"),t("td",null,"Identifier of the journey.")]),t("tr",null,[t("td",null,"non_delivery_reason"),t("td",null,"Number"),t("td",null,"Reason for non-delivery.")]),t("tr",null,[t("td",null,"non_delivery_text"),t("td",null,"String"),t("td",null,"Text for non-delivery reason.")]),t("tr",null,[t("td",null,"current_page"),t("td",null,"Number"),t("td",null,"The current page number.")]),t("tr",null,[t("td",null,"from"),t("td",null,"Number"),t("td",null,"The starting index of the items on the current page.")]),t("tr",null,[t("td",null,"last_page"),t("td",null,"Number"),t("td",null,"The last page number.")]),t("tr",null,[t("td",null,"links"),t("td",null,"Array"),t("td",null," An array of links with their URLs, labels, and activity status. ")]),t("tr",null,[t("td",null,"url"),t("td",null,"String"),t("td",null,"The URL of the link..")]),t("tr",null,[t("td",null,"label"),t("td",null,"String"),t("td",null,"The label of the link.")]),t("tr",null,[t("td",null,"active"),t("td",null,"Boolean"),t("td",null,"Indicator for the currently active link.")]),t("tr",null,[t("td",null,"path"),t("td",null,"String"),t("td",null,"The base path of the API endpoint.")]),t("tr",null,[t("td",null,"per_page"),t("td",null,"Number"),t("td",null,"The number of items per page.")]),t("tr",null,[t("td",null,"to"),t("td",null,"Number"),t("td",null,"The ending index of the items on the current page.")]),t("tr",null,[t("td",null,"total"),t("td",null,"Number"),t("td",null,"The total number of items across all pages.")]),t("tr",null,[t("td",null,"errors"),t("td",null,"Boolean"),t("td",null,"Indicator for any errors.")]),t("tr",null,[t("td",null,"code"),t("td",null,"String"),t("td",null,"Error code.")])],-1);function G(l,$,L,U,D,Q){const o=c("TheEnviromentSelecter");return m(),h(f,{class:"ma-4 pa-6"},{default:u(()=>[v,e(o),e(r,{class:"ma-2"}),e(s,null,{default:u(()=>[p(`The "Collect" feature in the VANEX API serves as a core functionality for migrating items from the user's application to the system. It allows users to create Collects and get the existing Collects. These Collects can then be processed and handled within the system. `)]),_:1}),t("div",null,[y,e(r,{class:"ma-2"}),T,k,E,t("ul",N,[t("li",null,[e(s,null,{default:u(()=>[t("code",null,n(l.activeEnviroment||"(Chose an Enviroment)")+"/customer/collects",1)]),_:1})])]),x,S,C,t("ul",w,[t("li",null,[e(s,null,{default:u(()=>[t("code",null,n(l.activeEnviroment||"(Chose an Enviroment)")+"/customer/collects?page=1",1)]),_:1})])]),I,e(a,{density:"compact"},{default:u(()=>[A,V]),_:1}),R,e(s,null,{default:u(()=>[t("code",null,[t("pre",q,`{
    "status_code": 200,
    "message": "طلبات تجميع الخاصة بالمستخدم.",
    "data": {
        "data": [
            {
                "id": 34165,
                "store": 1,
                "user_id": 24,
                "branch": 1,
                "address": "test",
                "phone": "0910000000",
                "phone_2": 940000000,
                "num_pkg": 1,
                "actual_num_pkg": 0,
                "pkg_num_rec": 0,
                "returns_request": 1,
                "sett": 1,
                "ready": 1,
                "packaging": 0,
                "map": "https://maps.google.com/?q=32.84684723121387,13.075452519721184",
                "notes": "test",
                "created": "2023-07-18 16:29:44",
                "setteled": null,
                "amount": "0.000",
                "status": "refused",
                "status_ar": "طلب مرفوض",
                "delegate": 0,
                "journey": 0,
                "non_delivery_reason": 0,
                "non_delivery_text": null
            },
        ],
        "links": {
            "first": "`+n(l.activeEnviroment||"(Chose an Enviroment)")+`/customer/collects?page=1",
            "last": "`+n(l.activeEnviroment||"(Chose an Enviroment)")+`/customer/collects?page=5",
            "prev": null,
            "next": "`+n(l.activeEnviroment||"(Chose an Enviroment)")+`/customer/collects?page=2"
        },
        "meta": {
            "current_page": 1,
            "from": 1,
            "last_page": 5,
            "links": [
                {
                    "url": null,
                    "label": "« السابق",
                    "active": false
                },
                {
                    "url": "`+n(l.activeEnviroment||"(Chose an Enviroment)")+`/customer/collects?page=1",
                    "label": "1",
                    "active": true
                },
                {
                    "url": "`+n(l.activeEnviroment||"(Chose an Enviroment)")+`/customer/collects?page=2",
                    "label": "2",
                    "active": false
                },
                {
                    "url": "`+n(l.activeEnviroment||"(Chose an Enviroment)")+`/customer/collects?page=2",
                    "label": "التالي »",
                    "active": false
                }
            ],
            "path": "`+n(l.activeEnviroment||"(Chose an Enviroment)")+`/customer/collects",
            "per_page": 10,
            "to": 10,
            "total": 41
        }
    },
    "errors": false,
    "code": null
}
          `,1)])]),_:1}),B,e(a,{density:"compact"},{default:u(()=>[P,j]),_:1})])]),_:1})}const F=d(b,[["render",G]]);export{F as default};
