const width = window.innerWidth;
const height = window.innerHeight;

let p1Pos = [50, 50];
let p2Pos = [100,100];
let p3Pos = [(p2Pos[0] + p1Pos[0])/2, (p2Pos[1] + p1Pos[1])/2];

const distance = function(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(3);
};

const stage = new Konva.Stage({
  container: 'canvas',
  width: width,
  height: height
});

const layer = new Konva.Layer();

const distanceACText = new Konva.Text({
  x: 10,
  y: 5,
  text: '||A-C|| = ' + distance(p1Pos[0], p1Pos[1], p3Pos[0], p3Pos[1]),
  fill: 'black'
});

const distanceBCText = new Konva.Text({
  x: 10,
  y: 20,
  text: '||C-B|| = '  + distance(p2Pos[0], p2Pos[1], p3Pos[0], p3Pos[1]),
  fill: 'black'
});

const p1Group = new Konva.Group({
  x: p1Pos[0],
  y: p1Pos[1],
  draggable: true,
  dragBoundFunc: function(pos) {
    p3Group.setX((p1Group.getX() + p2Group.getX())/2);
    p3Group.setY((p1Group.getY() + p2Group.getY())/2);
    distanceACText.setText('||A-C|| = ' + distance(p1Group.getX(), p1Group.getY(), p3Group.getX(), p3Group.getY()));
    distanceBCText.setText('||C-B|| = ' + distance(p2Group.getX(), p2Group.getY(), p3Group.getX(), p3Group.getY()));
    return pos;
  }
});

const p1Text = new Konva.Text({
  text: 'A',
  fill: 'black'
});

const p1Circle = new Konva.Circle({
  radius: 5,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 1,
  x: p1Text.getWidth()-4,
  y: p1Text.getHeight()+4
});


const p2Group = new Konva.Group({
  x: p2Pos[0],
  y: p2Pos[1],
  draggable: true,
  dragBoundFunc: function(pos) {
    p3Group.setX((p1Group.getX() + p2Group.getX())/2);
    p3Group.setY((p1Group.getY() + p2Group.getY())/2);
    distanceACText.setText('||A-C|| = ' + distance(p1Group.getX(), p1Group.getY(), p3Group.getX(), p3Group.getY()));
    distanceBCText.setText('||C-B|| = ' + distance(p2Group.getX(), p2Group.getY(), p3Group.getX(), p3Group.getY()));
    return pos;
  }
});

const p2Text = new Konva.Text({
  text: 'B',
  fill: 'black'
});

const p2Circle = new Konva.Circle({
  radius: 5,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 1,
  x: p2Text.getWidth()-4,
  y: p2Text.getHeight()+4
});


const p3Group = new Konva.Group({
  x: p3Pos[0],
  y: p3Pos[1]
});

const p3Text = new Konva.Text({
  text: 'C',
  fill: 'black'
});

const p3Circle = new Konva.Circle({
  radius: 5,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 1,
  x: p2Text.getWidth()-4,
  y: p2Text.getHeight()+4
});


p1Group.add(p1Circle).add(p1Text);
p2Group.add(p2Circle).add(p2Text);
p3Group.add(p3Circle).add(p3Text);

layer.add(p1Group);
layer.add(p2Group);
layer.add(p3Group);
layer.add(distanceACText);
layer.add(distanceBCText);

stage.add(layer);
