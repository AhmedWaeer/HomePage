import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { SectionTitle } from '../../styles/GlobalComponents';
import { Img } from '../Projects/ProjectsStyles';
import { myPic } from '../../constants/constants';




const Header = () => ( <
    div className = "flex justify-between mt-10" >
    < SectionTitle className="ml-10 lg:ml-0 top" >
    Ahmed Abdo < /SectionTitle> <
    div className = "pic" >

    <
    Img src = { myPic.me }
    className = "rounded-full" /
    >

    <
    /div>  <
    style jsx > { `
    .pic {
      max-width: 150px;
      
    }
    .top{
      margin-top: 100px;
    }

  ` } < /style> < /
    div >
);

export default Header;
