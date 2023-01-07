interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
//

interface Result<Data> {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<Data>;
}

interface CharacterInfo {
  name: string;
  url: string;
}

//

interface CharacterEntity {
  name: string;
  url: string;
}

interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterEntity;
  location: CharacterEntity;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
