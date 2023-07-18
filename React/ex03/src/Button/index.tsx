interface btnprops{
    text: string;
}

export default function ({text}:btnprops){

    return(
        <button style={{
            backgroundColor: "rgb(78, 165, 202)",
            width: '8rem',
            height: '2rem',
            color: "#fff",
            textAlign: 'center',
            borderRadius: '.5rem',
            border: 'none',
            marginBottom: '.5rem'
        }}>
            {text}
        </button>
    )
}