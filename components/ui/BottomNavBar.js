import React from 'react';
import { View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the Ionicons icons

import colors from '../../constants/colors';

const BottomNavBar = ({ onTabPress }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.navButton} onPress={() => onTabPress('Play')}>
                    <Icon name="play-outline" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => onTabPress('Scoreboard')}>
                    <Icon name="trophy-outline" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => onTabPress('Friends')}>
                    <Icon name="people-outline" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => onTabPress('Profile')}>
                    <Icon name="person-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: colors.primary800,
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: colors.primary800,
        height: 40,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    navButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default BottomNavBar;
