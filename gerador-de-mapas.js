const mazeWidth = 10; // largura do labirinto em células
const mazeHeight = 10; // altura do labirinto em células

const mazeMap = [];

// Função para gerar um número aleatório entre 0 e 1
function getRandomCell() {
    return Math.random() < 0.3 ? 1 : 0; // ajusta a probabilidade conforme necessário
}

// Gerar o labirinto
for (let y = 0; y < mazeHeight; y++) {
    const row = [];
    for (let x = 0; x < mazeWidth; x++) {
        // Criar bordas
        if (y === 0 || y === mazeHeight - 1 || x === 0 || x === mazeWidth - 1) {
            row.push(1);
        } else {
            row.push(getRandomCell());
        }
    }
    mazeMap.push(row);
}

// Posições do jogador e do inimigo
let playerPosition = { x: 1, y: 1 };
let enemyPosition = { x: mazeWidth - 2, y: mazeHeight - 2 };

// Garantir que as posições do jogador e do inimigo não estejam em uma parede
mazeMap[playerPosition.y][playerPosition.x] = 0;
mazeMap[enemyPosition.y][enemyPosition.x] = 0;

// Adicionar a posição de chegada
const finishPosition = { x: mazeWidth - 2, y: mazeHeight - 2 };
mazeMap[finishPosition.y][finishPosition.x] = 0;

console.log(mazeMap);
