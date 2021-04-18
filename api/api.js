export const getSeries = async () => {
  const response = await fetch('https://islamic-series-d79e7-default-rtdb.firebaseio.com/offer.json');

  if (!response.ok) {
    throw new Error('Something Went Wrong');
  };

  const resData = await response.json();

  const series = [];
  for (const key in resData){
    const serial = resData[key]
    series.push(
      {
        ...resData[key],
        'genres': JSON.parse(resData[key].genres)
      }
    )
  }
  return series;
}
