import useFetch from "./hooks/useFetch";
import FormPageRender from "./FormPageRender";

function DocumentLoad(props: any) {
  let { data, loading, error } = useFetch(props.path);
  let renderArray: any = [];
  if (data && !loading) {
    data.pages.map((page: any, index: number) => {
      renderArray.push(<FormPageRender pageStatus={page} pageN={index} />);
      console.log("renderArray", renderArray);
    });

    return <>{renderArray}</>;
  } else {
    return <div>LOADING</div>;
  }
}

export default DocumentLoad;
