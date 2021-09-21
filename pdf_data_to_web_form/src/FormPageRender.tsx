import React from "react";
import "./App.css";
import FormField from "./FormField";
import useFetch from "./hooks/useFetch";
interface OwnProps {
  pageN: number;
  pageStatus: any;
}

function FormPageRender(props: OwnProps) {
  console.log("The data is ready for render", props.pageStatus);
  let path: string = `pageInfo_${props.pageStatus.id}.json`;

  let { data, loading, error } = useFetch(path);

  console.log("NEW DATA", path, loading, error, data);

  let backgroundImageStyle: React.CSSProperties = {
    position: "absolute",
    top: props.pageN * props.pageStatus.height,
    left: "0",
    width: props.pageStatus.width,
    height: "100%",
    backgroundRepeat: "no-repeat",
    zIndex: 1,

    backgroundImage: `URL(${process.env.PUBLIC_URL}pagePng_${props.pageStatus.id}.png)`,
  };

  if (data && !loading) {
    return (
      <>
        <section style={backgroundImageStyle} key={data.pageId}>
          {data.annotations.map((item: any, index: number) => (
            <FormField
              fieldData={item}
              fieldNumber={index}
              key={item.id}
              pageN={props.pageN}
              allData={data}
            />
          ))}
        </section>
      </>
    );
  } else return null;
}
export default FormPageRender;
