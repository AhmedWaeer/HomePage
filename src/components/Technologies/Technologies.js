import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies and Skills</SectionTitle>
    <SectionText>
    Here you will find a list of some of my skills i have gained throughout my journey and that I am continually working on.
    </SectionText>
    <div className="p-5 lg:p-0 text-4xl text-black font-light list-disc ">
    <SectionText>
      <ul className="" >
        <li className="list-disc p-2">Building modern, reactive frontends/UIs with<span className="text-white font-bold bg-blue-800 rounded-md"> React </span>, including packages and libraries such as Create React App, Redux, React Router, React Helmet.</li>
        <li className="list-disc p-2">Building backends and RESTful APIs using<span className="text-white font-bold bg-blue-800 rounded-md">  NodeJS  </span>, including packages and libraries such as Express, Sequelize, Mongoose, Webpack.</li>
        <li className="list-disc p-2">Modern<span className="text-white font-bold  bg-blue-800 rounded-md"> HTML </span> and<span className="text-white font-bold bg-blue-800 rounded-md">  CSS </span>, including libraries such as Bootstrap, Material UI, Ant Design, TailwindCSS, styled-components, emotion.</li>
        <li className="list-disc p-2">Learning the<span className="text-white font-bold bg-blue-800 rounded-md"> JAMstack </span>  architecture/philosophy using React frameworks such as<span className="text-white font-bold bg-blue-800 rounded-md">  GatsbyJS </span>and <span className="text-white font-bold bg-blue-800 rounded-md">  NextJS </span> and deploying to CDNs like<span className="text-white font-bold bg-blue-800 rounded-md">  Netlify</span>.</li>
        <li className="list-disc p-2">Very good understanding of<span className="text-white font-bold bg-blue-800 rounded-md">  Algorithms  </span>  and <span className="text-white font-bold bg-blue-800 rounded-md">  Data structures  </span>.</li>
        <li className="list-disc p-2">Good knowledge of<span className="text-white font-bold bg-blue-800 rounded-md"> Java </span>.</li>
        <li className="list-disc p-2">Good knowledge of<span className="text-white font-bold bg-blue-800 rounded-md"> Hibernate/JPA </span>and database queries</li>
        <li className="list-disc p-2">Knowledge of using the<span className="text-white font-bold bg-blue-800 rounded-md"> Spring framework </span>/<span className="text-white font-bold bg-blue-800 rounded-md">  Spring Boot </span>.</li>
        <li className="list-disc p-2">Creating interactive documentation for API using<span className="text-white font-bold bg-blue-800 rounded-md">  Swagger</span>.</li>
        <li className="list-disc p-2">I Speak<span className="text-white font-bold bg-blue-800 rounded-md"> German </span>,<span className="text-white font-bold bg-blue-800 rounded-md"> English </span>and<span className="text-white font-bold bg-blue-800 rounded-md"> Arabic </span> is My Mother Language.</li>
      </ul>
      </SectionText>

    </div>


 
</Section>
);
export default Technologies;
