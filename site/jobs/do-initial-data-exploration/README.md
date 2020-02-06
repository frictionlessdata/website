---
title: Do Initial Data Exploration
sidebar: false
tagline: Quickly understand the content and quality of a dataset.
description: When searching for datasets or just receiving one from a third party, you need quick ways of checking what it contains and evaluating the quality in general.
pain: Initially, you may do this with a Unix tool such as sed or open in Excel. Over time, you will want to have descriptive statistics and attribute descriptions directly in the data hub and in the terminal.
context: It's part of the task of starting to work with a new dataset.
---

<JobsDiagram selected="do-initial-data-exploration"></JobsDiagram>

## Examples

```
wc mydata.csv
grep "Rome" mydata.csv | wc
xsv mydata.csv
```

## Solutions

**DataHub**
It already provides simple visualizations for every dataset, right from the web.
 
**Data Curator**
Quickly analyze datasets in a simple desktop application.


<script>
import JobsDiagram from "@theme/components/JobsDiagram.vue";

export default {
  components: { JobsDiagram }
};
</script>
