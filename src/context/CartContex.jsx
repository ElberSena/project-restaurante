import { Children, createContext, useContext, useEffect, useState } from "react";

import Image1 from '../assets/images/sushi-1.jpg'
import Image2 from '../assets/images/sushi-2.jpg'
import Image3 from '../assets/images/soup.jpg'
import Image4 from '../assets/images/sushi-4.jpg'
import Image5 from '../assets/images/sushi-5.jpg'
import Image6 from '../assets/images/sushi-6.jpg'
import Image7 from '../assets/images/sushi-7.jpg'
import Image8 from '../assets/images/sushi-8.jpg'


export const CartContext = createContext();



export const CartProvider = ({ children }) => {

    //Banco de dados
    const data = ([
        {
            id: '0001',
            image: Image1,
            title: 'Asian rolls',
            paragraph: 'Asian rolls with herbs spices',
            rating: 5,
            price: 14.50,
        },
        {
            id: '0002',
            image: Image2,
            title: 'Hot rolls',
            paragraph: 'Sushi set hot rolls avocado california salmon rolls',
            rating: 3.5,
            price: 8.50,
        },
        {
            id: '0003',
            image: Image3,
            title: 'Soup',
            paragraph: 'Herbs spices',
            rating: 5,
            price: 11.50,
        },
        {
            id: '0004',
            image: Image4,
            title: 'Seafood Sushi',
            paragraph: 'Seafood sushi dish with details simple',
            rating: 4.9,
            price: 9.00,
        },
        {
            id: '0005',
            image: Image5,
            title: 'Barca Sushi',
            paragraph: 'Sushi California, Sushi Rolls, Sushi Seafood',
            rating: 4,
            price: 14.50,
        },
        {
            id: '0006',
            image: Image6,
            title: 'Sushi California',
            paragraph: 'Sushi set hot rolls avocado california salmon rolls',
            rating: 4.8,
            price: 18.50,
        },
        {
            id: '0007',
            image: Image7,
            title: 'Sushi Rolls',
            paragraph: 'Sushi rolls with red caviar green leaf wooden board',
            rating: 4.9,
            price: 13.50,
        }, {
            id: '0008',
            image: Image8,
            title: 'Sushi Seafood ',
            paragraph: 'Seafood sushi dish with details simple',
            rating: 4.2,
            price: 16.50,
        },
    ]);
    const [product, setProduct] = useState(data);

    //Modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    //Função para adicionar item no carrinho
    const [cartItems, setCartItems] = useState(getLocalCartData());

    const addToCard = (product) => {
        setCartItems((prevItems) => {
            const itemInCart = prevItems.find((item) => item.id === product.id);
            if (itemInCart) {
                return prevItems.map((item => 
                    item.id === product.id ? { ...item, quantity: item.quantity + 1} : item
                ))
            } else {
                return [...prevItems, { ...product, quantity: 1}];
            }
        });

    };

    // Função para remover item do carrinho
    const removeItemCard = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
    };

    // Persistir dados no localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems])

    function getLocalCartData() {
        let localCartData = localStorage.getItem("cart");
        if(localCartData == []) {
            return [];
        } else {
            return JSON.parse(localCartData);
        }
    }

    return (
        <CartContext.Provider value={{ product, cartItems, handleClose, handleOpen, addToCard, removeItemCard, open }}>{children}</CartContext.Provider>
    )

}




