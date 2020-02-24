export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
    },
    {
      id: 3,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      price: 25,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG%2BL._SX374_BO1,204,203,200_.jpg'
    },
    {
      id: 4,
      title: 'Learning Python',
      author: 'Mark Lutz',
      price: 30,
      coverImage: 'https://m.media-amazon.com/images/I/51Nihh2qgLL._AC_UY218_ML3_.jpg'
    },
    {
      id: 5,
      title: 'Clean Architecture',
      author: 'Robert C. Martin',
      price: 23,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51hsB7ieLaL._SX380_BO1,204,203,200_.jpg'
    },
    {
      id: 6,
      title: 'Design Patterns',
      author: 'Erich Gamma',
      price: 39,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51szD9HC9pL._SX395_BO1,204,203,200_.jpg'
    },
    {
      id: 7,
      title: 'JavaScript for beginners',
      author: 'Matthew Python',
      price: 19,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/813iT+8i-6L._AC_US218_.jpg'
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        // error imitation
        if (Math.random() > 0.95) {
          reject(new Error('fee'))
        }
        // ---------------
        resolve(this.data)
      }, 700);
    });
  }
}