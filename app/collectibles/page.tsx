import { FC } from "react";
import { redirect } from "next/navigation";

const CollectiblesPage: FC = () => {
  return redirect("/collectibles/1");
};

export default CollectiblesPage;
