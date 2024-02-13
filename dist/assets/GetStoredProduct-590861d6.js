import{_ as a,m as c,r as p,o as h,c as _,w as n,a as e,b as r,V as i,d as t,t as d}from"./index-a977af96.js";import{T as m,u as f}from"./TheEnviromentSelecter-f0ed81b1.js";import{V as g,a as l}from"./VCard-06dac4c7.js";import{V as s}from"./VTable-b3a8d084.js";const y={components:{TheEnviromentSelecter:m},computed:{...c(f,["activeEnviroment"])}},b=t("div",{class:"mb-2 text-h3",align:"center"},"Safe Storage Features",-1),v=t("div",{class:"ma-2 text-h4"},"Get Stored Product",-1),T=t("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Brief description: ",-1),S=t("ul",{class:"ml-5"},[t("li",null," This endpoint retrieves detailed information about a specific stored product identified by its product ID. The stored product represents a record of a product that is currently stored. want to retrieve. ")],-1),x=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request URL:",-1),w={class:"ml-5"},k=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Method:",-1),q=t("ul",{class:"ml-5"},[t("li",null,"GET")],-1),E=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Request example:",-1),N={class:"ml-5"},P=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Query Params:",-1),V=t("thead",{style:{"background-color":"lightblue"}},[t("tr",null,[t("th",{class:"text-left"},"Query Params"),t("th",{class:"text-left"},"Required"),t("th",{class:"text-left"},"Type"),t("th",{class:"text-left"},"Expanation")])],-1),R=t("tbody",null,[t("tr",null,[t("td",null,"id"),t("td",null,"yes"),t("td",null,"Number"),t("td",null,"id of the Product")])],-1),j=t("div",{class:"text-subtitle-1 font-weight-black mt-3"},"Return example:",-1),A=t("code",null,[t("pre",{class:"overflow-x-auto"},`{
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
        {
            "id": 147,
            "name": "باور بانك",
            "marketing_store": "1",
            "product_code": "21332132",
            "product_type": {
                "id": 2,
                "description": "كهربية"
            },
            "product_stor_class": "7",
            "color": "أحمر",
            "color_id": null,
            "length": "35.00",
            "width": "35.00",
            "height": "35.00",
            "unit": "cm",
            "box_qty": "1",
            "expiry_date": "2023-01-01",
            "importing_date": "2022-12-31",
            "min_stock": "25",
            "company": "ال جي العرب",
            "unit_price": "1200.00",
            "notes": null,
            "image": null,
            "created_at": "2022-06-27T22:41:23.000000Z",
            "updated_at": "2022-06-27T22:41:23.000000Z",
            "is_freeze": "0",
            "full_image": "https://api.vanextest.com.ly/assets/img/product-placeholder.jpg",
            "total_qty": "69",
            "specs": [
                "1",
                "2",
                "4",
                "5"
            ],
            "storage_price_type": {
                "id": 7,
                "description": "عناية عادية"
            },
            "colour": null
        },
        {
            "id": 161,
            "name": "test",
            "marketing_store": "1",
            "product_code": "test",
            "product_type": {
                "id": 1,
                "description": "مواد منزلية"
            },
            "product_stor_class": "7",
            "color": null,
            "color_id": "1",
            "length": "35.00",
            "width": "35.00",
            "height": "35.00",
            "unit": "cm",
            "box_qty": "1",
            "expiry_date": "2023-08-06",
            "importing_date": "2023-08-06",
            "min_stock": "3",
            "company": "test",
            "unit_price": "111.00",
            "notes": "test",
            "image": null,
            "created_at": "2023-08-02T12:31:48.000000Z",
            "updated_at": "2023-08-02T12:31:48.000000Z",
            "is_freeze": "0",
            "full_image": "https://api.vanextest.com.ly/assets/img/product-placeholder.jpg",
            "total_qty": 0,
            "specs": [
                "3",
                "2",
                "1",
                "4",
                "5",
                "6"
            ],
            "storage_price_type": {
                "id": 7,
                "description": "عناية عادية"
            },
            "colour": {
                "id": 1,
                "name": "أبيض"
            }
        }
    ],
    "errors": false,
    "code": null
}
          `)],-1),z=t("div",{class:"text-subtitle-1 font-weight-black mt-3"}," Response body description: ",-1),D=t("thead",{style:{"background-color":"lightblue"}},[t("tr",null,[t("th",{class:"text-left"},"Parameter"),t("th",{class:"text-left"},"Type"),t("th",{class:"text-left"},"Expanation")])],-1),I=t("tbody",null,[t("tr",null,[t("td",null,"id"),t("td",null,"Number"),t("td",null,"The unique identifier of the stored product.")]),t("tr",null,[t("td",null,"name"),t("td",null,"String"),t("td",null,' The name of the stored product (e.g., "لابتوب" for a laptop). ')]),t("tr",null,[t("td",null,"marketing_store"),t("td",null,"String"),t("td",null,"The ID of the marketing store associated with the product.")]),t("tr",null,[t("td",null,"product_code"),t("td",null,"String"),t("td",null," The unique product code or SKU (Stock Keeping Unit) for identification. ")]),t("tr",null,[t("td",null,"product_type"),t("td",null,"Object"),t("td",null,' The type of the product represented as an object with "id" and "description" fields. ')]),t("tr",null,[t("td",null,"product_stor_class"),t("td",null,"String"),t("td",null,' The class/category of the stored product (e.g., "9" for a specific storage class). ')]),t("tr",null,[t("td",null,"color"),t("td",null,"String"),t("td",null,"The color of the product.")]),t("tr",null,[t("td",null,"color_id"),t("td",null,"Null or String"),t("td",null,"The ID of the color, if available, otherwise null.")]),t("tr",null,[t("td",null,"length"),t("td",null,"String"),t("td",null,"The length of the product in centimeters (cm).")]),t("tr",null,[t("td",null,"width"),t("td",null,"String"),t("td",null,"The width of the product in centimeters (cm).")]),t("tr",null,[t("td",null,"height"),t("td",null,"String"),t("td",null,"The height of the product in centimeters (cm).")]),t("tr",null,[t("td",null,"unit"),t("td",null,"String"),t("td",null,' The unit of measurement for the dimensions (e.g., "cm" for centimeters). ')]),t("tr",null,[t("td",null,"box_qty"),t("td",null,"String"),t("td",null,"The quantity of the product per box.")]),t("tr",null,[t("td",null,"expiry_date"),t("td",null,"String"),t("td",null,"The date when the product is set to expire.")]),t("tr",null,[t("td",null,"importing_date"),t("td",null,"String"),t("td",null,"The date when the product was imported or added to storage.")]),t("tr",null,[t("td",null,"min_stock"),t("td",null,"String"),t("td",null,"The minimum stock level required for this product.")]),t("tr",null,[t("td",null,"company"),t("td",null,"String"),t("td",null,"The company or manufacturer of the product.")]),t("tr",null,[t("td",null,"unit_price"),t("td",null,"String"),t("td",null,"The unit price of the product.")]),t("tr",null,[t("td",null,"notes"),t("td",null,"Null or String"),t("td",null," Additional notes or comments about the product, if available. ")]),t("tr",null,[t("td",null,"image"),t("td",null,"Null or String"),t("td",null,"The image URL of the product, if available, otherwise null.")]),t("tr",null,[t("td",null,"created_at"),t("td",null,"String"),t("td",null,"The timestamp when the product was created.")]),t("tr",null,[t("td",null,"updated_at"),t("td",null,"String"),t("td",null,"The timestamp when the product was last updated.")]),t("tr",null,[t("td",null,"is_freeze"),t("td",null,"String"),t("td",null,' A flag indicating whether the product is in freeze status (e.g., "0" for not frozen). ')]),t("tr",null,[t("td",null,"full_image"),t("td",null,"Null or String"),t("td",null," The full image URL of the product, if available, otherwise null. ")]),t("tr",null,[t("td",null,"total_qty"),t("td",null,"String"),t("td",null,"The total quantity of the product available in storage.")]),t("tr",null,[t("td",null,"specs"),t("td",null,"Array"),t("td",null," An array of IDs representing the specifications of the product. ")]),t("tr",null,[t("td",null,"storage_price_type"),t("td",null,"Object"),t("td",null,' The type of storage price associated with the product represented as an object with "id" and "description" fields. ')]),t("tr",null,[t("td",null,"colour"),t("td",null,"Null or String"),t("td",null,"The color of the product, if available, otherwise null.")])],-1);function Z(o,C,U,B,G,$){const u=p("TheEnviromentSelecter");return h(),_(g,{class:"ma-4 pa-6"},{default:n(()=>[b,e(l,{type:"error"},{default:n(()=>[r(" Problem with the end Point ")]),_:1}),e(u),e(i,{class:"ma-2"}),e(l,null,{default:n(()=>[r("The Safe Storage feature is a service offered by VANEX API that allows you to securely store your valuable packages for a specified period. It provides a convenient and reliable solution for businesses that need a secure storage facility for their items without the hassle of maintaining a storage space themselves. ")]),_:1}),t("div",null,[v,e(i,{class:"ma-2"}),T,S,x,t("ul",w,[t("li",null,[e(l,null,{default:n(()=>[t("code",null,d(o.activeEnviroment||"(Chose an Enviroment)")+"/safe-storage/products",1)]),_:1})])]),k,q,E,t("ul",N,[t("li",null,[e(l,null,{default:n(()=>[t("code",null,d(o.activeEnviroment||"(Chose an Enviroment)")+"/safe-storage/products?id=146",1)]),_:1})])]),P,e(s,{density:"compact"},{default:n(()=>[V,R]),_:1}),j,e(l,null,{default:n(()=>[A]),_:1}),z,e(s,{density:"compact"},{default:n(()=>[D,I]),_:1})])]),_:1})}const F=a(y,[["render",Z]]);export{F as default};
