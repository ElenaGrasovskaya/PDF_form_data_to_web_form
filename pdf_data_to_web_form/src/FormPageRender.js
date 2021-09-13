import './App.css';
import FormField from './FormField';


function FormPageRender(props) {
    console.log("The data is ready for render", props.pageData.pageId )
   
    console.log("pageNumber", props.pageN);

    return(
        <>
        <form>

        {props.pageData.annotations.map((item, index) => (
            <FormField fieldData = {item} fieldNumber = {index} key={(index+100*props.pageN).toString()} pageN = {props.pageN}/>
        ))}

        </form>
        </>

    );


}
export default FormPageRender;