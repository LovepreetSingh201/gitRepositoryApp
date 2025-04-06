import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Icon from "react-native-feather";
import { fetchfavoriteResult } from '../../api/GitData'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme } from '../../context/themeContext';
import { useNavigation } from '@react-navigation/native';
import { removeItemFromStorage } from '../../storage/storageFunc';

const FavoriteItem = ({ data }) => {
    const [item, setitem] = useState("")
    const navigation = useNavigation()
    useEffect(() => {
        getfavoriteResult(data)
    }, [])

    const getfavoriteResult = async (id) => {
        const data = await fetchfavoriteResult(id)
        if (data) {
            setitem(data)
        }
    }

    const removeItem = () => {
        removeItemFromStorage(item.full_name)
    };


    const { theme } = useTheme();

    return (
        <View style={{ marginHorizontal: wp(2), marginBottom: hp(1), overflow: 'hidden' }}>
            <TouchableOpacity style={{ backgroundColor: theme.iconBgColor, flexDirection: 'row', alignItems: 'center', gap: wp(3), borderRadius: 20, borderBottomColor: 'grey', paddingVertical: hp(1.2), paddingHorizontal: wp(3) }}
                onPress={() => navigation.navigate('repository', item)}
            >

                {/* <Image source={{ uri: item.owner.avatar_url || 'https://pngimg.com/uploads/github/github_PNG67.png'}} style={{ width: wp(12), height: wp(12), borderRadius: 100 }} /> */}
                <Image source={{uri: item?.owner?.avatar_url || 'https://pngimg.com/uploads/github/github_PNG67.png'}} style={{ width: wp(12), height: wp(12), borderRadius: 100 }} />
                <View style={{ flex: 1 }}>
                    <Text style={{ color: theme.text, fontSize: 20, fontWeight: 800 }}>{data.split('/')[1]}</Text>
                    <Text style={{ color: theme.text, fontSize: 15, }}>{data}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={removeItem}>
                        <Icon.X width={30} height={30} stroke={theme.icon} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default FavoriteItem

const styles = StyleSheet.create({})