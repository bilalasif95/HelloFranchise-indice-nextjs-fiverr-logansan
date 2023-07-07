import json
from googletrans import Translator

# Open the JSON file
with open('common-1.json', 'r') as file:
    data = json.load(file)

# Create a translator instance
translator = Translator()

# Iterate over each key-value pair in the JSON data
for key in data:
    # Translate the key to Dutch
    translation = translator.translate(key, src='en', dest='nl')
    # Update the value with the translated key
    data[key] = translation.text

# Save the modified JSON to a new file
output_file = 'common-1-dutch.json.json'
with open(output_file, 'w') as file:
    json.dump(data, file, indent=4)

print(f"Modified JSON data saved to {output_file}")
