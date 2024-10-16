const buildingItem = document.querySelectorAll('.building-item')
const informationAddress = document.querySelector('#information-address')
const informationFloors = document.querySelector('#information-floors')
const informationApartmentsAll = document.querySelector('#information-apartments-all')
const informationApartmentsFree = document.querySelector('#information-apartments-free')
const informationApartmentsAction = document.querySelector('#information-apartments-action')
const informationApartmentsReservation = document.querySelector('#information-apartments-reservation')

buildingItem.forEach(building =>{
    building.addEventListener('mouseover', function(){
        const buildingAddress = building.getAttribute('data-address')
        const buildingFloors = building.getAttribute('data-floors')
        const buildingApartmentsAll = building.getAttribute('data-apartments-all')
        const buildingApartmentsFree = building.getAttribute('data-apartments-free')
        const buildingApartmentsAction = building.getAttribute('data-apartments-action')
        const buildingApartmentsReservation = building.getAttribute('data-apartments-reservation')

        informationAddress.innerHTML = buildingAddress;
        informationFloors.innerHTML = buildingFloors;
        informationApartmentsAll.innerHTML = buildingApartmentsAll;
        informationApartmentsFree.innerHTML = buildingApartmentsFree;
        informationApartmentsAction.innerHTML = buildingApartmentsAction;
        informationApartmentsReservation.innerHTML = buildingApartmentsReservation;
        
    });
})

       