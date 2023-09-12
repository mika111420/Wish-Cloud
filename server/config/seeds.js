const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Christmas' },
    { name: 'Wedding' },
    { name: 'Baby Shower' },
    { name: 'Graduation' },
    { name: 'Anniversary' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'MacBook Pro',
      description:
        'A sleek and powerful laptop designed for productivity and creativity.',
      image: '/assets/macbookpro.jpg',
      category: categories[0]._id,
      price: 999.99,
      quantity: 1
    },
    {
      name: 'Cold Press Juicer',
      description:
        'A high-quality juicing machine for nutritious beverages.',
      image: '/assets/juicer.jpg',
      category: categories[0]._id,
      price: 499.99,
      quantity: 1
    },
    {
      name: 'FitBit',
      description:
        'A wearable fitness tracker that monitors your physical activity and health.',
      image: '/assets/fitbit.jpg',
      category: categories[0]._id,
      price: 99.99,
      quantity: 1
    },
    {
      name: 'Cookies',
      description:
        'Delicious baked treats perfect for satisfying your sweet tooth.',
      image: '/assets/cookies.jpg',
      category: categories[0]._id,
      price: 20.99,
      quantity: 20
    },
    {
      name: 'Rolex',
      category: categories[1]._id,
      description:
        'A luxury Swiss watch known for its precision and craftsmanship.',
      image: '/assets/rolex.jpg',
      price: 5000,
      quantity: 1
    },
    {
      name: 'Wine Glasses',
      category: categories[1]._id,
      description:
        'Elegant glassware designed to enhance the enjoyment of wine.',
      image: '/assets/wine-glasses.jpg',
      price: 80.99,
      quantity: 4
    },
    {
      name: 'Breadmaker',
      category: categories[1]._id,
      description:
        'A kitchen appliance that automates the process of baking fresh bread.',
      image: '/assets/breadmaker.jpg',
      price: 199.99,
      quantity: 1
    },
    {
      name: 'Kitchen Knives',
      category: categories[1]._id,
      description:
        'High-quality cutlery essential for precise and efficient food preparation.',
      image: '/assets/kitchen-knives.jpg',
      price: 50,
      quantity: 6
    },
    {
      name: 'Diapers',
      category: categories[2]._id,
      description:
        'Disposable or cloth products for keeping babies dry and comfortable.',
      image: '/assets/diaper.jpg',
      price: 35,
      quantity: 30
    },
    {
      name: 'Baby Monitor',
      category: categories[2]._id,
      description:
        'A device that allows parents to remotely monitor their babys sleep or activity.',
      image: '/assets/baby-monitor.jpg',
      price: 75,
      quantity: 2
    },
    {
      name: 'Car Seat',
      category: categories[2]._id,
      description:
        'A safety seat designed to protect infants during car travel.',
      image: '/assets/car-seat.jpg',
      price: 199.99,
      quantity: 1
    },
    {
      name: 'Crib',
      category: categories[2]._id,
      description:
        'A secure and comfortable bed designed for babies and toddlers.',
      image: '/assets/crib.jpg',
      price: 200,
      quantity: 1
    },
    {
      name: 'Kindle',
      category: categories[3]._id,
      description:
        'An e-reader device for accessing a vast library of digital books.',
      image: '/assets/kindle.jpg',
      price: 89.99,
      quantity: 1
    },
    {
      name: 'Pack of Neck Ties',
      category: categories[3]._id,
      description:
        'A collection of stylish neckties suitable for formal attire.',
      image: '/assets/neck-ties.jpg',
      price: 29.99,
      quantity: 3
    },
    {
      name: 'Benihana Gift Card',
      category: categories[3]._id,
      description:
        'A gift card for a popular restaurant chain known for teppanyaki-style dining.',
      image: '/assets/benihana-card.jpg',
      price: 150,
      quantity: 1
    },
    {
      name: 'Notebooks',
      category: categories[3]._id,
      description:
        'Blank or lined books for writing, sketching, or note-taking.',
      image: '/assets/notebooks.jpg',
      price: 15,
      quantity: 3
    },
    {
      name: 'Candles',
      category: categories[4]._id,
      description: 'Fragrant and decorative items that provide ambiance and pleasant scents.',
      image: '/assets/candle.jpg',
      price: 25,
      quantity: 4
    },
    {
      name: 'Tickets to Japan',
      category: categories[4]._id,
      description:
        'Passes for traveling to and exploring the beautiful country of Japan.',
      image: '/assets/japan-tickets.jpg',
      price: 1800,
      quantity: 2
    },
    {
      name: 'Tiffany Necklace',
      category: categories[4]._id,
      description:
        'A high-quality jewelry piece from the renowned Tiffany & Co. brand.',
      image: '/assets/tiffany-necklace',
      price: 350,
      quantity: 1
    },
    {
      name: 'Spa Voucher',
      category: categories[4]._id,
      description:
        'A voucher for pampering and relaxation at a spa or wellness center.',
      image: '/assets/spa-voucher.jpg',
      price: 200,
      quantity: 1
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
