import React from 'react';
import classes from '../Css.module.css';
import mobile from '../Mobile.module.css';
import Languages from '../Languages/Languages';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

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
import uctc from '../../assets/images/uctc.jpg';
import center from '../../assets/images/center.jpeg';
import cosme from '../../assets/images/cosme.jpeg';
import almadiah from '../../assets/images/almadiah.jpeg';
import agrotok from '../../assets/images/agrotok.png';
import luxca from '../../assets/images/luxca.jpeg';
import msh from '../../assets/images/msh.png';
import sprayagro from '../../assets/images/sprayagro.jpeg';
import mylu from '../../assets/images/mylu.png';
import beachbody from '../../assets/images/beachbody.png';

import health from '../../assets/images/health.png';
import redelipse from '../../assets/images/redelipse.png';
import wave1 from '../../assets/images/wave1.png';
import wave2 from '../../assets/images/wave2.png';
import wave3 from '../../assets/images/wave3.png';
import wave4 from '../../assets/images/wave4.png';
import wave5 from '../../assets/images/wave5.png';
import wave6 from '../../assets/images/wave6.png';
import service1 from '../../assets/images/service1.jpg';
import service2 from '../../assets/images/service2.jpg';
import service3 from '../../assets/images/service3.jpg';
import service4 from '../../assets/images/service4.jpg';
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

import shark from '../../assets/images/blog/shark.jpg';
import zametka from '../../assets/images/blog/zametka.jpg';
import smart from '../../assets/images/blog/smart.jpg';

import logoMobile from '../../assets/images/mobile/logoMobile.png';
import Burger from '../Burger/Burger';
import triangle_bot from '../../assets/images/mobile/triangle_bot.png';
import Modal from '../Modal/Modal';

import FormHub from '../Modal/FormHub';
import { setCurrentLanguage } from '../../Redux/commonReducer';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

class En extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        textArray: ["Marketing analysis of current business status (competition / pricing / portfolio / communication channels / sales channels) and suggestions on marketing effectiveness improvement",
            "Step-by-step marketing activities plan (4P / 4C / 4E), analytics",
            "Social media management (Instagram, Facebook, LinkedIn)",
            "One-page website development which is optimized for searching engines",
            "Corporate style development and creation, Creative visuals development for any communication programs and targeting goals, Photo content development and creation (object photography / catalogue photography / commercial photography)"],
        text: "",
        show: false,
        form: false

    }
    componentDidMount() {
        this.useEffect();
    }

    useEffect = () => {
        Aos.init({ duration: 1000 });
        this.props.setCurrentLanguage("en");
        this.props.i18n.changeLanguage("en");
    }

    setText = (event) => {
        this.setShow();
       
        const selected = this.state.textArray[event.target.id];
        
        this.setState({ text: selected });
    }
    setShow = () => {
        const show = !this.state.show;
        this.setState({ show: show }, () => {
           
        });
    }
    hubSpot = () => {
        
        const form = !this.state.form;
        this.setState({form: form}, ()=>{
            
        });
    }


    render() {
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
                                <Burger />
                            </div>
                            <h1 className={classes.headerHome} data-aos="fade-right">YOUR OUTSTAFFED
                                                  <br></br>MARKETING TEAM</h1>
                            <h1 className={classes.headerHomeIpad} data-aos="fade-right"> YOUR OUTSTAFFED MARKETING TEAM <br /> </h1>
                            <div className={classes.weare}>
                                <div className={classes.weareItem} data-aos="fade-up">
                                    <img src={key} />
                                    <span>We create <br /> ready-to-operate  <br /> marketing for you</span>
                                     
                                </div>
                                <div className={classes.weareItem} data-aos="fade-up">
                                    <img src={set} />
                                    <span>New <br /> opportunities <br /> for your business</span>
                                </div>
                                <div className={classes.weareItem} data-aos="fade-up">
                                    <img src={horse} />
                                    <span>Marketing <br /> solutions <br /> of your business goals</span>
                                </div>
                            </div>
                        </div>
                        {this.state.form == true ? <FormHub show={this.state.form} hubSpot={this.hubSpot}/> : <></>}
                    </div>

                    {/* CYCLE */}

                    <div className={classes.cycle}>
                        <div className={classes.containerCycle}>
                            
                            <button className={classes.getService} onClick={this.hubSpot}>Order marketing Now</button>
                            <h1 className={classes.cycleHeader}>MARKETING <br />
                              AGENCY <br />
                             FULL CYCLE </h1>
                            <div className={classes.selector}>
                                <img src={triangle_left} />
                                <span className={classes.selectorText}>
                                    Your outstaffed marketing team <br />
                                    (upon request). <br />
                                    Any marketing solutions <br />
                                    <span className={classes.selectorTextBold}> for your business. </span> <br />
                                    Marketing audit, <br />
                                    marketing strategy, <br />
                                    SMM (targeting and media management), <br />
                                    smart landing page, visualization of your messages and desing.</span>
                                <img src={triangle_right} />
                            </div>
                            <div className={classes.getMore} data-aos="fade-down">
                                <div className={classes.getMoreItem}>
                                    <img src={audit} />
                                    <span> Marketing <br /> audit </span>
                                    <button onClick={this.setText} id="0"> Learn more </button>
                                </div>
                                <div className={classes.getMoreItem}>
                                    <img src={strategy} />
                                    <span> Marketing <br /> Strategies </span>
                                    <button onClick={this.setText} id="1"> Learn more </button>
                                </div>
                                <div className={classes.getMoreItem}>
                                    <img src={smm} />
                                    <span> SMM (targeting and <br /> promotion) </span>
                                    <button onClick={this.setText} id="2"> Learn more </button>
                                </div>
                                <div className={classes.getMoreItem}>
                                    <img src={pc} />
                                    <span> Smart <br /> Landing </span>
                                    <button onClick={this.setText} id="3"> Learn more </button>
                                </div>
                                <div className={classes.getMoreItem}>
                                    <img src={pazzle} />
                                    <span> Visual <br /> design </span>
                                    <button onClick={this.setText} id="4"> Learn more </button>
                                </div>
                                {this.state.show == false ? <></> : <Modal show={this.state.show} setShow={this.setShow} text={this.state.text} />}
                            </div>
                            <div className={classes.getMoreIpad}>
                                <div className={classes.getMoreRow}>
                                    <div className={classes.getMoreItem} data-aos="fade-down">
                                        <img src={audit} />
                                        <span>Marketing <br /> audit</span>
                                        <button onClick={this.setText} id="0">Learn more</button>
                                    </div>
                                    <div className={classes.getMoreItem} data-aos="fade-down">
                                        <img src={strategy} />
                                        <span>Marketing <br /> Strategies</span>
                                        <button onClick={this.setText} id="1">Learn more</button>
                                    </div>
                                    <div className={classes.getMoreItem} data-aos="fade-down">
                                        <img src={smm} />
                                        <span>SMM (targeting and <br /> promotion)</span>
                                        <button onClick={this.setText} id="2">Learn more</button>
                                    </div>
                                </div>
                                {this.state.show == false ? <></> : <Modal show={this.state.show} setShow={this.setShow} text={this.state.text} />}
                                <div className={classes.getMoreRow}>
                                    <div className={classes.getMoreItem}>
                                        <img src={pc} />
                                        <span>Smart <br /> Landing</span>
                                        <button onClick={this.setText} id="3">Learn more</button>
                                    </div>
                                    <div className={classes.getMoreItem}>
                                        <img src={pazzle} />
                                        <span>Visual <br /> design </span>
                                        <button onClick={this.setText} id="4">Learn more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GIFT */}

                    <div className={classes.gift}>
                        <div className={classes.giftContainer}>
                            <div className={classes.wantGift}>
                                <h1 className={classes.giftHeader} data-aos="fade-bottom">I want <br /> Gift!</h1>
                                <a href="src/assets/docs/filmsEn.pdf" download>GET</a>
                                <span>list of movies <br /> on "marketing"</span>
                            </div>
                            <div className={classes.giftImg}>
                                <img src={gift} data-aos="fade-left" />
                            </div>
                        </div>
                    </div>

                    {/* PORTFOLIO */}

                    <div className={classes.portfolio} id="portfolio">
                        <div className={classes.portfolioContainer}>
                            <h1 className={classes.portfolioHeader}>PORTFOLIO</h1>
                            <div className={classes.portfolioItems} data-aos="fade-right">
                                <img src={parimatch} />
                                <img src={dog} />
                                <img src={lothub} />
                                <img src={euralis} />
                            </div>
                            <div className={classes.portfolioItems + " " + classes.logosNew} data-aos="fade-left">
                                <img src={minimax} />
                                <img src={crewshop} />
                                <img src={ukrenergo} />
                                <img src={beachbody} />
                            </div>
                            <div className={classes.portfolioItems + " " + classes.logosNew} data-aos="fade-right">
                                <img src={ukrposhta} />
                                <img src={newposhta} />
                                <img src={health} />
                                <img src={mylu} />
                            </div>
                            <div className={classes.portfolioItems + " " + classes.logosNew} data-aos="fade-left">
                                <img src={uctc} />
                                <img src={center} />
                                <img src={cosme} />
                                <img src={msh} />
                            </div>
                            <div className={classes.portfolioItems + " " + classes.logosNew} data-aos="fade-right">
                                <img src={almadiah} />
                                <img src={agrotok} />
                                <img src={luxca} />
                                <img src={sprayagro} />
                            </div>
                        </div>
                    </div>

                    {/* PAIN */}

                    <div className={classes.pain} id="pain">
                        <div className={classes.painContainer}>
                            <h1 className={classes.painHeader}>THE PAIN OF OUR <br /> CLIENTS</h1>
                            <div className={classes.reasonsBlock}>
                                <div className={classes.reasons}>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>have a mess in analytics?</span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>no content plan ever?</span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>can't manage your texts?</span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>you do know what the strategy is,<br />
                                            but you never have time for it?</span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>and do you still need to work on visualization of your brand?</span>
                                    </div>
                                </div>
                                <div className={classes.reasons}>
                                    <div className={classes.waves}>
                                        <img src={wave1} />
                                        <img src={wave2} />
                                    </div>
                                    <div className={classes.waves}>
                                        <img src={wave3} />
                                        <img src={wave4} />
                                    </div>
                                </div>
                            </div>
                            <div className={classes.reasonsBlock}>
                                <div className={classes.reasons}>
                                    <span className={classes.reasonsText}>Today is the most interesting and the most complicated period in the lives of  <br />
                                         enterpreneurs. The business is developing really quick and it needs <br />
                                         marketing, <br />
                                         but you can't afford the inhouse-team <br />
                                         and good agencies is a very rare thing. <br />
                                        <br />
                                         Would you like to have an outstaffed marketing team <br />
                                         which knows what you need and how to get there? </span>
                                </div>
                                <div className={classes.reasons}>
                                    <div className={classes.waves}>
                                        <img src={wave5} />
                                        <img src={wave6} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={classes.painContainerIpad}>
                            <h1 className={classes.painHeader}>THE PAIN OF OUR <br /> CLIENTS</h1>
                            <div className={classes.reasonsBlock}>
                                <div className={classes.reasons}>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>mess in analytics?</span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>no content plan?</span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>don't have time to write lyrics?</span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>you know what strategy is, <br />
                                           can't reach? </span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>and still it is necessary to rivet visuals?</span>
                                    </div>
                                </div>
                                <div className={classes.reasons}>
                                    <div className={classes.waves}>
                                        <img src={wave1} className={classes.wavesimgs} />
                                        <img src={wave2} className={classes.wavesimgs} />
                                    </div>
                                    <div className={classes.waves} >
                                        <img src={wave3} className={classes.wavesimgs} />
                                        <img src={wave4} className={classes.wavesimgs} />
                                    </div>
                                    <div className={classes.waves}>
                                        <img src={wave5} className={classes.wavesimgs} />
                                        <img src={wave6} className={classes.bigwave} />
                                    </div>
                                </div>
                            </div>
                            <div className={classes.reasonsBlock}>
                                <div className={classes.reasons}>
                                    <span className={classes.reasonsText}>This is the most difficult and interesting period in life <br />
                                         entrepreneur. When the business is already going and you need marketing, <br />
                                         but you can't afford the inhouse command. <br />
                                         and you will find contractors of normal horseradish. <br />
                                        <br />
                                         that would be an autonomous team that thinks for itself, understands <br />
                                         what is needed, or questions are fucked up, but get to the truth, <br />
                                         which will be useful to your business ... </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* OVERHERE */}

                    <div className={classes.overhere}>
                        <div className={classes.overhereContainer}>
                            <div className={classes.overhereItems}>
                                <h3>HERE IT IS (Profi Marketing)</h3>
                                <span> You may start to delegate from any <br />
                                of your current tasks and then - delegate as much as you like </span>
                              
                                <button onClick={this.hubSpot}> DELEGATE NOW</button>
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
                                            <img src={service1} className={classes.serviceImg} />
                                        </div>
                                        <img src={triagnle_blue} />
                                    </div>
                                    <h4>Marketing <br /> audit</h4>
                                </div>
                                <div className={classes.serviceSide}>
                                    <div className={classes.serviceBlock}>
                                        <div className={classes.serviceBlueBlockSpan}>
                                            <span>Marketing analysis of current <br />
                                             business situation <br />
                                             (competition / pricing / portfolio / <br />
                                             communication channels /  <br />
                                             sales channels) <br />
                                             and suggestions <br />
                                             on marketing <br />
                                             effectiveness improvement</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.service} data-aos="fade-left">
                                <div className={classes.serviceSide}>
                                    <div className={classes.serviceBlock}>
                                        <div className={classes.serviceBlueBlock}>
                                            <img src={service2} className={classes.serviceImg} />
                                        </div>
                                        <img src={triagnle_blue} />
                                    </div>
                                    <h4>Targeting, SMM</h4>
                                </div>
                                <div className={classes.serviceSide}>
                                    <div className={classes.serviceBlock}>
                                        <div className={classes.serviceOrangeBlockSpan}>
                                            <span> Social media management <br />
                                         (Instagram, Facebook, LinkedIn)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.service} data-aos="fade-right">
                                <div className={classes.serviceSide}>
                                    <div className={classes.serviceBlock}>
                                        <div className={classes.serviceBlueBlock}>
                                            <img src={service3} className={classes.serviceImg} />
                                        </div>
                                        <img src={triagnle_blue} />
                                    </div>
                                    <h4>Smart landing</h4>
                                </div>
                                <div className={classes.serviceSide}>
                                    <div className={classes.serviceBlock}>
                                        <div className={classes.serviceBlueBlockSpan}>
                                            <span> One-page website development<br />
                                            which is optimized <br />
                                            for searching engines </span>

                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.service} data-aos="fade-left">
                                <div className={classes.serviceSide}>
                                    <div className={classes.serviceBlock}>
                                        <div className={classes.serviceBlueBlock}>
                                            <img src={service4} className={classes.serviceImg} />
                                        </div>
                                        <img src={triagnle_blue} />
                                    </div>
                                    <h4>Design, photo content</h4>
                                </div>
                                <div className={classes.serviceSide}>
                                    <div className={classes.serviceBlock}>
                                        <div className={classes.serviceOrangeBlockSpan}>
                                            <span>Creative design and photo <br />
                                            content development <br />
                                            for any of your purposes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.serviceIpad}>
                                <div className={classes.serviceSide} data-aos="fade-left">
                                    <div className={classes.serviceBlock}>
                                        <div className={classes.serviceBlueBlock}>
                                            <img src={service1} className={classes.serviceImg} />
                                        </div>
                                    </div>
                                    <div className={classes.serviceFoot}>
                                        <h4>Marketing <br /> audit</h4>
                                        <img src={triangle_bot} />
                                    </div>
                                </div>
                                <div className={classes.serviceSide} data-aos="fade-right">
                                    <div className={classes.serviceBlock}>
                                        <div className={classes.serviceBlueBlock}>
                                            <img src={service2} className={classes.serviceImg} />
                                        </div>
                                    </div>
                                    <div className={classes.serviceFoot}>
                                        <h4>SMM, targeting</h4>
                                        <img src={triangle_bot} />
                                    </div>
                                </div>
                            </div>
                            <div className={classes.serviceIpad}>
                                <div className={classes.serviceSide} data-aos="fade-left">
                                    <div className={classes.serviceBlock}>
                                        <div className={classes.serviceBlueBlock}>
                                            <img src={service3} className={classes.serviceImg} />
                                        </div>
                                    </div>
                                    <div className={classes.serviceFoot}>
                                        <h4>Smart landing</h4>
                                        <img src={triangle_bot} />
                                    </div>
                                </div>
                                <div className={classes.serviceSide} data-aos="fade-right">
                                    <div className={classes.serviceBlock}>
                                        <div className={classes.serviceBlueBlock}>
                                            <img src={service4} className={classes.serviceImg} />
                                        </div>
                                    </div>
                                    <div className={classes.serviceFoot}>
                                        <h4>Design, <br /> photo content</h4>
                                        <img src={triangle_bot} />
                                    </div>
                                </div>
                            </div>
                            <button onClick={this.hubSpot}>Order marketing Now</button>
                        </div>
                    </div>

                    {/* BLOG */}

                    <div className={classes.blog} id="blog">
                        <div className={classes.blogContainer}>
                            <h1 className={classes.blogHeader}>BLOG</h1>
                            <div className={classes.lorem}>
                                <div className={classes.blogItem} data-aos="fade-down">
                                    <a href="https://www.profi-space.com/bitva-titanov-marketing-vs-prodazhi/" target="_blank">
                                        <img src={smart} />
                                        <h4>BATTLE OF THE TITANS <br /> marketing VS sales</h4>
                                        <span>An eternal problem, in what business you would not come. It may not be visible at first glance, it may not surface so quickly, but if you look closely, everything will fall into place. Meet - their majesty marketing and sales. </span>
                                        <p>READ MORE →</p>
                                    </a>
                                </div>
                                <div className={classes.blogItem} data-aos="fade-down">
                                    <a href="https://www.profi-space.com/bitva-titanov-marketing-ili-seylz-chas/" target="_blank">
                                        <img src={shark} />
                                        <h4>BATTLE OF THE TITANS <br /> marketing VS sales part 2</h4>
                                        <span>Any business organization is made by people, and whatever the structure — matrix, vertical, design, and much more — you can always find a way to work efficiently and minimize stress factors.</span>
                                        <p>READ MORE →</p>
                                    </a>
                                </div>
                                <div className={classes.blogItem} data-aos="fade-down">
                                    <a href="https://www.profi-space.com/people-vse-khavaet/" target="_blank">
                                        <img src={zametka} />
                                        <h4>IF THE LEADER HAS NO BRAND <br /> IT DOES NOT EXIST</h4>
                                        <span>From the title of the article it’s clear what will be discussed now. Why does a leader need a brand, is he already a leader? It is a reasonable question.</span>
                                        <p>READ MORE →</p>
                                    </a>
                                </div>
                            </div>
                            <div className={classes.loremIpad}>
                                <div className={classes.blogItem} data-aos="fade-down">
                                    <a href="https://www.profi-space.com/bitva-titanov-marketing-vs-prodazhi/" target="_blank">
                                        <img src={smart} />
                                        <h4>BATTLE OF THE TITANS <br /> marketing VS sales</h4>
                                        <span>An eternal problem, in what business you would not come. It may not be visible at first glance, it may not surface so quickly, but if you look closely, everything will fall into place. Meet - their majesty marketing and sales. </span>
                                        <p>READ MORE →</p>
                                    </a>
                                </div>
                                <div className={classes.blogItem} data-aos="fade-down">
                                    <a href="https://www.profi-space.com/bitva-titanov-marketing-ili-seylz-chas/" target="_blank">
                                        <img src={shark} />
                                        <h4>BATTLE OF THE TITANS <br /> marketing VS sales part 2</h4>
                                        <span>Any business organization is made by people, and whatever the structure — matrix, vertical, design, and much more — you can always find a way to work efficiently and minimize stress factors.</span>
                                        <p>READ MORE →</p>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* CONTACT */}

                    <div className={classes.contact} id="contact">
                        <div className={classes.contactContainer}>
                            <h1 className={classes.contactHeader}>CONTACTS</h1>
                            <div className={classes.links}>
                                <a href="https://www.facebook.com/profispaceschool" target="_blank"><img src={fb} /></a>
                                <a href="https://t.me/profi_space" target="_blank"><img src={tg} /></a>
                            </div>
                            <span>Ulyana Kulikova<br/><a href="tel:+380637678430"> +38 063 767 84 30 </a><br />
                            <a href="tel:+971585332813">+971 58 533 28 13</a><br/>
                            ulianakulikova@gmail.com <br /></span>
                            <button onClick={this.hubSpot}>Order marketing Now</button>
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
                                <Burger />
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
                                <span className={mobile.weareSpan}>We create <br /> ready-to-operate  <br /> marketing for you</span>
                            </div>
                            <div className={mobile.weareItem} data-aos="fade-up">
                                <img src={set} />
                                <span className={mobile.weareSpan}>New <br /> features <br /> for your <br /> business</span>
                            </div>
                        </div>
                        <div className={mobile.weareLastRow}>
                            <div className={mobile.weareItem} data-aos="fade-up">
                                <img src={horse} />
                                <span className={mobile.weareSpan}>Marketing <br /> solutions <br /> of your business goals</span>
                            </div>
                        </div>
                    </div>
                    <div className={mobile.cycle}>
                        {this.state.form == true ? <FormHub show={this.state.form} hubSpot={this.hubSpot}/> : <></>}
                        <button className={mobile.getService} onClick={this.hubSpot}>Order marketing Now</button>
                        <h1 className={mobile.cycleHeader}>MARKETING <br />
                                 AGENCY <br />
                                 FULL CYCLE </h1>
                        <span className={mobile.selectorText}>
                                Your outstaffed marketing team <br />
                                (upon request). <br />
                                 Any marketing solutions <br />
                            <span className={mobile.selectorTextBold}>for your business. </span> <br />
                                 Marketing Audit, <br />
                                 marketing strategy, <br />
                                 SMM (targeting and media management), <br />
                                 smart landing, visualization of your messages and desing. </span>
                        <div className={mobile.getMoreItem}>
                            <img src={audit} />
                            <span> Marketing <br /> audit </span>
                            <button onClick={this.setText} id="0"> Learn more </button>
                        </div>
                        <div className={mobile.getMoreItem}>
                            <img src={strategy} />
                            <span> Marketing <br /> strategies </span>
                            <button onClick={this.setText} id="1"> Learn more </button>
                        </div>
                        <div className={mobile.getMoreItem}>
                            <img src={smm} />
                            <span> SMM (targeting and <br /> promotion) </span>
                            <button onClick={this.setText} id="2"> Learn more </button>
                        </div>
                        <div className={mobile.getMoreItem}>
                            <img src={pc} />
                            <span> Smart <br /> landing </span>
                            <button onClick={this.setText} id="3"> Learn more </button>
                        </div>
                        <div className={mobile.getMoreItem}>
                            <img src={pazzle} />
                            <span> Visual <br /> design </span>
                            <button onClick={this.setText} id="4"> Learn more </button>
                        </div>
                        {this.state.show == false ? <></> : <Modal show={this.state.show} setShow={this.setShow} text={this.state.text} />}
                    </div>
                    <div className={mobile.gift}>
                        <h1 data-aos="fade-bottom"> I want <br /> Gift! </h1>
                        <a href="src/assets/docs/filmsEn.pdf" download> GET </a>
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
                                <img src={uctc}/>
                                <img src={center}/>
                                <img src={cosme}/>
                                <img src={almadiah}/>
                                <img src={mylu}/>
                            </div>
                            <div className={mobile.portfolioSide}>
                                <img src={dog_mobile}/>
                                <img src={euralis_mobile}/>
                                <img src={crewshop_mobile}/>
                                <img src={health_mobile}/>
                                <img src={ukrenergo_mobile}/>
                                <img src={agrotok}/>
                                <img src={luxca}/>
                                <img src={msh}/>
                                <img src={sprayagro}/>
                                <img src={beachbody}/>
                            </div>
                        </div>
                    </div>
                    <div className={mobile.pain} id="painM">
                        <h3>OUR PAINS <br /> CLIENTS </h3>
                        <div className={mobile.reasons}>
                            <div className={mobile.reason}>
                                <img src={redelipse} />
                                <span>have mess in analytics?</span>
                            </div>
                            <div className={mobile.reason}>
                                <img src={redelipse} />
                                <span>no content plan ever?</span>
                            </div>
                            <div className={mobile.reason}>
                                <img src={redelipse} />
                                <span>can't manage your texts?</span>
                            </div>
                            <div className={mobile.reason}>
                                <img src={redelipse} />
                                <span>you do know what the strategy is,<br />
                                    but you never have time for it? </span>
                            </div>
                            <div className={mobile.reason}>
                                <img src={redelipse} />
                                <span>and do you still need to work on visualization of your brand?</span>
                            </div>
                        </div>
                        <span className={mobile.reasonText}>Today is the most interesting and <br />
                         the most complicated period in the lives of <br />
                         entrepreneurs. The business is <br />
                         developing really quick and it needs marketing,<br />
                         but you can't afford the inhouse-team <br />
                         and good agencies is a very rare thing. <br />
                         <br /> <br />
                         Would you like to have  <br />
                         an outstaffed marketing team <br />
                         which knows what you need <br />
                         and how to get there? <br /></span>

                    </div>
                    <div className={mobile.overhere}>
                        <div className={mobile.overhereItems}>
                            <h3> HERE IT IS (Profi Marketing) </h3>
                            <span> You may start to delegate from <br /> any  <br />
                            of your current tasks and then <br /> - delegate as much as you like </span>
                            <button onClick={this.hubSpot}> DELEGATE NOW</button>
                        </div>
                    </div>
                    <div className={mobile.services} id="servicesM">
                        <div className={mobile.service}>
                            <div className={mobile.serviceImg}>
                                <img src={service1} />
                            </div>
                            <div className={mobile.serviceFoot}>
                                <h4>Marketing <br /> audit </h4>
                                <img src={triangle_bot} />
                            </div>
                        </div>
                        <div className={mobile.service}>
                            <div className={mobile.serviceImg}>
                                <img src={service2} />
                            </div>
                            <div className={mobile.serviceFoot}>
                                <h4>Targeting, <br />SMM</h4>
                                <img src={triangle_bot} />
                            </div>
                        </div>
                        <div className={mobile.service}>
                            <div className={mobile.serviceImg}>
                                <img src={service3} />
                            </div>
                            <div className={mobile.serviceFoot}>
                                <h4>Smart <br />landing</h4>
                                <img src={triangle_bot} />
                            </div>
                        </div>
                        <div className={mobile.service}>
                            <div className={mobile.serviceImg}>
                                <img src={service4} />
                            </div>
                            <div className={mobile.serviceFoot}>
                                <h4>Design, <br />photo content</h4>
                                <img src={triangle_bot} />
                            </div>
                        </div>
                        <button onClick={this.hubSpot}>Order marketing Now</button>
                    </div>
                    <div className={mobile.blog} id="blogM">
                        <h3>BLOG</h3>
                        <div className={classes.blogItem} data-aos="fade-down">
                            <a href="https://www.profi-space.com/bitva-titanov-marketing-vs-prodazhi/" target="_blank">
                                <img src={smart} />
                                <h4>CLASH OF THE TITANS <br /> marketing VS sales</h4>
                                <span>An eternal problem, in what business you would not come. It may not be visible at first glance, it may not surface so quickly, but if you look closely, everything will fall into place. Meet - their majesty marketing and sales. </span>
                                <p>READ MORE →</p>
                            </a>
                        </div>
                    </div>
                    <div className={mobile.contact} id="contactM">
                        <h3>CONTACTS</h3>
                        <div className={mobile.links}>
                            <a href="https://www.facebook.com/profispaceschool" target="_blank"><img src={fb} /></a>
                            <a href="https://t.me/profi_space" target="_blank"><img src={tg} /></a>
                        </div>
                        <span>Ulyana Kulikova <br/><a href="tel:+380637678430"> +38 063 767 84 30 </a><br />
                        <a href="tel:+971585332813">+971 58 533 28 13</a> <br />
                        ulianakulikova@gmail.com <br /></span>
                        <button onClick={this.hubSpot}> Order marketing Now </button>
                    </div>
                </div>
            </>
        );
    }

}

let mapStateToProps = (state) => ({
    currentLanguage: state.common.currentLanguage
})

export default connect(mapStateToProps, {
    setCurrentLanguage
})(withTranslation()(En));