import { FC } from "react";
import { redirect } from "next/navigation";
import { ROUTES } from "@utils/constants";

const CollectiblesPage: FC = () => {
  return redirect(`${ROUTES.COLLECTIBLES}/1`);
};

export default CollectiblesPage;
