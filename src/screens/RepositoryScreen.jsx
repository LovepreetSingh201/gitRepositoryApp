import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from "react-native-feather";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from '../../context/themeContext';
import { addItemToStorage, checkIfItemExists,  clearAllStorage,  removeItemFromStorage} from '../../storage/storageFunc';

const RepositoryScreen = () => {
    const { params: item } = useRoute()
    const navigation = useNavigation()
    const { theme } = useTheme();

    const [isLiked, setisLiked] = useState()

    useEffect(() => {
        const check=async()=>{
            itemExists = await checkIfItemExists(item.full_name)
            itemExists ? setisLiked(true) : setisLiked(false)
        }
        check()
    }, [])

    const addItem = async () => {
        addItemToStorage(item.full_name)
        setisLiked(true)
    };

    const removeItem = () => {
        removeItemFromStorage(item.full_name)
        setisLiked(false)
    };

    return (
        <View style={{ backgroundColor: theme.bgColor, flex: 1 }}>
            <SafeAreaView style={{ position: 'relative' }}>
                <View style={{ marginHorizontal: wp(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: theme.iconBgColor, borderRadius: 50, padding: wp(3), margin: 5 }}
                        onPress={() => navigation.goBack()}
                    >
                        <Icon.ArrowLeft width={30} height={30} stroke={theme.icon} />
                    </TouchableOpacity>
                    {
                        isLiked ?
                            <TouchableOpacity style={{ borderRadius: 50, padding: wp(3), margin: 5 }}
                                // onPress={addItem}
                                onPress={removeItem}
                            >
                                <Icon.Heart width={35} height={35} stroke={'red'} fill={'red'} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={{ borderRadius: 50, padding: wp(3), margin: 5 }}
                                onPress={addItem}
                            // onPress={removeItem}
                            >
                                <Icon.Heart width={35} height={35} />
                            </TouchableOpacity>

                    }
                </View>
                <ScrollView>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={{uri: item?.owner?.avatar_url || 'https://pngimg.com/uploads/github/github_PNG67.png'}} style={{ width: wp(30), height: wp(30), borderRadius: 100 }} />
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