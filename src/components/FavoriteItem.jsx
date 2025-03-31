import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchfavoriteResult } from '../../api/GitData'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme } from '../../context/themeContext';
import { useNavigation } from '@react-navigation/native';

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
    const { theme, toggleTheme } = useTheme();

    return (
        <View style={{ marginHorizontal: wp(2), marginBottom: hp(1) }}>
            <TouchableOpacity style={{ backgroundColor: theme.iconBgColor, flexDirection: 'row', gap: wp(3), borderRadius: 20, borderBottomColor: 'grey', paddingVertical: hp(1.2), paddingHorizontal: wp(3) }}
                onPress={() => navigation.navigate('repository', item)}
            >

                {/* <Image source={{ uri: item.owner.avatar_url }} style={{ width: wp(12), height: wp(12), borderRadius: 100 }} /> */}

                <View>
                    <Text style={{ color: theme.text, fontSize: 20, fontWeight: 800 }}>{item.name}</Text>
                    <Text style={{ color: theme.text, fontSize: 15, }}>{item.full_name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default FavoriteItem

const styles = StyleSheet.create({})