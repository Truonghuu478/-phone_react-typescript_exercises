
export type Phones = {
     maSP: number,
 tenSP: string,
 manHinh:string, 
 heDieuHanh: string, 
cameraTruoc: string, 
cameraSau: string,   
giaBan:number,
 hinhAnh:string,
}

export type PhoneCart = {
     product:Phones,
     soLuong:number,
 
}
export interface iniState{
   
        status:boolean;
    isLoading:boolean;
    lstPhones:Array<Phones>;
    errors:string;
    stringPhoneOb:Array<string>
    

}
export type actions={
    type:string,
    payload:any
}
