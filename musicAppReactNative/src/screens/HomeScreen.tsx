import React from 'react';
import { Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { imageUrl } from '../assests/data/track';
const HomeScreen = () => {

    const trendingSongs = [
        { id: 1, title: 'Lumiére', artist: 'FJU Lyon', image: "https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/369864382_596429732704193_5489624132335544205_n.jpg?stp=c240.0.960.960a_dst-jpg_s206x206&_nc_cat=104&ccb=1-7&_nc_sid=714c7a&_nc_ohc=31LqODMul54Q7kNvgHGP72F&_nc_ht=scontent-cdg4-1.xx&_nc_gid=ANCPO0W0yg2RoZq_H3aPxUp&oh=00_AYBCy9f4BccE6VT94l3o6j7Q5enC3pRE9YtfAdAWdPayNA&oe=67120F4A" },
        { id: 2, title: 'Mega Help', artist: 'FJU VillJuif', image:"https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/462691489_18356447122189775_1574066158548058831_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_ddspqnb_MwQ7kNvgFjZpNO&_nc_ht=scontent-cdg4-2.xx&_nc_gid=AX9CeDsHEwtvq52bdvaJpwS&oh=00_AYAw_k8Um9r17qaopctFL2u9eyJqmPAe-cikcRt5ghWHCg&oe=671201FE" },
        { id: 3, title: 'Parfum', artist: 'FJU Paris', image: "https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/440746150_18333705205189775_7032145191093299904_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Mzqg7Wl3QGkQ7kNvgEfO5AT&_nc_ht=scontent-cdg4-3.xx&_nc_gid=AB1KCudjLYsO5M79wUJlZFF&oh=00_AYAhPuQZNRmp8yjr2rOD6clOkCOqIImVNRL-YDxBXn2nDw&oe=67121751" },
    ];
    const playlists = [
        { id: 1, name: 'Top Hits', image: "https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/462146403_18355243252189775_8580975899818247474_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8rBRW-zp6G0Q7kNvgGqw3xb&_nc_ht=scontent-cdg4-1.xx&_nc_gid=AElOZsLoS2TN-pXEmYcSxkj&oh=00_AYAIvOV3njuMSpmvAHV5GVG9ay1E-R_Dw_adEJFBJN43Jg&oe=67120443" },
        { id: 2, name: 'Worship', image: "https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/448368268_18339695662189775_7583472444203135900_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vryVsritJc4Q7kNvgGxCjsU&_nc_ht=scontent-cdg4-2.xx&_nc_gid=AzkKkqgHOiCkC_66siR1G-t&oh=00_AYBOcLwqxuKHbWLtOZfCUm7WIrE8y-ygReUy210KVkfL-g&oe=67120FF1"},
        { id: 3, name: 'Rap', image: "https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/457632197_18350607988189775_3143722415324680457_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JKmU1Ow5-dYQ7kNvgHxGj6q&_nc_ht=scontent-cdg4-2.xx&_nc_gid=AdgWm5IEObMFXl21naFhQ9A&oh=00_AYAnkNTc5TPL487-m--Qq-rUbKFS0EdPojOvK6D0g0MsLQ&oe=67122287" },
        { id: 4, name: 'Pop Classics', image:"https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/457632197_18350607988189775_3143722415324680457_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JKmU1Ow5-dYQ7kNvgHxGj6q&_nc_ht=scontent-cdg4-2.xx&_nc_gid=AdgWm5IEObMFXl21naFhQ9A&oh=00_AYAnkNTc5TPL487-m--Qq-rUbKFS0EdPojOvK6D0g0MsLQ&oe=67122287" },
        { id: 5, name: 'Top Hits', image: imageUrl },
        { id: 6, name: 'Chill Vibes', image: "https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/457632197_18350607988189775_3143722415324680457_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JKmU1Ow5-dYQ7kNvgHxGj6q&_nc_ht=scontent-cdg4-2.xx&_nc_gid=AdgWm5IEObMFXl21naFhQ9A&oh=00_AYAnkNTc5TPL487-m--Qq-rUbKFS0EdPojOvK6D0g0MsLQ&oe=67122287" },
        { id: 7, name: 'Workout', image: imageUrl },
        { id: 8, name: 'Pop Classics', image: imageUrl },
    ];

    const podcasts = [
        { id: 1, name: 'Faith Talk', image:"https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/361833723_579442564402910_6266214704265999140_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1aU369Hl6msQ7kNvgGE01f2&_nc_ht=scontent-cdg4-2.xx&_nc_gid=AqB5nB1Loh4YFm1ywo8hiOy&oh=00_AYDjorUjDhLYm2J3RxBv4nMy7l1ku86b6k44YQXZOBC4hQ&oe=6712145C" },
        { id: 2, name: 'Connexion Fun', image: "https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/449171017_18341427214189775_6697200753818002513_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4BVGM8yVyr0Q7kNvgGcEkHq&_nc_ht=scontent-cdg4-3.xx&_nc_gid=ArHM3s8jiHb_0Uce5-xZzs2&oh=00_AYC8CGh0xn-HLW6zoxNq3fKAWkooh6Zz3MZpryoUk-eezw&oe=67120DFB" },
        { id: 3, name: 'Mindfulness', image: "https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/377827897_607994241547742_3257425223229508566_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kGGqvVKLQ6wQ7kNvgGp3_yF&_nc_ht=scontent-cdg4-3.xx&_nc_gid=AaSxxEfpanYzdJrMkejlB2F&oh=00_AYCkL_cGCbKh0IJRwllwRuDSQqNQB-Pbn2AeH9MUKElA-w&oe=67121A04" },
    ];

    return (
        <ScrollView style={styles.container}>
            {/* Playlists Section */}
            <Text style={styles.sectionTitle}>Music Playlists</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                {playlists.map((playlist) => (
                    <TouchableOpacity key={playlist.id} style={styles.playlistCard}>
                        <Image source={{ uri: playlist.image }} style={styles.playlistImage} />
                        <Text style={styles.playlistName}>{playlist.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            {/* Trending Music */}
            <Text style={styles.sectionTitle}>Trending Music</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.trendingScroll}>
                {trendingSongs.map((song) => (
                    <TouchableOpacity key={song.id} style={styles.songCard}>
                        <Image source={{ uri: song.image }} style={styles.songImage} />
                        <Text style={styles.songTitle}>{song.title}</Text>
                        <Text style={styles.songArtist}>{song.artist}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            {/* Podcasts Section */}
            <Text style={styles.sectionTitle}>Podcasts</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                {podcasts.map((podcast) => (
                    <TouchableOpacity key={podcast.id} style={styles.playlistCard}>
                        <Image source={{ uri: podcast.image }} style={styles.playlistImage} />
                        <Text style={styles.playlistName}>{podcast.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        marginVertical: 10,
    },
    horizontalScroll: {
        marginLeft: 10,
    },
    playlistCard: {
        marginRight: 5,
        width: 120,
        alignItems: 'center',
    },
    playlistImage: {
        width: 110,
        height: 110,
        borderRadius: 10,
    },
    playlistName: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },

    trendingScroll: {
        marginLeft: 10,
        marginVertical: 10,
    },
    songCard: {
        marginRight: 10,
        width: 120,
        alignItems: 'center',
    },
    songImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    songTitle: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    songArtist: {
        fontSize: 14,
        color: '#666',
    },
});


