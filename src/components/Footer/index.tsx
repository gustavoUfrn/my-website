import { ContactIcons, FooterContainer, ContactNav, FooterNav } from "./styles";

import { InstagramLogo, LinkedinLogo, WhatsappLogo, GithubLogo } from "phosphor-react";

export function Footer() {

    const logo = "<Gustavo/>"

    return (
        <>
            <FooterContainer>
                <ContactNav>
                    <div>
                        <a href="#">{logo}</a>
                    </div>
                    <FooterNav>
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Projects</a>
                        <a href="#">Contact</a>
                    </FooterNav>
                </ContactNav>
                <div>
                    <ContactIcons>
                        <InstagramLogo size={30}/>
                        <WhatsappLogo size={30}/>
                        <GithubLogo size={30}/>
                        <LinkedinLogo size={30}/>
                    </ContactIcons>
                    <p>Created by Gustavo Alessandro</p>
                </div>
            </FooterContainer>
        </>
    )
}