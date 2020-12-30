import React,{useCallback,Fragment} from 'react';
import *as types from "../../../redux/constants";
import {Phones,PhoneCart }from "../../services/typePhone/phone";

interface typeProps {
  statusModal:string,
  totalPhone:number,
  stringPhoneOb:Array<string>,
  stateCart:Array<PhoneCart>,
  handleAmountPhone:any,
  handleDeleteProduct:any
}
const ModalCart:React.FC<typeProps> =({statusModal,totalPhone,stringPhoneOb,stateCart,handleAmountPhone,handleDeleteProduct}) =>{
  const renderStatusModal =useCallback(()=>{
        if(statusModal === types.ADD_PRODUCT_LST){
          return (<Fragment>
            <form>
              ssss
            </form>
          </Fragment>
           )
        }else {
          
        return (<Fragment>
            <table className="table">
              <thead>
                <tr>
                 {stringPhoneOb.map((ob:string,index)=>{
                   return <td key={index}>{ob}</td>
                 })}
                </tr>
              </thead>
              <tbody>
                 {stateCart.length >0 && stateCart.map((ob:PhoneCart)=>{
                   let {product,soLuong} = ob;
                   return <tr key={product.maSP}>
                          <td>{product.maSP}</td>
                          <td>{product.tenSP}</td>

                          <td><img  width={50} height={50} src={product.hinhAnh} alt={"Hình Ảnh điện thoại "+product.tenSP}/></td>
                          <td>
                            <button disabled={ soLuong <2} onClick={()=>handleAmountPhone(false,product)} type="button" className="btn btn-primary">-</button>
                        <span style={{padding:"0 10px"}}> {soLuong}</span>
                            
                            <button disabled={soLuong >9 } onClick={()=>handleAmountPhone(true,product)} type="button" className="btn btn-primary">+</button>
                          </td>
                          <td>
                            {product.giaBan}

                          </td>
                          <td>
                            <button onClick={()=>handleDeleteProduct(product)}  type="button" className="btn btn-danger">Xóa</button>
                          </td>

                   </tr>
                 })}
              </tbody>
            </table>
          <h2>Total : {totalPhone}</h2>
        
        
          </Fragment>)
        }
  },[statusModal,stateCart])
    return (
        
        <div>
  
  {/* Modal */}
  <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{statusModal}</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
        {renderStatusModal()}
          
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          {statusModal === types.ADD_PRODUCT_LST && <button type="button" className="btn btn-primary">Save</button>}
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
export default ModalCart;
