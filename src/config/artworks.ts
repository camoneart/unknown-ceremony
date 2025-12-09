export type Artwork = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tag: string;
  date: string;
};

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'I Hope You Will Be Happy',
    description: 'description',
    imageUrl: '/images/artworks/oil-painting/i-hope-you-will-be-happy.jpg',
    category: 'Oil painting',
    tag: 'Oil painting',
    date: '2025.12.01',
  },
  {
    id: '2',
    title: 'Coal',
    description:
      '永遠の霧に包まれた街。ガス灯が死にゆく星のように瞬くその場所を、ひび割れた木と静かな渇望でできた少年が歩いている。Coalは自分を彫った手のことを何も覚えていない——ただ、未知へと引き寄せる糸の重さだけを知っている。彼のボタンの瞳には、失われた何かの輝きが宿っている。あるいはそれは、まだ見つかっていない何かなのかもしれない。',
    imageUrl: '/images/artworks/marionette/Coal.jpg',
    category: 'Character',
    tag: 'Marionette',
    date: '2025.12.02',
  },
  {
    id: '3',
    title: 'Ember',
    description: 'description',
    imageUrl: '/images/artworks/marionette/Ember.jpg',
    category: 'Character',
    tag: 'Marionette',
    date: '2025.12.03',
  },
  {
    id: '4',
    title: 'Rummage',
    description: 'description',
    imageUrl: '/images/artworks/marionette/Rummage.jpg',
    category: 'Character',
    tag: 'Marionette',
    date: '2025.12.04',
  },
  {
    id: '5',
    title: 'Dia',
    description: 'description',
    imageUrl: '/images/artworks/marionette/Dia.jpg',
    category: 'Character',
    tag: 'Marionette',
    date: '2025.12.05',
  },
  {
    id: '6',
    title: 'Dr. Flint',
    description: 'description',
    imageUrl: '/images/artworks/marionette/Dr-Flint.jpg',
    category: 'Character',
    tag: 'Marionette',
    date: '2025.12.06',
  },
  {
    id: '7',
    title: 'Chapter',
    description: 'description',
    imageUrl: '/images/artworks/marionette/Chapter.jpg',
    category: 'Character',
    tag: 'Marionette',
    date: '2025.12.01',
  },
  {
    id: '8',
    title: 'Luce',
    description: 'description',
    imageUrl: '/images/artworks/marionette/Luce.jpg',
    category: 'Character',
    tag: 'Marionette',
    date: '2025.12.01',
  },
  {
    id: '9',
    title: 'Ombra',
    description: 'description',
    imageUrl: '/images/artworks/marionette/Ombra.jpg',
    category: 'Character',
    tag: 'Marionette',
    date: '2025.12.01',
  },
];
