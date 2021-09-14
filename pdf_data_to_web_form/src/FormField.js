function FormField(props)

{
    console.log(props.fieldData);
        const styles = {
        input: {
            position: 'absolute',
            left: props.fieldData.rect[0],
            top: props.fieldData.rect[1] + props.pageN*800,
            width: props.fieldData.rect[2]-2,
            height: props.fieldData.rect[3],
            border: 'solid 2px #AAA',
            
         
        },
        label: {
            position: 'absolute',
            left: props.fieldData.rect[0],
            top: props.fieldData.rect[1] -20 + props.pageN*800,
            width: props.fieldData.rect[2]-2,
            height: props.fieldData.rect[3],
            fontFamily: 'Helvetica',
            display: 'block'
            
            
        }
      } 
      if((typeof props.fieldData.tooltipText)==="string" ){
        if (props.fieldData.tooltipText.includes("Code_Row")||props.fieldData.tooltipText.includes("Product")
        ||props.fieldData.tooltipText.includes("Unit")||props.fieldData.tooltipText.includes("Qty_Row_")
        ||props.fieldData.tooltipText.includes("Total_Row")||props.fieldData.tooltipText.includes("Total_Subtotal"))
      {
          styles.label.display = 'none';
      }
      else
      {
          styles.label.display = 'block';
      }
    }


    return(
        <> 
            <label htmlFor = {props.fieldData.tooltipText} style={styles.label} key={(props.fieldNumber+10000).toString()}>{props.fieldData.tooltipText}</label> 
            <input type = {props.fieldData.widgetType} style={styles.input} id={props.fieldData.tooltipText} key={(props.fieldNumber+20000).toString()} />
           
        </>

    );
}

export default FormField;