// import { Link, router } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { ScrollView, Image, Text, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { images } from '../constants';
// import CustomButton from '@/components/CustomButton';


// const Index = () => {
//   return (
//     <SafeAreaView className='bg-primary h-full'>
//       <ScrollView contentContainerStyle={{height: '100%'}}>
//       <View className="w-full justify-center 
//       items-center h-full px-4">
//         <Image
//           source={images.logo}
//           className="w-[130px] h-[84px]"
//           resizeMode="contain"
//         />

//         <Image
//           source={images.iwatch}
//           className="max-w-[380px] h-[300px]"
//           resizeMode="contain"
//         />

//         <View className="relative mt-5">
//             <Text className="text-3xl text-white font-bold text-center">
//               Discover Endless{"\n"}
//               Possibilities with{" "}
//               <Text className="text-secondary-200">Aora</Text>
//             </Text>

//             <Image
//               source={images.path}
//               className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
//               resizeMode="contain"
//             />
//         </View>

//         <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
//             Where Creativity Meets Innovation: Embark on a Journey of Limitless
//             Exploration with Aora
//         </Text>


//         <CustomButton
//             title="Continue with Email"
//             handlePress={() => router.push("/sign-in")}
//             containerStyles="w-full mt-7"
//           />

//       </View>      
//       </ScrollView>
//       <StatusBar backgroundColor="#161622" style="light" />
//     </SafeAreaView>


//     // <View className="flex-1 items-center justify-center bg-white">
//     //   <Text className="text-3xl font-pblack">What's up</Text>
//     //   <StatusBar style="auto" />
//     //   <Link href="/(tabs)/home" className="text-blue-500">
//     //     Go to Home
//     //   </Link>
//     // </View>
//   );
// };

// export default Index;



import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// Assuming you've got a local 'images' object with references to all your images.
import { images } from '../constants';
import CustomButton from '@/components/CustomButton';

const mockImages = [
  images.hempseed,
  images.shoes,
  images.bags,
  images.grass,
  images.iwatch,
  images.sneaker
];

const Index = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View className="w-full justify-center items-left px-4 pt-8">
          {/* Logo */}
          <Image
            source={images.logo}
            className="w-[200px] h-[84px]"
            resizeMode="contain"
          />

          {/* Hero Image */}
          {/* <Image
            source={images.iwatch}
            className="max-w-[380px] h-[300px] mt-4"
            resizeMode="contain"
          /> */}

          {/* Grid Container */}
          <View className="flex-row flex-wrap justify-center gap-4">
            {mockImages.map((img, index) => (
              <View key={index} className="bg-white rounded-md overflow-hidden">
                <Image
                  source={img}
                  className="w-[150px] h-[150px]"
                  resizeMode="cover"
                />
              </View>
            ))}
          </View>

          {/* Headline */}
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="decoration-double underline">Dresser.AI</Text>
            </Text>
            {/* <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            /> */}
          </View>

          {/* Subtext */}
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Your Personalized Fashion Assistant
          </Text>

          {/* Call to Action Button */}
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />

          {/* Image Grid Section */}
          <Text className="text-xl text-white font-bold text-center mt-10 mb-5">
            Explore Our Products
          </Text>

          

        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
      {/* <StatusBar backgroundColor="#112322" style="light" /> */}
    </SafeAreaView>
  );
};

export default Index;
