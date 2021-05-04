import React from 'react';
import { FaPhone, FaFacebookF, FaGlobe } from 'react-icons/fa';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Footer() {
    return (
        <>
        <div className="top_footer">
            <h6>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h6>
            <p className="top_footerContent">CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER & WASTE WATER <span>|</span> OILS & GAS <span>|</span> PHARMA <span>|</span> SUGARS & DISTILLERIES <span>|</span> PAPER & PULP <span>|</span> MARINE & DEFENCE <span>|</span> METAL & MINING <span>|</span> FOOD & BEVERAGE <span>|</span> PETROCHEMICAL & REFINERIES <span>|</span> SOLAR <span>|</span> BUILDING <span>|</span> HVAC <span>|</span> FIRE FIGHTING <span>|</span> AGRICULTURE & RESIDENTIAL</p>
        </div>
        <div className="bottom_footer">
           
                <div className="bottom_footerIcon">
                        <a href="#"><FaPhone className="footer_icon" /></a>
                        <p>Toll free 1800 200 1234</p>
                </div>
                <div className="bottom_footerIcon">
                    <a href="#" target="_blank"><FaFacebookF className="footer_icon" /></a>
                    <p>w.w.w.facebook.com/cripumps</p>
                </div>
                <div className="bottom_footerIcon">
                    <a href="#" target="_blank"><FaGlobe className="icon_globe" /></a>
                    <p>w.w.w.facebook.com/cripumps</p>
                </div>
            </div>
        
        </>
    )
}

export default Footer
