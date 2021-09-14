import "./App.css";
import FormField from "./FormField";
interface SinglePageInfo {
  pageData: any;
  pageN: number;
};
function FormPageRender(props:SinglePageInfo) {
  console.log("The data is ready for render", props.pageData.pageId);
 
  
  let footerStyle:React.CSSProperties = {
    position: "absolute",
    top: props.pageN * 800,
    left: 0,
  };

  return (
    <>
      <img
        src={process.env.PUBLIC_URL + "logo.jpg"}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <form>
        {props.pageData.annotations.map((item:any, index:number) => (
          <FormField
            fieldData={item}
            fieldNumber={index}
            key={(index + 100 * props.pageN).toString()}
            pageN={props.pageN}
          />
        ))}
      </form>
      <img src={process.env.PUBLIC_URL + "footer.jpg"} style={footerStyle} />
    </>
  )
};
export default FormPageRender;
