import React from 'react';

// CSS
import './index.css';

// Imo programatically creating these divs would be more unreadable and unmaintainable than just naming them individually 
const HelloWorld = () => (
        <div className="Spinner">
                <div className="rect1"/>
                <div className="rect2"/>
                <div className="rect3"/>
                <div className="rect4"/>
                <div className="rect5"/>
        </div>
);

export default HelloWorld;