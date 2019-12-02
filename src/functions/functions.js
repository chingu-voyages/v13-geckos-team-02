export const formateDate = inputDate => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const [year, month, day] = inputDate.split("-");
  return `${monthNames[month - 1]} ${day}, ${year}`;
};

export const formateMovieLength = inputLength => {
  const hour = Math.floor(inputLength / 60);
  const mins = inputLength % 60;
  if (hour < 2) return `${hour}hour ${mins}mins`;
  return `${hour}hours ${mins}mins`;
};
