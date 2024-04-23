import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Text } from "@chakra-ui/react";
import axios from "axios";
import ProductCard from '../components/ProductCard';

function Product() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/floreria/${id}/`)
            .then(response => {
                setProducto(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    return (
        <>
            <Text>Producto número {id}</Text>
            {producto ? (
                <ProductCard
                    nombre={producto.nombre}
                    sabor={producto.sabor}
                    precio={producto.precio}
                />
            ) : (
                <Text>Esperando producto...</Text>
            )}
        </>
    );
}

export default Product;
