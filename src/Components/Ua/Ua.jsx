import React from 'react';
import classes from '../Css.module.css';
import mobile from '../Mobile.module.css';
import Languages from '../Languages/Languages';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

import Aos from 'aos';
import 'aos/dist/aos.css';

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
import mylu from '../../assets/images/mylu.png';
import beachbody from '../../assets/images/beachbody.png';

import uctc from '../../assets/images/uctc.jpg';
import center from '../../assets/images/center.jpeg';
import cosme from '../../assets/images/cosme.jpeg';
import almadiah from '../../assets/images/almadiah.jpeg';
import agrotok from '../../assets/images/agrotok.png';
import luxca from '../../assets/images/luxca.jpeg';
import msh from '../../assets/images/msh.png';
import sprayagro from '../../assets/images/sprayagro.jpeg';

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
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';


class Ua  extends React.Component{

    constructor(props){
        super(props);
    }

    state={
        textArray: ["Аналіз поточного стану бізнесу з боку маркетингу (конкуренти / ціноутворення / портфоліо / канали просування) і пропозиції з підвищення ефективності маркетингу",
                    "Поетапний план маркетингових дій (4P / 4 C / 4 E), аналітика",
                    "Ведення соціальних мереж (Instagram, Facebook, LinkedIn)",
                    "Створення односторінкового сайту з адаптацією до пошукових систем",
                    "Розробка корпоративного стилю для замовника, Розробка віжуалів різної складності для комунікаційних програм та таргетингу, Створення фотоконтенту (предметна зйомка / зйомка для каталогу / комерційна зйомка)"],
        text: "",
        show: false,
        form: false
        
    }
    componentDidMount(){
        this.useEffect();
        this.props.setCurrentLanguage("ua");
        this.props.i18n.changeLanguage("ua");
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
        this.setState({form: form}, ()=>{
           
        });
    }

    render(){
        return (
            <>
                <div className={classes.main}>
    
                    {/* HOME */}
    
                    <div className={classes.home} id="home">
                        <div className={classes.container}>
                            <div className={classes.navbar}>
                                <img src={logo} />
                                <div className={classes.menu}>
                                    <Link to="services" smooth={true} duration={1000}>Послуги</Link>
                                    <Link to="portfolio" smooth={true} duration={1000}>Портфоліо</Link>
                                    <Link to="pain" smooth={true} duration={1000}>Болі наших клієнтів</Link>
                                    <Link to="blog" smooth={true} duration={1000}>Блог</Link>
                                    <Link to="contact" smooth={true} duration={1000}>Контакти</Link>
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
                            <h1 className={classes.headerHome} data-aos="fade-right">ВАША МАРКЕТИНГОВА
                                                  <br></br>КОМАНДА НА АУТСОРСІ</h1>
                            <h1 className={classes.headerHomeIpad} data-aos="fade-right">ВАША МАРКЕТИНГОВА КОМАНДА  <br /> НА АУТСОРСІ</h1>
                            <div className={classes.weare}>
                                <div className={classes.weareItem} data-aos="fade-up">
                                    <img src={key} />
                                    <span>Створюємо <br /> маркетинг <br /> під ключ</span>
                                </div>
                                <div className={classes.weareItem} data-aos="fade-up">
                                    <img src={set} />
                                    <span>Нові <br /> можливості <br /> для вашого бізнесу</span>
                                </div>
                                <div className={classes.weareItem} data-aos="fade-up">
                                    <img src={horse} />
                                    <span>Маркетингові<br /> рішення <br /> бізнес-задач</span>
                                </div>
                            </div>
                        </div>
                        {this.state.form == true ? <FormHub show={this.state.form} hubSpot={this.hubSpot}/> : <></>}
                    </div>
    
                    {/* CYCLE */}
    
                    <div className={classes.cycle}>
                        <div className={classes.containerCycle}>
                            <button className={classes.getService} onClick={this.hubSpot}>Замовити послугу</button>
                            <h1 className={classes.cycleHeader}>МАРКЕТИНГОВЕ <br />
                             АГЕНТСТВО <br />
                            ПОВНОГО ЦИКЛУ</h1>
                            <div className={classes.selector}>
                                <img src={triangle_left} />
                                <span className={classes.selectorText}>
                                    Ваша маркетингова команда <br />
                                    на аутсорсі (за запитом). <br />
                                    Будь-які маркетингові рішення <br />
                                    <span className={classes.selectorTextBold}>для вашого бизнесу. </span><br />
                                    Маркетинговий аудит, <br />
                                    маркетингові стратегіі, <br />
                                    SMM (націлювання та просування), SEO оптимізація, <br/>
                                    створення сайтів, візуальне оформлення.
                                   </span>
                                <img src={triangle_right} />
                            </div>
                            <div className={classes.getMore} data-aos="fade-down">
                                <div className={classes.getMoreItem}>
                                    <img src={audit} />
                                    <span>Маркетинговий <br />аудит</span>
                                    <button onClick={this.setText} id="0">Дізнатись більше</button>
                                </div>
                                <div className={classes.getMoreItem}>
                                    <img src={strategy} />
                                    <span>Маркетингові <br />стратегії</span>
                                    <button onClick={this.setText} id="1">Дізнатись більше</button>
                                </div>
                                <div className={classes.getMoreItem}>
                                    <img src={smm} />
                                    <span>SMM (таргетинг та <br />просунення)</span>
                                    <button onClick={this.setText} id="2">Дізнатись більше</button>
                                </div>
                                <div className={classes.getMoreItem}>
                                    <img src={pc} />
                                    <span>Розумний<br />лендинг</span>
                                    <button onClick={this.setText} id="3">Дізнатись більше</button>
                                </div>
                                <div className={classes.getMoreItem}>
                                    <img src={pazzle} />
                                    <span>Візуальне <br />оформлення</span>
                                    <button onClick={this.setText} id="4">Дізнатись більше</button>
                                </div>
                                {this.state.show == false ? <></> : <Modal show={this.state.show} setShow={this.setShow} text={this.state.text}/>}
                            </div>
                            <div className={classes.getMoreIpad}>
                                <div className={classes.getMoreRow}>
                                    <div className={classes.getMoreItem} data-aos="fade-down">
                                        <img src={audit} />
                                        <span>Маркетинговий <br />аудит</span>
                                        <button onClick={this.setText} id="0">Дізнатись більше</button>
                                    </div>
                                    <div className={classes.getMoreItem} data-aos="fade-down">
                                        <img src={strategy} />
                                        <span>Маркетингові <br />стратегії</span>
                                        <button onClick={this.setText} id="1">Дізнатись більше</button>
                                    </div>
                                    <div className={classes.getMoreItem} data-aos="fade-down">
                                        <img src={smm} />
                                        <span>SMM (таргетинг та <br />просунення)</span>
                                        <button onClick={this.setText} id="2">Дізнатись більше</button>
                                    </div>
                                </div>
                                {this.state.show == false ? <></> : <Modal show={this.state.show} setShow={this.setShow} text={this.state.text}/>}
                                <div className={classes.getMoreRow}>
                                    <div className={classes.getMoreItem}>
                                        <img src={pc} />
                                        <span>Розумний<br />лендинг</span>
                                        <button onClick={this.setText} id="3">Дізнатись більше</button>
                                    </div>
                                    <div className={classes.getMoreItem}>
                                        <img src={pazzle} />
                                        <span>Візуальне <br />оформлення</span>
                                        <button onClick={this.setText} id="4">Дізнатись більше</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* GIFT */}
    
                    <div className={classes.gift}>
                        <div className={classes.giftContainer}>
                            <div className={classes.wantGift}>
                                <h1 className={classes.giftHeader} data-aos="fade-bottom">Хочу <br />Подарунок!</h1>
                                <a href="src/assets/docs/filmsUa.pdf" download>ОТРИМАТИ</a>
                                <span>список фільмів <br />з теми "маркетинг"</span>
                            </div>
                            <div className={classes.giftImg}>
                                <img src={gift} data-aos="fade-left" />
                            </div>
                        </div>
                    </div>
    
                    {/* PORTFOLIO */}
    
                    <div className={classes.portfolio} id="portfolio">
                        <div className={classes.portfolioContainer}>
                            <h1 className={classes.portfolioHeader}>ПОРТФОЛІО</h1>
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
                            <h1 className={classes.painHeader}>БОЛІ НАШИХ <br />КЛІЄНТІВ</h1>
                            <div className={classes.reasonsBlock}>
                                <div className={classes.reasons}>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>не знаєш як підняти продажі сайту?</span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>немає чіткої стратегії?</span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>бардак в аналітиці?</span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>немає впізнаваності на ринку?</span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>не встигаєш вести соцмережі?</span>
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
                                    <span className={classes.reasonsText}>Це найскладніший і цікавий період в житті<br />
                                        підприємця. Коли бізнес вже йде і потрібен <br />
                                        маркетинг,<br />
                                        але команду інхаус дозволити собі не можеш.<br />
                                        І підрядників нормальних хрін знайдеш.<br />
                                        <br />
                                        Ми – твоя автономна команда, яка сама подумає, <br />
                                        зрозуміє, що потрібно для просування,<br />
                                        поставить правильні питання, докопається до істини,<br />
                                        яка буде корисна твоєму бізнесу...
                                    </span>
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
                            <h1 className={classes.painHeader}>БОЛІ НАШИХ <br />КЛІЄНТІВ</h1>
                            <div className={classes.reasonsBlock}>
                                <div className={classes.reasons}>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>не знаєш як підняти продажі сайту?</span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>немає чіткої стратегії?</span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>бардак в аналітиці?</span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>немає впізнаваності на ринку?</span>
                                    </div>
                                    <div className={classes.reason} data-aos="fade-right">
                                        <img src={redelipse} />
                                        <span>не встигаєш вести соцмережі?</span>
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
                                



                                    <span className={classes.reasonsText}>Це найскладніший і найцікавіший період у житті<br />
                                        підприємця. Коли бізнес вже запущений і терміново потрібний маркетинг,<br />
                                        але команду інхаус дозволити собі не можеш.<br />
                                        <br />
                                        Ми – твоя автономна команда, яка сама подумає, <br/>
                                        зрозуміє, що потрібно для просування,  поставить правильні питання,<br/>
                                        докопається до істини,<br/>
                                        яка буде корисна твоєму бізнесу...</span>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* OVERHERE */}
    
                    <div className={classes.overhere}>
                        <div className={classes.overhereContainer}>
                            <div className={classes.overhereItems}>
                                <h3>ТАК ОСЬ ВОНА [ми]</h3>
                                <span>почни делегування з одного завдання,<br />
                                тобі так сподобається, що ми візьмемо всю турботу про маркетинг! </span>
                                <button onClick={this.hubSpot}>ДЕЛЕГУВАТИ</button>
                            </div>
                        </div>
                    </div>
    
                    {/* SERVICES */}
    
                    <div className={classes.services} id="services">
                        <div className={classes.servicesContainer}>
                            <h1 className={classes.servicesHeader}>ПОСЛУГИ</h1>
                            <div className={classes.service} data-aos="fade-right">
                                <div className={classes.serviceSide}>
                                    <div className={classes.serviceBlock}>
                                        <div className={classes.serviceBlueBlock}>
                                            <img src={service1} className={classes.serviceImg} />
                                        </div>
                                        <img src={triagnle_blue} />
                                    </div>
                                    <h4>Маркетинговий <br />аудит</h4>
                                </div>
                                <div className={classes.serviceSide}>
                                    <div className={classes.serviceBlock}>
                                        <div className={classes.serviceBlueBlockSpan}>
                                            <span>аналіз поточного стану <br />
                                            бізнесу з точки зору <br />
                                            маркетингу (конкуренти / <br />
                                            ціноутворення /<br />
                                            портфоліо / канали <br />
                                            просування) <br />
                                            і пропозиції щодо <br />
                                            підвищення ефективності<br />
                                            маркетингу</span>
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
                                            <span>створення акаунтів, ведення та просування<br />
                                            соцмереж: <br/> 
                                            Instagram, Facebook, LinkedIn,<br />
                                            копірайт, смм, таргетинг, <br/>
                                            візуальне оформлення </span>
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
                                    <h4>Розумний лендинг</h4>
                                </div>
                                <div className={classes.serviceSide}>
                                    <div className={classes.serviceBlock}>
                                        <div className={classes.serviceBlueBlockSpan}>
                                            <span>створення односторінкового <br />
                                                сайта, оптимізованого <br />
                                                для пошукових систем
                                                <br/>
                                                створення повноцінних сайтів,<br/>
                                                SEO-оптимізація
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
                                            <span>розробка корпоративного <br />
                                        стилю, створення віжуалів <br />
                                        для комунікаційних <br />
                                        програм і таргетингу<br />
                                                <br />
                                        створення фотоконтенту <br />
                                        (предметна зйомка/ <br />
                                        каталожна зйомка / <br />
                                        комерційна зйомка</span>
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
                                        <h4>Маркетинговий <br />аудит</h4>
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
                                        <h4>Розумний лендинг</h4>
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
                            <button onClick={this.hubSpot}>Замовити послугу</button>
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
                                        <h4> БИТВА ТИТАНІВ <br/> маркетинг VS продажу </ h4>
                                        <span> Одвічна проблема, в який бізнес ви б не прийшли. Вона може бути не видно на перший погляд, не так швидко спливти на поверхню, але, якщо придивитися, все стане на свої місця. Зустрічайте - їх величність маркетинг та продажу. </span>
                                        <p>ЧИТАТИ БІЛЬШЕ →</p>
                                    </a>
                                </div>
                                <div className={classes.blogItem} data-aos="fade-down">
                                    <a href="https://www.profi-space.com/bitva-titanov-marketing-ili-seylz-chas/" target="_blank">
                                        <img src={shark}/>
                                        <h4>БИТВА ТИТАНІВ <br/> МАРКЕТИНГ АБО СЕЙЛЗ.</h4>
                                        <span>Будь-яку бізнес-організацію роблять люди, і якою б не була структура - матрична, вертикальна, проектна та багато ще якась - завжди можна знайти спосіб працювати ефективно і з мінімізацією стресових факторів.</span>
                                        <p>ЧИТАТИ БІЛЬШЕ →</p>
                                    </a>
                                </div>
                                <div className={classes.blogItem} data-aos="fade-down">
                                    <a href="https://www.profi-space.com/people-vse-khavaet/" target="_blank">
                                        <img src={zametka}/>
                                        <h4>ЯКЩО У КЕРІВНИКА НЕМАЄ БРЕНДА<br/> ВІН НЕ ІСНУЄ</h4>
                                        <span>З назви статті зрозуміло, про що зараз піде мова. Навіщо керівнику бренд, він же вже керівник? Цілком слушне запитання.</span>
                                        <p>ЧИТАТИ БІЛЬШЕ →</p>
                                    </a>
                                </div>
                            </div>
                            <div className={classes.loremIpad}>
                                <div className={classes.blogItem} data-aos="fade-down">
                                    <a href="https://www.profi-space.com/bitva-titanov-marketing-vs-prodazhi/" target="_blank">
                                        <img src={smart}/>
                                        <h4> БИТВА ТИТАНІВ <br/> маркетинг VS продажу </ h4>
                                        <span> Одвічна проблема, в який бізнес ви б не прийшли. Вона може бути не видно на перший погляд, не так швидко спливти на поверхню, але, якщо придивитися, все стане на свої місця. Зустрічайте - їх величність маркетинг та продажу. </span>
                                        <p>ЧИТАТИ БІЛЬШЕ →</p>
                                    </a>
                                </div>
                                <div className={classes.blogItem} data-aos="fade-down">
                                    <a href="https://www.profi-space.com/bitva-titanov-marketing-ili-seylz-chas/" target="_blank">
                                        <img src={shark}/>
                                        <h4>БИТВА ТИТАНІВ <br/> МАРКЕТИНГ АБО СЕЙЛЗ.</h4>
                                        <span>Будь-яку бізнес-організацію роблять люди, і якою б не була структура - матрична, вертикальна, проектна та багато ще якась - завжди можна знайти спосіб працювати ефективно і з мінімізацією стресових факторів.</span>
                                        <p>ЧИТАТИ БІЛЬШЕ →</p>
                                    </a>
                                </div>
                            </div>
                        </div>
    
                    </div>
    
                    {/* CONTACT */}
    
                    <div className={classes.contact} id="contact">
                        <div className={classes.contactContainer}>
                            <h1 className={classes.contactHeader}>КОНТАКТИ</h1>
                            <div className={classes.links}>
                                <a href="https://www.facebook.com/profimarketingagency" target="_blank"><img src={fb} /></a>
                                <a href="https://t.me/profi_space" target="_blank"><img src={tg} /></a>
                            </div>
                            <span>Ульяна Кулікова <a href="tel:+380637678430"> +38 063 767 84 30 </a> <br />
                            Ulyana Kulikova <a href="tel:+971585332813">+971 58 533 28 13</a> <br />
                            ulianakulikova@gmail.com <br />
                            </span>
                            <button onClick={this.hubSpot}>Замовити послугу</button>
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
                        <h3>ВАША МАРКЕТИНГОВА <br />
                        КОМАНДА <br />
                        НА АУТСОРСІ</h3>
                        <div className={mobile.wearerow}>
                            <div className={mobile.weareItem} data-aos="fade-up">
                                <img src={key} />
                                <span className={mobile.weareSpan}>Створюємо <br /> маркетинг <br /> під ключ</span>
                            </div>
                            <div className={mobile.weareItem} data-aos="fade-up">
                                <img src={set} />
                                <span className={mobile.weareSpan}>Нові <br /> можливості <br /> для вашого <br /> бізнесу</span>
                            </div>
                        </div>
                        <div className={mobile.weareLastRow}>
                            <div className={mobile.weareItem} data-aos="fade-up">
                                <img src={horse} />
                                <span className={mobile.weareSpan}>Маркетингові<br /> вирішення <br /> бізнес-задач</span>
                            </div>
                        </div>
                    </div>
                    <div className={mobile.cycle}>
                        {this.state.form == true ? <FormHub show={this.state.form} hubSpot={this.hubSpot}/> : <></>}
                        <button className={mobile.getService} onClick={this.hubSpot}>Замовити послугу</button>
                        <h1 className={mobile.cycleHeader}>МАРКЕТИНГОВЕ <br />
                                АГЕНТСТВО <br />
                                ПОВНОГО ЦИКЛУ</h1>
                        <span className={mobile.selectorText}>
                                Ваша маркетингова команда <br />
                                 на аутсорс (на вимогу). <br />
                                 Будь-які маркетингові рішення <br />
                            <span className={mobile.selectorTextBold}>для Вашого бізнесу. </span><br />
                                Маркетинговий аудит, <br />
                                маркетингові стратегії, <br />
                                SMM (таргетинг та просунення), <br />
                                розумний лендинг, візуальне оформлення.</span>
                        <div className={mobile.getMoreItem}>
                            <img src={audit} />
                            <span>Маркетинговий <br />аудит</span>
                            <button onClick={this.setText} id="0">Дізнатися більше</button>
                        </div>
                        <div className={mobile.getMoreItem}>
                            <img src={strategy} />
                            <span>Маркетингові <br /> стратегії</span>
                            <button onClick={this.setText} id="1">Дізнатися більше</button>
                        </div>
                        <div className={mobile.getMoreItem}>
                            <img src={smm} />
                            <span>SMM (Таргетинг і <br /> просування)</span>
                            <button onClick={this.setText} id="2">Дізнатися більше</button>
                        </div>
                        <div className={mobile.getMoreItem}>
                            <img src={pc} />
                            <span>Розумний<br />лендинг</span>
                            <button onClick={this.setText} id="3">Дізнатися більше</button>
                        </div>
                        <div className={mobile.getMoreItem}>
                            <img src={pazzle} />
                            <span>Візуальне <br /> оформлення</span>
                            <button onClick={this.setText} id="4">Дізнатися більше</button>
                        </div>
                        {this.state.show == false ? <></> : <Modal show={this.state.show} setShow={this.setShow} text={this.state.text}/>}
                    </div>
                    <div className={mobile.gift}>
                        <h1 data-aos="fade-bottom">Хочу <br />Подарунок!</h1>
                        <a href="src/assets/docs/filmsUa.pdf" download>ОТРИМАТИ</a>
                        <span>список фільмів <br /> з теми "маркетинг"</span>
                    </div>
                    <div className={mobile.portfolio} id="portfolioM">
                        <h3>ПОРТФОЛІО</h3>
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
                        <h3>БОЛІ НАШИХ <br />КЛІЄНТІВ</h3>
                        <div className={mobile.reasons}>
                            <div className={mobile.reason}>
                                <img src={redelipse} />
                                <span>не знаєш як підняти продажі сайту?</span>
                            </div>
                            <div className={mobile.reason}>
                                <img src={redelipse} />
                                <span>немає чіткої стратегії?</span>
                            </div>
                            <div className={mobile.reason}>
                                <img src={redelipse} />
                                <span>бардак в аналітиці?</span>
                            </div>
                            <div className={mobile.reason}>
                                <img src={redelipse} />
                                <span>немає впізнаваності на ринку?</ span>
                            </div>
                            <div className={mobile.reason}>
                                <img src={redelipse} />
                                <span>не встигаєш вести соцмережі?</span>
                            </div>
                        </div>
                        <span className={mobile.reasonText}>Це найскладніший і <br />
                        і найцікавіший період у житті <br />
                        підприємця. Коли бізнес <br />
                        Коли бізнес вже запущений  <br />
                        і терміново потрібний маркетинг, <br />
                        але команду інхаус дозволити собі не можеш. <br />
                        <br /> <br />
                        Ми – твоя автономна команда, <br />
                        яка сама подумає, зрозуміє,<br/>
                        що потрібно для просування, <br />
                        поставить правильні питання, <br />
                        докопається до істини, яка буде корисна твоєму бізнесу...<br />
                        </span>
    
                    </div>
                    <div className={mobile.overhere}>
                        <div className={mobile.overhereItems}>
                            <h3>ТАК ОСЬ ВОНА [ми]</h3>
                            <span>почни делегування з одного завдання, <br /> тобі так сподобається, <br />
                            що ми візьмемо всю турботу про маркетинг!</ span>
                            <button onClick={this.hubSpot}>ДЕЛЕГУВАТИ</button>
                        </div>
                    </div>
                    <div className={mobile.services} id="servicesM">
                        <div className={mobile.service}>
                            <div className={mobile.serviceImg}>
                                <img src={service1} />
                            </div>
                            <div className={mobile.serviceFoot}>
                                <h4>Маркетинговий <br />аудит</h4>
                                <img src={triangle_bot} />
                            </div>
                        </div>
                        <div className={mobile.service}>
                            <div className={mobile.serviceImg}>
                                <img src={service2} />
                            </div>
                            <div className={mobile.serviceFoot}>
                                <h4>Таргетинг, <br />SMM</h4>
                                <img src={triangle_bot} />
                            </div>
                        </div>
                        <div className={mobile.service}>
                            <div className={mobile.serviceImg}>
                                <img src={service3} />
                            </div>
                            <div className={mobile.serviceFoot}>
                                <h4>Розумний <br />лендинг</h4>
                                <img src={triangle_bot} />
                            </div>
                        </div>
                        <div className={mobile.service}>
                            <div className={mobile.serviceImg}>
                                <img src={service4} />
                            </div>
                            <div className={mobile.serviceFoot}>
                                <h4>Дизайн, <br />фотоконтент</h4>
                                <img src={triangle_bot} />
                            </div>
                        </div>
                        <button onClick={this.hubSpot}>Замовити послугу</button>
                    </div>
                    <div className={mobile.blog} id="blogM">
                        <h3>БЛОГ</h3>
                        <div className={classes.blogItem} data-aos="fade-down">
                            <a href="https://www.profi-space.com/bitva-titanov-marketing-vs-prodazhi/" target="_blank">
                                <img src={smart}/>
                                <h4>БИТВА ТИТАНІВ <br/> маркетинг VS продажу </h4>
                                 <span>Одвічна проблема, в який бізнес ви б не прийшли. Вона може бути не видно на перший погляд, не так швидко спливти на поверхню, але, якщо придивитися, все стане на свої місця. Зустрічайте - їх величність маркетинг та продажу. </span>
                                 <p>ЧИТАТИ БІЛЬШЕ → </p>
                            </a>
                        </div>
                    </div>
                    <div className={mobile.contact} id="contactM">
                        <h3>КОНТАКТИ</h3>
                        <div className={mobile.links}>
                            <a href="https://www.facebook.com/profimarketingagency" target="_blank"><img src={fb} /></a>
                            <a href="https://t.me/profi_space" target="_blank"><img src={tg} /></a>
                        </div>
                        <span> Уляна Куликова<a href="tel:+380637678430"> +38 063 767 84 30 </a> <br />
                        Ulyana Kulikova <a href="tel:+971585332813">+971 58 533 28 13</a><br />
                        ulianakulikova@gmail.com <br />
                        </ span>
                        <button onClick={this.hubSpot}>Замовити послугу</button>
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
})(withTranslation()(Ua));