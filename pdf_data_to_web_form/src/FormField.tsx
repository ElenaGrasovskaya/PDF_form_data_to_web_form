import {Annotation} from './PageDataInterface';
import {PageData} from "./PageDataInterface";
import {useState} from "react";

interface FormFieldProps
{
  fieldData: Annotation,
  fieldNumber: number,
  key: string,
  pageN: number,
  allData: PageData

}

function FormField(props:FormFieldProps) {
  console.log(props.fieldData);
  const [fieldValue, setfieldValue] = useState<any>("");
  const handleInput = (e:any) => setfieldValue(e.target.value);



  interface PageDataStyles {
    input: React.CSSProperties,
    label: React.CSSProperties
  }
  const styles:PageDataStyles = {
    input: {
      position: "absolute",
      left: props.fieldData.rect[0],
      top: props.fieldData.rect[1],
      width: props.fieldData.rect[2] ,
      height: props.fieldData.rect[3],
      zIndex: 10,
      border:"none",
      opacity: 0.5
    },
    label: {
      position: "absolute",
      left: props.fieldData.rect[0],
      top: props.fieldData.rect[1], 
      width: props.fieldData.rect[2],
      height: props.fieldData.rect[3],
      
      fontFamily: "Helvetica",
      display: "block",
    },
  };
  if (typeof props.fieldData.tooltipText === "string") {
    if (
      props.fieldData.tooltipText.includes("Code_Row") ||
      props.fieldData.tooltipText.includes("Product") ||
      props.fieldData.tooltipText.includes("Unit") ||
      props.fieldData.tooltipText.includes("Qty_Row_") ||
      props.fieldData.tooltipText.includes("Total_Row") ||
      props.fieldData.tooltipText.includes("Total_Subtotal")
    ) {
      styles.label.display = "none";
    } else {
      styles.label.display = "block";
    }
  }

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

/*
<label
        htmlFor={props.fieldData.tooltipText}
        style={styles.label}
        key={props.key}
        
      >
        {props.fieldData.tooltipText}
      </label> */
