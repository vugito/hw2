import React from 'react';
import {Text, View} from "react-native";
import styles from "./styles";
import SearchBox from "../../blocks/search-box/search-box";

const Header = () => {
    return (
        <>
            <View style={styles.header}>
                <View style={{flex:1}}>
                    <Text style={styles.headerBtn}>Back</Text>
                </View>
                <View style={{flex:1, alignItems: 'center'}}>
                    <Text style={styles.contentText}>Market</Text>
                </View>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                    <Text style={styles.filterBtn}>Filter</Text>
                </View>

            </View>
            <SearchBox/>
        </>
    );
};

export default Header;