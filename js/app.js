// Variables
const cars = autos;
const result = document.querySelector('#resultado');
const container = document.querySelector('#container');

// Listeners
document.addEventListener('DOMContentLoaded', () => {
    createSelects(cars);
    showCars(cars);
});


// Functions

// Filtering
const filter = (selectDOM) => {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
    const filterType = selectDOM.id;
    const selectedOption = selectDOM.value;
    const filteredData = cars.filter(car => car[filterType] === selectedOption);
    filteredData.forEach(car => {
        const carInfo = document.createElement('p');
        carInfo.textContent = `marca: ${car.marca} - modelo: ${car.modelo} - color: ${car.color} - año: ${car.year} - precio: ${car.precio} - transmision: ${car.transmision} - puertas: ${car.puertas}`;
        result.appendChild(carInfo);
    });

}

// DOM Creating
const showCars = (cars) => {
    cars.forEach(car => {
        const carInfo = document.createElement('p');
        carInfo.textContent = `marca: ${car.marca} - modelo: ${car.modelo} - color: ${car.color} - año: ${car.year} - precio: ${car.precio} - transmision: ${car.transmision} - puertas: ${car.puertas} - puertas: ${car.puertas}`;
        result.appendChild(carInfo);
    });
};

createSelects = (cars) => {
    const getSpecs = cars[0];
    let specs = [];

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
        selectDOM.addEventListener('change', () => filter(selectDOM));
        createOptions(cars, specs, selectDOM);
    };
};

const createOptions = (cars, specs, selectDOM) => {
    specs.forEach(spec => {
        if (selectDOM.id === spec) {
            const options = new Set(cars.map(car => car[spec]));
            options.forEach((option) => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                selectDOM.appendChild(optionElement);
            });
        };
    });
};