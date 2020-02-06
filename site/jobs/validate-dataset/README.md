---
title: Validate Dataset
sidebar: false
tagline: Check syntax and structure of data against a schema.
description: When relying on external sources, you need to ensure a dataset remains valid over time.
pain: Initially, you may do validation by hand or in a simple script. Over time, the Frictionless Data-way is to declare expectations in a file and have a library to continuously verify that for you.
context: It becomes a requirements when external changes often breaks your pipeline.
---

<div class="jobs-diagram" style="height: 280px"></div>
<script>
const gridSize = [8, 3];
const titlesAndURLs = [
  ["", undefined],
  ["", undefined],
  ["", undefined],
  ["", undefined],
  ["Document Dataset", "/jobs/document-dataset/"],
  ["", undefined],
  ["Have a Data Hub", "/jobs/have-a-data-hub/"],
  ["", undefined],
  ["Find Datasets", "/jobs/find-datasets/"],
  ["Pull Dataset", "/jobs/pull-dataset/"],
  ["Version Dataset", "/jobs/version-dataset/"],
  ["Validate Dataset", "/jobs/validate-dataset/"],
  ["Pipeline\nTransformations", "/jobs/pipeline-transformations/"],
  ["Publish Dataset", "/jobs/publish-dataset/"],
  ["Do Analysis &\nMachine Learning", "/jobs/do-analysis-and-machine-learning/"],
  ["Scale Scope", "/jobs/scale-scope/"],
  ["Data Audit", "/jobs/data-audit/"],
  ["Do Initial\nData Exploration", "/jobs/do-initial-data-exploration/"],
  ["Quickly\nEdit Dataset", "/jobs/quickly-edit-dataset/"],
  ["Store Dataset", "/jobs/store-dataset/"],
  ["Data API", "/jobs/data-api/"],
  ["Create\nVisualization", "/jobs/create-visualization/"],
  ["Orchestrate\nData Platform", "/jobs/orchestrate-data-platform/"],
  ["Scale Size", "/jobs/scale-size/"],
  ["", undefined],
  ["", undefined],
  ["", undefined],
  ["", undefined],
  ["", undefined],
  ["", undefined],
  ["", undefined],
  ["", undefined]
];
const draw = SVG(document.body.querySelector(".jobs-diagram"));
const Hex = Honeycomb.extendHex({
  size: 52,
  orientation: "flat",
  currentIndex() {
    const position = this.toPoint();
    const hexPos = Grid.pointToHex([position.x, position.y]);
    return hexPos.x + 1 + (hexPos.y + 1) * gridSize[0];
  },
  render(draw) {
    const { x, y } = this.toPoint();
    const position = this.toPoint();
    const centerPosition = this.center().add(position);
    const hexPos = Grid.pointToHex([position.x, position.y]);
    const corners = this.corners();
    const index = this.currentIndex();
    let stroke = { width: 1, color: "#999" };
    if (titlesAndURLs[index][0] === "") {
      stroke = {};
    }
    this.draw = draw
      .polygon(corners.map(({ x, y }) => `${x},${y}`))
      .fill("none")
      .stroke(stroke)
      .translate(x, y);
    const fontSize = 10;
    const title = titlesAndURLs[index][0];
    const yPosition = title.includes("\n")
      ? centerPosition.y - fontSize * 2
      : centerPosition.y - fontSize;
    draw
      .text(title)
      .font({
        size: fontSize,
        anchor: "middle",
        leading: 1.4,
        fill: "#1A98FF"
      })
      .translate(centerPosition.x, yPosition);
  },
  openAnchor() {
    const index = this.currentIndex();
    if (titlesAndURLs[index][0] === "") {
      return;
    }
    window.open(titlesAndURLs[index][1]);
  },
  highlight() {
    const index = this.currentIndex();
    if (titlesAndURLs[index][0] === "") {
      return;
    }
    this.draw
      .stop(true, true)
      .fill({ opacity: 0.2, color: "#6a8bad" })
      .animate(1000)
      .fill({ opacity: 0, color: "none" });
  }
});
const Grid = Honeycomb.defineGrid(Hex);
const grid = Grid.rectangle({
  width: gridSize[0],
  height: gridSize[1],
  onCreate(hex) {
    hex.render(draw);
  }
});
document.addEventListener("click", ({ offsetX, offsetY }) => {
  const hexCoordinates = Grid.pointToHex([offsetX, offsetY]);
  const hex = grid.get(hexCoordinates);
  if (hex) {
    hex.openAnchor();
  }
});
document.addEventListener("mouseover", ({ offsetX, offsetY }) => {
  const hexCoordinates = Grid.pointToHex([offsetX, offsetY]);
  const hex = grid.get(hexCoordinates);
  if (hex) {
    hex.highlight();
  }
});
</script>

## Examples

```
for row in mydata:
  if not validDate(row[0]):
    log("Bad data:" + row[0]
```

## Solutions

**Table Schema**
It's an implementation-agnostic way to declare a schema for tabular data.
 
**GoodTables**
It validates if a dataset complies to a Table Schema.
 
**Data Quality Dashboard**
It builds on top of GoodTables to provide a dashboard showing the state of multiple datasets.
