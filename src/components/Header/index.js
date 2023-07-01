import './index.css'

const Header = () =>{
    return (
        <div className="header">
            <h1 className="heading">Dashboard</h1>
            <div className="s122">
                <div className="search-bar">
                <input className='input234' type="search" placeholder="search..."/>
                <button  className='button' type="button"><img style={{color:'#858585',width:'12px',height:'12px'}} src="https://res.cloudinary.com/dg0telgxq/image/upload/v1688195288/Search_icon_l6ygs1.png" alt="search"/></button>
                </div>
                <img className='notification-icon' src="https://res.cloudinary.com/dg0telgxq/image/upload/v1688196178/Vector_5_jfqcd3.png" alt="bell"/>
                <img className='person' src="https://res.cloudinary.com/dg0telgxq/image/upload/v1688196177/Mask_Group_ls2czn.png" alt="person"/>
            </div>
        </div>
    )
}

export default Header