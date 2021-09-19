import "./App.css";
import FormField from "./FormField";
import { PageData } from "./PageDataInterface";
interface SinglePageInfo {
  pageData: PageData;
  pageN: number;
}
function FormPageRender(props: SinglePageInfo) {
  
  console.log("The data is ready for render", props.pageData);

  let backgroundImageStyle: React.CSSProperties = {
      position:"absolute",
      top: props.pageN*842,
      left: "0",
      width: "595px",
      height: "100%",
      backgroundRepeat: "no-repeat",
      zIndex: 1,

       backgroundImage:
      `URL(${process.env.PUBLIC_URL}pagePng_${props.pageData.pageId}.png)`
  };

  return (
    <>
      <section style={backgroundImageStyle} key={props.pageData.pageId}>
       
        {props.pageData.annotations.map((item: any, index: number) => (
          <FormField
            fieldData={item}
            fieldNumber={index}
            key={item.id}
            pageN={props.pageN}
            allData={props.pageData}
          />
        ))}
      </section>
    </>
  );
}
export default FormPageRender;
