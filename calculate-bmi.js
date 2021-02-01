function bmi(weight, height) {
    let body = weight / (height * height);

    if(body <= 18.5) {
        return "Underweight";
      } else if(body <= 25) {
        return "Normal";
      } else if(body <= 30) {
        return "Overweight";
      } else {
        return "Obese";
      }
}