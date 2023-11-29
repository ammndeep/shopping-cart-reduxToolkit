import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCartTotal } from '../feature/CartSlice';

const Navbar = () => {
    const { cart, cartTotalQuantity } = useSelector((state) => state.allCart);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart])
    return (
        <>
            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <div className="col-md-3 mb-2 mb-md-0 ">
                        <Link to={'/'} > <span className='fs-4'>Shopping Cart</span></Link>
                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 link-secondary fs-4">All Products</a></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <Link to={'/cart'}>
                            <button type="button" className="btn btn-primary">Cart({cartTotalQuantity})</button>
                        </Link>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Navbar
