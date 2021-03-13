import { Tag } from "antd";

const SymptomTag = ({ removeTag, symptom }) => {
  return (
    <Tag closable onClose={(e) => removeTag(e, symptom)}>
      {symptom}
    </Tag>
  );
};

export default SymptomTag;
