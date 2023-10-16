import requests
import json

global_list = []

allPokeResponse = requests.get("https://pokeapi.co/api/v2/pokemon")
allPokeResponseData = allPokeResponse.json()

# crear un objeto en pokemon por cada pokemon
# Llamar a api de cada uno y guardar la respuesta

for pokemon in allPokeResponseData["results"]:
    pokemonResponse = requests.get(pokemon["url"])
    pokemonData = pokemonResponse.json()

    obj = {
        'name': pokemon["name"],
        'image': pokemonData["sprites"].get("front_default"),
        'types': pokemonData["types"],
    }
    global_list.append(obj)

print(global_list)
# Write the list to a JSON file
with open('db.json', 'w') as json_file:
    json.dump(global_list, json_file)