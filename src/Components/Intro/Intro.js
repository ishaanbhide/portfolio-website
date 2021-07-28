import React from 'react'
import "./Intro.scss"
import { init } from "ityped";
import { useEffect, useRef } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Ishaan Bhide"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
        <div className="leftIntro">
            <div className="text">
                <h2>Hi there, I'm</h2>
                <h1><span ref={textRef}></span></h1>
                <h3>Software Engineering Student at UoA</h3>
            </div>
        </div>

        <div className="rightIntro">
            <div className="rightContent">
                <a href="#skills"><ExpandMoreIcon className="downBtn" fontSize="large"/></a>
            </div>
        </div>
        
    </div>
  );
}