import React from 'react';
import classes from '../Css.module.css';
import mobile from '../Mobile.module.css';
import Languages from '../Languages/Languages';
import { NavLink } from 'react-router-dom';
import {Link} from 'react-scroll';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import logo from '../../assets/images/logo.png';
import key from '../../assets/images/key.png';
import set from '../../assets/images/set.png';
import horse from '../../assets/images/horse.png';
import triangle_left from '../../assets/images/triangle_left.png';
import triangle_right from '../../assets/images/triangle_right.png';
import audit from '../../assets/images/audit.png';
import strategy from '../../assets/images/strategy.png';
import smm from '../../assets/images/smm.png';
import pc from '../../assets/images/pc.png';
import pazzle from '../../assets/images/pazzle.png';
import gift from '../../assets/images/gift.png';
import parimatch from '../../assets/images/parimatch.png';
import dog from '../../assets/images/dog.png';
import lothub from '../../assets/images/lothub.png';
import euralis from '../../assets/images/euralis.png';
import minimax from '../../assets/images/minimax.png';
import crewshop from '../../assets/images/crewshop.png';
import ukrenergo from '../../assets/images/ukrenergo.png';
import ukrposhta from '../../assets/images/ukrposhta.png';
import newposhta from '../../assets/images/newposhta.png';
import health from '../../assets/images/health.png';
import redelipse from '../../assets/images/redelipse.png';
import wave1 from '../../assets/images/wave1.png';
import wave2 from '../../assets/images/wave2.png';
import wave3 from '../../assets/images/wave3.png';
import wave4 from '../../assets/images/wave4.png';
import wave5 from '../../assets/images/wave5.png';
import wave6 from '../../assets/images/wave6.png';
import service1 from '../../assets/images/service1.png';
import service2 from '../../assets/images/service2.png';
import service3 from '../../assets/images/service3.png';
import service4 from '../../assets/images/service4.png';
import triagnle_blue from '../../assets/images/triangle_blue.png';
import blog from '../../assets/images/blogItem.png';
import fb from '../../assets/images/fb.png';
import tg from '../../assets/images/tg.png';


import parimatch_mobile from '../../assets/images/mobile/parimatch.png';
import dog_mobile from '../../assets/images/mobile/dog.png';
import lothub_mobile from '../../assets/images/mobile/lothub.png';
import euralis_mobile from '../../assets/images/mobile/euralis.png';
import minimax_mobile from '../../assets/images/mobile/minimax.png';
import crewshop_mobile from '../../assets/images/mobile/crewshop.png';
import ukrenergo_mobile from '../../assets/images/mobile/ukrenergo.png';
import ukrposhta_mobile from '../../assets/images/mobile/ukrposhta.png';
import newposhta_mobile from '../../assets/images/mobile/newposhta.png';
import health_mobile from '../../assets/images/mobile/health.png';
import blogItem_mobile from '../../assets/images/mobile/blogItem.png';

import logoMobile from '../../assets/images/mobile/logoMobile.png';
import Burger from '../Burger/Burger';
import triangle_bot from '../../assets/images/mobile/triangle_bot.png';

const En = (props) => {

    useEffect(() => {
        Aos.init({duration: 1000});
    },[]);

    return (
        <>
        <div className={classes.main}>

            {/* HOME */}

            <div className={classes.home} id="home">
                <div className={classes.container}>
                    <div className={classes.navbar}>
                        <img src={logo} />
                        <div className={classes.menu}>
                            <Link to="services" smooth={true} duration={1000}>Services</Link>
                            <Link to="portfolio" smooth={true} duration={1000}>Portfolio</Link>
                            <Link to="pain" smooth={true} duration={1000}>Pain of our customers</Link>
                            <Link to="blog" smooth={true} duration={1000}>Blog</Link>
                            <Link to="contact" smooth={true} duration={1000}>Contact</Link>
                        </div>
                        <Languages />
                    </div>
                    <div className={classes.navbarIpad}>
                        <img src={logoMobile} />
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
                        <Burger/>
                    </div>
                    <h1 className={classes.headerHome} data-aos="fade-right">YOUR MARKETING
                                              <br></br>OUTSOURCE TEAM</h1>
                    <h1 className = {classes.headerHomeIpad} data-aos = "fade-right"> YOUR OUTSOURCE MARKETING TEAM <br/> </h1>
                    <div className={classes.weare}>
                        <div className={classes.weareItem} data-aos="fade-up">
                            <img src={key} />
                            <span>We create <br /> turnkey  <br /> marketing</span>
                        </div>
                        <div className={classes.weareItem} data-aos="fade-up">
                            <img src={set} />
                            <span>New <br /> opportunities <br /> for your business</span>
                        </div>
                        <div className={classes.weareItem} data-aos="fade-up">
                            <img src={horse} />
                            <span>Marketing <br /> solutions <br /> business problems</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* CYCLE */}

            <div className={classes.cycle}>
                <div className={classes.containerCycle}>
                    <button className={classes.getService}>Order a service</button>
                    <h1 className={classes.cycleHeader}>MARKETING <br/>
                          AGENCY <br/>
                         FULL CYCLE </h1>
                    <div className={classes.selector}>
                        <img src={triangle_left}/>
                        <span className={classes.selectorText}>
                                Your marketing team <br/>
                                on outsourcing (on request). <br/>
                                Any marketing solutions <br/>
                                <span className = {classes.selectorTextBold}> for your business. </span> <br/>
                                Marketing audit, <br/>
                                marketing strategies, <br/>
                                SMM (targeting and promotion), <br/>
                                smart landing, visual design. </span>
                        <img src={triangle_right}/>
                    </div>
                    <div className={classes.getMore} data-aos="fade-down">
                        <div className={classes.getMoreItem}>
                            <img src={audit}/>
                            <span> Marketing <br/> audit </span>
                             <a href="#"> Learn more </a>
                        </div>
                        <div className={classes.getMoreItem}>
                            <img src={strategy}/>
                            <span> Marketing <br/> Strategies </span>
                             <a href="#"> Learn more </a>
                        </div>
                        <div className={classes.getMoreItem}>
                            <img src={smm}/>
                            <span> SMM (targeting and <br/> promotion) </span>
                             <a href="#"> Learn more </a>
                        </div>
                        <div className={classes.getMoreItem}>
                            <img src={pc}/>
                            <span> Smart <br/> Landing </span>
                             <a href="#"> Learn more </a>
                        </div>
                        <div className={classes.getMoreItem}>
                            <img src={pazzle}/>
                            <span> Visual <br/> design </span>
                             <a href="#"> Learn more </a>
                        </div>
                    </div>
                    <div className={classes.getMoreIpad}>
                        <div className={classes.getMoreRow}>
                            <div className={classes.getMoreItem} data-aos="fade-down">
                                <img src={audit}/>
                                <span>Marketing <br/> audit</span>
                                <a href="#">Learn more</a>
                            </div>
                            <div className={classes.getMoreItem} data-aos="fade-down">
                                <img src={strategy}/>
                                <span>Marketing <br/> Strategies</span>
                                <a href="#">Learn more</a>
                            </div>
                            <div className={classes.getMoreItem} data-aos="fade-down">
                                <img src={smm}/>
                                <span>SMM (targeting and <br/> promotion)</span>
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                        <div className={classes.getMoreRow}>
                            <div className={classes.getMoreItem}>
                                <img src={pc}/>
                                <span>Smart <br/> Landing</span>
                                <a href="#">Learn more</a>
                            </div>
                            <div className={classes.getMoreItem}>
                                <img src={pazzle}/>
                                <span>Visual <br/> design </span>
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* GIFT */}

            <div className={classes.gift}>
                <div className={classes.giftContainer}>
                    <div className={classes.wantGift}>
                        <h1 className={classes.giftHeader} data-aos="fade-bottom">I want <br/> Gift!</h1>
                        <button>GET</button>
                        <span>list of movies <br/> on "marketing"</span>
                    </div>
                    <div className={classes.giftImg}>
                        <img src={gift} data-aos="fade-left"/>
                    </div>
                </div>
            </div>

            {/* PORTFOLIO */}

            <div className={classes.portfolio} id="portfolio">
                <div className={classes.portfolioContainer}>
                    <h1 className={classes.portfolioHeader}>PORTFOLIO</h1>
                    <div className={classes.portfolioItems} data-aos="fade-right">
                        <img src={parimatch}/>
                        <img src={dog}/>
                        <img src={lothub}/>
                        <img src={euralis}/>
                    </div>
                    <div className={classes.portfolioItems} data-aos="fade-left">
                        <img src={minimax}/>
                        <img src={crewshop}/>
                        <img src={ukrenergo}/>
                    </div>
                    <div className={classes.portfolioItems} data-aos="fade-right">
                        <img src={ukrposhta}/>
                        <img src={newposhta}/>
                        <img src={health}/>
                    </div>
                </div>
            </div>

            {/* PAIN */}

            <div className={classes.pain} id="pain">
                <div className={classes.painContainer}>
                    <h1 className={classes.painHeader}>THE PAIN OF OUR <br/> CLIENTS</h1>
                    <div className={classes.reasonsBlock}>
                        <div className={classes.reasons}>
                            <div className={classes.reason} data-aos="fade-right">
                                <img src={redelipse}/>
                                <span>mess in analytics?</span>
                            </div>
                            <div className={classes.reason} data-aos="fade-right">
                                <img src={redelipse}/>
                                <span>no content plan?</span>
                            </div>
                            <div className={classes.reason} data-aos="fade-right">
                                <img src={redelipse}/>
                                <span>don't have time to write lyrics?</span>
                            </div>
                            <div className={classes.reason} data-aos="fade-right">
                                <img src={redelipse}/>
                                <span> you know what strategy is, <br/>
                                       can't reach? </span>
                            </div>
                            <div className={classes.reason} data-aos="fade-right">
                                <img src={redelipse}/>
                                <span>and still it is necessary to rivet visuals?</span>
                            </div>
                        </div>
                        <div className={classes.reasons}>
                            <div className={classes.waves}>
                                <img src={wave1}/>
                                <img src={wave2}/>
                            </div>
                            <div className={classes.waves}>
                                <img src={wave3}/>
                                <img src={wave4}/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.reasonsBlock}>
                        <div className={classes.reasons}>
                            <span className={classes.reasonsText}>This is the most difficult and interesting period in life <br/>
                                     entrepreneur. When the business is already going and needed <br/>
                                     marketing, <br/>
                                     but you can't afford the inhouse command. <br/>
                                     and you will find contractors of normal horseradish. <br/>
                                     <br/>
                                     that would be an autonomous team that will think for itself, <br/>
                                     will understand what is needed, or asked questions, but <br/>
                                     digs to the truth, <br/>
                                     which will be useful to your business... </span>
                        </div>
                        <div className={classes.reasons}>
                            <div className={classes.waves}>
                                <img src={wave5}/>
                                <img src={wave6}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.painContainerIpad}>
                    <h1 className={classes.painHeader}>THE PAIN OF OUR <br/> CLIENTS</h1>
                    <div className={classes.reasonsBlock}>
                        <div className={classes.reasons}>
                            <div className={classes.reason} data-aos="fade-right">
                                <img src={redelipse}/>
                                <span>mess in analytics?</span>
                            </div>
                            <div className={classes.reason} data-aos="fade-right">
                                <img src={redelipse}/>
                                <span>no content plan?</span>
                            </div>
                            <div className={classes.reason} data-aos="fade-right">
                                <img src={redelipse}/>
                                <span>don't have time to write lyrics?</span>
                            </div>
                            <div className={classes.reason} data-aos="fade-right">
                                <img src={redelipse}/>
                                <span>you know what strategy is, <br/>
                                       can't reach? </span>
                            </div>
                            <div className={classes.reason} data-aos="fade-right">
                                <img src={redelipse}/>
                                <span>and still it is necessary to rivet visuals?</span>
                            </div>
                        </div>
                        <div className={classes.reasons}>
                            <div className={classes.waves}>
                                <img src={wave1} className={classes.wavesimgs}/>
                                <img src={wave2} className={classes.wavesimgs}/>
                            </div>
                            <div className={classes.waves} >
                                <img src={wave3} className={classes.wavesimgs}/>
                                <img src={wave4} className={classes.wavesimgs}/>
                            </div>
                            <div className={classes.waves}>
                                <img src={wave5} className={classes.wavesimgs}/>
                                <img src={wave6} className={classes.bigwave}/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.reasonsBlock}>
                        <div className={classes.reasons}>
                            <span className={classes.reasonsText}>This is the most difficult and interesting period in life <br/>
                                     entrepreneur. When the business is already going and you need marketing, <br/>
                                     but you can't afford the inhouse command. <br/>
                                     and you will find contractors of normal horseradish. <br/>
                                     <br/>
                                     that would be an autonomous team that thinks for itself, understands <br/>
                                     what is needed, or questions are fucked up, but get to the truth, <br/>
                                     which will be useful to your business ... </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* OVERHERE */}

            <div className={classes.overhere}>
                <div className={classes.overhereContainer}>
                    <div className={classes.overhereItems}>
                        <h3>SO HERE SHE [we]</h3>
                        <span> you can start the delegation with any <br/>
                         one task, and then as you like - at least the whole complex </span>
                         <button> DELEGATE </button>
                    </div>
                </div>
            </div>

            {/* SERVICES */}

            <div className={classes.services} id="services">
                <div className={classes.servicesContainer}>
                    <h1 className={classes.servicesHeader}>SERVICES</h1>
                    <div className={classes.service} data-aos="fade-right">
                        <div className={classes.serviceSide}>
                            <div className={classes.serviceBlock}>
                                <div className={classes.serviceBlueBlock}>
                                    <img src={service1} className={classes.serviceImg}/>
                                </div>
                                <img src={triagnle_blue}/>
                            </div>
                            <h4>Marketing <br/> audit</h4>
                        </div>
                        <div className={classes.serviceSide}>
                            <div className={classes.serviceBlock}>
                                <div className={classes.serviceBlueBlockSpan}>
                                    <span>analysis of the current state <br/>
                                         business in terms of <br/>
                                         marketing (competitors / <br/>
                                         pricing / <br/>
                                         portfolio / channels <br/>
                                         promotion) <br/>
                                         and suggestions for <br/>
                                         increase efficiency <br/>
                                         marketing </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.service} data-aos="fade-left">
                        <div className={classes.serviceSide}>
                            <div className={classes.serviceBlock}>
                                <div className={classes.serviceBlueBlock}>
                                    <img src={service2} className={classes.serviceImg}/>
                                </div>
                                <img src={triagnle_blue}/>
                            </div>
                            <h4>Targeting, SMM</h4>
                        </div>
                        <div className={classes.serviceSide}>
                            <div className={classes.serviceBlock}>
                                <div className={classes.serviceOrangeBlockSpan}>
                                    <span> management and promotion <br/>
                                     soc. networks (Instagram, <br/>
                                     facebook, linkedin), copyright </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.service} data-aos="fade-right">
                        <div className={classes.serviceSide}>
                            <div className={classes.serviceBlock}>
                                <div className={classes.serviceBlueBlock}>
                                    <img src={service3} className={classes.serviceImg}/>
                                </div>
                                <img src={triagnle_blue}/>
                            </div>
                            <h4>Smart landing</h4>
                        </div>
                        <div className={classes.serviceSide}>
                            <div className={classes.serviceBlock}>
                                <div className={classes.serviceBlueBlockSpan}>
                                    <span> create a one-page <br/>
                                     site optimized <br/>
                                     for search engines </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.service} data-aos="fade-left">
                        <div className={classes.serviceSide}>
                            <div className={classes.serviceBlock}>
                                <div className={classes.serviceBlueBlock}>
                                    <img src={service4} className={classes.serviceImg}/>
                                </div>
                                <img src={triagnle_blue}/>
                            </div>
                            <h4>Design, photo content</h4>
                        </div>
                        <div className={classes.serviceSide}>
                            <div className={classes.serviceBlock}>
                                <div className={classes.serviceOrangeBlockSpan}>
                                    <span>corporate development <br/>
                                     style, creating visuals <br/>
                                     for communication <br/>
                                     programs and targeting <br/>
                                     <br/>
                                     create photo content <br/>
                                     (subject photography / <br/>
                                     catalog shooting / <br/>
                                     commercial photography</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.serviceIpad}>
                        <div className={classes.serviceSide} data-aos="fade-left">
                            <div className={classes.serviceBlock}>
                                <div className={classes.serviceBlueBlock}>
                                    <img src={service1} className={classes.serviceImg}/>
                                </div>
                            </div>
                            <div className={classes.serviceFoot}>
                                <h4>Marketing <br/> audit</h4>
                                <img src={triangle_bot}/>
                            </div>
                        </div>
                        <div className={classes.serviceSide} data-aos="fade-right">
                            <div className={classes.serviceBlock}>
                                <div className={classes.serviceBlueBlock}>
                                    <img src={service2} className={classes.serviceImg}/>
                                </div>
                            </div>
                            <div className={classes.serviceFoot}>
                                <h4>SMM, targeting</h4>
                                <img src={triangle_bot}/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.serviceIpad}>
                        <div className={classes.serviceSide} data-aos="fade-left">
                            <div className={classes.serviceBlock}>
                                <div className={classes.serviceBlueBlock}>
                                    <img src={service3} className={classes.serviceImg}/>
                                </div>
                            </div>
                            <div className={classes.serviceFoot}>
                                <h4>Smart landing</h4>
                                <img src={triangle_bot}/>
                            </div>
                        </div>
                        <div className={classes.serviceSide} data-aos="fade-right">
                            <div className={classes.serviceBlock}>
                                <div className={classes.serviceBlueBlock}>
                                    <img src={service4} className={classes.serviceImg}/>
                                </div>
                            </div>
                            <div className={classes.serviceFoot}>
                                <h4>Design, <br/> photo content</h4>
                                <img src={triangle_bot}/>
                            </div>
                        </div>
                    </div>
                    <button>Order a service</button>
                </div>
            </div>

            {/* BLOG */}

            <div className={classes.blog} id="blog">
                <div className={classes.blogContainer}>
                    <h1 className={classes.blogHeader}>BLOG</h1>
                    <div className={classes.lorem}>
                        <div className={classes.blogItem} data-aos="fade-down">
                            <a href=""><img src={blog}/></a>
                        </div>
                        <div className={classes.blogItem} data-aos="fade-down">
                            <a href=""><img src={blog}/></a>
                        </div>
                        <div className={classes.blogItem} data-aos="fade-down">
                            <a href=""><img src={blog}/></a>
                        </div>
                    </div>
                    <div className={classes.loremIpad}>
                        <div className={classes.blogItem} data-aos="fade-down">
                            <a href=""><img src={blog}/></a>
                        </div>
                        <div className={classes.blogItem} data-aos="fade-down">
                            <a href=""><img src={blog}/></a>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* CONTACT */}

            <div className={classes.contact} id="contact">
                <div className={classes.contactContainer}>
                    <h1 className={classes.contactHeader}>CONTACTS</h1>
                    <div className={classes.links}>
                        <a href="#"><img src={fb}/></a>
                        <a href="#"><img src={tg}/></a>
                    </div>
                    <span>Ulyana Kulikova +38 063 767 84 30 <br/>
                        ulianakulikova@gmail.com <br/>
                        Julia Kameneva +38 067 555 24 67 <br/>
                        yuliya.kameneva@gmail.com</span>
                    <button>Order a service</button>
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
                </div>
            </div>


        </div>
        <div className={mobile.main}>
                <div className={mobile.home} id="homeM">
                    <div className={mobile.homeContainer}>
                        <div className={mobile.navbar}>
                            <img src={logoMobile} />
                             <Burger/>
                        </div>

                    </div>
                </div>
                <div className={mobile.homeBlue}>
                    <h3>YOUR MARKETING <br />
                     TEAM <br />
                     ON OUTSOURCE </h3>
                    <div className={mobile.wearerow}>
                        <div className={mobile.weareItem} data-aos="fade-up">
                            <img src={key} />
                            <span className={mobile.weareSpan}>We create <br />turnkey <br /> marketing</span>
                        </div>
                        <div className={mobile.weareItem} data-aos="fade-up">
                            <img src={set} />
                            <span className={mobile.weareSpan}>New <br /> features <br /> for your <br /> business</span>
                        </div>
                    </div>
                    <div className={mobile.weareLastRow}>
                        <div className={mobile.weareItem} data-aos="fade-up">
                            <img src={horse} />
                            <span className={mobile.weareSpan}>Marketing <br /> solutions <br /> business tasks</span>
                        </div>
                    </div>
                </div>
                <div className={mobile.cycle}>
                    <button className={mobile.getService}>Order service</button>
                    <h1 className={mobile.cycleHeader}>MARKETING <br />
                             AGENCY <br />
                             FULL CYCLE </h1>
                    <span className={mobile.selectorText}>
                    Your marketing team <br />
                             outsourced (on request). <br />
                             Any marketing solutions <br />
                        <span className={mobile.selectorTextBold}>for your business. </span> <br />
                             Marketing Audit, <br />
                             marketing strategies, <br />
                             SMM (targeting and promotion), <br />
                             smart landing, visual design. </span>
                    <div className={mobile.getMoreItem}>
                        <img src={audit} />
                        <span> Marketing <br /> audit </span>
                         <a href="#"> Learn more </a>
                    </div>
                    <div className={mobile.getMoreItem}>
                        <img src={strategy} />
                        <span> Marketing <br /> strategies </span>
                         <a href="#"> Learn more </a>
                    </div>
                    <div className={mobile.getMoreItem}>
                        <img src={smm} />
                        <span> SMM (targeting and <br /> promotion) </span>
                         <a href="#"> Learn more </a>
                    </div>
                    <div className={mobile.getMoreItem}>
                        <img src={pc} />
                        <span> Smart <br /> landing </span>
                         <a href="#"> Learn more </a>
                    </div>
                    <div className={mobile.getMoreItem}>
                        <img src={pazzle} />
                        <span> Visual <br /> design </span>
                         <a href="#"> Learn more </a>
                    </div>
                </div>
                <div className={mobile.gift}>
                    <h1 data-aos = "fade-bottom"> I want <br /> Gift! </h1>
                     <button> GET </button>
                     <span> movie list <br /> on the topic of marketing </span>
                </div>
                <div className={mobile.portfolio} id="portfolioM">
                    <h3>PORTFOLIO</h3>
                    <div className={mobile.portfolioBlock}>
                        <div className={mobile.portfolioSide}>
                            <img src={parimatch_mobile}/>
                            <img src={lothub_mobile}/>
                            <img src={minimax_mobile}/>
                            <img src={newposhta_mobile}/>
                            <img src={ukrposhta_mobile}/>
                        </div>
                        <div className={mobile.portfolioSide}>
                            <img src={dog_mobile}/>
                            <img src={euralis_mobile}/>
                            <img src={crewshop_mobile}/>
                            <img src={health_mobile}/>
                            <img src={ukrenergo_mobile}/>
                        </div>
                    </div>
                </div>
                <div className={mobile.pain}  id="painM">
                    <h3>OUR PAINS <br/> CLIENTS </h3>
                    <div className={mobile.reasons}>
                        <div className={mobile.reason}>
                            <img src={redelipse}/>
                            <span>mess in analytics?</span>
                        </div>
                        <div className={mobile.reason}>
                            <img src={redelipse}/>
                            <span>no content plan?</span>
                        </div>
                        <div className={mobile.reason}>
                            <img src={redelipse}/>
                            <span>don't have time to write lyrics?</span>
                        </div>
                        <div className={mobile.reason}>
                            <img src={redelipse}/>
                            <span>you know what a strategy is, <br/>
                                 Can’t your hands reach? </span>
                        </div>
                        <div className={mobile.reason}>
                            <img src={redelipse}/>
                            <span>and still need to rivet visuals?</span>
                        </div>
                    </div>
                    <span className={mobile.reasonText}> It is the most difficult and <br/>
                     interesting period in life <br/>
                     entrepreneur. When is a business <br/>
                     already going and need marketing, <br/>
                     but let the inhouse team <br/>
                     you can't imagine it. <br/>
                     and contractors find normal horseradish.
                     <br/> <br/>
                     that’s an autonomous team, <br/>
                     who will think for herself, understand <br/>
                     what you need or questions <br/>
                     gouging but getting to the bottom <br/>
                     truths <br/>
                     which will be useful to yours <br/>
                     business ...
                    </span>
                    
                </div>
                <div className={mobile.overhere}>
                    <div className={mobile.overhereItems}>
                        <h3> SO SAME IT [we] </h3>
                         <span> you can start the delegation with <br/> some <br />
                        of one task and then how you like it <br/> - at least the whole complex </span>
                         <button> DELEGATE </button>
                    </div>
                </div>
                <div className={mobile.services} id="servicesM">
                    <div className={mobile.service}>
                        <div className={mobile.serviceImg}>
                            <img src={service1}/>
                        </div>
                        <div className={mobile.serviceFoot}>
                            <h4>Marketing <br/> audit </h4>
                            <img src={triangle_bot}/>
                        </div>
                    </div>
                    <div className={mobile.service}>
                        <div className={mobile.serviceImg}>
                            <img src={service2}/>
                        </div>
                        <div className={mobile.serviceFoot}>
                            <h4>Targeting, <br/>SMM</h4>
                            <img src={triangle_bot}/>
                        </div>
                    </div>
                    <div className={mobile.service}>
                        <div className={mobile.serviceImg}>
                            <img src={service3}/>
                        </div>
                        <div className={mobile.serviceFoot}>
                            <h4>Smart <br/>landing</h4>
                            <img src={triangle_bot}/>
                        </div>
                    </div>
                    <div className={mobile.service}>
                        <div className={mobile.serviceImg}>
                            <img src={service4}/>
                        </div>
                        <div className={mobile.serviceFoot}>
                            <h4>Design, <br/>photo content</h4>
                            <img src={triangle_bot}/>
                        </div>
                    </div>
                    <button>Order service</button>
                </div>
                <div className={mobile.blog}  id="blogM">
                    <h3>BLOG</h3>
                    <div className={mobile.blogItems}>
                        <a href="#"><img src={blogItem_mobile}/></a>
                    </div>
                </div>
                <div className={mobile.contact} id="contactM">
                    <h3>CONTACTS</h3>
                    <div className={mobile.links}>
                        <img src={fb}/>
                        <img src={tg}/>
                    </div>
                    <span>Ulyana Kulikova +38 063 767 84 30 <br/>
                     ulianakulikova@gmail.com <br/>
                     Julia Kameneva +38 067 555 24 67 <br/>
                     yuliya.kameneva@gmail.com </span>
                     <button> Order a service </button>
                </div>
            </div>
        </>
    );
}

export default En;