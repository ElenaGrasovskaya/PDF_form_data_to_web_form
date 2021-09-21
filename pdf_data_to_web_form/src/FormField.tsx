import { Annotation } from "./PageDataInterface";
import { PageData } from "./PageDataInterface";
import { useState } from "react";

interface FormFieldProps {
  fieldData: Annotation;
  fieldNumber: number;
  key: string;
  pageN: number;
  allData: PageData;
}

function FormField(props: FormFieldProps) {
  const [fieldValue, setfieldValue] = useState<any>("");

  const handleInput = (e: any) => {
    setfieldValue(e.target.value);
  };

  interface PageDataStyles {
    input: React.CSSProperties;
  }
  const styles: PageDataStyles = {
    input: {
      position: "absolute",
      left: props.fieldData.rect[0],
      top: props.fieldData.rect[1],
      width: props.fieldData.rect[2],
      height: props.fieldData.rect[3],
      zIndex: 10,
      border: "none",
      opacity: 0.5,
    },
  };

  return (
    <>
      <input
        type={props.fieldData.widgetType}
        style={styles.input}
        id={props.fieldData.tooltipText}
        key={props.key}
        value={fieldValue}
        onChange={handleInput}
      />
    </>
  );
}

export default FormField;
