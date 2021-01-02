// Variables
const cars = autos;
const result = document.querySelector('#resultado');
const container = document.querySelector('#container');

// Listeners
document.addEventListener('DOMContentLoaded', () => {
    createSelects(cars)
    showCars(cars);
});


// Functions
const showCars = (cars) => {
    // console.log(cars);
    cars.forEach(car => {
        const carInfo = document.createElement('p');
        carInfo.textContent = `marca: ${car.marca} modelo: ${car.modelo} color: ${car.color} año: ${car.año} precio: ${car.precio}`
        result.appendChild(carInfo)
    });
}

createSelects = (cars) => {
    const getSpecs = cars[0];
    let specs = []

    const filter = (selectDOM) => {
        console.log(selectDOM.value);
    };

    for (let spec in getSpecs) {
        specs = [...specs, spec]

        const div = document.createElement('div');
        const label = document.createElement('label');
        const select = document.createElement('select');

        div.className = "three columns";
        label.for = spec;
        label.textContent = spec;
        select.className = "u-full-width";
        select.id = spec;
        container.appendChild(div);
        div.appendChild(label);
        div.appendChild(select);

        const selectDOM = document.getElementById(spec);
        selectDOM.addEventListener('change', () => filter(selectDOM))
        createOptions(cars, specs, selectDOM);
    }
}

const createOptions = (cars, specs, selectDOM) => {
    specs.forEach(spec => {
        if (selectDOM.id === spec) {
            const options = new Set(cars.map(car => car[spec]))
            options.forEach((option) => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                selectDOM.appendChild(optionElement)
            })
        }
    })
}