import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from "react-native-feather";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from '../../context/themeContext';
import { getData, setData } from '../../storage/storageFunc';

const RepositoryScreen = () => {
    const { params: item } = useRoute()
    const navigation = useNavigation()
    const { theme } = useTheme();

    const [isLiked, setisLiked] = useState(false)

    const addItem = async () => {
        const newItem = { id: item.full_name }; 
        const existingItems = await getData('@items_key');
        const updatedItems = [...existingItems, newItem];
        await setData('@items_key', updatedItems); 
    };

    return (
        <View style={{ backgroundColor: theme.bgColor, flex: 1 }}>
            <SafeAreaView style={{ position: 'relative' }}>
                <View style={{ marginHorizontal: wp(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: theme.iconBgColor, borderRadius: 50, padding: wp(3), margin: 5 }}
                        onPress={() => navigation.goBack()}
                    >
                        <Icon.ArrowLeft width={30} height={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderRadius: 50, padding: wp(3), margin: 5 }}
                        onPress={addItem}
                    >
                        <Icon.Heart width={50} height={50} fill={'white'} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={{ uri: item.owner.avatar_url }} style={{ width: wp(30), height: wp(30), borderRadius: 100 }} />
                        <Text style={{ fontSize: hp(3), color: 'white', color: theme.text }}>{item.name}</Text>
                        <Text style={{ fontSize: hp(1.7), color: 'white', color: theme.text }}>{item.full_name}</Text>
                        <Text style={{ fontSize: hp(1.7), color: 'white', color: theme.text }}>{item.private ? "Private" : "Public"}</Text>
                    </View>
                    <View style={{ marginHorizontal: wp(5), marginTop: 10, gap: 15 }}>
                        <View>
                            <Text style={{ fontSize: hp(2), color: 'white', backgroundColor: theme.iconBgColor, color: theme.text, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 50 }}> Repository name</Text>
                            <Text style={{ fontSize: hp(2), color: 'white', paddingHorizontal: 15, color: theme.text }}>{item.name}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: hp(2), color: 'white', backgroundColor: theme.iconBgColor, color: theme.text, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 50 }}> Description</Text>
                            <Text style={{ fontSize: hp(2), color: 'white', paddingHorizontal: 15, color: theme.text }}>{item.description}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: hp(2), color: 'white', backgroundColor: theme.iconBgColor, color: theme.text, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 50 }}>Number of stars</Text>
                            <Text style={{ fontSize: hp(2), color: 'white', paddingHorizontal: 15, color: theme.text }}>{item.stargazers_count}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: hp(2), color: 'white', backgroundColor: theme.iconBgColor, color: theme.text, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 50 }}>Number of forks</Text>
                            <Text style={{ fontSize: hp(2), color: 'white', paddingHorizontal: 15, color: theme.text }}>{item.forks_count}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: hp(2), color: 'white', backgroundColor: theme.iconBgColor, color: theme.text, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 50 }}>Primary programming language</Text>
                            <Text style={{ fontSize: hp(2), color: 'white', paddingHorizontal: 15, color: theme.text }}>{item.language}</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default RepositoryScreen

const styles = StyleSheet.create({})