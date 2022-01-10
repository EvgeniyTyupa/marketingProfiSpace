import React, { useEffect } from 'react';
import classes from './FormHub.module.css';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { register, setCurrentPath, setIsRegistered } from '../../Redux/commonReducer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useForm } from 'react-hook-form';
import Preloader from '../Preloader/Preloader';
import { NavLink } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
    root:{
        '& label.Mui-focused': {
            color: '#FF3C00'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FF3C00' 
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: 0
        }
    }
}));


const FormHub = (props) => {
    const material = useStyles();

    const { t } = useTranslation();

    const { register, handleSubmit, watch, errors } = useForm();
    
    const onSubmit = (data, e) => {
        data.url = props.url;
        props.register(data);
        e.target.reset();
    }

    useEffect(() => {
        Aos.init({ duration: 1000 });
        props.setCurrentPath(window.location.pathname);
        return function cleanup(){
            props.setIsRegistered(false);
        }
    },[])
 
    return (
        <div className={classes.main} data-aos="fade" data-aos-duration="300">
            {props.isFetching && <Preloader/>}
            {props.isOrdered ? 
            <form data-aos="zoom-in" data-aos-duration="200">
                <Button onClick={()=>{props.hubSpot(false)}} className={classes.close}>
                    <NavLink to={props.currentPath}>&#x2715;</NavLink>
                </Button>
                <p>{t("modal.thankyou")}</p>
            </form> :
            <form data-aos="zoom-in" data-aos-duration="200" onSubmit={handleSubmit(onSubmit)}>
                <Button onClick={()=>{
                    props.hubSpot(false);
                    props.setIsRegistered(false);
                }} className={classes.close}>&#x2715;
                </Button>
                <div className={classes.field}>
                    <TextField inputRef={register({required: true})} classes={material} label={t("modal.name")} name="name" variant="outlined" error={errors.name ? true : false}/>
                    {errors.name && errors.name.type === "required" && <p className={classes.error}>{t("modal.error")}</p>}
                </div>
                <div className={classes.field}>
                    <TextField inputRef={register({required: true})} classes={material} label={t("modal.phone")} name="phone" variant="outlined"  error={errors.phone ? true : false}/>
                    {errors.phone && errors.phone.type === "required" && <p className={classes.error}>{t("modal.error")}</p>}
                </div>
                <div className={classes.field}>
                    <TextField inputRef={register({required: true})} classes={material} label={t("modal.email")} name="email" variant="outlined"  error={errors.email ? true : false}/>
                    {errors.email && errors.email.type === "required" && <p className={classes.error}>{t("modal.error")}</p>}
                </div>
                <div className={classes.field}>
                    <TextField inputRef={register} classes={material} label={t("modal.service")} name="service" variant="outlined"/>
                </div>
                <Button type="submit">{t("modal.submit")}</Button>
            </form>}
            
        </div>
    );
}

let mapStateToProps = (state) => ({
    isFetching: state.common.isFetching,
    isOrdered: state.common.isRegistered,
    currentPath: state.common.currentPath
});

export default connect(mapStateToProps, {
    register,
    setCurrentPath,
    setIsRegistered
})(FormHub);