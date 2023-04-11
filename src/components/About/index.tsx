import aboutPhoto from '../../assets/about-photo.png'
import { AboutContainer, AboutContent, AboutText, AboutIcons } from './styles'

export function About() {
    return (
        <AboutContainer>
            <AboutContent>
                <div>
                    <img src={aboutPhoto} />
                </div>
                <AboutText>
                    <h1>About</h1>
                    <p>
                        Hello world, my name is Gustavo Alessandro ,
                        I'm form Brazil and computer technician by IFRN and Bachelor in Information
                        Technology on progress. I have experience with Web development with Node and
                        React and had contact with other languages such as css, html, js, ts, c, c++,
                        c#, python and php.
                    </p>
                    <AboutIcons>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                    </AboutIcons>
                </AboutText>
            </AboutContent>
        </AboutContainer>
    )
}