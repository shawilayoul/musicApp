
export const imageUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIN6iFDbA-lmBLINiQlt8dSO5qWkqWx003dhJXZN81Sx3HqHCq6yTSC4ZlyBzqeSoGCno&usqp=CAU';

/*
interface playlist {
  id: string;
  title: string;
  artist: string;
  artwork: string;
  url: any;
}

export const playlistsongs: {[key: string]: playlist[]} = {
  '1': [
    {
      id: '201',
      title: 'Décision',
      artist: 'FJU LYON',
      artwork: imageUrl,
      url: 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/FjuLyon%2FFJU-De%CC%81cision.mp3?alt=media&token=1f5d18f0-8a33-485a-a2f1-d2b7f1ce9341',
    },
    {
      id: '22',
      title: 'Confiance',
      artist: 'FJU LYON',
      artwork: imageUrl,
      url: 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/FjuLyon%2FFJU-Confiance(Tribunal%20de%20vie).mp3?alt=media&token=e3ac759d-8c2d-4b11-96b3-432f248b6b24',
    },
    {
      id: '203',
      title: 'MegaHelpe',
      artist: 'FJU LYON',
      artwork: imageUrl,
      url: 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/FjuLyon%2FMegaHelpe.mp3?alt=media&token=8ea4ac02-27f4-400a-950f-84879a8e01b0',
    },
    {
      id: '204',
      title: 'Tu Connais Pas La FJU',
      artist: 'FJU LYON',
      artwork: imageUrl,
      url: 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/FjuLyon%2FFJU%20-%20Tu%20Connais%20Pas%20La%20FJU%20.mp3?alt=media&token=b4a51500-c7c0-4973-b788-774e74e868c3',
    },
  ],
  '2': [
    {
      id: '301',
      title: 'MegaHelpe',
      artist: 'FJU PARIS',
      artwork: imageUrl,
      url: 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/FjuParis%2FMegaHelpe.mp3?alt=media&token=ef029748-8d1b-4542-99d3-7660664d33eb',
    },
    {
      id: '302',
      title: 'Tu Connais Pas La FJU',
      artist: 'FJU PARIS',
      artwork: imageUrl,
      url: 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/FjuParis%2FFJU%20-%20Tu%20Connais%20Pas%20La%20FJU%20.mp3?alt=media&token=1803c739-7c05-4976-a6e4-40f6ddc1a820',
    },
    {
      id: '303',
      title: 'Décision',
      artist: 'FJU LYON',
      artwork: imageUrl,
      url: 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/FjuParis%2FFJU-De%CC%81cision.mp3?alt=media&token=46ede7d8-8ebf-4b80-b5e6-d36d6642261f',
    },
    {
      id: '304',
      title: 'Confiance',
      artist: 'FJU PARIS',
      artwork: imageUrl,
      url: 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/FjuParis%2FFJU-Confiance(Tribunal%20de%20vie).mp3?alt=media&token=2dac96c7-d875-451c-a548-57174c7a9e78',
    },
  ],
  '3': [
    {
      id: '401',
      title: 'Lumière',
      artist: 'FJU VILEJUIF',
      artwork: imageUrl,
      url:'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/Fjuvillejuif%2FFJU%20-%20Lumie%CC%80re.mp3?alt=media&token=3b55bce2-c844-46db-bcb3-7cd84db23e34',
    },
    {
      id: '402',
      title: 'Mega Helpe',
      artist: 'FJU VILEJUIF',
      artwork: imageUrl,
      url: 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/Fjuvillejuif%2FMegaHelpe.mp3?alt=media&token=42a96d6e-f2f1-47c5-8821-dbdf56f13edd',
    },
    {
      id: '403',
      title: 'Décision',
      artist: 'FJU VileJUif',
      artwork: imageUrl,
      url: 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/Fjuvillejuif%2FFJU-De%CC%81cision.mp3?alt=media&token=124e247f-cce2-4cae-bdbd-7d467ef31eab',
    },
    {
      id: '404',
      title: 'Confiance',
      artist: 'FJU VILEJUIF',
      artwork: imageUrl,
      url: 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/Fjuvillejuif%2FFJU-Confiance(Tribunal%20de%20vie).mp3?alt=media&token=cbbf16a8-ae1e-46dc-bf1c-c8b14e4c054b',
    },
  ],
  '4': [
    {
      id: '501',
      title: 'Décision',
      artist: 'FJU Bordeaux',
      artwork: imageUrl,
      url: 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/FjuBordeaux%2FFJU-De%CC%81cision.mp3?alt=media&token=e37ed98b-881c-4a7e-8628-89ebf7884daf',
    },
    {
      id: '502',
      title: 'Confiance',
      artist: 'FJU Bordeaux',
      artwork: imageUrl,
      url: 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/FjuBordeaux%2FFJU-Confiance(Tribunal%20de%20vie).mp3?alt=media&token=10e98a98-5757-4b40-9a26-64c963ab9649',
    },
    {
      id: '503',
      title: 'Mega Helpe',
      artist: 'FJU Bordeaux',
      artwork: imageUrl,
      url: 'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/FjuBordeaux%2FMegaHelpe.mp3?alt=media&token=22da449f-4206-420a-933a-43eddf44f0f9',
    },
    {
      id: '504',
      title: 'Tu Connais Pas La FJU',
      artist: 'FJU Bordeaux',
      artwork: imageUrl,
      url:'https://firebasestorage.googleapis.com/v0/b/fjusongs.appspot.com/o/FjuBordeaux%2FFJU%20-%20Tu%20Connais%20Pas%20La%20FJU%20.mp3?alt=media&token=cffed409-d903-4f47-8b52-a5badc5163f2',
    },
  ],
};
*/

