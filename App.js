import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import MarketPage from "./src/components/pages/market-page/market-page";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style={styles.test}/>
            <MarketPage/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
        // backgroundColor: '#F0EAFB',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    test: {
      backgroundColor: 'red',
    }
});
