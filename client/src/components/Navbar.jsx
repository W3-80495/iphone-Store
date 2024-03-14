import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate()

    // get a selector
    const cart = useSelector(state => state.cart)

    const onLogout = () => {
        sessionStorage.removeItem('token')
        navigate('/')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "lightgray" }}>
                <div style={{ display: "flex" }} className="container-fluid">
                    <Link className="navbar-brand" to='/home' >iPhone Store</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <Link className="nav-link" aria-current="page" to="/home">
                                Home
                            </Link>
                            <Link className="nav-link" aria-current="page" to='/cart'>
                                Cart ({cart.items.length})
                            </Link>
                            <Link className="nav-link" aria-current="page" to='/orders'>
                                Orders
                            </Link>

                            <div style={{ justifyContent: "flex-end" }}>
                                <button onClick={onLogout} className="nav-link" aria-current="page" >
                                    Logout
                                </button>
                            </div>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;