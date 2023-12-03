import style from './CustomButton.module.css'

const CustomButton = ({text}) => {
    return (
        <>
            <button className={style.btn}>{text}</button>
        </>
    );
};

export default CustomButton;