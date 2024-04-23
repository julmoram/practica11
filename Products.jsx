import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { useNavigate } from "react-router-dom";

function Products() {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/floreria/")
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    console.log(data);

    return (
        <div>
            {data ? (
                data.map(item => (
                    <ProductCard
                        nombre={item.nombre} 
                        color={item.color}  
                        precio={item.precio}
                        onClick={() => {
                            console.log(item.id); 
                            navigate(`producto/${item.id}`);
                        }}
                    />
                ))
            ) : (
                <p>Esperando elementos...</p>
            )}
        </div>
    );
}

export default Products;
