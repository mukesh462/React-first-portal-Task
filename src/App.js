import React from "react";
import "./style.css";
import Pricepanel from "./pricelist"

export default function App() {

const data=[{
price:"FREE",
month:"0",
user:"Single User",
Data:"5GB Storage",
project:"Unlimited Public Projects",
Community:"Community Access",
privateproject:false,
support:false,
subdomain:false,
report:false
},
{
  price:"Plus",
  month:9,
  user:"5 User",
  Data:"50GB Storage",
  project:"Unlimited Public Projects",
  Community:"Community Access",
  privateproject:"Unlimited Private Project",
  support:"Dedicated Phone support",
  subdomain:"Free Subdomain",
  report:true
  },
  
  {
    price:"Pro",
    month:49,
    user:"Unlimited User",
    Data:"150GB Storage",
    project:"Unlimited Public Projects",
    Community:"Community Access",
    privateproject:"Unlimited Private Project",
    support:"Dedicated Phone support",
    subdomain:"Free Subdomain",
    report:"Monthly Status Reports"
    },{
      price:"Weekly",
      month:"1.5",
      user:"Single User",
      Data:"1GB Storage",
      project:false,
      Community:true,
      privateproject:false,
      support:true,
      subdomain:false,
      report:true
      }
    
]



  return (
    <div >
      {data.map(item=><Pricepanel card={item} /> )}
     
    </div>
  );
}
