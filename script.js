function convert() {
    const yards = parseFloat(document.getElementById('yards').value);
    const squareFeet = yards * 9; // 1 yard = 9 square feet
    const result = `${yards} yards is equal to ${squareFeet} square feet.`;
    document.getElementById('result').textContent = result;
}
