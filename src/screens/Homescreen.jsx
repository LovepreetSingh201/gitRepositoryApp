import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from "react-native-feather";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fetchSearchResult } from '../../api/GitData';
import { useNavigation } from '@react-navigation/native';

const Homescreen = () => {
    const [searchText, setsearchText] = useState("")
    const [searchResult, setsearchResult] = useState([])
    const tm = searchResult || []
    useEffect(() => {
        getSerachResult();
    }, [])
    const getSerachResult = async () => {
        const data = await fetchSearchResult()
        if (data && data.items) {
            setsearchResult(data.items)
        }
    }
    const navigation=useNavigation()
    return (
        <View style={{ backgroundColor: 'rgb(39, 39, 39)', flex: 1 }}>
            <SafeAreaView>
                <View style={{ borderRadius: 50, marginHorizontal: wp(2), flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', position: 'relative' }}>
                    
                    <TouchableOpacity style={{ backgroundColor: 'rgba(174, 174, 174, 0.62)', borderRadius: 50, padding: wp(3), margin: 5 }}
                    onPress={()=>navigation.navigate('Search')}
                    >
                        <Icon.Search width={30} height={30} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Homescreen

const styles = StyleSheet.create({})