import React from 'react';
import { Text, View } from 'react-native';

// styles
import globalStyle from '../../styles/globalStyles';
import profileStyle from './profileStyle';

const Profile = () => {
    return (
        <>
            <View style={globalStyle.container}>
                <Text>Profile</Text>
            </View>
        </>
    )
}

export default Profile;