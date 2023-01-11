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

interface CharacterParsed {
  id: number;
  name: string;
  sprites: any;
  height?: number;
  weight?: number;
}

//

interface CharacterEntity {
  name: string;
  url: string;
}
