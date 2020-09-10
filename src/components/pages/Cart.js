import React from 'react';

export default function Cart() {
    
    const [data, setData] = useState ([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await axios.get("http://localhost:8081/cart");
        setData(res.data);
        return res;
    }

    const deleteData = async () => {
        const res = await axios.delete("http://localhost:8081/cart/" + prodName);
        setData(res.data);
        return res;
    }
    const products = data.map((products, i) => {
        return (
        <div key={i}>
            <li className="products"  >
                <img className = "product-image" src={products.image} alt="product" /> 
                <h6 className = "product-name">{products.prodName}</h6>
                <h6>${products.price}</h6>
                <Button>Delete</Button>                               
            </li>
        </div>
        )
    })

    return (
    <div className="container">
        <div className = "left">
            {products}
        </div>
        <div className = "right">

        </div>
    </div>
    )
}

