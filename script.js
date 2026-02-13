body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f2f2f2;
}

h1 {
    margin-top: 20px;
}

.board {
    width: 300px;
    margin: 20px auto;
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
}

.cell {
    border: 2px solid #333;
    font-size: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: white;
    transition: 0.3s;
}

.cell:hover {
    background-color: #ddd;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

