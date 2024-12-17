import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ImageSourcePropType} from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'
import { StatusBar } from 'expo-status-bar';
import Loader from '@/components/Loader';
import { useGlobalContext } from '@/context/GlobalProvider';


interface TabIconProps {
    icon: ImageSourcePropType;
    color: string;
    name: string;
    focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({icon, color, name, focused}) => {
    return (
        <View className='items-center justify-center gap-2'>
            <Image 
            source={icon}
            resizeMode="contain"
            tintColor={color}
            className="w-6 h-6"
            />
        <Text className={`${focused ? 'font-psemibold': 'font-pregular'} text-xs`} style={{color: color}}>
            {name}
        </Text>
        </View>
    )
}


const TabsLayout = () => {
    const context = useGlobalContext();
    const loading = context?.loading ?? false;
    const isLogged = context?.isLogged ?? false;
    if (!loading && !isLogged) return <Redirect href="/sign-in" />;

    return (
        <>
        <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#FFA001",
            tabBarInactiveTintColor: '#CDCDE0',
            tabBarStyle: {
                backgroundColor: '#161622',
                borderTopWidth: 1,
                borderTopColor: '#232533',
                height: 84,
            }
        }}
        
        >
            <Tabs.Screen 
            name="home" 
            options={{
                title: 'Home',
                tabBarIcon: ({color, focused}) => (
                    <TabIcon icon={icons.home} color={color} name="Home" focused={focused} />) 
            }}
            />
            
            <Tabs.Screen 
            name="bookmark" 
            options={{
                title: 'Bookmark',
                tabBarIcon: ({color, focused}) => (
                    <TabIcon icon={icons.bookmark} color={color} name="Bookmark" focused={focused} />) 
            }}
            />

<Tabs.Screen 
            name="create" 
            options={{
                title: 'Create',
                tabBarIcon: ({color, focused}) => (
                    <TabIcon icon={icons.plus} color={color} name="Create" focused={focused} />) 
            }}
            />

<Tabs.Screen 
            name="profile" 
            options={{
                title: 'Profile',
                tabBarIcon: ({color, focused}) => (
                    <TabIcon icon={icons.profile} color={color} name="Profile" focused={focused} />) 
            }}
            />


        </Tabs>

        <Loader isLoading={loading} />
        <StatusBar backgroundColor="#161622" style="light" />
        </>
    )
}

export default TabsLayout