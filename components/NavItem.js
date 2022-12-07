import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

function NavItem({ item, menuHandler }) {
  const { pathname } = useRouter();
  const isSelected = pathname === item.path;

  return (
    <>
      {isSelected ? (
        <Selected>{item.name}</Selected>
      ) : (
        <Link href={item.path}>
          <LinkNav
            onClick={menuHandler}
            whileHover={{ x: 10, color: "#ff5733" }}
            transition={{ ease: "easeInOut" }}
          >
            {item.name}
          </LinkNav>
        </Link>
      )}
    </>
  );
}

const LinkNav = styled(motion.div)`
  font-size: 30px;
  font-weight: 500;
  cursor: pointer;
  margin: 16px 0;
  user-select: none;
`;
const Selected = styled(motion.div)`
  font-size: 30px;
  font-weight: 600;
  cursor: auto;
  margin: 16px 0;
  color: #b8b8b8;
  user-select: none;
`;

export default NavItem;
