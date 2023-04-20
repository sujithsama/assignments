import pandas as pd
import numpy as np
//import seaborn as sns
import matplotlib.pyplot as plt

# Load the dataset into a pandas DataFrame
data = pd.read_csv('D:\DOWNLOADS/OnlineRetail.csv', encoding='unicode_escape')

# Print the first 5 rows of the DataFrame
print(data.head())

# Group the data by product and count the number of times each product appears in the dataset
product_counts = data.groupby('Description')['Quantity'].sum()

# Sort the products by the number of times they appear in the dataset
sorted_products = product_counts.sort_values(ascending=False)

# Print the top 10 most commonly purchased products
print(sorted_products.head(10))

# Plot a histogram of the product purchases
plt.hist(product_counts, bins=50)
plt.xlabel('Number of Purchases')
plt.ylabel('Number of Products')
plt.show()

# Pivot the data to create a user-product matrix
user_product_matrix = data.pivot_table(index='Customer ID', columns='Description', values='Quantity', fill_value=0)

# Print the first 5 rows of the user-product matrix
print(user_product_matrix.head())

# Visualize the user-product matrix using a heatmap
sns.heatmap(user_product_matrix, cmap='Blues')
plt.show()

# Pivot the data to create a product-user matrix
product_user_matrix = data.pivot_table(index='Description', columns='Customer ID', values='Quantity', fill_value=0)

# Print the first 5 rows of the product-user matrix
print(product_user_matrix.head())

# Compute the cosine similarity between products
from sklearn.metrics.pairwise import cosine_similarity

product_similarity = cosine_similarity(product_user_matrix.T)

# Get the most similar products to a given product
product_idx = 0  # Index of the product to find similar products for
similar_products = list(product_user_matrix.columns[np.argsort(-product_similarity[product_idx])])[1:]

# Print the most similar products
print(similar_products[:5])

# Compute the cosine similarity between users
user_similarity = cosine_similarity(user_product_matrix)

# Get the most similar users to a given user
user_idx = 0  # Index of the user to find similar users for
similar_users = list(user_product_matrix.index[np.argsort(-user_similarity[user_idx])])[1:]

# Print the most similar users
print(similar_users[:5])
