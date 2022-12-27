const InputGroup = (props)=> {
    const label = props.label;
    const type = props.type;
    const placeholder = props.placeholder;
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <label style={{
                fontFamily: 'arial',
                fontSize: '1rem',
                color: '#757575',
                margin: '0.5rem 0'
            }} htmlFor="email">

                {label}

            </label>
            <input style={{
                fontFamily: 'arial',
                fontSize: '0.8rem',
                color: '#757575',
                padding: '0.7rem',
                borderRadius: '0.5rem',
                border: '1px solid #ddd',
                outline: 'none',
                letterSpacing: '1px'
            }} type={type} id="email" placeholder={placeholder}/>
        </div>
    )
}

export default InputGroup;