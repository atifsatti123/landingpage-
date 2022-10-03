
import images1 from '../images/ui-checks-grid-1.png';
import images2 from "../images/ui-checks-grid-2.png";
import images3 from "../images/ui-checks-grid-3.png";
import images4 from "../images/ui-checks-grid-4.png";
import images5 from "../images/ui-checks-grid-5.png";
import images6 from "../images/ui-checks-grid-6.png";
import images7 from "../images/ui-checks-grid-7.png";

  const services = [
    {
      'id': 1,
      'title': "Project Management",
      'subtitle': "30 options available",
      'img': images1,
      'color': "card-wrapper",
    },
    {
      'id': 2,
      'title': "Web & Mobile Develop",
      'subtitle': "40 options available",
      'img': images2,

      'color': "card-wrapper",
    },
    {
        'id': 3,
        'title': 'Customer  Support',
        'subtitle': '17 options available',
        'img': images3,
        'color': 'card-wrapper'
    },
    {
        'id': 4,
        'title': 'Human Resources',
        'subtitle': "21 options available",
        'img': images4,
        'color': 'card-wrapper'
    },
    {
        'id': 5,
        'title': 'Design & Creatives',

        'subtitle': "13 options available",
        'img': images5,
        'color': 'card-wrapper'
    },
    {
        'id': 6,
        'title': 'Marketing & Communica',

        'subtitle': "27 options available",
        'img': images6,
        'color': 'card-wrapper'
    },
    {
        'id': 7,
        'title': 'Business  Development',
        'subtitle': "22 options available",
        'img': images7,
        'color': 'card-wrapper'
    },
    {
        id: 8,
        'title': '+4 More',
        'subtitle': "170+ options available",
        'color': 'card-wrapper bg'
    },
  ];
  const {createSlice} = require("@reduxjs/toolkit")

  const serviceSlice = createSlice({
    name: 'services',
    initialState: {
    services,
  },
  
  // const serviceSlice = createSlice({
  //   name: 'services',
  //   initialState,
    // reducers: {
    //   reset: () => initialState,
    // },

   
});
console.log(services);
export default serviceSlice.reducer;