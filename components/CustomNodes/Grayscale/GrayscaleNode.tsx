import { Handle, Position } from "react-flow-renderer";
import styles from "./GrayscaleNode.module.scss";

const GrayscaleNode = () => {
  return (
    <div className={styles.container}>
      <Handle
        type="target"
        position={Position.Left}
        className={styles.handle}
      />
      <div>Grayscale</div>
      <Handle
        type="source"
        position={Position.Right}
        className={styles.handle}
      />
    </div>
  );
};

export default GrayscaleNode;
