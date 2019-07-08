import React from 'react';
import * as Zdog from "zdog";
import { colors } from '../theme';

const cube = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 0],
  [1, 0, 0],
  [0, 0, -1],
  [1, 0, -1],
  [1, 1, -1],
  [0, 1, -1]
];

const scale = 240 / 2;
const stroke = 7;

const mapToPoint = vec3 => ({
  x: vec3[0] * scale,
  y: vec3[1] * scale,
  z: vec3[2] * scale
});

const mapCubePoint = i => mapToPoint(cube[i]);

const backOutline = [
  [1, 7, 1].map(mapCubePoint),
  [4, 7, 4].map(mapCubePoint),
  [6, 7, 6].map(mapCubePoint),
  [1, 7, 1].map(mapCubePoint),
  [6, 7, 6].map(mapCubePoint)
];

const centerOutline = [
  [0, 1, 0].map(mapCubePoint),
  [5, 6, 5].map(mapCubePoint),
  [0, 4, 0].map(mapCubePoint),
  [5, 4, 5].map(mapCubePoint)
];

const frontOutline = [
  [0, 3, 0].map(mapCubePoint),
  [2, 3, 2].map(mapCubePoint),
  [5, 3, 5].map(mapCubePoint),
  [1, 2, 1].map(mapCubePoint),
  [6, 2, 6].map(mapCubePoint)
];

const outline = [...backOutline, ...centerOutline, ...frontOutline];
const outlinePoints = [0, 1, 2, 6, 5, 4].map(mapCubePoint);
const secondaryPoints = [3, 7].map(mapCubePoint);
const trianglePoints = [1, 4, 6, 1].map(mapCubePoint);
const linePoints = [7, 3, 7].map(mapCubePoint);

const initIllustration = (selector) => {
  const logo = new Zdog.Illustration({
    centered: true,
    element: selector,
    rotate: {
      x: -0.125 * Math.PI,
      y: -1.75 * Math.PI
    }
  });

  const group = new Zdog.Group({
    addTo: logo,
    translate: mapToPoint([-0.5, -0.5, 0.5])
  });

  const anchor = new Zdog.Anchor({
    addTo: group
  });


  new Zdog.Shape({
    addTo: anchor,
    path: trianglePoints,
    closed: true,
    stroke: stroke * 1.1,
    color: colors.white
  });

  new Zdog.Shape({
    addTo: anchor,
    path: linePoints,
    closed: true,
    stroke: stroke * 1.1,
    color: colors.white
  });

  outline.forEach(frontPoints => {
    new Zdog.Shape({
      addTo: anchor,
      path: frontPoints,
      stroke: stroke * 1.5,
      color: colors.accent
    });
  });

  outlinePoints.forEach(point => {
    new Zdog.Shape({
      addTo: group,
      stroke: stroke * 4,
      color: colors.accentDark,
      translate: point
    });
  });

  secondaryPoints.forEach(point => {
    new Zdog.Shape({
      addTo: group,
      stroke: stroke * 3,
      color: colors.accent,
      translate: point
    });
  });

  const xStart = -0.125 * Math.PI;
  const yStart = -1.75 * Math.PI;
  const xRotate = Math.PI;
  const yRotate = -2 * Math.PI;
  const xEnd = xStart + xRotate;
  const yEnd = yStart + yRotate;
  const duration = 3000;

  const animate = timestamp => {
    const progress = timestamp / duration;
    const step = Math.floor(progress % 4);
    const tween = Zdog.easeInOut(progress % 1, 3);

    if (step === 0) {
      logo.rotate.x = xStart + tween * xRotate;
      logo.rotate.y = yStart + tween * yRotate;
    } else if (step === 2) {
      logo.rotate.x = xEnd - tween * xRotate;
      logo.rotate.y = yEnd - tween * yRotate;
    }

    logo.updateRenderGraph();
    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
};

export default class Logo extends React.Component { 
  componentDidMount() {
    initIllustration(`.${this.props.hostClassName}`)
  }

  render() {
    const { size, hostClassName } = this.props;
    return <canvas className={hostClassName} width={size} height={size} />
  }
}



