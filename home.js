import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import globalStyle from '../../styles/globalStyles';

// components
import HeroSection from './heroSection';
import TeamSection from './teamSection';

const Home = () => {
    return (
        <>
            <ScrollView style={globalStyle.container}>
                <HeroSection />
                <TeamSection />
            </ScrollView>
        </>
    )
}

export default Home;