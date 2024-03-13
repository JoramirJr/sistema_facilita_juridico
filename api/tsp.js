function generatePermutations(origin, clientes) {
  const allPermutations = [];
  const remainingClientes = clientes.filter(city => city !== origin);

  const permutationsOfRemaining = generatePermutationsForRemaining(origin, remainingClientes);
  for (let i = 0; i < permutationsOfRemaining.length; i++) {
      allPermutations.push([origin].concat(permutationsOfRemaining[i]));
  }

  return allPermutations;
}

function generatePermutationsForRemaining(origin, clientes) {
  if (clientes.length === 0) {
      return [[]];
  }

  const allPermutations = [];
  for (let i = 0; i < clientes.length; i++) {
      const currentCity = clientes[i];
      const remainingClientes = clientes.slice(0, i).concat(clientes.slice(i + 1));
      const permutationsOfRemaining = generatePermutationsForRemaining(origin, remainingClientes);

      for (let j = 0; j < permutationsOfRemaining.length; j++) {
          allPermutations.push([currentCity].concat(permutationsOfRemaining[j]));
      }
  }

  return allPermutations;
}


function calculateTotalDistance(route) {
  let totalDistance = 0;
  for (let i = 0; i < route.length - 1; i++) {
      const city1 = route[i];
      const city2 = route[i + 1];
      const distance = calculateDistance(city1, city2);
      totalDistance += distance;
  }
  totalDistance += calculateDistance(route[route.length - 1], route[0]);
  return totalDistance;
}

function calculateDistance(city1, city2) {
  const dx = city1.coordenadas.x - city2.coordenadas.x;
  const dy = city1.coordenadas.y - city2.coordenadas.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function findShortestRoute(allPermutations) {
  let shortestDistance = Infinity;
  let shortestRoute = [];

  for (let i = 0; i < allPermutations.length; i++) {
      const route = allPermutations[i];
      const distance = calculateTotalDistance(route);

      if (distance < shortestDistance) {
          shortestDistance = distance;
          shortestRoute = route.slice();
      }
  }

  return shortestRoute;
}

function optimalVisitRoute(clientes){
  const allPermutations = generatePermutations({ nome: "EMPRESA", coordenadas: { x: 0, y: 0 } }, clientes);
  const shortestRoute = findShortestRoute(allPermutations);
  const shortestRouteWithoutOrigin = shortestRoute.splice(1);
  return shortestRouteWithoutOrigin;
}


module.exports = { optimalVisitRoute }; 