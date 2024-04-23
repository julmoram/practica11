import React from 'react';
import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <Box>
            <Flex bg={"pink.100"} color={"white"} py={2} px={4} align={"center"}>
                <Flex flex={1} justify={"start"}>
                    {/* Para colocar un logo*/}
                    <Text textAlign={{ base: "center", md: "left" }} color={"white"}>
                        {/* Reemplaza la URL con el enlace a tu imagen de logo */}
                        <img
                            src="https://imgs.search.brave.com/yXvlx1mifUNfkWLVTax1GFb1krBf5dtTfkcSOajm_Ho/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudmV4ZWxzLmNv/bS9tZWRpYS91c2Vy/cy8zLzEyODg0Ny9p/c29sYXRlZC9wcmV2/aWV3LzBmNjBjNGQ0/OTJlNzg4NzljZTZi/N2Y5M2U1MDFmMWRh/LWljb25vLWRlLWNp/cmN1bG8tZGUtZnJ1/dGEtZnJlc2EucG5n"
                            alt="Logo"
                            style={{ maxHeight: "40px" }}
                        />
                    </Text>
                    {/* Para los NavLinks*/}
                    <Flex display={"flex"} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack direction={"row"} spacing={6} align="center">
                    <Button
                        as={NavLink}
                        to={"/login"}
                        fontSize={"sm"}
                        color={"white"}
                        fontWeight={400}
                        variant={"link"}
                    >
                        Log In
                    </Button>
                    <Button
                        as={NavLink}
                        to={"/signup"}
                        fontSize={"sm"}
                        fontWeight={600}
                        color={"white"}
                        bg={"pink.500"}
                        _hover={{
                            bg: "pink.200",
                        }}
                    >
                        Sign Up
                    </Button>
                </Stack>
            </Flex>
        </Box>
    );
};

const DesktopNav = () => {
    return (
        <Stack direction={"row"} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <NavLink
                        to={navItem.href ?? "#"}
                        activeStyle={{
                            padding: "8px",
                            fontSize: "sm",
                            fontWeight: 800,
                            color: "white",
                        }}
                        style={{
                            padding: "8px",
                            fontSize: "sm",
                            fontWeight: 200,
                            color: "white",
                        }}
                    >
                        {navItem.label}
                    </NavLink>
                </Box>
            ))}
        </Stack>
    );
};

const NAV_ITEMS = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Acerca De",
        href: "/about",
    },
    {
        label: "Productos",
        href: "/products",
    },
];

export default Navbar;



