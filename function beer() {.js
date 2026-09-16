function beer() {
    for (let bottles = 100; bottles >= 0; bottles--) {
        if (bottles === 0) {
            alert("No more bottles of beer on the wall, go to the store and buy some more.");
        } else {
            const currentBottle = bottles === 1 ? "bottle" : "bottles";
            const nextBottle = bottles - 1 === 1 ? "bottle" : "bottles";

            alert(
                `${bottles} ${currentBottle} of beer on the wall, ` +
                `${bottles} ${currentBottle} of beer, take 1 down, pass it around, ` +
                `${bottles - 1} ${nextBottle} of beer on the wall.`
            );
        }
    }
}

beer();