import React, { useEffect, useState } from "react";
import './propertyCartApi.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/material/ListItemSecondaryAction'
import { useNavigate } from "react-router";

const PropertyCart = () => {

    const [showCart, setShowCart] = useState([]);
    const navigate = useNavigate();

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
                <div key='00'>
                    <CardMedia
                        component="img"
                        alt="Something went wrong"
                        height="140"
                        image={item}
                    />
                </div>
            </>
        )
    }

    const sendEnquiry = (e) => {
        console.log("Send enquiry");
        // alert('You want send enquiry');
        if(window.confirm('You want send enquiry')){
            console.log('Sent');
        }
    }

    const enquiry = (e) => {
        console.log("Enquiry: ", e);
        const token = JSON.parse(localStorage.getItem('token'))
        console.log("Token: ", token);
        if (token) {
            sendEnquiry(e)
        } else {
            // alert('Login');
            if (window.confirm('Login must')) {
                navigate('/realestate/login')
            } else {
                console.log("Not come..!");
            }
        }
    }



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
                                    <Button size="small" variant="outlined" color="primary">{item.type} </Button>
                                    <Button size="small" variant="contained" endIcon={<SendIcon />} onClick={e => enquiry(item)}>
                                        Enquiry
                                    </Button>
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
        <>
            {DynamicCart()}
        </>
    )
}

export default PropertyCart;