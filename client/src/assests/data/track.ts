import {Track} from 'react-native-track-player';
export const imageUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIN6iFDbA-lmBLINiQlt8dSO5qWkqWx003dhJXZN81Sx3HqHCq6yTSC4ZlyBzqeSoGCno&usqp=CAU';
const tracks: Track[] = [
  {
    id: '1',
    url: require('../songs/MegaHelpe.mp3'),
    title: 'MegaHelpe',
    artist: 'FJU PARIS',
    artwork: imageUrl,
  },
  {
    id: '2',
    url: require('../songs/FJUTConnaisPasLa.mp3'),
    title: 'Tu Connais Pas La FJU',
    artist: 'FJU LYON',
    artwork: imageUrl,
  },
  {
    id: '3',
    url: require('../songs/FJU-Reviensàlamaison.mp3'),
    title: 'Reviens à maison',
    artist: 'FJU LYON',
    artwork: imageUrl,
  },
  {
    id: '4',
    url: require('../songs/FJU-Parfum.mp3'),
    title: 'Parfum',
    artist: 'FJU LYON',
    artwork: imageUrl,
  },
  {
    id: '5',
    url: require('../songs/FJU-Lumière.mp3'),
    title: 'Lumière',
    artist: 'FJU LYON',
    artwork: imageUrl,
  },
  {
    id: '6',
    url: require('../songs/FJU-demoi.mp3'),
    title: '100 de Moi',
    artist: 'FJU LYON',
    artwork: imageUrl,
  },
  {
    id: '7',
    url: require('../songs/FJU-Au-delà.mp3'),
    title: 'Au-delà',
    artist: 'FJU LYON',
    artwork: imageUrl,
  },
  {
    id: '8',
    url: require('../songs/FJU-Cap-ou-pas-cap.mp3'),
    title: 'Cap-ou-pas-cap',
    artist: 'FJU LYON',
    artwork: imageUrl,
  },
  {
    id: '9',
    url: require('../songs/FJU-Confiance.mp3'),
    title: 'FJU-Confiance',
    artist: 'FJU LYON',
    artwork: imageUrl,
  },
  {
    id: '10',
    url: require('../songs/FJU-Décision.mp3'),
    title: 'Décision',
    artist: 'FJU LYON',
    artwork: imageUrl,
  },
  {
    id: '11',
    url: require('../songs/FJULaFOI.mp3'),
    title: 'La FOI',
    artist: 'FJU LYON',
    artwork: imageUrl,
  },
];

export const playlistsongs = {
  '1': [
    {
      id: '101',
      title: 'Song A',
      artist: 'Artist 1',
      url: require('../songs/FJU-Décision.mp3'),
    },
    {
      id: '102',
      title: 'Song B',
      artist: 'Artist 2',
      url: require('../songs/FJU-Confiance.mp3'),
    },
  ],
  '2': [
    {
      id: '201',
      title: 'Song C',
      artist: 'Artist 3',
      url: require('../songs/MegaHelpe.mp3'),
    },
    {
      id: '202',
      title: 'Song D',
      artist: 'Artist 4',
      url: require('../songs/FJUTConnaisPasLa.mp3'),
    },
  ],
  '3': [
    {
      id: '301',
      title: 'Song E',
      artist: 'Artist 5',
      url: require('../songs/FJU-Lumière.mp3'),
    },
    {
      id: '302',
      title: 'Song F',
      artist: 'Artist 6',
      url: require('../songs/MegaHelpe.mp3'),
    },
  ],
  '4': [
    {
      id: '201',
      title: 'Song C',
      artist: 'Artist 3',
      url: require('../songs/MegaHelpe.mp3'),
    },
    {
      id: '202',
      title: 'Song D',
      artist: 'Artist 4',
      url: require('../songs/FJUTConnaisPasLa.mp3'),
    },
  ],
};

export default tracks;
