    
const addBtn = document.getElementById('add-btn');
const tablesArray = []
const waitingArray = []
// Question: What is "e" short for?
addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Question: What does this code do?

    let resName = document.getElementById('name').value.trim();
    let resId = document.getElementById('id').value.trim();
    let resPhone = document.getElementById('phone').value.trim();
    let resEmail = document.getElementById('email').value.trim();

    let newReservation = {
        name: resName,
        id: resId,
        phone: resPhone,
        email: resEmail,
    };
    
    if ((tablesArray.length + 1) < 5) {
        tablesArray.push(newReservation)
        newReservation.table = `Table # ${tablesArray.length}`
    } else {
        waitingArray.push(newReservation)
        newReservation.tabl = `Table # ${waitingArray.length}`
    }

    // Question: What does this code do??
    fetch('/reserve', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReservation),
    })
        .then((response) => response.json())
        .then((data) => {
        console.log('index.html', data);
        if (tablesArray.length > 5) {
            alert(`Adding Reservation under ${data.name}`);
            return tablesArray
        }
        
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    });