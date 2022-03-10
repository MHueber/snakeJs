import { Apple } from './apple.mjs';


const blockSize = 10;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

export function Snake(body, direction) {

    this.body = body;
    this.direction = direction;
    this.eatApple = false;


    this.draw = function() {
        // ctx.save();
        for (let i = 0; i < this.body.length; i++) {
            ctx.fillStyle = "green";
            ctx.fillRect(this.body[i][0] * blockSize, this.body[i][1] * blockSize, blockSize, blockSize);
        }
        // ctx.restore();
    }


    this.advance = function() {

        const nextPosition = this.body[0].slice();

        switch (this.direction) {

            case "left":
                nextPosition[0] = nextPosition[0] - 1;
                break;
            case "right":
                nextPosition[0] = nextPosition[0] + 1;
                break;
            case "up":
                nextPosition[1] = nextPosition[1] - 1;
                break;
            case "down":
                nextPosition[1] = nextPosition[1] + 1;
                break;
            default:
                throw ("Invalid direction");
        }

        this.body.unshift(nextPosition);
        this.body.pop();
        ctx.clearRect(0, 0, 900, 600);
    };


    this.checkCollision = function() {
        let wallCollision = false;
        let snakeCollision = false;

        const headX = this.body[0][0];
        const headY = this.body[0][1];
        const rest = this.body.slice(1);

        if (headX < 0 || headX > 29) {
            wallCollision = true;
        } else if (headY < 0 || headY > 14) {
            wallCollision = true;
        }

        for (let i = 0; i < rest.length; i++) {
            if (headX == rest[i][0] && headY == rest[i][1]) {
                snakeCollision = true;
            }
        }

        return wallCollision || snakeCollision;


    };

    this.appleCollision = function(Apple) {
        let ateApple = false
        let appleX = Apple.position[0];
        let appleY = Apple.position[1];
        const headX = this.body[0][0];
        const headY = this.body[0][1];
        const rest = this.body.slice(1);

        if (headX === (appleX) && headY === (appleY)) {
            ateApple = true;
        }

        return ateApple;
    };




    // Body

    // Direction
    // Mange une pomme
    // Fonction Draw
    // Fonction avance
    // Fonction suppression de la derniere position
    // Fonction de direction
    // Fonction de collision
    // Fonction de manger une pomme

}