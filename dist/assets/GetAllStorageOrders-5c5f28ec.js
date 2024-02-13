import{_ as d,m as u,r as i,o as h,c as _,w as l,a as t,V as a,b as c,d as e,t as o}from"./index-a977af96.js";import{T as g,u as p}from"./TheEnviromentSelecter-f0ed81b1.js";import{V as f,a as n}from"./VCard-06dac4c7.js";import{V as m}from"./VTable-b3a8d084.js";const v={components:{TheEnviromentSelecter:g},computed:{...u(p,["activeEnviroment"])}},b=e("div",{class:"mb-2 text-h3",align:"center"},"Safe Storage Features",-1),w=e("div",{class:"ma-2 text-h4"},"Get All Storage Orders",-1),T=e("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Brief description: ",-1),y=e("ul",{class:"ml-5"},[e("li",null,' The "Get All Storage Orders" endpoint allows you to retrieve a list of all storage orders that have been created in the system. Storage orders are records of orders placed for safe storage of items or products. ')],-1),x=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request URL:",-1),D={class:"ml-5"},I=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Method:",-1),S=e("ul",{class:"ml-5"},[e("li",null,"GET")],-1),k=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request example:",-1),j={class:"ml-5"},E=e("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Return example:",-1),V=e("code",null,[e("pre",{class:"overflow-x-auto"},`{
    "status_code": 200,
    "message": "",
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 181,
                "user_id": null,
                "store_id": "1",
                "status_id": "1",
                "approved_user_id": null,
                "rejected_user_id": null,
                "approved_warehouse_user_id": null,
                "origin_id": null,
                "location_id": null,
                "fulfillment_id": null,
                "type_id": "1",
                "sub_type_id": "3",
                "section_id": null,
                "column_id": null,
                "shelf_id": null,
                "package_id": null,
                "total_qty": "1",
                "total_cost": "44.00",
                "storage_cost": "0.00",
                "notes": null,
                "approved_at": null,
                "returned_at": null,
                "rejected_at": null,
                "approved_warehouse_at": null,
                "rejected_warehouse_at": null,
                "storage_shipping_order_id": null,
                "return_id": null,
                "rejected_warehouse_user_id": null,
                "branch_region_id": "1",
                "created_at": "2023-08-02T12:07:34.000000Z",
                "updated_at": "2023-08-02T12:07:34.000000Z",
                "status": {
                    "id": 1,
                    "name": "قيد الإجراء",
                    "created_at": null,
                    "updated_at": null
                },
                "type": {
                    "id": 1,
                    "name": "إدخال",
                    "super_type_id": null,
                    "created_at": null,
                    "updated_at": null
                }
            },
        ],
        "first_page_url": "https://api.vanextest.com.ly/api/v1/safe-storage/orders?page=1",
        "from": 1,
        "last_page": 9,
        "last_page_url": "https://api.vanextest.com.ly/api/v1/safe-storage/orders?page=9",
        "links": [
            {
                "url": null,
                "label": "« السابق",
                "active": false
            },
            {
                "url": "https://api.vanextest.com.ly/api/v1/safe-storage/orders?page=1",
                "label": "1",
                "active": true
            },
            
        ],
        "next_page_url": "https://api.vanextest.com.ly/api/v1/safe-storage/orders?page=2",
        "path": "https://api.vanextest.com.ly/api/v1/safe-storage/orders",
        "per_page": 10,
        "prev_page_url": null,
        "to": 10,
        "total": 81
    },
    "errors": false,
    "code": null
}
          `)],-1),A=e("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Response body description: ",-1),q=e("thead",{style:{"background-color":"lightblue"}},[e("tr",null,[e("th",{class:"text-left"},"Parameter"),e("th",{class:"text-left"},"Type"),e("th",{class:"text-left"},"Expanation")])],-1),N=e("tbody",null,[e("tr",null,[e("td",null,"id"),e("td",null,"integer"),e("td",null,"The unique identifier of the storage order.")]),e("tr",null,[e("td",null,"user_id"),e("td",null,"integer"),e("td",null," The ID of the user associated with the storage order (nullable). ")]),e("tr",null,[e("td",null,"store_id"),e("td",null,"string"),e("td",null,"The ID of the store where the storage order is placed.")]),e("tr",null,[e("td",null,"status_id"),e("td",null,"string"),e("td",null,"The ID of the status of the storage order.")]),e("tr",null,[e("td",null,"approved_user_id"),e("td",null,"integer"),e("td",null," The ID of the user who approved the storage order (nullable). ")]),e("tr",null,[e("td",null,"rejected_user_id"),e("td",null,"integer"),e("td",null," The ID of the user who rejected the storage order (nullable). ")]),e("tr",null,[e("td",null,"approved_warehouse_user_id"),e("td",null,"integer"),e("td",null," The ID of the warehouse user who approved the storage order (nullable). ")]),e("tr",null,[e("td",null,"origin_id"),e("td",null,"integer"),e("td",null,"The ID of the origin of the storage order (nullable).")]),e("tr",null,[e("td",null,"location_id"),e("td",null,"integer"),e("td",null,"The ID of the location of the storage order (nullable).")]),e("tr",null,[e("td",null,"fulfillment_id"),e("td",null,"integer"),e("td",null,"The ID of the fulfillment of the storage order (nullable).")]),e("tr",null,[e("td",null,"type_id"),e("td",null,"string"),e("td",null,"The ID of the type of the storage order.")]),e("tr",null,[e("td",null,"sub_type_id"),e("td",null,"string"),e("td",null,"The ID of the sub-type of the storage order.")]),e("tr",null,[e("td",null,"section_id"),e("td",null,"integer"),e("td",null,"The ID of the section of the storage order (nullable).")]),e("tr",null,[e("td",null,"column_id"),e("td",null,"integer"),e("td",null,"The ID of the column of the storage order (nullable).")]),e("tr",null,[e("td",null,"shelf_id"),e("td",null,"integer"),e("td",null,"The ID of the shelf of the storage order (nullable).")]),e("tr",null,[e("td",null,"package_id"),e("td",null,"integer"),e("td",null,"The ID of the package of the storage order (nullable).")]),e("tr",null,[e("td",null,"total_qty"),e("td",null,"string"),e("td",null,"The total quantity of products in the storage order.")]),e("tr",null,[e("td",null,"total_cost"),e("td",null,"string"),e("td",null,"The total cost of the storage order.")]),e("tr",null,[e("td",null,"storage_cost"),e("td",null,"string"),e("td",null,"The storage cost of the storage order.")]),e("tr",null,[e("td",null,"notes"),e("td",null,"string"),e("td",null," Additional notes or comments related to the storage order (nullable). ")]),e("tr",null,[e("td",null,"approved_at"),e("td",null,"string"),e("td",null," The date and time when the storage order was approved (nullable). ")]),e("tr",null,[e("td",null,"returned_at"),e("td",null,"string"),e("td",null," The date and time when the storage order was returned (nullable). ")]),e("tr",null,[e("td",null,"rejected_at"),e("td",null,"string"),e("td",null," The date and time when the storage order was rejected (nullable). ")]),e("tr",null,[e("td",null,"approved_warehouse_at"),e("td",null,"string"),e("td",null," The date and time when the storage order was approved by the warehouse user (nullable). ")]),e("tr",null,[e("td",null,"rejected_warehouse_at"),e("td",null,"string"),e("td",null," The date and time when the storage order was rejected by the warehouse user (nullable). ")]),e("tr",null,[e("td",null,"storage_shipping_order_id"),e("td",null,"integer"),e("td",null," The ID of the shipping order associated with the storage order (nullable). ")]),e("tr",null,[e("td",null,"return_id"),e("td",null,"integer"),e("td",null," The ID of the return associated with the storage order (nullable). ")]),e("tr",null,[e("td",null,"rejected_warehouse_user_id"),e("td",null,"integer"),e("td",null," The ID of the warehouse user who rejected the storage order (nullable). ")]),e("tr",null,[e("td",null,"branch_region_id"),e("td",null,"string"),e("td",null," The ID of the branch region associated with the storage order. ")]),e("tr",null,[e("td",null,"created_at"),e("td",null,"string"),e("td",null,"The date and time when the storage order was created.")]),e("tr",null,[e("td",null,"updated_at"),e("td",null,"string"),e("td",null,"The date and time when the storage order was last updated.")]),e("tr",null,[e("td",null,"status Name"),e("td",null,"string"),e("td",null,"The name of the status of the storage order.")]),e("tr",null,[e("td",null,"type Name"),e("td",null,"string"),e("td",null,"The name of the type of the storage order.")])],-1);function C(r,G,R,B,O,$){const s=i("TheEnviromentSelecter");return h(),_(f,{class:"ma-4 pa-6"},{default:l(()=>[b,t(s),t(a,{class:"ma-2"}),t(n,null,{default:l(()=>[c("The Safe Storage feature is a service offered by VANEX API that allows you to securely store your valuable packages for a specified period. It provides a convenient and reliable solution for businesses that need a secure storage facility for their items without the hassle of maintaining a storage space themselves. ")]),_:1}),e("div",null,[w,t(a,{class:"ma-2"}),T,y,x,e("ul",D,[e("li",null,[t(n,null,{default:l(()=>[e("code",null,o(r.activeEnviroment||"(Chose an Enviroment)")+"/safe-storage/orders",1)]),_:1})])]),I,S,k,e("ul",j,[e("li",null,[t(n,null,{default:l(()=>[e("code",null,o(r.activeEnviroment||"(Chose an Enviroment)")+"/safe-storage/orders",1)]),_:1})])]),E,t(n,null,{default:l(()=>[V]),_:1}),A,t(m,{density:"compact"},{default:l(()=>[q,N]),_:1})])]),_:1})}const M=d(v,[["render",C]]);export{M as default};
