import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from "react-native-feather";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fetchSearchResult } from '../../api/GitData';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
    const [searchText, setsearchText] = useState("")
    const [searchResult, setsearchResult] = useState([])
    const navigation = useNavigation()
    useEffect(() => {
        getSerachResult(searchText);
    }, [searchText])
    const getSerachResult = async (query) => {
        const data = await fetchSearchResult(query)
        if (data && data.items) {
            setsearchResult(data.items)
        }
    }
    return (
        <View style={{ backgroundColor: 'rgb(39, 39, 39)', flex: 1 }}>
            <SafeAreaView>
                <View style={{ backgroundColor: 'white', borderRadius: 50, marginHorizontal: wp(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                    <TextInput
                        placeholder='Search...'
                        style={{ fontSize: 25, marginLeft: wp(4) }}
                        value={searchText}
                        onChangeText={(value) => setsearchText(value)}
                    />
                    <TouchableOpacity style={{ backgroundColor: 'rgba(0, 0, 0, 0.29)', borderRadius: 50, padding: wp(3), margin: 5 }}
                        onPress={() => navigation.goBack()}
                    >
                        <Icon.X width={30} height={30} />
                    </TouchableOpacity>

                </View>
                <ScrollView>
                    {
                        searchResult.length > 0 ?
                            <View style={{ padding: wp(5), borderRadius: 30 }}>

                                {
                                    searchResult.map((item, index) => {
                                        const bordWidth = index == searchResult.length - 1 ? 0 : 1
                                        return (
                                            <TouchableOpacity key={index} style={{ paddingVertical: 5, borderBottomWidth: bordWidth }}
                                            onPress={()=>navigation.navigate('repository',item)}
                                            >
                                                <Text style={{ fontSize: 20, color: 'white' }}>{item.name}</Text>
                                                <Text style={{ fontSize: 15, color: 'white' }}>{item.full_name}</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                            :
                            null
                    }
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({})