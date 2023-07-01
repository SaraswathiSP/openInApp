import './index.css';
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const LeftSection = () => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickButton = () => {
    setIsClicked(!isClicked);
  };

    return (
        <>
      <div className='cont'>
        <button onClick={onClickButton} className='arrow'>
          {isClicked ? <AiOutlineClose className='close' /> : <AiOutlineBars className='bars' />}
        </button>
      </div>
      <div className="left-section-cont" style={{ marginLeft: isClicked ? 0 : "-300px" }}>
             <h1 className='left-container-text'>Board.</h1>
             <div className='nav-items'>
                <div className='item'>
                    <img className='nav-icon' src="https://res.cloudinary.com/dg0telgxq/image/upload/v1688195287/dashboard_icon_qqmj4w.png" alt="item"/>
                    <p className='nav-name'>Dashboard</p>
                </div>
                <div className='item'>
                    <img className='nav-icon' src="https://res.cloudinary.com/dg0telgxq/image/upload/v1688140899/Vector_4_yn7ggc.png" alt="item"/>
                    <p className='nav-name'>Transactions</p>
                </div>
                <div className='item'>
                    <img className='nav-icon' src="https://res.cloudinary.com/dg0telgxq/image/upload/v1688140900/schedule_icon_fc8tdj.png" alt="item"/>
                    <p className='nav-name'>Schedules</p>
                </div>
                <div className='item'>
                    <img className='nav-icon' src="https://res.cloudinary.com/dg0telgxq/image/upload/v1688140899/user_icon_qxvltb.png" alt="item"/>
                    <p className='nav-name'>Users</p>
                </div>
                <div className='item'>
                    <img className='nav-icon' src="https://res.cloudinary.com/dg0telgxq/image/upload/v1688140899/setting_icon_padmr0.png" alt="item"/>
                    <p className='nav-name'>Settings</p>
                </div>
             </div>
             
                <div className='contact'>
                    <p className='nav-name'>Help</p>
                    <p className='nav-name'>Contact Us</p>
                </div>
                
                </div>

                <div className="left-section-cont-large">
             <h1 className='left-container-text'>Board.</h1>
             <div className='nav-items'>
                <div className='item'>
                    <img className='nav-icon' src="https://res.cloudinary.com/dg0telgxq/image/upload/v1688195287/dashboard_icon_qqmj4w.png" alt="item"/>
                    <p className='nav-name'>Dashboard</p>
                </div>
                <div className='item'>
                    <img className='nav-icon' src="https://res.cloudinary.com/dg0telgxq/image/upload/v1688140899/Vector_4_yn7ggc.png" alt="item"/>
                    <p className='nav-name'>Transactions</p>
                </div>
                <div className='item'>
                    <img className='nav-icon' src="https://res.cloudinary.com/dg0telgxq/image/upload/v1688140900/schedule_icon_fc8tdj.png" alt="item"/>
                    <p className='nav-name'>Schedules</p>
                </div>
                <div className='item'>
                    <img className='nav-icon' src="https://res.cloudinary.com/dg0telgxq/image/upload/v1688140899/user_icon_qxvltb.png" alt="item"/>
                    <p className='nav-name'>Users</p>
                </div>
                <div className='item'>
                    <img className='nav-icon' src="https://res.cloudinary.com/dg0telgxq/image/upload/v1688140899/setting_icon_padmr0.png" alt="item"/>
                    <p className='nav-name'>Settings</p>
                </div>
             </div>
             
                <div className='contact'>
                    <p className='nav-name'>Help</p>
                    <p className='nav-name'>Contact Us</p>
                </div>
                
                </div>
    </>
    )
}

export default LeftSection