import React from 'react';

import { Section, SectionText, SectionTitle ,SectionDivider} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';


const Hero = () => ( 

<Section>
<SectionDivider divider />

    <SectionTitle > About Me < /SectionTitle>
    
     < SectionText >
    I am a Software developer with Engineering Background and experiance in automation technology, industrial automation, and Account Management. My work experiance in different fields has allowed me to grow as a professional and gain so many skills that shape the person who i am now.
    </ SectionText>
    < SectionText >
    My passion for Tech and programming was the main driver of spending hours coding and learning new technologies, frameworks, algorithms, and data structures and getting to know what is happening under the hood. This is what I call enthusiasm.
    </ SectionText>
    < SectionText >
    I had the opportunity of being mentored and coached by highly qualified software engineers working in Europe during my software development learning period, which allowed me to level up my coding skills and learn coding best practices.
    </ SectionText>
    < SectionText >
    I consider myself a lucky person to have the opportunity to work as an Account Manager at Chevron, one of the leaders in Oil and gas market worldwide, which has strengthened my communication skills and discipline as well as working as an Automation Engineer at Beyti, which allowed me to take my technical knowledge to the next level.
    </ SectionText>
    < SectionText >
     You can reach me on <a href="https://github.com/AhmedWaeer" className="font-bold text-indigo-800">GitHub</a>  / <a href="https://www.linkedin.com/in/ahmed-abdo-11b54562/" className="font-bold text-indigo-800 ">LinkedIn</a>. Scroll a bit further down to have a look at my skills and my most recent projects.
    </ SectionText>
    
</Section>
);

export default Hero;