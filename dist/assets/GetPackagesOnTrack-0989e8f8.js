import{_ as r,m as o,r as s,o as c,c as h,w as n,a as l,V as u,b as g,d as t,t as i}from"./index-a977af96.js";import{T as p,u as m}from"./TheEnviromentSelecter-f0ed81b1.js";import{V as _,a as e}from"./VCard-06dac4c7.js";import{V as b}from"./VTable-b3a8d084.js";const f={components:{TheEnviromentSelecter:p},computed:{...o(m,["activeEnviroment"])},methods:{redirect(){this.$router.push({name:"GetPackage"})}}},y=t("div",{class:"mb-2 text-h3",align:"center"},"Packages",-1),k=t("div",{class:"ma-2 text-h4"},"Get Packages On Track",-1),T=t("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Brief description: ",-1),v=t("ul",{class:"ml-5"},[t("li",null,' The "Get Packages On Track" endpoint is a read-only API that allows you to retrieve a list of packages that are currently on track and in transit. These packages are likely being delivered or transported to their respective destinations by the courier service. This endpoint is designed to provide real-time information about the ')],-1),S=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request URL:",-1),N={class:"ml-5"},x=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Method:",-1),w=t("ul",{class:"ml-5"},[t("li",null,"GET")],-1),A=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request example:",-1),C={class:"ml-5"},E=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Return example:",-1),I=t("code",null,[t("pre",{class:"overflow-x-auto"},`{
    "status_code": 200,
    "message": "قيد الشحن.",
    "data": {
        "package-code": "1-BEN-1234567",
        "package_type": {
            "id": 1,
            "name": "شحن تجاري",
            "name_en": "ONSPEED",
            "active": 1,
            "parent": 0
        },
        "package_sub_type": {
            "id": 1,
            "name": "شحن تجاري",
            "name_en": "ONSPEED",
            "active": 1,
            "parent": 0
        },
        "reciever": "مستلم تجريبي",
        "phone": "0910000000",
        "phone_b": "0920000000",
        "address": "عنوان تجريبي - راس عبيدة",
        "price": 1158,
        "origin_price": 1200,
        "shippment": 42,
        "total": 1200,
        "extra_size_price": 0,
        "region_commission": 12,
        "payment_methode": "cash",
        "paid_by": "market",
        "extra_size_by": "market",
        "commission_by": "market",
        "paid_by_ar": "المتجر",
        "extra_size_by_ar": "المتجر",
        "commission_by_ar": "المتجر",
        "status": "قيد الإجراء",
        "status_object": {
            "id": 1,
            "status_value": "store_new",
            "status_name_admin": "قيد الإجراء",
            "status_name_cust": "قيد الإجراء",
            "type": "OPS",
            "status_log": "Package has been created",
            "notes": ""
        },
        "create_date": "2023-07-17",
        "address_code": null,
        "instore_date": null,
        "delivery_date": null,
        "update_date": "2023-07-17 16:00:59",
        "qty": 10,
        "qty_return": 0,
        "recieved_money": 0,
        "description": "تجربة وصف",
        "non_delivery_reason": 0,
        "non_delivery_text": null,
        "stock_location": null,
        "pkg_orign": 0,
        "sticker_notes": "ملاحظة البوليصة",
        "leangh": 36,
        "width": 35,
        "height": 35,
        "store_reference_id": null,
        "map": "https://maps.google.com/?q=xxx,xxx",
        "origin": null,
        "breakable": 1,
        "receipt_money": 0,
        "measuring_is_allowed": 1,
        "storage_subscription": 0,
        "inspection_allowed": 1,
        "heat_intolerance": 1,
        "store_sub_sender": null,
        "casing": 0,
        "photo": null,
        "sender": {
            "id": 1,
            "name": "شركة منصة للحلول الذكية"
        },
        "City": {
            "id": 2,
            "name": "بنغازي",
            "code": null,
            "name_en": null,
            "region": null,
            "price": 30,
            "est_time": null,
            "locations": [
                {
                    "id": 120,
                    "name": "وسط المدينة",
                    "code": null,
                    "name_en": null,
                    "region": null,
                    "price": 30,
                    "est_time": null
                },
                {
                    "id": 121,
                    "name": "الصابري",
                    "code": null,
                    "name_en": null,
                    "region": null,
                    "price": 30,
                    "est_time": null
                },
                
            ]
        },
        "sub_city": {
            "id": 122,
            "name": "راس عبيدة"
        },
        "products_package": [],
        "created_at": "2023-07-17T14:00:59.000000Z",
        "updated_at": "2023-07-17T14:00:59.000000Z"
    }
}
          `)],-1),j=t("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Response body description: ",-1),D=t("thead",{style:{"background-color":"lightblue"}},[t("tr",null,[t("th",{class:"text-left"},"Parameter"),t("th",{class:"text-left"},"Type"),t("th",{class:"text-left"},"Expanation")])],-1),O=t("tbody",null,[t("tr",null,[t("td",null,"data"),t("td",null,"Object"),t("td",null," Main data section containing detailed information about the package ")]),t("tr",null,[t("td",null,"package-code"),t("td",null,"String"),t("td",null,"The unique code assigned to the package.")]),t("tr",null,[t("td",null,"package_type"),t("td",null,"Object"),t("td",null,"Information about the package type")]),t("tr",null,[t("td",null,"package_type.id"),t("td",null,"Number"),t("td",null,"The ID of the package type.")]),t("tr",null,[t("td",null,"package_type.name"),t("td",null,"String"),t("td",null,"The name of the package type in Arabic.")]),t("tr",null,[t("td",null,"package_type.name_en"),t("td",null,"String"),t("td",null,"The name of the package type in English.")]),t("tr",null,[t("td",null,"package_type.active"),t("td",null,"Number"),t("td",null,"A flag indicating if the package type is active.")]),t("tr",null,[t("td",null,"package_type.parent"),t("td",null,"Number"),t("td",null,"The ID of the parent package type.")]),t("tr",null,[t("td",null,"package_sub_type"),t("td",null,"Object"),t("td",null,"Information about the package sub-type")]),t("tr",null,[t("td",null,"package_sub_type.id"),t("td",null,"Number"),t("td",null,"The ID of the package sub-type.")]),t("tr",null,[t("td",null,"package_sub_type.name"),t("td",null,"String"),t("td",null,"The name of the package sub-type in Arabic.")]),t("tr",null,[t("td",null,"package_sub_type.name_en"),t("td",null,"String"),t("td",null,"The name of the package sub-type in English.")]),t("tr",null,[t("td",null,"package_sub_type.active"),t("td",null,"Number"),t("td",null,"A flag indicating if the package sub-type is active.")]),t("tr",null,[t("td",null,"package_sub_type.parent"),t("td",null,"Number"),t("td",null,"The ID of the parent package sub-type.")]),t("tr",null,[t("td",null,"reciever"),t("td",null,"String"),t("td",null,"The name of the recipient of the package.")]),t("tr",null,[t("td",null,"phone"),t("td",null,"String"),t("td",null,"The phone number of the recipient.")]),t("tr",null,[t("td",null,"phone_b"),t("td",null,"String"),t("td",null,"An alternative phone number for the recipient.")]),t("tr",null,[t("td",null,"address"),t("td",null,"String"),t("td",null,"The address of the recipient.")]),t("tr",null,[t("td",null,"price"),t("td",null,"Number"),t("td",null,"The price of the package.")]),t("tr",null,[t("td",null,"origin_price"),t("td",null,"Number"),t("td",null,"The original price of the package before any adjustments.")]),t("tr",null,[t("td",null,"shippment"),t("td",null,"Number"),t("td",null,"The shipment ID associated with the package.")]),t("tr",null,[t("td",null,"total"),t("td",null,"Number"),t("td",null,"The total amount of the package.")]),t("tr",null,[t("td",null,"extra_size_price"),t("td",null,"Number"),t("td",null,"The price for any extra size of the package.")]),t("tr",null,[t("td",null,"region_commission"),t("td",null,"Number"),t("td",null,"The commission value for the region.")]),t("tr",null,[t("td",null,"payment_methode"),t("td",null,"String"),t("td",null,"The method of payment for the package.")]),t("tr",null,[t("td",null,"paid_by"),t("td",null,"String"),t("td",null,"The entity that paid for the package.")]),t("tr",null,[t("td",null,"extra_size_by"),t("td",null,"String"),t("td",null," The entity responsible for handling extra size of the package. ")]),t("tr",null,[t("td",null,"commission_by"),t("td",null,"String"),t("td",null," The entity responsible for handling the commission for the package. ")]),t("tr",null,[t("td",null,"paid_by_ar"),t("td",null,"String"),t("td",null,"The Arabic name of the entity that paid for the package.")]),t("tr",null,[t("td",null,"extra_size_by_ar"),t("td",null,"String"),t("td",null," The Arabic name of the entity responsible for handling extra size. ")]),t("tr",null,[t("td",null,"commission_by_ar"),t("td",null,"String"),t("td",null," The Arabic name of the entity responsible for handling the commission. ")]),t("tr",null,[t("td",null,"status"),t("td",null,"String"),t("td",null,"The current status of the package.")]),t("tr",null,[t("td",null,"status_object"),t("td",null,"Object"),t("td",null,"Information about the status object")]),t("tr",null,[t("td",null,"status_object.id"),t("td",null,"Number"),t("td",null,"The ID of the status object.")]),t("tr",null,[t("td",null,"status_object.status_value"),t("td",null,"String"),t("td",null,"The status value.")]),t("tr",null,[t("td",null,"status_object.status_name_admin"),t("td",null,"String"),t("td",null,"The status name in Arabic for administrative use.")]),t("tr",null,[t("td",null,"status_object.status_name_cust"),t("td",null,"String"),t("td",null,"The status name in Arabic for customer use.")]),t("tr",null,[t("td",null,"status_object.type"),t("td",null,"String"),t("td",null,"The type of the status.")]),t("tr",null,[t("td",null,"status_object.status_log"),t("td",null,"String"),t("td",null,"A log message related to the status.")]),t("tr",null,[t("td",null,"status_object.notes"),t("td",null,"String"),t("td",null,"Additional notes for the status.")]),t("tr",null,[t("td",null,"create_date"),t("td",null,"String"),t("td",null,"The date the package was created.")]),t("tr",null,[t("td",null,"address_code"),t("td",null,"String"),t("td",null,"The code associated with the address.")]),t("tr",null,[t("td",null,"instore_date"),t("td",null,"String"),t("td",null,"The date the package was received in-store.")]),t("tr",null,[t("td",null,"delivery_date"),t("td",null,"String"),t("td",null,"The date the package was delivered.")]),t("tr",null,[t("td",null,"update_date"),t("td",null,"String"),t("td",null,"The date and time of the last update to the package.")]),t("tr",null,[t("td",null,"qty"),t("td",null,"Number"),t("td",null,"The quantity of items in the package.")]),t("tr",null,[t("td",null,"qty_return"),t("td",null,"Number"),t("td",null,"The quantity of items returned.")]),t("tr",null,[t("td",null,"recieved_money"),t("td",null,"Number"),t("td",null,"The amount of money received for the package.")]),t("tr",null,[t("td",null,"description"),t("td",null,"String"),t("td",null,"A description of the package.")]),t("tr",null,[t("td",null,"non_delivery_reason"),t("td",null,"Number"),t("td",null,"The reason for non-delivery.")]),t("tr",null,[t("td",null,"non_delivery_text"),t("td",null,"String"),t("td",null,"Additional text related to the non-delivery reason.")]),t("tr",null,[t("td",null,"stock_location"),t("td",null,"String"),t("td",null,"The stock location of the package.")]),t("tr",null,[t("td",null,"pkg_orign"),t("td",null,"Number"),t("td",null,"The origin of the package.")]),t("tr",null,[t("td",null,"sticker_notes"),t("td",null,"String"),t("td",null,"Additional notes related to the package sticker.")]),t("tr",null,[t("td",null,"leangh"),t("td",null,"Number"),t("td",null,"The length of the package")]),t("tr",null,[t("td",null,"width"),t("td",null,"Number"),t("td",null,"The width of the package.")]),t("tr",null,[t("td",null,"height"),t("td",null,"Number"),t("td",null,"The height of the package.")]),t("tr",null,[t("td",null,"store_reference_id"),t("td",null,"String"),t("td",null,"The reference ID of the store.")]),t("tr",null,[t("td",null,"map"),t("td",null,"String"),t("td",null,"The URL to the Google Maps location.")]),t("tr",null,[t("td",null,"origin"),t("td",null,"String"),t("td",null,"The origin of the package.")]),t("tr",null,[t("td",null,"breakable"),t("td",null,"Number"),t("td",null,"A flag indicating if the package is breakable.")]),t("tr",null,[t("td",null,"receipt_money"),t("td",null,"Number"),t("td",null,"A flag indicating if money was received for the package.")]),t("tr",null,[t("td",null,"measuring_is_allowed"),t("td",null,"Number"),t("td",null,"A flag indicating if measuring is allowed for the package.")]),t("tr",null,[t("td",null,"storage_subscription"),t("td",null,"Number"),t("td",null," A flag indicating if the package has a storage subscription. ")]),t("tr",null,[t("td",null,"inspection_allowed"),t("td",null,"Number"),t("td",null,"A flag indicating if inspection is allowed for the package.")]),t("tr",null,[t("td",null,"heat_intolerance"),t("td",null,"Number"),t("td",null,"A flag indicating if the package has heat intolerance.")]),t("tr",null,[t("td",null,"store_sub_sender"),t("td",null,"Object"),t("td",null,"Information about the sub-sender store.")]),t("tr",null,[t("td",null,"casing"),t("td",null,"Number"),t("td",null,"A flag indicating if the package requires casing.")]),t("tr",null,[t("td",null,"photo"),t("td",null,"String"),t("td",null,"The photo of the package.")]),t("tr",null,[t("td",null,"sender"),t("td",null,"Object"),t("td",null,"Information about the sender of the package")]),t("tr",null,[t("td",null,"sender.id"),t("td",null,"Number"),t("td",null,"The ID of the sender.")]),t("tr",null,[t("td",null,"sender.name"),t("td",null,"String"),t("td",null,"The name of the sender.")]),t("tr",null,[t("td",null,"City"),t("td",null,"Object"),t("td",null,"Information about the city")]),t("tr",null,[t("td",null,"City.id"),t("td",null,"Number"),t("td",null,"The ID of the city.")]),t("tr",null,[t("td",null,"City.name"),t("td",null,"String"),t("td",null,"The name of the city.")]),t("tr",null,[t("td",null,"City.code"),t("td",null,"String"),t("td",null,"The city code.")]),t("tr",null,[t("td",null,"City.name_en"),t("td",null,"String"),t("td",null,"The name of the city in English.")]),t("tr",null,[t("td",null,"City.region"),t("td",null,"String"),t("td",null,"The region associated with the city.")]),t("tr",null,[t("td",null,"City.price"),t("td",null,"Number"),t("td",null,"The price associated with the city.")]),t("tr",null,[t("td",null,"City.est_time"),t("td",null,"String"),t("td",null,"The estimated time for the city.")]),t("tr",null,[t("td",null,"City.locations"),t("td",null,"Array"),t("td",null,"An array of locations within the city.")]),t("tr",null,[t("td",null,"City.locations.id"),t("td",null,"Number"),t("td",null,"The ID of the location.")]),t("tr",null,[t("td",null,"City.locations.name"),t("td",null,"String"),t("td",null,"The name of the location.")]),t("tr",null,[t("td",null,"City.locations.code"),t("td",null,"String"),t("td",null,"The code associated with the location.")]),t("tr",null,[t("td",null,"City.locations.name_en"),t("td",null,"String"),t("td",null,"The name of the location in English.")]),t("tr",null,[t("td",null,"City.locations.region"),t("td",null,"String"),t("td",null,"The region associated with the location.")]),t("tr",null,[t("td",null,"City.locations.price"),t("td",null,"Number"),t("td",null,"The price associated with the location.")]),t("tr",null,[t("td",null,"City.locations.est_time"),t("td",null,"String"),t("td",null,"The estimated time for the location.")]),t("tr",null,[t("td",null,"sub_city"),t("td",null,"Object"),t("td",null,"Information about the sub-city")]),t("tr",null,[t("td",null,"sub_city.id"),t("td",null,"Number"),t("td",null,"The ID of the sub-city.")]),t("tr",null,[t("td",null,"sub_city.name"),t("td",null,"String"),t("td",null,"The name of the sub-city.")]),t("tr",null,[t("td",null,"products_package"),t("td",null,"Array"),t("td",null,"An empty array for products associated with the package.")]),t("tr",null,[t("td",null,"created_at"),t("td",null,"String"),t("td",null,"The date and time of package creation.")]),t("tr",null,[t("td",null,"updated_at"),t("td",null,"String"),t("td",null,"The date and time of package update.")])],-1);function P(a,q,V,z,G,R){const d=s("TheEnviromentSelecter");return c(),h(_,{class:"ma-4 pa-6"},{default:n(()=>[y,l(d),l(u,{class:"ma-2"}),l(e,null,{default:n(()=>[g(`The "Package" feature in the VANEX API serves as a core functionality for migrating items from the user's application to the system. It allows users to create packages and get the existing packages. These packages can then be processed and handled within the system. `)]),_:1}),t("div",null,[k,l(u,{class:"ma-2"}),T,v,S,t("ul",N,[t("li",null,[l(e,null,{default:n(()=>[t("code",null,i(a.activeEnviroment||"(Chose an Enviroment)")+"/customer/package/on-track",1)]),_:1})])]),x,w,A,t("ul",C,[t("li",null,[l(e,null,{default:n(()=>[t("code",null,i(a.activeEnviroment||"(Chose an Enviroment)")+"/customer/package/on-track",1)]),_:1})])]),E,l(e,null,{default:n(()=>[I]),_:1}),j,l(b,{density:"compact"},{default:n(()=>[D,O]),_:1})])]),_:1})}const U=r(f,[["render",P]]);export{U as default};
