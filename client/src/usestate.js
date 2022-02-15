import React, {useState} from 'react'

function Addtoarray(){
    
    const [products, setProducts] = useState([
        {pCode:1, pName:'Angel'},
        {pCode:2, pName:'Arise'},
        {pCode:3, pName:'Apple'},
        {pCode:4, pName:'Banna'},
    ])
    const addnewitem=(event)=>{
        let maxLength=5
        let nObj=[{pCode:5, pName:'Strupper'}]
        let nArr=products.concat(nObj)
        if (nArr.length <= maxLength) {
        setProducts(nArr)
        }

        }
    return(
        <div style={{marginTop:'10%', marginBottom:'5%', textAlign:'center'}}>
            <h2>Product</h2>
        {products.map(prod => (<h4 key={prod.pCode}> {prod.pCode} &nbsp; &nbsp; {prod.pName}</h4>))}<br />
       
        <button onClick={addnewitem}>Add Item</button>
        </div>
    )
    
}
export default Addtoarray;