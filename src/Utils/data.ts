import {User} from './AuthProvider';

type Data = {
  id: String;
  message: String;
};

const Data: Array<Data> = [
  {id: '_saruttans_', message: 'Hello World'},
  {id: '_kannans_', message: 'Helo World'},
  {
    id: '_kannans_',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: '_saruttans_',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {id: '_saruttans_', message: 'Helo World'},
  {id: '_kannans_', message: 'Helo World'},
  {id: '_kannans_', message: 'Foodiya'},
  {id: '_saruttans_', message: 'Homework compleate akkiya?'},
  {
    id: '_kannans_',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident ullam recusandae, quasi odio illo, sed sapiente praesentium soluta hic, molestias doloribus saepe unde voluptatum ad.',
  },
];

const UsersData: User[] = [
  {
    username: 'Cat',
    uid: 'f4ch-asdk-33f4-gs5g-gsg5',

    avatar_url: require('../../assets/images/avatars/cat.png'),
    is_online: true,
  },
  {
    username: 'Dog',
    uid: 'f4ch-gs5g-gsg5-asdk-33f4',

    avatar_url: require('../../assets/images/avatars/cat.png'),
    is_online: false,
  },
  {
    username: 'Elephant',
    uid: 'asdk-33f4-f4ch-gs5g-ga2v',

    avatar_url: require('../../assets/images/avatars/cat.png'),
    is_online: true,
  },
  {
    username: 'Fox',
    uid: 'gsg5-asdk-33f4-f4ch-gs5g',

    avatar_url: require('../../assets/images/avatars/cat.png'),
    is_online: false,
  },

  {
    username: 'Dog',
    uid: 'bgh6-cvdv-3jcs-90df-2jse',

    avatar_url: require('../../assets/images/avatars/cat.png'),
    is_online: true,
  },
  {
    username: 'Elephant',
    uid: 'ac4f-44fx-sadc-3dfs-bh5d',

    avatar_url: require('../../assets/images/avatars/cat.png'),
    is_online: false,
  },
  {
    username: 'Cat',
    uid: 'axd3-vf5g-xsd9-zxfg-khl0',

    avatar_url: require('../../assets/images/avatars/cat.png'),
    is_online: false,
  },
  {
    username: 'Fox',
    uid: 'dc4g-d4df-c2vg-hgn8-df3g',

    avatar_url: require('../../assets/images/avatars/cat.png'),
    is_online: true,
  },
];

export {Data, UsersData};
