"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";

export default function Navbar() {
  const [links, setLinks] = useState([
    { name: "AAAGGG", active: false },
    { name: "BBB", active: false },
    { name: "CCC", active: false },
  ]);

  const router = useRouter();

  const updatePath = (index: number) => {
    router.push(`/?pageCard=${index + 1}`);
  };

  const handleLinkClick = (index: number) => {
    const updatedLinks = [...links];
    updatedLinks.forEach((link, i) => (link.active = i === index));
    setLinks(updatedLinks);
    updatePath(index);
  };

  return (
    <NavbarWrap className="flex flex-row items-center p-4 h-32">
      <NavbarLogo className="pl-6 basis-2/5">Logo</NavbarLogo>
      <NavbarLinks className="flex flex-row justify-items-start basis-3/5">
        {links.map((item, index) => (
          <div key={index} className="relative mx-2">
            <NavbarLink
              className="flex flex-row justify-center items-center cursor-pointer mx-4 w-16 z-10"
              onClick={() => handleLinkClick(index)}
            >
              {item.name}
            </NavbarLink>
            <LinkBlock active={item.active ? 1 : 0}></LinkBlock>
          </div>
        ))}
      </NavbarLinks>
    </NavbarWrap>
  );
}
const NavbarWrap = styled.div`
  position: relative;
  box-shadow: -1px 13px 20px -8px rgba(0, 0, 0, 0.1);
`;
const NavbarLogo = styled.div``;
const NavbarLinks = styled.div``;
const NavbarLink = styled.div``;

interface LinkBlockProps {
  active: number;
}
const LinkBlock = styled.div<LinkBlockProps>`
  position: absolute;
  width: 64px;
  height: 0px;
  background-color: #ffff37;
  bottom: 22px;
  transition: all 0.4s;
  ${NavbarLink}:hover + & {
    height: 120px;
  }
  height: ${(props) => (props.active ? "120px" : "0px")};
`;
