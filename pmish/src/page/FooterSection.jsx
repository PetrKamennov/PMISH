import React from "react";
import "./FooterSection.css";
import logo from "../image/logo.png";
import gps from "../image/gps.png";
import phone from "../image/phone.png";
import mail from "../image/mail.png";


function FooterSection(){
    return(
        <div className="footer-section" id="four">
            <div className="footer-section_left-block left-footer">
                <h2 className="left-footer_title">Партнеры</h2>
                <div className="left-footer_partners partner-block">
                    <div className="partner-block_left">
                        <img src={logo} alt="" className="partner-block_left-img" />
                        <img src={logo} alt="" className="partner-block_left-img" />
                    </div>
                    <div className="partner-block_right">
                        <img src={logo} alt="" className="partner-block_left-img" />
                        <img src={logo} alt="" className="partner-block_left-img" />
                    </div>
                </div>
            </div>
            <div className="footer-section_right-block right-footer">
                <h2 className="right-footer_title">Контакты</h2>
                <div className="right-footer_contacts">
                    <img src={phone} alt="" className="right-footer_contacts-logo" />
                    <span className="right-footer_contacts-txt">8 (800) 555 35-35</span>
                </div>
                <div className="right-footer_contacts">
                    <img src={mail} alt="" className="right-footer_contacts-logo" />
                    <span className="right-footer_contacts-txt">pish@mail.ru</span>
                </div>
                <div className="right-footer_contacts">
                    <img src={gps} alt="" className="right-footer_contacts-logo" />
                    <span className="right-footer_contacts-txt">г. Самара, ул. Ленинградская 49</span>
                </div>
            </div>
        </div>
    )
}

export default FooterSection;