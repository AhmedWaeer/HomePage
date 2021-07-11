import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import {List,ListItem,ListContainer,ListParagraph,ListIcon,ListTitle} from '../Technologies/TechnologiesStyles';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';

const Projects = () => ( 
<Section>
<SectionDivider divider />
    <SectionTitle > Projects < /SectionTitle> 

    <GridContainer > {
        projects.map((p, i) => {
            return (
                 <BlogCard >
                <div className = "rounded overflow-hidden shadow-lg" key = { i } >
                <Img src = { p.image }/> 
                 <div className="mt-10 mb-10" > 
                 <div className = "text-black font-bold text-3xl mt-5 font-sans" > { p.title } < /div>  
                  </div >
                   <div className = "text-black font-sans p-5" > { p.description } < /div > 
                  <TitleContent > Stack </TitleContent> 

                <div className = "flex flex-col float-left" >
                <ExternalLinks href = { p.visit } > Code < /ExternalLinks> < ExternalLinks href = { p.source } > Source < /ExternalLinks >
                  </div>
                </div >
                </BlogCard>
            );
        })
    } 
    </GridContainer>  
    <SectionTitle>Others</SectionTitle>
    <SectionText>
        During my Software development learing period i have created websites for clients and NGOS(volunteering) here we go some of my work.
       
        <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Local Brands and Artists</ListTitle>
          <ListParagraph>
          <a href="https://talparec.com/" className="font-bold text-red-400 hover:bg-blue-300"> talparec </a> <br />
          <a href="http://gomar.net/" className="font-bold text-red-400 hover:bg-blue-300"> gomar </a>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Human rights and engaged NGOs</ListTitle>
          <ListParagraph>
           <a href="https://www.arabfilmnetwork.com/" className="font-bold text-red-400 hover:bg-blue-300"> arabfilmnetwork</a> <br />
           <a href="https://ma3mal612.com/" className="font-bold text-red-400 hover:bg-blue-300"> ma3mal612</a>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    
          </SectionText>
    </Section >
);



export default Projects;
