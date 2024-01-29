import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MarketPage from "./src/components/pages/market-page/market-page";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Text>Open up App.js to start working on your app!</Text>*/}
      <StatusBar style="auto" />
      <MarketPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F0EAFB',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
