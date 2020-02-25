export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula, neque ac molestie ultricies, diam odio venenatis eros, quis facilisis dolor erat non ante. Quisque eu turpis ac elit volutpat tempor. Ut sit amet elementum lectus, vitae dignissim felis. Aenean blandit, dolor iaculis blandit lacinia, mauris justo molestie ipsum, et facilisis velit arcu in velit. Maecenas id rhoncus nulla. Nam ipsum magna, facilisis et eros eget, rutrum interdum eros. Fusce id libero mollis ante sollicitudin euismod. Nam interdum mi massa, sit amet aliquet mauris molestie nec. Aliquam id lectus eros. Fusce ut sodales lorem, in feugiat felis. Morbi quis ante erat. Sed et sapien tellus. Cras eu lectus fermentum libero interdum bibendum vitae et arcu. Aliquam in ornare sem, a posuere felis. Nam vitae nisl nisi. Morbi eu interdum tellus, at hendrerit erat. Fusce orci ligula, porta sed lorem sit amet, condimentum imperdiet mi. Vivamus commodo rhoncus sapien, lobortis iaculis urna convallis non.',
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula, neque ac molestie ultricies, diam odio venenatis eros, quis facilisis dolor erat non ante. Quisque eu turpis ac elit volutpat tempor. Ut sit amet elementum lectus, vitae dignissim felis. Aenean blandit, dolor iaculis blandit lacinia, mauris justo molestie ipsum, et facilisis velit arcu in velit. Maecenas id rhoncus nulla. Nam ipsum magna, facilisis et eros eget, rutrum interdum eros. Fusce id libero mollis ante sollicitudin euismod. Nam interdum mi massa, sit amet aliquet mauris molestie nec. Aliquam id lectus eros. Fusce ut sodales lorem, in feugiat felis. Morbi quis ante erat. Sed et sapien tellus. Cras eu lectus fermentum libero interdum bibendum vitae et arcu. Aliquam in ornare sem, a posuere felis. Nam vitae nisl nisi. Morbi eu interdum tellus, at hendrerit erat. Fusce orci ligula, porta sed lorem sit amet, condimentum imperdiet mi. Vivamus commodo rhoncus sapien, lobortis iaculis urna convallis non.',
    },
    {
      id: 3,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      price: 25,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG%2BL._SX374_BO1,204,203,200_.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula, neque ac molestie ultricies, diam odio venenatis eros, quis facilisis dolor erat non ante. Quisque eu turpis ac elit volutpat tempor. Ut sit amet elementum lectus, vitae dignissim felis. Aenean blandit, dolor iaculis blandit lacinia, mauris justo molestie ipsum, et facilisis velit arcu in velit. Maecenas id rhoncus nulla. Nam ipsum magna, facilisis et eros eget, rutrum interdum eros. Fusce id libero mollis ante sollicitudin euismod. Nam interdum mi massa, sit amet aliquet mauris molestie nec. Aliquam id lectus eros. Fusce ut sodales lorem, in feugiat felis. Morbi quis ante erat. Sed et sapien tellus. Cras eu lectus fermentum libero interdum bibendum vitae et arcu. Aliquam in ornare sem, a posuere felis. Nam vitae nisl nisi. Morbi eu interdum tellus, at hendrerit erat. Fusce orci ligula, porta sed lorem sit amet, condimentum imperdiet mi. Vivamus commodo rhoncus sapien, lobortis iaculis urna convallis non.',

    },
    {
      id: 4,
      title: 'Learning Python',
      author: 'Mark Lutz',
      price: 30,
      coverImage: 'https://m.media-amazon.com/images/I/51Nihh2qgLL._AC_UY218_ML3_.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula, neque ac molestie ultricies, diam odio venenatis eros, quis facilisis dolor erat non ante. Quisque eu turpis ac elit volutpat tempor. Ut sit amet elementum lectus, vitae dignissim felis. Aenean blandit, dolor iaculis blandit lacinia, mauris justo molestie ipsum, et facilisis velit arcu in velit. Maecenas id rhoncus nulla. Nam ipsum magna, facilisis et eros eget, rutrum interdum eros. Fusce id libero mollis ante sollicitudin euismod. Nam interdum mi massa, sit amet aliquet mauris molestie nec. Aliquam id lectus eros. Fusce ut sodales lorem, in feugiat felis. Morbi quis ante erat. Sed et sapien tellus. Cras eu lectus fermentum libero interdum bibendum vitae et arcu. Aliquam in ornare sem, a posuere felis. Nam vitae nisl nisi. Morbi eu interdum tellus, at hendrerit erat. Fusce orci ligula, porta sed lorem sit amet, condimentum imperdiet mi. Vivamus commodo rhoncus sapien, lobortis iaculis urna convallis non.',

    },
    {
      id: 5,
      title: 'Clean Architecture',
      author: 'Robert C. Martin',
      price: 23,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51hsB7ieLaL._SX380_BO1,204,203,200_.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula, neque ac molestie ultricies, diam odio venenatis eros, quis facilisis dolor erat non ante. Quisque eu turpis ac elit volutpat tempor. Ut sit amet elementum lectus, vitae dignissim felis. Aenean blandit, dolor iaculis blandit lacinia, mauris justo molestie ipsum, et facilisis velit arcu in velit. Maecenas id rhoncus nulla. Nam ipsum magna, facilisis et eros eget, rutrum interdum eros. Fusce id libero mollis ante sollicitudin euismod. Nam interdum mi massa, sit amet aliquet mauris molestie nec. Aliquam id lectus eros. Fusce ut sodales lorem, in feugiat felis. Morbi quis ante erat. Sed et sapien tellus. Cras eu lectus fermentum libero interdum bibendum vitae et arcu. Aliquam in ornare sem, a posuere felis. Nam vitae nisl nisi. Morbi eu interdum tellus, at hendrerit erat. Fusce orci ligula, porta sed lorem sit amet, condimentum imperdiet mi. Vivamus commodo rhoncus sapien, lobortis iaculis urna convallis non.',

    },
    {
      id: 6,
      title: 'Design Patterns',
      author: 'Erich Gamma',
      price: 39,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51szD9HC9pL._SX395_BO1,204,203,200_.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula, neque ac molestie ultricies, diam odio venenatis eros, quis facilisis dolor erat non ante. Quisque eu turpis ac elit volutpat tempor. Ut sit amet elementum lectus, vitae dignissim felis. Aenean blandit, dolor iaculis blandit lacinia, mauris justo molestie ipsum, et facilisis velit arcu in velit. Maecenas id rhoncus nulla. Nam ipsum magna, facilisis et eros eget, rutrum interdum eros. Fusce id libero mollis ante sollicitudin euismod. Nam interdum mi massa, sit amet aliquet mauris molestie nec. Aliquam id lectus eros. Fusce ut sodales lorem, in feugiat felis. Morbi quis ante erat. Sed et sapien tellus. Cras eu lectus fermentum libero interdum bibendum vitae et arcu. Aliquam in ornare sem, a posuere felis. Nam vitae nisl nisi. Morbi eu interdum tellus, at hendrerit erat. Fusce orci ligula, porta sed lorem sit amet, condimentum imperdiet mi. Vivamus commodo rhoncus sapien, lobortis iaculis urna convallis non.',

    },
    {
      id: 7,
      title: 'JavaScript for beginners',
      author: 'Matthew Python',
      price: 19,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/813iT+8i-6L._AC_US218_.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula, neque ac molestie ultricies, diam odio venenatis eros, quis facilisis dolor erat non ante. Quisque eu turpis ac elit volutpat tempor. Ut sit amet elementum lectus, vitae dignissim felis. Aenean blandit, dolor iaculis blandit lacinia, mauris justo molestie ipsum, et facilisis velit arcu in velit. Maecenas id rhoncus nulla. Nam ipsum magna, facilisis et eros eget, rutrum interdum eros. Fusce id libero mollis ante sollicitudin euismod. Nam interdum mi massa, sit amet aliquet mauris molestie nec. Aliquam id lectus eros. Fusce ut sodales lorem, in feugiat felis. Morbi quis ante erat. Sed et sapien tellus. Cras eu lectus fermentum libero interdum bibendum vitae et arcu. Aliquam in ornare sem, a posuere felis. Nam vitae nisl nisi. Morbi eu interdum tellus, at hendrerit erat. Fusce orci ligula, porta sed lorem sit amet, condimentum imperdiet mi. Vivamus commodo rhoncus sapien, lobortis iaculis urna convallis non.',
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