import EmojiPicker from 'emoji-picker-react';
import Draggable from 'react-draggable'; 

const EmojiContainer = ({ handleOnEmojiClick }) => {
  return (
    <Draggable> 
      <div 
        style={{ 
          position: "absolute",
          top: "50px",
          right: "250px",
          zIndex: 100,
          width: "245px",
          backgroundColor: "white",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
          cursor: "grab"
        }} 
        >
        <EmojiPicker
          onEmojiClick={handleOnEmojiClick}
        />
      </div>
    </Draggable>
  );
};

export default EmojiContainer;

