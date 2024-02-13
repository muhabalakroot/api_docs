import{_ as d,m as s,r as a,o as c,c as h,w as l,a as e,V as r,b as p,d as t,t as u}from"./index-a977af96.js";import{T as m,u as f}from"./TheEnviromentSelecter-f0ed81b1.js";import{V as _,a as n}from"./VCard-06dac4c7.js";import{V as g}from"./VTable-b3a8d084.js";const v={components:{TheEnviromentSelecter:m},computed:{...s(f,["activeEnviroment"])}},S=t("div",{class:"mb-2 text-h3",align:"center"},"Safe Storage Features",-1),b=t("div",{class:"ma-2 text-h4"},"Get All Stored Product",-1),y=t("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Brief description: ",-1),T=t("ul",{class:"ml-5"},[t("li",null,' The "Get All Stored Product" endpoint allows users to retrieve a list of all stored products. This endpoint is useful for querying and displaying a comprehensive list of products that are currently stored in the system. along with their respective details. ')],-1),w=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request URL:",-1),x={class:"ml-5"},k=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Method:",-1),q=t("ul",{class:"ml-5"},[t("li",null,"GET")],-1),E=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request example:",-1),A={class:"ml-5"},V=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Return example:",-1),N=t("code",null,[t("pre",{class:"overflow-x-auto"},`{
    "status_code": 200,
    "message": "",
    "data": [
        {
            "id": 146,
            "name": "لابتوب",
            "marketing_store": "1",
            "product_code": "3556378939",
            "product_type": {
                "id": 2,
                "description": "كهربية"
            },
            "product_stor_class": "9",
            "color": "أسود",
            "color_id": null,
            "length": "50.00",
            "width": "50.00",
            "height": "40.00",
            "unit": "cm",
            "box_qty": "1",
            "expiry_date": "2022-06-28",
            "importing_date": "2018-01-01",
            "min_stock": "10",
            "company": "HP",
            "unit_price": "2500.00",
            "notes": null,
            "image": null,
            "created_at": "2022-06-27T22:31:04.000000Z",
            "updated_at": "2022-06-27T22:31:04.000000Z",
            "is_freeze": "0",
            "full_image": "https://api.vanextest.com.ly/assets/img/product-placeholder.jpg",
            "total_qty": "60",
            "specs": [
                "6",
                "3",
                "1"
            ],
            "storage_price_type": {
                "id": 9,
                "description": "عناية فائقة"
            },
            "colour": null
        },
    ],
    "errors": false,
    "code": null
}
          `)],-1),P=t("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Response body description: ",-1),R=t("thead",{style:{"background-color":"lightblue"}},[t("tr",null,[t("th",{class:"text-left"},"Parameter"),t("th",{class:"text-left"},"Type"),t("th",{class:"text-left"},"Expanation")])],-1),j=t("tbody",null,[t("tr",null,[t("td",null,"id"),t("td",null,"Number"),t("td",null,"The unique identifier of the stored product.")]),t("tr",null,[t("td",null,"name"),t("td",null,"String"),t("td",null,' The name of the stored product (e.g., "لابتوب" for a laptop). ')]),t("tr",null,[t("td",null,"marketing_store"),t("td",null,"String"),t("td",null,"The ID of the marketing store associated with the product.")]),t("tr",null,[t("td",null,"product_code"),t("td",null,"String"),t("td",null," The unique product code or SKU (Stock Keeping Unit) for identification. ")]),t("tr",null,[t("td",null,"product_type"),t("td",null,"Object"),t("td",null,' The type of the product represented as an object with "id" and "description" fields. ')]),t("tr",null,[t("td",null,"product_stor_class"),t("td",null,"String"),t("td",null,' The class/category of the stored product (e.g., "9" for a specific storage class). ')]),t("tr",null,[t("td",null,"color"),t("td",null,"String"),t("td",null,"The color of the product.")]),t("tr",null,[t("td",null,"color_id"),t("td",null,"Null or String"),t("td",null,"The ID of the color, if available, otherwise null.")]),t("tr",null,[t("td",null,"length"),t("td",null,"String"),t("td",null,"The length of the product in centimeters (cm).")]),t("tr",null,[t("td",null,"width"),t("td",null,"String"),t("td",null,"The width of the product in centimeters (cm).")]),t("tr",null,[t("td",null,"height"),t("td",null,"String"),t("td",null,"The height of the product in centimeters (cm).")]),t("tr",null,[t("td",null,"unit"),t("td",null,"String"),t("td",null,' The unit of measurement for the dimensions (e.g., "cm" for centimeters). ')]),t("tr",null,[t("td",null,"box_qty"),t("td",null,"String"),t("td",null,"The quantity of the product per box.")]),t("tr",null,[t("td",null,"expiry_date"),t("td",null,"String"),t("td",null,"The date when the product is set to expire.")]),t("tr",null,[t("td",null,"importing_date"),t("td",null,"String"),t("td",null,"The date when the product was imported or added to storage.")]),t("tr",null,[t("td",null,"min_stock"),t("td",null,"String"),t("td",null,"The minimum stock level required for this product.")]),t("tr",null,[t("td",null,"company"),t("td",null,"String"),t("td",null,"The company or manufacturer of the product.")]),t("tr",null,[t("td",null,"unit_price"),t("td",null,"String"),t("td",null,"The unit price of the product.")]),t("tr",null,[t("td",null,"notes"),t("td",null,"Null or String"),t("td",null," Additional notes or comments about the product, if available. ")]),t("tr",null,[t("td",null,"image"),t("td",null,"Null or String"),t("td",null,"The image URL of the product, if available, otherwise null.")]),t("tr",null,[t("td",null,"created_at"),t("td",null,"String"),t("td",null,"The timestamp when the product was created.")]),t("tr",null,[t("td",null,"updated_at"),t("td",null,"String"),t("td",null,"The timestamp when the product was last updated.")]),t("tr",null,[t("td",null,"is_freeze"),t("td",null,"String"),t("td",null,' A flag indicating whether the product is in freeze status (e.g., "0" for not frozen). ')]),t("tr",null,[t("td",null,"full_image"),t("td",null,"Null or String"),t("td",null," The full image URL of the product, if available, otherwise null. ")]),t("tr",null,[t("td",null,"total_qty"),t("td",null,"String"),t("td",null,"The total quantity of the product available in storage.")]),t("tr",null,[t("td",null,"specs"),t("td",null,"Array"),t("td",null," An array of IDs representing the specifications of the product. ")]),t("tr",null,[t("td",null,"storage_price_type"),t("td",null,"Object"),t("td",null,' The type of storage price associated with the product represented as an object with "id" and "description" fields. ')]),t("tr",null,[t("td",null,"colour"),t("td",null,"Null or String"),t("td",null,"The color of the product, if available, otherwise null.")])],-1);function C(o,D,G,I,U,z){const i=a("TheEnviromentSelecter");return c(),h(_,{class:"ma-4 pa-6"},{default:l(()=>[S,e(i),e(r,{class:"ma-2"}),e(n,null,{default:l(()=>[p("The Safe Storage feature is a service offered by VANEX API that allows you to securely store your valuable packages for a specified period. It provides a convenient and reliable solution for businesses that need a secure storage facility for their items without the hassle of maintaining a storage space themselves. ")]),_:1}),t("div",null,[b,e(r,{class:"ma-2"}),y,T,w,t("ul",x,[t("li",null,[e(n,null,{default:l(()=>[t("code",null,u(o.activeEnviroment||"(Chose an Enviroment)")+"/safe-storage/products",1)]),_:1})])]),k,q,E,t("ul",A,[t("li",null,[e(n,null,{default:l(()=>[t("code",null,u(o.activeEnviroment||"(Chose an Enviroment)")+"/safe-storage/products",1)]),_:1})])]),V,e(n,null,{default:l(()=>[N]),_:1}),P,e(g,{density:"compact"},{default:l(()=>[R,j]),_:1})])]),_:1})}const O=d(v,[["render",C]]);export{O as default};
