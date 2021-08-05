let data = [{
  firstName: "Nika",
  lastName: "Shamiladze",
  points: [{
    point: "11",
    verified: false,
    date: "06/06/2021"
  },
  {
    point: "12",
    verified: false,
    date: "08/11/2021"
  },
  {
    point: "77",
    verified: true,
    date: "01/02/2021"
  },
  {
    point: [{
      point: "70",
      verified: true,
      date: "07/08/2021"
    },
    {
      point: "88",
      verified: true,
      date: "01/05/2021"
    }],
    verified: true,
    date: "07/09/2021"
  }]
}];

let user = [];

data.map((item) => {
  item.points.map((point) => {
    if (point.date.length > 0 || point.date.length) {
      if (typeof point.point === "object") {
        point.point.map((x) => {
          if (x.date.length > 0 || x.date) {
            if (x.verified) {
              if (+x.point > 0 && +x.point > 10) {
                const getFullYear = point.date.split("/")[2];
                const getLocalYear = new Date().getFullYear();
                if (+getFullYear === getLocalYear) {
                  console.log('array');
                  user.push({
                    firstName: item.firstName,
                    lastName: item.lastName,
                    fullName: item.firstName + " " + item.lastName,
                    points: [point.point]
                  })
                  console.log(user);
                }
              }
            }
          }
        })
      } else {
        if (point.verified) {
          if (+point.point > 0 && +point.point > 10) {
            const getFullYear = point.date.split("/")[2];
            const getLocalYear = new Date().getFullYear();
            if (+getFullYear === getLocalYear) {
              console.log('collection');
              user.push({
                firstName: item.firstName,
                lastName: item.lastName,
                fullName: item.firstName + " " + item.lastName,
                points: [point.point]
              })
              console.log(user);
            }
          }
        }
      }
    }
  })
})
