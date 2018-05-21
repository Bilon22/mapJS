let canvas = document.getElementById('canv');
let ctx = canvas.getContext('2d');

let width = 600;
let height = 600;
            
canvas.width = width;
canvas.height = height;

//ctx.fillStyle = "red";
//ctx.fillRect(1, 1, width, height);
noise.seed(Math.random());
let map = new Array(width);
let row = new Array(height);
for(let x = 0; x < width; x++){
    map[x] = row;
}
for(let x = 0; x < width; x++){
    for(let y = 0; y < height; y++){
        map[x][y] = Math.floor(Math.abs(noise.perlin2(x / 1000, y / 1000))*100);
        if(x * y % 2 == 1){
            if(map[x][y]>=0&&map[x][y]<10){
                ctx.fillStyle = "blue";
                ctx.fillRect(x, y, 2, 2);
            }
            if(map[x][y]>=10&&map[x][y]<15){
                ctx.fillStyle = "yellow";
                ctx.fillRect(x, y, 2, 2);
            }
            if(map[x][y]>=15&&map[x][y]<40){
                ctx.fillStyle = "green";
                ctx.fillRect(x, y, 2, 2);
            }
            if(map[x][y]>=40&&map[x][y]<100){
                ctx.fillStyle = "grey";
                ctx.fillRect(x, y, 2, 2);
            }
            //let color = Math.floor(Math.abs(noise.perlin2(x / 1000, y / 1000))*100);
            //ctx.fillStyle = "#" + color + color + color;
            //console.log("#" + color + color + color);
            //ctx.fillRect(x, y, 2, 2);
                
        }
    }
}
