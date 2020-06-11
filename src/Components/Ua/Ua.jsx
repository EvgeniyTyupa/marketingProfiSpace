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



const Ua = (props) => {
    return (
        <div className={classes.main}>

            {/* HOME */}

            <div className={classes.home}>
                <div className={classes.container}>
                    <div className={classes.navbar}>
                        <img src={logo} />
                        <div className={classes.menu}>
                            <a href="#services">Послуги</a>
                            <a href="#portfolio">Портфоліо</a>
                            <a href="#pain">Болі наших клієнтів</a>
                            <a href="#blog">Блог</a>
                            <a href="#contact">Контакти</a>
                        </div>
                        <Languages />
                    </div>
                    <h1 className={classes.headerHome}>ВАША МАРКЕТИНГОВА
                                              <br></br>КОМАНДА НА АУТСОРСІ</h1>
                    <div className={classes.weare}>
                        <div className={classes.weareItem}>
                            <img src={key} />
                            <span>Створюємо <br /> маркетинг <br /> під ключ</span>
                        </div>
                        <div className={classes.weareItem}>
                            <img src={set} />
                            <span>Нові <br /> можливості <br /> для вашого бізнесу</span>
                        </div>
                        <div className={classes.weareItem}>
                            <img src={horse} />
                            <span>Маркетингові<br /> рішення <br /> бізнес-задач</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* CYCLE */}

            <div className={classes.cycle}>
                <div className={classes.containerCycle}>
                    <button className={classes.getService}>Замовити послугу</button>
                    <h1 className={classes.cycleHeader}>МАРКЕТИНГОВЕ <br/>
                         АГЕНТСТВО <br/>
                        ПОВНОГО ЦИКЛУ</h1>
                    <div className={classes.selector}>
                        <img src={triangle_left}/>
                        <span className={classes.selectorText}>
                                Ваша маркетингова команда <br/>
                                на аутсорсі (по запиту). <br/>
                                Будь-які маркетингові рішення <br/>
                                <span className={classes.selectorTextBold}>для вашого бизнесу. </span><br/>
                                Маркетинговий аудит, <br/>
                                маркетингові стратегіі, <br/>
                                SMM (таргетинг і просування), <br/>
                                розумний лендинг, візуальне оформлення.</span>
                        <img src={triangle_right}/>
                    </div>
                    <div className={classes.getMore}>
                        <div className={classes.getMoreItem}>
                            <img src={audit}/>
                            <span>Маркетинговий <br/>аудит</span>
                            <a href="#">Дізнатись більше</a>
                        </div>
                        <div className={classes.getMoreItem}>
                            <img src={strategy}/>
                            <span>Маркетингові <br/>стратегіі</span>
                            <a href="#">Дізнатись більше</a>
                        </div>
                        <div className={classes.getMoreItem}>
                            <img src={smm}/>
                            <span>SMM (таргетинг та <br/>просунення)</span>
                            <a href="#">Дізнатись більше</a>
                        </div>
                        <div className={classes.getMoreItem}>
                            <img src={pc}/>
                            <span>Розумний<br/>лендинг</span>
                            <a href="#">Дізнатись більше</a>
                        </div>
                        <div className={classes.getMoreItem}>
                            <img src={pazzle}/>
                            <span>Візуальне <br/>оформлення</span>
                            <a href="#">Дізнатись більше</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* GIFT */}

            <div className={classes.gift}>
                <div className={classes.giftContainer}>
                    <div className={classes.wantGift}>
                        <h1 className={classes.giftHeader}>Хочу <br/>Подарунок!</h1>
                        <button>ОТРИМАТИ</button>
                        <span>список фільмів <br/>по темі "маркетинг"</span>
                    </div>
                    <div className={classes.giftImg}>
                        <img src={gift}/>
                    </div>
                </div>
            </div>

            {/* PORTFOLIO */}

            <div className={classes.portfolio} id="portfolio">
                <div className={classes.portfolioContainer}>
                    <h1 className={classes.portfolioHeader}>ПОРТФОЛІО</h1>
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
                    <h1 className={classes.painHeader}>БОЛІ НАШИХ <br/>КЛІЄНТІВ</h1>
                    <div className={classes.reasonsBlock}>
                        <div className={classes.reasons}>
                            <div className={classes.reason}>
                                <img src={redelipse}/>
                                <span>безлад в аналітиці?</span>
                            </div>
                            <div className={classes.reason}>
                                <img src={redelipse}/>
                                <span>немає контент плану?</span>
                            </div>
                            <div className={classes.reason}>
                                <img src={redelipse}/>
                                <span>не встигаєш писати тексти?</span>
                            </div>
                            <div className={classes.reason}>
                                <img src={redelipse}/>
                                <span>знаєш що таке стратегія,<br/>
                                      ніяк не доходять руки?</span>
                            </div>
                            <div className={classes.reason}>
                                <img src={redelipse}/>
                                <span>а ще потрібно віжуали склепати?</span>
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
                            <span className={classes.reasonsText}>Це самий складний і цікавий період в житті<br/> 
                                    підприємця. Коли бізнес вже йде і потрібен <br/>
                                    маркетинг,<br/>
                                    але команду інхаус дозволити собі не можеш.<br/>
                                    і підрядників нормальних хрін знайдеш.<br/>
                                    <br/>
                                    от би автономну команду, яка сама подумає, <br/>
                                    зрозуміє що потрібно, або питаннями задовбали, але<br/>
                                    докопається до істини,<br/>
                                    яка буде корисна твоєму бізнесу...</span>
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
                        <h3>ТАК ОСЬ Ж ВОНА [ми]</h3>
                        <span>ти можеш почати делегування з якоюсь <br/>
                        однієї задачі, а далі як сподобається - хоч весь комплекс</span>
                        <button>ДЕЛЕГУВАТИ</button>
                    </div>
                </div>
            </div>

            {/* SERVICES */}

            <div className={classes.services} id="services">
                <div className={classes.servicesContainer}>
                    <h1 className={classes.servicesHeader}>ПОСЛУГИ</h1>
                    <div className={classes.service}>
                        <div className={classes.serviceSide}>
                            <div className={classes.serviceBlock}>
                                <div className={classes.serviceBlueBlock}>
                                    <img src={service1} className={classes.serviceImg}/>
                                </div>
                                <img src={triagnle_blue}/>
                            </div>
                            <h4>Маркетинговий <br/>аудит</h4>
                        </div>
                        <div className={classes.serviceSide}>
                            <div className={classes.serviceBlock}>
                                <div className={classes.serviceBlueBlockSpan}>
                                    <span>аналіз поточного стану <br/>
                                        бізнесу з точки зору <br/>
                                        маркетингу (конкуренти / <br/>
                                        ціноутворення /<br/>
                                        портфоліо / канали <br/>
                                        просування) <br/>
                                        і пропозиції щодо <br/>
                                        підвищення ефективності<br/>
                                        маркетингу</span>
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
                            <h4>Таргетинг, SMM</h4>
                        </div>
                        <div className={classes.serviceSide}>
                            <div className={classes.serviceBlock}>
                                <div className={classes.serviceOrangeBlockSpan}>
                                    <span>ведення і просування<br/>
                                    соц. мережей (інстаграм,<br/> 
                                    фейсбук, лінкедін), копірайт </span>
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
                            <h4>Розумний лендинг</h4>
                        </div>
                        <div className={classes.serviceSide}>
                            <div className={classes.serviceBlock}>
                                <div className={classes.serviceBlueBlockSpan}>
                                    <span>створення односторінкового <br/>
                                    сайта, оптимізованого <br/>
                                    для пошукових систем</span>
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
                            <h4>Дизайн, фотоконтент</h4>
                        </div>
                        <div className={classes.serviceSide}>
                            <div className={classes.serviceBlock}>
                                <div className={classes.serviceOrangeBlockSpan}>
                                    <span>розробка корпоративного <br/>
                                    стилю, створення віжуалів <br/>
                                    для комунікаційних <br/>
                                    програм і таргетингу<br/>
                                    <br/>
                                    створення фото-контенту <br/>
                                    (предметна зйомка/ <br/>
                                    каталожна зйомка / <br/>
                                    комерційна зйомка</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button>Замовити послугу</button>
                </div>
            </div>

            {/* BLOG */}

            <div className={classes.blog} id="blog">
                <div className={classes.blogContainer}>
                    <h1 className={classes.blogHeader}>БЛОГ</h1>
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
                    <h1 className={classes.contactHeader}>КОНТАКТИ</h1>
                    <div className={classes.links}>
                        <a href="#"><img src={fb}/></a>
                        <a href="#"><img src={tg}/></a>
                    </div>
                    <span>Ульяна Кулікова +38 063 767 84 30 <br/>
                        ulianakulikova@gmail.com <br/>
                        Юлія Камєнєва +38 067 555 24 67 <br/>
                        yuliya.kameneva@gmail.com</span>
                    <button>Замовити послугу</button>
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

export default Ua;