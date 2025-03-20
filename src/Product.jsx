import "./Product.css";

export default function Product({price})
{
    let isDiscount=price>300;
let style={backgroundColor:isDiscount?"red":" "}

    return (
    <div className="Product" style={style}>

    {isDiscount&&<p>discount 5 %</p>}

    </div>
    );
}