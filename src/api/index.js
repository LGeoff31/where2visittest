import axios from "axios"; //help make api cals

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "X-RapidAPI-Key": "008c66178emsh836ccbe91419dd8p18cf0ejsnd202cfed8f01",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

// const URL =
//   "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
// const options = {
//   url: URL,
//   params: {
//     bl_latitude: "11.847676",
//     tr_latitude: "12.838442",
//     bl_longitude: "109.095887",
//     tr_longitude: "109.149359",
//   },
//   headers: {
//     "X-RapidAPI-Key": "aa585c949bmshb89eb22f6535c22p176a9ajsndc4fd6eba0a1",
//     "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
//   },
// };

export const getPlacesData = async (type, sw, ne) => {
  try {
    //request
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        url: URL,
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_TRAVEL_KEY,
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
