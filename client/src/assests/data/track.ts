export type Track = {
  id: number;
  url: any; // You can specify a more specific type if you know it (e.g., string for URLs)
  title: string;
  artist: string;
  artwork: string;
};

const tracks: Track[] = [
  {
    id: 1,
    url: require('../songs/FJULaFOI.mp3'),
    title: 'La FOI',
    artist: 'FJU LYON',
    artwork:
      'https://images.unsplash.com/photo-1542749777-399a1d3e59de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2luZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 2,
    url: require('../songs/FJUTConnaisPasLa.mp3'),
    title: 'Tu Connais Pas La FJU',
    artist: 'FJU LYON',
    artwork:
      'https://media.istockphoto.com/id/1155368162/fr/photo/belle-jeune-femme-de-hipster-avec-les-cheveux-boucl%C3%A9s-avec-la-guitare-rouge-dans-les-lumi%C3%A8res.webp?a=1&b=1&s=612x612&w=0&k=20&c=xiL1Fkaj1FI2JKq8nVCJuOioG2WTLz_i9LxIUlXIdTQ=',
  },
  {
    id: 3,
    url: require('../songs/FJU-Reviensàlamaison.mp3'),
    title: 'Reviens à maison',
    artist: 'FJU LYON',
    artwork:
      'https://media.istockphoto.com/id/1535648487/fr/photo/des-plans-rapproch%C3%A9s-dun-chanteur-attrayant-chantant-de-la-musique-et-jouant-de-la-guitare.webp?a=1&b=1&s=612x612&w=0&k=20&c=3ZS7sAGG6RXgJ4AQLu921mUILdKSjaoUgplFwSLTqvg=',
  },
  {
    id: 4,
    url: require('../songs/FJU-Parfum.mp3'),
    title: 'Parfum',
    artist: 'FJU LYON',
    artwork:
      'https://media.istockphoto.com/id/607260652/fr/photo/trio-musical-cubain.webp?a=1&b=1&s=612x612&w=0&k=20&c=-dzpDI4Aw2pW91eBHFkpQugdC0A1jqNEsOo9glHvjbM=',
  },
  {
    id: 5,
    url: require('../songs/FJU-Lumière.mp3'),
    title: 'Lumière',
    artist: 'FJU LYON',
    artwork:
      'https://media.istockphoto.com/id/1977233037/fr/photo/handsome-male-singer-on-stage.webp?a=1&b=1&s=612x612&w=0&k=20&c=Dhdk1gTGwfCUraxynuaZKs6fk2MQ3NJ3jTD9huQJUPQ=',
  },
  {
    id: 6,
    url: require('../songs/FJU-demoi.mp3'),
    title: '100 de Moi',
    artist: 'FJU LYON',
    artwork:
      'https://images.unsplash.com/photo-1542749777-399a1d3e59de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2luZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 7,
    url: require('../songs/FJU-Au-delà.mp3'),
    title: 'Au-delà',
    artist: 'FJU LYON',
    artwork:
      'https://images.unsplash.com/photo-1542749777-399a1d3e59de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2luZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 8,
    url: require('../songs/FJU-Cap-ou-pas-cap.mp3'),
    title: 'Cap-ou-pas-cap',
    artist: 'FJU LYON',
    artwork:
      'https://images.unsplash.com/photo-1542749777-399a1d3e59de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2luZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 9,
    url: require('../songs/FJU-Confiance.mp3'),
    title: 'FJU-Confiance',
    artist: 'FJU LYON',
    artwork:
      'https://images.unsplash.com/photo-1542749777-399a1d3e59de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2luZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 10,
    url: require('../songs/FJU-Décision.mp3'),
    title: 'Décision',
    artist: 'FJU LYON',
    artwork:
      'https://images.unsplash.com/photo-1542749777-399a1d3e59de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2luZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D',
  },
];

export const tracks2: Track[] = [
  {
    id: 1,
    url: require('../songs/FJUTConnaisPasLa.mp3'),
    title: 'Tu Connais Pas La FJU',
    artist: 'FJU LYON',
    artwork:
      'https://media.istockphoto.com/id/1155368162/fr/photo/belle-jeune-femme-de-hipster-avec-les-cheveux-boucl%C3%A9s-avec-la-guitare-rouge-dans-les-lumi%C3%A8res.webp?a=1&b=1&s=612x612&w=0&k=20&c=xiL1Fkaj1FI2JKq8nVCJuOioG2WTLz_i9LxIUlXIdTQ=',
  },
  {
    id: 2,
    url: require('../songs/FJU-Confiance.mp3'),
    title: 'FJU-Confiance',
    artist: 'FJU LYON',
    artwork:
      'https://images.unsplash.com/photo-1542749777-399a1d3e59de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2luZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D',
  },

  {
    id: 3,
    url: require('../songs/FJU-Parfum.mp3'),
    title: 'Parfum',
    artist: 'FJU LYON',
    artwork:
      'https://media.istockphoto.com/id/607260652/fr/photo/trio-musical-cubain.webp?a=1&b=1&s=612x612&w=0&k=20&c=-dzpDI4Aw2pW91eBHFkpQugdC0A1jqNEsOo9glHvjbM=',
  },
  {
    id: 4,
    url: require('../songs/FJU-Lumière.mp3'),
    title: 'Lumière',
    artist: 'FJU LYON',
    artwork:
      'https://media.istockphoto.com/id/1977233037/fr/photo/handsome-male-singer-on-stage.webp?a=1&b=1&s=612x612&w=0&k=20&c=Dhdk1gTGwfCUraxynuaZKs6fk2MQ3NJ3jTD9huQJUPQ=',
  },
  {
    id: 5,
    url: require('../songs/FJU-Reviensàlamaison.mp3'),
    title: 'Reviens à maison',
    artist: 'FJU LYON',
    artwork:
      'https://media.istockphoto.com/id/1535648487/fr/photo/des-plans-rapproch%C3%A9s-dun-chanteur-attrayant-chantant-de-la-musique-et-jouant-de-la-guitare.webp?a=1&b=1&s=612x612&w=0&k=20&c=3ZS7sAGG6RXgJ4AQLu921mUILdKSjaoUgplFwSLTqvg=',
  },
  {
    id: 6,
    url: require('../songs/FJU-demoi.mp3'),
    title: '100 de Moi',
    artist: 'FJU LYON',
    artwork:
      'https://images.unsplash.com/photo-1542749777-399a1d3e59de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2luZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 7,
    url: require('../songs/FJU-Au-delà.mp3'),
    title: 'Au-delà',
    artist: 'FJU LYON',
    artwork:
      'https://images.unsplash.com/photo-1542749777-399a1d3e59de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2luZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 8,
    url: require('../songs/FJU-Cap-ou-pas-cap.mp3'),
    title: 'Cap-ou-pas-cap',
    artist: 'FJU LYON',
    artwork:
      'https://images.unsplash.com/photo-1542749777-399a1d3e59de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2luZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 9,
    url: require('../songs/FJULaFOI.mp3'),
    title: 'La FOI',
    artist: 'FJU LYON',
    artwork:
      'https://images.unsplash.com/photo-1542379653-b928db1b4956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    id: 10,
    url: require('../songs/FJU-Décision.mp3'),
    title: 'Décision',
    artist: 'FJU LYON',
    artwork:
      'https://images.unsplash.com/photo-1542749777-399a1d3e59de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2luZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D',
  },
];

export default tracks;
