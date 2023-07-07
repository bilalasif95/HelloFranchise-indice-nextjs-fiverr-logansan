import json
import openai

# Set up OpenAI API credentials
openai.api_key = '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'

# Open the JSON file
with open('common-1.json', 'r') as file:
    data = json.load(file)


# Iterate over each key-value pair in the JSON data
for key in data:
    # Translate the key to Dutch using OpenAI API
    response = openai.Completion.create(
        engine='text-davinci-003',
        prompt=f"Translate the following English phrase to Dutch: '{key}'\nDutch:"
               f"\n---\nEnglish: '{key}'\nDutch:",
        max_tokens=100,
        temperature=0.7,
        n=1,
        stop=None,
    )
    translation = response.choices[0].text.strip()
    # Update the value with the translated key
    data[key] = translation

# Save the modified JSON to a new file
output_file = 'common-1-dutch1.json'
with open(output_file, 'w') as file:
    json.dump(data, file, indent=4)

print(f"Modified JSON data saved to {output_file}")
