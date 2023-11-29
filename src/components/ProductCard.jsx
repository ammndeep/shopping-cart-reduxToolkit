import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../feature/CartSlice';

const ProductCard = () => {
    const items = useSelector(state => state.allCart.items);
    const dispatch = useDispatch();
    return (
        <div className='d-flex'>
            {
                items.map((item) => (
                    <div className="card m-5" style={{ width: "18rem" }} key={item.id} >
                        <img src={item.img} className="card-img-top" alt="product/image" />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p>Get 60% Off on first Order</p>
                            <p className="card-text">{item.price}</p>
                            <button onClick={() => dispatch(addToCart(item))} className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>


    )
}

export default ProductCard
