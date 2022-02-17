import React from "react"

function Pricepanel(prop){

return(

<section class="pricing py-5">
  <div class="container">
    <div class="row">
    
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{prop.card.price}</h5>
            <h6 class="card-price text-center h2">${prop.card.month}<span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{prop.card.user}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{prop.card.Data}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{prop.card.project}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
            {prop.card.privateproject==false ?  <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i> </span>Unlimited Private Projects
             </li>:  <li class=""><span class="fa-li"> <i class="fas fa-check"></i></span>Unlimited Private Projects</li>}
             {prop.card.support==false ?  <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i> </span>Dedicated Phone  Support
             </li>:  <li class=""><span class="fa-li"> <i class="fas fa-check"></i></span>Dedicated Phone  Support</li>}
             {prop.card.subdomain==false ?  <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i> </span>Free Subdomain
             </li>:  <li class=""><span class="fa-li"> <i class="fas fa-check"></i></span>Free Subdomain</li>}
              
             {prop.card.report==false ?  <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i> </span>Monthly Status
                Reports
             </li>:  <li class=""><span class="fa-li"> <i class="fas fa-check"></i></span>Monthly Status
                Reports</li>}
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
   </div>
    </div>
</section>

  
)

}
export default Pricepanel;