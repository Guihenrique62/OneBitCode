interface Pokemon{
    name: string,
    url: string
  }
  
  interface ResponsePokemon {
    abilities: [
      {
        ability: {
          name: string;
          url: string;
        };
        is_hidden: boolean;
      }
    ];
    base_experience: number;
    height: number;
    held_items: [];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: [];
    name: string;
    order: number;
    species: {};
    sprites: {
      front_default: string;
    };
    stats: [
      {
        base_stat: number;
        stat: {
          name: string;
          url: string;
        };
      }
    ];
    types: [
      {
        type: {
          name: string;
          url: string;
        };
        slot: number;
      }
    ];
    weight: number;
  }