import React, { FC, useState } from "react";
import styles from "./styles.module.scss";
import { Icon } from "@iconify/react";

interface pack {
  name: string;
  subdomain: string;
}

interface Props {
  packs: pack[];
}

const DropMenu: FC<Props> = ({ packs }) => {
  const [showMenu, setShowMenu] = useState(false);

  const actionMenu = () => {
    return setShowMenu(!showMenu);
  };

  return (
    <div className={showMenu ? styles._dropMenu : styles._menu}>
      <div className={styles._title} onClick={() => actionMenu()}>
        <p>Packs</p>
        <a className={showMenu ? styles._hidden : styles._chevronDown}>
          <Icon icon="mdi:chevron-down" color="white" width={28} />
        </a>
        <a className={showMenu ? styles._chevronUp : styles._hidden}>
          <Icon icon="mdi:chevron-up" color="white" width={28} />
        </a>
      </div>
      <div className={showMenu ? styles._content : styles._hidden}>
        {packs?.map((pack, index) => (
          <div key={pack.name} className={styles._packs}>
            <a
              href={`https://${pack.subdomain}.bananacreative.io`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pack.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropMenu;
