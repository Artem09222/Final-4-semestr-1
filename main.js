// document.addEventListener("DOMContentLoaded", function() {
//     const loadMoreButton = document.querySelector(".loadMoreButton");
//     const initialVisibleCount = 4;

//     const allCards = document.querySelectorAll(".card");
//     for (let i = 0; i < allCards.length; i++) {
//         if (i < initialVisibleCount) {
//             allCards[i].classList.remove("hidden");
//         } else {
//             allCards[i].classList.add("hidden");
//         }
//     }

//     loadMoreButton.addEventListener("click", function() {
//         const hiddenCards = document.querySelectorAll(".card.hidden");

//         for (let i = 0; i < hiddenCards.length && i < 4; i++) {
//             hiddenCards[i].classList.remove("hidden");
//         }
//         const newHiddenCards = document.querySelectorAll(".card.hidden");
//         if (newHiddenCards.length === 0) {
//             loadMoreButton.style.display = "none";
//         }
//     });
// });

// const secondSectionInput = document.querySelector('.secondSectionInput');
// const countryInfoContainer = document.querySelector('.countryInfoContainer');

// async function getCountryInfo(countryName) {
//     try {
//         const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
//         const countryData = await response.json(); 

//         renderCountryInfo(countryData[0]);
//     } catch (error) {
//         console.error('Помилка при отриманні інформації про країну:', error);
//     }
// }

// function renderCountryInfo(countryData) {
//     const countryCode = countryData.cca2.toLowerCase();
    
//     const flagImageUrl = `https://flagcdn.com/w80/${countryCode}.png`;

//     const countryInfoHTML = `
//         <div class="countryInfo">
//             <h2 style="color: white; text-align: center;">${countryData.name.common}</h2>
//             <img src="${flagImageUrl}" alt="${countryData.name.common} flag" class="countryFlag">
//             <p style="color: white; text-align: center;">Столиця: ${countryData.capital}</p>
//             <p style="color: white; text-align: center;">Населення: ${countryData.population}</p>
//             <p style="color: white; text-align: center;">Регіон: ${countryData.region}</p>
//         </div>
//     `;
//     countryInfoContainer.innerHTML = countryInfoHTML;
// }

// secondSectionInput.addEventListener('change', async function() {
//     const selectedCountry = this.value.trim();
//     await getCountryInfo(selectedCountry);
// });


// // modal 
// const modals = document.querySelectorAll('.modal');

// document.querySelectorAll('.card').forEach((card, index) => {
//   const modal = modals[index];
//   const closeBtn = modal.querySelector('.close');

//   card.addEventListener('click', () => {
//     modal.style.display = 'block';
//   });

//   closeBtn.addEventListener('click', () => {
//     modal.style.display = 'none';
//   });

//   document.addEventListener('click', (event) => {
//     if (event.target === modal) {
//       modal.style.display = 'none';
//     }
//   });
// });

// const modals = document.querySelectorAll('.modal');

// document.querySelectorAll('.card').forEach((card, index) => {
//   const modal = modals[index];
//   console.log(modal);
//   const closeBtn = modal.querySelector('.close');

//   card.addEventListener('click', () => {
//     // console.log(modal);
//     modal.style.display = 'block';
//     console.log(modal.style.display);
//   });

//   closeBtn.addEventListener('click', () => {
//     modal.style.display = 'none';
//   });

//   document.addEventListener('click', (event) => {
//     if (event.target === modal) {
//       modal.style.display = 'none';
//     }
//   });
// });

// function codeForModal() {
//   let modalHTML;
//   modalHTML.innerHTML = `
//       <div id="myModal" class="modalSelect">
//         <div class="modal-content">
//           <span class="close" onclick="closeModal()">&times;</span>
//           <img src="./Images/Rectangle 6 (4).png" alt="" class="modal-imgM">
//           <div class="div-modal-infoM">
//             <h1 class="modal-titleM">PRICES</h1>
//             <div class="div-formodal-infoM">
//                 <div class="img-with-textM">
//                   <img src="./icons8-штрих-код-32 (1).png" alt="" class="img-for-modalM"> -->
//                     <!-- <p class="text-for-modalM">Standart 300-500 UAH</p>
//                 </div>
//                 <button class="btn-for-modalM">BUY TICKETS</button>
//             </div>
//             <div class="div-formodal-infoM">
//                 <div class="img-with-textM">
//                     <img src="./icons8-штрих-код-32 (1).png" alt="" class="img-for-modalM"> -->
//                     <!-- <p class="text-for-modalM">VIP 1000-1500 UAH</p>
//                 </div>
//                 <button class="btn-for-modalM">BUY TICKETS</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     `
// }

  // function openModal() {
  //   let tempElement = document.createElement('div');
  //   tempElement.innerHTML = `
  //   <div id="modalA" class="modalA modal">
  //   <div class="modal-contentA">
  //     <span class="close">&times;</span>
  //     <img src="./Images/Rectangle 6 (5).png" alt="" class="modal-imgA">
  //     <div class="div-modal-infoA">
  //       <h1 class="modal-titleA">INFO</h1>
  //       <p class="modal-infoA">Atlas Weekend is the largest music festival in Ukraine.More than 200 artists will create a proper music festival atmosphere on 10 stages</p>
  //     </div>
  //     <div class="div-modal-infoA">
  //       <h1 class="modal-titleA">WHEN</h1>
  //       <p class="modal-infoA">2021-06-09</p>
  //       <p class="modal-infoA">20:00 (Kyiv/Ukraine)</p>
  //     </div>
  //     <div class="div-modal-infoA">
  //       <h1 class="modal-titleA">WHER</h1>
  //       <p class="modal-infoA">Kyiv, Ukraine</p>
  //       <p class="modal-infoA">VDNH</p>
  //     </div>
  //     <div class="div-modal-infoA">
  //       <h1 class="modal-titleA">WHO</h1>
  //       <p class="modal-infoA">The Black Eyed Peas</p>
  //     </div>
  //     <div class="div-modal-infoA">
  //       <h1 class="modal-titleA">PRICES</h1>
  //       <div class="div-formodal-infoA">
  //           <div class="img-with-textA">
  //               <img src="./icons8-штрих-код-32 (1).png" alt="" class="img-for-modalA">
  //               <p class="text-for-modalA">Standart 300-500 UAH</p>
  //           </div>
  //           <button class="btn-for-modalA">BUY TICKETS</button>
  //       </div>
  //       <div class="div-formodal-infoA">
  //           <div class="img-with-textA">
  //               <img src="./icons8-штрих-код-32 (1).png" alt="" class="img-for-modalA">
  //               <p class="text-for-modalA">VIP 1000-1500 UAH</p>
  //           </div>
  //           <button class="btn-for-modalA">BUY TICKETS</button>
  //       </div>
  //     </div>
  //     <button class="more-for-modalA">MORE FROM THIS AUTHOR</button>
  //   </div>
  // </div>
  
  // <div id="modalE" class="modalE modal">
  //   <div class="modal-contentE">
  //     <span class="close">&times;</span>
  //     <img src="./Images/Rectangle 6 (1).png" alt="" class="modal-imgE">
  //     <div class="div-modal-infoE">
  //       <h1 class="modal-titleE">INFO</h1>
  //       <p class="modal-infoE">Atlas Weekend is the largest music festival in Ukraine.More than 200 artists will create a proper music festival atmosphere on 10 stages</p>
  //     </div>
  //     <div class="div-modal-infoE">
  //       <h1 class="modal-titleE">WHEN</h1>
  //       <p class="modal-infoE">2021-06-09</p>
  //       <p class="modal-infoE">20:00 (Kyiv/Ukraine)</p>
  //     </div>
  //     <div class="div-modal-infoE">
  //       <h1 class="modal-titleE">WHER</h1>
  //       <p class="modal-infoE">Kyiv, Ukraine</p>
  //       <p class="modal-infoE">VDNH</p>
  //     </div>
  //     <div class="div-modal-infoE">
  //       <h1 class="modal-titleE">WHO</h1>
  //       <p class="modal-infoE">The Black Eyed Peas</p>
  //     </div>
  //     <div class="div-modal-infoE">
  //       <h1 class="modal-titleE">PRICES</h1>
  //       <div class="div-formodal-infoE">
  //           <div class="img-with-textE">
  //               <img src="./icons8-штрих-код-32 (1).png" alt="" class="img-for-modalE">
  //               <p class="text-for-modalE">Standart 300-500 UAH</p>
  //           </div>
  //           <button class="btn-for-modalE">BUY TICKETS</button>
  //       </div>
  //       <div class="div-formodal-infoE">
  //           <div class="img-with-textE">
  //               <img src="./icons8-штрих-код-32 (1).png" alt="" class="img-for-modalE">
  //               <p class="text-for-modalE">VIP 1000-1500 UAH</p>
  //           </div>
  //           <button class="btn-for-modalE">BUY TICKETS</button>
  //       </div>
  //     </div>
  //     <button class="more-for-modalE">MORE FROM THIS AUTHOR</button>
  //   </div>
  // </div>
  
  // <div id="modalLP" class="modalLP modal">
  //   <div class="modal-contentLP">
  //     <span class="close">&times;</span>
  //     <img src="./Images/Rectangle 6 (3).png" alt="" class="modal-imgLP">
  //     <div class="div-modal-infoLP">
  //       <h1 class="modal-titleLP">INFO</h1>
  //       <p class="modal-infoLP">Atlas Weekend is the largest music festival in Ukraine.More than 200 artists will create a proper music festival atmosphere on 10 stages</p>
  //     </div>
  //     <div class="div-modal-infoLP">
  //       <h1 class="modal-titleLP">WHEN</h1>
  //       <p class="modal-infoLP">2021-06-09</p>
  //       <p class="modal-infoLP">20:00 (Kyiv/Ukraine)</p>
  //     </div>
  //     <div class="div-modal-infoLP">
  //       <h1 class="modal-titleLP">WHER</h1>
  //       <p class="modal-infoLP">Kyiv, Ukraine</p>
  //       <p class="modal-infoLP">VDNH</p>
  //     </div>
  //     <div class="div-modal-infoLP">
  //       <h1 class="modal-titleLP">WHO</h1>
  //       <p class="modal-infoLP">The Black Eyed Peas</p>
  //     </div>
  //     <div class="div-modal-infoLP">
  //       <h1 class="modal-titleLP">PRICES</h1>
  //       <div class="div-formodal-infoLP">
  //           <div class="img-with-textLP">
  //               <img src="./icons8-штрих-код-32 (1).png" alt="" class="img-for-modalLP">
  //               <p class="text-for-modalLP">Standart 300-500 UAH</p>
  //           </div>
  //           <button class="btn-for-modalLP">BUY TICKETS</button>
  //       </div>
  //       <div class="div-formodal-infoLP">
  //           <div class="img-with-textLP">
  //               <img src="./icons8-штрих-код-32 (1).png" alt="" class="img-for-modalLP">
  //               <p class="text-for-modalLP">VIP 1000-1500 UAH</p>
  //           </div>
  //           <button class="btn-for-modalLP">BUY TICKETS</button>
  //       </div>
  //     </div>
  //     <button class="more-for-modalLP">MORE FROM THIS AUTHOR</button>
  //   </div>
  // </div>
  
  // <div id="modalM" class="modalM modal">
  //   <div class="modal-contentM">
  //     <span class="close">&times;</span>
  //     <img src="./Images/Rectangle 6 (4).png" alt="" class="modal-imgM">
  //     <div class="div-modal-infoM">
  //       <h1 class="modal-titleM">INFO</h1>
  //       <p class="modal-infoM">Atlas Weekend is the largest music festival in Ukraine. More than 200 artists will create a proper music festival atmosphere on 10 stages</p>
  //     </div>
  //     <div class="div-modal-infoM">
  //       <h1 class="modal-titleM">WHEN</h1>
  //       <p class="modal-infoM">2021-06-09</p>
  //       <p class="modal-infoM">20:00 (Kyiv/Ukraine)</p>
  //     </div>
  //     <div class="div-modal-infoM">
  //       <h1 class="modal-titleM">WHER</h1>
  //       <p class="modal-infoM">Kyiv, Ukraine</p>
  //       <p class="modal-infoM">VDNH</p>
  //     </div>
  //     <div class="div-modal-infoM">
  //       <h1 class="modal-titleM">WHO</h1>
  //       <p class="modal-infoM">The Black Eyed Peas</p>
  //     </div>
  //     <div class="div-modal-infoM">
  //       <h1 class="modal-titleM">PRICES</h1>
  //       <div class="div-formodal-infoM">
  //           <div class="img-with-textM">
  //             <img src="./icons8-штрих-код-32 (1).png" alt="" class="img-for-modalM"> -->
  //               <!-- <p class="text-for-modalM">Standart 300-500 UAH</p>
  //           </div>
  //           <button class="btn-for-modalM">BUY TICKETS</button>
  //       </div>
  //       <div class="div-formodal-infoM">
  //           <div class="img-with-textM">
  //               <img src="./icons8-штрих-код-32 (1).png" alt="" class="img-for-modalM"> -->
  //               <!-- <p class="text-for-modalM">VIP 1000-1500 UAH</p>
  //           </div>
  //           <button class="btn-for-modalM">BUY TICKETS</button>
  //       </div>
  //     </div>
  //     <button class="more-for-modalM">MORE FROM THIS AUTHOR</button>
  //   </div>
  // </div>
  // `;

  // let closeButton = modal.querySelector('.close');
  // closeButton.addEventListener('click', function() {
  // closeModal(modal.id);
  // });
  
  // let modal = tempElement.firstChild;
  // document.body.appendChild(modal);
  // modal.style.display = "block";

  // }
  
  // function closeModal(modalId) {
  //   let modal = document.getElementById(modalId);
  //   modal.style.display = "none";
  // }

  // window.onclick = function(event) {
  //   let modals = document.getElementsByClassName('modal');
  //   for (let i = 0; i < modals.length; i++) {
  //     let modal = modals[i];
  //     if (event.target == modal) {
  //       modal.style.display = "none";
  //     }
  //   }
  // }
  
  // let modalOpenCards = document.querySelectorAll('.modal');
  // modalOpenCards.forEach(card => {
  //   card.addEventListener('click', openModal)
  // });

  function openModal(content) {
    let modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = content; // Вставка вмісту карточки в модальне вікно

    let modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// Функція для закриття модального вікна
function closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Додавання події клікання до кожної карточки
let cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("click", function() {
        let content = this.innerHTML;
        openModal(content);
    });
});

// Закриття модального вікна при кліканні за його межами
window.onclick = function(event) {
    let modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function () {
  const pageNumbers = document.querySelectorAll('.thirdSectionInfo');
  const cardsPerPage = 6;

  pageNumbers.forEach(page => {
      page.addEventListener('click', () => {
          const pageNumber = parseInt(page.dataset.page);
          displayCards(pageNumber);
      });
  });

  function displayCards(pageNumber) {
      const allCards = document.querySelectorAll('.card');
      const startIndex = (pageNumber - 1) * cardsPerPage;
      const endIndex = pageNumber * cardsPerPage;

      allCards.forEach((card, index) => {
          if (index >= startIndex && index < endIndex) {
              card.style.display = 'block';
          } else {
              card.style.display = 'none';
          }
      });
  }
});

// firstInputSearch
// let firstSectionInput = document.querySelector('.firstSectionInput')
// let eventsContainer = document.querySelector('.eventsContainer')

// async function searchEvents() {
//     const 
// }

// function toggleMenu() {
//     const menu = document.getElementById('burgerMenu');
//     menu.classList.toggle('active');
// }


// async function showSelectedCountry() {
//   var selectElement = document.getElementById("country-select");
//   var selectedCountry = selectElement.options[selectElement.selectedIndex].value;

//   try {
//     const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${selectedCountry}&apikey=D9dT71LdTC1wOKwX0OBANeezmoFJm65E`);
//     const eventData = await response.json();

//     displayEvents(eventData);
//   } catch (error) {
//     console.error('Помилка при отриманні інформації про події:', error);
//   }
// }

// function displayEvents(eventData) {
//   const eventsContainer = document.querySelector('.eventsContainer');
//   eventsContainer.innerHTML = '';

//   eventData._embedded.events.forEach(event => {
//     const eventName = event.name;
//     const eventDate = new Date(event.dates.start.localDate).toLocaleDateString();
//     const eventVenue = event._embedded.venues[0].name;
//     const eventImage = event.images[0].url;

//     const eventHTML = `
//       <div class="event">
//         <h3>${eventName}</h3>
//         <img src="${eventImage}" alt="${eventName}" class="eventImage">
//         <p>Date: ${eventDate}</p>
//         <p>Venue: ${eventVenue}</p>
//       </div>
//     `;
//     eventsContainer.innerHTML += eventHTML;
//   });

//   document.getElementById("myModal").style.display = "block";
// }

// function closeModal() {
//   document.getElementById("myModal").style.display = "none";
// }

function showSelectedCountry() {
    const select = document.getElementById('country-select');
    const selectedOption = select.options[select.selectedIndex].text;
    document.getElementById('selected-country').innerHTML =
      'You selected: ' + selectedOption;
    // document.getElementById('myModal').style.display = 'block';
  }
  
  // function closeModal() {
  //   document.getElementById('myModal').style.display = 'none';
  // }
  
  function searchEvents() {
    let inputSearch,
      filterValue,
      eventsSearch,
      eventSearch,
      descriptionSearch,
      i,
      txtValue,
      found = false;
    inputSearch = document.querySelector('.search'); // Змінена 'getElementsByClassName' на 'querySelector'
    filterValue = inputSearch.value.toUpperCase(); // Змінена 'input' на 'inputSearch'
    eventsSearch = document.querySelectorAll('.event1');
    for (i = 0; i < eventsSearch.length; i++) {
      eventSearch = eventsSearch[i];
      descriptionSearch = eventSearch.querySelector('.describtion');
      txtValue = descriptionSearch.textContent || descriptionSearch.innerText; // Змінена 'description' на 'descriptionSearch'
      if (txtValue.charAt(0).toUpperCase() === filterValue && !found) { // Змінена 'filter' на 'filterValue'
        eventSearch.style.display = '';
        found = true;
      } else {
        eventSearch.style.display = 'none';
      }
    }
  }
  
  async function fetchCountries() {
    const url =
        'https://app.ticketmaster.com/discovery/v2/venues.json?apikey=D9dT71LdTC1wOKwX0OBANeezmoFJm65E';

    try {
        const response = await fetch(url);
        const data = await response.json();

        const countries = data._embedded.venues.map(venue => venue.country.countryCode);

        const selectElement = document.getElementById('country-select');
        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = country;
            selectElement.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching countries:', error);
    }
}

window.addEventListener('load', fetchCountries);
  
  async function fetchEvents() {
    const url =
      'https://app.ticketmaster.com/discovery/v2/events.json?apikey=D9dT71LdTC1wOKwX0OBANeezmoFJm65E';
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const events = data._embedded.events;
      const eventContainers = document.querySelectorAll('.event1');
  
      events.forEach((event, index) => {
        const imageURL = event.images[0].url;
  
        eventContainers[index].querySelector('img').src = imageURL;
      });
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  }
  
  window.addEventListener('load', () => {
    fetchCountries();
    fetchEvents();
    
    const countrySelect = document.getElementById('country-select');
    countrySelect.addEventListener('change', showSelectedCountry);
  });
