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

export const playlists: Track[] = [
  {
    id: '1',
    name: 'FJU Lyon',
    url: imageUrl,
  },
  {
    id: '2',
    name: 'FJU Paris',
    url: imageUrl,
  },
  {
    id: '3',
    name: 'FJU Bordeux',
    url: imageUrl,
  },
  {
    id: '4',
    name: 'FJU VileJuif',
    url: imageUrl,
  },
];

interface playlist {
  id:string,
  title:string,
  artist:string,
  artwork:string,
  url:any
}

export const playlistsongs:{[key:string]: playlist[]} = {
  '1': [
    {
      id: '1',
      title: 'Décision',
      artist: 'FJU LYON',
      artwork: imageUrl,
      url: require('../songs/FJU-Décision.mp3'),
    },
    {
      id: '2',
      title: 'Confiance',
      artist: 'FJU LYON',
      artwork: imageUrl,
      url: require('../songs/FJU-Confiance.mp3'),
    },
    {
      id: '3',
      title: 'MegaHelpe',
      artist: 'FJU LYON',
      artwork: imageUrl,
      url: require('../songs/MegaHelpe.mp3'),
    },
    {
      id: '4',
      title: 'Tu Connais Pas La FJU',
      artist: 'FJU LYON',
      artwork: imageUrl,
      url: require('../songs/FJUTConnaisPasLa.mp3'),
    },
  ],
  '2': [
    {
      id: '1',
      title: 'MegaHelpe',
      artist: 'FJU PARIS',
      artwork: imageUrl,
      url: require('../songs/MegaHelpe.mp3'),
    },
    {
      id: '2',
      title: 'Tu Connais Pas La FJU',
      artist: 'FJU PARIS',
      artwork: imageUrl,
      url: require('../songs/FJUTConnaisPasLa.mp3'),
    },
    {
      id: '3',
      title: 'Décision',
      artist: 'FJU LYON',
      artwork: imageUrl,
      url: require('../songs/FJU-Décision.mp3'),
    },
    {
      id: '4',
      title: 'Confiance',
      artist: 'FJU PARIS',
      artwork: imageUrl,
      url: require('../songs/FJU-Confiance.mp3'),
    },
  ],
  '3': [
    {
      id: '1',
      title: 'Lumière',
      artist: 'FJU VILEJUIF',
      artwork: imageUrl,
      url: require('../songs/FJU-Lumière.mp3'),
    },
    {
      id: '2',
      title: 'Mega Helpe',
      artist: 'FJU VILEJUIF',
      artwork: imageUrl,
      url: require('../songs/MegaHelpe.mp3'),
    },
    {
      id: '3',
      title: 'Décision',
      artist: 'FJU VileJUif',
      artwork: imageUrl,
      url: require('../songs/FJU-Décision.mp3'),
    },
    {
      id: '4',
      title: 'Confiance',
      artist: 'FJU VILEJUIF',
      artwork: imageUrl,
      url: require('../songs/FJU-Confiance.mp3'),
    },
  ],
  '4': [
    {
      id: '1',
      title: 'Décision',
      artist: 'FJU BORDEUX',
      artwork: imageUrl,
      url: require('../songs/FJU-Décision.mp3'),
    },
    {
      id: '2',
      title: 'Confiance',
      artist: 'FJU BORDEUX',
      artwork: imageUrl,
      url: require('../songs/FJU-Confiance.mp3'),
    },
    {
      id: '3',
      title: 'Mega Helpe',
      artist: 'FJU BORDEUX',
      artwork: imageUrl,
      url: require('../songs/MegaHelpe.mp3'),
    },
    {
      id: '4',
      title: 'Tu Connais Pas La FJU',
      artist: 'FJU BORDEUX',
      artwork: imageUrl,
      url: require('../songs/FJUTConnaisPasLa.mp3'),
    },
  ],
};

export default tracks;
