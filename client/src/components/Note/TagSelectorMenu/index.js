import React, { useState, useEffect } from "react";
import { Popover, Button, Image, Text } from "@mantine/core";
import {matchSorter} from "match-sorter";

const allowedTags = [
  {
    id: "page-title",
    tag: "h1",
    label: "Page Title",
  },
  {
    id: "heading",
    tag: "h2",
    label: "Heading",
  },
  {
    id: "subheading",
    tag: "h3",
    label: "Subheading",
  },
  {
    id: "paragraph",
    tag: "p",
    label: "Paragraph",
  },
  {
    id: "image",
    tag: "img",
    label: "Image",
  },
];

export default function TagSelectorMenu({
  position,
  closeMenu,
  handleSelection,
}) {
  const [tagList, setTagList] = useState(allowedTags);
  const [selectedTag, setSelectedTag] = useState(0);
  const [command, setCommand] = useState("");

  useEffect(() => {
    setTagList(matchSorter(allowedTags, command, { keys: ["tag"] }));
  }, [command]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSelection(tagList[selectedTag].tag);
      } else if (e.key === "Tab" || e.key === "ArrowDown") {
        e.preventDefault();
        const newSelectedTag =
          selectedTag === tagList.length - 1 ? 0 : selectedTag + 1;
        setSelectedTag(newSelectedTag);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const newSelectedTag =
          selectedTag === 0 ? tagList.length - 1 : selectedTag - 1;
        setSelectedTag(newSelectedTag);
      } else if (e.key === "Backspace") {
        if (command) {
          setCommand(command.slice(0, -1));
        } else {
          closeMenu();
        }
      } else {
        setCommand(command + e.key);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [tagList, selectedTag]);

  return (
    <Popover
      opened={closeMenu}
      position="bottom"
      placement="start"
      style={{ ...position }}
      classNames={{ body: "w-80 h-80 overflow-y-auto" }}
      spacing="xs"
      gutter={5}
    >
      {tagList.map((tag, key) => {
        return (
          <Button
            classNames={{ label: "w-full" }}
            key={key}
            data-tag={tag.tag}
            tabIndex="0"
            leftIcon={
              <Image
                style={{
                  borderRadius: 4,
                  boxShadow: "rgb(15 15 15 / 10%) 0px 0px 0px 1px",
                }}
                width={46}
                height={46}
                withPlaceholde={true}
                src="https://www.notion.so/images/blocks/text.9fdb530b.png"
              />
            }
            variant="default"
            fullWidth={true}
            className="border-0 h-auto py-1 pl-2"
            onClick={() => handleSelection(tag.tag)}
          >
            <div className="text-left">
              <Text size="sm">{tag.label}</Text>
              <Text size="xs" color="gray">
                bob@handsome.inc
              </Text>
            </div>
          </Button>
        );
      })}
    </Popover>
  );
}
