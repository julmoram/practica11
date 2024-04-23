import React from 'react';
import { Box, Flex, Heading, Input, Button, Image } from "@chakra-ui/react";

const SignUp = () => {
    function handleSignUp(event) {
        event.preventDefault();
        console.log("Enviando formulario");
    }

    return (
        <Box
            backgroundImage="url('https://wallpapercave.com/wp/wp10574157.jpg')"
            minHeight="100vh"
            backgroundSize="cover"
            backgroundPosition="center"
        >
            <Flex
                direction="column"
                maxW={{ base: "90%", md: "80%", lg: "60%" }}
                mx="auto"
            >
                {/* Logo o imagen */}
                <Flex justify="center" mb="8">
                <img
                            src="https://imgs.search.brave.com/yXvlx1mifUNfkWLVTax1GFb1krBf5dtTfkcSOajm_Ho/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudmV4ZWxzLmNv/bS9tZWRpYS91c2Vy/cy8zLzEyODg0Ny9p/c29sYXRlZC9wcmV2/aWV3LzBmNjBjNGQ0/OTJlNzg4NzljZTZi/N2Y5M2U1MDFmMWRh/LWljb25vLWRlLWNp/cmN1bG8tZGUtZnJ1/dGEtZnJlc2EucG5n"
                            alt="Logo"
                            style={{ maxHeight: "40px" }}
                        />
                </Flex>
                <Box bg="white" p="8" borderRadius="md" boxShadow="lg">
                    <Heading as="h2" size="lg" mb="6" textAlign="center">
                        Registrate
                    </Heading>
                    <form onSubmit={handleSignUp}>
                        <Box mb="4">
                            <Input
                                type="text"
                                placeholder="Correo electrónico"
                                size="lg"
                                focusBorderColor="pink.500"
                                required
                            />
                        </Box>
                        <Box mb="4">
                            <Input
                                type="password"
                                placeholder="Contraseña"
                                size="lg"
                                focusBorderColor="pink.500"
                                required
                            />
                        </Box>
                        <Box mb="4">
                            <Input
                                type="password"
                                placeholder="Confirmar Contraseña"
                                size="lg"
                                focusBorderColor="pink.500"
                                required
                            />
                        </Box>
                        <Button
                            type="submit"
                            colorScheme="pink"
                            size="lg"
                            w="full"
                        >
                            Registrarse
                        </Button>
                    </form>
                </Box>
            </Flex>
        </Box>
    );
};

export default SignUp;
