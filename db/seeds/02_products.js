exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('product')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('product').insert([
        {
          id: 1,
          name: 'Apple iPhone ',
          description:
            '4.7-inch Retina HD display ',
          img_url: '/products/81hCytKTUTL.jpg',
          price: 250.52,
          rating: 4.5,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
        {
          id: 2,
          name: 'Nintendo Switch ',
          description:
            '3 Play Styles: TV Mode, Tabletop Mode, Handheld Mode ',
          img_url: '/products/61JnrafZ7zL._AC_SL1457_.jpg',
          price: 374.88,
          rating: 2,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
        {
          id: 3,
          name: ' Nintendo Switch',
          description:
            'An adventure ',
          img_url: '/products/81V7L6auixL._SL1500_.jpg',
          price: 109.0,
          rating: 4.7,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
        {
          id: 4,
          name: 'Acer SB220Q ',
          description:
            'Acer SB220Q bi 21.5 ',
          img_url: '/products/81QpkIctqPL._AC_SL1500_.jpg',
          price: 89.99,
          rating: 2.8,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
        {
          id: 5,
          name: 'ASUS VivoBook 15 Thin and Light Laptop',
          description:
            'ASUS VivoBook ',
          img_url: '/products/81fstJkUlaL._AC_SL1500_.jpg',
          price: 484.66,
          rating: 2,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
        {
          id: 6,
          name: 'AmazonBasics Wireless ',
          description:
            'AmazonBasics Wireless ',
          img_url: '/products/71nmrSRQ3cL._AC_SL1500_.jpg',
          price: 39.49,
          rating: 3.5,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
        {
          id: 7,
          name: 'Michael Kors ',
          description:
            'Hecho en usa',
          img_url: '/products/71xe2bDZ0nL._AC_UX679_.jpg',
          price: 188.67,
          rating: 4,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
        {
          id: 8,
          name: 'Acer Aspire ',
          description:
            'Acer Aspire ',
          img_url: '/products/61UgXsi%2BmcL._AC_SL1500_.jpg',
          price: 549.99,
          rating: 4,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
        {
          id: 9,
          name: 'Acer Aspire ',
          description:
            'Acer Aspire ',
          img_url: '/products/71S-XwHaGzL._AC_SL1500_.jpg',
          price: 699.0,
          rating: 5,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
        {
          id: 10,
          name: 'Moto G ',
          description:
            'Moto G Stylus ',
          img_url: '/products/61xQRmY%2BRRL._AC_SL1500_.jpg',
          price: 269.99,
          rating: 3.8,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
        {
          id: 11,
          name: 'Xiaomi Redmi Note 8 Pro',
          description:
            'Xiaomi Redmi Note 8 ',
          img_url: '/products/81UgYuadkpL._AC_SL1500_.jpg',
          price: 208.99,
          rating: 5,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
        {
          id: 12,
          name: 'Bluetooth Speakers',
          description:
            'Bluetooth Speakers',
          img_url: '/products/71VqtdDUzsL._AC_SL1500_.jpg',
          price: 39.99,
          rating: 3.7,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
        },
      ]);
    });
};
