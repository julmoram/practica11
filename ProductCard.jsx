import { Card, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function ProductCard({ nombre, color, precio, paquete, onClick }) {
    return (
        <Card
            bg={'#DBF9D8'}
            p={5}
            my={'15px'}
            onClick={onClick}
        > 
            <Heading>{nombre}</Heading>
            <Text>Color: {color}</Text>
            <Text fontWeight={500} color={'#A7061C'}>Precio: {precio}</Text>
        </Card>
    );
}

export default ProductCard;
