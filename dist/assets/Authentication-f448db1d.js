import{_ as i,m as d,r as c,o as h,c as m,w as l,a as e,V as a,b as _,d as t,t as r}from"./index-a977af96.js";import{T as p,u as g}from"./TheEnviromentSelecter-f0ed81b1.js";import{V as f,a as n}from"./VCard-06dac4c7.js";import{V as o}from"./VTable-b3a8d084.js";const b={components:{TheEnviromentSelecter:p},computed:{...d(g,["activeEnviroment"])}},v=t("div",{class:"mb-2 text-h3",align:"center"},"Authentication",-1),y=t("div",{class:"ma-2 text-h4"},"Login",-1),x=t("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Brief description: ",-1),w=t("ul",{class:"ml-5"},[t("li",null,"Used to get the token to be able to use the system")],-1),k=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request URL:",-1),T={class:"ml-5"},S=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Method:",-1),A=t("ul",{class:"ml-5"},[t("li",null,"POST")],-1),E=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request example:",-1),q={class:"ml-5"},V=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Parameter:",-1),N=t("thead",{style:{"background-color":"lightblue"}},[t("tr",null,[t("th",{class:"text-left"},"Parameter"),t("th",{class:"text-left"},"Required"),t("th",{class:"text-left"},"Type"),t("th",{class:"text-left"},"Expanation")])],-1),P=t("tbody",null,[t("tr",null,[t("td",null,"email"),t("td",null,"yes"),t("td",null,"String"),t("td",null,"The user's email address.")]),t("tr",null,[t("td",null,"password"),t("td",null,"yes"),t("td",null,"String"),t("td",null,"User password")])],-1),B=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Return example:",-1),I=t("code",null,[t("pre",{class:"overflow-x-auto"},`{
    "status_code": 200,
    "message": "",
    "data": {
        "status_code": 200,
        "message": "تم تسجيل الدخول",
        "access_token": "148607|dUQKq4FemUderGM7ThzmKHQrxm5uYDo489jP9hHe",
        "token_type": "Bearer",
        "user": {
            "id": 10211,
            "name": "مستخدم تجريبي",
            "email": "user@vanex.ly",
            "type": 1,
            "full_access": 1,
            "branch_region": null,
            "storage_subscription": 1,
            "office_cities": [
                42,
                200,
                500,
                69,
                222,
                501,
                319,
                320,
                502
            ],
            "avatar": "https://app.vanex.ly/storage/users/pics/10211_WEIP6oFr7qTUgvEW.png"
        }
    },
    "errors": false,
    "code": null
}
          `)],-1),R=t("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Return parameter description: ",-1),U=t("thead",{style:{"background-color":"lightblue"}},[t("tr",null,[t("th",{class:"text-left"},"Parameter"),t("th",{class:"text-left"},"Type"),t("th",{class:"text-left"},"Expanation")])],-1),C=t("tbody",null,[t("tr",null,[t("td",null,"status_code"),t("td",null,"Number"),t("td",null," The status code of the response, indicating the success or failure of the request. ")]),t("tr",null,[t("td",null,"message"),t("td",null,"String"),t("td",null,"A general message related to the response.")]),t("tr",null,[t("td",null,"data"),t("td",null,"String"),t("td",null," The main data section of the response, containing detailed information about the request. ")]),t("tr",null,[t("td",null,"access_token"),t("td",null,"String"),t("td",null," An access token associated with the user session, which can be used for further authenticated requests. ")]),t("tr",null,[t("td",null,"token_type"),t("td",null,"String"),t("td",null,"The type of access token provided.")]),t("tr",null,[t("td",null,"user"),t("td",null,"String"),t("td",null,"Information about the logged-in user.")]),t("tr",null,[t("td",null,"user.id"),t("td",null,"Number"),t("td",null,"The user's ID.")]),t("tr",null,[t("td",null,"user.name"),t("td",null,"String"),t("td",null,"The name of the user.")]),t("tr",null,[t("td",null,"user.email"),t("td",null,"String"),t("td",null,"The user's email address.")]),t("tr",null,[t("td",null,"user.type"),t("td",null,"Number"),t("td",null,"The type or role of the user within the application.")]),t("tr",null,[t("td",null,"user.full_access"),t("td",null,"Number"),t("td",null," A flag indicating whether the user has full access to the application or not. ")]),t("tr",null,[t("td",null,"user.branch_region"),t("td",null,"String"),t("td",null,"Information about the user's branch or region.")]),t("tr",null,[t("td",null,"user.storage_subscription"),t("td",null,"Number"),t("td",null," A flag indicating whether the user has a storage subscription or not. ")]),t("tr",null,[t("td",null,"user.office_cities"),t("td",null,"Array"),t("td",null," An array containing multiple city IDs associated with the user. ")]),t("tr",null,[t("td",null,"user.avatar"),t("td",null,"String"),t("td",null,"The URL to the user's avatar image.")]),t("tr",null,[t("td",null,"errors"),t("td",null,"Boolean"),t("td",null," A boolean indicating whether there were any errors during the request. ")]),t("tr",null,[t("td",null,"code"),t("td",null,"String"),t("td",null," A specific error code associated with any potential errors in the request. ")])],-1);function D(s,$,L,F,H,K){const u=c("TheEnviromentSelecter");return h(),m(f,{class:"ma-4 pa-6"},{default:l(()=>[v,e(u),e(a,{class:"ma-2"}),e(n,null,{default:l(()=>[_("VANEX API uses Bearer token to authenticate your request, you can generate the bearer token via sending your email address and password to the system using the login API Element. ")]),_:1}),t("div",null,[y,e(a,{class:"ma-2"}),x,w,k,t("ul",T,[t("li",null,[e(n,null,{default:l(()=>[t("code",null,r(s.activeEnviroment||"(Chose an Enviroment)")+"/authenticate",1)]),_:1})])]),S,A,E,t("ul",q,[t("li",null,[e(n,null,{default:l(()=>[t("code",null,r(s.activeEnviroment||"(Chose an Enviroment)")+"/authenticate?email=example@gmail.com&password=test1234",1)]),_:1})])]),V,e(o,{density:"compact"},{default:l(()=>[N,P]),_:1}),B,e(n,null,{default:l(()=>[I]),_:1}),R,e(o,{density:"compact"},{default:l(()=>[U,C]),_:1})])]),_:1})}const z=i(b,[["render",D]]);export{z as default};
