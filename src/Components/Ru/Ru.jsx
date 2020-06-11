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



const Ru = (props) => {
    return (
        <div className={classes.main}>

            {/* HOME */}

            <div className={classes.home}>
                <div className={classes.container}>
                    <div className={classes.navbar}>
                        <img src={logo} />
                        <div className={classes.menu}>
                            <a href="#services">Услуги</a>
                            <a href="#portfolio">Портфолио</a>
                            <a href="#pain">Боли наших клиентов</a>
                            <a href="#blog">Блог</a>
                            <a href="#contact">Контакты</a>
                        </div>
                        <Languages />
                    </div>
                    <h1 className={classes.headerHome}>ВАША МАРКЕТИНГОВАЯ
                                              <br></br>КОМАНДА НА АУТСОРСЕ</h1>
                    <div className={classes.weare}>
                        <div className={classes.weareItem}>
                            <img src={key} />
                            <span>Создаём <br /> маркетинг <br /> под ключ</span>
                        </div>
                        <div className={classes.weareItem}>
                            <img src={set} />
                            <span>Новые <br /> возможности <br /> для вашего бизнеса</span>
                        </div>
                        <div className={classes.weareItem}>
                            <img src={horse} />
                            <span>Маркетинговые<br /> решения <br /> бизнес-задач</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* CYCLE */}

            <div className={classes.cycle}>
                <div className={classes.containerCycle}>
                    <button className={classes.getService}>Заказать услугу</button>
                    <h1 className={classes.cycleHeader}>МАРКЕТИНГОВОЕ <br/>
                         АГЕНТСТВО <br/>
                        ПОЛНОГО ЦИКЛА</h1>
                    <div className={classes.selector}>
                        <img src={triangle_left}/>
                        <span className={classes.selectorText}>
                                Ваша маркетинговая команда <br/>
                                на аутсорсе (по запросу). <br/>
                                Любые маркетинговые решения <br/>
                                <span className={classes.selectorTextBold}>для вашего бизнеса. </span><br/>
                                Маркетинговый аудит, <br/>
                                маркетинговые стратегии, <br/>
                                SMM (таргетинг и продвижение), <br/>
                                умный лендинг, визуальное оформление.</span>
                        <img src={triangle_right}/>
                    </div>
                    <div className={classes.getMore}>
                        <div className={classes.getMoreItem}>
                            <img src={audit}/>
                            <span>Маркетинговый <br/>аудит</span>
                            <a href="#">Узнать больше</a>
                        </div>
                        <div className={classes.getMoreItem}>
                            <img src={strategy}/>
                            <span>Маркетинговые <br/>стратегии</span>
                            <a href="#">Узнать больше</a>
                        </div>
                        <div className={classes.getMoreItem}>
                            <img src={smm}/>
                            <span>SMM (таргетинг и <br/>продвижение)</span>
                            <a href="#">Узнать больше</a>
                        </div>
                        <div className={classes.getMoreItem}>
                            <img src={pc}/>
                            <span>Умный<br/>лендинг</span>
                            <a href="#">Узнать больше</a>
                        </div>
                        <div className={classes.getMoreItem}>
                            <img src={pazzle}/>
                            <span>Визуальное <br/>оформление</span>
                            <a href="#">Узнать больше</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* GIFT */}

            <div className={classes.gift}>
                <div className={classes.giftContainer}>
                    <div className={classes.wantGift}>
                        <h1 className={classes.giftHeader}>Хочу <br/>Подарок!</h1>
                        <button>ПОЛУЧИТЬ</button>
                        <span>список фильмов <br/>по теме "маркетинг"</span>
                    </div>
                    <div className={classes.giftImg}>
                        <img src={gift}/>
                    </div>
                </div>
            </div>

            {/* PORTFOLIO */}

            <div className={classes.portfolio} id="portfolio">
                <div className={classes.portfolioContainer}>
                    <h1 className={classes.portfolioHeader}>ПОРТФОЛИО</h1>
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
                    <h1 className={classes.painHeader}>БОЛИ НАШИХ <br/>КЛИЕНТОВ</h1>
                    <div className={classes.reasonsBlock}>
                        <div className={classes.reasons}>
                            <div className={classes.reason}>
                                <img src={redelipse}/>
                                <span>бардак в аналитике?</span>
                            </div>
                            <div className={classes.reason}>
                                <img src={redelipse}/>
                                <span>нет контент плана?</span>
                            </div>
                            <div className={classes.reason}>
                                <img src={redelipse}/>
                                <span>не успеваешь писать тексты?</span>
                            </div>
                            <div className={classes.reason}>
                                <img src={redelipse}/>
                                <span>знаешь что такое стратегия,<br/>
                                        никак не доходят руки?</span>
                            </div>
                            <div className={classes.reason}>
                                <img src={redelipse}/>
                                <span>а еще нужно вижуалы склепать?</span>
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
                            <span className={classes.reasonsText}>Это самый сложный и интересный период в жизни <br/> 
                                    предпринимателя. Когда бизнес уже идёт и нужен <br/>
                                    маркетинг,<br/>
                                    но команду инхаус позволить себе не можешь.<br/>
                                    и подрядчиков нормальных хрен найдешь.<br/>
                                    <br/>
                                    вот бы автономную команду, которая сама подумает, <br/>
                                    поймет что нужно или вопросами задолбает, но<br/>
                                    докопается до истины,<br/>
                                    которая будет полезная твоему бизнесу...</span>
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
                        <h3>ТАК ВОТ ЖЕ ОНА [мы]</h3>
                        <span>ты можешь начать делегирование с какой-то <br/>
                        одной задачи а дальше как понравится - хоть весь комплекс</span>
                        <button>ДЕЛЕГИРОВАТЬ</button>
                    </div>
                </div>
            </div>

            {/* SERVICES */}

            <div className={classes.services} id="services">
                <div className={classes.servicesContainer}>
                    <h1 className={classes.servicesHeader}>УСЛУГИ</h1>
                    <div className={classes.service}>
                        <div className={classes.serviceSide}>
                            <div className={classes.serviceBlock}>
                                <div className={classes.serviceBlueBlock}>
                                    <img src={service1} className={classes.serviceImg}/>
                                </div>
                                <img src={triagnle_blue}/>
                            </div>
                            <h4>Маркетинговый <br/>аудит</h4>
                        </div>
                        <div className={classes.serviceSide}>
                            <div className={classes.serviceBlock}>
                                <div className={classes.serviceBlueBlockSpan}>
                                    <span>анализ текущего состояния <br/>
                                        бизнеса с точки зрения <br/>
                                        маркетинга (конкуренты / <br/>
                                        ценообразование / <br/>
                                        портфолио / каналы <br/>
                                        продвижения) <br/>
                                        и предложения по <br/>
                                        повышению эффективности <br/>
                                        маркетинга</span>
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
                                    <span>ведение и продвижение <br/>
                                    соц сетей (инстаграм, фейсбук, <br/>
                                    линкедин), копирайт </span>
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
                            <h4>Умный лендинг</h4>
                        </div>
                        <div className={classes.serviceSide}>
                            <div className={classes.serviceBlock}>
                                <div className={classes.serviceBlueBlockSpan}>
                                    <span>создание одностраничного <br/>
                                    сайта, оптимизированного <br/>
                                    для поисковых систем</span>
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
                                    <span>разработка корпоративного <br/>
                                    стиля, создание вижуалов <br/>
                                    для коммуникационных <br/>
                                    программ и таргетинга<br/>
                                    <br/>
                                    создание фото-контента <br/>
                                    (предметная съемка / <br/>
                                    каталожная съемка / <br/>
                                    коммерческая съемка</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button>Заказать услугу</button>
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
                    <h1 className={classes.contactHeader}>КОНТАКТЫ</h1>
                    <div className={classes.links}>
                        <a href="#"><img src={fb}/></a>
                        <a href="#"><img src={tg}/></a>
                    </div>
                    <span>Ульяна Куликова +38 063 767 84 30 <br/>
                        ulianakulikova@gmail.com <br/>
                        Юлия Каменева +38 067 555 24 67 <br/>
                        yuliya.kameneva@gmail.com</span>
                    <button>Заказать услугу</button>
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

export default Ru;