const initialState = {
  lps: [
    {
      id: 1,
      albumImage: 'https://www.metal-archives.com/images/3/2/8/8/328899.jpg?2839',
      aritstName: 'Doombringer',
      albumName: 'Sevenfold Pestilence',
      albumDescription:
        'From the seventh storm destruction comes. Winds of vengeance penetrate the household.',
      albumFormat: 'LP',
    },
    {
      id: 2,
      albumImage: 'https://www.metal-archives.com/images/4/8/2/482.jpg?5008',
      aritstName: 'Black Sabbath',
      albumName: 'Black Sabbath',
      albumDescription: 'What is this that stands before me?',
      albumFormat: 'LP',
    },
  ],
  mcs: [
    {
      id: 1,
      albumImage: 'https://www.metal-archives.com/images/1/9/3/3/19333.jpg?4017',
      aritstName: 'Metallica',
      albumName: 'St. Anger',
      albumDescription: 'no solos album',
      albumFormat: 'MC',
    },
    {
      id: 2,
      albumImage: 'https://www.metal-archives.com/images/3/0/4/9/3049.jpg?5320',
      aritstName: 'Celtic Frost',
      albumName: 'Morbid Tales',
      albumDescription: 'First vomit from Switzerland',
      albumFormat: 'MC',
    },
    {
      id: 3,
      albumImage: 'https://www.metal-archives.com/images/1/1/7/6/1176.jpg?0038',
      aritstName: 'King Diamond',
      albumName: 'Abigail',
      albumDescription: 'Funny stories about ghosts',
      albumFormat: 'MC',
    },
    {
      id: 4,
      albumImage: 'https://www.metal-archives.com/images/4/8/2/5/482518.jpg?4641',
      aritstName: 'Mayhem',
      albumName: 'Grand Declaration of War',
      albumDescription: 'black metal techno',
      albumFormat: 'MC',
    },
  ],
  cds: [
    {
      id: 1,
      albumImage: 'https://www.metal-archives.com/images/6/2/4/624.jpg?1454',
      aritstName: 'Darkhtrone',
      albumName: 'Transilvanian Hunger',
      albumDescription: 'black metal from mighty forest',
      albumFormat: 'CD',
    },
    {
      id: 2,
      albumImage: 'https://www.metal-archives.com/images/2/0/5/4/205473.jpg',
      aritstName: 'Motorhead',
      albumName: 'Motorizer',
      albumDescription: "One of the best Motorhead's album",
      albumFormat: 'CD',
    },
    {
      id: 3,
      albumImage: 'https://www.metal-archives.com/images/2/1/4/214.jpg?5954',
      aritstName: 'Slayer',
      albumName: 'South of Heaven',
      albumDescription: 'Silent Scream...',
      albumFormat: 'CD',
    },
    {
      id: 4,
      albumImage:
        'https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/TomWaits-MuleVariations.jpg/220px-TomWaits-MuleVariations.jpg',
      aritstName: 'Tom Waits',
      albumName: 'Mule Variations',
      albumDescription: 'Hold on...',
      albumFormat: 'CD',
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        [action.payload.itemElement]: [
          ...state[action.payload.itemElement].filter(item => item.id !== action.payload.id),
        ],
      };
    case 'ADD_ITEM':
      return {
        ...state,
        [action.payload.itemElement]: [...state[action.payload.itemElement], action.payload.item],
      };
    default:
      return state;
  }
};

export default rootReducer;
