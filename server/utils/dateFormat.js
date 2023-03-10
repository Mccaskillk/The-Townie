module.exports = (
  timestamp,
  { monthLength = "short", dateSuffix = true } = {}
) => {
  // create month object
  const months = {
    0: monthLength === "short" ? "1" : "January",
    1: monthLength === "short" ? "2" : "February",
    2: monthLength === "short" ? "3" : "March",
    3: monthLength === "short" ? "4" : "April",
    4: monthLength === "short" ? "5" : "May",
    5: monthLength === "short" ? "6" : "June",
    6: monthLength === "short" ? "7" : "July",
    7: monthLength === "short" ? "8" : "August",
    8: monthLength === "short" ? "9" : "September",
    9: monthLength === "short" ? "10" : "October",
    10: monthLength === "short" ? "11" : "November",
    11: monthLength === "short" ? "12" : "December",
  };

  const dateObj = new Date(timestamp);
  const formattedMonth = months[dateObj.getMonth()];
  
  const dayOfMonth = (dateObj.getDate())
   

  const year = dateObj.getFullYear();

  const formattedTimeStamp = `${formattedMonth}/${dayOfMonth}/${year}`;

  return formattedTimeStamp;
};
