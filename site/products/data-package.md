---
title: Data Package
sidebar: false
description: A simple way of putting collections of data and their descriptions in one place so that they can be easily shared and used.
---

# {{ $page.frontmatter.title }}

**{{ $page.frontmatter.description }}**

---

![](./data-package-diagram.png)

---

![](../job-stories.png)

**Data Packages are useful because** consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

---

<label for="data-package-language">Choose your programming language:</label>
<select id="data-package-language">
	<option value="clojure">Clojure</option>
	<option value="go">Go</option>
	<option value="java">Java</option>
	<option value="javascript">Javascript</option>
	<option value="julia">Julia</option>
	<option value="matlab">MATLAB</option>
	<option value="php">PHP</option>
	<option value="python" selected>Python</option>
	<option value="r">R</option>
	<option value="ruby">Ruby</option>
</select>

```python
from datapackage import Package

package = Package('datapackage.json')
package.get_resource('resource').read()
```

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/lWHKVXxuci0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

[Full Specification](/specs/data-package)

[Tutorials](/blog/data-package)
