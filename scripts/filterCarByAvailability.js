function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  cars.forEach((car) => {
    car.available == true ? result.push(car) : null;
  });

  // Rubah code ini dengan array hasil filter berdasarkan availablity

  console.log(result);
  return result;
}
