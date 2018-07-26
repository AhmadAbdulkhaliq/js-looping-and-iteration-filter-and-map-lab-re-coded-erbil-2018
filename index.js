// Code your solution here:
function driversWithRevenueOver(array,revenue){
  return array.filter(function(driver){
    return driver.revenue>revenue;
  })
}

function driverNamesWithRevenueOver(array , revenue)
driversWithRevenueOver(array,revenue).map(function(driver){
  return driver.name;
})