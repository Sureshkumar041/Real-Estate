import React, { useEffect, useState } from "react";
import './propertyCartApi.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PropertyCart = () => {

    const [showCart, setShowCart] = useState([]);

    const cartImage = (API) => {
        fetch('http://localhost:3333/realestate/cartimage')
            .then(async (res) => {
                const cart = await res.json();
                return cart;
            })
            .then((cart) => {
                console.log("Image data : ", cart.data);
                setShowCart(cart.data);
            })
            .catch((err) => {
                console.log("Cart image: ", err.message);
            })
    }

    // Image show
    const imageMap = (item, index) => {
        return (
            <>
                <div key={index}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={item}
                    />
                </div>
            </>
        )
    }

    // const bootStrap = () => {
    //     return (
    //         <>
    //             <div className="cards">
    //                 <img src="http://localhost:3333/uploads/1671814871497.jpg" style={{height:'140px',width:'18rem'}} className="card-img-top" alt="" ></img>
    //                     <div className="card-body">
    //                         <h5 className="card-title">Card title</h5>
    //                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //                         <button className="btn btn-primary">Go somewhere</button>
    //                     </div>
    //             </div>
    //         </>
    //     )
    // }

    const DynamicCart = () => {
        return (
            <div className="cartD row">
                {
                    showCart.map((item, index) => (
                        <div key={index} className='col-4'>
                            <Card sx={{ maxWidth: 345 }}>
                                {
                                    item.image.map((item, index) => (
                                        index === 0 ? imageMap(item, index) : null
                                    ))
                                }
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.city}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.info}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" variant="contained" color="success" >{item.propertyFor} </Button>
                                    <Button size="small" variant="contained" color="primary">{item.type} </Button>
                                </CardActions>
                            </Card>
                        </div>
                    ))
                }
            </div >
        );
    }

    useEffect((e) => {
        cartImage();
    }, [])

    return (
        <React.Fragment>
            {DynamicCart()}
            {/* {bootStrap()} */}
        </React.Fragment>
    )
}

export default PropertyCart;