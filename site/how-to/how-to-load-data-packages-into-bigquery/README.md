# How to load Data Packages into BigQuery

[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1K5FqvkBvwruGOpyw_N8H7o9EKvZo7u7e)


---

**Intermediate | Python | Datapackage**

---
## Learning Goals
- Learn how to take an existing data package and import it into BigQuery
- This How-To assumes knowledge of how to create a [data package](TODO: add docs link) and how to use BigQuery


## Step 0: Installation

To load the data into BigQuery using Python, we will need the Table Schema BigQuery Storage library: https://github.com/frictionlessdata/tableschema-bigquery-py

You can install it as follows:


```python
!pip install tableschema-bigquery
```

## Step 1: Setup your project in BigQuery

Loading into BigQuery requires some setup on Google’s infrastructure, but once that is completed, loading data can be just as frictionless. Here are the steps to follow:

- Create a new project by going to this [link](https://console.cloud.google.com/iam-admin/projects)
- Create credentials for a new service account and generate a key using this [link](https://console.developers.google.com/apis/credentials). Don’t forget to grant it access to your new project.
- Download your new credentials as JSON and save as .credentials.json
- Create an empty dataset for your project using this [link](https://bigquery.cloud.google.com/welcome/) (note, we named this “dataset” for this tutorial)

*Note:* if you get lost, please read the BigQuery docs here for more help with the previous steps.

## Step 2: Import necessary libraries in Python


```python
import io
import os
import json
from tableschema import Table
from apiclient.discovery import build
from oauth2client.client import GoogleCredentials
```

## Step 3: Prepare your BigQuery credentials


```python
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'credentials.json' #where 'credentials.json' is your newly created credentials file
credentials = GoogleCredentials.get_application_default()
service = build('bigquery', 'v2', credentials=credentials)
project = json.load(io.open('credentials.json', encoding='UTF-8'))['project_id']
```

## Step 4: Load and save your table to BigQuery


```python
table = Table('data.csv', schema='schema.json')
table.save('data', storage='bigquery', service=service, project=project, dataset='dataset') # where 'dataset' is the name of your newly created empty dataset in BigQuery

```

*You can now inspect your dataset on BigQuery!*

## Related Reference Documentation
- https://github.com/frictionlessdata/tableschema-bigquery-py
- https://github.com/frictionlessdata/datapackage-py