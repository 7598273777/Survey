function submitForm() {
   const formData = new FormData(document.getElementById("survey-form"));
  


  const foodSelection1 = document.getElementsByName("food1");
  let selectedFood ;
  foodSelection1.forEach((ele)=> {
    if (ele.checked){
        selectedFood = ele.value
    }
  })
  console.log(selectedFood)
  



  const foodSelection2 = document.getElementsByName("food");
  let selectedFood2 ;
  foodSelection2.forEach((ele)=> {
    if (ele.checked){
        selectedFood2 = ele.value
    }
  })
  console.log(selectedFood2)

 
  console.log(formData);


  
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
      <td>${formData.get("first-name")}</td>
      <td>${formData.get("last-name")}</td>
      <td>${formData.get("email")}</td>
      <td>${formData.get("Address")}</td>
      <td>${formData.get("pinCode")}</td>
      <td>${formData.get("gender")}</td>
      <td>${selectedFood}</td>
      <td>${selectedFood2}</td>
      <td>${formData.get("state")}</td>
      <td>${formData.get("country")}</td>`;
  document.getElementById("dataTable").getElementsByTagName('tbody')[0].appendChild(newRow);
  resetForm();
}

function resetForm() {
  document.getElementById("survey-form").reset();
}
