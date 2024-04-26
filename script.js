function rollDice()
{
    const rollofDice = document.getElementById("rollofDice").value;
    const diceResult = document.getElementById("diceResults");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for(let i=0;i<rollofDice;i++)
    {
        
    const value = Math.floor(Math.random() * 6) +1;
    console.log(value);
    values.push(value);
    images.push(`<img src="dice_images/${value}.png">`)
    }

    diceResult.textContent=`Your Dice roll : ${values.join(', ')}`;
    diceImages.innerHTML = images.join('')
}

