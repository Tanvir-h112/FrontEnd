const variant = {
    primary: {
     backgroundColor: '#2196f3',
     color: '#fff',
    },
    success: {
     backgroundColor: '#4caf50',
     color: '#000',
 
    },
    info: {
     backgroundColor: '#01579b',
     color: '#fff',
    },
    warning: {
     backgroundColor: '#ff9800',
     color: '#fff',
    },
    error: {
     backgroundColor: '#ff3d00',
     color: '#000',
    },
 }
 
 const sizes = {
     small: {
         padding: '0.5rem 1rem',
     },
     medium: {
         padding: '1rem 2rem',
 
     },
     large:{
         padding: '1.5rem 3rem',
     },
 };
 
 
 const Button = (props)=> {
     const userVariant = variant[props.variant]
     const userSize = sizes[props.size]
 
 
     return <button type={props.type} style={{
         padding: '1rem 2rem',
         fontSize: '0.9rem',
         fontWeight: '700',
         border: 'none',
         marginRight: '1rem',
         marginTop: '1rem',
         cursor: 'pointer',
         borderRadius: '0.15rem',
         textTransform: "uppercase",
         letterSpacing: '1px',
         ...userVariant,
         ...userSize,
     }}
     >
         {props.text}
         </button>
 }

export default Button;