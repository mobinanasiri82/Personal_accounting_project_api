
const months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'];
async function getExpensesData(){
  const response = await fetch('http://127.0.0.1:8000/api/Expense/');
  const data = await response.json();
  return processData(data);
} 
function processData(data){
  const monthlyData= new Array(12).fill(0);
  data.forEach(item => {
    const date= new Date(item.time);
    const month = date.getMonth();
    monthlyData[month] += item.price;

  });
  return monthlyData;
}
function drawExpenseChart(ctx, data){
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: months,
      datasets: [{
        label: 'مبلغ',
        data: data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
        ],
        borderWidth: 1,
        fill:false,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  }
getExpensesData().then(ExpenseData => {
  const Expense = document.getElementById("ExpenseChart").getContext('2d');
  drawExpenseChart(Expense,ExpenseData);
});
