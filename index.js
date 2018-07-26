// Code your solution here:
function driversWithRevenueOver(array,revenue){
  return array.filter(function(driver){
    return driver.revenue>revenue;
  })
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function (driver) {
      return driver.name;
    });
}