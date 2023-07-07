import json

# Open the JSON file
with open('common-1.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# Iterate over each key-value pair in the JSON data
for key in data:
    # Update the value with the key
    data[key] = key

# Save the modified JSON back to the file
with open('common-1.json', 'w') as file:
    json.dump(data, file, indent=4)
