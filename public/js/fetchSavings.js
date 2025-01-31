// import { apiUrl } from './config.js';
// import { tableBodyEl, totalAmountEl } from './domElements.js';
// import convertTo12 from './convertTime.js';
// import { attachDeleteListeners } from './delete.js';
// import { attachEditListeners } from './editSaving.js';

// export const fetchSavings = async () => {
//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();

//     console.log("Fetched savings data:", data);

//     // Clear the table
//     tableBodyEl.innerHTML = '';

//     let runningTotal = 0;
//     data.forEach((saving, index) => {
//       runningTotal += saving.amount;

//       const currentAmount = (index === 0 && data.length === 1) ? 0 : (runningTotal - saving.amount);
//       const formattedTime = convertTo12(saving.time);

//       const row = `
//         <tr>
//           <td>${saving.amount.toLocaleString()}</td>
//           <td>${currentAmount.toLocaleString()}</td>
//           <td>${runningTotal.toLocaleString()}</td>
//           <td>${saving.date}</td>
//           <td>${saving.today}</td>
//           <td>${formattedTime}</td>
//           <td>
//             <button class="edit-btn" data-id="${saving._id}" data-amount="${saving.amount}" 
//                     data-date="${saving.date}" data-today="${saving.today}" 
//                     data-time="${saving.time}">Edit</button>
//             <button class="delete-btn" data-id="${saving._id}">Delete</button>
//           </td>
//         </tr>
//       `;
//       tableBodyEl.innerHTML += row;
//     });

//     // Update Total Amount Display
//     // totalAmountEl.textContent = `Total Amount: ${runningTotal}`;
//     totalAmountEl.textContent = `Total Amount: ${runningTotal.toLocaleString()}`;


//     // Attach event listeners
//     attachDeleteListeners();
//     attachEditListeners();

//   } catch (error) {
//     console.error("Error fetching savings:", error);
//     alert("Failed to fetch savings.");
//   }
// };







//******************************************************************************** 




/* Added this line of code to make the adding amount is green color
  and subrtact amount is red color.
  added class 'green' and 'red' in the CSS file.
  const amountClass = saving.amount >= 0 ? 'green' : 'red';
*/


import { apiUrl } from './config.js';
import { tableBodyEl, totalAmountEl } from './domElements.js';
import convertTo12 from './convertTime.js';
import { attachDeleteListeners } from './delete.js';
import { attachEditListeners } from './editSaving.js';

export const fetchSavings = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log("Fetched savings data:", data);

    // Clear the table
    tableBodyEl.innerHTML = '';

    let runningTotal = 0;
    data.forEach((saving, index) => {
      runningTotal += saving.amount;

      const currentAmount = (index === 0 && data.length === 1) ? 0 : (runningTotal - saving.amount);
      const formattedTime = convertTo12(saving.time);

      // Determine the color based on the amount value
      const amountClass = saving.amount >= 0 ? 'green' : 'red';

      const row = `
        <tr>
          <td class="${amountClass}">${saving.amount.toLocaleString()}</td>
          <td>${currentAmount.toLocaleString()}</td>
          <td>${runningTotal.toLocaleString()}</td>
          <td>${saving.date}</td>
          <td>${saving.today}</td>
          <td>${formattedTime}</td>
          <td>
            <button class="edit-btn" data-id="${saving._id}" data-amount="${saving.amount}" 
                    data-date="${saving.date}" data-today="${saving.today}" 
                    data-time="${saving.time}">Edit</button>
            <button class="delete-btn" data-id="${saving._id}">Delete</button>
          </td>
        </tr>
      `;
      tableBodyEl.innerHTML += row;
    });

    // Update Total Amount Display
    totalAmountEl.textContent = `Total Amount: ${runningTotal.toLocaleString()}`;

    // Attach event listeners
    attachDeleteListeners();
    attachEditListeners();

  } catch (error) {
    console.error("Error fetching savings:", error);
    alert("Failed to fetch savings.");
  }
};











