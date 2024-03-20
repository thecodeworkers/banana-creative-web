import React, { FC, useState } from "react";
import styles from "./styles.module.scss";
import { Icon } from "@iconify/react";
import useTranslation from "next-translate/useTranslation";
import data from '../../content/data'

interface pack {
  name: string;
  subdomain: string;
}

interface Props {
  title: string;
  packs: pack[];
}

const DropMenu: FC<Props> = ({ title, packs }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { t } = useTranslation("common");

  const actionMenu = () => {
    return setShowMenu(!showMenu);
  };

  const menu = data.navbar.packNav

  return (
    <div className={showMenu ? styles._dropMenu : styles._menu}>
      <button className={styles._title} onClick={() => actionMenu()}>
        <p>{t(`${menu.title}`)}</p>
        <span className={showMenu ? styles._hidden : styles._chevronDown}>
          <Icon icon="mdi:chevron-down" color="white" width={28} />
        </span>
        <span className={showMenu ? styles._chevronUp : styles._hidden}>
          <Icon icon="mdi:chevron-up" color="white" width={28} />
        </span>
      </button>
      <div className={showMenu ? styles._content : styles._hidden}>
        {menu.packs?.map((pack, index) => (
          <a
            key={pack.name}
            className={styles._packs}
            href={`https://${pack.subdomain}.bananacreative.io`}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {pack.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DropMenu;
