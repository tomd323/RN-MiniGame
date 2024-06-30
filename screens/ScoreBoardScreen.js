import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Card from '../components/ui/Card';
import colors from '../constants/colors';
import Title from '../components/ui/Title';

const data = [
    { date: '2021-09-01', score: 10 },
    { date: '2021-09-02', score: 14 },
    { date: '2021-09-03', score: 15 },
    { date: '2021-09-04', score: 14 },
    { date: '2021-09-05', score: 9 },
    { date: '2021-09-06', score: 3 },
    { date: '2021-09-07', score: 12 },
    { date: '2021-09-08', score: 5 },
    { date: '2021-09-09', score: 4 },
    { date: '2021-09-10', score: 5 },
];

function ScoreboardScreen() {
    const scores = data.sort((a, b) => b.score - a.score);

    return (
        <View style={styles.screen}>
            <Card>
                <Title style={styles.summaryText} customStyle={styles.title}>
                    Scoreboard
                </Title>
            </Card>
            <FlatList
                data={scores}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <Card customStyle={styles.card}>
                        <View style={styles.row}>
                            <Text style={styles.rankText}>Rank: {index + 1}</Text>
                            <View style={styles.infoContainer}>
                                <Text style={styles.infoText}>Date: {item.date}</Text>
                                <Text style={styles.infoText}>Score: {item.score}</Text>
                            </View>
                        </View>
                    </Card>
                )}
            />
        </View>
    );
}

export default ScoreboardScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rankText: {
        color: colors.primary500,
        fontFamily: 'open-sans-bold',
        flex: 1,
    },
    infoContainer: {
        flex: 2,
        alignItems: 'flex-end',
    },
    infoText: {
        color: colors.primary500,
        fontFamily: 'open-sans-bold',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        color: colors.secondary500,
        textAlign: 'center',
        marginBottom: 20,
    },
    title: {
        paddingHorizontal: 65,
    },
    card: {
        backgroundColor: colors.secondary600,
        paddingHorizontal: 35,
        paddingVertical: 5,
        marginVertical: -25,
    },
});
