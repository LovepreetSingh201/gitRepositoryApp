import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from "react-native-feather";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { createContext, useEffect, useState } from 'react';
import { useTheme } from '../../context/themeContext';
import Favorites from '../components/Favorites';


const Homescreen = () => {
    const navigation = useNavigation()
    const [isDark, setisDark] = useState(true)
    const { theme, toggleTheme } = useTheme();
    const themeChanger = () => {
        toggleTheme()
        setisDark(!isDark)
    }
    return (
        <View style={{ backgroundColor: theme.bgColor, flex: 1 }}>
            <SafeAreaView>
                <View style={{ borderRadius: 50, marginHorizontal: wp(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>

                    <TouchableOpacity style={{ backgroundColor: theme.iconBgColor, borderRadius: 50, padding: wp(3), margin: 5 }}
                        onPress={themeChanger}
                    >
                        {
                            isDark ?
                                <Icon.Moon fill={theme.icon} stroke={0} width={wp(7)} height={wp(7)} />
                                :
                                <Icon.Sun stroke={theme.icon} fill={'yellow'} width={wp(7)} height={wp(7)} />
                        }
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: theme.iconBgColor, borderRadius: 50, padding: wp(3), margin: 5 }}
                        onPress={() => navigation.navigate('Search')}
                    >
                        <Icon.Search stroke={theme.icon} width={wp(7)} height={wp(7)} />
                    </TouchableOpacity>
                </View>
                <Favorites />



            </SafeAreaView>
        </View>
    )
}

export default Homescreen

const styles = StyleSheet.create({})