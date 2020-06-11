import React from 'react';
import classes from '../Css.module.css';
import Languages from '../Languages/Languages';
import { NavLink } from 'react-router-dom';

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



const En = (props) => {
    return (
        <div className={classes.main}>

            {/* HOME */}

            <div className={classes.home}>
                <div className={classes.container}>
                    <div className={classes.navbar}>
                        <img src={logo} />
                        <div className={classes.menu}>
                            <a href="#services">Services</a>
                            <a href="#portfolio">Portfolio</a>
                            <a href="#pain">Pain of our customers</a>
                            <a href="#blog">Blog</a>
                            <a href="#contact">Contact</a>
                        </div>
                        <Languages />
                    </div>
                    <h1 className={classes.headerHome}>YOUR MARKETING
                                              <br></br>OUTSOURCE TEAM</h1>
                    <div className={classes.weare}>
                        <div className={classes.weareItem}>
                            <img src={key} />
                            <span>We create <br /> turnkey  <br /> marketing</span>
                        </div>
                        <div className={classes.weareItem}>
                            <img src={set} />
                            <span>New <br /> opportunities <br /> for your business</span>
                        </div>
                        <div className={classes.weareItem}>
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
                    <div className={classes.getMore}>
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
                </div>
            </div>

            {/* GIFT */}

            <div className={classes.gift}>
                <div className={classes.giftContainer}>
                    <div className={classes.wantGift}>
                        <h1 className={classes.giftHeader}>I want <br/> Gift!</h1>
                        <button>GET</button>
                        <span>list of movies <br/> on "marketing"</span>
                    </div>
                    <div className={classes.giftImg}>
                        <img src={gift}/>
                    </div>
                </div>
            </div>

            {/* PORTFOLIO */}

            <div className={classes.portfolio} id="portfolio">
                <div className={classes.portfolioContainer}>
                    <h1 className={classes.portfolioHeader}>PORTFOLIO</h1>
                    <div className={classes.portfolioItems}>
                        <img src={parimatch}/>
                        <img src={dog}/>
                        <img src={lothub}/>
                        <img src={euralis}/>
                    </div>
                    <div className={classes.portfolioItems}>
                        <img src={minimax}/>
                        <img src={crewshop}/>
                        <img src={ukrenergo}/>
                    </div>
                    <div className={classes.portfolioItems}>
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
                            <div className={classes.reason}>
                                <img src={redelipse}/>
                                <span>mess in analytics?</span>
                            </div>
                            <div className={classes.reason}>
                                <img src={redelipse}/>
                                <span>no content plan?</span>
                            </div>
                            <div className={classes.reason}>
                                <img src={redelipse}/>
                                <span>don't have time to write lyrics?</span>
                            </div>
                            <div className={classes.reason}>
                                <img src={redelipse}/>
                                <span> you know what strategy is, <br/>
                                       can't reach? </span>
                            </div>
                            <div className={classes.reason}>
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
                    <div className={classes.service}>
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
                    <div className={classes.service}>
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
                    <div className={classes.service}>
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
                    <div className={classes.service}>
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
                    <button>Order a service</button>
                </div>
            </div>

            {/* BLOG */}

            <div className={classes.blog} id="blog">
                <div className={classes.blogContainer}>
                    <h1 className={classes.blogHeader}>BLOG</h1>
                    <div className={classes.lorem}>
                        <div className={classes.blogItem}>
                            <a href=""><img src={blog}/></a>
                        </div>
                        <div className={classes.blogItem}>
                            <a href=""><img src={blog}/></a>
                        </div>
                        <div className={classes.blogItem}>
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
    );
}

export default En;