import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getAllIphone } from "../services/iphone";
import { toast } from "react-toastify";
import config from "../config"
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

function Iphone({ item }) {

    // get the dispatch obj
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addItemToCart = () => {
        dispatch(addItem({ ...item, quantity: 1 }))
        navigate('/cart')
    }
    return (
        <div style={{ borderRadius: "30px" }} className="card m-1">
            <div style={{ textAlign: "center" }}>
                <img
                    style={{ width: "150px", margin: "15px" }}
                    className='card-img-top'
                    src={config.server + '/' + item.image}
                    alt="" />
            </div>
            <div className="card-body">
                <div style={{ fontWeight: "bold", fontSize: "19px" }}>{item.title}</div>
                <div>Price: <span style={{ fontWeight: "bold", fontSize: "17px" }}>₹{item.price}</span></div>
                <div onClick={addItemToCart} className="btn btn-success btn-sm mt-2">Add to cart</div>
            </div>
        </div>
    )
}

function Home() {
    const [items, setItems] = useState([])
    const loadAllIphones = async () => {
        const result = await getAllIphone()
        if (result['status'] == 'success') {
            console.log(result)
            setItems(result['data'])
        }
        else {
            toast.error(result['error'])
        }
    }

    useEffect(() => {
        loadAllIphones()
    }, [])

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="title">iPhone</h1>
                <div className="row">
                    {items.map((item) => {
                        return (
                            <div key={item['id']} className="col-4">
                                <Iphone item={item}
                                />
                            </div>
                        )
                    })}
                </div>

            </div>
            <Footer />
        </>
    );
}

export default Home;