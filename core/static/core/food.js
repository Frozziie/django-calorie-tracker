var table = document.getElementById("table");
var carbs = 0,
    protein = 0,
    fats = 0,   
    calories = 0;

/* Acumulate all values from table into variables */
for (let i = 1; i < table.rows.length -1; i++) {
    
    carbs += parseFloat(table.rows[i].cells[1].innerHTML);
    carbs = Math.round(carbs);
    protein += parseFloat(table.rows[i].cells[2].innerHTML);
    protein = Math.round(protein);
    fats += parseFloat(table.rows[i].cells[3].innerHTML);
    fats = Math.round(fats);
    calories += parseFloat(table.rows[i].cells[4].innerHTML);
    calories = Math.round(calories);
}

/* Print total values on table */
document.getElementById("totalCarbs").innerHTML = '<b>' + carbs + '(gr.)</b>';
document.getElementById("totalProteins").innerHTML = '<b>' + protein + '(gr.)</b>';
document.getElementById("totalFats").innerHTML = '<b>' + fats + '(gr.)</b>';
document.getElementById("totalCalories").innerHTML = '<b>' + calories + '(Kcal.)</b>';

/* Calories bar */
var calPer = (calories / 2000) * 100; // Get % calories based on 2000 expected calories per day.
document.getElementsByClassName("progress-bar")[0].setAttribute("style", "width:" + calPer + "%");


/* Nutrients donut chart */

// Metrics
var total = carbs + protein + fats;
var carbsP = Math.round((carbs / total) * 100); // carbs %
var proteinP = Math.round((protein / total) * 100); // protein %
var fatsP = Math.round((fats / total) * 100); // fats %

const labels = [
    'Carbs',
    'Proteins',
    'Fats',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Donut',
        backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
        ],
        data: [
            carbsP, 
            proteinP, 
            fatsP,
        ],
    }]
};

const config = {
    type: 'doughnut',
    data: data,
    options: {
        maintainAspectRatio: false,
    }
};

const myChart = new Chart(document.getElementById('myChart'),config);