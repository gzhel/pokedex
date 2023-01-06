const getCollectibleById = async (id: number) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return res.json();
};

const CollectibleIdPage: () => Promise<JSX.Element> = async () => {
  const collectible = await getCollectibleById(1);

  return (
    <section>
      <h1>Collectible {collectible.name}</h1>
    </section>
  );
};

export default CollectibleIdPage;
