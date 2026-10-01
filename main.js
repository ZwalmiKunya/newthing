const darbuotojai = [
    {vardas: "Edvinas", atlyginimas: 1200},
    {vardas: "Jonas", atlyginimas: 1600},
    {vardas: "Ralph", atlyginimas: 1890},
    {vardas: "Gabija", atlyginimas: 1685},
    {vardas: "Julija", atlyginimas: 1350},
    {vardas: "Modestas", atlyginimas: 1475},
]

const WHAT_IS_THISSS = darbuotojai.filter( m => m.atlyginimas >= 1500 ).map(m => m.vardas).sort()
const highestSalary = Math.max(...darbuotojai.map(m => m.atlyginimas))

console.log(WHAT_IS_THISSS);
console.log(highestSalary);

