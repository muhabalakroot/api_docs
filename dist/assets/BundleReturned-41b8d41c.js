import{_ as a,o as r,c as d,w as l,a as t,V as n,b as o,d as e}from"./index-a977af96.js";import{V as u,a as s}from"./VCard-06dac4c7.js";import{V as c}from"./VTable-b3a8d084.js";const i={},_=e("div",{class:"mb-2 text-h3",align:"center"},"Web Hook",-1),h=e("div",{class:"ma-2 text-h4"},"Bundle Returned",-1),m=e("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Brief description: ",-1),p=e("ul",{class:"ml-5"},[e("li",null," this event gets dispatched when a number of packages get returned. ")],-1),f=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Return example:",-1),b=e("code",null,[e("pre",{class:"overflow-x-auto"},`{
  "type":"bundle_returns",
  "ref_number" : null,
  
  //the accepted package
  "packages" : [
    {
      "code": "H-1-TIP-43432",
      "store_sub_sender" : 123,
      "store_reference_id" : 123
    }
  ],
  "time_stamp":"2023-01-24 09:00:00"
}
            `)],-1),g=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Payload Schema:",-1),y=e("thead",{style:{"background-color":"lightblue"}},[e("tr",null,[e("th",{class:"text-left"},"Parameter"),e("th",{class:"text-left"},"Required"),e("th",{class:"text-left"},"Type"),e("th",{class:"text-left"},"Description")])],-1),k=e("tbody",null,[e("tr",null,[e("td",null,"type"),e("td",null,"yes"),e("td",null,"string"),e("td",null," “package_accepted”, “package_delivered”, “settlement”, “bundle_returns”. ")]),e("tr",null,[e("td",null,"ref_number"),e("td",null,"yes"),e("td",null,"string, nullable"),e("td",null,"integer if the type = settlement, else its null.")]),e("tr",null,[e("td",null,"packages"),e("td",null,"yes"),e("td",null,"array"),e("td",null,"the package that this event is referencing")]),e("tr",null,[e("td",null,"code"),e("td",null,"yes"),e("td",null,"object"),e("td",null,"the package code")]),e("tr",null,[e("td",null,"store_sub_sender"),e("td",null,"yes"),e("td",null,"integer"),e("td",null,"the store user id")]),e("tr",null,[e("td",null,"store_reference_id"),e("td",null,"yes"),e("td",null,"integer"),e("td",null,"order reference number from the client system")]),e("tr",null,[e("td",null,"time_stamp"),e("td",null,"yes"),e("td",null,"object"),e("td",null,"time of the event")])],-1);function x(v,w){return r(),d(u,{class:"ma-4 pa-6"},{default:l(()=>[_,t(n,{class:"ma-2"}),t(s,null,{default:l(()=>[o("Webhooks are automated messages sent from apps when something happens. They have a message—or payload—and are sent to a unique URL—essentially the app's phone number or address. Webhooks are almost always faster than polling, and require less work on your end. ")]),_:1}),e("div",null,[h,t(n,{class:"ma-2"}),m,p,f,t(s,null,{default:l(()=>[b]),_:1}),g,t(c,{density:"compact"},{default:l(()=>[y,k]),_:1})])]),_:1})}const T=a(i,[["render",x]]);export{T as default};
