export class Confetti {


    static launchAnimationConfeti() {
        let animDiv = document.createElement("div");
        animDiv.id = "allConfetis";
        animDiv.innerHTML = "";

        for (let i = 0; i < 100; i++) {
            let confeti = document.createElement("div");
            confeti.classList.add("confetti")
            confeti.style.left = this.getRandomArbitrary(0, 100) + "%";
            confeti.style.animationDelay = 50 * i + " ms";
            confeti.style.backgroundColor = "#" + (Math.random() * 0xffffff << 0).toString(16);
            animDiv.appendChild(confeti);
        }
        document.body.appendChild(animDiv);
    }

    static stopAnimation() {
        let animDiv = document.getElementById("allConfetis");
        if (animDiv != undefined) {
            animDiv.innerHTML = "";
            animDiv.remove();
        }
    }

    static getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

}