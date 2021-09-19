import React from "react";
import "./App.css";
import FormField from "./FormField";
import { PageData } from "./PageDataInterface";
import { useState } from "react";
interface OwnProps {
  pageData: PageData;
  pageN: number;
  pageStatus: any;
}
function FormPageRender(props: OwnProps) {
  console.log("The data is ready for render", props.pageData, props.pageStatus);
  const [formData, setFormData] = useState<any>("");
  let AllFieldData: any = [];

  const getAllFormData = (e: any) => {
    e.preventDefault();
    setFormData(AllFieldData);
    alert(AllFieldData);
    console.log("AllFieldData", AllFieldData);
    };

  const formFieldCallback = (fieldData: any) => {
    console.log("formFieldCallback",AllFieldData);
    AllFieldData.push(fieldData);
  };

  let backgroundImageStyle: React.CSSProperties = {
    position: "absolute",
    top: props.pageN * 842,
    left: "0",
    width: "595px",
    height: "100%",
    backgroundRepeat: "no-repeat",
    zIndex: 1,

    backgroundImage: `URL(${process.env.PUBLIC_URL}pagePng_${props.pageData.pageId}.png)`,
  };

  let submitDisplay: React.CSSProperties = {
    display: "none",
    zIndex: 50,
    position:"absolute",
    top: 0,
    left: 600
  };

  if (props.pageN === 0)
    submitDisplay.display = "block";
  else submitDisplay.display = "none";

  return (
    <>

      <section style={backgroundImageStyle} key={props.pageData.pageId}>
      <input
        type="submit"
        style={submitDisplay}
        onSubmit={getAllFormData}
      ></input>
        {props.pageData.annotations.map((item: any, index: number) => (
          <FormField
            fieldData={item}
            fieldNumber={index}
            key={item.id}
            pageN={props.pageN}
            allData={props.pageData}
            callback={formFieldCallback}
          />
        ))}
      </section>
    </>
  );
}
export default FormPageRender;
