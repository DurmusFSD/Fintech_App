const ctx = document.getElementById("myChart");
const getGradient = (ctx, chartArea) => {
  let gradient = ctx.createLinearGradient(
    0,
    chartArea.bottom,
    0,
    chartArea.top
  );
  gradient.addColorStop(0.9, "rgba(21,123,243,0.2)");
  gradient.addColorStop(0, "transparent");
  return gradient;
};

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        data: [3, 2, 5, 4, 19, 20, 17, 15, 21],
        borderWidth: 2,
        borderColor: "#157bf8",
        lineTension: 0.8,
        fill: true,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return;
          return getGradient(ctx, chartArea);
        },
      },
    ],
  },
  options: {
    responsive: false,
    scales: {
      y: { beginAtZero: true },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

const transactions = [
  {
    status: 1,
    name: "Emmanuel Eze",
    image: "./asset/flutterwave.jpg",
    email: "emmy@gmail.com",
    date: new Date().toLocaleDateString(),
    amount: "$230",
  },
  {
    status: 2,
    name: "James",
    image: "./asset/paystack.png",
    email: "james@gmail.com",
    date: new Date().toLocaleDateString(),
    amount: "$50",
  },
  {
    status: 3,
    name: "Oluoma Patience",
    image: "./asset/paypal.png",
    email: "oluoma@gmail.com",
    date: new Date().toLocaleDateString(),
    amount: "$100",
  },
  {
    status: 0,
    name: "Daniel Kasi",
    image: "./asset/profile.jpg",
    email: "daniel@gmail.com",
    date: new Date().toLocaleDateString(),
    amount: "$5",
  },
];

const shortenTextFormatter = (text, maxLength) =>
  text.length > maxLength ? "..." + text.slice(-maxLength) : text;

transactions.forEach((data) => {
  let status =
    data.status === 1 ? "Success" : data.status === 0 ? "Failed" : "Processing";

  document.querySelector(".transactions table tbody").insertAdjacentHTML(
    "beforeend",
    `
    <tr>
      <td class="minimize">
      <div class="profile">
        <img src="${data.image}"/>
        </div>
      </td>
      <td class="minimize" title="${data.name}">${data.name}</td>
      <td class="minimize">${data.date}</td>
      <td title="${data.email}">${shortenTextFormatter(data.email, 11)}</td>
      <td title="${data.amount}">${data.amount}</td>
      <td>
      <div class="${status}">${status}</div>
      </td>
    </tr>
  `
  );
});

const themeSwitch = document.getElementById("theme");
const html = document.firstElementChild;
themeSwitch.onclick = () => {
  
   html.classList.toggle("dark")
};


