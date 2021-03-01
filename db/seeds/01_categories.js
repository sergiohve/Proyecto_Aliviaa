exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('category')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {
          id: 1,
          name: 'Computadoras',
          label: 'Computadoras',
          md_icon: 'MdDesktopWindows',
          created_at: Date.now(),
        },
        {
          id: 2,
          name: 'mac',
          label: 'Computadoras Apple',
          md_icon: 'MdDesktopMac',
          created_at: Date.now(),
        },
        {
          id: 3,
          name: 'laptop',
          label: 'Laptops',
          md_icon: 'MdLaptop',
          created_at: Date.now(),
        },
        {
          id: 4,
          name: 'Teclados',
          label: 'Teclados',
          md_icon: 'MdKeyboard',
          created_at: Date.now(),
        },
        {
          id: 5,
          name: 'components',
          label: 'Componentes de computadoras',
          md_icon: 'MdMemory',
          created_at: Date.now(),
        },
        {
          id: 6,
          name: 'speaker',
          label: 'Accesorios',
          md_icon: 'MdSpeaker',
          created_at: Date.now(),
        },
        {
          id: 7,
          name: 'smartphone',
          label: 'Celular',
          md_icon: 'MdSmartphone',
          created_at: Date.now(),
        },
        {
          id: 8,
          name: 'tv',
          label: 'TV & Video',
          md_icon: 'MdTv',
          created_at: Date.now(),
        },
        {
          id: 9,
          name: 'videogame',
          label: 'Juegos de consolas',
          md_icon: 'MdVideogameAsset',
          created_at: Date.now(),
        },
        {
          id: 10,
          name: 'watch',
          label: 'Reloj',
          md_icon: 'MdWatch',
          created_at: Date.now(),
        },
      ]);
    });
};
