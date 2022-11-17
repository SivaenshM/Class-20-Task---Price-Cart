import React from 'react'
// imported Check and time Favivons from react-icons
import { FaCheck, FaTimes } from "react-icons/fa";

// Benifits component to render benifits of plan
const Benifits = ({cardName}) => {
    //Free card and benifits
    if(cardName==="FREE") {
        return(
            <div>
                <li><span><FaCheck/></span>Single User</li>
                <li><span><FaCheck/></span>5GB Storage</li>
                <li><span><FaCheck/></span>Unlimited Public Projects</li>
                <li><span><FaCheck/></span>Community Access</li>
                <li className="text-muted"><span><FaTimes/></span>Unlimited Private Projects</li>
                <li className="text-muted"><span><FaTimes/></span>Dedicated Phone Support</li>
                <li className="text-muted"><span><FaTimes/></span>Free Subdomain</li>
                <li className="text-muted"><span><FaTimes/></span>Monthly Status Reports</li>
            </div>

        )
        //Plus card and benifits
    }else if(cardName==="PLUS") {
        return (
            <div>
                <li><span><FaCheck/></span><strong>5 Users</strong></li>
                <li><span><FaCheck/></span>50GB Storage</li>
                <li><span><FaCheck/></span>Unlimited Public Projects</li>
                <li><span><FaCheck/></span>Community Access</li>
                <li><span><FaCheck/></span>Unlimited Private Projects</li>
                <li><span><FaCheck/></span>Dedicated Phone Support</li>
                <li><span><FaCheck/></span>Free Subdomain</li>
                <li className="text-muted"><span><FaTimes/></span>Monthly Status Reports</li>
            </div>
        )
        //pro card and benifits
    }else{
        return(
            <div>
                <li><span><FaCheck/></span><strong>Unlimited Users</strong></li>
                <li><span><FaCheck/></span>150GB Storage</li>
                <li><span><FaCheck/></span>Unlimited Public Projects</li>
                <li><span><FaCheck/></span>Community Access</li>
                <li><span><FaCheck/></span>Unlimited Private Projects</li>
                <li><span><FaCheck/></span>Dedicated Phone Support</li>
                <li><span><FaCheck/></span><strong>Unlimited</strong> Free Subdomains</li>
                <li><span><FaCheck/></span>Monthly Status Reports</li>
            </div>
        )

    }
}


export default Benifits