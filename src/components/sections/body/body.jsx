import React from 'react';
import {View} from "react-native";
import Category from "../../blocks/category/category";
import Box from "../../blocks/box/box";
import styles from './styles';

const Body = () => {
    return (
        <>
            <View style={styles.body}>
                <Category label='Hot deals'/>
                <Box category={'Hot Deals'}/>
                <Category label='Trending'/>
                <Box category={'Trending'}/>
                <Category label='For baby'/>
                <Box category={'For baby'}/>
                <Category label='Electronics'/>
                <Box category={'Electronics'}/>
            </View>
        </>
    );
};

export default Body;