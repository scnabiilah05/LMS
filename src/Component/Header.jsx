import { Box, Button, Container, Flex, Heading, IconButton, Img, Menu, MenuButton, MenuItem, MenuList, Spacer, Stack, Text, background } from '@chakra-ui/react'
import React from 'react'
import Logo from './LearnDash.png'
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <>
    <Box w={'100vw'} bgColor={'white'} h={'15vh'} boxShadow={'md'}> 
        <Flex justifyContent={'space-between'} align={'center'} h={'100%'} paddingLeft={4} paddingRight={6}>
            <Img src={Logo} alt='logo' w={'18%'} align={'center'}></Img>
            <Flex align={'center'} gap={'8'}>
                <Menu>
                    <MenuButton> Solution</MenuButton>
                    <MenuList>
                        <MenuItem>Solution</MenuItem>
                        <MenuItem>Pricing</MenuItem>
                        <MenuItem>Resources</MenuItem>
                    </MenuList>
                </Menu>
                <Button>Pricing</Button>
                <Menu>
                    <MenuButton> Resources</MenuButton>
                    <MenuList>
                        <MenuItem>Solution</MenuItem>
                        <MenuItem>Pricing</MenuItem>
                        <MenuItem>Resources</MenuItem>
                    </MenuList>
                </Menu>
                <Button>Try LearnDash</Button>
            </Flex>
            <Flex>
                <IconButton aria-label='search icon' icon={<FiSearch/>}></IconButton>
                <Button>Sign In</Button>
            </Flex>
        </Flex>
    </Box>

    <Flex p={20} gap={5}>
        <Flex flexDir={'column'} gap={10}>
            <Heading fontSize={'5xl'} fontFamily={'inter'}>The most powerful learning management system for WordPress</Heading>
            <Text fontSize={'2xl'} fontFamily={'inter'}>Create professional engaging course in just few click</Text>
            <Flex gap={10}>
            <Button colorScheme='blue' borderRadius={20}> Demo</Button>
            <Button colorScheme='blue' variant={'outline'} borderRadius={20}> Pricing</Button>
            </Flex>
        </Flex>
        <Box>
            <Img src='https://www.learndash.com/wp-content/uploads/learndash-home-hero-1024x771.png.webp'></Img>
        </Box>
        
    </Flex>
    </>
  )
}

export default Header