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

import shark from '../../assets/images/blog/shark.jpg';
import zametka from '../../assets/images/blog/zametka.jpg';
import smart from '../../assets/images/blog/smart.jpg';

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
import Modal from '../Modal/Modal';

import FormHub from '../Modal/FormHub';
import { connect } from 'react-redux';
import { setCurrentLanguage } from '../../Redux/commonReducer';
import { withTranslation } from 'react-i18next';


class Ru extends React.Component {
    constructor(props){
        super(props);
    }

    state={
        textArray: ["Анализ текущего состояния бизнеса с точки зрения маркетинга (конкуренты / ценообразование / портфолио / каналы продвижения) и предложения по повышению эффективности маркетинга",
                    "Пошаговый план маркетинговых действий (4P / 4 C / 4 E), аналитика",
                    "Ведение соц. сетей (Instagram, Facebook, LinkedIn)",
                    "Создание одностраничного сайта, оптимизированного для поисковых систем",
                    "Разработка корпоративного стиля заказчика, разработка любых вижуалов для коммуникационных программ и таргетинга, создание фото контента (предметная съемка / каталожная съемка / коммерческая съемка)"],
        text: "",
        show: false,
        form: false
        
    }
    componentDidMount(){
        this.useEffect();
        this.props.setCurrentLanguage("ru");
        this.props.i18n.changeLanguage("ru");
    }

    useEffect = () =>{
        Aos.init({ duration: 1000 });
    }

    setText = (event) =>{
        this.setShow();

        const selected = this.state.textArray[event.target.id];

        this.setState({text: selected});
    }
    setShow = () =>{
        const show = !this.state.show;
        this.setState({show: show}, ()=>{
            
        });
    }

    hubSpot = () => {
        
        const form = !this.state.form;
        this.setState({form: form}, ()=>{});
    }

    render(){ 
        return(
            <>
                
                
                <div className={classes.main}>
                
                    {/* HOME */}
    
                    <div className={classes.home} id="home">
                        <div className={classes.container}>
                            <div className={classes.navbar}>
                                <img src={logo} />
                                <div className={classes.menu}>
                                    <Link to="services" smooth={true} duration={1000}>Услуги</Link>
                                    <Link to="portfolio" smooth={true} duration={1000}>Портфолио</Link>
                                    <Link to="pain" smooth={true} duration={1000}>Боли наших клиентов</Link>
                                    <Link to="blog" smooth={true} duration={1000}>Блог</Link>
                                    <Link to="contact" smooth={true} duration={1000}>Контакты</Link>
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
                            <h1 className={classes.headerHome} data-aos="fade-right">ВАША МАРКЕТИНГОВАЯ
                                                  <br />КОМАНДА НА АУТСОРСЕ</h1>
                            <h1 className={classes.headerHomeIpad} data-aos="fade-right">ВАША МАРКЕТИНГОВАЯ КОМАНДА  <br /> НА АУТСОРСЕ</h1>
                            <div className={classes.weare}>
                                <div className={classes.weareItem} data-aos="fade-up">
                                    <img src={key} />
                                    <span>Создаём <br /> маркетинг <br /> под ключ</span>
                                </div>
                                <div className={classes.weareItem} data-aos="fade-up">
                                    <img src={set} />
                                    <span>Новые <br /> возможности <br /> для вашего бизнеса</span>
                                </div>
                                <div className={classes.weareItem} data-aos="fade-up">
                                    <img src={horse} />
                                    <span>Маркетинговые<br /> решения <br /> бизнес-задач</span>
                                </div>
                            </div>
                        </div>
                        {this.state.form == true ? <FormHub show={this.state.form} hubSpot={this.hubSpot}/> : <></>}
                    </div>
    
                    {/* CYCLE */}
    
                    <div className={classes.cycle}>
                        <div className={classes.containerCycle}>
                            <button className={classes.getService} onClick={this.hubSpot}>Заказать услугу</button>
                            <h1 className={classes.cycleHeader}>МАРКЕТИНГОВОЕ <br />
                             АГЕНТСТВО <br />
                            ПОЛНОГО ЦИКЛА</h1>
                            <div className={classes.selector}>
                                <img src={triangle_left} />
                                <span className={classes.selectorText}>
                                    Ваша маркетинговая команда <br />
                                    на аутсорсе. <br />
                                    Любые маркетинговые решения <br />
                                    <span className={classes.selectorTextBold}>для вашего бизнеса. </span><br />
                                    Маркетинговый аудит, <br />
                                    маркетинговые стратегии, <br />
                                    SMM (таргетинг и продвижение), SEO оптимизация,<br />
                                    создание сайтов, визуальное оформление.</span>
                                <img src={triangle_right} />
                            </div>
                            <div className={classes.getMore} data-aos="fade-down">
                                <div className={classes.getMoreItem}>
                                    <img src={audit} />
                                    <span>Маркетинговый <br />аудит</span>
                                    <button onClick={this.setText} id="0">Узнать больше</button>
                                </div>
                                <div className={classes.getMoreItem}>
                                    <img src={strategy} />
                                    <span>Маркетинговые <br />стратегии</span>
                                    <button onClick={this.setText} id="1">Узнать больше</button>
                                </div>
                                <div className={classes.getMoreItem}>
                                    <img src={smm} />
                                    <span>SMM (таргетинг и <br />продвижение)</span>
                                    <button onClick={this.setText} id="2">Узнать больше</button>
                                </div>
                                <div className={classes.getMoreItem}>
                                    <img src={pc} />
                                    <span>Умный<br />лендинг</span>
                                    <button onClick={this.setText} id="3">Узнать больше</button>
                                </div>
                                <div className={classes.getMoreItem}>
                                    <img src={pazzle} />
                                    <span>Визуальное <br />оформление</span>
                                    <button onClick={this.setText} id="4">Узнать больше</button>
                                </div>
                                {this.state.show == false ? <></> : <Modal show={this.state.show} setShow={this.setShow} text={this.state.text}/>}
                                
                            </div>
                            <div className={classes.getMoreIpad}>
                            
                                <div className={classes.getMoreRow}>
                                    <div className={classes.getMoreItem} data-aos="fade-down">
                                        <img src={audit} />
                                        <span>Маркетинговый <br />аудит</span>
                                        <button onClick={this.setText} id="0">Узнать больше</button>
                                    </div>
                                    <div className={classes.getMoreItem} data-aos="fade-down">
                                        <img src={strategy} />
                                        <span>Маркетинговые <br />стратегии</span>
                                        <button onClick={this.setText} id="1">Узнать больше</button>
                                    </div>
                                    <div className={classes.getMoreItem} data-aos="fade-down">
                                        <img src={smm} />
                                        <span>SMM (таргетинг и <br />продвижение)</span>
                                        <button onClick={this.setText} id="2">Узнать больше</button>
                                    </div>
                                </div>
                                {this.state.show == false ? <></> : <Modal show={this.state.show} setShow={this.setShow} text={this.state.text}/>}
                                <div className={classes.getMoreRow}>
                                    <div className={classes.getMoreItem}>
                                        <img src={pc} />
                                        <span>Умный<br />лендинг</span>
                                        <button onClick={this.setText} id="3">Узнать больше</button>
                                    </div>
                                    <div className={classes.getMoreItem}>
                                        <img src={pazzle} />
                                        <span>Визуальное <br />оформление</span>
                                        <button onClick={this.setText} id="4">Узнать больше</button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
    
                    {/* GIFT */}
    
                    <div className={classes.gift}>
                        <div className={classes.giftContainer}>
                            <div className={classes.wantGift}>
                                <h1 className={classes.giftHeader} data-aos="fade-bottom">Хочу <br />Подарок!</h1>
                                <a href="src/assets/docs/filmsRu.pdf" download>ПОЛУЧИТЬ</a>
                                <span>список фильмов <br />по теме "маркетинг"</span>
                            </div>
                            <div className={classes.giftImg}>
                                <img src={gift} data-aos="fade-left" />
                            </div>
                        </div>
                    </div>
    
                    {/* PORTFOLIO */}
    
                    <div className={classes.portfolio} id="portfolio">
                        <div className={classes.portfolioContainer}>
                            <h1 className={classes.portfolioHeader}>ПОРТФОЛИО</h1>
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
                            <h1 className={classes.painHeader}>БОЛИ НАШИХ <br />КЛИЕНТОВ</h1>
                            <div className={classes.reasonsBlock}>
                                <div className={classes.reasons}>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>не знаешь как поднять продажи сайта?</span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>нет четкой стратегии?</span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>бардак в аналитике?</span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>нет узнаваемости на рынке?</span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>не успеваешь вести соцсети?</span>
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
                                    <span className={classes.reasonsText}>Это самый сложный и интересный период в жизни <br />
                                        предпринимателя. Когда бизнес уже запущен и срочно нужен <br />
                                        маркетинг, но команду инхаус позволить себе не можешь.<br />
                                        <br />
                                        Мы - твоя автономная команда, которая сама подумает, <br />
                                        поймет, что нужно для продвижения, задаст правильные вопросы, <br />
                                        докопается до истины,<br />
                                        которая будет полезная твоему бизнесу...</span>
                                </div>
                                <div className={classes.reasons}>
                                    <div className={classes.waves}>
                                        <img src={wave5} />
                                        <img src={wave6} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.painContainerIpad}  id="pain">
                            <h1 className={classes.painHeader}>БОЛИ НАШИХ <br />КЛИЕНТОВ</h1>
                            <div className={classes.reasonsBlock}>
                                <div className={classes.reasons}>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>не знаешь как поднять продажи сайта?</span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>нет четкой стратегии?</span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>бардак в аналитике?</span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>нет узнаваемости на рынке?</span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>не успеваешь вести соцсети?</span>
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
                                    <span className={classes.reasonsText}>Это самый сложный и интересный период в жизни <br />
                                        предпринимателя. Когда бизнес уже запущен и срочно нужен <br />
                                        маркетинг, но команду инхаус позволить себе не можешь.<br />
                                        <br />
                                        Мы - твоя автономная команда, которая сама подумает, <br />
                                        поймет, что нужно для продвижения, задаст правильные вопросы, <br />
                                        докопается до истины,<br />
                                        которая будет полезная твоему бизнесу...</span>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* OVERHERE */}
    
                    <div className={classes.overhere}>
                        <div className={classes.overhereContainer}>
                            <div className={classes.overhereItems}>
                                <h3>ТАК ВОТ ЖЕ ОНА [мы]</h3>
                                <span>начни делегирование с одной задачи, <br />
                                тебе так понравится, что мы возьмем всю заботу о маркетинге! </span>
                                <button  onClick={this.hubSpot}>ДЕЛЕГИРОВАТЬ</button>
                            </div>
                        </div>
                    </div>
    
                    {/* SERVICES */}
    
                    <div className={classes.services} id="services">
                        <div className={classes.servicesContainer}>
                            <h1 className={classes.servicesHeader}>УСЛУГИ</h1>
                            <div className={classes.service} data-aos="fade-right">
                                <div className={classes.serviceSide}>
                                    <div className={classes.serviceBlock}>
                                        <div className={classes.serviceBlueBlock}>
                                            <img src={service1} className={classes.serviceImg} />
                                        </div>
                                        <img src={triagnle_blue} />
                                    </div>
                                    <h4>Маркетинговый <br />аудит</h4>
                                </div>
                                <div className={classes.serviceSide}>
                                    <div className={classes.serviceBlock}>
                                        <div className={classes.serviceBlueBlockSpan}>
                                            <span>анализ текущего состояния <br />
                                            бизнеса с точки зрения <br />
                                            маркетинга (конкуренты / <br />
                                            ценообразование / <br />
                                            портфолио / каналы <br />
                                            продвижения) <br />
                                            и предложения по <br />
                                            повышению эффективности <br />
                                            маркетинга</span>
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
                                    <h4>Таргетинг, SMM</h4>
                                </div>
                                <div className={classes.serviceSide}>
                                    <div className={classes.serviceBlock}>
                                        <div className={classes.serviceOrangeBlockSpan}>
                                            <span>создание аккаунтов, ведение и продвижение <br />
                                            соцсетей:<br/> Instagram, Facebook, LinkedIn <br />
                                            <br/>
                                            копирайт, смм, таргетинг, <br/>
                                            визуальное оформление </span>
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
                                    <h4>Умный лендинг</h4>
                                </div>
                                <div className={classes.serviceSide}>
                                    <div className={classes.serviceBlock}>
                                        <div className={classes.serviceBlueBlockSpan}>
                                            <span>создание одностраничного <br />
                                                сайта, оптимизированного <br />
                                                для поисковых систем <br/>
                                                <br/>
                                                создание полноценных сайтов, <br/>
                                                SEO-оптимизация
                                            </span>
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
                                    <h4>Дизайн, фотоконтент</h4>
                                </div>
                                <div className={classes.serviceSide}>
                                    <div className={classes.serviceBlock}>
                                        <div className={classes.serviceOrangeBlockSpan}>
                                            <span>разработка корпоративного <br />
                                        стиля, создание вижуалов <br />
                                        для коммуникационных <br />
                                        программ и таргетинга<br />
                                                <br />
                                        создание фото-контента <br />
                                        (предметная съемка / <br />
                                        каталожная съемка / <br />
                                        коммерческая съемка</span>
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
                                        <h4>Маркетинговый <br />аудит</h4>
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
                                        <h4>SMM, таргетинг</h4>
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
                                        <h4>Умный лендинг</h4>
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
                                        <h4>Дизайн, <br />фотоконтент </h4>
                                        <img src={triangle_bot} />
                                    </div>
                                </div>
                            </div>
                            <button  onClick={this.hubSpot}>Заказать услугу</button>
                        </div>
                    </div>
    
                    {/* BLOG */}
    
                    <div className={classes.blog} id="blog">
                        <div className={classes.blogContainer}>
                            <h1 className={classes.blogHeader}>БЛОГ</h1>
                            <div className={classes.lorem}>
                                <div className={classes.blogItem} data-aos="fade-down">
                                    <a href="https://www.profi-space.com/bitva-titanov-marketing-vs-prodazhi/" target="_blank">
                                        <img src={smart}/>
                                        <h4>БИТВА ТИТАНОВ <br/> маркетинг VS продажи</h4>
                                        <span>Извечная проблема, в какой бизнес вы бы не пришли. Она может быть не видна на первый взгляд, не так быстро всплыть на поверхность, но, если присмотреться, все встанет на свои места. Встречайте – их величество маркетинг и продажи. </span>
                                        <p>ЧИТАТЬ БОЛЬШЕ →</p>
                                    </a>
                                </div>
                                <div className={classes.blogItem} data-aos="fade-down">
                                    <a href="https://www.profi-space.com/bitva-titanov-marketing-ili-seylz-chas/" target="_blank">
                                        <img src={shark}/>
                                        <h4>БИТВА ТИТАНОВ <br/> МАРКЕТИНГ ИЛИ СЕЙЛЗ.</h4>
                                        <span>Любую бизнес-организацию делают люди, и какой бы ни была структура – матричная, вертикальная, проектная и много еще какая – всегда можно найти способ работать эффективно и с минимизацией стрессовых факторов. </span>
                                        <p>ЧИТАТЬ БОЛЬШЕ →</p>
                                    </a>
                                </div>
                                <div className={classes.blogItem} data-aos="fade-down">
                                    <a href="https://www.profi-space.com/people-vse-khavaet/" target="_blank">
                                        <img src={zametka}/>
                                        <h4>ЕСЛИ У РУКОВОДИТЕЛЯ НЕТ БРЕНДА<br/> ОН НЕ СУЩЕСТВУЕТ</h4>
                                        <span>Из названия статьи понятно, о чем сейчас пойдет речь. Зачем руководителю бренд, он же уже руководитель? Вполне резонный вопрос.</span>
                                        <p>ЧИТАТЬ БОЛЬШЕ →</p>
                                    </a>
                                </div>
                            </div>
                            <div className={classes.loremIpad}>
                                <div className={classes.blogItem} data-aos="fade-down">
                                    <a href="https://www.profi-space.com/bitva-titanov-marketing-vs-prodazhi/" target="_blank">
                                        <img src={smart}/>
                                        <h4>БИТВА ТИТАНОВ <br/> маркетинг VS продажи</h4>
                                        <span>ЛИзвечная проблема, в какой бизнес вы бы не пришли. Она может быть не видна на первый взгляд, не так быстро всплыть на поверхность, но, если присмотреться, все встанет на свои места. Встречайте – их величество маркетинг и продажи. </span>
                                        <p>ЧИТАТЬ БОЛЬШЕ →</p>
                                    </a>
                                </div>
                                <div className={classes.blogItem} data-aos="fade-down">
                                    <a href="https://www.profi-space.com/bitva-titanov-marketing-ili-seylz-chas/" target="_blank">
                                        <img src={shark}/>
                                        <h4>БИТВА ТИТАНОВ <br/> МАРКЕТИНГ ИЛИ СЕЙЛЗ.</h4>
                                        <span>Любую бизнес-организацию делают люди, и какой бы ни была структура – матричная, вертикальная, проектная и много еще какая – всегда можно найти способ работать эффективно и с минимизацией стрессовых факторов. </span>
                                        <p>ЧИТАТЬ БОЛЬШЕ →</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* CONTACT */}
    
                    <div className={classes.contact} id="contact">
                        <div className={classes.contactContainer}>
                            <h1 className={classes.contactHeader}>КОНТАКТЫ</h1>
                            <div className={classes.links}>
                                <a href="https://www.facebook.com/profispaceschool" target="_blank"><img src={fb} /></a>
                                <a href="https://t.me/profi_space" target="_blank"><img src={tg} /></a>
                            </div>
                            <span>Ульяна Куликова <a href="tel:+380637678430"> +38 063 767 84 30 </a> <br />
                            Ulyana Kulikova <a href="tel:+971585332813">+971 58 533 28 13</a><br />
                            ulianakulikova@gmail.com </span>
                            <button  onClick={this.hubSpot}>Заказать услугу</button>
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
                        <h3>ВАША МАРКЕТИНГОВАЯ <br />
                        КОМАНДА <br />
                        НА АУТСОРСЕ</h3>
                        <div className={mobile.wearerow}>
                            <div className={mobile.weareItem} data-aos="fade-up">
                                <img src={key} />
                                <span className={mobile.weareSpan}>Создаём <br /> маркетинг <br /> под ключ</span>
                            </div>
                            <div className={mobile.weareItem} data-aos="fade-up">
                                <img src={set} />
                                <span className={mobile.weareSpan}>Новые <br /> возможности <br /> для вашего <br /> бизнеса</span>
                            </div>
                        </div>
                        <div className={mobile.weareLastRow}>
                            <div className={mobile.weareItem} data-aos="fade-up">
                                <img src={horse} />
                                <span className={mobile.weareSpan}>Маркетинговые<br /> решения <br /> бизнес-задач</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className={mobile.cycle}>
                        {this.state.form == true ? <FormHub show={this.state.form} hubSpot={this.hubSpot}/> : <></>}
                        <button className={mobile.getService}  onClick={this.hubSpot}>Заказать услугу</button>
                        <h1 className={mobile.cycleHeader}>МАРКЕТИНГОВОЕ <br />
                                АГЕНТСТВО <br />
                                ПОЛНОГО ЦИКЛА</h1>
                        <span className={mobile.selectorText}>
                            Ваша маркетинговая команда <br />
                                на аутсорсе (по запросу). <br />
                                Любые маркетинговые решения <br />
                            <span className={mobile.selectorTextBold}>для вашего бизнеса. </span><br />
                                Маркетинговый аудит, <br />
                                маркетинговые стратегии, <br />
                                SMM (таргетинг и продвижение), SEO оптимизация, <br />
                                создание сайтов, визуальное оформление.</span>
                        <div className={mobile.getMoreItem}>
                            <img src={audit} />
                            <span>Маркетинговый <br />аудит</span>
                            <button onClick={this.setText} id="0">Узнать больше</button>
                        </div>
                        <div className={mobile.getMoreItem}>
                            <img src={strategy} />
                            <span>Маркетинговые <br />стратегии</span>
                            <button onClick={this.setText} id="1">Узнать больше</button>
                        </div>
                        <div className={mobile.getMoreItem}>
                            <img src={smm} />
                            <span>SMM (таргетинг и <br />продвижение)</span>
                            <button onClick={this.setText} id="2">Узнать больше</button>
                        </div>
                        <div className={mobile.getMoreItem}>
                            <img src={pc} />
                            <span>Умный<br />лендинг</span>
                            <button onClick={this.setText} id="3">Узнать больше</button>
                        </div>
                        <div className={mobile.getMoreItem}>
                            <img src={pazzle} />
                            <span>Визуальное <br />оформление</span>
                            <button onClick={this.setText} id="4">Узнать больше</button>
                        </div>
                        {this.state.show == false ? <></> : <Modal show={this.state.show} setShow={this.setShow} text={this.state.text}/>}
                    </div>
                    <div className={mobile.gift}>
                        <h1 data-aos="fade-bottom">Хочу <br />Подарок!</h1>
                        <a href="src/assets/docs/filmsRu.pdf" download>ПОЛУЧИТЬ</a>
                        <span>список фильмов <br />по теме "маркетинг"</span>
                    </div>
                    <div className={mobile.portfolio} id="portfolioM">
                        <h3>ПОРТФОЛИО</h3>
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
                                <img src={beachbody}/>
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
                                <img src={mylu}/>
                            </div>
                        </div>
                    </div>
                    <div className={mobile.pain}  id="painM">
                        <h3>БОЛИ НАШИХ <br/>КЛИЕНТОВ</h3>
                        <div className={mobile.reasons}>
                            <div className={mobile.reason}>
                                <img src={redelipse}/>
                                <span>не знаешь как поднять продажи сайта?</span>
                            </div>
                            <div className={mobile.reason}>
                                <img src={redelipse}/>
                                <span>нет четкой стратегии?</span>
                            </div>
                            <div className={mobile.reason}>
                                <img src={redelipse}/>
                                <span>бардак в аналитике?</span>
                            </div>
                            <div className={mobile.reason}>
                                <img src={redelipse}/>
                                <span>нет узнаваемости на рынке?</span>
                            </div>
                            <div className={mobile.reason}>
                                <img src={redelipse}/>
                                <span>не успеваешь вести соцсети?</span>
                            </div>
                        </div>
                        <span className={mobile.reasonText}> Это самый сложный и <br/>
                        интересный период в жизни <br/> 
                        предпринимателя. Когда бизнес <br/>
                        уже идёт и срочно нужен маркетинг,<br/>
                        но команду инхаус позволить <br/> 
                        себе не можешь.
                        <br/><br/>
                        Мы - твоя автономная команда, <br/>
                        которая сама подумает, поймет, <br/>
                        что нужно для продвижения, <br/>
                        задаст правильные вопросы,<br/>
                        докопается до истины,<br/>
                        которая будет полезная твоему <br/>
                        бизнесу...
                        </span>
                        
                    </div>
                    <div className={mobile.overhere}>
                        <div className={mobile.overhereItems}>
                            <h3>ТАК ВОТ ЖЕ ОНА [мы]</h3>
                            <span>начни делегирование с одной задачи, 
                            <br/> тебе так понравится, <br />
                            что мы возьмем всю заботу о маркетинге! </span>
                            <button onClick={this.hubSpot}>ДЕЛЕГИРОВАТЬ</button>
                        </div>
                    </div>
                    <div className={mobile.services} id="servicesM">
                        <div className={mobile.service}>
                            <div className={mobile.serviceImg}>
                                <img src={service1}/>
                            </div>
                            <div className={mobile.serviceFoot}>
                                <h4>Маркетинговый <br/>аудит</h4>
                                <img src={triangle_bot}/>
                            </div>
                        </div>
                        <div className={mobile.service}>
                            <div className={mobile.serviceImg}>
                                <img src={service2}/>
                            </div>
                            <div className={mobile.serviceFoot}>
                                <h4>Таргетинг, <br/>SMM</h4>
                                <img src={triangle_bot}/>
                            </div>
                        </div>
                        <div className={mobile.service}>
                            <div className={mobile.serviceImg}>
                                <img src={service3}/>
                            </div>
                            <div className={mobile.serviceFoot}>
                                <h4>Умный <br/>лендинг</h4>
                                <img src={triangle_bot}/>
                            </div>
                        </div>
                        <div className={mobile.service}>
                            <div className={mobile.serviceImg}>
                                <img src={service4}/>
                            </div>
                            <div className={mobile.serviceFoot}>
                                <h4>Дизайн, <br/>фотоконтент</h4>
                                <img src={triangle_bot}/>
                            </div>
                        </div>
                        <button onClick={this.hubSpot}>Заказать услугу</button>
                    </div>
                    <div className={mobile.blog}  id="blogM">
                        <h3>БЛОГ</h3>
                        <div className={classes.blogItem} data-aos="fade-down">
                            <a href="https://www.profi-space.com/bitva-titanov-marketing-vs-prodazhi/" target="_blank">
                                <img src={smart}/>
                                <h4>БИТВА ТИТАНОВ <br/> маркетинг VS продажи</h4>
                                <span>Извечная проблема, в какой бизнес вы бы не пришли. Она может быть не видна на первый взгляд, не так быстро всплыть на поверхность, но, если присмотреться, все встанет на свои места. Встречайте – их величество маркетинг и продажи. </span>
                                <p>ЧИТАТЬ БОЛЬШЕ →</p>
                            </a>
                        </div>
                    </div>
                    <div className={mobile.contact} id="contactM">
                        <h3>КОНТАКТЫ</h3>
                        <div className={mobile.links}>
                            <a href="https://www.facebook.com/profispaceschool" target="_blank"><img src={fb} /></a>
                            <a href="https://t.me/profi_space" target="_blank"><img src={tg} /></a>
                        </div>
                        <span>Ульяна Куликова <a href="tel:+380637678430"> +38 063 767 84 30 </a> <br/>
                        Ulyana Kulikova <a href="tel:+971585332813">+971 58 533 28 13</a> <br />
                        ulianakulikova@gmail.com</span>
                        <button onClick={this.hubSpot}>Заказать услугу</button>
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
})(withTranslation()(Ru));