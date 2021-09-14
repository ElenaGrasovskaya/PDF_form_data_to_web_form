import "./App.css";
import FormField from "./FormField";

function FormPageRender(props) {
  console.log("The data is ready for render", props.pageData.pageId);

  let footerStyle = {
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
        {props.pageData.annotations.map((item, index) => (
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
  );
}
export default FormPageRender;
