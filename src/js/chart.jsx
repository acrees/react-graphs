import React from 'react';

export default function Chart({f}) {
    var d = [];
    for(var x = 0; x < 500; x++) {
      d.push([x, eval(f)]);
    }

    var line = d.slice(1).reduce((acc, n) => acc + " L" + n[0] + " " + (200 - n[1]),
      "M" + d[0][0] + " " + (200 - d[0][1]));

    return (
      <svg width="500" height="200">
        <line x1="0" y1="0" x2="0" y2="200" style={{stroke: "rgb(0,0,0)"}} />
        <line x1="0" y1="200" x2="500" y2="200" style={{stroke: "rgb(0,0,0)"}} />

        <path d={line} style={{stroke: "rgb(255,0,0)", fill: "none"}} />
      </svg>
    );
}
