import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import classes from '../Css.module.css';
import { NavLink, Switch, useParams, useLocation } from 'react-router-dom';

const Menu = styled.div`
    width: 100%;
    height: 110vh;
    position: fixed;
    background-color: rgba(255,60,0,0.9);
    transition-duration: 0.3s;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: -60px;
    right: 0;
    z-index: 90;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    color: white;
    font-size: 60px;
    overflow-x: hidden;


    a{
        margin-bottom: 35px;
        margin-right: 120px;
        font-weight: 900;
    }
    .navM{
        display: none;
    }
    .nav{
        display: flex;
        flex-direction: column;
    }
    #lang{
        display: none;
    }
    @media screen and (max-width: 768px){
        font-size: 45px;
    }
    @media screen and (max-width: 700px){
        font-size: 25px;
        margin-right: 0;
        padding-top: 30px;

        .nav{
            display: none;
        }
        .navM{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            margin-top: 150px;
        }
        a{
            margin-bottom: 25px;
            margin-right: 30px;
            font-weight: 900;
        }
        #lang{
            display: flex;
            width: 100%;
            align-self: flex-end;
            justify-content: space-evenly;
            margin-top: 30%;
        }
        #lang a{
            margin: 0;

        }
    }
    @media screen and (max-width: 375px){
        font-size: 20px;

        .navM{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            margin-top: 110px;
        }
        
        #lang{
            margin-top: 10%;
        }

        #lang a{
            font-size: 20px;
        }
    }
`;

const BurgerMenu = ({ open, setOpen }) => {
    let id = useLocation();
    return (
        
        <>
        
        <Menu open={open}>
            {id.pathname == "/ru" ? 
            <>
            <div className="nav">
                <Link to="home" smooth={true} duration={1000} className="link">Главная</Link>
                <Link to="services" smooth={true} duration={1000} className="link">Услуги</Link>
                <Link to="portfolio" smooth={true} duration={1000} className="link">Портфолио</Link>
                <Link to="pain" smooth={true} duration={1000} className="link">Боли наших клиентов</Link>
                <Link to="blog" smooth={true} duration={1000} className="link">Блог</Link>
                <Link to="contact" smooth={true} duration={1000} className="link">Контакты</Link>
            </div>
            <div className="navM">
                <Link to="homeM" smooth={true} duration={1000} className="linkM">Главная</Link>
                <Link to="servicesM" smooth={true} duration={1000} className="linkM">Услуги</Link>
                <Link to="portfolioM" smooth={true} duration={1000} className="linkM">Портфолио</Link>
                <Link to="painM" smooth={true} duration={1000} className="linkM">Боли наших клиентов</Link>
                <Link to="blogM" smooth={true} duration={1000} className="linkM">Блог</Link>
                <Link to="contactM" smooth={true} duration={1000} className="linkM">Контакты</Link>
            </div>
            
            </>
            : id.pathname == "/ua" ?
            <>
            <div className="nav">
                <Link to="home" smooth={true} duration={1000} className="link">Головна</Link>
                <Link to="services" smooth={true} duration={1000} className="link">Послуги</Link>
                <Link to="portfolio" smooth={true} duration={1000} className="link">Портфоліо</Link>
                <Link to="pain" smooth={true} duration={1000} className="link">Болі наших клієнтів</Link>
                <Link to="blog" smooth={true} duration={1000} className="link">Блог</Link>
                <Link to="contact" smooth={true} duration={1000} className="link">Контакти</Link>
            </div>
            <div className="navM">
                <Link to="homeM" smooth={true} duration={1000} className="linkM">Головна</Link>
                <Link to="servicesM" smooth={true} duration={1000} className="linkM">Послуги</Link>
                <Link to="portfolioM" smooth={true} duration={1000} className="linkM">Портфоліо</Link>
                <Link to="painM" smooth={true} duration={1000} className="linkM">Болі наших клієнтів</Link>
                <Link to="blogM" smooth={true} duration={1000} className="linkM">Блог</Link>
                <Link to="contactM" smooth={true} duration={1000} className="linkM">Контакти</Link>
            </div>
            
            </>
            : 
            <>
            <div className="nav">
                <Link to="home" smooth={true} duration={1000} className="link">Home</Link>
                <Link to="services" smooth={true} duration={1000} className="link">Services</Link>
                <Link to="portfolio" smooth={true} duration={1000} className="link">Portfolio</Link>
                <Link to="pain" smooth={true} duration={1000} className="link">Pain of our customers</Link>
                <Link to="blog" smooth={true} duration={1000} className="link">Blog</Link>
                <Link to="contact" smooth={true} duration={1000} className="link">Contacts</Link>
            </div>
            <div className="navM">
                <Link to="homeM" smooth={true} duration={1000} className="linkM">Home</Link>
                <Link to="servicesM" smooth={true} duration={1000} className="linkM">Services</Link>
                <Link to="portfolioM" smooth={true} duration={1000} className="linkM">Portfolio</Link>
                <Link to="painM" smooth={true} duration={1000} className="linkM">Pain of our customers</Link>
                <Link to="blogM" smooth={true} duration={1000} className="linkM">Blog</Link>
                <Link to="contactM" smooth={true} duration={1000} className="linkM">Contacts</Link>
            </div>
            
            </>
            }

            <div className={classes.languages} id="lang">
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
        
        
        
        </Menu>
        </>
    );
}

export default BurgerMenu;