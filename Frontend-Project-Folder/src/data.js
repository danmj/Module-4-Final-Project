const listings = [
  {
    id: 1,
    type: 'private room',
    title: 'this great apt',
    description: 'great place near everything',
    host_name: 'suzie',
    max_guests: 4,
    price: 128,
    rating: 3.8,
    img_urls: {
      1: 'url',
      2: 'url',
      3: 'url'
    },
    amenities: {
      elevator: true,
      pet_friendly: false,
      kitchen: true,
      wi_fi: true,
      tv: true,
      pool: true,
      parking: true
    },
    city_id: 1,
    favorited: false
  },
  {
    id: 2,
    type: 'shared',
    title: 'this great house',
    description: 'just do it',
    host_name: 'adam',
    max_guests: 7,
    price: 200,
    rating: 4.1,
    img_urls: {
      1: 'url',
      2: 'url',
      3: 'url'
    },
    amenities: {
      elevator: false,
      pet_friendly: true,
      kitchen: true,
      wi_fi: true,
      tv: true,
      pool: true,
      parking: true
    },
    city_id: 2,
    favorited: false
  },
  {
    id: 3,
    type: 'private room',
    title: 'loft',
    description: 'its very cool',
    host_name: 'hannah',
    max_guests: 2,
    price: 250,
    rating: 4.5,
    img_urls: {
      1: 'url',
      2: 'url',
      3: 'url'
    },
    amenities: {
      elevator: true,
      pet_friendly: false,
      kitchen: true,
      wi_fi: true,
      tv: true,
      pool: false,
      parking: false
    },
    city_id: 3,
    favorited: false
  }
]

export const cities = [
  {
    id: 1,
    name: 'NYC'
  },
  {
    id: 2,
    name: 'LA'
  },
  {
    id: 3,
    name: 'Chicago'
  },
  {
    id: 4,
    name: 'Seattle'
  }
]

export const guests = [
  {
    id: 1,
    name: 'Scoti'
  },
  {
    id: 2,
    name: 'Dan'
  },
  {
    id: 3,
    name: 'Roger'
  }
]

export default listings
