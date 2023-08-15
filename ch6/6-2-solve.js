// 예제 1
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
function reportLines(customer) {
  const result = [
    ['name', customer.name],
    ['location', customer.location],
  ];
  return result;
}
