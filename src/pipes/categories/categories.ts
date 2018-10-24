import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categories',
})
export class CategoriesPipe implements PipeTransform {
  
  transform(value: number, ...args) {
    let result = "";
    const categories = [
      {
          "id": 19,
          "name": "3DS"
      },
      {
          "id": 220,
          "name": "3DS"
      },
      {
          "id": 91,
          "name": "Article"
      },
      {
          "id": 568,
          "name": "Avis public"
      },
      {
          "id": 14,
          "name": "C'est Chaud !"
      },
      {
          "id": 25,
          "name": "Communiqué de presse"
      },
      {
          "id": 22,
          "name": "Dossier"
      },
      {
          "id": 15,
          "name": "Economie"
      },
      {
          "id": 168,
          "name": "Jeux"
      },
      {
          "id": 290,
          "name": "Mobile"
      },
      {
          "id": 17,
          "name": "Mobile/tablette/PC"
      },
      {
          "id": 3,
          "name": "News"
      },
      {
          "id": 1,
          "name": "Nintendo Switch"
      },
      {
          "id": 169,
          "name": "Nintendo Switch"
      },
      {
          "id": 87,
          "name": "NintendoTownCast"
      },
      {
          "id": 89,
          "name": "Preview Nintendo Switch"
      },
      {
          "id": 88,
          "name": "Retour sur"
      },
      {
          "id": 4,
          "name": "Retro"
      },
      {
          "id": 2,
          "name": "Tests"
      },
      {
          "id": 8,
          "name": "Tests 3DS"
      },
      {
          "id": 115,
          "name": "Tests Chaud"
      },
      {
          "id": 95,
          "name": "Tests mobiles"
      },
      {
          "id": 90,
          "name": "Tests Nintendo Switch"
      },
      {
          "id": 20,
          "name": "Tests Retro"
      },
      {
          "id": 6,
          "name": "Tests Wii U"
      },
      {
          "id": 806,
          "name": "Tournois / Concours"
      },
      {
          "id": 125,
          "name": "Videos"
      },
      {
          "id": 24,
          "name": "Wii U"
      },
      {
          "id": 203,
          "name": "Wii U"
      }
    ]
    categories.forEach((item, index, array) => {
      if (value === item.id) {
        result = item.name;
      }
    });
    return result;
  }
}
