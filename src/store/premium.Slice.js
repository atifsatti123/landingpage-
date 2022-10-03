import images from '../images/service-grid.png';

const premiums = [
    {
      "id": 1,
      "planName": "BASIC PLAN",
      "price": "$0",
      "description": "Joy horrible moreover man feelings own shy. Request norland neither mistake for yet.",
      "lists": [
        {
          "first": "Customer Support"
        },
        {
          "first": "Free User Account"
        },
        {
          "first": "Monthly Reports"
        },
        {
          "first": "Multiple Devices"
        }
      ],
      "btn": "Join for free",
      "clasName": "premium-card-content"
    },
    {
      "id": 2,
      "planName": "PREMIUM PLAN",
      "price": "$49",
      "description": "On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe",
      "lists": [
        {
          "first": "Customer Support"
        },
        {
          "first": "Upto 10 Users"
        },
        {
          "first": "Monthly Reports"
        },
        {
          "first": "Multiple Devices"
        }
      ],
      "btn": "Get the premium",
      "clasName": "premium-card-content greenback"
    },
  ];
  const { createSlice } = require("@reduxjs/toolkit");
  // const initialState = {
  //   premiums: premiums
  // }
  // console.log(premiums);
  const premiumSlice = createSlice({
    name: 'premiums',
    initialState:{
      premiums,
    },
  

  });
  console.log(premiums);

export default premiumSlice.reducer;