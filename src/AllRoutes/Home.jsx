import React, { useEffect, useState } from 'react'
import axios from "axios"


import { Box, Img, SimpleGrid, Stack,Text } from '@chakra-ui/react';

const Home = () => {
    const [data, setData] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedBox, setSelectedBox] = useState({});
  
    const handleClick = (item) => {
      setIsModalVisible(true);
      setSelectedBox(item);
    };
  
    useEffect(() => {
      axios(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=1&limit=50"
      )
        .then((res) => setData(res.data.data))
        .catch((err) => alert(err));
    }, []);
  
    console.log(data);
  return (
    <div>
    {/* <h1>Home</h1> */}
    <SimpleGrid columns={[1, 2, 4, 4]} spacing={10}>
        {data &&
          data.map((item) => {
            return (
              <Box onClick={() => handleClick(item)}>
                <Stack>
                  <Img boxSize="10rem" src={item.image} />
                  <Text> {item.title} </Text>
                  <Text> {item.category} </Text>
                  <Text> {item.price} </Text>
                  <Text> {item.brand} </Text>
                </Stack>
              </Box>
            );
          })}
     
      </SimpleGrid>

    </div>
  )
}

export default Home