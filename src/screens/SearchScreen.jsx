import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from "react-native-feather";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fetchSearchResult } from '../../api/GitData';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../context/themeContext';
import * as Progress from 'react-native-progress';

const SearchScreen = () => {
    const [searchText, setsearchText] = useState("")
    const [searchResult, setsearchResult] = useState([])
    const [isLoading, setisLoading] = useState()
    const navigation = useNavigation()

    const { theme } = useTheme();
    useEffect(() => {
        searchText.length > 0 ? getSerachResult(searchText) : setsearchResult("")
    }, [searchText])

    const getSerachResult = async (query) => {
        setisLoading(true)
        const data = await fetchSearchResult(query)
        if (data && data.items) {
            setsearchResult(data.items)
            setisLoading(false)
        }
    }
    return (
        <View style={{ backgroundColor: theme.bgColor, flex: 1 }}>
            <SafeAreaView>
                <View style={{ backgroundColor: theme.iconBgColor, borderRadius: 50, marginHorizontal: wp(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                    <TextInput
                        placeholder='Search...'
                        placeholderTextColor={'grey'}
                        style={{ fontSize: hp(2.5), marginLeft: wp(4), color: theme.text }}
                        value={searchText}
                        onChangeText={(value) => setsearchText(value)}
                    />
                    <TouchableOpacity style={{ backgroundColor: theme.iconBgColor, borderRadius: 50, padding: wp(3), margin: 5 }}
                        onPress={() => navigation.goBack()}
                    >
                        <Icon.X width={wp(7)} stroke={theme.icon} height={wp(7)} />
                    </TouchableOpacity>

                </View>
                {
                    !isLoading ?
                        <ScrollView>
                            {
                                searchResult.length > 0 ?
                                    <View style={{ padding: wp(5), borderRadius: 30, paddingBottom: hp(10) }}>
                                        <Text style={{ fontSize: hp(1.8), color: theme.text, fontWeight: 600 }}>Results ({searchResult.length})</Text>
                                        {
                                            searchResult.map((item, index) => {
                                                const bordWidth = index == searchResult.length - 1 ? 0 : 1
                                                return (
                                                    <TouchableOpacity key={index} style={{ flexDirection: 'row', gap: wp(3), paddingVertical: 5, borderBottomWidth: bordWidth, borderBottomColor: 'grey', paddingVertical: hp(1.2) }}
                                                        onPress={() => navigation.navigate('repository', item)}
                                                    >
                                                        <Image source={{ uri: item.owner.avatar_url }} style={{ width: wp(12), height: wp(12), borderRadius: 100 }} />

                                                        <View>
                                                            <Text style={{ color: theme.text, fontSize: hp(2), fontWeight: 800 }}>{item.name}</Text>
                                                            <Text style={{ color: theme.text, fontSize: hp(1.5), }}>{item.full_name}</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                )
                                            })
                                        }
                                    </View>
                                    :
                                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp(5) }}>
                                        <Image source={theme.text=='white' ? require('../assets/images/PNG/GitHub_Invertocat_Light.png') : require('../assets/images/PNG/GitHub_Invertocat_Dark.png')} style={{ width: wp(80), resizeMode: 'contain', opacity: 0.1 }} />
                                        <Image source={theme.text=='white' ? require('../assets/images/PNG/GitHub_Wordmark_Light.png') : require('../assets/images/PNG/GitHub_Wordmark_Dark.png')} style={{ width: wp(60),height:hp(10), resizeMode: 'contain', opacity: 0.1 }} />
                                    </View>
                            }
                        </ScrollView>
                        :
                        <Progress.CircleSnail size={wp(50)} thickness={10} color={['grey']} style={{ position: 'absolute', left: wp(25), top: hp(25), marginHorizontal: 'auto' }} />

                }

            </SafeAreaView>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({})