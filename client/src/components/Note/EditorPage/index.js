import React, { useState, useEffect } from "react";
import { Banner } from "@douyinfe/semi-ui";
import usePrevious from "../../../hooks/usePrevious";
import EditorBlock from "../EditorBlock";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import objectId from "../../../commons/objectId";
export default function EditorPage({ id, fetchedBlocks, err }) {
  const [blocks, setBlocks] = useState(fetchedBlocks);
  const [currentBlockId, setCurrentBlockId] = useState(null);
  const prevBlocks = usePrevious(blocks);
  if (err) {
    return (
      <Banner
        className="h-8 flex items-center justify-between"
        type="danger"
        icon={null}
        description="Something went wrong 💔. Have you tried to restart the app at '/' ?"
      />
    );
  }
  const addBlockHandler = (currentBlock) => {
    setCurrentBlockId(currentBlock.id);
    const index = blocks.map((block) => block.id).indexOf(currentBlock.id);
    const updatedBlocks = [...blocks];
    const newBlock = { id: objectId(), tag: "p", html: "", imageUrl: "" };
    updatedBlocks.splice(index + 1, 0, newBlock);
    updatedBlocks[index] = {
      ...updatedBlocks[index],
      tag: currentBlock.tag,
      html: currentBlock.html,
      imageUrl: currentBlock.imageUrl,
    };
    setBlocks(updatedBlocks);
  };

  const updateBlockHandler = (currentBlock) => {
    const index = blocks.map((block) => block.id).indexOf(currentBlock.id);
    const oldBlock = blocks[index];
    const updatedBlocks = [...blocks];
    updatedBlocks[index] = {
      ...updatedBlocks[index],
      tag: currentBlock.tag,
      html: currentBlock.html,
      imageUrl: currentBlock.imageUrl,
    };
    setBlocks(updatedBlocks);
    //If the image has been changed, we have to delete the old image file on the server
    if (oldBlock.imageUrl && oldBlock.imageUrl !== currentBlock.imageUrl) {
      // const formData = new FormData();
      // formData.append("imageUrl", oldBlock.imageUrl);
      // fetch(`/api/v1/delete-image`, {
      //   method: "POST",
      //   body: formData,
      // });
      // deleteImageOnServer(oldBlock.imageUrl);
    }
  };

  const deleteBlockHandler = (currentBlock) => {
    if (blocks.length > 1) {
      setCurrentBlockId(currentBlock.id);
      const index = blocks.map((block) => block.id).indexOf(currentBlock.id);
      const deletedBlock = blocks[index];
      const updatedBlocks = [...blocks];
      updatedBlocks.splice(index, 1);
      setBlocks(updatedBlocks);
      //If the image has been changed, we have to delete the old image file on the server
      if (deletedBlock.tag === "image" && deletedBlock.imageUrl) {
        // const formData = new FormData();
        // formData.append("imageUrl", deletedBlock.imageUrl);
        // fetch(`/api/v1/delete-image`, {
        //   method: "POST",
        //   body: formData,
        // });
        // deleteImageOnServer(deletedBlock.imageUrl);
      }
    }
  };

  const onDragEndHandler = (result) => {
    const { destination, source } = result;
    //If we don't have a destination (due to dropping outside the droppable area)
    // or the destination hasn't changed, we don't have to do anything
    if (!destination || destination.index === source.index) {
      return;
    }
    const updatedBlocks = [...blocks];
    const removedBlocks = updatedBlocks.splice(source.index - 1, 1);
    updatedBlocks.splice(destination.index - 1, 0, removedBlocks[0]);
    setBlocks(updatedBlocks);
  };

  // const isNewPublicPage = router.query.public === "true";

  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <Droppable droppableId={id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {blocks.map((block, index) => {
              const position = blocks.map((b) => b.id).indexOf(block.id) + 1;
              return (
                <EditorBlock
                  key={block.id}
                  position={position}
                  id={block.id}
                  tag={block.tag}
                  html={block.html}
                  imageUrl={block.imageUrl}
                  pageId={id}
                  addBlock={addBlockHandler}
                  deleteBlock={deleteBlockHandler}
                  updateBlock={updateBlockHandler}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
