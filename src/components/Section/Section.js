import React from "react";
import PropTypes from "prop-types";
import './Section.css';

const Section = ({ title, children }) => (
    <section>
        <h1 className="title">{title}</h1>
        {children}
    </section>
);
 
Section.propsTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Section;