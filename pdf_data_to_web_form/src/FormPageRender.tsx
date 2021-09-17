import "./App.css";
import FormField from "./FormField";
import {PageData} from "./PageDataInterface";
interface SinglePageInfo {
  pageData: PageData;
  pageN: number;
};
function FormPageRender(props:SinglePageInfo) {
  console.log("The data is ready for render", props.pageData);
 
  
  let footerStyle:React.CSSProperties = {
    position: "absolute",
    top: props.pageN * 800,
    left: 0,
  };

  return (
    <><section key={props.pageData.pageId}>
      <img
        src={process.env.PUBLIC_URL + "logo.jpg"}
        style={{ position: "absolute", top: 0, left: 0 }} alt={"header"}
      />
      {props.pageData.annotations.map((item:any, index:number) => (
          <FormField
            fieldData={item}
            fieldNumber={index}
            key={item.id}
            pageN={props.pageN}
            allData={props.pageData}
          />
        ))}
      
      <img src={process.env.PUBLIC_URL + "footer.jpg"} style={footerStyle} alt={"footer"} />
      </section>
    </>
  )
};
export default FormPageRender;
