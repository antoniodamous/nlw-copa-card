// // Lógica código com mais repitições
// let isIgnite = false
// function changeCard(event) {
//   const card = event.currentTarget
//   const backgroundImage = isIgnite
//     ? "url(./assets/bg-explorer.svg)"
//     : "url(./assets/bg-ignite.svg)"
//   isIgnite = !isIgnite
//   card.style.backgroundImage = backgroundImage  
// }

// Código com menos repetições e mais enxuto
let isIgnite = false
function changeCard(event) {
  const card = event.currentTarget
  const bg = isIgnite ? "explorer" : "ignite"
  isIgnite = !isIgnite
  card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
}