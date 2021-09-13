function FormField(props)

{
    console.log(props.fieldData);
        const styles = {
        input: {
            position: 'absolute',
            left: props.fieldData.rect[0],
            top: props.fieldData.rect[1] + props.pageN*700,
            width: props.fieldData.rect[2],
            height: props.fieldData.rect[3],
            border: 'solid 1px light-grey',
            
         
        },
        label: {
            position: 'absolute',
            left: props.fieldData.rect[0],
            top: props.fieldData.rect[1] -20 + props.pageN*700,
            width: props.fieldData.rect[2],
            height: props.fieldData.rect[3]
            
        }
      } 

    return(
        <>
            <label htmlFor = {props.fieldData.tooltipText} style={styles.label} key={props.fieldNumber.toString()}>{props.fieldData.tooltipText}</label> 
            <input type = {props.fieldData.widgetType} style={styles.input} id={props.fieldData.tooltipText} key={props.fieldNumber.toString()} />
           
        </>

    );
}

export default FormField;