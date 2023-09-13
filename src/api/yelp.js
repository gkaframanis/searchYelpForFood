import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer IlB8cibwTXzZyPEpN53Sz10mtYTA10zSVfJK1Ka9oVxTs3Zvn2oDT_JVqveKUCz17bOS1Ix4PnBQqEwGUKdX4sNifm3HmDGjeFA2UuY9efsBf8nkvsZ_MwfwZPr6ZHYx',
  },
});
