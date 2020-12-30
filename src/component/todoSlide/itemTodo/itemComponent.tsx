import React from 'react'
import { Phones } from '../../services/typePhone/phone';
interface initialProps {
   phoneItem: Phones,
   handleBuyPhone:any
   
 
}
const ItemComponent:React.FC<initialProps> = ({phoneItem,handleBuyPhone})=> {
    const urlImg:any = process.env.PUBLIC_URL;
    let {maSP,tenSP,giaBan,cameraSau,cameraTruoc,heDieuHanh,manHinh,hinhAnh} = phoneItem;
    return (
     <div className="card">
                    <img className="card-img-top" src={urlImg+hinhAnh} alt={"hinh anh "+ tenSP}/>
                    <div className="card-body">
                        <h4 className="card-title">{tenSP}</h4>
                        <p className="card-text">{giaBan}</p>
                    <button onClick={()=>handleBuyPhone(phoneItem)} className="btn btn-success">mua</button>
                    </div>
                </div>
    )
}
export default ItemComponent;