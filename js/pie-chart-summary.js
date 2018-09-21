new Chart(document.getElementById("doughnut-chart-sophie"), {
    type: 'doughnut',
    data: {
      labels: ["Sales", "Target"],
      datasets: [
        {
          label: "Total sales",
          backgroundColor: ["#CB654F","#A2AB93"],
          color: ["#CB654F"], 
          data: [80,20]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Sophie'
      }
    }
});

new Chart(document.getElementById("doughnut-chart-poppy"), {
    type: 'doughnut',
    data: {
      labels: ["Sales", "Target"],
      datasets: [
        {
          label: "Total sales",
          backgroundColor: ["#CB654F","#A2AB93"],
          color: ["#CB654F"],
          data: [90,10]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Poppy'
      }
    }
});

new Chart(document.getElementById("doughnut-chart-olivia"), {
    type: 'doughnut',
    data: {
      labels: ["Sales", "Target"],
      datasets: [
        {
          label: "Total sales",
          backgroundColor: ["#CB654F","#A2AB93"],
          color: ["#CB654F"],
          data: [70,30]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Olivia'
      }
    }
});
