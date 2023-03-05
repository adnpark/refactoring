/**
 * 문제점
 * 1. 함수의 가독성이 떨어짐. 너무 많은 일들을 하나의 함수가 하고 있음
 * 2. 재사용성이 떨어진다.
 * 3. 버그가 발생하면 어디를 고쳐야할지 파악하는데 많은 시간이 걸린다.
 */


/**
 * 해결방법
 * 1. 함수를 읽으면서 단계적으로 함수를 추출한다.
 *
 * 현업에서 사용하는 간편한 방식
 * 1. 우선 코드를 읽으면서 덩어리로 묶어나가며 주석을 단다.
 * 2. 함수 도입부에 함수 안에서 사용하는 모든 변수를 관행처럼 여겼는데, 요즘은 지역변수는 사용하는곳과 최대한 가까운곳에 정의하는게 좋다.
 */

export function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

function printBanner() {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

function calculateOutstanding(invoice) {
  // 이런식으로 반복문 파이프라인 써도됨
  // return invoice.orders.reduce((sum, order) => (sum += order.amount), 0);
  let result = 0; // 반환하는 변수는 result 라고 이름지으면 결과값을 반환하기 위한 변수구나라고 알 수 있음!
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}

function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date( // 객체를 수정하고 있음. 이건 나쁜 냄새임. 가능하면 불변의 객체. 즉 기존의 데이터를 변경하지 않는것이 중요하다. -> 우선은 그냥 두자.
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 30
  );
}

function printDetails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice);
