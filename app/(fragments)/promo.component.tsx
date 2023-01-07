import { Typography } from "@typography/typography";
import s from "./promo.module.scss";
import cn from "classnames";

const PromoDescription = () => {
  return (
    <div className={s.layout}>
      <Typography
        tag={"h1"}
        variant={"promoBig"}
        className={cn(s.text, s.promoBig)}
      >
        Pokemon collectibles
      </Typography>
      <Typography tag={"h2"} variant={"promoSmall"} className={s.text}>
        コレクション全体を集めよう！
      </Typography>
      <Typography tag={"p"} variant={"textBig"} className={s.text}>
        Welcome to our website for Pokemon collectible cards. Explore our
        collection of cards from the beloved series, including rare and
        hard-to-find cards. Stay up to date with new releases and discover
        something new every time you visit. Thank you for choosing us to view
        and learn about your favorite Pokemon cards.
      </Typography>
    </div>
  );
};

export default PromoDescription;
