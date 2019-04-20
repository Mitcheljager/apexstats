document.addEventListener("DOMContentLoaded", function() {
  createCharts()
})

function createCharts() {
  const charts = document.querySelectorAll("[data-role='profile-chart']")

  charts.forEach(element => {
    const ctx = element.getContext("2d")
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: JSON.parse(element.dataset.labels),
        datasets: [{
          label: "",
          data: JSON.parse(element.dataset.values),
          backgroundColor: ["rgba(179, 56, 52, 0.2)"],
          borderColor: ["rgba(179, 56, 52, 1)"],
          borderWidth: 1,
          lineTension: 0
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              userCallback: function(label, index, labels) {
                if (Math.floor(label) === label) {
                  return label
                }
              },
            }
          }],
        }
      }
    })
  })
}
