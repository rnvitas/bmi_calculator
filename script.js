const submit = document.getElementById("submit");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  calc_BMI();
});

function calc_BMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  if (weight > 0 && height > 0) {
    let bmi = weight / (height / 100) ** 2;
    bmi = Math.round(bmi * 10) / 10;
    let kategori = "";

    if (bmi < 18.5) {
      kategori = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      kategori = "Normal Weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      kategori = "Overweight";
    } else if (bmi >= 30) {
      kategori = "Obestity";
    }

    // console.log(bmi);
    document.getElementById("hasil").innerHTML =
      "<h4>Your BMI is  <b class='hasil_bmi'>" +
      bmi +
      "</b> which means You are <b class='hasil_kategori'>" +
      kategori +
      "</b> </h4>";
  } else {
    document.getElementById("hasil").innerHTML =
      "Please enter valid weight and height!";
  }
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
}
