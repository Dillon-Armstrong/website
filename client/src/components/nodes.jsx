import React from 'react';
import Node from './node';

export default function Nodes() {
  const nodes = [];
  let count = 50;
  while (count < 75) {
    nodes.push(count);
    count += 2;
  }
  return nodes.map((n) => (
    <Node n={n} key={n} />
  ));
}
