import React,{useEffect,useCallback,useState,useMemo} from 'react';
import ItemComponent from "./itemTodo/itemComponent";
import {rootReducer} from "../services/rootReducer/reducer";
import {Phones,PhoneCart} from "../services/typePhone/phone";
import  ModalCart from "./modalCart/modalCart";
import {useSelector,useDispatch} from "react-redux";
// import *as actions from "../../redux/actions/actions";
import *as typePhone from "../../redux/constants";
import { count } from 'console';



const TodoSlides: React.FC = (props) => {
     const dispatch = useDispatch();
     const {lstPhones,stringPhoneOb}:any = useSelector((state:rootReducer) =>state.phoneSlide);
     const [statusModal,setStatusModal] =useState("");
     const [totalPhone,setTotalPhone] =useState(0);
     const [stateCart,setStateCart]= useState<PhoneCart[]>([])


    useEffect(()=>{ 
        dispatch({type:typePhone.GET_PHONE_REQUEST})
    },[stateCart])
    
   
 
  
   
     const countPhone = ()=>{  
        return stateCart.reduce((total,phone)=>{
            return total += phone.soLuong;
        },0)
    }
    const findOthers = (arr:Array<PhoneCart>,product:Phones)=>{
    return arr.findIndex(phone=>phone.product.maSP === product.maSP);
    }
    // reduce or increase the product
    const handleAmountPhone = (status:boolean,product:Phones) =>{
        let newStateCart:Array<PhoneCart> = [...stateCart];
        let findProducts =findOthers(newStateCart,product);
        if(findProducts > -1 && newStateCart[findProducts].soLuong < 10 || newStateCart[findProducts].soLuong > 0){

            findProducts >-1 && status?newStateCart[findProducts].soLuong++:newStateCart[findProducts].soLuong--;
        }
        setStateCart(newStateCart);

    }
    // count sum price phones 
    const countToTotalPrice = ()=>{
    return stateCart.reduce((total,phone:PhoneCart)=>{
        return total += phone.product.giaBan * phone.soLuong;
    },0)
}    
//    handleDeleteProduct
    const handleDeleteProduct = (product:Phones)=>{
        let newStateCart:Array<PhoneCart> = [...stateCart];
        let findProducts =findOthers(newStateCart,product);
        if(findProducts >-1){
            newStateCart.splice(findProducts,1)
        }
        setStateCart(newStateCart)
        alert("delete success !!! ")
    }
    // handleBuyPhone 
    const handleBuyPhone = (values:Phones)=>{
        
 

            let newStateCart:Array<PhoneCart> = stateCart
            let checkValues =newStateCart.findIndex(ob=>{
           
                return ob.product.maSP === values.maSP
                
            });
            console.log(checkValues);
            if(checkValues === -1){

                let product:PhoneCart={
                    product:values,
                    soLuong:1,
                }
                newStateCart.push(product);
            }else newStateCart[checkValues].soLuong++;
            
          
        
        setStateCart(newStateCart);
     
    }
    // render item 
    const renderItem=useCallback(() => {
    
        return lstPhones && lstPhones.map((phone:Phones)=>
            <div key={phone.maSP} className="col-lg-4">
               <ItemComponent handleBuyPhone={handleBuyPhone}
                phoneItem={phone}/>
            </div>
        )
    },[lstPhones]) 
    // handle status modal 
    const handleStatusModal =(value:string):void=>{
        setStatusModal(value)
    }
    
    return (<div className="listPhone">
            <div className="listPhone__title">
                <h1>Cửa hàng di động</h1>
            <div className="listPhone__title__cart"
               data-toggle="modal" data-target="#modelId">
                 <i onClick={()=>handleStatusModal(typePhone.ADD_PRODUCT_LST)} className="fa fa-plus-square"></i>
            <i onClick={()=>handleStatusModal(typePhone.OPEN_CART)} className="fa fa-cart-arrow-down "></i><span>({countPhone})</span>
            </div>
            </div>
        <div className="row">
            {renderItem()}
        </div>

        <ModalCart totalPhone={totalPhone} 
        stringPhoneOb={stringPhoneOb} 
        statusModal={statusModal}
        stateCart={stateCart}
        handleAmountPhone={handleAmountPhone}
        handleDeleteProduct={handleDeleteProduct}
        />
    </div>)

}
export default TodoSlides;