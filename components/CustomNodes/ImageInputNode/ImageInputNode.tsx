import { Handle, Position } from "react-flow-renderer";
import styles from "./ImageInputNode.module.scss";

const ImageInputNode = ({ data }: { data: any }) => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>Image</div>
      <Handle
        type="source"
        position={Position.Right}
        className={styles.handle}
      />
    </div>
  );
};

export default ImageInputNode;
