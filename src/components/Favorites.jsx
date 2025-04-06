import { Image, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { clearAllStorage, getData } from '../../storage/storageFunc';
import FavoriteItem from './FavoriteItem';
import { useTheme } from '../../context/themeContext';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Progress from 'react-native-progress';
import * as Icon from "react-native-feather";




const Favorites = ({ isDark }) => {
    const [items, setItems] = useState([]);
    const [show, setshow] = useState(false)
    useEffect(() => {
        loadData();
    },);

    const loadData = async () => {
        const storedItems = await getData('@items_key');
        setItems(storedItems);
    };

    const { theme } = useTheme();

    return (
        <View >
            <View style={{ marginHorizontal: wp(4), marginVertical: hp(1), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: theme.text, fontSize: hp(3), fontWeight: 800 }}>Favorites</Text>
                {
                    items.length === 0 ?
                        null
                        :
                        <TouchableOpacity
                            onPress={clearAllStorage}
                        >
                            <Text style={{ color: 'orange', fontSize: hp(1.7), fontWeight: 700 }}>Clear All</Text>
                        </TouchableOpacity>
                }

            </View>
            <View>
                {items.length === 0 ?
                    (
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp(4) }}>
                            <Image source={isDark ? require('../assets/images/PNG/GitHub_Invertocat_Light.png') : require('../assets/images/PNG/GitHub_Invertocat_Dark.png')} style={{ width: wp(80), resizeMode: 'contain', opacity: 0.1 }} />
                            <Image source={isDark ? require('../assets/images/PNG/GitHub_Wordmark_Light.png') : require('../assets/images/PNG/GitHub_Wordmark_Dark.png')} style={{ width: wp(60),height:hp(10), resizeMode: 'contain', opacity: 0.1 }} />
                        </View>
                    )
                    :
                    (
                        items.map((item, index) => {
                            return (
                                <FavoriteItem key={index} data={item.id} />
                            )
                        })

                    )
                }
            </View>
        </View>
    )
}

export default Favorites

const styles = StyleSheet.create({})