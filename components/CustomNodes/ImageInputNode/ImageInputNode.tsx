import { Handle, Position } from "react-flow-renderer";
import styles from "./ImageInputNode.module.scss";

const ImageInputNode = () => {
  return (
    <div className={styles.container}>
      Image
      <Handle
        type="source"
        position={Position.Right}
        className={styles.handle}
      />
    </div>
  );
};

export default ImageInputNode;
