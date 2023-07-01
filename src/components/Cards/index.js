import './index.css'


const cardsList = [
{
    id:1,
    name:"Total Revenues",
    number:"$2,129,430",
    image:"https://res.cloudinary.com/dg0telgxq/image/upload/v1688140900/Vector_vfzh4n.png",
    backgroundColor:"#DDEFE0"

},
{
    id:2,
    name:"Total Transactions",
    number:"1,520",
    image:"https://res.cloudinary.com/dg0telgxq/image/upload/v1688140900/total_transactions_icon_ipdwwf.png",
    backgroundColor:"#F4ECDD"


},
{
    id:3,
    name:"Total Likes",
    number:"9,721",
    image:"https://res.cloudinary.com/dg0telgxq/image/upload/v1688140900/Vector_1_wxdu9y.png",
    backgroundColor:"#EFDADA"


},
{
    id:4,
    name:"Total Users",
    number:"892",
    image:"https://res.cloudinary.com/dg0telgxq/image/upload/v1688140900/Vector_2_mredo6.png",
    backgroundColor:"#DEE0EF"


},
]

const Cards = ()  =>{
    return (
        <>
        <div className='cards-container'>
<ul className='cards'>
    {cardsList.map((eachCard) =>(
        <li className='card' key ={eachCard.id} style={{backgroundColor:eachCard.backgroundColor}}>
            <div className='card-info'>
                <h1 className='name'>{eachCard.name}</h1>
                <p className='number'>{eachCard.number}</p>
            </div>
            <img className='card-img' src={eachCard.image} alt="icon"/>

        </li>
    ))}
</ul>
</div>

<div className='small-sc'>
    <div className='cards'>
    <div style={{display:"flex"}}>
        <div className='card' style={{backgroundColor:"#DDEFE0"}}>
           
        <div className='card-info'>
                <h1 className='name'>Total Revenues</h1>
                <p className='number'>$2,129,430</p>
            </div>
            <img className='card-img' src="https://res.cloudinary.com/dg0telgxq/image/upload/v1688140900/Vector_vfzh4n.png" alt="icon"/>
        </div>
        <div className='card' style={{backgroundColor:"#F4ECDD"}}>
        <div className='card-info'>
                <h1 className='name'>Total Transactions</h1>
                <p className='number'>1,520</p>
            </div>
            <img className='card-img' src="https://res.cloudinary.com/dg0telgxq/image/upload/v1688140900/total_transactions_icon_ipdwwf.png" alt="icon"/>
        </div>
        </div>
        <div style={{display:"flex"}}>
        <div className='card' style={{backgroundColor:"#EFDADA"}}>
           
        <div className='card-info'>
                <h1 className='name'>Total Likes</h1>
                <p className='number'>9,721</p>
            </div>
            <img className='card-img' src="https://res.cloudinary.com/dg0telgxq/image/upload/v1688140900/Vector_1_wxdu9y.png" alt="icon"/>
        </div>
        <div className='card' style={{backgroundColor:"#DEE0EF"}}>
        <div className='card-info'>
                <h1 className='name'>Total Users</h1>
                <p className='number'>892</p>
            </div>
            <img className='card-img' src="https://res.cloudinary.com/dg0telgxq/image/upload/v1688140900/Vector_2_mredo6.png" alt="icon"/>
        </div>
        </div>
    </div>
</div>

</>

    )
}

export default Cards