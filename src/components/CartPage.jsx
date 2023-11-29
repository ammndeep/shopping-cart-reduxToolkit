import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseItemQty, getCartTotal, increaseItemQty, removeItem } from '../feature/CartSlice';

const CartPage = () => {
    const { cart, cartTotalAmount, cartTotalQuantity } = useSelector((state) => state.allCart);

    // const totalAmount = useSelector(selectTotalAmount);
    // const totalQuantity = useSelector(selectTotalQuantity);

    const dispatch = useDispatch();

    useEffect(() => {
        // Dispatch the action when the component mounts
        dispatch(getCartTotal());
    }, [cart]);

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-8">
                    <h2>Your Shopping Cart</h2>
                    {cart.map((data) => (
                        <div key={data.id} className="card mb-3">
                            <div className="card-body d-flex align-items-center">
                                <img src={data.img} alt='product/image' style={{ width: '100px', marginRight: '10px' }} />
                                <div>
                                    <h5 className="card-title">{data.title}</h5>
                                    <div className="d-flex align-items-center gap-2">
                                        <button className="btn btn-secondary btn-sm" onClick={() => dispatch(decreaseItemQty(data.id))}>-</button>
                                        <span className="mx-2">{data.quantity}</span>
                                        <button className="btn btn-secondary btn-sm" onClick={() => dispatch(increaseItemQty(data.id))}>+</button>
                                    </div>
                                </div>
                                <div className="mx-3">${data.price}</div>
                                <button className='btn btn-primary mx-3' onClick={() => dispatch(removeItem(data.id))}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-md-4">
                    <h2>Order Summary</h2>
                    <div className="card">
                        <div className="card-body">
                            <p>Total Quantity: {cartTotalQuantity}</p>
                            <p>Total Amount: ${cartTotalAmount}</p>
                            <button type="button" className="btn btn-primary btn-block">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;


// <div className="container mt-5">
//     <div className="row">
//         <div className="col-md-8">
//             <h2>Your Shopping Cart</h2>
//             <ul className="list-group">
//                 {/* Sample item in the cart */}
//                 <li className="list-group-item">
//                     <strong>Product Name:</strong> Sample Item<br />
//                     <strong>Price:</strong> $19.99
//                 </li>
//                 {/* Add more items as needed */}
//             </ul>
//         </div>
//         <div className="col-md-4">
//             <h2>Total Amount</h2>
//             <div className="card">
//                 <div className="card-body">
//                     <h5 className="card-title">Total:</h5>
//                     <p className="card-text h4">$19.99</p>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
