/**
 * 항상 코드를 설명하는 주석이 있다면, 이 주석을 어떻게 하면 없애고 코드 그 자체로 설명할 수 있을지 고민해보자.
 * 물론, 주석이 항상 나쁜것은 아니다. 복잡한 로직의 경우 주석을 적절하게 활용하는게 더 좋을 수 있다.
 * 하지만 아래 코드는 분명히 주석 없이 이해하기 쉽게 작성할 수 있다.
 */

export function price(order) {
  // 가격(price) = 기본가격 - 수량할인 + 배송비
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
}
