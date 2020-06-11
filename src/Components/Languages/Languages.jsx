import React from 'react';
import classes from './Languages.module.css';
import { Route, NavLink } from 'react-router-dom';


const Languages = (props) => {
    return (
        <div className={classes.languages}>
            <div className={classes.language}>
                <NavLink to="/ru" activeClassName={classes.active}>RU</NavLink>
            </div>
            <div className={classes.language}>
                <NavLink to="/ua" activeClassName={classes.active}>UA</NavLink>
            </div>
            <div className={classes.language}>
                <NavLink to="/en" activeClassName={classes.active}>EN</NavLink>
            </div>
        </div>
    );
}

export default Languages;
