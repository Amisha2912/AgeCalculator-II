function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const dob = new Date(dobInput); // Get the selected date
    const today = new Date(); // Get the current date
    // Check if a valid date is selected
    if (dobInput === '') {
        alert('Please select your date of birth');
        return;
    }

    let age = today.getFullYear() - dob.getFullYear(); // Calculate the difference in years
    let monthDifference = today.getMonth() - dob.getMonth();
    let dayDifference = today.getDate() - dob.getDate();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--; 
        monthDifference += 12; 
    } 
        
    if (dayDifference < 0) { 
        monthDifference--; dayDifference += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); 
    }

    // Display the age in the HTML
    const ageDisplay = document.getElementById('ageDisplay');
    ageDisplay.textContent = `Your age is ${age} years old!!🎉`;
 
    document.getElementById('ageDisplay').textContent = `Your age is ${age} years old!`; 
    document.getElementById('year').innerHTML = `Year(s): ${age} <br>`;  
    document.getElementById('month').innerHTML = `Month(s): ${monthDifference} <br>`; 
    document.getElementById('date').innerHTML = `Day(s): ${dayDifference}`
}


window.addEventListener('load', function() { 
    document.getElementById('year').textContent = 'Year(s):'; 
    document.getElementById('month').textContent = 'Month(s):'; 
    document.getElementById('date').textContent = 'Day(s):'; 
});
// Add event listener to the button
document.getElementById('calculateBtn').addEventListener('click', calculateAge);