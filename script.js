// script.js
document.addEventListener("DOMContentLoaded", () => {
  const worldForm = document.getElementById("worldForm");
  const worldDisplay = document.getElementById("worldDisplay");

  worldForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtener valores del formulario
    const worldName = document.getElementById("worldName").value;
    const climate = document.getElementById("climate").value;
    const technology = document.getElementById("technology").value;

    // Generar detalles aleatorios
    const inhabitants = generateInhabitants();
    const terrain = generateTerrain();
    const resources = generateResources();

    // Mostrar el mundo generado
    worldDisplay.innerHTML = `
        <h3>${worldName}</h3>
        <div class="world-detail"><strong>Clima:</strong> ${climate}</div>
        <div class="world-detail"><strong>Tecnología:</strong> ${technology}</div>
        <div class="world-detail"><strong>Habitantes:</strong> ${inhabitants}</div>
        <div class="world-detail"><strong>Terreno:</strong> ${terrain}</div>
        <div class="world-detail"><strong>Recursos:</strong> ${resources}</div>
      `;
  });

  // Funciones para generar detalles aleatorios
  function generateInhabitants() {
    const inhabitants = ["Humanos", "Elfos", "Robots", "Dragones", "Aliens"];
    return inhabitants[Math.floor(Math.random() * inhabitants.length)];
  }

  function generateTerrain() {
    const terrains = [
      "Montañoso",
      "Planicies",
      "Bosques",
      "Desierto",
      "Océanos",
    ];
    return terrains[Math.floor(Math.random() * terrains.length)];
  }

  function generateResources() {
    const resources = [
      "Minerales",
      "Energía",
      "Agua",
      "Vegetación",
      "Cristales",
    ];
    return resources[Math.floor(Math.random() * resources.length)];
  }
});
